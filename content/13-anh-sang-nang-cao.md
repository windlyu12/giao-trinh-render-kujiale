# C13. Ánh sáng nâng cao — thoát khỏi việc chép số

> **Sau chương này bạn làm được:**
> - Hiểu vì sao **không có bộ số đúng duy nhất**, và chọn được con đường bố đèn hợp cảnh của mình
> - Dùng hai quy luật phụ thuộc để tự suy ra độ sáng thay vì tra bảng
> - Làm được **nắng qua rèm voan cho bóng mềm mà vẫn đọc được hình**
> - Đánh đèn cho hệ không đèn chủ và ray nam châm
> - Render cả bộ 6–12 ảnh một căn mà **không lệch sáng, lệch màu, lệch hướng bóng**
> - Đọc được bảng tham số nâng cao và biết công tắc nào bật, công tắc nào tắt

---

> ## ⚠️ CẢNH BÁO ĐẦU CHƯƠNG — ĐỌC TRƯỚC KHI XEM BẤT KỲ CON SỐ NÀO
>
> **1. Kujiale có BA hệ đơn vị độ sáng song song:** thang cũ (số hàng trăm) · `瓦` (watt ảo) · **`%`**.
> Tài liệu chính thức xác nhận `硬装灯带` dùng vật liệu mới render chính xác dải **0% – 6000%**. Ảnh chụp panel thật cho thấy `室内光亮度` hiện **100%** và **500%**.
> ⚠️ Quy ước "`瓦` = thang cũ ÷ 10" mà bản đầu của giáo trình này ghi **không có nguồn chính thức nào xác nhận** — hai gói nghiên cứu độc lập đều không tìm ra. Coi đó là **quy ước nội bộ chưa kiểm chứng**, đừng trích như dữ kiện của Kujiale.
> **→ Mọi con số trong chương này đều ghi rõ đang ở thang nào. Trước khi dùng, mở app kiểm đơn vị hiển thị trên máy bạn (Sổ ghi nhận mục B1).**
>
> **2. Số càng cũ càng phải để cao.** Tài liệu chính thức bản 3.0 ghi: *"nâng cấp phản xạ toàn cục, tăng độ trong của ảnh, giảm hiện tượng vùng tối chết đen"*. GI mạnh hơn nghĩa là **cùng một độ sáng giờ chiếu được diện tích lớn hơn**. Đây là lý do bộ số của người này để 600–800 còn người kia để 280–300 mà cả hai đều ra ảnh đẹp — họ dùng hai đời template khác nhau.
> ⚠️ Nâng bản template **không tự đổi số đèn tay bạn đã tạo** — tài liệu ghi rõ đèn thủ công đã tạo giữ nguyên, chỉ đèn tạo mới dùng template mới. Nhưng vì GI của cảnh mạnh lên nên **cùng số đèn cũ giờ cho ảnh sáng hơn → vẫn cháy**. Nâng bản xong phải hạ tay.
>
> **3. Vì vậy: chép TỈ LỆ và THỨ TỰ, đừng chép SỐ.**

---

## 13.1. Không có bộ số đúng duy nhất

Đây là điều quan trọng nhất chương, và cũng là điều làm designer non tay khổ nhất: bạn tra được năm bộ số từ năm người khác nhau, chúng chỏi nhau, và cả năm đều ra ảnh đẹp.

Không phải ai sai. **Họ đi năm con đường khác nhau.**

Từ tám ca thực chiến thu được của designer Trung Quốc, rút ra **bốn con đường bố đèn**, mỗi đường giao gánh nặng chiếu sáng cho một thứ khác nhau:

| Đường | Ai gánh chính | Đặc điểm | Khi nào chọn |
|---|---|---|---|
| **A** | `环境光亮度` để cao **4–7** | Nhanh, dễ, nhưng ánh sáng **vô hướng** — không có cảm giác nắng từ đâu tới | Cần ra ảnh nhanh, cảnh không đòi kịch tính |
| **B** | `球形灯` 8000K đặt **ngoài nhà**, `环境光亮度` = **0** | Có hướng rõ, kiểm soát tốt nhất | Khi cần chất, có thời gian |
| **C** | `室内光亮度` đẩy lên **500%** + đúng **một** `矩形面光源` trong cửa | **Dễ nhất cho người mới** | ⚠️ Chỉ chạy khi phòng **có cửa sổ lớn** |
| **D** | `外景亮度` **10** + `阳光` **300**, đèn trong chỉ bù **80** | Để môi trường và mặt trời gánh | Cảnh nhiều nắng, view đẹp |

> 📌 **Lộ trình học đề xuất: bắt đầu đường C → lên đường A → sang đường B khi cần chất.**
> Đường D học sau cùng vì nó đòi phải cân được tương phản trong–ngoài.

⚠️ Các số trên là **thang cũ** trừ `室内光亮度` (thang `%`). Chúng đến từ ảnh chụp panel thật của designer Trung Quốc, **không phải số chính thức** — dùng làm điểm khởi đầu, không phải chuẩn.

> 📌 Tác giả của một trong tám ca đó viết nguyên văn, nhắc ba lần liền:
> **"Đừng học thuộc lòng các thông số! Đừng học thuộc lòng các thông số! Đừng học thuộc lòng các thông số!"**
> *"Để có ánh sáng tuyệt vời, phương pháp đúng mới là chìa khoá."*
>
> Câu này trùng gần như nguyên văn lời một giảng viên khác mà Chương 7 đã trích: *"phân tích cảnh trước đã, học vẹt tham số là tự đào hố chôn mình."* **Hai nguồn độc lập, cùng một cảnh báo.**

---

## 13.2. Hai quy luật phụ thuộc — thứ thay được cả bảng số

Nếu cả chương này bạn chỉ nhớ được một mục, hãy nhớ mục này.

### Quy luật 1 — độ sáng dải hắt phụ thuộc MÀU VẬT LIỆU

| Không gian tông | `灯带` để | Vì sao |
|---|---|---|
| **Sáng** (tường trắng, tủ trắng, sàn nhạt) | **300–800** ⚠️ | Bề mặt sáng nảy lại nhiều, cần ít |
| **Tối** (tường sẫm, gỗ đậm, đá đen) | **2000–6000** ⚠️ | Bề mặt tối nuốt ánh sáng, cần nhiều |

Chênh nhau **gần mười lần**. Đây là lý do bạn thấy người để 700, người để 1500, người để 4000 — và **cả ba đều đúng cho cảnh của họ**.

### Quy luật 2 — độ sáng phụ thuộc CÓ RÈM HAY KHÔNG

Nguyên văn ghi chú của designer: **`有窗帘拉满，没窗帘看着给`** — có rèm thì kéo hết cỡ, không rèm thì cho vừa mắt.

Vì rèm cản lại một phần lớn ánh sáng trước khi nó vào phòng.

### Gộp hai quy luật thành một câu dạy được

> ## 📌 Đừng hỏi "đèn này để bao nhiêu".
> ## Hỏi "ánh sáng phải **đi qua cái gì** và **đập vào cái gì**".

Hỏi được câu đó là bạn tự suy ra số, không cần tra bảng nữa. Và đó là khác biệt giữa người chép số với người biết đánh đèn.

---

## 13.3. Bộ số khởi đầu

Dùng làm **điểm xuất phát rồi dò**, không phải đích đến.

### Bộ số chính thức của Kujiale

Đây là bộ duy nhất có nguồn chính thức. Thang cũ.

| Nguồn sáng | `亮度` | Độ cao | Màu |
|---|---|---|---|
| Ánh sáng ngoài cửa sổ (thiên quang ngoài) | **400–600** | — | xanh nhạt |
| Ánh sáng trong cửa sổ | **200–300** | — | trắng |
| Đèn bù trên | **200–300** | dưới trần **100 mm** | — |
| Đèn bù dưới | **100–200** | ~**1,5 m** | — |
| `射灯` / `聚光灯` | **280–300** | **2,4 m** | vàng nhạt |
| Đèn bù thêm | **200–280** | **2,0 m** | — |

> 💡 Bạn sẽ gặp người để thiên quang ngoài **600–800** và người để **280–300**. Cả hai đều từng đúng — xem lại mục cảnh báo đầu chương về đời template. Bộ **400–600** ở trên là số chính thức, lấy làm mốc giữa.

### Bảng hội tụ — nhiều nguồn độc lập cùng xác nhận

Những giá trị dưới đây được **từ ba nguồn trở lên** nhất trí, nên đáng tin hơn hẳn số lẻ.

| Tham số | Giá trị | Ghi chú |
|---|---|---|
| `环境光亮度` | **3–7**, hay dùng **4** | Mặc định chính thức là **3** |
| `环境光反射` | **18–20** | Một nguồn để 10 |
| `外景亮度` | **3** hay dùng nhất, dải 1–10 | |
| `炫光` | **1,50** | |
| `环境阻光 深浅` | **0,50** | Một nguồn để 0,2 |
| `环境阻光 半径` | **25–50 mm** | |
| **Bộ số NẮNG** | **6500K · `亮度` 50 · `角度` 30°** | Ba nguồn + tài liệu |
| `灯带` / `氛围灯` nhiệt màu | **3500–4500 K** | |
| `筒灯 亮度` | **100** | ⚠️ các ca thực chiến đều **thấp hơn** con số 200–300 hay thấy |
| `筒灯` nhiệt màu | **3500 K** | |
| `面光源 散射角` | **65–90°** | |
| `球形灯` nhiệt màu | **6500–10000 K** (lạnh) | Dùng khi đặt ngoài nhà |
| `递推光` giảm dần | **200 → 150 → 100 → 50** | Đèn càng xa càng yếu dần |
| `手动曝光 强度` | **0,5 – 1,0** | Không gian tông sâu để 1,0–1,2 |
| `室内光亮度` | **100%** thường, **500%** khi dùng một đèn | Thang `%` |
| `影响高光` **TẮT** + `镜面真实反射` **BẬT** | Cặp công tắc chuẩn | |
| `色彩增强` | `标准` · `饱和度` 0,05 · `对比度` 0–0,05 · `亮度` 0,00 | |
| `面光源` **không đặt sát tường** | Quy tắc | Sát tường cho bóng gắt |

⚠️ Toàn bộ bảng này là **thang cũ** trừ hai dòng ghi rõ `%`. Nguồn: ảnh chụp panel thật, không phải tài liệu chính thức.

### Hai quy ước ít người biết

**`角度` của nắng là góc NGẨNG, `位置` mới là phương vị.** Nhầm hai ô này là vệt nắng đổ sai hướng cả buổi.

**`聚光灯` để cường độ cực thấp — 0,3 đến 2% — chỉ để tạo bóng.** Ánh sáng thật do `球形灯` hoặc `面光源` lo. Đây là kỹ thuật nâng cao: bạn mượn đèn rọi để vẽ bóng đổ tự nhiên mà không làm cháy vùng nó chiếu.

> ⚠️ Chú ý mâu thuẫn đơn vị ở đây: tài liệu chính thức cho `聚光灯` **280–300** (thang cũ), còn các ca thực chiến ghi **0,3–2%** (thang `%`). **Đây không phải hai người mâu thuẫn — đây là hai hệ đơn vị.** Kiểm đơn vị trên máy bạn trước khi nhập số.

---

## 13.4. Nắng qua rèm voan — bóng mềm mà vẫn đọc được hình

Đây là kỹ thuật cốt lõi phân biệt ảnh khá với ảnh đẹp. Hai cực hỏng nằm hai bên:

| Cực hỏng | Hiện tượng | Nguyên nhân |
|---|---|---|
| **Bóng cứng như dao cắt** | Vệt nắng viền sắc như không có rèm | Rèm bị coi là vật đục hoặc bị bỏ qua; `不透明度` quá cao; chưa bật `渲染复杂材质`; `阴影柔和度` quá thấp |
| **Không bóng, tan hết hình** | Sáng đều, mất vệt | `不透明度` quá thấp; hoặc ánh khuếch tán (`外景` / `环境光` / `面光源`) **rửa trôi** vệt |

### Nguyên lý

Nắng qua rèm voan đọc được hình vì **một phần tia đi thẳng** (giữ hình) và **một phần tia bị vải tán xạ** (làm mềm rìa). Điều khiển tỉ lệ giữa hai phần đó là toàn bộ kỹ thuật.

Vải mỏng tán xạ ánh sáng **về phía trước** — ánh sáng chui vào rồi thoát ra mềm ở mặt kia. Đây chính là hiệu ứng mà công tắc `渲染复杂材质` bật lên.

### Bốn núm điều khiển

| Bước | Núm | Giá trị | Ghi chú |
|---|---|---|---|
| 0 | Template | **`写实` / `室内白天` 3.0–3.1** | Dòng `极速` **chỉ có `3S`, thiếu displacement** nên không có nếp gấp nổi của rèm |
| 0 | **`渲染复杂材质`** | **BẬT** | Bắt buộc, để rèm phát sáng từ trong |
| 1 | `太阳光 亮度` | **30–45** ⚠️ | Khoá trước để có vệt |
| 2 | `窗纱 不透明度` | **25–45 %** ⚠️ | Chỉnh để vệt **có hình** |
| 3 | `阴影柔和度` | **3–5** | **Không kéo lên max** |
| 4 | `外景亮度` | hạ nếu cửa cháy | Cân cuối cùng |

### Thang `阴影柔和度` — điểm hay bị hiểu sai nhất

> **Thang của nắng chạy 1 → 10. Số càng lớn cạnh bóng càng mềm.**
> Để **1** thì bóng sắc. Để **10** thì bóng rất mờ. **Vùng dùng được là 3–5.**

Rèm đã lo phần mềm chính rồi; `阴影柔和度` chỉ **vuốt rìa** thêm. Kéo lên 8–10 là vệt tan mất hình, rơi vào cực hỏng thứ hai.

> ⚠️ **Có HAI ô tên gần giống nhau, hai thang khác nhau:**
> `阴影柔和度` của **`阳光`** chạy khoảng **1–10**
> `阴影柔和` của **đèn nhân tạo** chạy khoảng **100–3000**
>
> Nhiều bộ số trên mạng "vênh gấp mười lần" chỉ vì người ghi **trộn lẫn hai ô này**. Nhìn kỹ mình đang đứng ở panel nào. Đây là mục cần verify sớm (Sổ ghi nhận).

### Thứ tự dò — quan trọng hơn con số

> **1. Khoá nắng** (`亮度` + góc) để có vệt → **2. Chỉnh `不透明度` rèm** để vệt có hình → **3. Tinh `阴影柔和度`** để vuốt rìa → **4. Cuối cùng cân `外景` / `环境光`** để cửa không cháy.

**Mỗi lần chỉ đổi ĐÚNG MỘT biến rồi render nháp.** Đổi hai biến cùng lúc thì bạn không bao giờ biết biến nào gây ra thay đổi. Render nháp bằng chế độ nhẹ cho nhanh.

**Chống cháy rèm:** hạ `外景亮度` **trước tiên**, giữ nguyên `太阳光` để không mất vệt.

### Vị trí và giờ

Dùng **góc ngẩng** chỉnh vệt dài hay ngắn, **phương vị** chỉnh trái hay phải.

**Đẹp nhất là nắng góc thấp 15–35°.** Ở Hà Nội, khoảng **8:00–10:00 sáng** cho căn hướng Nam và Đông Nam — hướng phổ biến nhất của chung cư Việt. **Tránh trưa hè**: mặt trời gần đỉnh, gần như không có bóng.

### Bảy loại vật cản — không chỉ rèm voan

| Vật cản | Cơ chế | `阴影柔和度` |
|---|---|---|
| **Rèm voan `窗纱`** | Tán xạ qua vải + độ mở | 3–5 |
| **Rèm vải dày hé khe** | Dựa vào **hình học khe**, không dựa tán xạ. `不透明度` để cao 80–100% | 2–3 |
| **Rèm sáo ngang `百叶帘`** | Vật đục có khe đều → bóng sọc ngang | 2–4 |
| **Rèm cầu vồng `斑马帘`** | Lai: dải voan cần tán xạ, dải đục dùng hình học | dải voan `不透明度` 30–45% |
| **Lam gỗ `木格栅`** | Vật **đục hoàn toàn có khe** → vệt sọc mạnh, sắc, rất ăn hình | **1–3** (thấp, giữ nét) |
| **Lá cây trước cửa** | Kẽ lá tạo bóng lốm đốm | 3–5; đặt cây **đủ xa cửa** để bóng mềm |
| **Vách hoa gió, vách CNC** | Hoa văn rỗng in lên tường | thấp, giữ nét |

> 📌 **Quy tắc phân loại nhanh:**
> **Vải mỏng và mờ** (rèm voan, rèm cầu vồng, kính mờ) → dựa vào **tán xạ + độ mở**, cạnh **mềm**.
> **Vật đục có khe** (lam gỗ, rèm sáo, vách CNC, lá cây) → dựa vào **hình học khe**, cạnh **sắc hơn, hạ `阴影柔和度`**.

---

## 13.5. Không đèn chủ và ray nam châm

Mô hình **không đèn chủ (`无主灯`)** thay một nguồn sáng trung tâm công suất lớn bằng **nhiều nguồn nhỏ phân tán**. Đây là mô hình **khác hẳn** cách ba lớp đã học ở Chương 4, không phải biến thể.

### Định mức thực tế

| Phòng | Công suất thật |
|---|---|
| Khách | **5–6 W/m²** |
| Bếp | **6–8 W/m²** |
| Ngủ | **4–5 W/m²** |

Độ rọi tham chiếu theo tiêu chuẩn Trung Quốc GB 50034: khách sinh hoạt chung 100 lx · đọc sách 300 lx · ngủ 75 lx · bếp và bàn ăn 150 lx.

**Nhiệt độ màu toàn nhà thống nhất 3000–4000K, chênh nhau không quá 500K.**

> ⚠️ **Quy tắc 500K chỉ áp cho các đèn chiếu CÙNG một bề mặt, không áp cho cả căn nhà.** Một ca thực chiến cho thấy **gradient nhiệt màu theo khoảng cách** vẫn rất đẹp: ngoài nhà 8000K → 6500K → 4500K → trong nhà 3500K. Ánh sáng lạnh ở xa, ấm dần vào trong — đúng như ngoài đời.

### Dựng lớp nào trước

Trong mô hình không đèn chủ, **dựng lớp NỀN trước**: đèn hắt gián tiếp (`灯带` khe trần, hắt tường) và đèn tràn, để thiết lập độ sáng phông và không khí chung. **Sau đó mới thêm đèn rọi nhấn.**

Ngược với mô hình cũ đi từ đèn chủ. Lý do: nền quyết định tổng thể; đặt nhấn trước rồi mới thêm nền thì độ sáng tổng bị đội và phải chỉnh lại từ đầu.

### Đèn ảo cho từng module ray

| Module ray | Nguồn sáng ảo | Vị trí | Nhiệt màu |
|---|---|---|---|
| Đèn rọi nhấn | `射灯` dùng IES (có preset sẵn), hoặc `聚光灯` | Ngay tại module, nghiêng 30–45° vào tường hoặc vật | 3000K |
| Đèn tràn nền | `点光源` / `球形灯`, hoặc `面光源` nhỏ | Sát dưới module | 3000–4000K |
| Đèn khe dài | `灯带`, hoặc `面光源` **dạng dài mảnh rộng 20–25** | Dọc khe | ấm nhẹ |

Ưu tiên **`射灯` có file IES** hơn `聚光灯` thuần, vì IES cho quầng sáng và độ giảm cường độ tự nhiên.

> ⚠️ **Quy tắc "ánh sáng thần thánh" (`上帝之光`):** chỉ đặt đèn ảo ở nơi **có model đèn thật** trên trần. Không có model mà đặt nguồn sáng thì ra vệt sáng từ hư không — lỗi lộ liễu nhất của người mới.

### Ba mẹo cho cảnh nặng

1. **Chọn hàng loạt:** giữ **Shift** khung chọn nhiều đèn rồi chỉnh độ sáng, màu, độ cao một lần. Cực hữu ích khi có hàng chục đèn rọi.
2. **`属性应用至同款灯`** — nhân bản thiết lập sang mọi đèn cùng loại.
3. **Dùng `自发光材质` thay nguồn sáng rời** cho khe, dải, đèn lưới mật độ cao. Kết hợp: khe dùng vật liệu phát sáng cho đẹp, thêm vài `射灯` thật cho quầng nhấn.

### Dải hắt sáng cho gradient tự nhiên

Ánh sáng phải **giảm dần từ nguồn ra xa**, không phải một dải phẳng lì. Chỉnh **`衰减系数` (hệ số suy giảm) từ mặc định 1,0 lên ~1,5** để rìa mềm hơn và vùng nhấn nổi hơn.

Đặt `面光源` **thấp hơn cao độ trần một chút** (ví dụ cao độ trần trừ 0,1m) để tránh bóng gắt trên tường.

Với `硬装灯带`, nhớ bật công tắc **`硬装灯带使用新材质`** — tài liệu chính thức ghi vật liệu mới *"khắc phục các vấn đề vỡ gãy, phơi sáng, độ sáng không chính xác"* và render đúng dải **0% – 6000%**.

> ⚠️ Kujiale có chức năng **`一键生成灯带`** (tạo dải hắt một chạm), nhưng nó nằm trong module `照明设计` và là **chức năng doanh nghiệp**. Tài khoản cá nhân **không dùng được** — phải đặt `面光源` dải mảnh bằng tay. Đừng mất công đi tìm nút đó.

---

## 13.6. Ánh sáng thể tích

Ánh sáng thể tích (`体积光`) là *"ánh sáng xuyên qua sương, bụi, tạo hiệu ứng giống hiệu ứng Tyndall"* — những cột nắng thấy được trong không khí.

**Đường vào cho tài khoản cá nhân** (tài liệu chính thức phân biệt rõ với bản doanh nghiệp):

> `渲染` → **`离线模式`** → `手动灯光` → chọn **template `写实`** → ở trang bố đèn bên trái chọn **`光源类型` = `体积光`** → kéo vào, chỉnh bên phải: `颜色` (màu), `色温` (nhiệt màu), `亮度` (độ sáng), `高度` (độ cao), **`光柱长度`** (chiều dài cột sáng), **`底面半径`** (bán kính đáy) và **`视角`** (góc mở) → lưu template → `立即渲染`

Dùng tiết chế. Cột nắng đẹp khi nó **giải thích được nguồn sáng** — nắng qua cửa sổ, đèn rọi qua bụi. Rải khắp phòng thì thành sương mù giả.

---

## 13.7. Render cả bộ ảnh một căn

Khách không xem một ảnh. Họ lướt liên tục qua 6–12 ảnh. **Não bắt ngay sự lệch nhiệt độ màu, lệch mức sáng và lệch hướng đổ bóng** khi lướt — dù không đo được từng thông số.

### Sự thật kỹ thuật quyết định toàn bộ quy trình

> 📌 **Mặt trời được lưu BÊN TRONG từng `灯光模板`, không lưu theo từng góc máy.**

Nghĩa là: đổi mặt trời trong template đang dùng thì **đổi cho mọi ảnh dùng template đó**. Đây vừa là bẫy vừa là công cụ.

**→ Quy tắc kỷ luật: đặt MỘT bộ ánh sáng và mặt trời duy nhất, rồi render tất cả các góc bằng đúng bộ đó.**

### Quy trình đúng

1. **Dựng xong CẢ căn** — đừng render lẻ từng phòng khi còn dựng dở.
2. **Khoá một template ánh sáng và một ngoại cảnh.**
3. **Lưu và đặt tên tất cả các góc** (`保存视角`).
4. **Render NHÁP cả bộ** để soi lỗi — dùng chế độ nhẹ, tốn ít.
5. **Sửa ảnh nào lệch.**
6. **Render FINAL cả bộ.**

Đừng làm xong ảnh 1 rồi mới dựng góc 2 — chắc chắn lệch.

### Ba thứ bắt buộc nhất quán

| Yếu tố | Ngưỡng |
|---|---|
| **Nhiệt độ màu** giữa các ảnh | chênh **≤ 300–500 K** ⚠️ |
| **Mức sáng tổng** | chênh **≤ khoảng 1 khẩu** ⚠️ |
| **Hướng đổ bóng** | **giống hệt** — cùng một mặt trời |

⚠️ Hai ngưỡng đầu là quy tắc kinh nghiệm ngành, không phải chuẩn Kujiale.

**Số lượng ảnh:** căn 2 phòng ngủ thường 6–9 ảnh, căn 3 phòng ngủ 9–12 ảnh ⚠️ — khung thực hành ngành, không có quy định.

**Tiết kiệm điểm render:** render nháp bằng chế độ nhẹ, chỉ để chốt cấu trúc; đẩy bản cuối vào ban đêm nếu tài khoản có ưu đãi. Số điểm tiêu cho mỗi ảnh **chỉ xem được trong app** lúc bấm render — đừng tin bảng giá in sẵn ở đâu.

---

## 13.8. Bảng tham số nâng cao

Bảy công tắc chính thức trong `高级设置`:

| Công tắc | Làm gì | Nên để |
|---|---|---|
| `修复溢色` | Sửa hiện tượng một mảng màu lớn ám ra cả ảnh | Bật khi có mảng màu mạnh |
| **`影响高光`** | Giữ hay ẩn vệt sáng của nguồn sáng trên vật liệu phản xạ | **TẮT** (theo các ca thực chiến) |
| **`硬装灯带使用新材质`** | Vật liệu dải hắt đời mới | **BẬT** — dải **0%–6000%** |
| `环境阻光` | Bóng môi trường, làm nổi khối và sắc cạnh | Bật; `深浅` 0,50 · `半径` 25–50mm |
| `全景优先` | Chất lượng ảnh toàn cảnh | Theo nhu cầu, 4K/5K |
| **`镜面真实反射`** | Tính cả vật phía sau máy ảnh khi soi gương | **BẬT** |
| **`渲染复杂材质`** | Bật `置换` (nổi thật) và `3S` (xuyên sáng) | **BẬT** — bắt buộc cho rèm voan |

> ⚠️ **`渲染复杂材质` chỉ có tác dụng khi vật liệu trong cảnh thật sự mang thuộc tính đó.** Template dòng `极速` **chỉ hỗ trợ `3S`**; muốn có cả `置换` (nếp gấp nổi của rèm) phải dùng dòng **`写实`**. Bật lên làm **tăng thời gian render**.

### Nhóm phơi sáng

Ở template **`自然写实`** có nhóm bốn nút:

| Nút | Ghi chú |
|---|---|
| **`自动曝光`** / **`手动曝光`** | Hai chế độ. Chọn thủ công thì có ô **`强度`**, dải dùng được **0,5 – 1,0** ⚠️ |
| `漏光修复` | Sửa rò sáng |
| `降噪` | Khử nhiễu — **tăng thêm khoảng 3 phút render** |
| `炫光` | Quầng chói. Các ca thực chiến hội tụ ở **1,50** |

Đường vào theo tài liệu chính thức: `工具` → giao diện `渲染` → chọn template `自然写实` → nhóm `曝光`.

> ⚠️ **Bảng trên là của template `自然写实`. Template khác có thể KHÔNG có mấy nút này.**
>
> Bản `室内白天/夜晚` **3.0** (12/07/2024) đã **gỡ bỏ ba nút chỉnh tay**: `降噪`, `漏光修复`, và tuỳ chọn nhấn mạnh vân cho ảnh toàn cảnh. Lý do: máy **tự làm** hai việc đó dựa theo đặc điểm cảnh, và tham số mặc định đã xử lý sẵn rò sáng.
>
> **→ Không thấy nút `降噪` không phải lỗi — có thể bạn đang ở template đã tự động hoá nó.** Kiểm template mình đang dùng trước khi đi tìm.
>
> Tin tốt: bản 3.0 này ghi rõ **mở cho người dùng cá nhân, cả bậc miễn phí lẫn trả phí**; tài khoản thương gia mở dần. Và nó **giảm tỉ lệ cháy sáng lẫn tối sáng** so với bản 2.1, đèn tự động sinh ra chuẩn hơn nên đỡ phải sửa tay.

> 💡 **`手动曝光` là biến số ẩn giải thích nhiều bộ số kỳ lạ.** Có người để `阳光 亮度` tới 100–150 mà ảnh không cháy — vì họ đã hạ `手动曝光 强度` xuống 0,5. Thấy ai đó dùng số nắng cao bất thường, hãy hỏi họ để phơi sáng bao nhiêu.

---

## 13.9. Bảng vênh — kiểm trước khi dùng

Những tham số dưới đây **các nguồn không thống nhất**. Đừng chép, hãy dò.

| Tham số | Các giá trị gặp | Vì sao vênh |
|---|---|---|
| `阳光 亮度` | 20–50 (chính thức) · 30–70 · 50 · 100 · 150 · **300** | **Phụ thuộc con đường bố đèn.** Đường D đẩy rất cao. Số cao thường đi kèm `手动曝光` thấp |
| `阴影柔和度` | 1 · 3 · 10 · 10–20 | **Hai ô hai thang** — xem 13.4 |
| `环境光反射` | 10 · 18 · 20 | Hai phe |
| `外景亮度` | 1–3 · 3 · 5 · 6 · **10** | Dải rất rộng, tuỳ đường |
| `环境阻光 深浅` | 0,2 · 0,50 · 0,70 | Bán kính thì khớp |
| `筒灯 亮度` | 200–300 · 60–200 · 100 | Ca thực chiến đều **thấp hơn** số hay thấy |
| **Đơn vị độ sáng** | thang cũ · `瓦` · **`%`** | Xem cảnh báo đầu chương |

### Kỹ thuật cấp cao: dùng mã RGB thay nhiệt độ màu

Panel đèn có hai tab `色温` (nhiệt màu) và `颜色` (màu), **chỉ nhận một trong hai** — hệ lưu giá trị chỉnh sau cùng.

Gần như mọi người dùng `色温`. Nhưng một ca thực chiến dùng **mã RGB**:

| Mã RGB | Màu | Đi kèm | Vai trò |
|---|---|---|---|
| **240 – 231 – 216** | Trắng ngà ấm | `阴影柔和` 1000 | Cho không khí và bóng đổ |
| **69 – 120 – 176** | Xanh dương trung | `影响高光` BẬT · `亮度` 50 | Tạo vệt sáng xanh |

**Lợi thế:** thang Kelvin chỉ chạy trên trục vàng–xanh lam. RGB cho phép chọn bất kỳ màu nào — làm được những tông mà Kelvin không với tới. Ca này tuyên bố **không dùng hậu kỳ, không dùng LUT** mà ảnh vẫn đẹp.

Kỹ thuật này dành cho lúc bạn đã thạo. Đừng dùng khi còn đang dò số cơ bản.

---

## Thực hành

### Bài 1 — Đi hết bốn con đường
Lấy một phòng khách có cửa sổ. Bố đèn **bốn lần** theo bốn con đường ở 13.1, mỗi lần render một ảnh. Ghi lại thời gian bỏ ra cho mỗi đường.
**Đạt khi:** cả bốn ảnh đều dùng được; nói được đường nào cho ánh sáng **có hướng**, đường nào nhanh nhất, đường nào phụ thuộc cửa sổ lớn.

### Bài 2 — Kiểm hai quy luật phụ thuộc
Cùng một phòng, làm hai phương án: một phương án tông sáng (tường trắng, tủ trắng), một phương án tông tối (gỗ đậm, tường sẫm). Giữ nguyên mọi thứ, chỉ chỉnh `灯带` cho tới khi hai ảnh **trông sáng ngang nhau**.
**Đạt khi:** hai con số cách nhau ít nhất ba lần, và bạn hiểu vì sao.

### Bài 3 — Nắng qua rèm voan
Phòng có cửa sổ và rèm voan. Bật `渲染复杂材质`, dùng template `写实`. Dò theo đúng bốn bước ở 13.4, **mỗi lần đổi một biến**. Ghi lại giá trị ở mỗi bước.
**Đạt khi:** vệt nắng trên sàn **mềm rìa nhưng vẫn đọc được hình khung cửa**. Không phải bóng dao cắt, cũng không phải mảng sáng tan.

### Bài 4 — Render cả bộ
Dựng xong cả căn mẫu. Khoá một template. Lưu 6 góc. Render nháp cả 6, soi lỗi, sửa, rồi render bản cuối.
**Đạt khi:** xếp 6 ảnh cạnh nhau, hướng bóng **giống hệt** ở mọi ảnh, không ảnh nào lệch tông rõ rệt.

---

## Checklist tự chấm

- [ ] Giải thích được vì sao hai bộ số chỏi nhau mà cả hai đều ra ảnh đẹp
- [ ] Chọn được con đường bố đèn hợp cảnh, không chỉ biết một cách
- [ ] Thuộc câu: **ánh sáng đi qua cái gì và đập vào cái gì**
- [ ] Biết `灯带` phụ thuộc màu vật liệu, chênh được gần mười lần
- [ ] Kiểm được đơn vị độ sáng trên máy mình trước khi nhập số
- [ ] Phân biệt `阴影柔和度` của nắng (1–10) với `阴影柔和` của đèn nhân tạo (100–3000)
- [ ] Biết `角度` là góc ngẩng, `位置` là phương vị
- [ ] Dò rèm voan đúng thứ tự bốn bước, **mỗi lần một biến**
- [ ] Phân loại được vật cản: vải mỏng dựa tán xạ, vật đục có khe dựa hình học
- [ ] Trong mô hình không đèn chủ, dựng lớp **nền trước, nhấn sau**
- [ ] Không đặt đèn ảo ở chỗ không có model đèn thật
- [ ] Khoá một template cho cả bộ ảnh, render nháp cả bộ trước khi làm bản cuối
- [ ] Bật `渲染复杂材质` + `镜面真实反射`, tắt `影响高光`

---

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Chép số của người khác mà ảnh cháy trắng | Khác đời template — GI mới mạnh hơn | Hạ số xuống; chép tỉ lệ đừng chép số |
| Nâng bản template xong ảnh cháy | Đèn tay cũ giữ nguyên số nhưng GI cảnh mạnh lên | Hạ đèn tay sau khi nâng bản |
| `灯带` chỗ sáng chỗ tối bất thường giữa hai phòng | Không tính màu vật liệu | Phòng tông tối phải để cao hơn nhiều lần |
| Bóng nắng cứng như dao cắt dù có rèm | Chưa bật `渲染复杂材质`, hoặc dùng `极速`; `不透明度` quá cao; `阴影柔和度` quá thấp | Bật công tắc, chuyển `写实`, hạ `不透明度` về 25–45%, `阴影柔和度` lên 3–5 |
| Vệt nắng mờ tan mất hình | `阴影柔和度` quá cao (8–10); `不透明度` rèm quá thấp | Hạ về 3–5; tăng `不透明度` |
| Có nắng nhưng không thấy vệt trên sàn | Ánh khuếch tán rửa trôi | Hạ `外景亮度` trước, giữ `太阳光` |
| Cửa sổ cháy trắng | `外景亮度` quá cao | Hạ `外景` trước tiên, đừng hạ `太阳光` |
| **Cả ảnh trắng xoá**, chỉ còn thấy cửa sổ màu sẫm | **Thủ phạm thường là `自发光材质` bị gán nhầm**, hay gặp nhất ở mặt trần | Bật `自动曝光` để định vị: vùng nào **không có tương phản sáng tối, không có bóng** chính là chỗ dính. Thay vật liệu mặt đó là xong. Template dòng `极速` hiếm khi bị ca này |
| Ảnh cháy mà không tìm ra đèn nào sai | `面光源` có **`散射角` quá nhỏ mà `亮度` quá cao**; hoặc phương án nhiều tầng, **đèn tầng dưới lọt ra ngoài mặt bằng** | Nới `散射角`, hạ độ sáng. Với nhà nhiều tầng: tạo template đèn giống nhau ở tầng dưới, xoá hoặc kéo lại các nguồn sáng vượt ra ngoài, rồi lên tầng trên render lại |
| Vệt nắng đổ sai hướng cả buổi | Nhầm `角度` với `位置` | `角度` = góc ngẩng, `位置` = phương vị |
| Trưa hè mà không có bóng | Mặt trời gần đỉnh | Đổi giờ về 8:00–10:00, góc ngẩng 15–35° |
| Vệt sáng xuất hiện từ hư không | Đặt đèn ảo ở chỗ không có model đèn | Bỏ đèn đó, hoặc thêm model đèn thật |
| Dải hắt sáng phẳng lì, không có gradient | `衰减系数` để mặc định 1,0 | Nâng lên ~1,5 |
| Khe hắt cháy trắng bệt | `面光源` quá sáng hoặc quá sát mặt trần | Hạ độ sáng, kéo nguồn xa mặt phản xạ, bật vật liệu mới |
| Bộ 8 ảnh nhìn như 8 căn khác nhau | Mỗi ảnh một template, hoặc đổi mặt trời giữa chừng | Khoá một template, render cả bộ bằng đúng bộ đó |
| Số nắng của người ta cao gấp ba mà ảnh họ không cháy | Họ hạ `手动曝光 强度` | Kiểm ô phơi sáng trước khi kết luận |
| Không tìm thấy nút tạo dải hắt một chạm | Chức năng doanh nghiệp | Đặt `面光源` dài mảnh bằng tay |

---

## Nguồn số liệu

**Chính thức — help center Kujiale:**
- Bộ tham số đèn đầy đủ (thiên quang ngoài 400–600, trong cửa 200–300, đèn bù, `射灯` 280–300 @2,4m) — bài `3FO4K4W3SFUK`
- Bảy công tắc `渲染高级参数`, gồm dải `0%–6000%` của vật liệu dải hắt mới — bài `3FO4K4VWISQV`
- Nhóm `自动曝光` / `漏光修复` / `降噪` / `炫光` ở template `自然写实` — bài `3FO4K4VN8BUJ`, cập nhật 08/03/2024
- `体积光`, có đường riêng cho tài khoản cá nhân — bài `3FO4K4VP57FJ`
- `自定义灯光` / `手动灯光`, đối tượng `所有用户` — bài `3FO4K4VW3226`
- Nâng cấp GI bản 3.0 và cơ chế đèn tay giữ nguyên khi nâng bản — bài `3FO4K4WI979T`, 05/06/2024
- `环境光亮度` mặc định mức 3 — bài `3FO4K4WIA2D3`
- `一键生成灯带` là chức năng doanh nghiệp — bài `3FO4K4VLAV8D`
- Bản `室内白天/夜晚` 3.0 gỡ ba nút `降噪` / `漏光修复` / nhấn mạnh vân, mở cho người dùng cá nhân — bài `3FO4K4WI93WS`, 12/07/2024
- Ba nguyên nhân cháy sáng và cách chữa — bài `3FO4K4WMVI6D`
- Ảnh trắng xoá do `自发光材质`, dùng `自动曝光` để định vị — bài `3FO4K4WG599P`
- Bộ tham số đầy đủ của `体积光`; template `室内写实白天` dùng chế độ phơi sáng Reinhard, gamma 2,2 — bài `3FO4K4VP4J1C`
- ⚠️ Ba chế độ `超真实` / `均衡` / `纹理侧重` là **chức năng doanh nghiệp**, không dạy trong sách
- `渲染复杂材质` chỉ chạy đủ ở dòng template `写实`

**Tiêu chuẩn ngành:**
- Độ rọi theo phòng — GB 50034 (Trung Quốc), dùng làm tham chiếu vì Việt Nam chưa chốt số hiệu tương đương

**Ảnh chụp panel thật của designer Trung Quốc — có số nhưng không phải tài liệu chính thức, đánh ⚠️:**
- Bốn con đường bố đèn ở 13.1
- Hai quy luật phụ thuộc ở 13.2
- Toàn bộ bảng hội tụ và bảng vênh
- Kỹ thuật `聚光灯` cường độ cực thấp, và kỹ thuật dùng mã RGB
- Thang `阴影柔和` 100–3000 của đèn nhân tạo

**Nguồn cộng đồng — đánh ⚠️:**
- `窗纱 不透明度` 25–45%, `太阳光 亮度` 30–45 cho cảnh có rèm
- Thang `阴影柔和度` của nắng 1–10 (video hướng dẫn: để 1 thì sắc, để 10 thì rất mờ)
- Ngưỡng chênh nhiệt màu 300–500K và chênh sáng 1 khẩu giữa các ảnh trong bộ
- Số lượng ảnh 6–9 và 9–12 mỗi căn
- `面光源` dài mảnh rộng 20–25 độ sáng ~1500

**Chờ verify trong app (Phụ lục B) — bốn mục chặn cửa:**
1. **Đơn vị độ sáng** thực tế hiển thị là thang cũ, `瓦` hay `%`, và áp cho loại đèn nào
2. **`阴影柔和度` có đúng hai thang không** — nắng 1–10 và đèn nhân tạo 100–3000
3. **`手动曝光`** nằm ở panel nào, thang bao nhiêu, mặc định bao nhiêu
4. **`室内光亮度`** thang bao nhiêu, tối đa có phải 500%

Thêm: `灯光专属环境阻光` trong panel đèn và `环境阻光` ở `高级设置` là **một hay hai** thứ khác nhau · checkbox `阳光投射至每个房间` làm gì · `真实光源模式` ở `灯带` là gì · bản template thực tế còn những bản nào (mở `灯光版本管理` xem, đừng tin bảng in sẵn) · `光照分析图` tài khoản cá nhân có dùng được không.

---

## Tự tra video thực chiến

> 📌 **Sách này cho bạn ĐƯỜNG ĐI. Video cho bạn ĐÔI TAY.**
>
> Chương vừa rồi dựng khung: nguyên lý là gì, thứ tự làm ra sao, số nào tin được số nào không. Nhưng thao tác thật — chuột đi đường nào, bấm chỗ nào, chỉnh tới đâu thì dừng — thì **xem người ta quay màn hình học nhanh hơn đọc nhiều lần.** Người làm nghề Trung Quốc chia sẻ rất nhiều và rất thực chiến.
>
> **Đọc chương xong, tra vài video về đúng ánh sáng nâng cao, rồi quay lại làm.** Đó mới là cách chương này phát huy hết.

Dán nguyên cụm vào ô tìm kiếm của **小红书** hoặc **抖音 (Douyin)**:

| Từ khoá | Tìm được gì |
|---|---|
| `酷家乐 无主灯 打光` | Đánh đèn cho hệ không đèn chủ |
| `酷家乐 纱帘 阳光 渲染` | Nắng qua rèm voan — kỹ thuật cốt lõi chương |
| `酷家乐 手动曝光` | Phơi sáng thủ công — biến số ẩn giải thích nhiều bộ số lạ |
| `酷家乐 灯光模板 对比` | So các đời template |
| `酷家乐 整套 出图` | Render cả bộ ảnh một căn |
| `酷家乐 打光 参数 干货` | Tham số đánh đèn, loại bài thực dụng |

> 💡 **Bốn quy tắc lọc, dùng cho mọi từ khoá:** sắp theo `最新` (mới nhất) · ưu tiên bài có **ảnh chụp panel kèm số** · bỏ bài `AI一键` (quảng cáo) · **chỉ chép số từ bài ghi rõ template 3.0 hoặc 3.1**, bài cũ hơn thì chỉ học tư duy.
>
> Cách vào 小红书 từ Việt Nam, danh sách tài khoản đáng theo dõi, và mẫu ghi lại một ca thu được: xem **Phụ lục E mục E.10**.
