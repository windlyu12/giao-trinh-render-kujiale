# Mở đầu — Con mắt ánh sáng

> **Sau chương này bạn làm được:**
> - Gọi tên đúng nguyên nhân khiến một ảnh render "nhìn giả" theo bảng 12 nguyên nhân — thay vì chỉ cảm thấy "sai sai mà không biết sai đâu"
> - Giải thích được 5 nguyên lý ánh sáng nền tảng: hướng sáng, tương phản, nhiệt độ màu, ánh sáng khoe chất liệu, phân lớp sáng
> - Cầm 1 ảnh chụp nội thất thật và "đọc" được nó theo checklist 8 bước: nguồn sáng ở đâu, tương phản bao nhiêu, bóng cứng hay mềm
> - Phân biệt 3 trường phái tone màu ảnh nội thất và biết ảnh mình sắp làm thuộc trường phái nào
> - Soi lại ảnh render cũ của chính mình, chỉ ra ít nhất 3 lỗi cụ thể bằng tên gọi chuẩn

## Vì sao thao tác đúng mà ảnh vẫn giả

Bạn đã học xong khóa thao tác. Tường vẽ đúng, đồ đặt đúng, template render chọn đúng, nút bấm đúng. Ảnh xuất ra... vẫn có "mùi 3D". Bạn không chỉ ra được sai chỗ nào — chỉ biết khách nhìn một cái là hỏi "đây là ảnh vẽ à em?". Trong khi cùng phần mềm đó, các studio Trung Quốc render ra ảnh mà chính bạn cũng phải nhìn kỹ mới dám khẳng định không phải ảnh chụp.

Khoảng cách đó không nằm ở phần mềm, không nằm ở thao tác, không nằm ở máy tính mạnh hơn. Nó nằm ở **con mắt**: người render giỏi nhìn ra ánh sáng trước khi bấm nút, người render thường bấm nút rồi mới hy vọng.

Cộng đồng render Trung Quốc có một chữ rất trần trụi cho nghề này: **骗眼睛** (đánh lừa mắt). Ảnh render đẹp không phải ảnh "đúng kỹ thuật nhất" — mà là ảnh khiến mắt người tin đây là ảnh chụp. Mắt tin thì não tin. Và muốn lừa được mắt, ta phải bắt chước **ảnh chụp thật** — kể cả những "khuyết tật" của nó: góc phòng chìm tối, hạt nhiễu li ti, vệt lan sáng quanh cửa sổ, cạnh tủ mòn nhẹ. Người mới thường làm ngược lại: cố cho mọi thứ sáng đều, sạch bong, hoàn hảo — và chính sự hoàn hảo đó tố cáo ảnh là đồ máy tính.

> 📌 Một studio render Trung Quốc dặn nhân viên mới, đại ý: đừng chăm chăm phần mềm xịn với tham số phức tạp — hãy nhìn nhiều căn phòng thật: nắng rọi vào thế nào, mặt đồ đạc phản quang ra sao, góc tường có chi tiết vụn gì, rồi bê những "chuyện vụn có thật" đó vào hình.

Chương này không dạy một nút bấm Kujiale nào. Nó dạy thứ mà mọi chương sau đều đứng lên trên: cách nhìn ánh sáng như một nhiếp ảnh gia nội thất. Nguyên tắc ở đây áp dụng cho Kujiale, cho SketchUp, cho mọi phần mềm — và cho cả việc viết prompt AI sau này (xem Phụ lục D).

## 1. Bảng 12 nguyên nhân khiến ảnh render nhìn giả

Xếp theo tầm ảnh hưởng — hạng 1 là "sát thủ" lớn nhất. Tổng hợp từ cộng đồng archviz quốc tế (Blender Artists, blog studio CGI) và nguồn Trung Quốc (Zhihu, Renderbus). Học thuộc bảng này trước — cả cuốn sách là hành trình sửa từng dòng của nó.

| # | Nguyên nhân | Vì sao mắt đọc ra "giả" | Tự soi nhanh | Sửa ở chương |
|---|---|---|---|---|
| 1 | **Ánh sáng bẹt — không có nguồn chính** | Sáng đều mọi phía → mất khối; tường, sofa, sàn cùng độ sáng, không biết mặt trời/đèn nằm đâu | Chuyển ảnh về đen trắng: còn phân biệt vùng sáng – vùng tối không? Nhìn ra hướng nguồn chính không? | C3, C4 |
| 2 | **Không dám để tối** | Kéo sáng vùng tối cho "thấy hết đồ" → ảnh xám bệt, mất chiều sâu; ảnh chuyên nghiệp chấp nhận gầm tủ, góc phòng chìm hẳn | Histogram có chạm mép đen bên trái không, hay dồn cục xám ở giữa? | C2, C4 |
| 3 | **Vật liệu sạch tuyệt đối** | Đời thực luôn có bụi, xước nhẹ, mòn cạnh, dấu tay; bề mặt hoàn hảo 100% là chữ ký của máy tính | Đếm được 2–3 "khuyết tật thật" trong khung không? | C5, C7 |
| 4 | **Vật liệu lì, thiếu phản xạ** | Thế giới thực phản xạ nhiều hơn ta tưởng — tường sơn, vải, gỗ đều có chút bóng dịu; toàn bề mặt lì thì như đồ chơi nhựa | Từng vật liệu đã có lớp phản xạ phù hợp chưa? | C5 |
| 5 | **Vân lặp, texture nét thấp** | 20 tấm sàn cùng một vân gỗ lặp đều tăm tắp — dấu vân tay của phần mềm | Lùi xa nhìn tổng thể: có thấy mẫu lặp không? | C5 |
| 6 | **Camera sai** | Góc siêu rộng làm phòng méo, đường dọc đổ chụm, máy đặt cao 2m nhìn xuống = "mùi ảnh rao bán nhà rẻ tiền" | Đường dọc thẳng đứng chưa? Góc nhìn có rộng bất thường không? | C6 |
| 7 | **Phòng không ai sống** | Bàn trống trơn, sofa phẳng phiu, bếp không một cái ly → "hàng tồn kho", không cảm xúc | Tìm được "dấu vết người sống" nào không (sách mở, khăn nhàu, ly đang dùng)? | C6, C7 |
| 8 | **Bố cục không lớp lang** | Thiếu tiền cảnh – trung cảnh – hậu cảnh → ảnh phẳng, mắt không có đường đi | Đếm đủ 3 lớp chiều sâu chưa? Điểm nhấn nằm đâu? | C6 |
| 9 | **Hậu kỳ quá tay** | Lan sáng (bloom), HDR, bão hòa kéo lố → "mùi filter" đè lên ảnh | Có vùng cháy trắng / màu bệt do kéo tay không? | C6 |
| 10 | **Màu không có câu chuyện** | Không có màu chủ đạo: hoặc mỗi vật một màu rực chọi nhau, hoặc cả ảnh xám xịt không điểm nhấn | Ảnh có 1 màu chủ đạo + dàn màu phụ ăn theo không? | C6, C7 |
| 11 | **Sạch mịn quá mức** | Ảnh chụp thật luôn có hạt nhiễu (grain) rất nhẹ; mượt tuyệt đối là mượt kiểu CG | Đã có lớp grain mỏng chưa? | C6, C7 |
| 12 | **Thiếu khuyết tật ống kính** | Ảnh thật có lan sáng quanh nguồn, tối nhẹ 4 góc, rìa hơi mềm; thiếu sạch các thứ này thì "hoàn hảo đáng ngờ" | Quanh cửa sổ/đèn có chút lan sáng chưa? Có tối góc nhẹ chưa? | C6, C7 |

**Đọc bảng thế nào:** khoảng 70% cảm giác "giả" đến từ hạng 1–4 — tức là **ánh sáng và vật liệu**. Nếu chỉ được sửa 4 thứ, hãy sửa: tạo hướng sáng rõ, dám để tối, thêm tì vết, cho vật liệu có phản xạ. Camera, bày biện, hậu kỳ là lớp hoàn thiện — chỉ phát huy khi 4 nền tảng kia đã đúng.

> ⚠️ Riêng liều lượng tì vết (hạng 3): cộng đồng đồng thuận "phải có", nhưng bao nhiêu là đủ thì **chưa có chuẩn định lượng** — quá tay là thành bẩn, giả kiểu khác. Học liều lượng qua case thực chiến ở Chương 7.

## 2. Năm nguyên lý ánh sáng căn bản

Viết cho người không học mỹ thuật. Đọc chậm, mỗi mục thử liên hệ ngay với một căn phòng bạn đang ngồi.

### 2.1. Hướng sáng tạo khối — bóng cứng và bóng mềm

- **Sáng có hướng, bóng cứng:** nguồn nhỏ hoặc ở xa (mặt trời, đèn rọi) → bóng đổ sắc nét, mặt sáng – mặt tối rõ ràng → **tạo cảm giác khối và chất**. Tài liệu Trung Quốc gọi vai trò này là 主光 (đèn chính) — nguồn định hình cả khung ảnh.
- **Sáng khuếch tán, bóng mềm:** nguồn lớn hoặc ánh sáng đã tán xạ (trời râm, nắng qua rèm) → bóng mờ, chuyển tông êm dịu. Dễ chịu, nhưng lạm dụng là dính ngay lỗi hạng 1: bẹt.
- **Quy luật cần nhớ:** nguồn sáng càng **to** (so với vật) và càng **gần** → bóng càng **mềm**. Cửa sổ lớn của căn hộ chính là một "softbox" khổng lồ.
- Ví dụ: cùng một phòng khách — nắng xiên buổi chiều in bóng khung cửa lên sàn: khối rõ, có cảm xúc. Trời râm: sáng đều, êm nhưng phẳng lì.

### 2.2. Dám để tối — tương phản là chiều sâu

Mắt người bị hút vào **vùng sáng nhất** của khung hình trước tiên. Người render giỏi lợi dụng điều đó: để tối vùng phụ, dồn sáng cho chủ thể — mắt người xem tự đi đúng chỗ. Kéo sáng mọi góc "cho thấy hết đồ" tức là vứt bỏ công cụ dẫn mắt mạnh nhất.

- ⚠️ Ước lượng tương phản bằng tỉ lệ đèn chính : đèn phụ (số gốc từ nhiếp ảnh chân dung/điện ảnh — chỉ để **ước lượng bằng mắt**, không phải tham số phần mềm): 1:1–2:1 = phẳng, sáng đều kiểu ảnh rao nhà; 4:1 = có khối, kịch tính vừa; 8:1 trở lên = trầm tối sang trọng, bóng sâu.
- Máy ảnh không thu được dải sáng rộng như mắt người. Nhiếp ảnh gia **chọn** phơi sáng cho chủ thể và chấp nhận góc tối chìm hẳn hoặc cửa sổ hơi cháy. Ảnh render nên học đúng thái độ này: không cần thấy hết mọi chi tiết.
- ⚠️ Kinh nghiệm của Lasse Rode (studio xoio, Đức): thế giới thực rất "xám" — tường trắng thật ra là xám sáng. Trong ảnh, chỉ điểm chói nhất được chạm gần trắng tuyệt đối; các mảng "trắng" còn lại nên dừng quanh mức 190–220 trên thang 255. (Số kinh nghiệm nghệ sĩ, không phải chuẩn đo.)

### 2.3. Nhiệt độ màu — ấm, lạnh và trộn có chủ đích

| Dải Kelvin | Cảm giác | Hợp với |
|---|---|---|
| 2700–3000K (ấm) | Vàng, ấm cúng, thư giãn | Phòng ngủ, phòng khách buổi tối |
| ~4000K (trung tính) | Trắng sạch, tỉnh táo | Bếp, bàn làm việc |
| 5000–6500K (lạnh) | Trắng xanh như ban ngày | Ánh sáng trời, không gian hiện đại |

Điểm ăn tiền không nằm ở từng con số — nằm ở **trộn nóng–lạnh có chủ đích**: trong nhà đèn vàng ấm, ngoài cửa sổ ánh trời xanh lạnh → hai vùng màu tương phản tự tách lớp, ảnh có chiều sâu "điện ảnh" mà không cần thêm gì.

- ⚠️ "Giờ vàng" (cộng đồng Trung Quốc gọi 黄金一小时): nắng cuối chiều ấm đỏ khoảng 3.000–4.000K, so với nắng trưa ~5.500–6.500K; phần khuất nắng lại ngả xanh vì hắt màu bầu trời → tương phản nóng–lạnh đẹp nhất trong ngày. (Các nguồn nêu dải hơi khác nhau — coi là dải tham khảo.)
- **Cảnh báo:** trộn nhiệt độ màu phải có lý do (đèn vs cửa sổ). Đặt nguồn 2700K cạnh nguồn 6000K vô cớ trong cùng khung là lỗi, không phải phong cách.

### 2.4. Ánh sáng khoe chất liệu — nghề của công ty nằm ở mục này

- **Sáng tạt xiên (raking light):** đèn chiếu gần song song với bề mặt → vân, gờ, độ nhám hiện hết. Đây là kỹ thuật bảo tàng dùng để soi bề mặt tranh. Áp vào nghề mình: vân melamine/laminate chỉ "nổi" khi có sáng tạt dọc theo cánh tủ — dưới đèn trần đều, cánh tủ vân gỗ đẹp mấy cũng bẹt như tấm formica giả.
- **Quy luật:** bề mặt càng nhám, sáng tạt càng ăn. Bề mặt bóng phẳng (acrylic bóng gương, đá đánh bóng) gần như không ăn sáng tạt — thứ chúng cần là **điểm phản chiếu nguồn sáng** (specular): vật càng bóng, điểm phản chiếu càng nhỏ và gắt; vật càng nhám, điểm càng to và mờ. Acrylic mà không có điểm phản chiếu đèn nào là acrylic chết.
- **Vải:** nhung, lụa, linen có ánh mềm hắt ở mép nếp gấp (sheen). Thiếu nó, rèm và sofa trông như đúc bằng nhựa.

### 2.5. Phân lớp ánh sáng — sáng phải có thứ bậc

Giới thiết kế chiếu sáng Trung Quốc có ẩn dụ trang điểm rất dễ nhớ:

- **Sáng nền** — như phấn nền: phủ đều, không lộ nguồn, làm cả khung dịu lại.
- **Sáng chức năng** — đủ dùng ở nơi cần: bàn ăn, bàn đọc, gương.
- **Sáng nhấn + sáng viền** — như kẻ mắt: rọi tranh, hắt khe tủ, viền trần; tạo lớp và làm không gian có "độ sâu sang".

Nhiếp ảnh gọi cùng ý tưởng là bộ ba đèn chính (tạo khối) – đèn phụ (mở vùng tối vừa đủ) – đèn viền (tách chủ thể khỏi nền). Nguyên tắc thẩm mỹ duy nhất cần khắc cốt: **các lớp không được sáng bằng nhau**. Chỗ chính sáng, chỗ phụ chìm. Đây chính là ranh giới giữa "bật hết đèn cho sáng" và "đánh sáng có tư duy" — sang Chương 4 bạn sẽ dựng đúng hệ thứ bậc này bằng đèn thủ công trong Kujiale.

## 3. Bài học từ nhiếp ảnh nội thất chuyên nghiệp

Muốn ảnh "như chụp thật" thì phải biết người chụp thật làm gì.

### 3.1. Tách vấn đề — bài học từ kỹ thuật ghép phơi sáng

Vấn đề kinh điển của nhiếp ảnh nội thất: trong nhà và cảnh ngoài cửa sổ chênh sáng quá lớn — phơi cho trong nhà thì cửa sổ cháy trắng, phơi cho cửa sổ thì trong nhà tối thui. Nhiếp ảnh gia giải bằng cách **chụp nhiều tấm rồi ghép**: một tấm lo trong nhà, một tấm lo cửa sổ; trường phái chụp nhà đất còn thêm một tấm đèn flash dội trần chỉ để lấy đúng màu tường.

Bài học cho người render không phải là kỹ thuật ghép — mà là tư duy **tách vấn đề**: một lớp lo màu vật liệu, một lớp lo không khí ánh sáng, một lớp lo cảnh ngoài cửa sổ. Đừng bắt một nguồn sáng gánh tất cả. Kujiale cho bạn chỉnh từng thứ này riêng (nắng, trời, ngoại cảnh ở Chương 3; đèn tay ở Chương 4).

### 3.2. Bật hay tắt đèn khi ảnh ban ngày? Hai trường phái, chọn theo mục tiêu

| Trường phái | Cách làm | Vì sao |
|---|---|---|
| Ảnh tạp chí / portfolio (editorial) | Ban ngày **tắt đèn**, chỉ dùng ánh sáng tự nhiên | Màu sạch, không ám vàng, không xung đột nhiệt độ màu, giữ mood tinh tế |
| Ảnh rao bán nhà (real estate) | **Bật hết đèn** + sáng đều | Phòng trông ấm, rõ, mời gọi — ưu tiên dễ hiểu với khách đại chúng |

Không có đúng/sai tuyệt đối — chỉ có **hợp mục tiêu**. Với Newhomes: ảnh gửi khách chốt phương án cần sáng ấm dễ hiểu; ảnh fanpage/portfolio xây thương hiệu cao cấp nên nghiêng editorial. Điều cấm duy nhất: trộn hai kiểu lẫn lộn trong cùng một khung.

### 3.3. Camera — ba con số phải nhớ

- **Chiều cao máy:** ⚠️ khoảng 1.2–1.5m (một số nguồn khuyên tới 1.6m ngang tầm mắt — chưa có con số chuẩn duy nhất). Ảnh tạp chí hay hạ thấp hơn để đồ nội thất trông bệ vệ. Tuyệt đối không đặt 2m nhìn xuống kiểu camera an ninh.
- **Tiêu cự:** ảnh nội thất tạp chí thường 24–35mm. Lời khuyên của Lasse Rode: tránh xuống dưới 30mm, bản thân anh hay dùng 35–55mm — góc siêu rộng đang bị lạm dụng trong archviz. Góc rộng "thấy hết phòng" nhưng trả giá bằng méo hình và mùi ảnh rao nhà.
- **Phương đứng thẳng:** mọi đường dọc (cạnh tường, cạnh tủ) phải thẳng đứng song song, không đổ chụm. Nhiếp ảnh gia phải mua ống kính tilt-shift đắt tiền để đạt điều này; trong render bạn chỉ cần khóa độ nghiêng dọc của camera về 0 — lợi thế miễn phí, không dùng là phí. Chi tiết thao tác ở Chương 6.

### 3.4. Bày biện — làm khung hình "có người sống"

- **Thêm vào:** sách đang mở, ly cà phê đang uống, khăn/chăn hơi nhàu, cây xanh, dép ở cửa, gối lệch nhẹ. Vài món là đủ — chúng biến "phòng mẫu" thành "nhà đang sống".
- **Bỏ ra:** ổ điện, công tắc, dây điện, khe thông gió, vật bị cắt ngang ở mép khung. Nhiếp ảnh gia nội thất xóa những thứ này ở hậu kỳ như một bước tiêu chuẩn.
- **Liều lượng theo trường phái:** editorial bày ít mà tinh — vài "khoảnh khắc nhỏ" có chủ đích; ảnh rao nhà dọn trống cho phòng trông rộng. Đừng nhồi decor cho "sống động" — lộn xộn không chủ đích là giả kiểu khác.

### 3.5. Ba trường phái tone màu — nhận diện để chọn

| Trường phái | Ánh sáng | Màu & tương phản | Dùng khi |
|---|---|---|---|
| **Kinfolk / mộc** | Tự nhiên, mềm, khuếch tán; né đèn nhân tạo | Bão hòa thấp, tông đất/be/xám, nhiều khoảng thở | Portfolio, phong cách wabi-sabi/tối giản, thương hiệu cao cấp kín đáo |
| **Architectural Digest / sang** | Dựng công phu, có chiều sâu và kịch tính | Màu giàu nhưng kiểm soát chặt | Ảnh "hero" khoe thiết kế đắt tiền |
| **Real estate / sáng rõ** | Bật hết đèn, sáng đều | Bão hòa cao, mọi góc đều rõ | Gửi khách đại chúng, cần dễ hiểu và mời gọi |

> 💡 "Look Kinfolk" mộc mạc thật ra là màu **đã qua xử lý** (giảm bão hòa, nâng vùng tối lên xám thay vì đen tuyền) — không phải màu gốc máy ảnh. Biết điều này để không cố ép "màu thật" ra chất Kinfolk rồi thất vọng.

## Cuốn sách này đi tiếp thế nào

Bảng 12 nguyên nhân ở trên chính là bản đồ cuốn sách: Chương 1 làm chủ bản Kujiale tiếng Trung; Chương 2 quy trình render và thông số; Chương 3 ánh sáng tự nhiên; Chương 4 đèn thủ công; Chương 5 vật liệu; Chương 6 camera – bố cục – hậu kỳ; Chương 7 tổng hợp thành photorealism qua case thực chiến; Chương 8 quy định dùng AI; Chương 9 lịch luyện mắt 8 tuần đầy đủ (chương này mới chỉ cho bạn nếm bài tập đầu tiên). Phụ lục A là bộ chấm ảnh dùng chung toàn công ty, Phụ lục D là từ vựng prompt AI.

Con mắt có trước, nút bấm có sau. Giờ luyện mắt phát đầu tiên.

## Thực hành

### Bài 1 — Đọc một ảnh chụp thật bằng checklist 8 bước (không cần phần mềm)

1. Chọn **1 ảnh chụp nội thất thật** (không phải render): mở Architectural Digest, Dezeen mục Interiors, hoặc Kinfolk; chọn ảnh một phòng có cửa sổ, ánh sáng rõ hướng, tránh cảnh quá phức tạp. (Danh bạ nguồn ảnh đầy đủ ở Chương 9.)
2. Nhìn tổng thể 30 giây, sau đó trả lời **lần lượt** 8 câu — đây là checklist bạn sẽ dùng suốt khóa luyện mắt:
   1. **Nguồn sáng chính** ở đâu? (cửa sổ trái/phải, đèn, mặt trời) — suy từ hướng bóng đổ.
   2. **Có nguồn phụ không?** Vùng tối được mở nhiều hay ít?
   3. **Tương phản** ước lượng: phẳng (1:1–2:1), vừa (4:1), hay trầm sâu (8:1 trở lên)?
   4. **Bóng cứng hay mềm?** → suy ra nguồn to hay nhỏ, gần hay xa.
   5. **Nhiệt độ màu:** ấm hay lạnh? Có trộn nóng–lạnh không (trong ấm/ngoài lạnh)?
   6. **Camera:** cao hay thấp? Góc rộng hay chuẩn? Phương đứng có thẳng không?
   7. **Bố cục:** điểm nhấn ở đâu? Có đủ tiền cảnh – trung cảnh – hậu cảnh không?
   8. **Điều gì khiến ảnh "thật":** tì vết nào? Hạt nhiễu? Lan sáng? Món đồ nào có dấu người dùng?
3. Ghi câu trả lời ra giấy hoặc ghi chú điện thoại — mỗi câu 1 dòng, không cần văn hay.

**Đạt khi:** trả lời đủ cả 8 câu; chỉ đúng hướng nguồn sáng chính bằng bóng đổ (không đoán mò); nêu được ít nhất 2 chi tiết cụ thể khiến ảnh "thật".

### Bài 2 — Soi một ảnh render cũ bằng bảng 12 nguyên nhân

1. Lấy 1 ảnh render cũ của bạn hoặc của công ty (ảnh từng bị chê "nhìn giả" càng tốt).
2. Chạy lại đúng 8 câu ở Bài 1 lên ảnh này.
3. Đối chiếu bảng 12 nguyên nhân ở mục 1: ảnh dính những dòng nào? Ghi số thứ tự + 1 câu mô tả biểu hiện cụ thể trong ảnh.

**Đạt khi:** gọi tên được ít nhất 3 nguyên nhân theo đúng số thứ tự bảng, mỗi nguyên nhân kèm biểu hiện nhìn thấy được (vd: "hạng 2 — gầm bàn và góc phòng sáng ngang mặt bàn").

## Checklist tự chấm

- [ ] Kể được ít nhất 8/12 nguyên nhân ảnh giả mà không nhìn sách
- [ ] Giải thích được vì sao nguồn sáng to và gần cho bóng mềm
- [ ] Giải thích được vì sao ảnh chuyên nghiệp dám để góc phòng chìm tối
- [ ] Nói được khi nào cần sáng tạt xiên (vân melamine) và khi nào cần điểm phản chiếu (acrylic bóng)
- [ ] Thuộc 8 câu của checklist phân tích ảnh
- [ ] Đã phân tích xong 1 ảnh chụp thật, có ghi chú đủ 8 câu (Bài 1)
- [ ] Đã soi 1 render cũ, gọi tên ít nhất 3 lỗi theo bảng 12 (Bài 2)
- [ ] Nói được ảnh gửi khách của Newhomes thuộc trường phái tone màu nào, ảnh fanpage thuộc trường phái nào

## Lỗi thường gặp trong chương này

Chương này chưa đụng phần mềm nên lỗi ở đây là **lỗi tư duy** — chính là những thói quen sẽ phá bạn ở các chương sau:

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| "Bật hết đèn lên cho sáng" | Tưởng sáng đều = đẹp | Một nguồn chính rõ ràng, các lớp còn lại chìm dần theo thứ bậc (mục 2.5) |
| Kéo sáng vùng tối để "khách thấy hết đồ" | Sợ mất chi tiết | Chọn thứ cần thấy, để phần còn lại chìm — vùng tối là chiều sâu, không phải lỗi (mục 2.2) |
| Ảnh xấu → đi tìm phần mềm/preset khác | Đổ lỗi công cụ | Chạy 8 câu checklist lên ảnh trước; 70% vấn đề nằm ở ánh sáng + vật liệu, phần mềm nào cũng vậy |
| "Cứ render đã, hậu kỳ cứu sau" | Ỷ lại chỉnh sửa | Hậu kỳ chỉ đánh bóng ảnh đã đúng gốc; ảnh sai hướng sáng thì không cứu được (hạng 9 sẽ chờ sẵn) |
| Nhồi thật nhiều decor cho "có hồn" | Nhầm nhiều đồ = sống động | Vài dấu vết sống có chủ đích; lộn xộn vô chủ đích là giả kiểu khác (mục 3.4) |

## Nguồn số liệu

- **Nguồn quốc tế (nhiếp ảnh + archviz):** loạt bài "The Art of Rendering" trên Architizer/Ronen Bekerman (kinh nghiệm Lasse Rode – studio xoio: tiêu cự, ngưỡng trắng, grain, phản xạ); National Gallery London (định nghĩa raking light); Fstoppers/B&H (tilt-shift, phương đứng); PhotoUp/Deptho (kỹ thuật ghép phơi sáng, flambient); khảo sát NAR 2025 về staging nhà đất (bối cảnh trường phái real estate).
- **Nguồn cộng đồng Trung Quốc:** Renderbus/瑞云 (nguyên tắc 骗眼睛), Zhihu (điểm phản chiếu specular, tương phản sáng tối), ZCOOL (黄金一小时), 网易/简书 (ẩn dụ trang điểm cho phân lớp sáng).
- **Các số đánh dấu ⚠️ trong chương** (tỉ lệ tương phản 2:1/4:1/8:1, Kelvin giờ vàng, chiều cao camera 1.2–1.6m, ngưỡng trắng 190–220): đều là **dải kinh nghiệm từ nhiếp ảnh**, không phải tham số Kujiale — dùng để ước lượng bằng mắt, không có mục verify tương ứng trong Phụ lục B.
- Chương này không chứa số liệu UI Kujiale nên không dính 4 cảnh báo phiên bản; các chương thao tác (C1 trở đi) sẽ có.
