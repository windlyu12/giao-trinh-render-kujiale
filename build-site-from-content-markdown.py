#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build site/ (HTML tĩnh) từ content/ (markdown) — giáo trình render Kujiale.
Chạy: ~/.claude/skills/.venv/bin/python3 build-site-from-content-markdown.py
Chạy lại mỗi khi content/ đổi (vd sau khi điền phiếu verify → v1.1)."""

import re
from pathlib import Path

import markdown

ROOT = Path(__file__).parent
CONTENT = ROOT / "content"
SITE = ROOT / "docs"  # tên "docs" để GitHub Pages serve trực tiếp từ main branch

# slug -> (file, số hiển thị, nhãn, tiêu đề, hook, màu accent, nhóm)
CHAPTERS = [
    ("00", "00-mo-dau-con-mat-anh-sang.md", "0", "Mở đầu", "Con mắt ánh sáng",
     "Vì sao ảnh bạn render nhìn vẫn giả dù làm đúng thao tác — và con mắt người render giỏi khác gì.", "#ffab5e", "ch"),
    ("01", "01-lam-chu-kujiale-ban-trung-quoc.md", "1", "Chương 1", "Làm chủ Kujiale bản Trung Quốc",
     "Tài khoản cao cấp, hệ điểm 核豆, UI 3 chế độ render mới và cách vượt rào tiếng Trung.", "#ffb96f", "ch"),
    ("02", "02-quy-trinh-render-va-thong-so.md", "2", "Chương 2", "Quy trình render và thông số",
     "Bấm gì, chỉnh gì trong 高级设置, và cách render nháp → final không đốt điểm.", "#ffc987", "ch"),
    ("03", "03-anh-sang-tu-nhien.md", "3", "Chương 3", "Ánh sáng tự nhiên",
     "Nắng, trời, ngoại cảnh — dựng ánh sáng ban ngày chân thực cho căn hộ thật.", "#ffd89a", "ch"),
    ("04", "04-den-thu-cong.md", "4", "Chương 4", "Đèn thủ công",
     "8 loại đèn, trình tự 4 bước và công thức bố đèn 5 loại phòng — chương quan trọng nhất.", "#ffe7b0", "ch"),
    ("05", "05-vat-lieu.md", "5", "Chương 5", "Vật liệu",
     "Melamine, acrylic, đá, vải, kính hiện rõ chất — và cách lọc vật liệu xịn trong thư viện.", "#f2ecd8", "ch"),
    ("06", "06-camera-bo-cuc-hau-ky.md", "6", "Chương 6", "Camera, bố cục, hậu kỳ",
     "Khung hình như nhiếp ảnh nội thất và hậu kỳ nhẹ tay đúng liều.", "#d9e4ee", "ch"),
    ("07", "07-photorealism-case-thuc-chien.md", "7", "Chương 7", "Photorealism và case thực chiến",
     "4 trụ cột, 12 dấu hiệu tố cáo ảnh 3D và bài học từ case của pháp sư Trung Hoa.", "#b9d3f2", "ch"),
    ("08", "08-cong-cu-ai-dung-va-cam.md", "8", "Chương 8", "Công cụ AI — dùng và cấm",
     "AI render ở đâu hợp lệ, ở đâu là rủi ro pháp lý với công ty bán đồ thật.", "#9cc2f4", "ch"),
    ("09", "09-luyen-mat-nguon-theo-doi.md", "9", "Chương 9", "Luyện mắt và nguồn theo dõi",
     "Thói quen dài hạn: phân tích ảnh mỗi ngày, kênh phải theo, đồ án tốt nghiệp.", "#7fb0f6", "ch"),
    ("10", "10-texture-nguon-chuan-va-chong-lap-van.md", "10", "Chương 10", "Ảnh vân — nguồn, chuẩn, chống lặp",
     "Bảy phần của ảnh đẹp nằm ở ảnh vân: lấy ở đâu, chuẩn thế nào, và phá lỗi mười cánh tủ một vân.", "#6ea6f7", "ch"),
    ("11", "11-model-va-bay-do-ke-chuyen.md", "11", "Chương 11", "Model và bày đồ kể chuyện",
     "Nhận model rác bằng mắt, bày đồ có hơi người, và bản địa hoá cho khách Việt.", "#5d9bf8", "ch"),
    ("12", "12-chi-tiet-cong-trinh.md", "12", "Chương 12", "Chi tiết công trình",
     "Khe hắt có mép thật, đèn âm trần có vành, ray nam châm, khe gió — thứ chín trên mười bộ ảnh bỏ qua.", "#4d90f9", "ch"),
    ("13", "13-anh-sang-nang-cao.md", "13", "Chương 13", "Ánh sáng nâng cao",
     "Bốn con đường bố đèn, nắng qua rèm voan đọc được hình, và cách thoát khỏi việc chép số.", "#3d85fa", "ch"),
    ("14", "14-hau-ky-nang-cao.md", "14", "Chương 14", "Hậu kỳ nâng cao",
     "Đường cong, hạt nhiễu, dải màu và nước ảnh kiểu Trung Quốc — đánh bóng chứ không cứu chữa.", "#2e7afb", "ch"),
    ("16", "16-xuat-video-kujiale.md", "16", "Chương 16", "Xuất video từ Kujiale",
     "Làm được gì, mất bao nhiêu 额度, vướng ở đâu — và câu hỏi dọc 9:16 trả lời dứt điểm.", "#2f5ee2", "ch"),
    ("17", "17-duong-di-may-anh.md", "17", "Chương 17", "Đường đi máy ảnh",
     "Điểm mốc, tốc độ, góc nhìn — làm clip dạo quanh mượt và không gây chóng mặt.", "#3d55da", "ch"),
    ("18", "18-hau-ky-clip-doc.md", "18", "Chương 18", "Hậu kỳ clip dọc",
     "Kéo render về phía cảnh quay thật, ghép b-roll không chỏi, xuất chuẩn TikTok–Facebook.", "#4b4dd2", "ch"),
    ("19", "19-noi-dung-clip-ra-khach.md", "19", "Chương 19", "Nội dung clip ra khách",
     "Sáu dạng clip nhà ở, ba giây đầu cho hình dựng, và cái gì của Trung Quốc bê sang Việt Nam được.", "#5946ca", "ch"),
    ("pa", "phu-luc-a-bo-cham-anh.md", "A", "Phụ lục A", "Bộ chấm ảnh",
     "Phiếu 10 tiêu chí × 5 điểm — nghiệm thu ảnh và chấm đồ án tốt nghiệp.", "#8be3c6", "pl"),
    ("pb", "phu-luc-b-phieu-verify-app.md", "B", "Phụ lục B", "Sổ ghi nhận khi dùng app",
     "Gặp chỗ app khác sách thì ghi một dòng — không phải bài tập phải làm xong trước.", "#74d4e6", "pl"),
    ("pc", "phu-luc-c-cheat-sheet-thuat-ngu.md", "C", "Phụ lục C", "Cheat sheet thuật ngữ",
     "97 thuật ngữ Trung – Việt chia 6 nhóm, in ra dán cạnh màn hình.", "#d4b9ff", "pl"),
    ("pd", "phu-luc-d-tu-vung-prompt-ai.md", "D", "Phụ lục D", "Từ vựng prompt AI",
     "Nguyên tắc ánh sáng → cụm prompt tiếng Anh cho Nano Banana / Midjourney.", "#ff9fc0", "pl"),
    ("pe", "phu-luc-e-ngan-hang-case.md", "E", "Phụ lục E", "Ngân hàng ca thực chiến",
     "Mười ca đánh đèn của designer Trung Quốc, bộ từ khoá thu thêm ca, và vì sao số của họ khác nhau.", "#9be8a0", "pl"),
]

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
         '<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900'
         '&family=Be+Vietnam+Pro:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">')


def render_md(text: str):
    md = markdown.Markdown(extensions=["tables", "toc"], output_format="html5")
    html = md.convert(text)
    toc = [t for t in md.toc_tokens if t["level"] == 2]
    return html, toc


def postprocess(html: str, slug: str) -> str:
    # bọc bảng để cuộn ngang
    html = html.replace("<table>", '<div class="table-scroll"><table>').replace("</table>", "</table></div>")

    # phân loại callout theo emoji đầu blockquote
    def classify(m):
        inner = m.group(1)
        head = re.sub(r"<[^>]+>", "", inner)[:90]
        cls = ""
        if "⚠️" in head or "CẢNH BÁO" in head:
            cls = "warn"
        elif "💡" in head:
            cls = "tip"
        elif "📌" in head:
            cls = "pin"
        elif "Sau chương này" in head or "Sau bài tập này" in head:
            cls = "tip"
        return f'<blockquote class="{cls}">{inner}</blockquote>' if cls else m.group(0)

    html = re.sub(r"<blockquote>(.*?)</blockquote>", classify, html, flags=re.DOTALL)

    # checklist "- [ ]" -> checkbox tương tác
    counter = [0]

    def task(m):
        counter[0] += 1
        return (f'<li class="task"><label><input type="checkbox" data-key="{slug}-t{counter[0]}">'
                f"<span>{m.group(1)}</span></label></li>")

    html = re.sub(r"<li>\[ \] ?(.*?)</li>", task, html, flags=re.DOTALL)
    html = re.sub(r"<li>\[x\] ?(.*?)</li>", task, html, flags=re.DOTALL | re.IGNORECASE)
    return html


def sidebar(active: str) -> str:
    items_ch, items_pl = [], []
    for slug, _f, no, label, title, _h, color, group in CHAPTERS:
        cls = "nav-item" + (" active" if slug == active else "")
        item = (f'<a class="{cls}" data-nav-slug="{slug}" href="{slug}.html" style="--c:{color}">'
                f'<span class="chip">{no}</span><span>{title}</span><span class="done-dot"></span></a>')
        (items_ch if group == "ch" else items_pl).append(item)
    return f"""<button id="nav-toggle" aria-label="Mục lục">☰</button>
<nav class="sidebar">
  <a class="brand" href="index.html">
    <span class="kicker">Newhomes · Nội bộ</span>
    <span class="name">Giáo trình<br>Render Kujiale</span>
    <span class="kelvin-bar"></span>
  </a>
  <div class="nav-group"><div class="label">Sách chính</div>{''.join(items_ch)}</div>
  <div class="nav-group"><div class="label">Phụ lục — công cụ</div>{''.join(items_pl)}</div>
</nav>"""


def page_shell(title: str, accent: str, body: str, slug: str) -> str:
    soft = f"color-mix(in srgb, {accent} 13%, transparent)"
    return f"""<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} — Giáo trình Render Kujiale</title>
{FONTS}
<link rel="stylesheet" href="style.css">
<style>:root{{--accent:{accent};--accent-soft:{soft};}}</style>
</head>
<body data-slug="{slug}">
<div id="progress"></div>
{body}
<script src="reader.js"></script>
</body>
</html>"""


def build_chapter(idx: int) -> None:
    slug, fname, no, label, title, hook, color, _g = CHAPTERS[idx]
    raw = (CONTENT / fname).read_text(encoding="utf-8")
    raw = re.sub(r"^# .*\n", "", raw, count=1)  # bỏ h1 gốc — thay bằng ch-head
    words = len(raw.split())
    minutes = max(3, round(words / 200))
    html, toc = render_md(raw)
    html = postprocess(html, slug)

    toc_html = ""
    if len(toc) >= 3:
        lis = "".join(f'<li><a href="#{t["id"]}">{t["name"]}</a></li>' for t in toc)
        toc_html = f'<details class="page-toc"><summary>Trong chương này</summary><ol>{lis}</ol></details>'

    prev_html = next_html = ""
    if idx > 0:
        p = CHAPTERS[idx - 1]
        prev_html = f'<a class="prev" href="{p[0]}.html"><span class="dir">← Trước</span><div class="t">{p[3]} · {p[4]}</div></a>'
    if idx < len(CHAPTERS) - 1:
        n = CHAPTERS[idx + 1]
        cls = "next" + ("" if idx > 0 else " only-next")
        next_html = f'<a class="{cls}" href="{n[0]}.html"><span class="dir">Tiếp theo →</span><div class="t">{n[3]} · {n[4]}</div></a>'

    body = f"""{sidebar(slug)}
<main class="main"><div class="page">
  <header class="ch-head">
    <div class="ch-no">{no}</div>
    <div class="ch-meta"><span class="tag">{label}</span><span class="tag ghost">≈ {minutes} phút đọc</span></div>
    <h1 class="ch-title">{title}</h1>
    <p class="ch-hook">{hook}</p>
  </header>
  {toc_html}
  <article class="content">{html}</article>
  <button class="mark-read" id="mark-read"></button>
  <nav class="pager">{prev_html}{next_html}</nav>
</div></main>"""
    (SITE / f"{slug}.html").write_text(page_shell(f"{label}. {title}", color, body, slug), encoding="utf-8")


def build_index() -> None:
    cards_ch, cards_pl = [], []
    for slug, fname, no, label, title, hook, color, group in CHAPTERS:
        words = len((CONTENT / fname).read_text(encoding="utf-8").split())
        minutes = max(3, round(words / 200))
        card = (f'<a class="card" data-nav-slug="{slug}" href="{slug}.html" style="--c:{color}">'
                f'<span class="no">{no}</span><span class="t">{title}</span><span class="d">{hook}</span>'
                f'<span class="meta"><span>≈ {minutes} phút</span><span class="read-badge">✓ đã đọc</span></span></a>')
        (cards_ch if group == "ch" else cards_pl).append(card)

    body = f"""{sidebar("")}
<main class="main">
  <section class="hero">
    <div class="kicker">Newhomes Ocean Park · Tài liệu đào tạo nội bộ · v1</div>
    <h1>Render như <span class="grad">pháp sư Trung Hoa</span></h1>
    <p class="sub">Sách tự học render nội thất photorealism bằng Kujiale (酷家乐) — biên soạn từ 11 gói nghiên cứu
    trên help center chính thức và cộng đồng designer Trung Quốc, cập nhật theo giao diện 2025–2026.
    Đích đến: ảnh render mà người xem không nhận ra là 3D.</p>
    <div class="cta-row">
      <a class="cta primary" href="00.html">Bắt đầu — Chương 0</a>
      <a class="cta ghost" href="pb.html">Bài tập tuần đầu ↗</a>
    </div>
  </section>
  <div class="kelvin-ruler">
    <div class="bar"></div>
    <div class="marks"><span>2700K · nến, đèn hắt</span><span>4000K · trung tính</span><span>6500K · trời trưa</span></div>
  </div>
  <section class="grid-wrap">
    <div class="sec-label">Sách chính — đọc theo thứ tự</div>
    <div class="card-grid">{''.join(cards_ch)}</div>
    <div class="sec-label">Phụ lục — công cụ dùng hằng ngày</div>
    <div class="card-grid">{''.join(cards_pl)}</div>
  </section>
</main>"""
    (SITE / "index.html").write_text(page_shell("Trang chủ", "#ffc987", body, "index"), encoding="utf-8")


def main() -> None:
    SITE.mkdir(exist_ok=True)
    for i in range(len(CHAPTERS)):
        build_chapter(i)
    build_index()
    print(f"OK — đã build {len(CHAPTERS)} trang chương + index.html vào {SITE}")


if __name__ == "__main__":
    main()
