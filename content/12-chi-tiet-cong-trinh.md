# C12. Chi tiết công trình — thứ chín trên mười bộ ảnh bỏ qua

> **Sau chương này bạn làm được:**
> - Dựng khe hắt sáng **có mép thật**, không phải vệt sáng dán phẳng
> - Chọn đèn âm trần có vành và đặt nguồn sáng ảo đúng chỗ để không bị model che
> - Dựng ray đèn nam châm theo cách chính thức, hợp trần căn hộ
> - Dựng khe gió điều hòa khe dài trên mặt đứng của trần
> - Làm chân tường âm, phào nẹp, hốc tường, khoét lỗ sàn
> - Biết **dựng gì trước, bỏ gì đi** khi chỉ có nửa buổi cho một căn

---

## 12.1. Vì sao mấy centimet này ăn tiền

Đặt hai ảnh cạnh nhau: một ảnh có khe hắt sáng vẽ giả bằng dải sáng dán lên trần, một ảnh có khe hắt **dựng thành khối có độ sâu thật**. Ai cũng thấy ảnh thứ hai thật hơn, nhưng ít người nói được vì sao. Não bạn đọc ba tín hiệu:

| Tín hiệu | Cơ chế |
|---|---|
| **Bóng đổ tiếp xúc** | Góc trong khe luôn tối hơn mặt trần. Bật `环境阻光` (bóng môi trường — AO) khi render, mép khối sắc nét lên, não đọc đây là "hai mặt phẳng thật gặp nhau" |
| **Thị sai** | Máy ảnh lệch khỏi trực diện thì thành khe che một phần đáy khe. Chỉ khối 3D thật mới có. Ảnh dán phẳng luôn "trượt" sai |
| **Dải sáng gọn hay loang** | **Khe nông → sáng loang nhoè. Khe sâu → sáng bó gọn, tắt dần rõ.** Đây là quan hệ then chốt của cả chương |

Điểm hay của chương này: **hiệu quả cao mà không đòi kỹ thuật render cao.** Nó là việc dựng hình, làm một lần đúng thì mọi góc render đều được hưởng.

> ⚠️ **Nền trần dùng xuyên suốt chương: 2,7m thông thuỷ.** Mọi số hạ trần, độ sâu khe dưới đây tính trên nền này. Căn cụ thể chênh vài centimet không ảnh hưởng cách làm.

---

## 12.2. Vào đâu để dựng

Toàn bộ công cụ phần thô nằm ở **`行业库` → `全屋硬装工具`** (Thư viện ngành → Bộ công cụ phần thô toàn nhà). Trên giao diện tiếng Anh, `行业库` hiện là **`Advanced`**, và `全屋硬装` là mục **`Construction`**, phím tắt **`⌥3`**.

**Đường tắt nhanh hơn:** click thẳng vào mặt trần trong khung nhìn 3D là vào luôn `吊顶设计` (thiết kế trần). Click mặt tường, mặt sàn cũng vậy. Dùng cách này cho công việc hằng ngày.

### Sáu công cụ lõi

| Công cụ | Nghĩa | Dựng được gì | Giới hạn |
|---|---|---|---|
| `吊顶设计` | Thiết kế trần | Trần giật cấp nhiều cấp, khe hắt sáng, khe gió trên mặt đứng, trần bo cong | Chủ yếu khối đùn theo mặt phẳng; hình 3D tự do hạn chế |
| `墙面工具` / `墙面造型` | Tường, tạo hình tường | Ốp tường, phào `角线`, nẹp `装饰线`, chân tường `踢脚线`, chỉ âm, mảng lồi lõm | **Không khoét lỗ xuyên tường tuỳ ý** |
| `地面工具` | Sàn | Ốp lát, ghép hoa, bệ nâng `地台`, nẹp chuyển sàn | — |
| `壁龛工具` | Hốc tường | Hốc chữ nhật, đặt kích thước và số lượng ngay ở trang `户型` | Hốc chuẩn hình hộp; dị hình phải làm cách khác |
| `楼板开洞` | Khoét lỗ sàn/trần | Lỗ trên sàn hoặc trần | **Chỉ sàn/trần, không phải tường đứng** |
| `自由造型` / `酷大师` | Dựng khối tự do | Phép Boolean `交集/并集/差集`, `放样` có cung tròn, `倒角`, `拉伸`, `扫掠` | Là ứng dụng riêng, phải đăng ngược model về phương án |

`自由造型` trên giao diện tiếng Anh là **`Custom modeling`**, cũng nằm trong `Advanced`. Bản web riêng ở **kudashi.com**. Tài liệu chính thức ghi **`所有用户`** — tài khoản của bạn dùng được.

### Thang leo khi công cụ sẵn không đủ

1. **Thử `吊顶` / `墙面` trước** — nhanh nhất, nhập số trực tiếp.
2. **Không được thì sang `自由造型` / `酷大师`** — có `差集` để khoét lỗ, `放样` chạy được theo cung tròn (thứ mà `放样` trong `全屋硬装` **không** làm được). Xong bấm `发布` → về phương án vào `我的 → 上传` kéo model vào.
3. **Cuối cùng dùng SketchUp** — bạn đã biết sẵn. Dựng chi tiết khó rồi tải lên. Điều kiện chính thức: **đơn vị mm, cạnh ≤ 30 m, ≤ 3 triệu mặt, bản SketchUp ≤ 2024, ảnh vân RGB, không nhận vật liệu Vray, tên file không có dấu cách.**
4. **Hoặc mượn model** tủ định chế / model tham số / model thư viện để giả lập chi tiết.

> ⚠️ **Tường thẳng không khoét lỗ tuỳ ý được** — chỉ đặt được cửa và ô mở. Muốn lỗ xuyên tường tuỳ ý phải lách bằng `门窗洞`, hoặc vẽ lại khối tường trong `自由造型` rồi `差集`. ⚠️ Kujiale đổi giao diện thường xuyên, kiểm lại theo **Sổ ghi nhận**.

> 💡 **Hai chữ "lỗ mở" hoàn toàn khác nhau — đừng nhầm:**
> `门窗洞` (giao diện Anh: **`Opening`**) nằm trong nhóm đặt cửa — là lỗ trên **TƯỜNG**.
> `洞口` (giao diện Anh: **`Floor opening`**) nằm trong nhóm thêm kết cấu — là lỗ trên **SÀN hoặc TRẦN**.

> 💡 **Bẫy dịch cần nhớ:** nút `包管` (hộp bao ống) trên giao diện tiếng Anh bị dán nhãn là **`Partition wall`** — dịch lệch. Căn hộ nào cũng có hộp kỹ thuật phải bao ống; nếu bạn đang dùng bản tiếng Anh và đi tìm chữ "Pipe" thì sẽ không bao giờ thấy.

---

## 12.3. Trần giật cấp và khe hắt sáng

Đây là hạng mục **đáng làm nhất cả chương**: hiệu quả rất cao, công sức thấp, công cụ có sẵn.

### Số thật

| Hạng mục | Kích thước thật (mm) | Nguồn |
|---|---|---|
| Hạ trần giật cấp một cấp có khe | **120–250**, thường **150** | Nguồn Trung Quốc |
| Hạ trần — khuyến cáo Việt Nam | 120–250, **không quá 200** so với trần gốc | Vĩnh Tường / Knauf VN |
| Giật cấp hở — chuẩn Việt Nam | tổng ~**140** (70 mặt dựng + 70 hốc đèn) | Knauf / Vĩnh Tường VN |
| Giật cấp kín — Việt Nam | 60–80 | Vĩnh Tường VN |
| **Chiều rộng khe hắt** (đầu ra sáng) | **60–150**; hẹp nhất ~35 chỉ đủ nhét ray và cho ánh sáng cứng. **Đẹp thì nên ≥ 80** | Cộng đồng ⚠️ |
| **Độ sâu khe** | **60–100** cho nhà ở; công trình lớn ~150 | Cộng đồng ⚠️ |
| Chiều cao vách chắn sáng | ~80 — giữ đèn thấp hơn mép trần 10–20 để giấu đèn | Cộng đồng ⚠️ |
| Đèn LED cách mép khe | ~20 | Nguồn VN ⚠️ |

### Thao tác

1. Click mặt trần → vào `吊顶设计`.
2. Dùng `矩形` (chữ nhật) hoặc `偏移` (offset) vẽ vùng giật cấp. Với trần 2,7m, đặt **hạ trần `下吊` = 100–150mm** cho cấp có khe — đủ sâu mà không bí.
3. Chọn một `造型线` (đường tạo hình) → **tick `灯带`** trong bảng bên trái để bật khe hắt. Vào `剖面` (mặt cắt) chỉnh **`灯槽宽度` (rộng khe) = 60–100mm**. **Đừng để mặc định 50 — quá hẹp, sáng ra cứng.**
4. Copy đường đã đặt (giữ Ctrl) dán sang các cạnh còn lại để khe chạy liền, tránh đứt đoạn.

> 📌 Nhớ lại 12.1: **khe nông cho sáng loang nhoè, khe sâu cho sáng bó gọn.** Nếu render ra dải sáng nhoè không có hình, thủ phạm thường không phải đèn mà là **khe quá nông**.

### Trần bo cong

Trong `吊顶` dùng công cụ `弧线` vẽ cung, nhập đường kính chính xác. Nhưng **`放样` trong `全屋硬装` không chạy theo cung tròn** — nếu cần khe hắt chạy theo cung phức tạp thì phải sang `自由造型` (ở đó có `曲线放样`).

---

## 12.4. Đèn âm trần

Đây là hạng mục **đáng làm thứ hai**, và phần lớn kết quả nằm ở khâu **chọn model**, không phải kỹ thuật.

| Loại đèn | Đường kính khoét (mm) | Độ sâu lắp | Đặc điểm |
|---|---|---|---|
| `筒灯` — đèn âm trần thường | **75** (loại "4 tấc" ~100, "3 tấc" 90) | trần cần ≥ 80–100 | Ánh sáng toả rộng |
| `射灯` — đèn rọi | **55–75** (nhỏ hơn `筒灯`) | thân cao 60–100 | Chùm hẹp, chỉnh được góc |
| Loại không vành (trimless) | 55–75 | cần trần dày, đổ thạch cao ôm | Phẳng lì với mặt trần |
| Loại chống chói chôn sâu | 75 (cũng có 90/120) | thân ~100, chôn nguồn ≥ 60 | "Thấy sáng không thấy đèn" — cần hạ trần ≥ 80–100 |

**Khoảng cách bố trí:** cách tường ~**300–400mm**; các đèn cách nhau **800–1200mm** khi rửa tường.

> 💡 **Mẹo quan trọng nhất mục này:** đặt **nguồn sáng ảo lệch XUỐNG dưới model đèn 10–30mm.** Nếu đặt trùng vị trí model, chính model đèn sẽ che nguồn sáng và bạn được một cái đèn không phát sáng.

Chọn model có **vành và độ sâu thật**, đừng lấy model đèn dẹt như miếng dán. Vành tạo bóng đổ nhỏ quanh mép — đúng thứ não đọc là "đèn thật lắp vào trần thật".

> ⚠️ Module `照明设计` bản mới có chức năng `自动挖洞` — thả đèn vào trần là **tự khoét lỗ**, bỏ được bước khoét tay. Nhưng module đó là **chức năng doanh nghiệp**, tài khoản cá nhân chưa dùng được. Ghi ở đây để bạn biết mà không phải đi tìm.

---

## 12.5. Ray đèn nam châm

Ray đèn nam châm (`磁吸轨道灯`) là mặc định của thiết kế Trung Quốc hiện nay, và rất hợp căn hộ trần thấp.

### Chọn kiểu lắp trước khi dựng

| Kiểu | Ăn chiều cao | Dùng khi |
|---|---|---|
| **Lắp nổi siêu mỏng** (`明装超薄`) | **~3 cm** | ✅ **Mặc định cho căn hộ.** Không cần làm trần thạch cao toàn bộ, chỉ chừa đầu chờ điện rồi bắt vít |
| Âm trần (`嵌入式`) | Rãnh sâu 35–50mm, **đòi phải có trần hạ** | Chỉ khi đã có giật cấp cục bộ ở đúng vị trí |

> ⚠️ **Không làm trần thạch cao phẳng toàn bộ** (`满吊`) cho căn hộ — nó ăn mất 12–15cm và gây bí bức. Cách đúng là **ray nổi siêu mỏng + giật cấp cục bộ một dải** để giấu khe hắt và điều hòa âm trần.

### Kích thước thật

| Thông số | Số |
|---|---|
| Bề rộng ray gia dụng | **20–25 mm** (loại công trình dùng 35–40 mm) |
| Rãnh âm trần, nếu làm âm | **rộng hơn ray 2–3 mm** — ray 20mm thì rãnh 22–23mm |
| Độ sâu rãnh chôn | 35–50 mm |
| Chiều dài ray phổ biến | 1 / 1,5 / 2 / 3 m, ghép được |
| Module đèn rọi | Ø 50–80 mm, cao 60–100 mm |
| Module đèn khe dài | dài 200–400 mm, rộng 60–100 mm |
| Chừa đầu ray để kiểm tra | 100 mm cuối ray |

### Thao tác — cách chính thức

Tài liệu chính thức của Kujiale (`所有用户`) hướng dẫn dựng bằng `吊顶设计`, không phải bằng cách thả model:

1. Vào `行业库` → mở **`吊顶设计`**.
2. Dùng công cụ **`矩形`** vẽ dải ray, **bề rộng bằng bề rộng ray thật** (ví dụ 25–60mm), đặt **`凸出` = 0** (không lồi).
3. Gán vật liệu **`黑钛`** (titan đen) cho mặt ray → ra khung ray đen.
4. Gán **`发光材质`** (vật liệu tự phát sáng) cho phần khe sáng.
5. Đèn âm trần nhỏ đi kèm: dùng công cụ vẽ tròn, tìm tâm, bán kính ~40mm.

> 💡 **Đừng thả hàng chục nguồn sáng rời cho một dải ray** — cảnh sẽ nặng và render lâu. Dùng `发光材质` cho phần khe, rồi chỉ đặt vài nguồn sáng thật ở các module rọi cần quầng sáng. Phần đánh đèn cho ray học ở Chương 13.

> ⚠️ Bạn sẽ gặp tài liệu dạy dựng ray bằng cách **vẽ rãnh âm trần rồi thả model `线性射灯` + `阵列`**. Cách đó **đúng nhưng đòi phải hạ trần**, và bề rộng rãnh phải theo công thức **ray + 2–3mm**, không phải một con số cố định. Với căn hộ, cách chính thức ở trên hợp hơn.

---

## 12.6. Khe gió điều hòa

Chi tiết bị bỏ quên nhiều nhất, mà lại rất lộ khi thiếu: trần âm điều hòa mà không có miệng gió thì não biết ngay là thiếu thứ gì đó.

| Hạng mục | Kích thước thật (mm) |
|---|---|
| Miệng ra gió khe dài (`出风口`) | rộng **150** × dài **600–1000** |
| Miệng hồi gió (`回风口`) | rộng **230–260** × dài 600–1000 |
| Cửa kiểm tra (`检修口`) | **400 × 400** (có nơi 350×350 hoặc 450×450) |
| Khe gió tuyến tính hẹp | rộng 30–50 ⚠️ ước tính ngành |
| Đầu báo khói | Ø ~100, lồi ~40 ⚠️ |

**Thao tác — có bài hướng dẫn chính thức, `所有用户`:**

> `吊顶设计` → công cụ `矩形` hoặc `偏移` → `立面编辑` (chỉnh mặt đứng) → đặt `出风口` → xem lại bằng `吊顶漫游` → `返回装修`

Điểm mấu chốt là **`立面编辑`** — khe gió nằm trên **mặt đứng** của trần giật cấp, không phải mặt phẳng dưới. Vào đúng chế độ này mới đặt được.

> ⚠️ Model `出风口` trong thư viện chất lượng không đều, **nhiều model dựng sai hướng**. Xoay xem trước khi dùng.

---

## 12.7. Phào, nẹp, chân tường

Các đường này tạo **nét và bóng đổ nhỏ**, làm nổi khối và tách bạch mảng tường với trần. Công sức thấp, hiệu quả cao.

| Hạng mục | Kích thước thật (mm) |
|---|---|
| Phào thạch cao | rộng 60–200; nhà ở phổ biến **80–150**; phong cách tối giản chọn hẹp |
| Nẹp kim loại thu cạnh | 5–10 bề mặt |
| Chân tường truyền thống | cao **60–110**, lồi ra khỏi tường 5–10 |
| **Chân tường âm** | phẳng với tường hoặc lõm 10–20, cao **40–80** |
| Chỉ âm giữa tường và trần | rộng 10–20, sâu 10–20 ⚠️ ước tính thi công |
| Khe co giãn chân tường | chừa ~10 |

**Chân tường âm — thao tác chính thức (`所有用户`):**

> `行业库` → `全屋硬装` → `铺贴踢脚线` → giữ **Shift** chọn nhiều đường, thả Shift rồi click chuột trái để đặt → click vào chân tường để chỉnh **`工艺类型`** (chọn kiểu âm), **`高度`**, **`缝隙`**, **`材质`**

Chân tường thường thì dùng `成品踢脚线`, có **`材质刷` phím tắt `M`** để đồng bộ vật liệu nhanh.

Mặc định công cụ phủ cả phòng; giữ **Ctrl** để chỉ rải một mặt. Muốn một mặt tường nửa có nửa không: `拆分墙体` (tách tường) tại kích thước cần rồi chỉ rải một phần.

**Chỉ âm giữa tường và trần** không có công cụ chuyên. Giả bằng cách để mép trần giật cấp lùi vào + khe hẹp gán vật liệu đen; hoặc dựng khe trong `自由造型`.

---

## 12.8. Hốc tường và khoét lỗ

**Hốc tường chuẩn (`壁龛`) — nhanh nhất:** ở trang `户型`, chọn công cụ `壁龛`, đặt vào tường, click để chỉnh **kích thước và số lượng**.

**Hốc dị hình:** đặt `门窗洞` trong `户型` → vào `全屋硬装` → vẽ mặt dị hình + `拉伸` → dùng `矩形` bù mặt tại vị trí ô mở → vẽ tạo hình hốc mong muốn.

**Khoét lỗ sàn hoặc trần (`洞口`):** dùng `直线` / `弧形` / `矩形`, chuyển giữa chế độ `平面` (sàn) và `顶面` (trần), một lần vẽ được nhiều lỗ. Có thêm `连接 / 拆分 / 对齐` và bốn kiểu góc `内圆角 / 外圆角 / 内直角 / 切角`. Dùng cho thông tầng, lỗ cầu thang.

**Khoét lỗ tường cong:** `自由造型` → vẽ khối lỗ → `差集`.

---

## 12.9. Dựng gì trước — bảng ưu tiên

Khi chỉ có nửa buổi cho một căn, làm theo thứ tự này.

| Hạng | Chi tiết | Hiệu quả | Công sức | Quyết định |
|---|---|---|---|---|
| ⭐⭐⭐⭐⭐ | **Khe hắt sáng có mép thật** (sâu 80mm+) | Rất cao | Thấp | **Làm luôn, mọi cảnh** |
| ⭐⭐⭐⭐⭐ | **Đèn âm trần có vành và độ sâu** | Rất cao | Thấp | **Làm luôn** |
| ⭐⭐⭐⭐⭐ | **Màn TV có phát nội dung** | Rất cao | Rất thấp | **Làm luôn** |
| ⭐⭐⭐⭐ | Miệng gió khe dài | Cao | Trung bình | Làm cho phòng khách và bếp |
| ⭐⭐⭐⭐ | Ray đèn nam châm | Cao | Trung bình | Làm nếu concept là không đèn chủ |
| ⭐⭐⭐⭐ | Chân tường âm, nẹp chuyển sàn | Cao | Thấp | Làm — bóng đổ nhỏ nâng khối |
| ⭐⭐⭐ | Phào, nẹp trần, chỉ âm | Trung bình–cao | Thấp | Làm theo phong cách |
| ⭐⭐⭐ | Cửa kiểm tra điều hòa | Trung bình | Thấp | Làm cùng miệng gió |
| ⭐⭐ | Đầu báo khói, loa âm trần | Thấp–TB | Thấp | Chỉ khi trần trống và có cận cảnh |
| ⭐ | Ổ điện, công tắc | Thấp | Trung bình | **Bỏ qua** trừ cận cảnh tường |
| ⭐ | Khe cửa, bản lề, tay nắm | Rất thấp | Cao | **Bỏ qua** trừ cận cảnh cửa |

---

## Thực hành

### Bài 1 — Khe hắt sáng có mép thật
Trên căn hộ mẫu, dựng trần giật cấp một cấp quanh phòng khách: hạ trần 150mm, khe rộng 80mm. Render hai lần — một lần khe sâu 60mm, một lần sâu 100mm, giữ nguyên mọi thứ khác.
**Đạt khi:** nhìn hai ảnh cạnh nhau, thấy rõ ảnh khe sâu cho dải sáng **bó gọn** hơn, ảnh khe nông cho sáng **loang** hơn. Nói được vì sao.

### Bài 2 — Đèn âm trần đúng cách
Đặt một hàng đèn âm trần rửa tường TV: cách tường 350mm, các đèn cách nhau 1000mm. Chọn model có vành. Đặt nguồn sáng ảo **lệch xuống dưới model 20mm**.
**Đạt khi:** đèn có phát sáng (không bị model che), và nhìn thấy bóng đổ nhỏ quanh vành đèn.

### Bài 3 — Ray nam châm và khe gió
Dựng một dải ray nam châm nổi rộng 25mm chạy dọc trục phòng khách theo cách chính thức ở 12.5. Trên mặt đứng của dải trần giật cấp, đặt một miệng gió khe dài 150 × 800mm.
**Đạt khi:** ray có khung đen và khe sáng riêng biệt; miệng gió nằm đúng trên **mặt đứng**, không phải mặt phẳng dưới.

---

## Checklist tự chấm

- [ ] Nói được ba tín hiệu não dùng để phân biệt khe thật với khe vẽ giả
- [ ] Vào được `全屋硬装` cả bằng `行业库` lẫn đường tắt click mặt trần
- [ ] Phân biệt được `门窗洞` (lỗ tường) với `洞口` (lỗ sàn/trần)
- [ ] Dựng được trần giật cấp có khe hắt, tự nhập `灯槽宽度` thay vì để mặc định
- [ ] Đặt nguồn sáng ảo lệch xuống dưới model đèn 10–30mm
- [ ] Chọn được kiểu lắp ray nam châm hợp trần căn hộ, giải thích được vì sao không làm trần phẳng toàn bộ
- [ ] Đặt được miệng gió trên **mặt đứng** của trần bằng `立面编辑`
- [ ] Làm được chân tường âm với `工艺类型`, `高度`, `缝隙`
- [ ] Biết leo thang khi công cụ sẵn không đủ: `吊顶`/`墙面` → `自由造型` → SketchUp
- [ ] Thuộc bảng ưu tiên 12.9 — biết cái gì bỏ được

---

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Dải sáng khe hắt nhoè, không có hình | Khe quá nông, hoặc để `灯槽宽度` mặc định 50 | Tăng độ sâu khe lên 80–100mm, rộng 60–100mm |
| Đèn âm trần không phát sáng | Nguồn sáng ảo bị chính model đèn che | Hạ nguồn sáng xuống dưới model 10–30mm |
| Trần trông bí, phòng thấp | Làm trần phẳng toàn bộ, ăn 12–15cm | Chỉ giật cấp cục bộ một dải, ray dùng loại nổi siêu mỏng |
| Khe hắt đứt đoạn ở góc | Đặt `灯带` cho từng cạnh rời | Copy đường đã đặt bằng Ctrl dán sang các cạnh |
| Miệng gió nằm sai mặt | Đặt trên mặt phẳng dưới thay vì mặt đứng | Vào `立面编辑` rồi mới đặt |
| Model miệng gió quay sai hướng | Model thư viện dựng sai | Xoay xem trước khi dùng, đổi model khác |
| Không khoét được lỗ trên tường thẳng | Công cụ tường không cho khoét tuỳ ý | Lách bằng `门窗洞`, hoặc `自由造型` + `差集` |
| Khe hắt chạy theo cung bị gãy khúc | `放样` trong `全屋硬装` không nhận cung tròn | Dựng trong `自由造型` (có `曲线放样`) |
| Tải model SketchUp lên bị lỗi | Sai đơn vị, quá 30m, quá 3 triệu mặt, có vật liệu Vray, tên file có dấu cách | Kiểm theo điều kiện ở 12.2 |
| Rãnh ray nam châm rộng quá, nhìn hụt | Bê một con số cố định thay vì tính | Rãnh = **bề rộng ray + 2–3mm** |

---

## Nguồn số liệu

**Chính thức — help center Kujiale (đều ghi đối tượng `所有用户`):**
- Ray đèn nam châm: `吊顶设计` → `矩形` → `黑钛` + `发光材质` — bài `3FO4K4VK9ALF`, cập nhật 12/07/2024
- Trần không đèn chủ — bài `3FO4K4VK2VKI`
- Trần thạch cao giật cấp một cấp — bài `3FO4K4VUJWYA`, cập nhật 10/07/2024
- Miệng gió điều hòa trên mặt đứng trần — bài `3FO4K4VYVTEP`, cập nhật 11/07/2024
- Chân tường âm — bài `3FO4K4VHSEMQ`
- Chân tường thành phẩm và `材质刷` phím `M` — bài `3FO4K4VQJ7Q7`, cập nhật 19/08/2025
- Hốc tường — bài `3FO4K4VQ7N5Q`
- Khoét lỗ sàn/trần — bài `3FO4K4WML3P9`
- `酷大师` dựng khối tự do — bài `3FO4K4VW8YCX`, cập nhật 06/06/2025
- Điều kiện tải model SketchUp — bài `3FO4K4VYL1KH`

**Tiêu chuẩn và quy cách ngành:**
- Hạ trần, giật cấp hở/kín — Vĩnh Tường, Knauf Việt Nam
- Khoảng cách bố trí đèn âm trần — tham chiếu GB 50034 (Trung Quốc)
- Kích thước miệng gió, cửa kiểm tra — quy cách nhà sản xuất Trung Quốc

**Số cộng đồng, chưa có chuẩn chính thức — đánh ⚠️:**
- Chiều rộng và độ sâu khe hắt sáng, chiều cao vách chắn sáng
- Khe gió tuyến tính hẹp 30–50mm, đầu báo khói
- Chỉ âm giữa tường và trần

**Chờ verify trong app (Phụ lục B):**
- Tường thẳng có nút khoét lỗ trong bản hiện tại không
- Con số `凸出` của trần giật cấp một cấp trong bài chính thức là **bề rộng dải** hay **độ hạ trần** — tài liệu không ghi rõ, đừng bê số vào bản vẽ trước khi xem panel thật
- Chất lượng model miệng gió và model ray trong thư viện — thay đổi liên tục

---

## Tự tra video thực chiến

> 📌 **Sách này cho bạn ĐƯỜNG ĐI. Video cho bạn ĐÔI TAY.**
>
> Chương vừa rồi dựng khung: nguyên lý là gì, thứ tự làm ra sao, số nào tin được số nào không. Nhưng thao tác thật — chuột đi đường nào, bấm chỗ nào, chỉnh tới đâu thì dừng — thì **xem người ta quay màn hình học nhanh hơn đọc nhiều lần.** Người làm nghề Trung Quốc chia sẻ rất nhiều và rất thực chiến.
>
> **Đọc chương xong, tra vài video về đúng chi tiết phần thô, rồi quay lại làm.** Đó mới là cách chương này phát huy hết.

Dán nguyên cụm vào ô tìm kiếm của **小红书** hoặc **抖音 (Douyin)**:

| Từ khoá | Tìm được gì |
|---|---|
| `酷家乐 吊顶设计 教程` | Thiết kế trần — công cụ chính của chương |
| `酷家乐 灯槽 制作` | Làm khe hắt sáng |
| `酷家乐 磁吸轨道灯 画法` | Cách vẽ ray đèn nam châm |
| `酷家乐 出风口 制作` | Làm miệng gió điều hòa |
| `酷家乐 踢脚线 设置` | Đặt chân tường |
| `酷家乐 自由造型 教程` | Dựng khối tự do khi công cụ sẵn không đủ |

> 💡 **Bốn quy tắc lọc, dùng cho mọi từ khoá:** sắp theo `最新` (mới nhất) · ưu tiên bài có **ảnh chụp panel kèm số** · bỏ bài `AI一键` (quảng cáo) · **chỉ chép số từ bài ghi rõ template 3.0 hoặc 3.1**, bài cũ hơn thì chỉ học tư duy.
>
> Cách vào 小红书 từ Việt Nam, danh sách tài khoản đáng theo dõi, và mẫu ghi lại một ca thu được: xem **Phụ lục E mục E.10**.
