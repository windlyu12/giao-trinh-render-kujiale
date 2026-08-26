#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Tính LRV (độ phản xạ ánh sáng, 0–100) từ mã hex — công cụ của Phụ lục F.

LRV ở đây là **số xấp xỉ**: độ sáng tương đối theo công thức WCAG nhân 100.
Dùng để so tương quan giữa các ô trong cùng một bộ màu, KHÔNG dùng để cãi với
bảng màu in của hãng sơn (hãng đo bằng máy trên mẫu thật).

Dùng:
    python3 tools/tinh-lrv.py "#EFE9E0" "#C8A87E" "#3B3833"
    python3 tools/tinh-lrv.py --csv tools/bang-neo-vat-lieu.csv

CSV cần cột "hex". Nếu có thêm cột "o" (số thứ tự ô 1–7 của form chuẩn) thì
công cụ kiểm luôn bốn luật ở C15.5 cho bộ 7 ô đó.
"""

import argparse
import csv
import sys

TEN_O = {
    1: "Trần", 2: "Tường nền", 3: "Sàn", 4: "Chủ thể",
    5: "Phụ trợ", 6: "Nhấn", 7: "Neo tối",
}


def lrv(hex_code: str) -> float:
    """LRV xấp xỉ = độ sáng tương đối (WCAG) × 100."""
    h = hex_code.strip().lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    if len(h) != 6:
        raise ValueError(f"mã hex không hợp lệ: {hex_code}")
    r, g, b = (int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))

    def lin(c):
        return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4

    return (0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)) * 100


def rgb255(hex_code: str):
    h = hex_code.strip().lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def canh_bao_albedo(hex_code: str, o=None):
    """Luật trắng của C15.8: mảng lớn giữ albedo dưới ~RGB 200, cấm #FFFFFF.

    Trần (ô 1) được phép sáng hơn các ô khác — chỉ cảnh báo khi gần trắng tinh.
    """
    r, g, b = rgb255(hex_code)
    if (r, g, b) == (255, 255, 255):
        return "❌ TRẮNG TINH — cấm dùng cho bề mặt (cháy sáng, GI loang, render chậm)"
    if o == 1:
        return "⚠️ sát trắng tinh — hạ nhẹ để tránh cháy" if min(r, g, b) > 250 else ""
    if min(r, g, b) > 200:
        return "⚠️ rất sáng — mảng lớn nên hạ xuống dưới ~RGB 200 (trần thì chấp nhận được)"
    return ""


def kiem_bon_luat(rows):
    """rows: list of (o, ten, hex, lrv). Kiểm L1–L3 + luật trắng của C15.5/15.8."""
    theo_o = {o: (ten, hx, v) for o, ten, hx, v in rows if o}
    ket = []

    if 1 in theo_o and 2 in theo_o:
        tran, tuong = theo_o[1][2], theo_o[2][2]
        ok = tran >= tuong
        ket.append((ok, f"L1 — trần sáng nhất: trần {tran:.0f} ≥ tường {tuong:.0f}"))

    if 2 in theo_o and 3 in theo_o:
        chenh = abs(theo_o[2][2] - theo_o[3][2])
        tone_sang = theo_o[2][2] >= 75
        nguong = 30 if tone_sang else 20
        ket.append((chenh >= nguong,
                    f"L2 — chênh tường↔sàn: {chenh:.0f} điểm "
                    f"(ngưỡng {nguong} vì tường LRV {theo_o[2][2]:.0f})"))

    tat_ca = [v for _o, _t, _h, v in rows]
    if tat_ca:
        co_toi = any(v < 10 for v in tat_ca)
        co_sang = any(v > 80 for v in tat_ca)
        ket.append((co_toi and co_sang,
                    f"L3 — biên độ: thấp nhất {min(tat_ca):.0f}, cao nhất {max(tat_ca):.0f} "
                    f"(cần có ô <10 VÀ ô >80)"))

    trang_tinh = [hx for _o, _t, hx, _v in rows if rgb255(hx) == (255, 255, 255)]
    ket.append((not trang_tinh, "Luật trắng — không ô nào là #FFFFFF"))
    return ket


def in_bang(rows):
    print(f"{'Ô':<3} {'Tên':<22} {'Hex':<9} {'LRV':>4}  {'RGB':<15} Cảnh báo")
    print("-" * 88)
    for o, ten, hx, v in rows:
        r, g, b = rgb255(hx)
        so_o = str(o) if o else "—"
        print(f"{so_o:<3} {ten[:22]:<22} {hx.upper():<9} {v:>4.0f}  "
              f"{f'{r},{g},{b}':<15} {canh_bao_albedo(hx, o)}")


def main():
    ap = argparse.ArgumentParser(description="Tính LRV xấp xỉ từ mã hex (Phụ lục F)")
    ap.add_argument("hex", nargs="*", help="một hoặc nhiều mã hex, ví dụ #EFE9E0")
    ap.add_argument("--csv", help="đường dẫn CSV bảng neo (cần cột 'hex')")
    args = ap.parse_args()

    rows = []
    if args.csv:
        with open(args.csv, encoding="utf-8") as f:
            for i, d in enumerate(csv.DictReader(f), 1):
                hx = (d.get("hex") or "").strip()
                if not hx or hx.startswith("#") and len(hx) < 4:
                    continue
                try:
                    v = lrv(hx)
                except ValueError as e:
                    print(f"⚠️ dòng {i}: {e}", file=sys.stderr)
                    continue
                o = (d.get("o") or "").strip()
                ten = (d.get("ten") or d.get("ma") or TEN_O.get(int(o) if o.isdigit() else 0, "")) or "—"
                rows.append((int(o) if o.isdigit() else None, ten, hx, v))
    elif args.hex:
        for hx in args.hex:
            rows.append((None, "—", hx, lrv(hx)))
    else:
        ap.print_help()
        return 1

    in_bang(rows)

    if any(o for o, _t, _h, _v in rows):
        print("\nKIỂM LUẬT (C15.5 + C15.8):")
        for ok, mo_ta in kiem_bon_luat(rows):
            print(f"  {'✅' if ok else '❌'} {mo_ta}")
        print("\n⚠️ L4 (undertone cùng phía) phải kiểm bằng MẮT — máy không đọc được.")

    print("\n⚠️ LRV ở đây là số xấp xỉ tính từ hex. Số của hãng sơn mới là số chính thức.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
