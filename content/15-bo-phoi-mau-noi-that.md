# C15. Bộ phối màu — tỉ lệ, bảng màu và form chuẩn

> **Sau chương này bạn làm được:**
> - Dịch một câu brief mơ hồ của khách ("hiện đại, tone sáng") thành **ba khóa đo được**: tông sáng-tối, undertone, mức cá tính
> - Chia một bộ màu xuống **7 ô đặt hàng được** theo tỉ lệ 6:3:1 — thay vì "3 màu" chung chung
> - Dùng **LRV** làm cần gạt sáng-tối, biết ngưỡng chênh lệch giữa trần / tường / sàn
> - Nhận ra **undertone lệch** — thứ làm bộ màu "sai mà không chỉ ra được sai ở đâu"
> - Biết vì sao **màu render ra khác màu trên bảng**, và chốt CCT đèn trước khi chốt màu
> - Làm **ba phương án cho khách chọn** bằng quy tắc hai ô — không phải dựng lại nhà ba lần
> - Điền được **Phiếu phối màu** (Phụ lục F) làm hồ sơ chốt màu chuẩn của công ty

---

## 15.1. "Khách chê màu" hiếm khi là chê màu — là chê tỉ lệ

Cảnh quen: bạn gửi ảnh render, khách nhắn lại *"nhìn hơi rối"*, *"trông nặng nề quá"*, *"em xem lại màu giúp anh"*. Bạn đổi màu tủ từ ghi sang be, gửi lại — khách vẫn thấy chưa ổn nhưng cũng không nói được vì sao.

Vì đa số trường hợp, **màu không sai — số lượng màu và diện tích từng màu mới sai.** Ba lỗi tỉ lệ chiếm gần hết các ca "khách chê màu":

| Lỗi tỉ lệ | Nhìn ra sao | Khách nói gì |
|---|---|---|
| Không màu nào chiếm được **quá nửa** khung hình | Rối, không biết nhìn đâu trước | "Rối", "nhiều thứ quá" |
| Màu nhấn bị **rải đều** khắp phòng thay vì dồn vài điểm | Lấm tấm, rẻ tiền | "Nhìn không sang" |
| Bộ màu **không có điểm neo tối** | Bợt, trôi, thiếu chiều sâu | "Nhạt quá", "chưa ra gì" |

Cả ba lỗi này đều **không sửa được bằng cách đổi màu** — chỉ sửa được bằng cách đổi tỉ lệ. Đó là lý do chương này bắt đầu từ tỉ lệ chứ không bắt đầu từ bánh xe màu.

> 📌 **Nguyên tắc gốc của cả chương:** một bộ phối màu là **một danh sách màu KÈM diện tích của từng màu**. Thiếu vế sau thì chưa phải bộ phối màu — mới chỉ là mấy ô màu đẹp.

## 15.2. Bốn vai màu và tỉ lệ 6:3:1

Hai trường phái tài liệu nói cùng một chuyện bằng hai cách gọi. Sách này hợp nhất, dùng cách gọi Trung Quốc (vì thư viện Kujiale và tài liệu designer TQ dùng nó) kèm tên phương Tây trong ngoặc:

| Vai | Tên TQ | Gồm những gì | Tỉ lệ |
|---|---|---|---|
| **Màu nền** | 背景色 (background) | Trần, tường, sàn — thứ dán chết vào nhà | **60%** |
| **Màu chủ thể** | 主角色 (dominant) | Vật thể lớn nhất phòng: bộ tủ bếp, tủ áo, sofa, giường | **30%** |
| **Màu phụ trợ** | 配角色 (secondary) | Đồ lớn thứ hai: rèm, thảm, ghế đơn, đầu giường | *nằm trong 30% ở trên* |
| **Màu nhấn** | 点缀色 (accent) | Gối, tranh, đèn trang trí, cây, đồ decor | **10%** |

Con số 6:3:1 xuất hiện gần như y hệt trong tài liệu hai bên: phương Tây gọi là **quy tắc 60-30-10**, tài liệu TQ gọi là **黄金比例 6:3:1** (tỉ lệ vàng phối màu), thường ví dụ "tường 60%, đồ nội thất + rèm 30%, decor 10%".

**Nhưng đừng cầm thước đo.** Chính các designer đưa ra quy tắc này cũng nói rõ: đây là **điểm xuất phát để tự tin bắt đầu**, không phải luật — chọn ba màu bất kỳ rồi rải đúng 60/30/10 không tự nhiên thành phòng đẹp. Cái phải chép là **thứ bậc**, không phải phần trăm:

> **Một màu áp đảo · một màu đỡ lời · một màu lên tiếng ở vài điểm.**

Ba biến thể được dùng nhiều trong nghề, chọn theo mức "sạch" khách muốn:

| Biến thể | Khi nào dùng | Cảm giác |
|---|---|---|
| **70/20/10** | Tối giản, căn nhỏ, khách sợ rối | Rộng, tĩnh, ít chuyện |
| **60/30/10** | Mặc định, hợp đa số căn hộ ở | Cân, có chuyện để nhìn |
| **50/30/15/5** | Khách thích cá tính, có phòng đặc thù (bếp màu, phòng trẻ) | Nhiều lớp, khó hơn, dễ hỏng |

⚠️ Số phần trăm ở mọi bảng trong chương này là **tham chiếu ngành** (tài liệu thiết kế phương Tây + TQ), không phải chuẩn của Kujiale hay của một hãng nào. Dùng làm điểm xuất phát để dò, đúng như luật nền của cả giáo trình.

## 15.3. Bảy ô — chia 6:3:1 xuống mức đặt hàng được

"60% màu nền" là câu không đặt hàng được. Xưởng không sản xuất được "60% màu nền". Nên form chuẩn của công ty chẻ tiếp thành **bảy ô**, mỗi ô ứng với một thứ mua/làm được:

| # | Ô | Thuộc nhóm | % tham chiếu ⚠️ | Vật thật ứng với ô |
|---|---|---|---|---|
| 1 | **Trần** | Nền (60) | 15–20% | Sơn trần, thạch cao |
| 2 | **Tường nền** | Nền (60) | 25–35% | Sơn tường, giấy dán, tấm ốp |
| 3 | **Sàn** | Nền (60) | 15–20% | Sàn gỗ, gạch, đá |
| 4 | **Chủ thể** | Chủ thể (30) | 15–25% | Tủ bếp, tủ áo, hệ tủ tường, sofa |
| 5 | **Phụ trợ** | Chủ thể (30) | 8–12% | Rèm, thảm, ghế đơn, đầu giường |
| 6 | **Nhấn** | Nhấn (10) | 5–8% | Gối, tranh, đèn, bình, cây |
| 7 | **Neo tối** | Nhấn (10) | 2–5% | Chân bàn ghế, khung kính, tay nắm, ray đèn |

Ô số 7 — **neo tối** — là ô hay bị bỏ nhất và cũng là ô cứu nhiều bộ màu nhất. Một bộ tone sáng toàn LRV trên 70 sẽ trôi tuột, ảnh render nhìn "sương mù", khách chê nhạt mà không biết tại sao. Chỉ cần 2–5% diện tích ở LRV dưới 10 — chân bàn đen, khung cửa kính đen, tay nắm đồng đen, viền tranh — cả bộ màu lập tức có xương.

> 💡 **Mẹo kiểm nhanh:** chụp lại ảnh render, chuyển đen trắng (đúng test khử màu ở Phụ lục A). Nếu trong ảnh xám không tìm thấy chỗ nào **thật đen** và chỗ nào **thật trắng**, bộ màu của bạn thiếu neo — không phải thiếu màu.

Bảy ô này chính là 7 dòng của **Phiếu phối màu** ở Phụ lục F. Điền hết 7 dòng là có một bộ màu đặt hàng được; điền 3 dòng là mới có ý tưởng.

## 15.4. Đo tỉ lệ bằng khung hình, không bằng mét vuông

Đây là chỗ người render khác người thiết kế nội thất thuần túy, và là chỗ sách khác mọi bài blog phối màu bạn đọc được:

**Tỉ lệ màu mà khách cảm nhận là tỉ lệ trong KHUNG HÌNH bạn gửi, không phải tỉ lệ trong mặt bằng.**

Cùng một căn hộ, cùng một bộ màu:
- Camera đứng ở cửa nhìn vào: thấy nhiều tường + trần → bộ màu đọc ra "sáng, thoáng".
- Camera hạ thấp lấy góc sofa: sàn và sofa chiếm nửa khung → cùng bộ màu đó đọc ra "ấm, nặng, nhiều gỗ".

Hệ quả thực chiến, ba điều:

1. **Chốt camera trước khi chốt màu** (hoặc ít nhất là chốt cùng lúc). Chọn màu theo mặt bằng rồi mới đặt camera là làm ngược — xem C6 về bố cục.
2. **Kiểm tỉ lệ trên đúng khung hình sẽ gửi khách.** Cách nhanh: render nháp cỡ nhỏ, mở trong app xem ảnh, nheo mắt — màu nào chiếm phần lớn khung? Nếu câu trả lời không phải màu nền bạn định, tỉ lệ đã lệch.
3. **Bộ ảnh nhiều góc phải giữ được tỉ lệ tương đối giống nhau.** Góc này ra "phòng trắng", góc kia ra "phòng gỗ" thì khách sẽ hỏi "sao hai ảnh nhìn như hai nhà".

> ⚠️ **Bẫy trần:** trong mặt bằng, trần là mảng lớn nhất nhà. Trong ảnh render nội thất (camera cao 1.1–1.5m, ngẩng ít), trần thường chỉ còn một dải mỏng trên đầu khung. Đừng dồn công sức chọn màu trần cho một thứ chiếm 8% ảnh — nhưng cũng đừng để trần tối hơn tường, vì dải mỏng đó nằm ngay chỗ mắt đọc "phòng này sáng hay tối".

## 15.5. LRV — cần gạt sáng-tối đo được

**LRV (Light Reflectance Value — độ phản xạ ánh sáng)** là con số 0–100 cho biết một bề mặt hắt lại bao nhiêu phần trăm ánh sáng chiếu vào: **0 = đen tuyệt đối, 100 = trắng tuyệt đối**. Các hãng sơn lớn đều in LRV cạnh mã màu — đây là thứ duy nhất trong phối màu **đo được bằng số**, nên nó là xương sống của form chuẩn.

Vùng dùng theo tài liệu ngành ⚠️:

| LRV | Vùng | Dùng cho |
|---|---|---|
| **85+** | Trắng thật | Trần, tường phòng thiếu sáng |
| **65–80** | Sáng, thoáng | Tường nền của mọi bộ "tone sáng" |
| **50–65** | Trung tính an toàn | Tường phòng đủ nắng, sàn gỗ nhạt, tủ ghi nhạt |
| **40–50** | Trung | Sàn gỗ tự nhiên, đồ vải chủ đạo |
| **20–39** | Ấm cúng, hút sáng | Tường nhấn, tủ màu đậm, sàn gỗ tối |
| **dưới 20** | Sâu, nặng | Neo tối, mảng nhấn nhỏ, luxury tối |

**Ba luật LRV của công ty** (chép thẳng vào phiếu):

1. **Trần luôn là ô sáng nhất phòng.** LRV trần ≥ LRV tường. Trần tối hơn tường = phòng thấp xuống, ảnh render nào cũng ngột.
2. **Chênh tường ↔ sàn ≥ 20 điểm; muốn "tone sáng" rõ ràng thì ≥ 30 điểm.** Tiêu chuẩn tiếp cận (accessibility) khuyên chênh **30 điểm** giữa hai mặt kề nhau để mắt tách được ranh giới — mượn luôn làm ngưỡng thẩm mỹ, vì tường và sàn cùng LRV thì ảnh render sẽ "dính" vào nhau, mất chân tường.
3. **Bộ nào cũng phải có ít nhất một ô LRV dưới 10** (ô neo tối) **và một ô LRV trên 80** (thường là trần). Thiếu một trong hai là bộ màu không có biên độ.

**Cách lấy LRV khi hãng không in:** LRV xấp xỉ bằng **độ sáng tương đối của mã hex** — công thức trong file `build`/script nội bộ, hoặc nhanh gọn: mở màu trong Photoshop, đọc kênh **L** trong hệ **Lab**, LRV ≈ L² ÷ 100 (ước lượng thô). Mọi LRV in ở Phụ lục F đều tính theo cách này từ mã hex, nên ghi là ⚠️ *xấp xỉ* — dùng để so sánh tương đối giữa các ô, không dùng để cãi nhau với bảng màu của hãng sơn.

## 15.6. Undertone — thứ làm bộ màu "sai mà không biết sai ở đâu"

Không có màu trung tính nào thật sự trung tính. Mỗi màu be, ghi, trắng đều nghiêng về một phía — **undertone (ám màu nền)**:

| Nhóm | Nghiêng về | Ví dụ tên hay gặp |
|---|---|---|
| **Ấm** | Vàng, đỏ, cam, nâu | Kem, be, greige ấm, trắng ngà, gỗ sồi vàng |
| **Lạnh** | Xanh dương, xanh lá, tím | Ghi khói, trắng lạnh, gỗ xám tro, ghi xanh |
| **Trung tính** | Gần như không nghiêng | Ghi thuần, trắng giấy |

**Cách test undertone trong 5 giây:** đặt mẫu màu cạnh **một tờ giấy A4 trắng**. So với giấy trắng, mẫu ngả vàng → ấm; ngả xanh/tím → lạnh. Trong Kujiale làm y hệt: dựng một mặt phẳng trắng chuẩn (#FFFFFF, không phản xạ) cạnh vật liệu định dùng, render nháp, soi.

**Luật undertone của công ty — chỉ một câu:**

> ## 📌 Mọi mảng lớn trong một phòng phải cùng một phía undertone.
> ## Trộn ấm–lạnh chỉ được phép ở ô NHẤN và ô NEO TỐI.

Đây là lỗi số một của người mới, và nó lý giải trọn vẹn kiểu ca "từng món đều đẹp mà ghép lại thấy bẩn":

- Sàn gỗ **ngả vàng đỏ** + tủ bếp ghi **ngả xanh** → cả phòng nhìn đục, tủ trông như bị bám bụi.
- Tường trắng **lạnh** + rèm kem **ấm** → rèm nhìn như đã ố, khách tưởng bạn chọn vải cũ.
- Đá bếp vân **xám lạnh** + gỗ óc chó **nâu đỏ** → mặt đá trông rẻ, gỗ trông giả.

Ba cặp trên không sửa được bằng đèn, bằng hậu kỳ, hay bằng cách tăng độ bão hòa. Phải đổi một trong hai vật liệu.

> 💡 **Cách chọn nhanh cho khách Việt:** đa số căn hộ Việt dùng sàn gỗ công nghiệp tông vàng–nâu (ấm) và đèn 3000–4000K (ấm–trung). Vậy **mặc định an toàn của công ty là bộ ấm hoặc trung tính-ấm.** Muốn làm bộ lạnh (ghi xanh, trắng lạnh, gỗ tro) thì **phải đổi cả sàn**, không đổi được thì đừng nhận làm — bộ lạnh trên nền sàn vàng là ca hỏng gần như chắc chắn.

## 15.7. Đèn ăn màu — chốt CCT trước khi chốt màu

Cùng một mã sơn, dưới đèn khác nhau ra hai màu khác nhau. Tài liệu của các hãng sơn nói rất thẳng:

- Đèn **~2700K** đẩy mạnh phần kem/vàng/đào trong màu → **greige ngả hẳn sang be**, trắng trở nên mềm và ngà.
- Đèn **4000K trở lên** có ám xanh nhẹ → **kéo bật undertone lạnh của các màu ghi**, ảnh crisp và sáng hơn.
- Hiện tượng hai màu **khớp nhau dưới đèn này nhưng lệch nhau dưới đèn khác** gọi là **metamerism (đồng phân dị sắc)**. Các màu dễ dính nhất: **ghi, taupe, ghi-xanh, ghi-lá, tím nhạt, mauve** — đúng những màu đang thịnh hành.

Hệ quả cho quy trình của công ty, và đây là chỗ tiết kiệm được nhiều lần làm lại nhất:

> ## 📌 THỨ TỰ BẮT BUỘC: chốt CCT đèn → rồi mới chốt màu → rồi mới render bộ ảnh.
> Đổi CCT sau khi khách đã duyệt màu = **duyệt lại từ đầu**, vì màu trong ảnh sẽ khác màu khách đã gật.

Ghi CCT vào phiếu ngay dòng đầu. Ba mốc dùng trong nghề (chi tiết ở C4):

| CCT | Cảm giác | Hợp bộ màu | Cảnh báo |
|---|---|---|---|
| **2700–3000K** | Ấm, nghỉ ngơi | Kem, be, gỗ ấm, nâu | Ăn mất màu xanh lá/xanh dương — cây và gối xanh sẽ xỉn |
| **3500–4000K** | Trung tính | Ghi, trắng, bộ có xanh navy/sage | Làm màu kem trông "trắng bệch" hơn ngoài đời |
| **4000K+** | Lạnh, làm việc | Bếp, phòng làm việc, bộ ghi-lạnh | Da người ngả tái, gỗ ấm mất hết hơi vàng |

⚠️ Trong Kujiale, CCT đặt ở tham số đèn (C4) — nhưng ảnh cuối còn chịu ảnh hưởng của **nắng (C3)**, **cân bằng trắng và hậu kỳ (C6, C14)**. Nên luật đúng là: **chốt CCT và chốt luôn preset hậu kỳ** trước khi render bộ ảnh trình khách. Ba ảnh cùng bộ màu mà hậu kỳ ba kiểu thì khách sẽ thấy ba bộ màu.

## 15.8. Màu render ra khác màu trên bảng — vì sao và chấp nhận đến đâu

Chỗ này khiến nhiều người mất niềm tin vào bảng màu: dán đúng mã hex #EFE9E0 lên tường, render xong ra một màu khác hẳn. Không phải bạn làm sai — ba cơ chế đang cùng tác động:

**1. Albedo — mã màu không phải màu bạn thấy.** Mã hex bạn nhập vào 基础颜色 là **độ phản xạ của bề mặt**, không phải màu điểm ảnh của ảnh cuối. Ảnh cuối = albedo × ánh sáng chiếu vào × các lần dội. Tường LRV 82 dưới đèn mạnh sẽ ra sáng hơn 82 rất nhiều; cùng tường đó trong góc khuất ra tối hơn nhiều.

**2. Cấm dùng trắng tinh.** Tài liệu render vật lý thống nhất: sơn trắng ngoài đời chỉ phản xạ khoảng **75–85%**, tuyết mới rơi cũng chỉ ~90% (khoảng 220–240 trong sRGB). Đặt tường/trần bằng **#FFFFFF** là bắt ánh sáng dội gần như vô hạn — hệ quả: **cháy vùng sáng, ảnh bẹt, GI loang lổ, và render lâu hơn hẳn**. Khuyến nghị chung của giới lighting artist: giữ albedo các bề mặt lớn **dưới khoảng RGB 180–200**, tường trắng "an toàn" nằm quanh **RGB 180 (LRV ~70)**, trần có thể nhỉnh hơn.

> ## 📌 Luật trắng của công ty: mọi ô "trắng" trong phiếu phối màu đều phải là **trắng có mã** — kem, ngà, trắng ấm, trắng lạnh — **không bao giờ là #FFFFFF.**
> Xem lại C5: hệ 4 kênh của Kujiale tách 基础颜色 (màu) khỏi 反射颜色 (cường độ phản xạ) — muốn tường "sáng hơn" thì đánh đèn, đừng đẩy màu lên trắng tinh.

**3. Color bleeding — màu ăn sang nhau.** Ánh sáng dội từ mặt này sang mặt kia mang theo màu của mặt đó. Sàn gỗ vàng đậm dưới nắng sẽ **hắt vàng lên trần và mặt dưới tủ**; tường nhấn xanh sẽ nhuộm xanh mảng sàn cạnh nó. Đây là hiệu ứng **đúng, cần có** — nó là một trong những thứ làm ảnh trông thật (C7). Chỉ thành lỗi khi quá đà: nếu trần trắng ngả vàng rõ, hạ sáng nắng hoặc giảm độ bão hòa của sàn, đừng sửa bằng cách bôi trắng lại trần.

**Chấp nhận đến đâu:** màu trong ảnh render lệch **một bậc sáng-tối và một chút undertone** so với bảng màu là bình thường và không cần sửa. Lệch tới mức **đọc ra một màu khác** (kem thành vàng, ghi thành xanh) thì mới là lỗi — và lúc đó soi theo đúng thứ tự: đèn CCT → nắng → hậu kỳ → mới tới màu vật liệu.

> 💡 **Bảng mẫu màu nội bộ — làm một lần, dùng mãi.** Dựng một cảnh trống: một mặt tường chia 8 ô dán 8 màu chủ lực của công ty (kèm mã hex), một sàn gỗ chuẩn, một đèn 3000K + một đèn 4000K. Render hai lần, hai CCT. Đây là **bảng đối chiếu màu-thật ↔ màu-render** của công ty; từ đó về sau chọn màu nhìn bảng này, không nhìn mã hex. Ghép chung với bảng 5 mốc độ bóng ở C5 thành một bộ mẫu duy nhất.

## 15.9. Từ brief khách đến ba phương án — quy trình 7 bước

Khách nói *"anh muốn hiện đại, tone sáng"*. Đây là toàn bộ đường đi từ câu đó đến ba ảnh render để khách chọn.

**Bước 1 — Chép nguyên văn brief.** Không diễn giải vội. Ghi đúng chữ khách dùng vào phiếu, kèm ảnh mood khách gửi (nếu có).

**Bước 2 — Dịch sang ba khóa.** Đây là bước biến chữ mơ hồ thành thứ làm được:

| Khóa | Câu hỏi chốt với khách | Kết quả ghi vào phiếu |
|---|---|---|
| **Khóa 1 — Tông** | "Sáng thoáng như showroom, hay ấm dịu như khách sạn?" | SÁNG (tường LRV ≥ 75) / TRUNG (55–75) / TỐI (< 55) |
| **Khóa 2 — Undertone** | Đưa 2 mẫu kem và ghi lạnh, hỏi "anh thấy cái nào dễ chịu hơn?" | ẤM / TRUNG TÍNH / LẠNH |
| **Khóa 3 — Cá tính** | "Nhà anh muốn êm hết, hay có một mảng màu để nhớ?" | 0 màu / 1 màu / 2 màu có sắc (ngoài trung tính) |

Ba khóa này khóa được khoảng 80% không gian lựa chọn, và quan trọng hơn: **chúng là thứ khách trả lời được**, khác với "anh thích màu gì".

**Bước 3 — Mở ngân hàng bảng màu (Phụ lục F)** theo ba khóa vừa chốt, lấy ra **3 bảng cùng khóa 1 + khóa 2, khác nhau ở khóa 3**.

**Bước 4 — Neo vào vật liệu thật** (mục 15.11). Bảng nào có màu không mua được/không có trong thư viện Kujiale thì thay ngay ở bước này, đừng để đến lúc khách đã chọn.

**Bước 5 — Kiểm ba luật LRV + luật undertone + luật trắng.** Trượt luật nào thì sửa ô đó, không sửa cả bảng.

**Bước 6 — Render ba phương án bằng quy tắc hai ô** (mục 15.10) — **cùng camera, cùng đèn, cùng hậu kỳ**. Ba ảnh khác nhau ở màu và chỉ ở màu.

**Bước 7 — Trình khách theo bộ ba có tên.** Đừng gọi "phương án 1, 2, 3" — đặt tên theo tính cách để khách chọn được bằng cảm giác:

| Vị trí | Tên gợi ý | Vai trò |
|---|---|---|
| **A** | "An toàn" / "Nhẹ nhàng" | Ít rủi ro nhất, khóa 3 = 0–1 màu. Đây là phương án bạn *đoán* khách sẽ chọn |
| **B** | "Ấm áp" / "Xu hướng" | Đúng gu đang thịnh, khóa 3 = 1 màu rõ |
| **C** | "Cá tính" / "Đậm chất" | Mạnh tay nhất, khóa 3 = 2 màu. Có nó thì phương án A–B mới trông "vừa phải" |

> 💡 Ba phương án là **con số vàng**: hai thì khách thấy bị ép chọn, bốn trở lên thì khách hoang mang và đòi ghép "tủ của cái này với tường của cái kia". Nếu khách vẫn đòi ghép — cứ ghép, nhưng **chạy lại bước 5** trước khi gật đầu, vì ghép chéo là đường ngắn nhất tới lỗi undertone.

## 15.10. Quy tắc hai ô — làm 3 option mà không dựng lại nhà 3 lần

Đây là mục tiết kiệm nhiều giờ công nhất chương.

Ba phương án cho khách **không cần khác nhau ở cả bảy ô**. Thực tế ngược lại: ba phương án khác nhau ở *bảy* ô thì khách không so sánh được — mỗi ảnh là một nhà khác, khách chỉ chọn được bằng cảm tính và thường chọn xong vẫn phân vân.

**Cách làm chuẩn:**

| Ô | Giữa 3 phương án | Vì sao |
|---|---|---|
| 1. Trần | **GIỮ NGUYÊN** | Gần như luôn là trắng ấm/kem, đổi không được lợi gì |
| 2. Tường nền | **GIỮ NGUYÊN** hoặc lệch nhẹ 1 bậc LRV | Đổi tường là đổi cả cảm giác phòng, khó so sánh |
| 3. Sàn | **GIỮ NGUYÊN** | Đã chốt theo nhà thật/ngân sách, và đây là ô đắt nhất để đổi |
| 4. **Chủ thể** | **ĐỔI** ← ô số 1 tạo khác biệt | Tủ/sofa chiếm 15–25% khung, đổi là ảnh khác hẳn |
| 5. Phụ trợ | Đổi theo ô 4 cho hợp | Rèm/thảm đi kèm chủ thể |
| 6. **Nhấn** | **ĐỔI** ← ô số 2 tạo khác biệt | Rẻ nhất, dễ nhất, nhưng đổi cảm xúc mạnh nhất |
| 7. Neo tối | **GIỮ NGUYÊN** | Đen/nâu sẫm dùng chung mọi phương án |

**Đổi 2 ô (4 và 6), giữ 5 ô.** Khách nhìn ba ảnh thấy rõ mình đang chọn cái gì; bạn thì chỉ phải thay vật liệu hai nhóm đối tượng rồi render lại — không đụng đèn, không đụng camera, không đụng model.

Trong Kujiale, việc này chạy rất nhanh nhờ công cụ đã học ở C5: **材质刷 (chổi vật liệu — phím M)** quét đồng loạt mặt tủ, **定制样式刷 (chổi kiểu — phím N)** cho tủ định chế. Lưu 3 phương án thành 3 bản sao phương án, render cùng camera đã lưu.

> ⚠️ **Bẫy render 3 option:** nhớ **khóa cùng thông số render và cùng preset hậu kỳ** cho cả ba ảnh. Ảnh A sáng hơn ảnh B chỉ vì render lúc chỉnh tay khác một chút → khách sẽ chọn ảnh sáng hơn và tưởng mình đang chọn màu. Đây là lỗi âm thầm bóp méo quyết định của khách, và nó xảy ra thường xuyên.

## 15.11. Neo màu vào vật liệu mua được

Công ty bán đồ thật. Một bộ phối màu đẹp mà không mua được là một bộ phối màu hỏng — tệ hơn nữa nếu khách đã duyệt ảnh.

**Luật neo: mỗi ô trong phiếu phải ghi được ít nhất một trong ba thứ** —

1. **Mã màu sơn của hãng đang dùng** (kèm LRV hãng in), hoặc
2. **Tên/mã vật liệu trong thư viện Kujiale** (ưu tiên dòng 实时材质, hậu tố `-4K`, xem C5.3), hoặc
3. **Mã màu tấm của xưởng** (melamine/laminate/acrylic theo bảng mẫu xưởng đang có sẵn).

Ô nào chỉ có mã hex mà không neo được vào một trong ba thứ trên thì **đánh dấu ⚠️ "chưa neo"** trong phiếu và không được đưa vào ảnh trình khách để ký duyệt — đúng ranh giới ở C8: ảnh khách ký duyệt và ảnh mô tả vật liệu thi công phải là vật liệu thật.

**Ba chỗ hay vỡ trận nhất:**

| Chỗ | Vấn đề | Cách chặn |
|---|---|---|
| **Màu tủ melamine** | Bảng mẫu xưởng chỉ có ~30–50 mã; màu bạn chọn trong Kujiale có thể không tồn tại ngoài đời | Dựng sẵn **thư viện vật liệu công ty** trong Kujiale đúng theo bảng mẫu xưởng (C5.2, 实时材质制作工具). Chọn màu từ thư viện đó, không chọn từ thư viện chung |
| **Màu đá bếp / đá bàn** | Vân đá thật không giống vân trong render; undertone đá dễ lệch với gỗ | Chọn đá trước, gỗ sau — đá ít lựa chọn hơn |
| **Màu vải rèm/sofa** | Màu vải lên ảnh bao giờ cũng đậm và bão hòa hơn mẫu thật | Chọn nhạt hơn mẫu vải nửa bậc khi dựng, hoặc đối chiếu bảng mẫu render nội bộ (15.8) |

### Ô gỗ và ô solid — hai loại ô khác hẳn bản chất

Trong bảy ô, các ô neo vào tấm melamine/laminate chia làm hai loại, và **chúng không chơi cùng luật**:

| | **Ô gỗ (có vân)** | **Ô solid (màu trơn)** |
|---|---|---|
| LRV | **Không có một giá trị** — là một dải. Phải ghi LRV **trung bình ± biên độ** (ví dụ `42 ±12`) | Một giá trị chính xác |
| Undertone | **Mạnh và cố định** — gỗ luôn mang sắc vàng/đỏ/xám, không gỡ ra được | Yếu hơn, dễ uốn theo gỗ |
| Ai theo ai | **Gỗ áp đặt undertone cho cả phòng** | Solid chọn **sau** gỗ, không bao giờ ngược lại |
| Trong render | Vân tự cứu bề mặt khỏi bệt — nhưng phải đúng khổ thật, đúng hướng vân, không lặp (C5, C10) | Phẳng lì nên **lộ mọi lỗi ánh sáng**; không có bump nhẹ + độ bóng đúng là bệt ngay (C5) |
| Hỏng kiểu gì | Lặp vân, sai hướng vân, phóng sai tỉ lệ | Bệt, trông như nhựa, lộ vệt sáng, dải màu |
| Hay đóng ô nào | Ô 3 (sàn), ô 4 (chủ thể) | Ô 1–2 (trần, tường), ô 4 khi tủ sơn/trơn, ô 7 |

**Bốn luật gỗ–solid của công ty:**

1. **Một phòng tối đa 2 tông gỗ.** Nếu dùng 2 thì phải **chênh LRV ≥ 20** *và* **cùng phía undertone**. Hai tông gỗ gần nhau về độ sáng nhưng khác undertone là lỗi 7 ở mục 15.13 — lỗi làm gỗ trông giả.
2. **Chọn gỗ trước, solid sau.** Gỗ có ít lựa chọn hơn và có sắc mạnh hơn; bắt gỗ chạy theo solid là làm ngược, và thường kết thúc bằng việc không tìm được mã gỗ nào vừa.
3. **Solid đứng cạnh gỗ phải hoặc trung tính, hoặc lấy đúng undertone của gỗ đó.** Trắng lạnh cạnh sồi vàng là cặp hỏng kinh điển.
4. **Sàn gỗ vân đậm rồi thì ô 4 đừng dùng solid màu mạnh** — hai mảng lớn sẽ tranh nhau, mắt không biết nhìn đâu.

Bảng mã cụ thể để neo (An Cường: nhóm vân gỗ, màu trơn, vân đá, vân vải) và quy trình dựng bảng neo của công ty: **Phụ lục F mục F.7**.

## 15.12. Thực tế Việt Nam: tường trắng — và hệ quả lên cả bộ màu

Gần như mọi căn hộ và nhà phố công ty làm đều **sơn tường trắng hoặc gần trắng** — trắng sứ, trắng ngà, trắng ngả xám. Đây không phải hạn chế cần than phiền, đây là **dữ kiện đầu vào** làm đổi hẳn cách dựng bộ màu:

> ## 📌 Tường đã trắng thì ô 2 gần như cố định.
> ## Bài toán còn lại là **năm ô**, và **gỗ mới là thứ quyết định tông cả phòng.**

Ba hệ quả thực chiến:

**1. Đừng dồn thời gian vào việc chọn mã sơn.** Khách hỏi "tường sơn màu gì" — câu trả lời gần như luôn là một trong năm loại trắng ở **Phụ lục F mục F.6**. Việc đáng làm là chọn **đúng loại trắng theo undertone của gỗ**, mất ba mươi giây, rồi dành thời gian cho ô 3 và ô 4.

**2. Màu tường trong ảnh render KHÔNG do mã sơn quyết định.** Tường trắng là bề mặt phản xạ khuếch tán lớn nhất phòng — nó nhận màu dội từ mọi thứ xung quanh. Sàn gỗ vàng + đèn 3000K thì tường trắng lên ảnh sẽ **ngả kem**, dù mã sơn là trắng lạnh. Đây là color bleeding (15.8), là **đúng vật lý**, không phải lỗi render.

> 💡 **Câu trả lời chuẩn khi khách hỏi "sao tường trắng mà ảnh nhìn vàng":** *"Vì sàn gỗ và đèn ấm hắt lên tường — ngoài đời cũng y hệt. Muốn tường trắng đúng nghĩa thì phải đổi sàn hoặc đổi đèn sang trung tính, không phải đổi mã sơn."* Đây là câu giải thích cứu được rất nhiều vòng sửa vô ích.

**3. Tường trắng lấy mất một ô tạo tương phản — phải bù ở chỗ khác.** Bộ nào cũng cần biên độ (luật L3 ở 15.5). Tường đã ở LRV 80+ thì toàn bộ phần tối phải đến từ **ô 3 (sàn)**, **ô 4 (chủ thể)** và **ô 7 (neo tối)**. Đây chính là lý do các bộ tone sáng của công ty hay bị chê "nhạt": tường trắng + sàn gỗ nhạt + tủ trắng kem = bốn ô lớn đều trên LRV 55, không còn gì để mắt bấu vào.

**Bảng quy đổi nhanh — tường trắng thì kéo tương phản ở đâu:**

| Nếu sàn là | Thì ô 4 (chủ thể) nên | Vì |
|---|---|---|
| Gỗ nhạt (LRV > 50) | **Đậm** — LRV dưới 30, hoặc gỗ tối, hoặc solid đậm | Không có ô này thì cả phòng trôi |
| Gỗ trung (LRV 30–50) | Tự do — sáng hay đậm đều chạy | Đây là ca dễ nhất |
| Gỗ tối (LRV < 30) | **Sáng** — trắng kem, ghi nhạt | Sàn đã gánh phần tối rồi |

Trong cả ba trường hợp, **ô 7 (neo tối) vẫn bắt buộc có** — nó nhỏ nhưng không ai thay được.

## 15.13. Chín lỗi phối màu hay gặp — và cách sửa đúng chỗ

| # | Lỗi | Dấu hiệu trên ảnh | Sửa ở đâu |
|---|---|---|---|
| 1 | **Quá nhiều màu có sắc** | Rối, mắt không nghỉ được | Bỏ bớt cho còn tối đa 2 màu có sắc ngoài nhóm trung tính |
| 2 | **Nhấn rải đều** | Lấm tấm, "nhìn không sang" | Dồn màu nhấn vào 2–3 cụm, chừa mảng trống |
| 3 | **Thiếu neo tối** | Bợt, trôi, khách chê "nhạt" | Thêm ô 7: chân bàn, khung kính, tay nắm |
| 4 | **Tường và sàn cùng LRV** | Mất chân tường, ảnh dính bệt | Kéo chênh LRV ≥ 20–30 điểm (15.5) |
| 5 | **Lệch undertone mảng lớn** | Từng món đẹp, ghép vào thấy đục/bẩn | Đổi hẳn một trong hai vật liệu, không chỉnh bằng đèn (15.6) |
| 6 | **Trắng tinh #FFFFFF** | Cháy sáng, bẹt, GI loang | Đổi sang trắng có mã, giữ albedo dưới ~RGB 200 (15.8) |
| 7 | **Hai loại gỗ khác undertone** | Gỗ trông giả, sàn "cãi" tủ | Một nhà một tông gỗ; muốn hai thì chênh rõ đậm-nhạt nhưng **cùng phía ấm/lạnh** |
| 8 | **Chọn màu dưới CCT khác lúc render** | Khách duyệt màu này, nhận nhà màu khác | Chốt CCT trước (15.7), ghi vào phiếu |
| 9 | **Bộ ảnh mỗi góc một tỉ lệ màu** | "Sao hai ảnh nhìn như hai nhà" | Kiểm tỉ lệ trên từng khung hình (15.4) |

Lỗi 5 và 7 là hai lỗi **người mới không tự nhìn ra** — thường phải người khác chỉ. Khi ảnh "thấy sai mà không biết sai đâu", soi hai lỗi này trước.

## 15.14. Checklist trước khi trình khách

- [ ] Phiếu phối màu (Phụ lục F) điền đủ **7 ô**, ô nào cũng có mã hex + LRV
- [ ] Ghi rõ **CCT đèn** đã chốt ở đầu phiếu
- [ ] LRV trần ≥ LRV tường
- [ ] Chênh LRV tường ↔ sàn ≥ 20 điểm (bộ tone sáng: ≥ 30)
- [ ] Có ít nhất một ô LRV < 10 (neo tối) và một ô LRV > 80
- [ ] Mọi mảng lớn cùng một phía undertone; trộn ấm–lạnh chỉ ở ô nhấn/neo
- [ ] Không ô nào là #FFFFFF; albedo mảng lớn dưới ~RGB 200
- [ ] Số màu có sắc ngoài trung tính đúng bằng khóa 3 đã chốt với khách
- [ ] Mỗi ô neo được vào **vật liệu thật** (mã sơn / thư viện Kujiale / bảng mẫu xưởng)
- [ ] Ba phương án khác nhau đúng **2 ô** (chủ thể + nhấn), cùng camera – đèn – hậu kỳ
- [ ] Nheo mắt vào ảnh: màu nền có thật sự áp đảo không?
- [ ] Test khử màu: ảnh xám có đủ đen và đủ trắng không?

---

## Bài thực hành cuối chương

**Bài 1 — Đọc ngược bộ màu của một ảnh đẹp (45 phút).** Lấy một ảnh nội thất bạn thích trên 小红书/Pinterest. Điền vào phiếu Phụ lục F **7 ô** cho ảnh đó: hút mã màu bằng công cụ chọn màu (Photoshop, hoặc app hút màu điện thoại), tính LRV, đoán CCT đèn, xác định undertone. Sau đó tự trả lời: **tỉ lệ ở đây là 60/30/10 hay 70/20/10?** Và **màu nhấn được dồn vào mấy cụm?**

**Bài 2 — Ba phương án cho một brief thật (2 giờ).** Lấy một căn đang làm của công ty. Chốt ba khóa, mở Phụ lục F chọn 3 bảng cùng khóa 1–2, áp quy tắc hai ô, render 3 ảnh cùng camera – đèn – hậu kỳ. Đưa cho một người **không làm nghề** xem và hỏi: "ba cái này khác nhau chỗ nào?" Nếu họ không chỉ ra được ngay, khác biệt của bạn chưa đủ rõ để khách chọn.

**Bài 3 — Bảng mẫu màu nội bộ (nửa ngày, làm một lần cho cả công ty).** Dựng cảnh bảng mẫu ở mục 15.8: 8 màu chủ lực × 2 CCT. Xuất 2 ảnh, dán mã hex + LRV lên ảnh, lưu vào thư mục dùng chung. Từ đó về sau mọi tranh cãi "màu này lên ảnh nhìn thế nào" đều mở bảng này ra xem.

---

## Nguồn

**Tài liệu ngành (⚠️ tham chiếu, không phải chuẩn Kujiale):**
- Tỉ lệ 60-30-10 và biến thể 70/20/10, cùng cảnh báo "đây là điểm xuất phát chứ không phải luật": Apartment Therapy, Statement Design Concepts, Composite Paint
- Cách gọi bốn vai màu 背景色 / 主角色 / 配角色 / 点缀色 và tỉ lệ vàng 6:3:1: Zhihu (专栏 室内设计色彩搭配), Sohu
- Vùng LRV theo ứng dụng (85+ trần, 65–80 tường sáng, 50–65 trung tính an toàn, 20–39 ấm cúng) và ngưỡng chênh **30 điểm** giữa hai mặt kề nhau: Kylie M Interiors, Supawood, Formica Group, Intastop
- Ảnh hưởng CCT lên màu sơn (2700K đẩy kem/vàng, 4000K bật undertone lạnh) và metamerism ở nhóm ghi/taupe/mauve: Kylie M Interiors, Behr Colorfully, The Decorologist
- Albedo thực tế của sơn trắng 75–85%, tuyết ~90% (sRGB 220–240), khuyến nghị giữ albedo dưới RGB 180–200 và hệ quả cháy sáng/chậm render khi dùng #FFFFFF: hướng dẫn PBR albedo cho lighting artist (Ron Haimov), Racoon Artworks, Chaos Help Center
- Xu hướng màu 2026 (trung tính ấm, kem–nâu cacao, trắng ngả ngà thay trắng lạnh; các "Color of the Year" 2026 đều nghiêng ấm/trầm): LUXE Interiors + Design, ArchDaily, Kitchen & Bath Design News

**Liên kết trong giáo trình:**
- Hệ 4 kênh vật liệu, cách lọc vật liệu xịn, thư viện vật liệu công ty: **C5**
- Tham số đèn và CCT: **C4** · nắng và ánh sáng tự nhiên: **C3** · bố đèn nâng cao: **C13**
- Camera và bố cục quyết định tỉ lệ màu trong khung: **C6** · hậu kỳ ảnh hưởng màu cuối: **C6, C14**
- Ranh giới ảnh AI với ảnh khách ký duyệt / mô tả vật liệu thi công: **C8**
- Test khử màu và nheo mắt: **Phụ lục A**
- Ngân hàng 12 bảng phối màu + Phiếu phối màu in ra dùng: **Phụ lục F**

**Số chờ khóa qua Sổ ghi nhận (Phụ lục B):**
- Vị trí ô nhập mã hex trong 材质编辑 của bản Kujiale hiện tại (nhập được HEX hay chỉ RGB/HSB)
- Kujiale có công cụ hút màu từ ảnh tham chiếu trong phương án không, nằm ở đâu
- Bảng mẫu màu melamine của xưởng đang dùng có bao nhiêu mã, đã dựng vào thư viện công ty chưa

---

## Tự tra video thực chiến

> 📌 **Sách cho bạn KHUNG. Video cho bạn MẮT.**
>
> Phối màu là thứ đọc mười trang không bằng nhìn hai chục ảnh có chú thích tỉ lệ. Người làm nghề Trung Quốc làm mảng này rất mạnh — họ hay đăng dạng "một phòng, năm bộ màu" kèm mã màu.

Dán nguyên cụm vào ô tìm kiếm của **小红书** hoặc **抖音 (Douyin)**:

| Từ khoá | Tìm được gì |
|---|---|
| `室内 配色 比例 6:3:1` | Bài giảng tỉ lệ phối màu, có sơ đồ |
| `家装 配色 方案 三套` | Kiểu "một phòng ba phương án" — đúng cách trình khách ở 15.9 |
| `莫兰迪 配色 家装` | Bộ màu Morandi (trung tính giảm bão hòa) đang thịnh |
| `原木风 配色` / `奶油风 配色` | Tone gỗ mộc / tone kem — hai gu khách Việt hay xin |
| `酷家乐 材质 颜色 修改` | Thao tác đổi màu vật liệu hàng loạt trong Kujiale |
| `色卡 LRV 墙面` | Cách đọc bảng màu sơn kèm LRV |

> 💡 Lọc như mọi chương khác: sắp `最新`, ưu tiên bài **có mã màu/mã sơn cụ thể**, bỏ bài `AI一键`. Bài phối màu **không cần** đúng đời template 3.x (khác với bài số đèn) — nguyên lý màu không đổi theo phiên bản phần mềm.
