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
| 10 | Ảnh vân — nguồn, chuẩn, chống lặp | `content/10-texture-nguon-chuan-va-chong-lap-van.md` | Lấy texture ở đâu, chuẩn thế nào, phá lỗi lặp vân |
| 11 | Model và bày đồ kể chuyện | `content/11-model-va-bay-do-ke-chuyen.md` | Nhận model rác, bày đồ có hơi người |
| 12 | Chi tiết công trình | `content/12-chi-tiet-cong-trinh.md` | Khe hắt, đèn âm trần, ray nam châm, khe gió |
| 13 | Ánh sáng nâng cao | `content/13-anh-sang-nang-cao.md` | Bốn con đường bố đèn, nắng qua rèm voan |
| 14 | Hậu kỳ nâng cao | `content/14-hau-ky-nang-cao.md` | Đường cong, hạt nhiễu, nước ảnh kiểu Trung Quốc |
| 15 | Bộ phối màu nội thất | `content/15-bo-phoi-mau-noi-that.md` | Tỉ lệ 6:3:1, LRV, undertone, ba phương án cho khách chọn |
| A | Bộ chấm ảnh | `content/phu-luc-a-bo-cham-anh.md` | Công cụ nghiệm thu + chấm đồ án |
| B | Phiếu khám phá app | `content/phu-luc-b-phieu-verify-app.md` | Bài tập tuần đầu — khóa số cho sách |
| C | Cheat sheet thuật ngữ | `content/phu-luc-c-cheat-sheet-thuat-ngu.md` | ~97 thuật ngữ Trung-Việt, in dán tường |
| D | Từ vựng prompt AI | `content/phu-luc-d-tu-vung-prompt-ai.md` | Nguyên tắc ánh sáng → prompt Nano Banana/Midjourney |
| E | Ngân hàng ca thực chiến | `content/phu-luc-e-ngan-hang-case.md` | Mười ca đánh đèn của designer Trung Quốc |
| F | Ngân hàng bảng phối màu | `content/phu-luc-f-ngan-hang-bang-mau.md` | 12 bảng màu có hex + LRV, bảng tra brief, Phiếu phối màu |

## Agent render — dùng giáo trình này để chạy việc thật

Ngoài việc cho người đọc, `content/` còn là **kho kiến thức cho một agent AI**. Agent đã được đóng gói sẵn ở `.claude/skills/render-agent-kujiale/` — mở repo này bằng Claude Code là dùng được ngay (gõ `/render-agent-kujiale`, hoặc cứ hỏi thẳng "phân tích ảnh render này", "kê thông số render cho ảnh model này").

**Bốn chế độ:**

| Đưa vào | Agent làm gì | Nhận lại |
|---|---|---|
| Ảnh render / ảnh chụp nội thất **lấy trên mạng** | Đọc ngược theo 12 bước: đo góc nắng bằng tỉ lệ bóng, đọc chiều cao camera bằng đường chân trời, suy độ bóng vật liệu, nhận diện loại rèm từ hình vệt sáng | Phiếu phân tích + **bộ thông số tái dựng trong Kujiale** |
| Ảnh **chưa render** (model trắng, clay, SketchUp, ảnh nhà thô, mặt bằng, ảnh mood khách gửi) | Kê đơn theo đúng thứ tự rà model → template → camera → nắng → thiên quang → đẩy sáng → đèn chức năng → đèn nhấn → `高级设置` → hậu kỳ | **Phiếu thông số render Kujiale** đầy đủ + thứ tự dò |
| Yêu cầu ảnh ý tưởng | Dựng prompt theo công thức 6 khối | Prompt cho **ChatGPT / Nano Banana / Midjourney / Google Flow** |
| Ảnh render đã xong | Chấm theo rubric Phụ lục A | Phiếu 10 tiêu chí × 5 điểm + việc cần sửa, kèm chương để tra |
| Brief màu của khách ("hiện đại, tone sáng") | Dịch brief sang 3 khóa → mở ngân hàng bảng màu → kiểm 4 luật LRV/undertone → áp quy tắc hai ô | **Phiếu phối màu 7 ô** + 3 phương án A/B/C để khách chọn |

**Bốn luật nền agent luôn tuân** (và đây cũng là lý do nên tin phiếu nó xuất ra):

1. **Chép tỉ lệ và thứ tự, đừng chép số** — mọi con số xuất ra đều ghi rõ là *điểm xuất phát để dò*.
2. **Luôn ghi thang đơn vị** — thang cũ / `瓦` / `%`, và không bao giờ trích quy ước "÷10" như dữ kiện của hãng.
3. **Đánh dấu độ tin cậy từng số** — `✅` chính thức, `⚠️` cộng đồng/suy luận. Không được xoá dấu ⚠️ cho phiếu trông gọn.
4. **Giữ ranh giới AI của C8** — prompt AI luôn kèm dòng nhắc phạm vi dùng; ảnh chốt phương án, hợp đồng, mô tả vật liệu thi công và nghiệm thu thì bắt buộc render chuẩn.

**Cấu trúc agent:**

```
.claude/skills/render-agent-kujiale/
├── SKILL.md                        ← routing 4 chế độ + luật nền
├── references/
│   ├── 01-doc-nguoc-anh.md         ← giao thức đọc ngược 12 bước (phần mới, không có sẵn trong content/)
│   ├── 02-bang-tra-thong-so.md     ← hợp nhất số của C2·C3·C4·C6·C13
│   ├── 03-cong-thuc-phong.md       ← 5 công thức phòng + 4 con đường bố đèn + nắng qua rèm
│   ├── 04-vat-lieu-texture.md      ← 4 kênh, melamine vs acrylic, khổ thật, chẩn đoán "bệt"
│   ├── 05-prompt-ai.md             ← 6 khối, 26 cụm, khác biệt từng công cụ
│   ├── 06-cham-anh.md              ← rubric + 12 dấu hiệu + biên độ hậu kỳ
│   ├── 07-doc-model-chua-render.md ← đọc lỗi từ ảnh model phẳng, trước khi bố đèn
│   └── 08-phoi-mau.md              ← 7 ô, 4 luật LRV/undertone, 12 bảng màu, quy tắc hai ô
└── templates/                      ← 4 phiếu xuất: phân tích ảnh · thông số render · prompt AI · phối màu
```

Khi `content/` được cập nhật (số ⚠️ được khoá qua Phụ lục B, UI Kujiale đổi), **sửa `content/` trước rồi đồng bộ sang `references/`** — `content/` vẫn là source of truth.

## Cấu trúc folder

```
giao-trinh-kujiale/
├── README.md        ← file này
├── content/         ← source of truth (markdown, có citation) — cũng là kiến thức cho AI
├── docs/            ← bản HTML đẹp cho người học (build từ content/)
├── tools/           ← công cụ nhỏ dùng khi làm việc (tính LRV, bảng neo vật liệu)
└── .claude/skills/  ← agent render (chạy trên kiến thức của content/)
```

### tools/

```bash
# Tính LRV + kiểm 4 luật phối màu (C15.5) cho vài mã màu
python3 tools/tinh-lrv.py "#EFE9E0" "#C8A87E" "#3B3833"

# Chạy cả bảng neo vật liệu của công ty (CSV có cột hex, và cột o = số ô 1–7)
python3 tools/tinh-lrv.py --csv tools/bang-neo-vat-lieu.csv
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
