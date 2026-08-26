#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Đọc một folder bitmap màu (bảng mẫu An Cường...) → CSV bảng neo vật liệu.

Giả định: **một ảnh = một mã**, và **tên file có chứa mã**.

Dùng:
    pip install pillow numpy
    python3 tools/doc-bang-mau.py <folder> --dry-run            # kiểm parse mã trước
    python3 tools/doc-bang-mau.py <folder> --out bang-neo.csv
    python3 tools/doc-bang-mau.py <folder> --white-ref giay-trang.jpg --out bang-neo.csv

CSV xuất ra dùng thẳng được với tools/tinh-lrv.py.

⚠️ Hex đo từ ảnh là màu TƯƠNG ĐỐI: ảnh chụp bảng mẫu mang theo nhiệt độ đèn lúc chụp.
So sánh giữa các mã trong cùng một folder thì tin được; so với mã hãng ngoài folder thì không.
"""

import argparse
import csv
import importlib.util
import re
import sys
from pathlib import Path

try:
    import numpy as np
    from PIL import Image
except ImportError:
    sys.exit("Thiếu thư viện. Chạy:  pip install pillow numpy")

# ── Ngưỡng — chỉnh ở đây sau khi chạy trên bộ ảnh thật ────────────────────────
NGUONG_GO = 8.0            # spread LRV (p90−p10) lớn hơn mức này → coi là vân gỗ
NGUONG_SOLID = 4.0         # nhỏ hơn mức này → coi là màu trơn; ở giữa → "?" soi tay
NGUONG_UNDERTONE_B = 2.0   # |b*| trong CIELAB: vượt mức này mới gọi là ấm/lạnh
TY_LE_CHAY_SANG = 0.01     # >1% điểm ảnh chạm 255 → màu đo được đã sai
LRV_QUA_TOI = 5.0
CHENH_HAI_CUM = 25.0       # hai cụm sáng cách nhau quá mức này → nghi ảnh nhiều ô
TY_LE_CUM_TOI_THIEU = 0.20
DOI_CUM_TOI_DA = 2         # ô màu nằm liền mảnh; vân gỗ đan xen thì vượt xa mức này
MAX_DIEM_ANH = 1_000_000   # lấy mẫu thưa cho ảnh lớn (lấy thưa, KHÔNG resize —
                           # resize làm nhoè vân, biên độ đo được sẽ nhỏ đi giả tạo)

DUOI_ANH = {".jpg", ".jpeg", ".png", ".tif", ".tiff", ".bmp", ".webp"}

COT = ["o", "ma", "ten", "nhom", "hex", "bien_do_van", "undertone", "be_mat",
       "ten_trong_kujiale", "ghi_chu",
       "lrv", "lrv_p10", "lrv_p90", "lab_a", "lab_b", "wb", "file"]


def _nap_ham_lrv():
    """Mượn đúng hàm lrv() của tinh-lrv.py — hai công cụ phải ra cùng một số."""
    duong_dan = Path(__file__).with_name("tinh-lrv.py")
    spec = importlib.util.spec_from_file_location("tinh_lrv", duong_dan)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.lrv


lrv_tu_hex = _nap_ham_lrv()


# ── Chuyển đổi màu ───────────────────────────────────────────────────────────

def sang_tuyen_tinh(a):
    """sRGB 0–1 → linear light. Mọi phép trung bình phải làm ở không gian này."""
    return np.where(a <= 0.04045, a / 12.92, ((a + 0.055) / 1.055) ** 2.4)


def ve_srgb(a):
    a = np.clip(a, 0.0, 1.0)
    return np.where(a <= 0.0031308, a * 12.92, 1.055 * a ** (1 / 2.4) - 0.055)


def do_sang_tuong_doi(rgb_tuyen_tinh):
    """Hệ số WCAG — giống hệt tinh-lrv.py, chỉ khác là chạy trên cả mảng."""
    return (0.2126 * rgb_tuyen_tinh[..., 0]
            + 0.7152 * rgb_tuyen_tinh[..., 1]
            + 0.0722 * rgb_tuyen_tinh[..., 2])


def sang_lab(rgb_tuyen_tinh):
    """linear sRGB → CIELAB (D65). a* âm = ngả lá, dương = ngả hồng;
    b* âm = ngả xanh dương (lạnh), dương = ngả vàng (ấm)."""
    m = np.array([[0.4124, 0.3576, 0.1805],
                  [0.2126, 0.7152, 0.0722],
                  [0.0193, 0.1192, 0.9505]])
    xyz = m @ np.asarray(rgb_tuyen_tinh, dtype=float)
    diem_trang = np.array([0.95047, 1.0, 1.08883])
    t = xyz / diem_trang
    delta = 6 / 29
    f = np.where(t > delta ** 3, np.cbrt(t), t / (3 * delta ** 2) + 4 / 29)
    return 116 * f[1] - 16, 500 * (f[0] - f[1]), 200 * (f[1] - f[2])


def sang_hex(rgb_tuyen_tinh):
    r, g, b = (int(round(float(x) * 255)) for x in ve_srgb(np.array(rgb_tuyen_tinh)))
    return f"#{r:02X}{g:02X}{b:02X}"


# ── Đọc ảnh ──────────────────────────────────────────────────────────────────

def doc_anh(duong_dan):
    with Image.open(duong_dan) as im:
        return np.asarray(im.convert("RGB"), dtype=np.uint8)


def cat_giua(mang, ty_le):
    h, w = mang.shape[:2]
    ch, cw = int(h * ty_le), int(w * ty_le)
    y, x = (h - ch) // 2, (w - cw) // 2
    return mang[y:y + ch, x:x + cw]


def lay_thua(mang):
    """Giữ nguyên từng điểm ảnh, chỉ bỏ bớt — để biên độ vân không bị làm nhoè."""
    so_diem = mang.shape[0] * mang.shape[1]
    if so_diem <= MAX_DIEM_ANH:
        return mang
    buoc = int(np.ceil(np.sqrt(so_diem / MAX_DIEM_ANH)))
    return mang[::buoc, ::buoc]


def so_lan_doi_cum(mat_na):
    """Số lần đổi cụm trung bình trên một hàng và trên một cột."""
    theo_hang = float((np.diff(mat_na.astype(np.int8), axis=1) != 0).sum(axis=1).mean())
    theo_cot = float((np.diff(mat_na.astype(np.int8), axis=0) != 0).sum(axis=0).mean())
    return theo_hang, theo_cot


def nguong_otsu(gia_tri):
    """Tách hai cụm sáng — dùng để nghi ảnh chứa nhiều ô màu."""
    hist, canh = np.histogram(gia_tri, bins=64, range=(0, 100))
    tong = hist.sum()
    if tong == 0:
        return None
    p = hist / tong
    giua = (canh[:-1] + canh[1:]) / 2
    w0 = np.cumsum(p)
    w1 = 1 - w0
    mu0 = np.cumsum(p * giua) / np.maximum(w0, 1e-9)
    mu_tong = (p * giua).sum()
    mu1 = (mu_tong - np.cumsum(p * giua)) / np.maximum(w1, 1e-9)
    giua_cum = w0 * w1 * (mu0 - mu1) ** 2
    i = int(np.argmax(giua_cum))
    return giua[i], w0[i], mu0[i], mu1[i]


# ── Đo một tấm mẫu ───────────────────────────────────────────────────────────

def do_mot_anh(duong_dan, ty_le_cat, he_so_wb):
    goc = doc_anh(duong_dan)
    vung = lay_thua(cat_giua(goc, ty_le_cat))

    chay_sang = float((vung == 255).any(axis=-1).mean())

    tuyen_tinh = sang_tuyen_tinh(vung.astype(np.float64) / 255.0)
    if he_so_wb is not None:
        tuyen_tinh = np.clip(tuyen_tinh * he_so_wb, 0.0, 1.0)

    y = do_sang_tuong_doi(tuyen_tinh) * 100.0
    p10, p50, p90 = (float(v) for v in np.percentile(y, [10, 50, 90]))
    trung_binh_kenh = tuyen_tinh.reshape(-1, 3).mean(axis=0)

    ma_hex = sang_hex(trung_binh_kenh)
    _l, sao_a, sao_b = sang_lab(trung_binh_kenh)

    canh_bao = []
    if chay_sang > TY_LE_CHAY_SANG:
        canh_bao.append(f"⚠️ cháy sáng {chay_sang:.0%} — màu đo được đã sai")
    if float(y.mean()) < LRV_QUA_TOI:
        canh_bao.append("⚠️ ảnh quá tối — kiểm lại phơi sáng lúc chụp")

    tach = nguong_otsu(y)
    if tach:
        nguong, ty_le_cum_toi, tb_toi, tb_sang = tach
        hai_cum = (abs(tb_sang - tb_toi) > CHENH_HAI_CUM
                   and TY_LE_CUM_TOI_THIEU < ty_le_cum_toi < 1 - TY_LE_CUM_TOI_THIEU)
        # Hai cụm sáng thôi thì CHƯA đủ: vân gỗ sọc mạnh cũng tách thành hai cụm.
        # Khác nhau ở chỗ nằm liền mảnh hay đan xen — đếm số lần đổi cụm trên mỗi
        # hàng và mỗi cột. Ảnh hai ô đổi 0–1 lần cả hai chiều; vân gỗ đổi hàng chục lần.
        if hai_cum and max(so_lan_doi_cum(y > nguong)) <= DOI_CUM_TOI_DA:
            canh_bao.append("⚠️ nghi ảnh nhiều ô — soi tay, có thể phá giả định 1 ảnh = 1 mã")

    bien_do = (p90 - p10) / 2.0
    spread = p90 - p10
    if spread > NGUONG_GO:
        nhom = "go"
    elif spread < NGUONG_SOLID:
        nhom = "solid"
    else:
        nhom = "?"
        canh_bao.append("⚠️ ranh giới gỗ/solid — cần soi tay")

    if sao_b > NGUONG_UNDERTONE_B:
        undertone = "am"
    elif sao_b < -NGUONG_UNDERTONE_B:
        undertone = "lanh"
    else:
        undertone = "trung"

    # nền quanh mép ảnh trắng đều → nhiều khả năng là file quét/xuất từ catalogue số
    vien = np.concatenate([goc[:8].reshape(-1, 3), goc[-8:].reshape(-1, 3),
                           goc[:, :8].reshape(-1, 3), goc[:, -8:].reshape(-1, 3)])
    y_vien = do_sang_tuong_doi(sang_tuyen_tinh(vien.astype(np.float64) / 255.0)) * 100
    nen_trang = float((y_vien > 90).mean()) > 0.6

    return {
        "hex": ma_hex, "lrv": float(y.mean()), "lrv_p10": p10, "lrv_p90": p90,
        "lrv_p50": p50, "bien_do": bien_do, "nhom": nhom, "undertone": undertone,
        "lab_a": float(sao_a), "lab_b": float(sao_b),
        "canh_bao": canh_bao, "nen_trang": nen_trang,
    }


def tinh_he_so_wb(duong_dan, ty_le_cat):
    """Từ ảnh tờ giấy trắng chụp cùng buổi → hệ số từng kênh, giữ nguyên độ sáng."""
    vung = lay_thua(cat_giua(doc_anh(duong_dan), ty_le_cat))
    tb = sang_tuyen_tinh(vung.astype(np.float64) / 255.0).reshape(-1, 3).mean(axis=0)
    if (tb <= 0).any():
        raise ValueError("ảnh tham chiếu quá tối, không tính được cân bằng trắng")
    return tb.mean() / tb


# ── Tên file → mã ────────────────────────────────────────────────────────────

REGEX_MAC_DINH = r"^([A-Za-z0-9]+)"


def tach_ma(ten_file, regex):
    goc = Path(ten_file).stem
    khop = re.search(regex, goc)
    if not khop:
        return "", goc.replace("_", " ").replace("-", " ").strip()
    ma = khop.group(1) if khop.groups() else khop.group(0)
    phan_con_lai = goc[khop.end():].lstrip(" _-")
    return ma, phan_con_lai.replace("_", " ").replace("-", " ").strip()


def main():
    ap = argparse.ArgumentParser(
        description="Đọc folder bitmap màu → CSV bảng neo vật liệu (Phụ lục F.7)")
    ap.add_argument("folder", help="thư mục chứa ảnh, một ảnh = một mã")
    ap.add_argument("--out", help="file CSV xuất ra (bỏ trống = in ra màn hình)")
    ap.add_argument("--dry-run", action="store_true",
                    help="chỉ in file → mã đoán được, không đo màu, không ghi file")
    ap.add_argument("--regex", default=REGEX_MAC_DINH,
                    help=f"regex tách mã từ tên file (mặc định: {REGEX_MAC_DINH})")
    ap.add_argument("--crop", type=float, default=0.6,
                    help="tỉ lệ vùng cắt giữa ảnh để đo, 0–1 (mặc định 0.6)")
    ap.add_argument("--white-ref", help="ảnh tờ giấy trắng chụp cùng buổi, để cân bằng trắng")
    args = ap.parse_args()

    thu_muc = Path(args.folder)
    if not thu_muc.is_dir():
        sys.exit(f"Không thấy thư mục: {thu_muc}")
    anh = sorted(p for p in thu_muc.iterdir()
                 if p.is_file() and p.suffix.lower() in DUOI_ANH)
    if not anh:
        sys.exit(f"Không có ảnh nào trong {thu_muc}")

    if args.dry_run:
        print(f"{'File':<42} {'Mã':<14} Tên còn lại")
        print("-" * 84)
        for p in anh:
            ma, ten = tach_ma(p.name, args.regex)
            print(f"{p.name[:42]:<42} {(ma or '❌ KHÔNG TÁCH ĐƯỢC'):<14} {ten}")
        thieu = sum(1 for p in anh if not tach_ma(p.name, args.regex)[0])
        print(f"\n{len(anh)} ảnh · {thieu} ảnh không tách được mã")
        print("Mã sai → chạy lại với --regex, ví dụ: --regex '([A-Z]{2}\\d{4})'")
        return 0

    he_so_wb, nhan_wb = None, "raw ⚠️"
    if args.white_ref:
        he_so_wb = tinh_he_so_wb(Path(args.white_ref), args.crop)
        nhan_wb = "ref"
        print(f"Cân bằng trắng theo {args.white_ref}: "
              f"hệ số R/G/B = {he_so_wb[0]:.3f} / {he_so_wb[1]:.3f} / {he_so_wb[2]:.3f}")

    dong, loi, nen_trang_dem = [], [], 0
    for p in anh:
        try:
            kq = do_mot_anh(p, args.crop, he_so_wb)
        except Exception as e:                                    # noqa: BLE001
            loi.append(f"{p.name}: {e}")
            continue
        ma, ten = tach_ma(p.name, args.regex)
        if not ma:
            kq["canh_bao"].append("⚠️ không tách được mã từ tên file")
        nen_trang_dem += 1 if kq["nen_trang"] else 0
        dong.append({
            "o": "", "ma": ma, "ten": ten, "nhom": kq["nhom"], "hex": kq["hex"],
            "bien_do_van": f"±{kq['bien_do']:.0f}" if kq["nhom"] != "solid" else "",
            "undertone": kq["undertone"], "be_mat": "", "ten_trong_kujiale": "",
            "ghi_chu": " · ".join(kq["canh_bao"]),
            "lrv": f"{kq['lrv']:.0f}", "lrv_p10": f"{kq['lrv_p10']:.0f}",
            "lrv_p90": f"{kq['lrv_p90']:.0f}", "lab_a": f"{kq['lab_a']:.1f}",
            "lab_b": f"{kq['lab_b']:.1f}", "wb": nhan_wb, "file": p.name,
        })

    dich = open(args.out, "w", newline="", encoding="utf-8") if args.out else sys.stdout
    try:
        w = csv.DictWriter(dich, fieldnames=COT)
        w.writeheader()
        w.writerows(dong)
    finally:
        if args.out:
            dich.close()

    dem = {k: sum(1 for d in dong if d["nhom"] == k) for k in ("go", "solid", "?")}
    can_soi = sum(1 for d in dong if d["ghi_chu"])
    print(f"\n── Xong: {len(dong)} mã "
          f"({dem['go']} vân gỗ · {dem['solid']} màu trơn · {dem['?']} chưa rõ)",
          file=sys.stderr)
    if args.out:
        print(f"   Ghi vào: {args.out}", file=sys.stderr)
    if can_soi:
        print(f"   ⚠️ {can_soi} dòng có cờ cảnh báo — đọc cột ghi_chu rồi soi tay", file=sys.stderr)
    for e in loi:
        print(f"   ❌ {e}", file=sys.stderr)
    if he_so_wb is None:
        if nen_trang_dem > len(dong) * 0.6:
            print("   💡 Ảnh có nền trắng đều → nhiều khả năng là file quét/xuất từ "
                  "catalogue số, không cần --white-ref.", file=sys.stderr)
        else:
            print("   ⚠️ Chưa cân bằng trắng (cột wb = raw). Hex mang theo nhiệt độ đèn "
                  "lúc chụp:\n      so giữa các mã trong folder thì tin được, so với mã "
                  "hãng ngoài folder thì KHÔNG.\n      Muốn chuẩn hơn: chụp thêm tờ A4 "
                  "trắng cùng buổi rồi chạy --white-ref.", file=sys.stderr)
    print("   ⚠️ LRV là số xấp xỉ tính từ ảnh, không phải số đo bằng máy của hãng.",
          file=sys.stderr)
    print("   → Bước tiếp: điền cột o / be_mat / ten_trong_kujiale, rồi chạy "
          "tools/tinh-lrv.py --csv để kiểm luật.", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
