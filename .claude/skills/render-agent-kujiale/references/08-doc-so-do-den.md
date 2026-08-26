# Đọc sơ đồ đèn Kujiale (mặt bằng có gizmo đèn)

> **Vì sao có file này.** Ảnh render chỉ nói **CÓ VẤN ĐỀ**. Sơ đồ đèn nói **VẤN ĐỀ NẰM Ở ĐÂU**.
> Cùng một triệu chứng "ảnh đều, không chiều sâu" có thể do bốn nguyên nhân khác hẳn nhau, và
> nhìn ảnh thì không tách được. Nhìn sơ đồ thì tách được trong 30 giây.
>
> ⚠️ **Có sơ đồ thì ĐỌC SƠ ĐỒ TRƯỚC**, rồi mới quay lại ảnh để xác nhận. Đừng làm ngược.
> Nếu người dùng gửi ảnh render mà chưa gửi sơ đồ, và triệu chứng là *đều / bẹt / không chiều sâu*,
> thì **xin sơ đồ đèn** — nó rẻ hơn ba vòng đoán số.

---

## 1. Bảng đọc biểu tượng

Kujiale đặt tên đèn trong scene bằng tiếng Anh, còn giao diện chỉnh là tiếng Trung. Bảng nối hai bên:

| Tên trong scene | Tiếng Trung | Biểu tượng trên mặt bằng | Bản chất |
|---|---|---|---|
| `Rectangle light-NN` | `面光源` | Chữ nhật + **mũi tên** chỉ hướng phát | Đèn diện, phát một phía theo mũi tên |
| `Sphere light-N` | `球形灯` | Vòng tròn + dấu **✕** ở tâm | **Phát mọi hướng** — không có hướng |
| `Spotlight N-N` | `聚光灯` | Vòng tròn + **nêm quạt** tô đậm | Chiếu có góc mở, có hướng |
| `Point light-N` | `点光源` | Chấm nhỏ, không nêm | Phát mọi hướng, không kích thước |
| `Glow-N` | `自发光` | Vòng tròn mờ ôm sát vật | Vật tự sáng — **nhìn thấy sáng, gần như không chiếu** |
| Dải dài mảnh dọc kệ/khe | `层板灯` / `灯带` | Chữ nhật rất dẹt bám mép kệ | Đèn hắt kệ / đèn hắt khe |

⚠️ **Màu biểu tượng ≈ màu đèn** — vàng = ấm, trắng/xám = trung tính hoặc lạnh. Chưa verify trong app
(Phụ lục B), nên dùng để **nghi ngờ**, không dùng để kết luận. Muốn chắc thì mở panel đèn đọc `色温`.

---

## 2. Năm bước đọc

### Bước 1 — Đếm và phân lớp
Chia hết đèn vào ba lớp của C4. Viết ra giấy, đừng đếm trong đầu.

| Lớp | Gồm gì |
|---|---|
| **Nền** | `面光源` bù cửa sổ · `球形灯`/`点光源` giữa phòng · `太阳光` + `天光` |
| **Chức năng** | `筒灯`/`射灯`/`聚光灯` rọi xuống bàn, giường, bếp |
| **Nhấn** | `层板灯`, `灯带`, đèn bàn, `自发光` của thiết bị |

> Phòng ngủ ~9–12 m² mà đếm ra **trên 8 nguồn** thì gần như chắc chắn thừa. Mỗi đèn nền thừa
> **ăn mất một nấc gradient** — xem `03-cong-thuc-phong.md`.

### Bước 2 — Truy đèn VÔ HƯỚNG ở giữa phòng
`球形灯` hoặc `点光源` đặt gần tâm phòng là **thủ phạm số một của "ảnh đều"**.
Nó phát đi mọi hướng từ giữa → mọi tường nhận gần bằng nhau → **gradient bị san phẳng**,
và không có thao tác chỉnh số nào cứu được vì lỗi nằm ở *vị trí + tính vô hướng*, không ở cường độ.

→ **Tắt hẳn, render thử.** Đừng dìm. Dìm thì vẫn còn cái sàn đều.

### Bước 3 — Đếm đèn bù cửa sổ
Bình thường mỗi ô cửa **một** `面光源` hắt vào là đủ. Thấy **hai cái chồng lên nhau cùng bắn vào**
thì ánh sáng đang bị gánh kép: đầu xa cửa được nâng lên bằng đầu gần cửa → mất trục sáng–tối
mạnh nhất mà phòng có sẵn.

→ Bỏ cái xa cửa hơn, giữ cái ốp cửa, rồi mới chỉnh cường độ cái còn lại.

### Bước 4 — Soi xem đèn nào rơi vào vùng ĐÁNG RA PHẢI TỐI
Khoanh trên sơ đồ vùng **tiền cảnh** (mép dưới khung hình, sát camera) và **góc chết**.
Đèn nào nằm trong đó là đèn đang giết chiều sâu. Chiều sâu sinh ra từ **tiền cảnh tối → hậu cảnh sáng**;
đặt đèn ở tiền cảnh là tự tay xoá nó.

→ Tắt, không dìm.

### Bước 5 — Đối chiếu đèn nhấn với điểm nhấn thiết kế
Liệt kê ba thứ trong phòng **đáng** được nhìn trước. Rồi xem có đèn nhấn rơi đúng vào đó không,
và có đèn nhấn nào đang rọi vào thứ **không đáng** không. Đây là chỗ hay lệch nhất: đèn nhấn
được bố theo *hạng mục thi công* chứ không theo *đường dẫn mắt*.

---

## 3. Bảng chẩn đoán — triệu chứng ảnh → dấu hiệu sơ đồ

| Ảnh bị gì | Tìm gì trên sơ đồ | Xử |
|---|---|---|
| Đều, không góc tối, không chiều sâu | `球形灯`/`点光源` gần tâm phòng | Tắt hẳn |
| Đầu xa cửa sáng ngang đầu gần cửa | ≥2 `面光源` chồng ở cửa | Bỏ bớt còn 1 |
| Tiền cảnh không chìm được | `聚光灯` nằm ở dải sát camera | Tắt |
| Đèn nhấn bật rõ mà vẫn vô nghĩa | Lớp nền đông quân | Dìm nền — **thứ bậc là TỈ LỆ** |
| Đèn bàn/đèn ngủ không tạo vũng sáng | Nền quá sáng, **không phải đèn quá yếu** | Dìm nền trước, đừng đẩy đèn bàn |
| Sáng đều khắp một hõm kệ | `层板灯` đặt hở, không có gờ chắn | Lùi dải vào sau gờ 15–20mm |
| Cụm tròn cháy trắng sau đồ trên kệ | Nguồn dải lộ mặt, hoặc `炫光` quá tay | Giấu nguồn hoặc hạ `炫光` |

---

## 4. Luật cứng rút từ file này

1. **Vị trí sai thì số nào cũng sai.** Đèn vô hướng ở giữa phòng, đèn ở tiền cảnh — hai thứ này
   phải **tắt**, không phải dìm. Dìm chỉ làm ảnh tối đi mà vẫn đều.
2. **Tắt trước, chỉnh số sau.** Render một lần sau khi tắt để thấy phòng thật sự cần gì,
   rồi mới bật lại từng cái một. Ngược lại thì không bao giờ biết cái nào đang hại.
3. **Đèn nhấn không cứu được nền sáng.** Xem `03-cong-thuc-phong.md` — muốn nhấn nổi thì hạ nền.

---

# PHẦN B — Bảng tham số đèn, đọc từ app thật

> ✅ **Số ĐÃ THẤY TRONG APP** (ca 20, bản Kujiale giao diện **tiếng Anh**, 2026-08).
> Khác với phần lớn giáo trình còn ⚠️. Nhưng vẫn là **một** bản dựng trên **một** máy — gặp máy khác
> giao diện tiếng Trung thì đối chiếu theo bảng dịch dưới, đừng giả định số giống nhau.

## B1. Bảng dịch nhãn — EN ↔ 中文 ↔ Việt

Panel `面光源` / **Rectangle light**:

| Giao diện EN | 中文 | Tiếng Việt | Đơn vị | Ghi chú |
|---|---|---|---|---|
| `Status` | `开关` | Bật/tắt | on–off | |
| `Double sided` | `双面发光` | Phát hai mặt | on–off | Bù cửa sổ để **OFF** — chỉ bắn vào phòng |
| `Lighting Color` | `色温` | Nhiệt độ màu | **K** | Thanh trượt đỏ→xanh |
| `Brightness` | `亮度` | Độ sáng | **%** | **Vượt được 100%** — quan sát tới 350% |
| `Area light scattering angle` | `面光源扩散角` | Góc tán đèn diện | **°** | Nhỏ = định hướng = gradient dốc |
| `Height` | `高度` | Cao độ tâm đèn | mm | Tính từ sàn |
| `Front View` / `Side View` | `正视图` / `侧视图` | Nhìn chính diện / cạnh | — | Ô số bên trái = **góc xoay**. `0°` = ngang, `180°` = chiếu thẳng xuống |
| `Length` / `Width` | `长` / `宽` | Dài / Rộng | mm | **Xem B2 — đây là ô quan trọng nhất panel** |
| `Apply the light properties to...` | `应用灯光属性到…` | Áp thuộc tính sang đèn khác | — | Đồng bộ hàng loạt |

Panel `聚光灯` / **Spotlight** và `点光源` / **Omni Light** — thêm:

| Giao diện EN | 中文 | Tiếng Việt | Ghi chú |
|---|---|---|---|
| `Affect specular` (`Global` \| `Separate`) | `影响高光` | Ảnh hưởng điểm bóng | ⚠️ **Quan sát thấy mặc định TẮT** — xem B4 |
| `Radius` | `半径` | Bán kính cầu sáng | Nhỏ → bóng gắt; lớn → bóng mềm |

⚠️ **Bẫy đặt tên:** cây scene ghi `Sphere light-5`, panel thuộc tính mở ra **`Omni Light - 5 Properties`**.
Cùng một đèn, hai tên. Đừng đi tìm đèn thứ hai.

## B2. 🔴🔴 `%` LÀ MẬT ĐỘ, KHÔNG PHẢI LƯU LƯỢNG

Đây là cái bẫy tốn nhiều vòng render nhất. Bảng số thật của một phòng ngủ 9 m²:

| Đèn | `Brightness` | Kích thước | Diện tích | **% × diện tích** |
|---|---|---|---|---|
| `Rectangle light-18` — bù cửa sổ | 200% | 639 × 1815 | **1,16 m²** | **232** |
| `Rectangle light-22` — hắt kệ | **350%** | 1228 × 20 | 0,025 m² | **8,6** |
| `Omni Light-5` — đèn bàn | 50% | cầu r = 50 | 0,031 m² | **1,6** |

Nhìn cột `Brightness`: đèn hắt kệ **350%** trông như đèn mạnh nhất phòng.
Nhìn cột cuối: nó **yếu hơn đèn bù cửa sổ 27 lần**. Đèn bàn yếu hơn **145 lần**.

> **Không bao giờ so `%` giữa hai đèn khác kích thước.** Nhân với diện tích rồi mới so.
> Một dải LED rộng 20mm ở 350% vẫn là một cái đèn tí hon.

⚠️ **Cần thí nghiệm xác nhận** (chưa verify — engine có thể chuẩn hoá % theo tổng lưu lượng thay vì mật độ):
> Đặt một `面光源` ở `100%`, render, chụp lại. Nhân đôi `Length`, giữ nguyên `100%`, render lại.
> **Sáng lên rõ** → `%` là mật độ, phải nhân diện tích (bảng trên đúng).
> **Sáng như cũ** → `%` là tổng lưu lượng, diện tích chỉ đổi độ mềm bóng.
> Một phút chạy, chốt được một câu hỏi treo của cả giáo trình.

## B3. Thang độ sáng — chốt được một phần

Giáo trình treo ba thang song song (0–800 · `瓦` · `%`). Bản này chạy thang **`%`**,
và **`%` không dừng ở 100** — quan sát 50 / 200 / 300 / 350%.
→ `100%` **không phải trần**, chỉ là mốc mặc định. Quy đổi sang thang 0–800 vẫn ⚠️ chưa có cơ sở.

## B4. 🔴 `Affect specular` / `影响高光` mặc định TẮT — một phần của bệnh "bệt"

Thấy TẮT trên cả `Spotlight` lẫn `Omni Light`. Tắt = đèn đó **không sinh điểm bóng** trên vật liệu.
Hệ quả: mặt bàn gỗ, khung kim loại, sơn bóng đều mất sparkle → đọc ra như **matte đồng loạt**,
đúng triệu chứng "bệt / nhựa" ở `04-vat-lieu-texture.md` §4.

- **Đèn nhấn → BẬT.** Đèn bàn, hắt kệ, rọi tranh tồn tại để tạo điểm bóng.
- **Đèn nền bù cửa sổ → để tắt cũng được.** Nó không phải nguồn tạo highlight.

## B5. Nhiệt độ màu — cấm dải giữa

Bộ quan sát được: `6500K` (trời) · `4000K` (rọi) · `3500K` (hắt kệ + đèn bàn).
Cái **4000K** không lạnh cũng không ấm — nó **làm đục cả hai đầu** và xoá luôn cặp nóng–lạnh.

> Cảnh nội thất ấm: trời **5500–6500K**, đèn nhân tạo **2700–3000K**.
> **Không để đèn nào ở dải 3800–4500K.** Có nó thì mọi nỗ lực trộn nóng–lạnh đều bị hoà tan.

## B6. Bốn lỗi số khác, đọc thẳng từ panel

1. **Đèn nhấn yếu hơn đèn nền** — đèn bàn 50% trong khi bù cửa sổ 200%. Nhấn yếu hơn nền
   thì không đời nào ra vũng sáng. Xem luật "thứ bậc là TỈ LỆ" ở `03-cong-thuc-phong.md`.
2. **`Area light scattering angle` để mặc định 85°** — gần bán cầu → toả khắp → gradient bẹt.
   Muốn dốc thì hạ **55–65°**.
3. **Cao độ đèn rọi không khớp vật đã dựng** — `Spotlight` ở `2600mm` trong phòng trần `2880mm`:
   nguồn lơ lửng cách trần 280mm trong khi đèn âm trần đã model nằm sát trần. Đặt sát trần.
4. **Dải LED quá mảnh thì cháy** — `Width 20mm` ở 350% cho ra cụm tròn cháy trắng. Nới **35–40mm**
   để mềm, hoặc lùi vào sau gờ chắn 15–20mm.


## B7. 🔴🔴 KHOÁ MỐC LẠNH — dòng bắt buộc của mọi phiếu dìm nền

Trong gần như mọi cảnh nội thất: **nền = nguồn LẠNH** (trời, `天光`, `面光源` bù cửa sổ 5500–6500K)
và **nhấn = nguồn ẤM** (đèn bàn, hắt kệ, rọi 2700–3000K).

> ⇒ **Mọi thao tác "dìm nền, đẩy nhấn" tự động xoay cả khung sang ẤM.**

Ca 21 xoay trục **12–24 lần** chỉ trong một phiếu (lạnh ÷2, ấm ×6–12, lại còn hạ K của phần ấm),
và không ai nhận ra cho tới khi nhìn ảnh: cánh tủ melamine trắng kem đọc ra màu hổ phách.

**Phép kiểm, chạy trên mọi ảnh sau khi dìm nền:**
soi một **bề mặt trắng nằm trong vùng bóng** (cánh tủ, tường, ga giường).
- Còn hơi **xanh xám** → đạt, trục nóng–lạnh còn sống.
- Ngả **vàng/cam** → hỏng, phải bơm lại nguồn lạnh trước khi làm gì khác.

**Cách bơm lại — RẼ NHÁNH theo lớp phòng (xem `03-cong-thuc-phong.md` §Cửa nhìn ra đâu):**

- **Phòng có trời thật** → đẩy **`天光` / sky light ở panel render**, đừng đẩy `面光源` bù cửa sổ
  (nó sẽ san phẳng gradient trở lại). `天光` là ambient, bơm lạnh vào bóng mà gần như không đụng trục sáng.
- **Phòng chỉ mở ra lô-gia / giếng trời / hành lang** → **không có `天光` để bơm.** Vặn nó là vặn vào chỗ trống.
  Lấy mốc lạnh bằng ba cách khác:
  1. `溢色修正` (khử tràn màu) **tăng** — chặn màu ấm bò vào vùng bóng qua GI. ⚠️ chưa verify trong app.
  2. Giữ vùng tối **TRUNG TÍNH** thay vì làm nó lạnh — xám trung tính cạnh hổ phách thì mắt tự đọc ra lạnh.
  3. Giữ `面光源` bù cửa ở **6500K** dù ánh dội lô-gia thật là 4500–5500K. Sai vật lý ở mức
     không ai nhìn ra, mà là **mốc lạnh duy nhất** còn lại. Đổi đi thì mất trắng.

### Hệ quả: `扩散角` phục vụ hai việc ngược nhau

| Việc | Cần góc tán |
|---|---|
| Gradient dốc, chiều sâu | **hẹp** 55–70° |
| Bơm ánh lạnh vào vùng bóng | **rộng** 85°+ |

**Đừng ép một đèn làm cả hai** — mất một trong hai, chắc chắn.
Tách: gradient giao cho `面光源`; ánh lạnh trong bóng giao cho `天光`.
