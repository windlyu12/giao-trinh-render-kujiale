# C11. Model và bày đồ — làm căn nhà có người ở

> **Sau chương này bạn làm được:**
> - Nhìn một model là biết dùng được hay phải loại, không cần phần mềm chuyên dụng
> - Chấm model bằng thang 10 điểm để dựng kho chuẩn cho cả team
> - Biết nhóm đồ nào quyết định độ thật, đáng dồn tiền vào đâu
> - Bày đồ kể được câu chuyện, không phải xếp hàng duyệt binh
> - Bản địa hoá cho khách Việt — biết thêm gì, tránh gì
> - Chọn và chiếu sáng cây xanh để không ra "cây nhựa"

---

## 11.1. Model quyết định độ thật nhiều hơn tham số render

Trong Kujiale bạn gần như không chỉnh được bộ máy render. Vậy thứ gì quyết định ảnh thật hay giả? **Chọn model gì.**

Nếp lún của đệm sofa, nếp rủ của tấm chăn, cá tính của món đồ bày — tất cả đều là **hình học nằm sẵn trong model**. Không tham số nào bịa ra được. Kujiale **không mô phỏng vải rơi**, nên chăn không có nếp trong model thì mãi mãi không có nếp.

> 📌 **Đầu tư vào thư viện model là khoản cho lời cao nhất trong toàn bộ nghề render trên Kujiale.** Nó cứu bạn khỏi việc ngồi chỉnh tham số hàng giờ cho một thứ vốn dĩ không chỉnh được.

Bày đồ (`软装`) là **bước gần cuối**: làm sau khi đã xong phần thô và đồ nội thất chính, làm trước khi vào giao diện render để bố đèn và đặt máy ảnh.

---

## 11.2. Nhận model rác bằng mắt

### Bảy dấu hiệu

| # | Dấu hiệu | Cách kiểm trong 10 giây |
|---|---|---|
| 1 | **Ít mặt** (low poly) | Phóng vào đường bo góc. Mép bàn tròn, thân bình mà **gãy khúc thành đa giác** → loại |
| 2 | **Trải UV sai** | Soi mặt cong và mặt bên của model gỗ. Vân **chạy sai hướng** hoặc **bị kéo giãn** → lỗi |
| 3 | **Thiếu bộ ảnh vân** | Model trông **bệt, phẳng lì, "nhựa"** dù đã đánh đèn đúng. Vải không có sợi, gỗ không có lỗ chân lông |
| 4 | **Tỉ lệ sai** | Kéo model ra, đối chiếu kích thước thật: **mặt ngồi ghế ăn ~45cm, bàn ăn cao ~75cm, giường đôi 1,5×2m**. Kujiale hiện kích thước khi kéo — luôn kiểm |
| 5 | **Pháp tuyến lộn** | Xoay quanh model 360°. Một số mặt **đen thui** hoặc **mất mặt** ở góc nhìn nhất định |
| 6 | **Bóng nướng sẵn vào ảnh vân** | Xoay model dưới đèn. **Vùng tối không dịch theo đèn** → bị nướng. **Đây là lỗi chết** |
| 7 | **Ảnh chụp dán làm vân** | Nhìn nghiêng thấy vân **dẹt**, không có chiều sâu |

> ⚠️ **Vì sao bóng nướng là lỗi chết:** nó cố định trong ảnh vân, không đổi theo đèn. Đặt model vào cảnh có hướng đèn khác thì bóng nướng **ngược hướng ánh sáng thật** — mắt bắt ra ngay và **không sửa được trong Kujiale**. Loại thẳng, bất kể model đẹp cỡ nào.

### Bảng chấm 10 điểm — dùng khi duyệt model vào kho công ty

| Tiêu chí | Điểm | Cách cho điểm |
|---|---|---|
| Mật độ mặt hợp lý, cạnh cong mượt | 2 | Mượt 2 · hơi gãy 1 · đa giác thô 0 |
| UV đúng, vân không giãn lệch | 1,5 | Đúng 1,5 · lệch nhẹ 0,75 · loạn 0 |
| Đủ bộ ảnh vân, không bệt | 2 | Đủ 2 · thiếu 1 · bệt 0 |
| Tỉ lệ đúng kích thước thật | 1,5 | Đúng 1,5 · lệch dưới 10% 0,75 · sai 0 |
| Pháp tuyến sạch | 1 | Sạch 1 · có lỗi 0 |
| **Không có bóng nướng** | 1 | Sạch 1 · có 0 |
| Chi tiết đặc trưng: nếp vải, chỉ may, khớp nối | 1 | Có 1 · không 0 |
| **Tổng** | **10** | |

**Ngưỡng:** ≥ 8 vào kho chuẩn · 6–7,9 dùng tạm, ưu tiên thay · dưới 6 loại.
**Luật riêng:** model dính bóng nướng → **loại thẳng bất kể tổng điểm**.

> 💡 **Cách kiểm nhanh nhất, dùng cho mọi model:** kéo model vào một cảnh trống, đặt **một đèn từ một phía**, xoay 360° rồi render một khung. Mọi lỗi — pháp tuyến lộn, bệt vân, bóng nướng, ít mặt — đều lộ ra cùng lúc.

---

## 11.3. Sáu nhóm đồ quyết định độ thật

Không phải mọi món đều đáng đầu tư như nhau. Xếp theo mức ảnh hưởng:

### 1. Sofa và ghế bọc vải, bọc nhung — nhóm số một

Model tốt khác model rác ở bốn chỗ: **nếp gấp thật** (đệm có vết lún, lưng tựa có nếp chùng, góc bọc có nếp túm — model rác là khối bo tròn trơn), **đường chỉ may** lồi lên thành gân thấy được mũi chỉ, **độ chùng** như vừa có người ngồi chứ không căng đét, và với nhung là **ảnh vân độ nhám đúng** để lên hiệu ứng đổi màu theo góc nhìn.

**→ Nhóm nên dồn tiền: lấy từ `品牌馆` hoặc trạm ngoài, đừng lấy thư viện miễn phí.**

### 2. Đồ vải mềm — chăn, khăn, thảm, gối

Độ rủ **phải nằm sẵn trong hình học model**, Kujiale không mô phỏng vải rơi trong luồng thường. Chọn sai là chịu. Tìm bằng từ khoá `搭毯` (chăn vắt), `褶皱` (nếp nhăn), `沙发毯`, `床尾毯`.

Thảm cần có sợi thật, không thì thành miếng dán sàn.

### 3. Rèm cửa — dùng công cụ, đừng dùng model

Kujiale có **công cụ rèm tham số riêng: `定制窗帘`**. Đường vào: `公共库 → 家饰 → 窗帘 → 定制窗帘`, hoặc trong `行业库 → 全屋家具定制`.

Nó chỉnh được số nếp gấp thân rèm và đầu rèm, `波幔` (diềm), kiểu `幔头`, kéo dài thu ngắn, trạng thái buộc lên hay thả xuống, đổi vải.

| Dùng gì | Khi nào |
|---|---|
| **`定制窗帘`** — mặc định cho căn hộ | Cần rèm vừa khít cửa, số nếp đều, đổi vải nhanh, báo giá theo mét |
| Model rèm rời | Cần kiểu rủ nghệ thuật, buộc lệch, kiểu đặc biệt mà tham số không tạo được |

### 4. Đèn trang trí

Kiểm ba chỗ: **chao đèn** (mỏng thì có xuyên sáng không), **dây và khớp nối** (có bị ít mặt thành ống lục giác không), **bóng đèn** (đã có vật liệu phát sáng chưa).

**Model đèn tốt tách phần phát sáng ra riêng** để bạn bật `自发光`. Model rác gộp cả cụm thành một khối, không sáng đúng được. Đèn thả nhiều dây thì để ý dây có **rủ tự nhiên** hay cứng đơ thẳng tắp.

### 5. Đồ trang trí nhỏ — nhóm tạo cá tính

Đây là chỗ ảnh Trung Quốc thắng đậm. Ba nguyên tắc:

- **Ưu tiên model cụm** (`组合` — đã bày sẵn chồng sách + bình + khay) hơn từng món rời, vì bố cục đã được người có mắt sắp.
- **Tránh lặp** — đừng dùng một bình hoa cho năm phòng.
- Sách nên có gáy cong đặt nghiêng; bình gốm nên có men không đều.

### 6. Thiết bị bếp và điện tử

Nhóm này **không cần nhiều mặt** — đồ công nghiệp bề mặt phẳng bóng. Cần đúng **tỉ lệ**, đúng **ảnh vân kim loại và kính**, đúng **logo và khe hở**.

> 📌 Một cái tủ lạnh ít mặt nhưng có ảnh vân inox đúng vẫn thật hơn tủ nhiều mặt mà bệt.

Nên lấy từ `品牌馆` vì gắn với hàng thật, tỉ lệ chuẩn, xuất được báo giá. **Màn TV** phải có vật liệu đúng — đen bóng phản chiếu, tránh màn sáng trưng.

---

## 11.4. Nguồn model và nhập model ngoài

Ngân sách mua đã được duyệt. Khuyến nghị năm đầu khoảng **5–8 triệu đồng** ⚠️ cho model, ưu tiên theo thứ tự:

| Nguồn | Mạnh ở | Ghi chú |
|---|---|---|
| `品牌馆` (gian thương hiệu) trong app | Sẵn có, tỉ lệ chuẩn, gắn hàng thật | **Dùng trước tiên, miễn phí** |
| Trạm model Trung Quốc | Gu Á, rẻ nhất trên mỗi model | Mạnh nhất cho thị trường mình. ⚠️ Giá gói năm đổi liên tục, kiểm khi mua |
| Trạm model châu Âu cao cấp | Đồ Âu, sofa cao cấp | Mua từng đợt khi cần |
| Poly Haven | Miễn phí CC0 | Bổ sung |

**Nhập model từ ngoài — điều kiện chính thức:**

Kujiale nhận **`.skp` / `.max` / Rhino / Revit / `.obj`**. **Không nhận vật liệu Vray. Không có đường `.fbx` chính thức.**

| Điều kiện | Giá trị |
|---|---|
| Bản SketchUp | **≤ 2024**, hỗ trợ tải gộp |
| Đơn vị | **mm** |
| Kích thước tối đa | **30 m** |
| Số mặt `.obj` | **≤ 3 triệu** |
| Ảnh vân | jpg / png / tif, hệ màu **RGB**, ≤ 5000px |
| Tên vật liệu | không chứa ký tự đặc biệt |
| Tên file | **không có dấu cách** |

Bạn đã biết SketchUp, nên **đường `.skp` là dễ nhất**. Model 3ds Max khuyến nghị ≤ 2 triệu mặt, lý tưởng 150k–600k.

---

## 11.5. Bày đồ kể chuyện — nguyên lý

Thứ tạo ra "cảm giác có người sống" (`生活感`) không phải model đắt hay ánh sáng giỏi, mà là **đạo cụ kể chuyện được bày bừa có chủ đích**.

### Hai nguyên lý gốc

Lý thuyết bày sàn của designer Trung Quốc gói trong hai câu:

> **`从对称中求不对称`** — tìm bất đối xứng trong đối xứng
> **`平衡中求不平衡`** — tìm mất cân bằng trong cân bằng

Cụ thể hoá thành hai quy tắc dùng được ngay:

1. **Tam giác không đều.** Mỗi cụm đồ bày nên có **ba món ở ba độ cao khác nhau**, tạo thành tam giác lệch. Ổn định mà vẫn biến hoá.
2. **Khác biệt vừa phải.** Đồ phải có cao–thấp, to–nhỏ, dài–ngắn, tròn–vuông khác nhau. Giống hệt nhau thì đơn điệu; chênh quá thì mất hài hoà.

### Bốn kỹ thuật "bừa có chủ đích"

**Chăn vắt hờ.** Đúng: vắt chéo qua **một** tay sofa hoặc một góc cuối giường, để một góc rủ tự do, có nếp nhăn. Hoặc gấp làm ba theo chiều dài rồi thả hơi lệch tâm, để một góc tràn xuống ghế.
Sai: gấp vuông vắn đặt chính giữa lưng sofa như cửa hàng, hoặc trải phủ đối xứng hai bên.

**Sách.** Xếp nghiêng dựa vào nhau, chồng cao thấp không thẳng hàng, một quyển nằm ngang trên chồng dọc, một quyển mở úp như đang đọc dở. Dùng sách làm bệ kê cho đồ bày nhỏ để tạo tầng cao thấp. **Sách là đạo cụ đọc ra thói quen chủ nhà rẻ và hiệu quả nhất.**

**Gối sofa.** Sofa văng ba chỗ dùng **3–5 gối, số lẻ** dễ tạo bố cục sinh động. Khác cỡ, khác chất liệu nhưng **cùng bảng màu**; to ở ngoài, nhỏ ở trong; một cái hơi nghiêng như vừa tựa.
Tránh: cùng cỡ, dàn đều, dựng đứng thẳng hàng — đây đúng là dấu hiệu tố cáo ảnh máy tính.

**Đồ đang dùng dở.** Cốc cà phê uống dở, kính mắt đặt trên sách mở, máy tính mở, lọ hoa hơi héo. **Nhóm này tạo cảm giác sống mạnh nhất** vì gợi "người vừa rời khỏi khung hình vài giây trước".

> ⚠️ **Quy tắc số lượng: mỗi khung hình chỉ 2–3 điểm bừa.** Quá ba thì khung hình thành lỗi — trông bẩn và rối chứ không sang. Cách kiểm: đếm số dấu vết người dùng trong khung, quá 3 thì bớt.
>
> Con số này khớp đúng quy tắc liều lượng dấu vết ở Chương 10 mục 10.8. Không phải trùng hợp — cùng một nguyên lý.

---

## 11.6. Danh mục đạo cụ theo phòng

Từ khoá tiếng Trung để tra trong thư viện ghi trong ngoặc.

### Phòng khách

| Khu vực | Đạo cụ | Vị trí | Vì sao |
|---|---|---|---|
| Bàn trà | Khay (`托盘`) + 2–3 quyển sách xếp lệch (`书籍摆件`) + cốc cà phê (`马克杯`) + lọ hoa nhỏ (`花艺`) | Cụm lệch một góc bàn, **không chính giữa** | Cụm tam giác + dấu vết vừa có người ngồi |
| Sofa | 3–5 gối khác cỡ (`抱枕`) + 1 chăn vắt hờ (`搭毯`) | Gối lệch không đối xứng, chăn vắt qua một tay sofa | Phá kiểu duyệt binh, thêm chất vải mềm |
| Kệ TV | Đồ bày cao thấp (`摆件`) + 1 cây nhỏ (`绿植`) + khung ảnh (`相框`) | Bố cục cao–thấp–ngang, **chừa khoảng trống** | Tránh dàn hàng ngang đều |
| Góc đọc | Ghế đơn (`休闲椅`) + đèn cây (`落地灯`) + chồng sách + chăn | Góc phòng cạnh cửa sổ | Gợi tình huống sống cụ thể |

### Phòng ngủ chính

| Khu vực | Đạo cụ | Vị trí | Vì sao |
|---|---|---|---|
| Đầu giường | Đèn ngủ ấm (`台灯`) + 1–2 quyển sách + cốc nước hoặc kính mắt + lọ hoa nhỏ | **Một bên nhiều hơn bên kia** | Hai bên giống hệt là giả; lệch mới thật |
| Giường | Chăn ga có nếp nhăn (`褶皱床品`) + chăn cuối giường (`床尾毯`) + gối chồng lớp | Chăn hơi xô, gối to sau nhỏ trước | Cảm giác vừa ngủ dậy, tránh phẳng lì |
| Bàn trang điểm | Chai lọ mỹ phẩm + khay + gương + hoa | Cụm lệch, vài món đang dùng | Dấu vết sinh hoạt của chủ nhà |

Các phòng còn lại theo cùng công thức: **một cụm chính lệch tâm + một dấu vết đang dùng + một điểm cây xanh**.

---

## 11.7. Bản địa hoá cho khách Việt

Đây là phần **không có trong bất kỳ tài liệu Trung Quốc nào**, và là chỗ ảnh của bạn có thể hơn ảnh Trung Quốc khi bán cho khách Việt.

### Nên thêm

- **Dép đi trong nhà** cạnh giường hoặc cạnh cửa. Nhà Việt đi dép trong nhà, bỏ giày ở cửa. Chi tiết rẻ mà rất thân thuộc.
- **Ấm chén trà Việt đơn giản** trên bàn.
- **Cây xanh** — điểm bản địa hoá **an toàn và mạnh nhất**. Người Việt rất mê cây. Xem mục 11.8.
- **Trái cây nhiệt đới** thay vì đồ Tây.
- **Bình nước hoặc máy lọc nước** ở bếp.
- **Tủ giày ở lối vào** với vài đôi dép xếp gọn.
- **Máy giặt ở lô gia** — rất phổ biến ở căn hộ Việt. Nên có một phương án lô gia thật có máy giặt gọn gàng, không chỉ lô gia kiểu nghỉ dưỡng.
- **Chỗ phơi đồ** — giàn phơi ở lô gia. Ảnh bán hàng có thể giấu bớt, nhưng nên có một phương án thể hiện công năng thật để khách tin.

### Bàn thờ — đừng bỏ quên

Render Trung Quốc thường không có, nhưng **đây là điểm khách Việt để ý ngay**. Hai hướng xử lý:

- Khách coi trọng → render khu thờ trang nghiêm: tủ thờ đứng hoặc bàn thờ treo tường, đặt nơi cao ráo yên tĩnh, ánh sáng vàng dịu. **Tránh đối diện cửa chính, tránh sát hoặc đối phòng ngủ và nhà vệ sinh.** Có thể dùng vách ngăn hoa văn.
- Render tập trung khoe không gian sống hiện đại → để khu thờ ở một phương án riêng.

Kích thước tham khảo ⚠️: bàn thờ treo tường ~48 × 69 cm; bàn thờ đứng sâu ~60 cm, rộng ~81 cm (theo thước Lỗ Ban).

### Nên tránh

⚠️ Phần này là nhận định, chưa qua thử nghiệm với khách thật:

- Câu đối, thư pháp **chữ Hán**, tranh chữ Trung, quạt giấy lớn — dễ bị đọc là "quá Trung Quốc".
- Bộ ấm trà công phu quá cầu kỳ — người Việt uống trà đơn giản hơn.
- Tượng phong thuỷ kiểu Trung đặt phô trương.
- Kiểu tân cổ điển Trung dày đặc vàng kim.
- **Áo khoác vắt lưng ghế** — dùng được nhưng tiết chế, 1 điểm mỗi khung. Khách Việt trung niên có thể thấy "bừa" nếu quá tay.

Nếu dùng tranh chữ thì ưu tiên **tiếng Việt** hoặc tranh phong cảnh trung tính.

Khách Việt, nhất là trung niên, quan tâm phong thuỷ — tránh các điều kiêng dễ thấy: gương chiếu thẳng giường, cây khô chết.

---

## 11.8. Cây xanh — chống "xanh nhựa"

### Bảy nguyên nhân cây trông giả

| # | Nguyên nhân | Mắt bắt ra sao | Cách né |
|---|---|---|---|
| 1 | **Không xuyên sáng lá** | Lá ngược sáng thành **khối đen** thay vì phát sáng lục non | Chọn model tốt + **đặt cây ngược sáng** (xem dưới) |
| 2 | **Lá một màu đều** | Mất tín hiệu lá non – lá già | Chọn model có ảnh màu đã vẽ chuyển sắc. **Kujiale không sửa được bằng tham số** |
| 3 | **Lá phẳng dẹt** | Nhìn nghiêng thấy tấm phẳng, cạnh sắc lẻm | Xoay máy ảnh thử ở góc chéo trước khi dùng; ưu tiên model lá dạng khối |
| 4 | **Lá xếp đều tăm tắp** | Không có lá che lá, quá trật tự | Chọn tán rậm lộn xộn; đặt 2–3 chậu khác cỡ cạnh nhau; xoay cây |
| 5 | **Quá hoàn hảo** | Thiếu lá úa, lá thủng, mép khô | Chọn model có vài lá ngả vàng; trộn thêm cành khô |
| 6 | **Độ bóng lá sai** | Bóng như nhựa, hoặc lì như giấy | Chỉnh `反射光泽度` về mức **lì vừa**. Lá sáp bóng nhẹ, lá thường gần như lì |
| 7 | **Không có bóng lá lốm đốm** | Cây như dán lên nền | Đặt cây giữa nguồn sáng mạnh và mảng tường trống — xem dưới |

> ⚠️ **Bảng vật liệu Kujiale không có thanh "xuyên sáng".** Chỉ có `漫反射` / `反射` / `反射光泽度` / `凹凸` / `菲涅尔`. Không có trình nối node, không chồng lớp ảnh vân. Nên **chuyển sắc lá phải nằm sẵn trong model** — bạn không tạo ra được.
>
> Có công tắc `渲染复杂材质` bật hiệu ứng xuyên sáng, nhưng **tài liệu chính thức không nói nó áp cho lá cây** (ví dụ trong tài liệu Trung thường là da, ngọc, nến). Nếu model có sẵn thuộc tính đó thì bật lên có tác dụng; không có thì bật cũng vô ích. **Cách chắc ăn là đánh đèn, không phải bấm công tắc.**

### Đánh đèn cho cây — chỗ ăn điểm nhiều nhất

> 📌 **Một model trung bình được chiếu sáng đúng trông thật hơn một model đắt tiền chiếu sáng phẳng.**

Ba kiểu sáng cần cho cây:

1. **Ngược sáng** — đặt cây **giữa nguồn sáng và máy ảnh**, cây chắn một phần cửa sổ. Ánh sáng viền quanh mép lá và xuyên qua tán tạo cảm giác lá mỏng trong. **Đây là cách giả lập xuyên sáng chắc ăn nhất trong Kujiale.**
2. **Sáng tạt ngang** — nắng xiên hoặc đèn rọi tạt ngang làm lộ gân lá lõm và độ dày tán.
3. **Sáng chính mềm** — tránh đèn thẳng đỉnh đầu làm tán bẹt.

**"Đặt cạnh cửa sổ" không phải lúc nào cũng đúng.** Đặt cây sát trước cửa sổ cho viền sáng đẹp, nhưng nếu cửa sổ là nguồn sáng chính duy nhất thì phía máy ảnh nhìn vào sẽ tối.

> **Quy tắc thực dụng: đặt cây điểm nhấn chếch cửa sổ khoảng 30–45°** — một bên lá bắt nắng viền, một bên vẫn nhận ánh sáng nảy từ tường và sàn. Có cả viền sáng lẫn chi tiết mặt lá.

**Bóng lá lốm đốm trên tường** là dấu hiệu "sống" mạnh nhất. Cần ba thứ cùng lúc: một nguồn sáng **đủ mạnh và tương đối cứng** (nắng trực tiếp hoặc đèn rọi), model có **lá dạng khối thật** (lá phẳng cho ra mảng bóng đặc chứ không lốm đốm), và một **mảng tường hoặc sàn trống** phía sau để bóng rơi lên.

⚠️ Kujiale **không có công cụ tạo bóng hoa văn** chuyên dụng, nên bóng lốm đốm phụ thuộc hoàn toàn vào hình học tán lá của model và độ cứng nguồn sáng.

**Cây trong góc tối** — đừng để thành khối đen tịt, mắt đọc đó là vùng chết. Hắt một đèn diện yếu màu ấm nhạt vào cây từ phía máy ảnh hoặc chếch trên, cường độ thấp. Hoặc dùng `局部美化` (làm đẹp cục bộ) sau khi render: rê chuột lên vùng cây, hệ thống tự chọn cùng vật liệu, nâng sáng cục bộ. Đây là phao cứu sinh khi không muốn render lại.

*Số cụ thể cho từng nguồn sáng học ở Chương 13.*

### Cây hợp căn hộ Việt

Nguyên tắc: phải là **cây người Việt thật sự trồng trong nhà** — chịu bóng, chịu điều hòa, dễ mua.

| Cây | Tên tra trong thư viện | Vị trí hợp | Cao thật |
|---|---|---|---|
| Trầu bà | `绿萝` | Khách, kệ, ban công | Leo cột 1,2–1,8 m |
| Kim tiền | `金钱树` | Khách, góc ít sáng | 0,4–0,8 m |
| Lưỡi hổ | `虎皮兰` | Ngủ, góc phòng, ban công | 0,4–0,9 m |
| **Bàng Singapore** | `琴叶榕` | **Khách — cây điểm nhấn cạnh sofa** | **1,5–1,8 m** |
| Kim ngân | `发财树` | Khách, cạnh cửa | 1,2–1,7 m |
| Cau cảnh / cau tiểu trâm | `散尾葵` / `袖珍椰子` | Khách, ban công | Cau cảnh 1,5–2,0 m; tiểu trâm 0,3–0,6 m |
| Trầu bà xẻ lá | `春羽` | Khách, góc | 0,6–1,2 m |
| Vạn niên thanh | `万年青` | Khách, góc xa cửa | 0,4–0,8 m |
| Cây cao su | `橡皮树` | Khách, ngủ | 1,0–1,7 m |
| Lan ý | `白掌` | Ngủ, bàn ăn | 0,3–0,6 m |
| Trúc phát lộc | `富贵竹` | Bàn làm việc, quầy bếp | 0,3–0,7 m |

**Theo phòng:** khách dùng cây điểm nhấn cao (bàng Singapore, kim ngân, cau cảnh, cao su, cây rùa `龟背竹`) · ngủ dùng lưỡi hổ, lan ý, kim tiền (chịu tối, không mùi mạnh) · bàn kệ dùng cau tiểu trâm, sen đá, phát lộc.

⚠️ **Ban công chung cư Việt mùa hè rất nóng** — tránh cây ưa mát ở ban công hướng Tây.

**Cây hay gặp trong render Trung Quốc nhưng lạ với người Việt — nên tránh:** ô liu (`橄榄树`), khuynh diệp cây lớn (chỉ nên dùng dạng **cành cắm bình**), bát giác kim bàn, cây ôn đới nói chung, xương rồng cột lớn.

### Kích thước và chậu

Trần 2,7m, **sau khi đóng trần thạch cao thường còn khoảng 2,4m**. Vì vậy:

- **Cây sàn điểm nhấn: 1,5–1,8 m** — đủ vươn tạo chiều đứng, vẫn chừa 0,6–0,9 m phía trên để không ngộp.
- Cây góc trung 0,8–1,2 m · cây để bàn kệ 0,3–0,6 m.
- **Quy tắc tỉ lệ: cây điểm nhấn cao không quá 2/3 chiều cao trần thông thuỷ.**

**Chậu:** xi măng xám, đất nung nâu, sứ trắng trơn, mây cói đan — tông trung tính. **Chiều cao chậu ≈ 1/3 tổng chiều cao cây kèm chậu.** Cây rủ thì chậu cao hẹp; cây tán rộng thì chậu thấp bè. **Tránh chậu nhựa bóng màu sặc sỡ** — kéo cả khung hình xuống rẻ tiền.

---

## Thực hành

### Bài 1 — Duyệt 10 model vào kho công ty
Chọn 10 model sofa và ghế bọc trong thư viện. Với mỗi model: kéo vào cảnh trống, một đèn một phía, xoay 360°, render một khung. Chấm theo thang 10 điểm ở 11.2.
**Đạt khi:** lọc ra được ít nhất 3 model ≥ 8 điểm, và chỉ đúng được model nào dính bóng nướng.

### Bài 2 — Bày một phòng khách kể chuyện
Lấy phòng khách căn mẫu đã dựng xong phần thô và đồ chính. Bày theo danh mục 11.6: cụm bàn trà lệch tâm, 3–5 gối khác cỡ, chăn vắt qua một tay sofa, một cây điểm nhấn 1,5–1,8m chếch cửa sổ 30–45°.
**Đạt khi:** đếm đúng **2–3 điểm bừa**, không hơn; và mỗi cụm đồ tạo được tam giác ba độ cao.

### Bài 3 — Bản địa hoá
Vẫn phòng đó, thêm ba chi tiết Việt: dép trong nhà, ấm chén trà đơn giản, một phương án lô gia có máy giặt gọn gàng.
**Đạt khi:** đưa ảnh cho một người Việt không làm nghề xem, họ nhận ra đây là căn hộ Việt chứ không phải ảnh mẫu Trung Quốc.

---

## Checklist tự chấm

- [ ] Nói được vì sao model quyết định độ thật hơn tham số render
- [ ] Nhận ra đủ 7 dấu hiệu model rác bằng mắt
- [ ] Biết vì sao bóng nướng là lỗi loại thẳng, không cứu được
- [ ] Dùng được bảng chấm 10 điểm và cách kiểm nhanh một đèn xoay 360°
- [ ] Biết nhóm đồ nào đáng dồn tiền, nhóm nào không cần nhiều mặt
- [ ] Dùng `定制窗帘` làm mặc định thay vì thả model rèm
- [ ] Bày mỗi cụm thành tam giác ba độ cao, không dàn hàng ngang
- [ ] Giữ đúng **2–3 điểm bừa** mỗi khung
- [ ] Thêm được ít nhất 3 chi tiết bản địa Việt, và biết tránh gì
- [ ] Đặt cây chếch cửa sổ 30–45°, cao 1,5–1,8m cho cây điểm nhấn
- [ ] Chọn cây trong danh sách người Việt thật sự trồng

---

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Sofa trông như khối nhựa bo tròn | Model không có nếp lún, không có chỉ may | Đổi model từ `品牌馆` hoặc trạm trả phí |
| Chăn phẳng lì như tấm bìa | Model chăn không có nếp; Kujiale không mô phỏng vải | Tìm model bằng từ khoá `搭毯` / `褶皱` |
| Model có vệt tối lạ, không đổi theo đèn | Bóng nướng vào ảnh vân | Loại model, không sửa được |
| Một số mặt model đen thui | Pháp tuyến lộn | Xoay 360° kiểm trước khi dùng; đổi model |
| Đồ trông đúng nhưng "sai cỡ" | Tỉ lệ model sai | Đối chiếu kích thước thật khi kéo vào |
| Đèn thả không sáng đúng | Model gộp cả cụm, không tách phần phát sáng | Đổi model có tách phần bóng đèn riêng |
| Phòng trông như showroom, không có người ở | Bày đối xứng, gối dàn đều, không có đồ dùng dở | Áp tam giác không đều + thêm 2–3 điểm bừa |
| Phòng trông bẩn và rối | Quá 3 điểm bừa mỗi khung | Đếm lại, bớt về 2–3 |
| Cây ngược sáng thành khối đen | Model không có xuyên sáng, đèn đặt sai | Đổi model; đặt cây chếch nguồn sáng 30–45° |
| Cây như dán lên nền | Không có bóng lá lốm đốm | Cần nguồn sáng cứng + model lá khối + mảng tường trống phía sau |
| Cây trông "Tây giả" | Dùng cây ôn đới người Việt không trồng | Đổi sang danh sách ở 11.8 |
| Cây đụng trần, phòng ngộp | Cây cao quá 2/3 chiều cao thông thuỷ | Hạ về 1,5–1,8m |
| Khách Việt chê "không giống nhà mình" | Thiếu bản địa hoá, hoặc quá nhiều đồ Trung | Áp 11.7 |

---

## Nguồn số liệu

**Chính thức — help center Kujiale:**
- Điều kiện nhập model: định dạng nhận, bản SketchUp ≤ 2024, đơn vị mm, ≤ 30 m, ≤ 3 triệu mặt, ảnh vân RGB, không nhận vật liệu Vray — bài `3FO4K4VYL1KH`
- Bảng vật liệu chỉ có 5 tham số, không có thanh xuyên sáng — bài về đổi tham số vật liệu thư viện chung
- Công tắc `渲染复杂材质` bật hiệu ứng `置换` và `3S`, cần vật liệu thật sự mang thuộc tính đó — bài `3FO4K4VWISQV`
- Công cụ rèm tham số `定制窗帘`

**Cơ sở ngoài Kujiale:**
- Nguyên lý bày sàn `从对称中求不对称`, `平衡中求不平衡`, tam giác không đều — lý thuyết `摆场` của ngành thiết kế Trung Quốc
- Kích thước bàn thờ theo thước Lỗ Ban — quy cách thợ Việt Nam
- Danh sách cây trồng trong nhà phổ biến ở Việt Nam — nguồn cây cảnh Việt

**Số kinh nghiệm, chưa có chuẩn — đánh ⚠️:**
- Toàn bộ thang chấm 10 điểm và ngưỡng 8 / 6 — quy ước nội bộ, chỉnh theo thực tế công ty
- Ngân sách model năm đầu 5–8 triệu; giá gói các trạm đổi liên tục
- Kích thước bàn thờ tham khảo
- Danh sách đồ "nên tránh" với khách Việt

**Chờ verify — nhưng bằng khách chứ không phải bằng app:**
- **Ngưỡng "bừa" nào khách Việt trung niên chấp nhận.** Đây là câu chưa ai trả lời được bằng tài liệu. Cách duy nhất: làm hai bản ảnh cùng một phòng, một bản 2 điểm bừa một bản 4 điểm, đưa khách thật xem và ghi phản ứng. Làm được vài lần là chốt được chuẩn công ty.
