# Mẫu — PHIẾU CLIP VIDEO (chế độ F)

Phiếu này có **hai nửa**. Dùng nửa nào thì xuất **trọn vẹn nửa đó**, không xuất mảnh.

- **NỬA 1 — KÊ ĐƠN CLIP:** nhận phương án/ảnh render/mặt bằng, cần một clip.
- **NỬA 2 — CHẤM CLIP:** nhận một clip đã dựng, cần nghiệm thu.

---
---

# NỬA 1 — PHIẾU KÊ ĐƠN CLIP

**Phương án:** ..................  **Căn:** ..................  **Ngày:** ..................
**Kênh đăng:** ☐ TikTok ☐ Facebook Reels ☐ Group cư dân ☐ Gửi khách trực tiếp
**Dạng clip:** ☐ 漫游 ☐ Trước–sau ☐ Mặt bằng→3D ☐ Giải thích phương án ☐ **Ghép thật+render** ☐ B-roll rời

> ## ⚠️ ĐỌC TRƯỚC KHI RENDER MỘT GIÂY NÀO
> **Video tính tiền theo thời lượng: 15 giây = 1 视频额度 ✅, độ nét cao tốn nhiều hơn.**
> Sai một chỗ là trả tiền lại **cả đoạn** — không có chuyện render lại riêng giây thứ 12.
> **→ Xuất nhiều đoạn ngắn 8–15 giây, đừng xuất một đoạn dài.**
>
> **Bốn con số Kujiale CHƯA công bố** — phiếu này không bịa: FPS xuất · thời lượng tối đa ·
> danh sách `构图比` (có 9:16 hay không) · watermark. Mở app kiểm, ghi vào **Phụ lục B mục I**.
>
> Mọi số về tốc độ / độ cao / FOV dưới đây là **⚠️ số mượn từ archviz và điện ảnh** — điểm xuất phát
> để dò, không phải thông số của Kujiale.

### Giả định đã dùng để kê đơn

| Giả định | Nếu sai thì đổi gì |
|---|---|
| Căn ... m², ... phòng ngủ | Tổng thời lượng clip |
| Tỉ lệ khung: ☐ có 9:16 gốc ☐ chưa biết → giả định phải cắt dọc | **Cách đặt máy** (ba luật khung dọc) |
| Có cảnh quay thật kèm không: ☐ có ☐ không | Tỉ lệ thật/render + toàn bộ mục ⑤ |
| Ngày hay đêm | Mẫu đèn ở `基础设置` — nhớ **lấy bản đêm 720/1080P làm chuẩn** |
| 额度 còn lại trong tuần: ... | Số đoạn render được, và độ nét từng đoạn |

---

### ⓪ Kiểm trước khi vào `漫游视频` *(không tốn 额度 — và không thao tác nào sau này cứu được)*

- [ ] Đèn đã đánh **theo CẢ TUYẾN máy chạy**, không chỉ một góc tĩnh (C4, C13)
- [ ] **Đổi `窗纱` / `玻璃` sang `实时材质`** — tránh lỗi biến màu đen/tím khi render video
- [ ] Không có mảng chưa hoàn thiện nằm trên đường máy quét qua
- [ ] Biết trước: Kujiale **không có** rèm bay, người đi, nước chảy — đừng hứa với khách

---

### ① Cấu trúc clip theo giây

| Giây | Nội dung | Nguồn hình | Ghi chú |
|---|---|---|---|
| 0–.. | | ☐ render ☐ quay thật ☐ ảnh tĩnh | |
| | | | |

**Ba giây đầu dùng kiểu nào:** ☐ Kết quả cuối trước ☐ Nỗi đau/xung đột ☐ Biến hình
*(KHÔNG mở bằng lia chậm qua phòng trống)*

**Câu chốt + đường dẫn khách:** ..................................

---

### ② Danh sách đoạn cần render

| # | Phòng / nội dung | Lộ trình | Thời lượng | Độ nét | 额度 ước tính |
|---|---|---|---|---|---|
| 1 | | ☐A ☐B ☐C ☐D | ... s (+1 s dư mỗi đầu) | ☐720P ☐1080P | |
| 2 | | | | | |

**Tổng ước tính: ... giây ÷ 15 = ... 额度** *(chưa tính hệ số độ nét — đọc số thật trên hộp thoại `生成视频`)*

> Quy ước độ nét: **1080P** cho clip toàn render · **720P** cho b-roll 3–5 giây xen clip quay thật.
> Đoạn chỉ cần xoay nhìn quanh một phòng → dùng **`全景图小视频`** (tính theo lượt/ngày, không ăn 额度).

---

### ③ Điểm mốc từng đoạn

Ghi dạng **[vị trí | cao | hướng nhìn | FOV]**. Đầu và cuối mỗi đoạn đặt **điểm mốc kép** để giả ease.

**Đoạn 1 — ...**

| # | Điểm mốc | Thời gian | Ghi chú |
|---|---|---|---|
| 1 | [ ... \| 1550 mm \| ... \| 60° ] **mốc kép** | — | khởi động chậm |
| 2 | | ... s | |
| n | [ ... ] **mốc kép** | giữ ... s | dừng mềm |

**Bộ số khởi điểm ⚠️:** tốc độ 0,4–0,7 m/s (quãng 3 m kéo 5–7 s) · cao đi ngang **1500–1600 mm** ·
FOV **60–75°** · qua cửa hạ về **60°** · tâm máy cách tường **≥ 0,4 m**.

> ## ⚠️ Đừng chép 800–1200 mm của ảnh tĩnh sang đây.
> Đó là số CHÍNH THỨC ✅ **cho ảnh tĩnh** (C6). Video đi ở tầm mắt người đang đi: **1500–1600 mm**.
> Đi ở 1000 mm trong video là đang bò — đó là một lý do clip trông "như lái xe trong game".

**Mỗi `片段` CHỈ MỘT chuyển động.** Tiến, HOẶC xoay, HOẶC nâng — không làm cùng lúc.

---

### ④ Kiểm khung dọc *(làm trước khi trả 额度)*

- [ ] Chủ thể chính nằm trên **trục dọc giữa** suốt cả đoạn
- [ ] Máy đi theo **chiều sâu**, không quét ngang dài
- [ ] Không cắt cụt trần, không cắt cụt chân tường
- [ ] **Bấm Play xem trước, che hai bên màn hình chừa dải giữa ~1/3** — chủ thể có còn trong dải đó không?
- [ ] Không xuyên tường (Kujiale **không** tự chặn), không quét vào tường trống quá 1–2 giây

---

### ⑤ Hậu kỳ — kéo render về phía quay thật

*(Bỏ mục này nếu clip toàn render và không ghép cảnh quay.)*

| # | Việc | Mức khởi điểm ⚠️ | Xong |
|---|---|---|---|
| ① | **Chỉnh màu khớp** — chọn điểm tham chiếu chung (tường trắng / gỗ / da người) | `饱和度` −5…−15 · `对比度` −5…−10 · `高光` giảm · `阴影` tăng nhẹ | ☐ |
| ② | **Hạt nhiễu phủ TOÀN timeline** (cả đoạn quay thật) | `噪点` 15–40 hoặc `特效` 30–60%; vùng sáng 40–60, vùng tối 15–30; máy tính dùng `小颗粒` | ☐ |
| ③ | **Rung tay giả** trên đoạn render | phóng 103–105%, keyframe mỗi ~0,5 s, X ±2% / Y ±1% — **giữ trong ±1–2%** | ☐ |
| ④ | **Giảm nét** | `锐化` về âm; `高斯模糊` 3–5% | ☐ |
| ⑤ | **Chuyển cảnh** | match cut > hard cut đúng beat. **Không dùng hiệu ứng sặc sỡ** | ☐ |
| ⑥ | **Thủ thuật ống kính** | `暗角` nhẹ · `色差` cực nhẹ · `光晕` · nâng chân đen | ☐ |

**Đoạn render xen vào ≤ 5 giây** (3 giây là vừa). **Không đặt render ở mở đầu clip.**
**Tỉ lệ thật/render ~60–70% / ~30–40%** ⚠️ *(suy luận — A/B test rồi chốt số của công ty)*.

---

### ⑥ Xuất và đăng

**1080×1920 · 9:16 · 30fps · H.264 main profile level 4.1+ · AAC-LC 44.1kHz ≥128kbps · MP4 · 8–12 Mbps**
→ một file dùng chung TikTok và Facebook.

- [ ] Mọi clip nguồn đã **ép về cùng 30fps** trước khi ghép *(lệch fps là nguyên nhân giật số một)*
- [ ] Chữ/logo/giá nằm trong **~896×1306 px giữa khung** — cách đáy **≥484 px** ⚠️
- [ ] **Ghi "Hình minh hoạ 3D" trên mọi đoạn render** *(minh bạch + Luật Quảng cáo VN 16/2012/QH13)*
- [ ] Đã **xem lại trên điện thoại thật**, không phải trên màn máy tính

---

### ⑦ Thứ tự dò *(mỗi vòng đổi ĐÚNG MỘT thứ)*

| Vòng | Đổi gì | Kiểm bằng cách nào |
|---|---|---|
| 1 | Đường đi máy | Play preview — **miễn phí**, làm tới khi sạch mới render |
| 2 | Một đoạn 720P thử | Xem trên điện thoại: có chóng mặt không, khung dọc có đủ không |
| 3 | Hậu kỳ trên đoạn thử | Đưa người ngoài xem: **"đoạn nào là hình dựng?"** |
| 4 | Render nốt các đoạn ở độ nét chốt | — |

---
---

# NỬA 2 — PHIẾU CHẤM CLIP

**Clip:** ..................  **Độ dài:** ...  **Người dựng:** ...  **Ngày chấm:** ...
**Xem trên:** ☐ điện thoại *(bắt buộc)* — không chấm clip dọc trên màn máy tính

### Test mở màn — xem một lần, không tua

> **"Mình có lướt qua không?"** — lướt trong 3 giây đầu thì ghi lại **cái gì làm mình lướt**.
> Clip trượt test này **tối đa xếp SỬA LẠI**, dù tổng điểm cao.

Kết quả: ☐ xem hết ☐ lướt ở giây ......  Vì: ..................................

### Bảng chấm — 10 tiêu chí × 5 điểm

| # | Tiêu chí | Điểm | Chỗ hỏng *(ghi MỐC GIÂY)* | Sửa ở |
|---|---|---|---|---|
| 1 | Không gây chóng mặt | /5 | | C17 §17.2 |
| 2 | Mỗi đoạn một chuyển động | /5 | | C17 §17.2 |
| 3 | Vào–ra mềm (ease) | /5 | | C17 §17.3 |
| 4 | Độ cao và FOV đúng | /5 | | C17 §17.4 |
| 5 | **Màu khớp render ↔ quay thật** | /5 | | C18 §18.4 ① |
| 6 | **Chất liệu khớp (grain, độ nét)** | /5 | | C18 §18.4 ②④ |
| 7 | **Mối nối giấu được** | /5 | | C18 §18.4 ⑤ |
| 8 | Ba giây đầu giữ chân | /5 | | C19 §19.3 |
| 9 | Nhịp cắt và nhạc | /5 | | C18 §18.3, C19 §19.4 |
| 10 | Đăng được ngay (vùng an toàn, chuẩn xuất, ghi minh hoạ 3D) | /5 | | C18 §18.8, C19 §19.8 |

**Tổng: ... / 50**

**Ngưỡng:** ☐ **ĐẠT ≥40** *(không tiêu chí nào ≤2, qua test mở màn)* ☐ **SỬA LẠI 30–39** ☐ **LÀM LẠI <30**

> Mọi điểm ≤2 **bắt buộc kèm mốc giây** (*"0:07–0:09"*). Chấm clip mà không chỉ giây thì người dựng
> không sửa được — đó là phiếu vô dụng.

### Việc cần sửa — theo đúng thứ tự ưu tiên

> **Đường đi máy (C17) > độ chỏi render↔thật (C18) > nhịp cắt > chữ và xuất file**

| Ưu tiên | Việc | Sửa ở đâu | Có phải render lại không? |
|---|---|---|---|
| 1 | | ☐ Kujiale ☐ CapCut ☐ Kịch bản | ☐ Có — tốn ~... 额度 ☐ Không |
| 2 | | | |

> ## Nói thẳng chi phí. Lỗi đường đi máy chỉ sửa được bằng cách render lại — hậu kỳ không cứu được.
> Người nhận phiếu phải biết việc nào miễn phí và việc nào tốn 额度 **trước khi** bắt tay làm.
