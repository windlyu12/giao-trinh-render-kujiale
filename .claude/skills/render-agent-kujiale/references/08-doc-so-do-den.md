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
