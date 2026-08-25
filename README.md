# Giáo trình Render Kujiale — Newhomes Ocean Park

Sách tự học render nội thất photorealism bằng Kujiale (酷家乐) bản Trung Quốc, biên soạn từ 11 gói deep research (help center chính thức + cộng đồng designer TQ), cập nhật theo UI 2025-2026.

**Phiên bản:** v1 (2026-08-07) — một số con số chờ khóa qua Phụ lục B → sẽ lên v1.1.

## Dành cho ai, dùng thế nào

- Người học: nhân viên thiết kế đã biết SketchUp, đã học khóa thao tác Kujiale cơ bản (BJM). Sách KHÔNG dạy lại thao tác — sách dạy từ "biết dùng" lên "nước ảnh không nhận ra là 3D".
- Học theo nhịp riêng (full-time), thứ tự chương từ trên xuống. Tuần đầu tiên làm ngay bài tập Phụ lục B (phiếu khám phá app).
- Quy ước: chữ Hán = tên nút thật trên UI (kèm nghĩa Việt lần đầu). `⚠️` = số liệu cộng đồng/chưa verify — dùng làm điểm xuất phát, không phải chân lý.
- Đồ án tốt nghiệp: render 1 căn thật của Newhomes, quản lý chấm theo Phụ lục A.

## Mục lục

| # | Chương | File | Trả lời câu hỏi |
|---|--------|------|-----------------|
| 0 | Mở đầu — Con mắt ánh sáng | `content/00-mo-dau-con-mat-anh-sang.md` | Vì sao ảnh mình giả dù làm đúng thao tác? |
| 1 | Làm chủ Kujiale bản TQ | `content/01-lam-chu-kujiale-ban-trung-quoc.md` | Tài khoản, 核豆, UI 3 chế độ, vượt rào tiếng Trung |
| 2 | Quy trình render + thông số | `content/02-quy-trinh-render-va-thong-so.md` | Bấm gì, chỉnh gì, tiết kiệm điểm thế nào? |
| 3 | Ánh sáng tự nhiên | `content/03-anh-sang-tu-nhien.md` | Nắng + trời + ngoại cảnh cho căn hộ thật |
| 4 | Đèn thủ công | `content/04-den-thu-cong.md` | 8 loại đèn + công thức 5 phòng (chương quan trọng nhất) |
| 5 | Vật liệu | `content/05-vat-lieu.md` | Melamine/acrylic/đá/vải hiện rõ chất |
| 6 | Camera + bố cục + hậu kỳ | `content/06-camera-bo-cuc-hau-ky.md` | Khung hình như nhiếp ảnh + hậu kỳ nhẹ tay |
| 7 | Photorealism + case thực chiến | `content/07-photorealism-case-thuc-chien.md` | 4 trụ cột, 12 điều cấm phạm, học từ pháp sư TQ |
| 8 | Công cụ AI — dùng và cấm | `content/08-cong-cu-ai-dung-va-cam.md` | AI ở đâu hợp lệ, ở đâu rủi ro pháp lý |
| 9 | Luyện mắt + nguồn theo dõi | `content/09-luyen-mat-nguon-theo-doi.md` | Thói quen dài hạn sau khi đọc hết sách |
| A | Bộ chấm ảnh | `content/phu-luc-a-bo-cham-anh.md` | Công cụ nghiệm thu + chấm đồ án |
| B | Phiếu khám phá app | `content/phu-luc-b-phieu-verify-app.md` | Bài tập tuần đầu — khóa số cho sách |
| C | Cheat sheet thuật ngữ | `content/phu-luc-c-cheat-sheet-thuat-ngu.md` | ~97 thuật ngữ Trung-Việt, in dán tường |
| D | Từ vựng prompt AI | `content/phu-luc-d-tu-vung-prompt-ai.md` | Nguyên tắc ánh sáng → prompt Nano Banana/Midjourney + ca Google Flow |

## Cấu trúc folder

```
giao-trinh-kujiale/
├── README.md        ← file này
├── content/         ← source of truth (markdown, có citation) — cũng là kiến thức cho AI
└── docs/            ← bản HTML đẹp cho người học (build từ content/)
```

## Build lại site sau khi sửa content

```bash
~/.claude/skills/.venv/bin/python3 "/Users/huanglu/Desktop/Tổng hợp/newhomes-v2/00-dao-tao/giao-trinh-kujiale/build-site-from-content-markdown.py"
```

Người học chỉ cần mở `docs/index.html` bằng trình duyệt (double-click). Cần internet lần đầu để tải font, không cần server.

## Nguồn gốc + bảo trì

- Plan + toàn bộ research thô: `plans/260801-0941-kujiale-deep-research-giao-trinh-render/` (11 file R1-R11 + gap analysis).
- Kujiale đổi UI/hệ điểm rất nhanh (mốc lớn: 8/2025 gộp 3 chế độ render, 3/2026 hệ điểm 核豆). Khi thấy UI lệch sách: ghi lại → quản lý rà bản cập nhật. Khi Kujiale ra template vượt đời 3.x: rà lại toàn bộ bảng số đèn.
- Số nào ghi `⚠️` kèm "Phiếu verify" → sau khi học viên nộp Phụ lục B, cập nhật thẳng vào content/ rồi build lại site/.
