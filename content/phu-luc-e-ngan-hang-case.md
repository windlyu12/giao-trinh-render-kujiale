# Phụ lục E. Ngân hàng ca thực chiến

**Mười ca đánh đèn của designer Trung Quốc, thu từ 小红书, Douyin và cộng đồng chính chủ Kujiale.**

Đây là phụ lục quan trọng nhất về mặt số liệu, vì nó chứa thứ mà tài liệu chính thức không có: **ảnh chụp panel thật, với số thật, kèm ảnh kết quả.**

---

## Cách dùng phụ lục này

> ## 📌 ĐỌC ĐỂ HIỂU CÁCH NGHĨ, KHÔNG PHẢI ĐỂ CHÉP SỐ.
>
> Tác giả ca số 8 viết nguyên văn, nhắc **ba lần liền**:
> **"Đừng học thuộc lòng các thông số! Đừng học thuộc lòng các thông số! Đừng học thuộc lòng các thông số!"**
>
> Một giảng viên khác mà Chương 7 đã trích cũng nói y hệt: *"phân tích cảnh trước đã, học vẹt tham số là tự đào hố chôn mình."*
>
> **Hai người không quen nhau, cùng một cảnh báo.** Đó là lý do phụ lục này xếp các ca theo **cách nghĩ**, không xếp theo bảng số.

Ba mức độ tin cậy dùng trong phụ lục:

| Ký hiệu | Nghĩa |
|---|---|
| ✅ **Học được số** | Có ảnh chụp panel gốc. Số đọc trực tiếp từ màn hình |
| ⚠️ **Chỉ học tư duy** | Số qua trung gian (chép tay, AI đọc video). Học quy trình, đừng chép số |
| 📄 **Có số nhưng thiếu ảnh** | Bài viết có thông số nhưng không có ảnh kết quả độc lập |

---

## E.1. ⚠️ Ba lỗi khi dùng AI đọc video — đọc TRƯỚC khi tin bất kỳ ca video nào

Bốn trong mười ca dưới đây đến từ video, được đọc lại bằng công cụ AI. Trong quá trình đó bắt được **ba lỗi có hệ thống**. Ai định tự thu thêm ca theo cách này phải biết trước.

### Lỗi 1 — Kết luận tổng của AI không đáng tin, chỉ tin BẢNG

Ở một ca, phần kết luận của AI ghi *"dùng thang cũ, không có đơn vị watt"* — **nhưng chính bảng số của nó lại ghi `100 %` và `200.00 %`**.

Nguyên nhân: AI **suy diễn** ở phần kết luận, nhưng **chép** ở phần bảng. Phần chép đáng tin hơn hẳn phần suy.

### Lỗi 2 — AI gán SAI NHÃN khi các ô xếp sát nhau

Một ca ghi `饱和度` = 1,50. Nhưng ảnh panel của ca khác cho thấy thứ tự các ô là:

> `炫光` **1.50** → `对比度` 0.05 → `亮度` 0.00 → `饱和度` **0.05**

AI đã lấy giá trị của `炫光` gán cho `饱和度`. **Hai ô cách nhau ba dòng.**

### Lỗi 3 — AI có thể BỊA phần mô tả ảnh kết quả

Một ca được mô tả có *"vách TV có đèn hắt và tủ rượu"* — không khớp ảnh thật khi đối chiếu.

> **→ Quy tắc rút ra: ưu tiên bài viết có ảnh chụp panel hơn video. Nếu buộc phải dùng video, chỉ tin bảng số kèm mốc thời gian; bỏ qua phần kết luận và phần mô tả ảnh.**

---

## E.2. Bảng mười ca

| # | Tên ca | Dạng | Tin cậy | Giá trị chính |
|---|---|---|---|---|
| 1 | Video thao tác đánh đèn | Video | ⚠️ | Quy trình **xoá sạch đèn rồi dựng lại**; `真实光源模式` ở `灯带` |
| 2 | Hai bài "đèn Kujiale 1 và 2" | Bài viết | ⚠️ | Lần đầu thấy **`手动曝光`**; phân biệt 3 loại đèn; camera cao 1100 |
| 3 | "Bố cục đèn" | **Panel gốc** | ✅ | **Đơn vị `%`**; quy trình 7 bước; LUT `写实蓝调` 75% |
| 4 | "Sáu bước đánh đèn — đèn 3.0" | Bài viết | ✅ | **Quy luật màu vật liệu**; 6 bước có dải số; `辉光管` |
| 5 | Video "chỉ một đèn duy nhất" | Video | ✅ | Xác nhận giao diện mới; `点光源` cầu **ngoài cửa** thay thiên quang |
| 6 | "Cách đánh đèn siêu đơn giản" — 9 đèn | **Sơ đồ + số** | ✅ | **Gradient nhiệt màu theo khoảng cách**; bộ số nắng |
| 7 | "Một đèn đại sư" | **Panel gốc** | ✅ | **`室内光亮度` 500%**; xác nhận `辉光` và thư viện IES |
| 8 | "Đừng mù quáng chạy theo xu hướng" | **Panel + chú thích tay** | ✅ | **Dùng mã RGB thay Kelvin**; `位置` vs `角度`; quy luật rèm |
| 9 | Phòng khách thông tầng, đèn tay 3.0 | Bài + ảnh trước/sau | 📄 | Có ảnh so sánh trước và sau |
| 10 | Bộ giáo trình hai designer, bản đăng lại | Bài | 📄 | Ba ca khách / ngủ / bếp, phân ba lớp sáng |

---

## E.3. Bốn con đường bố đèn — cốt lõi rút ra

Đây là kết luận đắt nhất của cả ngân hàng. Mười ca không cho một bộ số, chúng cho **bốn cách nghĩ khác nhau**, mỗi cách giao gánh nặng chiếu sáng cho một thứ.

| Đường | Ai gánh | Ca đại diện | Đặc điểm |
|---|---|---|---|
| **A** | `环境光亮度` cao **4–7** | 2, 3, 4, 5 | Nhanh, dễ — nhưng ánh sáng **vô hướng** |
| **B** | `球形灯` 8000K **ngoài nhà**, `环境光亮度` = **0** | 6 | Có hướng, kiểm soát tốt nhất |
| **C** | `室内光亮度` **500%** + đúng **một** `矩形面光源` trong cửa | 7 | **Dễ nhất cho người mới** |
| **D** | `外景亮度` **10** + `阳光` **300**, đèn trong chỉ bù **80** | 8 | Để môi trường gánh |

**Ba biến thể "ít đèn" đáng chú ý:**

| Ca | Đèn chính | `室内光亮度` | `环境光亮度` |
|---|---|---|---|
| 5 | 1 `点光源` cầu **NGOÀI** cửa | 100 % | 5,0 |
| 7 | 1 `矩形面光源` **TRONG** cửa | **500 %** | — |
| 6 | 4 `球形灯` ngoài + 5 đèn trong | — | **0** |

> ⚠️ Tác giả ca 7 quảng cáo hơi quá — *"một giây"*, *"sánh ngang nhà thiết kế chuyên nghiệp"*. Ảnh kết quả đẹp thật, **nhưng đó là cảnh có cửa sổ lớn nhìn ra hồ**. Phòng không có cửa sổ lớn thì cách này không chạy.

**Lộ trình học: bắt đầu đường C → lên A → sang B khi cần chất → D học sau cùng.**

---

## E.4. Hai quy luật phụ thuộc — thứ giá trị nhất thu được

### Quy luật 1 — độ sáng dải hắt phụ thuộc MÀU VẬT LIỆU (ca 4)

| Không gian tông | `灯带` |
|---|---|
| **Sáng** | **300–800** |
| **Tối** | **2000–6000** |

Quy luật này **giải mã được mâu thuẫn** tồn tại từ trước: ca 1 để 700, ca 2 để 600, còn giáo trình ghi ~1500. Hoá ra ca 1 và ca 2 đều làm không gian **tông sáng**, nằm gọn trong dải 300–800. Không ai sai.

### Quy luật 2 — độ sáng phụ thuộc CÓ RÈM HAY KHÔNG (ca 8)

Nguyên văn: **`有窗帘拉满，没窗帘看着给`** — có rèm thì kéo hết cỡ, không rèm thì cho vừa mắt.

### Gộp lại

> ## Đừng hỏi "đèn này để bao nhiêu".
> ## Hỏi "ánh sáng phải **đi qua cái gì** và **đập vào cái gì**".

---

## E.5. Bảng hội tụ — số nhiều nguồn cùng xác nhận

Những giá trị này được **ba nguồn trở lên** nhất trí. Đáng tin hơn hẳn số lẻ của một ca.

| Tham số | Giá trị | Số ca |
|---|---|---|
| `相机高度` | **900–1100 mm** | 2, 4 + giáo trình |
| `相机视野` | **≤ 80** | 2, 4 |
| `炫光` | **1,50** | 4, 7 + giáo trình |
| `环境光亮度` | **4** (dải 3–7) | 2, 3, 4, 5 |
| `环境光反射` | **18–20** | 2, 3, 6, 8 (ca 5 để 10) |
| `外景亮度` | **3** hay dùng nhất (dải 1–10) | 2, 4, 5, 6 |
| `环境阻光 深浅` | **0,50** | 2, 3, 7 |
| `环境阻光 半径` | **25–50 mm** | 2, 3, 4, 5, 7 |
| `手动曝光 强度` | **0,5–1,0** | 2 (×2), 3, 5, 7 |
| `室内光亮度` | **100%** thường · **500%** khi một đèn | 3, 5, 7 |
| **Bộ số NẮNG** | **6500K · `亮度` 50 · `角度` 30°** | 4, 5, 6 + giáo trình |
| `聚光灯 亮度` | **0,3–2 %** (cực thấp, chỉ tạo bóng) | 3, 4 |
| `聚光灯 色温` | **khớp với nắng** | 3, 4 |
| `灯带` / `氛围灯` nhiệt màu | **3500–4500 K** | 2, 4, 6, 8 + giáo trình |
| `筒灯 亮度` | **100** | 2, 4, 6 |
| `筒灯` nhiệt màu | **3500 K** | 4, 6 |
| `面光源 散射角` | **65–90°** | 3 (65), 6 (70/90), 7 (75), 8 (85) |
| `递推光` giảm dần | **200 → 150 → 100 → 50** | 4 (số) + 2 + giáo trình |
| `球形灯` nhiệt màu | **6500–10000 K** | 3, 5, 6 |
| `影响高光` TẮT + `镜面真实反射` BẬT | Cặp công tắc chuẩn | 3, 7 |
| `色彩增强` | `标准` · `饱和度` 0,05 · `对比度` 0–0,05 · `亮度` 0,00 | 3, 7 |
| `面光源` **không đặt sát tường** | Quy tắc | 2 + giáo trình |

> ⚠️ **Bẫy hội tụ giả — đọc kỹ.** Đếm số nguồn phải đếm theo **tác giả gốc**, không đếm theo số bài. Ví dụ: bộ giáo trình của ca 10 là nguồn của nhiều bài viết khác nhau trên mạng, và cũng là nguồn của một phần giáo trình này. Ba bài trích cùng một người **không phải ba xác nhận độc lập**.
>
> Mười ca ở E.2 thì ca 1–8 là **tác giả độc lập với nhau**, nên bảng trên đáng tin. Ca 9 và 10 đến từ luồng khác, dùng để đối chiếu.

---

## E.6. Bảng vênh — kiểm trước khi dùng

| Tham số | Các giá trị gặp | Nguyên nhân khả dĩ |
|---|---|---|
| `阳光 亮度` | 20–50 (chính thức) · 30–70 · 50 · 100 · 150 · **300** | **Phụ thuộc con đường**. Đường D đẩy rất cao. Số cao thường đi kèm `手动曝光` thấp |
| `阴影柔和度` | 1,00 · **3,00** · 10 · 10–20 | **Hai ô hai thang** — xem E.7 |
| `环境光反射` | 10 · 18 · 20 | Hai phe |
| `外景亮度` | 1–3 · 3 · 5 · 6 · **10** | Dải rất rộng |
| `环境阻光 深浅` | 0,2 · 0,50 · 0,70 | Bán kính thì khớp |
| **Đơn vị độ sáng** | thang cũ · `瓦` · **`%`** | Ca 3 và 5 chứng minh có hệ `%` |
| `筒灯 亮度` | 200–300 (giáo trình) · 60–200 · 100 | Ca thực chiến đều **thấp hơn** |

---

## E.7. 🔑 Vụ `阴影柔和度` vênh mười lần — đã gỡ

Đây là mâu thuẫn dai nhất của cả ngân hàng, và nó đã được giải.

**Ca 8 cho thấy hai ô khác nhau trong hai panel khác nhau:**

| Ô | Thuộc về | Giá trị ca 8 | Thang |
|---|---|---|---|
| `阴影柔和度` | **`阳光`** (mặt trời) | **3,00** | khoảng **1–10** |
| `阴影柔和` | **Đèn nhân tạo** | **1000** | khoảng **100–3000** |

**Các ca trước đã trộn lẫn hai ô này.** Ca 3 ghi 3000 và 800 — đó là của `聚光灯`. Ca 4 ghi 100–300 cũng của `聚光灯`.

**Xác nhận độc lập:** một video hướng dẫn nói rõ về ô của mặt trời — *"để `阴影柔和度` bằng một, rồi để bằng mười, bạn thấy khác biệt chưa?"* — tức thang chạy 1 đến 10, số càng lớn bóng càng mềm.

Đối chiếu lại toàn bộ:

| Nguồn | Giá trị nắng | Khớp thang 1–10? |
|---|---|---|
| Ca 8 (panel gốc) | 3,00 | ✅ giữa vùng dùng được |
| Ca 5 | 1,00 | ✅ bóng sắc |
| Ca 6 | 10 | ✅ rìa thang, bóng rất mờ |
| Ca 4 | 10–20 | 🟡 tràn nhẹ — nghi khác đời template |

**→ Kết luận: hai ô, hai thang. Vùng dùng được của nắng là 3–5.** Còn lại cần verify chiều thang trên giao diện hiện tại.

---

## E.8. Những thứ MỚI HOÀN TOÀN — không có ở đâu khác

Đây là phần chứng minh vì sao phải thu ca bằng tay: **những mục dưới đây không xuất hiện trong bất kỳ gói nghiên cứu nào, cũng không có trong tài liệu chính thức bằng tiếng Việt.**

| Mục | Ca | Ghi chú |
|---|---|---|
| **`手动曝光` + `强度`** | 2, 3, 5, 7 | Đường vào: `效果` → `模板` → `曝光` → hai nút `自动曝光` / `手动曝光` → ô `强度`. Dải 0,5–1,0 |
| **`室内光亮度`** | 3, 5, 7 | 100% thường, **500%** khi dùng một đèn |
| **`灯光专属环境阻光`** | 2, 3, 4, 5, 7 | **AO thứ hai**, nằm trong panel đèn — khác `环境阻光` ở `高级设置` |
| **Đơn vị `%`** | 3, 5 | Trần có thể tới 6000% |
| **`辉光` / `辉光管`** | 4, 7 | **Loại đèn thứ chín**, có mục riêng trong menu |
| **Thư viện IES tên thật** | 7 | `补灯1` · `射灯1–12` · `筒灯1–2` |
| **Dùng mã RGB thay Kelvin** | 8 | 240-231-216 (trắng ngà) · 69-120-176 (xanh). Kỹ thuật cấp cao |
| **`阳光投射至每个房间`** | 8 | Ô tích, chưa rõ tác dụng |
| **`相机裁剪`** có số | 4 | 1000–3000 |
| **`属性应用至同款灯`** | 3, 7 | Nhân bản thiết lập sang mọi đèn cùng loại |
| **`九宫格`** | 2 | Lưới bố cục |
| **`真实光源模式`** | 1 | Ở `灯带` |
| **`照射角`** cho `灯带` | 1 | 60° |
| **Gradient nhiệt màu theo khoảng cách** | 6 | Ngoài 8000K → 6500K → 4500K → trong 3500K |
| **`聚光灯` cực thấp để giả bóng** | 3, 4 | 0,3–2% |

**Bốn câu treo đã được các ca trả lời:**

| Câu hỏi | Đáp | Ca |
|---|---|---|
| `角度` của nắng là góc ngẩng hay phương vị? | **`角度` = góc ngẩng · `位置` = phương vị** | 8 |
| Thư viện IES có những gì? | `补灯1` · `射灯1–12` · `筒灯1–2` | 7 |
| `辉光管` có thật không? | **Có**, mục riêng trong menu đèn | 4, 7 |
| Nút phơi sáng tên là gì? | **`自动曝光` / `手动曝光`** | 2, 3, 5, 7 |

---

## E.9. Hai ca từ luồng cộng đồng chính chủ

Hai ca dưới đây thu được qua cộng đồng chính chủ của Kujiale và bản đăng lại, khác luồng với tám ca trên nên dùng đối chiếu tốt.

**Ca 9 — phòng khách thông tầng, đèn tay bản 3.0.** Có ảnh trước và sau, kèm số. Giá trị chính nằm ở ảnh so sánh.

**Ca 10 — bộ giáo trình của hai designer, bản đăng lại 2026.** Ba ca con: khách, ngủ, bếp, phân ba lớp sáng.

| Nguồn sáng | Giá trị 📄 |
|---|---|
| Thiên quang ngoài | 600–800 |
| Thiên quang trong | 300–500 |
| `筒灯` / `射灯` | 200–300, cao 2400 |
| Đèn bù tủ | 150–200 |
| Đèn cầu | 250–300 |
| Đèn hắt | rộng 20–25, sáng **1500** |

> ⚠️ **Bộ số này CAO hơn hẳn số chính thức** (thiên quang ngoài chính thức là 400–600). Nguyên nhân gần như chắc chắn là **đời template**: tài liệu bản 3.1 ghi rõ từ bản 3.0 trở đi phản xạ toàn cục mạnh hơn, **cùng một độ sáng giờ chiếu được diện tích lớn hơn, nên phải HẠ số xuống**.
>
> **→ Số càng cũ càng phải để cao.** Đây là chìa khoá giải thích gần như mọi vênh số bạn gặp trên mạng.

---

## E.10. Tự thu thêm ca

Ngân hàng này càng dày càng đáng tin — mỗi ca mới làm một dòng trong bảng hội tụ chắc thêm.

### Nguồn nào chạy được

| Nguồn | Tình trạng |
|---|---|
| 小红书 | ✅ Thu tay được — **nguồn tốt nhất**, nhiều bài có ảnh panel |
| Douyin | 🟡 Xem tay được, nhưng số nằm trong video |
| Cộng đồng chính chủ và trung tâm trợ giúp Kujiale | ✅ Đọc web bình thường |
| Bản đăng lại trên các trang tin Trung Quốc | ✅ Không cần tài khoản |
| Bilibili | 🟡 Có nội dung tốt nhưng số nằm trong video, phải xem tay |

### Quy trình thu một ca

1. **Ưu tiên bài có ảnh chụp panel.** Bài chỉ có chữ thì độ tin cậy tụt một bậc.
2. **Chụp lại nguyên panel**, đừng chép tay — chép tay là nguồn sai nhãn.
3. **Ghi lại tuyên bố của tác giả** về có hậu kỳ hay không, có dùng LUT hay không. Thiếu thông tin này thì số mất một nửa giá trị.
4. **Ghi ngày đăng.** Đời template quyết định số cao hay thấp — không có ngày thì không diễn giải được.
5. **Đối chiếu ngay với bảng hội tụ E.5.** Khớp thì tăng số nguồn; lệch thì vào bảng vênh E.6 kèm giả thuyết vì sao.
6. **Không bịa lý do cho đẹp sổ.** Không rõ vì sao lệch thì ghi "chưa rõ".

### Bộ từ khoá — dán thẳng vào ô tìm kiếm

> 💡 **Tìm từ khoá theo CHỦ ĐỀ CHƯƠNG thì xem mục "Tự tra video thực chiến" ở cuối mỗi chương** — mỗi chương có bảng riêng, sát nội dung chương đó.
>
> Bộ dưới đây khác: nó nhắm vào việc **thu ca có số** để làm dày ngân hàng này, nên ưu tiên bài có ảnh chụp panel.

Xếp theo thứ tự đáng thu. **Copy nguyên cụm, dán vào ô tìm của 小红书 hoặc Douyin.**

#### Ưu tiên 1 — phòng khách, tông kem, không đèn chủ

| Từ khoá | Nghĩa |
|---|---|
| `酷家乐 奶油风 客厅 打光参数` | Khách tông kem, tham số đánh đèn |
| `酷家乐 无主灯 灯光布置` | Bố đèn không đèn chủ |
| `酷家乐 纱帘 阳光 渲染` | **Rèm voan gặp nắng** — đúng trọng tâm Chương 13 |
| `酷家乐 客厅 打光 数值` | Trị số đánh đèn phòng khách |
| `酷家乐 写实白天3.1 客厅` | Khách với template mới nhất |

#### Ưu tiên 2 — tủ bếp và tủ áo cận cảnh

| Từ khoá | Nghĩa |
|---|---|
| `酷家乐 橱柜 特写 打光` | Cận cảnh tủ bếp |
| `酷家乐 衣柜 灯带 参数` | Tham số dải hắt trong tủ áo |
| `酷家乐 柜体 打光 数值` | Trị số đánh đèn thân tủ |
| `酷家乐 全屋定制 渲染 参数` | Tham số render đồ định chế |

> 📌 Nhóm này **sát nghề công ty nhất** — tủ bếp và tủ áo là thứ mình bán. Ưu tiên thu.

#### Ưu tiên 3 — phòng ngủ gỗ mộc, kiểu Nhật

| Từ khoá | Nghĩa |
|---|---|
| `酷家乐 卧室 原木风 打光` | Ngủ tông gỗ mộc |
| `酷家乐 日式 卧室 渲染参数` | Ngủ kiểu Nhật |
| `酷家乐 夜晚灯光3.0 卧室` | Ngủ cảnh đêm, template 3.0 |

#### Ưu tiên 4 — chung, "ảnh như chụp"

| Từ khoá | Nghĩa |
|---|---|
| `酷家乐 照片级 渲染` | Render mức ảnh chụp |
| `酷家乐 灯光 参数 干货` | `干货` = "hàng khô", tiếng lóng chỉ **kiến thức thực dụng không lảm nhảm** — từ khoá rất đáng dùng |
| `酷家乐 打光 三步法` | Đánh đèn ba bước |
| `酷家乐 极速3.1 打光教程` | Hướng dẫn cho template mới |
| `酷家乐 出图 教程 2026` | Đổi năm cho hợp thời điểm |

#### Tìm theo người — gõ vào ô tìm **tài khoản**, không phải ô tìm bài

| Tên | Ghi chú |
|---|---|
| `酷家乐清晨` | Còn đăng đều |
| `酷家乐也陌` | Còn đăng đều |
| `钟西米酷家乐` | ⚠️ Ở **Douyin**, không phải Bilibili — sách bản đầu ghi sai |
| `酷家乐金鱼呀` | |
| `仙姑` kèm `酷家乐` | Nguồn của nhiều bộ số lưu hành. ⚠️ Nhiều bài trên mạng chép lại người này — xem cảnh báo hội tụ giả ở E.5 |

### Lọc bài trong biển kết quả — bốn bước

1. **Sắp theo `最新`** (mới nhất) để ra bài 2025–2026. Template đổi nhanh, bài cũ số không dùng thẳng được.
2. **Ưu tiên bài có ảnh render KÈM bảng số trong ảnh** — tức ảnh chụp màn hình panel `参数`. Đây là loại đáng vàng.
3. **Bỏ** bài chỉ khoe ảnh không có số, và bài `AI一键` (AI một chạm) — loại đó là quảng cáo.
4. **Kiểm đời template.** Bài ghi rõ 3.0 hoặc 3.1 thì mới đáng chép số. Bài 2.x hoặc không ghi đời → **chỉ học tư duy, đừng chép số**.

### Vào 小红书 từ Việt Nam

**Đăng ký bằng số +84 được.** Nền tảng đã mở đăng ký cho nhiều quốc gia — chọn Vietnam +84 trong ứng dụng.

⚠️ **Hay kẹt ở bước nhận mã:** một số nhà mạng Việt Nam chặn tin nhắn gửi từ Trung Quốc. Cách chữa: đổi mạng (chuyển giữa wifi và 4G, hoặc đổi nhà mạng), hoặc dùng dịch vụ nhận mã.

**Bản web xem được nhưng rất giới hạn** — chỉ hiện vài bài gợi ý, ẩn ô tìm kiếm, cuộn một lúc là đòi quét mã đăng nhập. **Không đủ để nghiên cứu.** Nội dung đầy đủ nằm trong ứng dụng điện thoại.

⚠️ Địa chỉ mạng nước ngoài bị hạn chế một số chức năng. Dùng ứng dụng là ổn nhất.

### Ghi ca ngay lúc thu, đừng để dồn

> 📌 **Thu được ca nào ghi ngay ca đó.** Ghi hồi tưởng cuối tuần thì mất nguyên nhân, mất số nguyên văn, sổ thành vô dụng.

Mỗi ca ghi đúng **năm dòng**:

```
Ngày đăng:      (đời template phụ thuộc cái này — thiếu là không diễn giải được)
Tác giả:
Có ảnh panel:   có / không
Tuyên bố:       có hậu kỳ không? có dùng LUT không?
Số đọc được:    (chụp màn hình, đừng chép tay)
```

Rồi đối chiếu ngay với **bảng hội tụ E.5**: khớp thì ghi thêm một nguồn vào dòng đó; lệch thì đưa vào **bảng vênh E.6** kèm giả thuyết vì sao. Không rõ vì sao thì ghi **"chưa rõ"** — cấm bịa lý do cho đẹp sổ.

## E.11. Bốn mục cần verify trong app — chặn cửa

Bốn mục này chưa xác nhận thì **mọi con số trong phụ lục đều treo**.

| # | Verify gì | Vì sao chặn |
|---|---|---|
| **1** | **Đơn vị độ sáng** thực tế là thang cũ, `瓦` hay `%`, và áp cho loại đèn nào | Quyết định mọi số có dùng được không |
| **2** | **`阴影柔和度` có đúng hai thang không** — nắng 1–10, đèn nhân tạo 100–3000 | Gỡ mâu thuẫn dai nhất, xem E.7 |
| **3** | **`手动曝光`** nằm ở panel nào, thang bao nhiêu, mặc định bao nhiêu | Bốn ca đều dùng; là biến số ẩn giải thích nhiều bộ số lạ |
| **4** | **`室内光亮度`** thang bao nhiêu, tối đa có phải 500% | Chìa khoá của đường C |

Mức ưu tiên thấp hơn: `灯光专属环境阻光` và `环境阻光` là một hay hai · ô tích `阳光投射至每个房间` làm gì · `真实光源模式` ở `灯带` là gì.

---

## Nguồn

- **Tám ca 1–8:** thu tay từ 小红书 và Douyin, tháng 8/2026. Tác giả độc lập với nhau. Ca 3, 7, 8 có ảnh chụp panel gốc.
- **Ca 9–10:** cộng đồng chính chủ Kujiale và bản đăng lại trên trang tin Trung Quốc, 2026.
- **Ba lỗi khi dùng AI đọc video (E.1):** ghi lại tại chỗ trong quá trình xử lý bốn ca video.
- **Đối chiếu chính thức:** bộ tham số đèn chính thức và cơ chế đời template — xem phần nguồn của Chương 13.

⚠️ **Toàn bộ số trong phụ lục này là số cộng đồng, không phải chuẩn của Kujiale.** Nơi nào có số chính thức thì Chương 13 đã ghi rõ. Phụ lục này tồn tại để cho bạn thấy **người làm nghề thật sự đặt số như thế nào và vì sao họ đặt khác nhau.**
