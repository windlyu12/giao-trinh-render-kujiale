# C10. Ảnh vân — nguồn, chuẩn, và chống lặp

> **Sau chương này bạn làm được:**
> - Chọn được ảnh vân dùng được và loại thẳng ảnh rác, không mất công chỉnh vô ích
> - Biết lấy ảnh vân ở đâu cho ảnh gửi khách mà không dính bản quyền
> - Từ một bộ PBR 8 file, rút đúng 3–4 file Kujiale thật sự dùng
> - Kiểm và sửa ảnh nối liền (四方连续) bằng công cụ có sẵn trong app, không cần Photoshop
> - Nhập đúng kích thước thật để vân không bị phóng to thu nhỏ
> - **Phá được lỗi "mười cánh tủ một vân"** bằng bộ công cụ tài khoản cá nhân dùng được
> - Thêm dấu vết sử dụng đúng liều — đủ để ảnh có hơi người, không thành nhà hoang

---

## 10.1. Vì sao ảnh vân ăn bảy phần

Cộng đồng render Trung Quốc có câu **「三分材质，七分贴图」** — ba phần vật liệu, bảy phần ảnh vân. Chương 5 đã dạy bạn ba phần: bốn cần gạt `反射颜色` / `反射光泽度` / `凹凸比例` / `折射`. Chương này là bảy phần còn lại.

Lý do rất kỹ thuật: **Kujiale suy ra và khuếch đại độ nổi, độ phản xạ từ chính ảnh màu bạn đưa vào.** Ảnh gốc nén quá tay, có bóng đổ nướng sẵn, phân giải thấp hay lộ chu kỳ lặp — thì bạn kéo `反射光泽度` kiểu gì cũng không cứu được. Sai từ nguyên liệu thì không có cần gạt nào chữa.

Ba lỗi ảnh vân giết ảnh nhanh nhất, xếp theo mức độ:

| Lỗi | Mắt bắt ra sao |
|---|---|
| **Lặp vân** — mười cánh tủ cùng một thớ | Não bắt chu kỳ trong chưa tới 3 giây. Lỗi số 1 |
| **Sai tỉ lệ vân** | So với tay nắm, bản lề, chiều cao cửa là lộ ngay — xem 10.6 |
| **Bóng nướng sẵn trong ảnh** (baked shadow/AO) | Đèn trong cảnh chiếu một hướng, bóng trong ảnh vân lại hướng khác → ảnh "chết" |

---

## 10.2. Lấy ảnh vân ở đâu

Ngân sách mua nguyên liệu đã được duyệt, nên đừng tiếc tiền ở khâu này — nó rẻ hơn thời gian bạn ngồi cứu ảnh rác.

| Nguồn | Loại | Bản quyền cho ảnh gửi khách & chạy quảng cáo | Dùng khi |
|---|---|---|---|
| **Poliigon** (gói năm ~179 USD ⚠️ giá đổi theo thời điểm) | Trả phí | ✅ rõ ràng, an toàn nhất | Gỗ, đá, vải chất lượng cao — xương sống thư viện công ty |
| **Poly Haven**, **ambientCG** | Miễn phí CC0 | ✅ CC0, dùng thương mại thoải mái | Bổ sung, và toàn bộ bộ map dấu vết ở 10.8 |
| **myEGGER**, **An Cường** | Ảnh vân chính chủ hãng | ⚠️ **phải đọc điều khoản / hỏi hãng trước** | Đúng mã ván công ty đang bán — quan trọng nhất về mặt nghiệp vụ |
| Thư viện Kujiale `实时材质通用库`, nhãn `精选`, `品牌馆` | Có sẵn trong app | ✅ | Xem lại Chương 5 mục 5.3 |
| Các trạm ảnh vân Trung Quốc | Trả phí/miễn phí lẫn lộn | ⚠️ mù mờ | Tham khảo, đừng dùng cho ảnh chạy quảng cáo |

> 📌 **Ảnh vân đúng mã hàng công ty bán là thứ đáng đầu tư nhất.** Khách chọn mã ván A trên bảng mẫu, ảnh render phải ra đúng vân đó. Ảnh vân "gỗ óc chó chung chung" tải trên mạng dùng để dựng nhanh thì được, nhưng ảnh chốt hợp đồng mà lệch vân là rủi ro nghiệm thu.

### Bốn dấu hiệu loại thẳng, không cần thử

1. **Ảnh chụp nghiêng, có phối cảnh** (`图片有透视`) — vân méo, không nối liền được.
2. **Có đốm sáng hoặc bóng nướng mạnh** không tẩy được.
3. **Nhỏ hơn ~1000px** cho mảng lớn. Chuẩn Kujiale khuyến nghị **≥ 2000×2000px**.
4. **Có một chi tiết đặc trưng quá to** — mắt gỗ lớn, vệt đá đậm. Lát ra là lộ chu kỳ ngay.

---

## 10.3. Giới hạn tải lên — số chính thức

| Mục | Giới hạn | Nguồn |
|---|---|---|
| File màu chính (`漫反射`) | **≤ 5 MB** | Chính thức |
| Ảnh `凹凸` và `反射` | **≤ 2 MB** | Chính thức |
| Cạnh dài nhất | **≤ 5000 px** | Chính thức |
| Khuyến nghị tối thiểu | **≥ 2000 × 2000 px** | Chính thức |
| Hệ màu | **RGB bắt buộc** | Chính thức |
| Định dạng | jpg, jpeg, png, bmp, jp2, tiff, tif — **khuyến nghị jpg** | Chính thức |
| Kích thước vật lý khai báo | 10 mm – 5000 mm | Chính thức |
| Tải hàng loạt | tối đa **100 mẫu/lần** | Chính thức |

> ⚠️ **Con số 2 MB có ba cách giải thích trong tài liệu chính thức** — một bài nói đó là giới hạn riêng của ảnh `凹凸`/`反射`, bài khác nói là của sản phẩm lát, bài khác nữa nói là cổng tải lên đời cũ.
> **Quy tắc an toàn khỏi phải nhớ: mọi ảnh để ≤ 2 MB, riêng ảnh màu chính được phép tới 5 MB.** Làm vậy thì cổng nào cũng qua.

**Quy trình nén trước khi tải:**
1. Ảnh màu: cạnh dài về **2048px** là đủ cho hầu hết cánh tủ và tường. Cận cảnh đặc biệt để 4096 nếu vẫn dưới 5 MB.
2. Ảnh `凹凸` / `反射`: về **1024–2048px**, JPEG chất lượng ~80 → gần như luôn dưới 2 MB.
3. Dùng **PNG** khi ảnh có kênh trong suốt, hoặc màu trơn/chuyển sắc mịn (tránh vệt sọc). **Tránh PNG cho vân nhiều chi tiết** — file nặng, dễ vượt hạn.

---

## 10.4. Từ bộ PBR 8 file, Kujiale dùng đúng mấy file

Mua Poliigon về bạn sẽ nhận một bộ 6–8 file. Đừng tải hết lên — Kujiale không có chỗ nhận.

| File trong bộ | Kujiale dùng? | Xử lý |
|---|---|---|
| **Color / Albedo (COL)** | ✅ Bắt buộc | Nạp thẳng vào `基础颜色` / `漫反射` |
| **Reflection (REFL)** | ✅ Bắt buộc | Nạp vào `反射颜色` |
| **Gloss / Roughness (GLOSS)** | ⚠️ Phải đổi | Kujiale dùng `反射光泽度` (độ **bóng**), Roughness là độ **nhám** — hai thứ **nghịch đảo nhau**. Chỉ có Roughness thì **đảo ngược ảnh (invert)** rồi mới nạp |
| **Displacement / Height (DISP)** | ✅ Rất hợp | Đây là ảnh đen-trắng lý tưởng cho `凹凸` |
| **Normal (NRM — ảnh xanh tím)** | ⚠️ Đừng nạp thẳng | Kujiale mô tả `法线贴图` gần như `凹凸`; cách làm chắc ăn là **đổi Normal sang Height** rồi nạp vào `凹凸` bằng ảnh đen-trắng |
| **Metallic** | ❌ Bỏ | Không có kênh này. Gỗ công nghiệp vốn phi kim, không cần |
| **AO (Ambient Occlusion)** | ❌ Bỏ | Không có ô nhận. **Tuyệt đối không trộn AO vào ảnh màu** — thành bóng nướng sẵn |

**Kết luận: từ 8 file, bạn thực dùng 3–4.** Nhớ quy ước đen-trắng của Kujiale: **trắng lồi, đen lõm.**

Bảng đối chiếu đầy đủ các ô nhập trong `材质编辑` đã có ở Chương 5 mục 5.1.

---

## 10.5. Ảnh nối liền — `四方连续`

Kujiale gọi ảnh lát không lộ mối nối là **`四方连续` (tứ phương liên tục)**.

### Kiểm trong 30 giây

1. Mở Photopea (miễn phí, chạy trên trình duyệt) hoặc Photoshop.
2. Menu **`滤镜 → 其他 → 位移`** (Filter → Other → Offset).
3. Nhập ngang và dọc **bằng một nửa kích thước ảnh** — ảnh 2000px thì nhập 1000. Chọn **`循环卷绕`** (Wrap Around).
4. Đường nối gốc bây giờ chạy vào giữa ảnh. **Thấy lằn hoặc chênh màu ở giữa → chưa nối liền.**

### Sửa bằng công cụ có sẵn trong Kujiale — nhanh nhất

Không cần Photoshop. Kujiale có **`无缝拼接` (ghép không mối nối)** ngay trong `实时材质制作工具`:

> `材质替换` → `实时材质制作` → tải ảnh lên → bấm **`无缝拼接`** → khoanh **`材质选区`** → **BẬT `亮度均衡`** (cân bằng sáng) → `生成预览图` → `应用`

> ⚠️ **Giới hạn chính thức:** chỉ dùng cho **vân bất quy tắc** — gỗ, đá. **KHÔNG dùng cho vân có hoa văn lặp theo chu kỳ** (`循环花位`) như giấy dán tường hoa văn, vì nó sẽ phá mẫu.

### Sửa tay khi công cụ không cứu được

1. **Chỉnh đều bốn cạnh trước.** Kujiale nhấn mạnh phải `校正四边颜色明暗` — cân chênh sáng và chênh màu bốn cạnh, dùng vùng chọn chuyển sắc + Brightness/Contrast.
2. **Offset một nửa ảnh** để đưa đường nối ra giữa (như phần kiểm ở trên).
3. **Vá đường nối** bằng `仿制图章工具` (Clone Stamp, phím **S**) và cọ chữa vết. Xử lý nối theo phương ngang trước — thuận thớ — rồi mới sang phương dọc.
4. **Offset ngược lại đúng giá trị cũ** để trả ảnh về vị trí ban đầu.
5. **Làm ảnh đen-trắng SAU CÙNG.** Nếu làm `凹凸` trước rồi mới sửa nối liền thì hai kênh lệch nhau.

> 💡 **Lỗi ngược ít ai ngờ: nối liền quá "sạch" lại lộ lặp.** Ảnh đều tăm tắp, không có chỗ đậm chỗ nhạt, lát ra thành lưới. Chọn ảnh gốc **có biến thiên tự nhiên** thì đỡ hơn hẳn.

---

## 10.6. Kích thước và hướng vân

### Công thức chỉ có một dòng

> **Kích thước nhập vào Kujiale = kích thước THẬT của tấm vật liệu lúc chụp ảnh, không phải kích thước ảnh tính bằng pixel.**

Tài liệu chính thức ghi rõ: kích thước tải lên là dài × rộng thật của tấm ván lúc chụp, để tỉ lệ vân không bị phóng to hay thu nhỏ.

- Ảnh chụp một viên gạch 800×800mm → nhập **800×800**.
- Ảnh là mảng 2×2 viên → nhập **gấp đôi**.
- Ảnh tải trên mạng không rõ khổ → ước theo mốc thật: **bề rộng một thớ gỗ khoảng 150–220mm**.

### Bảng khổ thật vật liệu Việt Nam

| Vật liệu | Khổ thật phổ biến | Ghi chú |
|---|---|---|
| Ván MFC / MDF / HDF | **1220 × 2440 mm** | Khổ chuẩn. **Để mặc định 1000mm là sai** |
| Ván vượt khổ | 1830 × 2440 mm; MDF dài 1220 × 2745 mm | Hàng Malaysia/Đức |
| Laminate (HPL) | **1220 × 2440 mm** | Nẹp cạnh cùng mã |
| Acrylic | **1220 × 2440 mm** (cốt MDF 17mm) | Bóng gương → `反射光泽度` cao |
| Sàn gỗ công nghiệp | Bản nhỏ 100–130; nhỡ 140–160; **to 190–220 mm**; dài 1200–1300 mm. Phổ biến ~**192 × 1205 mm** | An Cường ~193–202 × 1192 mm |
| Sàn nhựa SPC | Rộng ~180–228, dài ~1220 mm | — |
| Đá thạch anh / đá nung kết | **3200 × 1600 mm** khổ đại | Dùng cho đối hoa mặt bếp |
| Gạch ốp lát | 600×600 · 800×800 · 600×1200 · 750×1500 mm | Nhập đúng module |
| Giấy dán tường | Cuộn 0,53 × 10 m (~5,3 m²); khổ rộng Hàn 1,06 × 15,5 m | Kujiale nhận khổ tới 10 m |

### Hướng vân — quy ước nghề

| Bộ phận | Hướng vân |
|---|---|
| Cánh tủ đứng, cửa | **Dọc** — cảm giác cao, thanh |
| Hộc kéo, mặt bàn, kệ ngang | **Ngang** — theo chiều dài |
| Sàn gỗ | Cạnh dài ván **song song hướng nắng chính** từ cửa sổ, hoặc song song cạnh dài phòng |
| Cụm tủ liền dải | Toàn cụm chạy vân liền một hướng |

**Sai tỉ lệ, mắt nghề bắt thế nào:** cánh tủ rộng 400mm mà chỉ chứa nửa thớ vân → trông như gỗ khổng lồ, so với tay nắm là lộ. Viên gạch 800mm để thành 400mm → sàn trông vụn, số mạch gấp đôi bình thường, so với chiều cao cửa 2100mm là thấy sai.

---

## 10.7. Chống lặp vân — phần quan trọng nhất chương

> ⚠️ **CẢNH BÁO — QUYỀN TÀI KHOẢN:** tài khoản công ty là **cá nhân gói cao cấp (`高级`)**, không phải bản doanh nghiệp. Một số công cụ chống lặp bạn sẽ thấy người ta khoe trên mạng là **`企业功能`** — bấm vào không có. Mục này chỉ dạy thứ tài khoản của bạn dùng được. Danh sách bị khoá nằm cuối mục.

Kujiale **không có** nút "ngẫu nhiên hoá toàn sàn một phím". Nhưng có đủ đồ nghề để phá lặp.

### Bộ đồ nghề dùng được — tất cả đều `所有用户`

| Công cụ | Đường vào | Làm gì |
|---|---|---|
| **`定制随机纹理刷`** (cọ vân ngẫu nhiên) | Trong công cụ định chế → `工具` → `定制随机纹理刷` → quét lên tấm | **Dời vị trí vân** trên tấm sang một đoạn khác của ảnh gốc. Quét mỗi cánh một lần là mười cánh mười vân |
| **`定制旋转纹理刷`** (cọ xoay vân) | `工具` → `定制旋转纹理刷` → quét lên tấm | Đổi **vân ngang ↔ vân dọc** từng tấm |
| **Panel tham số** | Chọn tấm → `参数设置` → `材质纹理` | Đặt **góc tuỳ ý**, không chỉ ngang/dọc |
| **`材质刷`** (cọ vật liệu) | `工具` → `材质刷` → hút rồi bôi | Nhân bản vật liệu sang tủ khác; dùng chéo được giữa các công cụ định chế |
| **Xoay / dịch / phóng vân từng model** | Chọn model → thay vật liệu → panel phải | Xoay, dịch (offset), phóng tỉ lệ vân |
| **`大图通铺`** (ảnh khổ lớn bao trọn mảng) | Là kỹ thuật, không phải nút | Thay vì lát ảnh nhỏ lặp nhiều lần, dùng một ảnh vân khổ lớn phủ trọn mảng |

### Xếp theo hiệu quả trên công sức

| # | Cách làm | Hiệu quả | Công sức | Dùng cho |
|---|---|---|---|---|
| 1 | Nhập **đúng khổ thật** (10.6) | ★★★ | ★ thấp | Mọi bề mặt — làm đầu tiên |
| 2 | **`大图通铺`** ảnh khổ lớn nhiều thớ | ★★★ | ★★ vừa | Sàn tiền cảnh, tường, mặt đá |
| 3 | **`定制随机纹理刷`** quét từng cánh | ★★★ | ★ thấp | Cánh tủ, ván định chế |
| 4 | Tạo sẵn **3–5 biến thể** xoay/lật của cùng ảnh, gán xen kẽ | ★★ | ★★★ cao | Khi các cách trên chưa đủ |
| 5 | Chọn kiểu lát **lệch viên** thay vì thẳng hàng | ★★ | ★ thấp | Sàn gạch, sàn gỗ |

### Chữa theo từng bề mặt

**Sàn gỗ — lỗi "mười tấm một vân":**
Đừng dùng model sàn lặp một viên vân nhỏ. Ưu tiên ảnh sàn khổ lớn nhiều thớ (`大图通铺`), hoặc model sàn thư viện đã có sẵn nhiều biến thể. Kiểu lát lệch viên tự nó phá lặp tốt hơn lát thẳng hàng vì làm lệch các đường nối.

**Cánh tủ bếp / tủ áo — nhu cầu chính của công ty:**
Nhập khổ ván **1220 × 2440mm**. Cụm từ 3 cánh giống nhau trở lên thì **bắt buộc dùng `定制随机纹理刷` quét mỗi cánh một lần**. Hướng vân theo quy ước ở 10.6.

**Đá vân lớn — đối hoa gương (bookmatch):**
Đây là chỗ tài khoản cá nhân phải làm tay. Công cụ `图案排版` + `翻转` của Kujiale làm được việc này nhưng **bị khoá**. Cách thay thế cho kết quả tương đương:

> 1. Mở ảnh đá trong Photopea.
> 2. Nhân bản, **lật ngang** bản sao.
> 3. Ghép hai bản cạnh nhau thành **một ảnh lớn duy nhất** — đây chính là đối hoa gương như ngoài đời.
> 4. Tải ảnh lớn đó lên, dùng `大图通铺` phủ trọn mảng đá.

Làm một lần cho mỗi mã đá, lưu vào thư viện công ty, dùng mãi.

### Bị khoá — biết để khỏi mất công tìm

| Công cụ | Trạng thái |
|---|---|
| `图案排版` + `翻转` (đối hoa bằng công cụ) | ❌ `仅限商家用户` — làm tay theo cách trên |
| `连纹商品` / `连纹大岩板` | ⚠️ Tài liệu chính thức **tự mâu thuẫn**: tiêu đề ghi `企业功能` nhưng ô đối tượng ghi `全部用户`. **Bấm thử, ghi kết quả vào Phiếu verify** |
| `衰减贴图` (falloff map) | ❌ `只对企业号账号开放` |

**Ngưỡng nghiệm thu:** render cận một góc bất kỳ, đưa cho người thứ hai xem — **họ không chỉ ra được chu kỳ lặp trong 5 giây** là đạt.

---

## 10.8. Dấu vết sử dụng — làm bề mặt hết "nhựa"

Bề mặt sạch tuyệt đối, bóng đều tăm tắp là dấu hiệu tố cáo ảnh máy tính mạnh nhất. Đồ thật luôn có xước mảnh, vân tay mờ, chỗ bóng chỗ lì.

Kujiale **không có trình nối node** như 3ds Max, nên bạn phải **trộn sẵn dấu vết vào ảnh bằng Photopea** rồi tải lên theo từng kênh qua `实时材质制作工具` — công cụ này **mở cho mọi người dùng**, đường vào cá nhân qua **模袋云** (app.modaiyun.com).

### Đánh vào kênh nào

**Chủ yếu đánh vào `反射光泽度` và `反射`, gần như không đụng vào ảnh màu.** Lý do: thứ tố cáo ảnh giả mạnh nhất là **độ bóng đều tăm tắp**, không phải màu. Phá vỡ độ bóng là ăn tiền nhất, mà lại an toàn — không làm lệch màu ván khách đã chốt.

### Bộ 12 ảnh nên tải sẵn

Tải dạng ảnh xám, nối liền, 2K là đủ. Toàn bộ có trên Poly Haven và ambientCG, miễn phí CC0:

1. Xước mảnh thưa · 2. Xước mảnh dày · 3. Xước tròn do lau · 4. Vân tay và đốm mờ · 5. Vệt nước · 6. Bụi mịn · 7. Bẩn loang nhẹ · 8. **Biến thiên độ bóng** (ảnh "phá gương" — quan trọng nhất) · 9. Vệt lau · 10. Mòn cạnh · 11. Nếp vải · 12. Trầy xây xát nhẹ

### Bảng liều lượng

⚠️ Các số dưới là khuyến nghị thực hành, **chưa có chuẩn ngành**. Tự test rồi chốt thành chuẩn công ty.

| Yếu tố | Ảnh **bán hàng** | Ảnh nghệ thuật |
|---|---|---|
| Độ mờ lớp dấu vết trên kênh bóng | **8–20 %** ⚠️ | 25–50 % ⚠️ |
| Độ mờ lớp bẩn trên kênh màu | **5–12 %** ⚠️ | 15–30 % ⚠️ |
| Số điểm dấu vết mỗi khung hình | **2–3** | 4–6 |
| Phần trăm diện tích bị ảnh hưởng | dưới **15 %** ⚠️ | tuỳ |
| `凹凸比例` cho xước | **0,02–0,05** | 0,05–0,1 |

> 📌 **Ngưỡng hỏng:** khách nhận ra dấu vết mà không cần nhìn kỹ → đã quá tay.
> **Dấu vết chỉ nên "cảm thấy", không nên "nhìn thấy"** — chỉ hiện rõ khi ánh sáng xiên quét qua.

### Đặt ở đâu cho đáng công

1. **Vùng gần máy ảnh** — nơi mắt soi kỹ nhất. Một hai điểm ở đây đủ "bán" cả khung.
2. **Vùng nắng xiên quét ngang** — cửa sổ hắt qua mặt bàn, mặt sàn. Dấu vết chỉ hiện dưới ánh sáng này nên đặt đúng chỗ mới ăn tiền.
3. **Điểm mắt nhìn đầu tiên** — mặt bàn bếp trung tâm, mặt tủ chính.
4. **Bỏ hẳn** vùng xa, vùng tối, vùng khuất. Tốn công mà vô ích.

### Tuyệt đối không thêm dấu vết

- Trần nhà và tường phòng khách.
- Mặt phô sản phẩm chính trong ảnh cận cảnh.
- Bề mặt bán điểm nhấn sang — mặt đá cao cấp, acrylic bóng gương. Chỉ được phá bóng cực nhẹ, không cho vệt bẩn.

---

## 10.9. Duyệt ảnh vân trước khi nhập thư viện công ty

Làm một lần, cả team dùng mãi. Ảnh nào không qua đủ 7 ô thì không nhập.

- [ ] Cạnh ≤ 5000px, ảnh màu ≤ 5 MB, ảnh `凹凸`/`反射` ≤ 2 MB, hệ màu RGB
- [ ] Không có bóng nướng, không có đốm sáng, không có phối cảnh
- [ ] Đã kiểm nối liền bằng phép Offset một nửa — không thấy lằn giữa ảnh
- [ ] Đã nhập **đúng khổ thật** theo bảng 10.6
- [ ] Có đủ ảnh `凹凸` (nếu vật liệu cần nổi vân)
- [ ] Render thử **cận một góc** — người thứ hai không chỉ ra chu kỳ lặp trong 5 giây
- [ ] Đặt tên theo quy ước công ty: `{loại}-{mã hàng}-{mờ/bóng}-{khổ}`

---

## Thực hành

### Bài 1 — Cứu một ảnh vân rác
Tải một ảnh vân gỗ bất kỳ trên mạng (cố ý chọn ảnh xoàng). Kiểm nối liền bằng phép Offset. Nếu chưa liền, sửa bằng `无缝拼接` trong app; nếu công cụ không cứu được thì sửa tay theo 5 bước ở 10.5. Nhập đúng khổ 1220×2440.
**Đạt khi:** lát lên một mảng tường 3×3m, nhìn ở khoảng cách 1,5m không thấy đường nối.

### Bài 2 — Phá lặp một cụm tủ bếp
Dựng một cụm tủ bếp trên có **ít nhất 5 cánh giống nhau**, gán cùng một vật liệu vân gỗ rõ thớ. Render cận. Sau đó dùng `定制随机纹理刷` quét từng cánh, render lại.
**Đạt khi:** đặt hai ảnh cạnh nhau, khác biệt nhìn thấy rõ; và người thứ hai không chỉ ra được chu kỳ lặp ở ảnh sau.

### Bài 3 — Đối hoa gương mặt đá bếp
Lấy một ảnh đá vân lớn. Làm đối hoa gương thủ công theo 4 bước ở 10.7. Tải lên, phủ trọn mặt bếp bằng `大图通铺`.
**Đạt khi:** hai nửa mặt đá đối xứng qua trục giữa như đá thật ghép đôi ngoài công trình.

---

## Checklist tự chấm

- [ ] Nói được vì sao ảnh vân ăn bảy phần, và ba lỗi giết ảnh nhanh nhất
- [ ] Nhìn một ảnh vân là loại được ngay nếu dính 1 trong 4 dấu hiệu ở 10.2
- [ ] Từ bộ Poliigon 8 file, rút đúng 3–4 file cần và biết phải đảo ngược ảnh nào
- [ ] Kiểm được nối liền bằng phép Offset một nửa
- [ ] Dùng được `无缝拼接` trong app, và biết khi nào **không** được dùng nó
- [ ] Nhập đúng khổ thật cho ván, sàn, gạch, đá theo bảng 10.6
- [ ] Dùng thạo `定制随机纹理刷` và `定制旋转纹理刷`
- [ ] Làm được đối hoa gương thủ công trong Photopea
- [ ] Biết ba công cụ nào bị khoá với tài khoản cá nhân, khỏi mất công đi tìm
- [ ] Thêm dấu vết đúng liều — chủ yếu vào kênh bóng, 2–3 điểm mỗi khung

---

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Mười cánh tủ một vân | Gán cùng vật liệu, chưa quét cọ | `定制随机纹理刷` quét từng cánh |
| Sàn trông "vụn", nhiều mạch bất thường | Nhập sai khổ, viên bị thu nhỏ | Nhập đúng khổ thật (10.6) |
| Vân gỗ to như gỗ khổng lồ | Nhập khổ nhỏ hơn thật | So với tay nắm và chiều cao cửa, nhập lại |
| Lát ra thấy lằn ở mối nối | Ảnh chưa `四方连续` | Kiểm Offset, sửa bằng `无缝拼接` hoặc tay |
| Lát ra thành lưới đều tăm tắp | Ảnh nối liền quá "sạch", không có biến thiên | Đổi ảnh gốc có chỗ đậm chỗ nhạt, hoặc `大图通铺` |
| Bề mặt bệt, chỉnh cần gạt kiểu gì cũng không cứu | Ảnh chỉ có một map màu, không có `凹凸`/`反射` | Bỏ ảnh, tìm bản đủ map (Chương 5 mục 5.3) |
| Ảnh có bóng lạ, hướng bóng chỏi với đèn trong cảnh | Bóng nướng sẵn trong ảnh gốc, hoặc trộn nhầm AO vào ảnh màu | Bỏ ảnh; không bao giờ trộn AO vào kênh màu |
| Tải lên bị chặn | Vượt 5 MB, hoặc quá 5000px, hoặc không phải RGB | Nén theo 10.3; nhớ quy tắc an toàn ≤ 2 MB |
| Ảnh bẩn trông như nhà hoang | Quá liều, hoặc rải khắp thay vì 2–3 điểm | Hạ độ mờ về 8–20 %, gom về vùng gần máy ảnh và vùng nắng xiên |
| Không tìm thấy nút `图案排版` | Đó là chức năng doanh nghiệp | Làm đối hoa gương thủ công (10.7) |

---

## Nguồn số liệu

**Chính thức — help center Kujiale:**
- Giới hạn tải ảnh vân, định dạng, hệ màu, số lượng mỗi lần
- Quy tắc kích thước nhập = khổ thật của tấm lúc chụp
- `无缝拼接` trong `实时材质制作工具`, kèm giới hạn không dùng cho vân hoa văn chu kỳ (bài cập nhật 15/10/2025)
- **`定制随机纹理刷` và `定制旋转纹理刷` — bài `3FO4K4WOA1QV`, cập nhật 17/10/2024, đối tượng `所有用户`**
- `材质刷` — bài `3FO4K4VRXEPW`, cập nhật 10/09/2024, đối tượng `所有用户`
- Thay vật liệu và chỉnh xoay/dịch/phóng vân — bài `3FO4K4VY3X2D`, cập nhật 27/11/2024
- `图案排版` giới hạn `仅限商家用户`; `衰减贴图` chỉ mở cho tài khoản doanh nghiệp
- Quy trình sửa nối liền: cân sáng bốn cạnh trước, làm ảnh đen-trắng sau cùng

**Đối chiếu ngoài Kujiale:**
- Bộ map bắt buộc COL / REFL / GLOSS / NRM và quy tắc đảo Gloss ↔ Roughness — tài liệu Poliigon
- Khổ thật vật liệu Việt Nam — quy cách nhà sản xuất (An Cường, ván nhập Malaysia/Đức)

**Số kinh nghiệm, chưa có chuẩn ngành — đánh ⚠️:**
- Toàn bộ bảng liều lượng dấu vết ở 10.8
- Giá gói Poliigon và các trạm ảnh vân — đổi theo thời điểm, kiểm lại khi mua

**Chờ verify trong app (Phụ lục B):**
- `连纹商品` / `连纹大岩板` có bấm được trên tài khoản cá nhân không — tài liệu chính thức tự mâu thuẫn
- Con số 2 MB áp cho cổng tải lên nào
- Ảnh `法线` màu xanh tím nạp thẳng có ăn không, so với ảnh đen-trắng ở `凹凸`
