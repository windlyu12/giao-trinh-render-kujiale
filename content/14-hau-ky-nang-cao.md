# C14. Hậu kỳ — đánh bóng, không phải cứu chữa

> **Sau chương này bạn làm được:**
> - Đọc và kéo đường cong, hiểu vì sao nó mạnh hơn thanh tương phản
> - Thêm hạt nhiễu đúng liều để ảnh hết "nhựa" mà không thành bẩn
> - Chỉnh riêng từng dải màu mà không làm lệch màu ván khách đã chốt
> - Tạo "nước ảnh" kiểu Trung Quốc bằng tiết chế, không phải bằng bộ lọc nặng
> - Biết ảnh nào cứu được, ảnh nào phải render lại
> - Chạy được một quy trình hậu kỳ có số, và lưu thành mẫu cho cả bộ ảnh

---

> ## ⚠️ CẢNH BÁO ĐẦU CHƯƠNG — GIỚI HẠN GỐC QUYẾT ĐỊNH MỌI THỨ
>
> Kujiale xuất ảnh phẳng dạng **JPG/PNG 8-bit**, gần như chắc chắn hệ màu sRGB. **Không có RAW.** Điều này giới hạn nghiêm ngặt khả năng cứu sáng và biên độ chỉnh màu.
>
> **Hệ quả 1:** cửa sổ cháy trắng tuyệt đối (điểm ảnh bằng 255-255-255) là **mất dữ liệu vĩnh viễn**. Không công cụ nào cứu được. **Phải render lại.**
>
> **Hệ quả 2:** công cụ khử nhiễu bằng AI của Adobe **không chạy trên JPG/PNG** — nó chỉ nhận file RAW của máy ảnh.
>
> **Hệ quả 3:** mọi thao tác phải **nhẹ tay**. Biên độ chỉnh của file 8-bit hẹp hơn nhiều so với ảnh chụp RAW.
>
> **→ Hậu kỳ đứng CUỐI chuỗi ưu tiên. Nó không cứu được ảnh sai sáng.** Hãy render đúng sáng và xuất ở định dạng cao nhất tài khoản cho phép trước khi nghĩ tới chương này.

---

## 14.1. Ba con số cần nhớ

Cả chương gói lại trong ba con số:

> **Đường cong dịch ~8/255 · Hạt nhiễu Amount 12–15 · Mỗi dải màu trong ±10–15**

Ba con số này là **phần giao nhau của hai bộ nghiên cứu độc lập** — hai bộ chạy riêng, không biết nhau, mà hội tụ về cùng khoảng. Đó là lý do đáng tin hơn số lẻ.

---

## 14.2. Đường cong

### Đọc trong ba phút

Đường cong là một biểu đồ vuông. **Trục ngang là độ sáng gốc (đầu vào), trục dọc là độ sáng sau khi chỉnh (đầu ra).** Cả hai chạy từ 0 (đen) đến 255 (trắng). Điểm giữa 128 là xám trung tính.

Chưa chỉnh thì đường cong là đường chéo 45°: vào bằng ra. Bấm một điểm lên đường đó và **kéo LÊN → vùng sáng đó sáng lên; kéo XUỐNG → tối đi.**

Chia làm ba khu: **trái (0–85) là vùng tối · giữa (85–170) là trung gian · phải (170–255) là vùng sáng.**

Hai điểm quan trọng nhất nằm ở **25% (đầu vào ≈ 64)** và **75% (đầu vào ≈ 192)** — đây chính là hai điểm bạn sẽ kéo.

### Đọc biểu đồ cột để biết ảnh thiếu gì

| Cột dồn về | Nghĩa |
|---|---|
| **Trái** | Ảnh tối, thiếu sáng |
| **Phải** | Ảnh sáng, coi chừng cháy |
| **Giữa, hai đầu trống** | **Ảnh xám bệt, thiếu tương phản — rất hay gặp ở ảnh Kujiale** |
| Chạm sát mép phải, dựng đứng | **Cháy trắng, mất chi tiết** |

### Đường cong chữ S — có toạ độ

Kéo vùng tối xuống một chút, vùng sáng lên một chút. Kết quả: tăng tương phản ở vùng trung gian — nơi mắt nhìn nhiều nhất — làm ảnh "trong" và có chiều sâu, mà vẫn giữ chi tiết hai đầu.

| Mức | Điểm tối (vào 64) | Điểm sáng (vào 192) | Dùng khi |
|---|---|---|---|
| **Nhẹ — mặc định cho nội thất** | ra **56–59** (xuống ~8) | ra **197–200** (lên ~8) | Hầu hết ảnh bán hàng |
| Mạnh | ra 48–52 | ra 202–206 | Ảnh gốc quá phẳng, hoặc ảnh cho mạng xã hội cần bắt mắt lúc lướt |

**Giữ điểm giữa 128 gần như cố định**, nhích tối đa ±3.

Trong Lightroom hoặc Camera Raw thang là 0–100: điểm 25% kéo xuống **−5 đến −8**, điểm 75% kéo lên **+5 đến +8**.

> ⚠️ Cặp toạ độ chính xác này **không có tutorial đơn lẻ nào công bố** — nó là tổng hợp từ quy tắc "kéo điểm phần tư ±5–15" của tài liệu nhiếp ảnh. Coi là điểm khởi đầu, tinh bằng mắt trên ảnh thật của công ty.

**Ảnh nội thất bán hàng dùng mức nhẹ.** Cần trông sạch và thật, không "gồng".

> ⚠️ **Vỡ dải màu.** Kéo quá gắt hoặc tạo khúc gãy đột ngột sẽ làm vùng chuyển màu mượt vỡ thành từng mảng. **Giữ đường cong mượt, dùng 2–3 điểm neo là đủ.**

### Vì sao dùng đường cong thay vì thanh tương phản

Thanh tương phản chỉ xoay quanh **một điểm giữa cố định**. Đường cong cho bạn chỉnh **vô số điểm** trên dải 0–255 — nghĩa là bạn tăng tương phản ở đúng vùng cần, không đụng vùng khác. Đó là toàn bộ khác biệt.

---

## 14.3. Hạt nhiễu

### Vì sao thêm nhiễu lại làm ảnh THẬT hơn

Máy render cho ảnh **mịn tuyệt đối** — không có nhiễu cảm biến như máy ảnh thật. Chính sự mịn đó tố cáo ảnh máy tính: mắt đọc là "nhựa".

Hạt nhiễu còn làm hai việc: **chống vỡ dải màu** trên tường và trần trơn, và **che bớt vết nén** khi ảnh lên mạng xã hội.

### Bảng liều lượng — phần hai bộ nghiên cứu ĐỒNG Ý

| Loại ảnh | Amount | Size | Roughness | Add Noise (Photoshop) |
|---|---|---|---|---|
| **Nội thất tiêu chuẩn** — tư vấn, mạng xã hội | **12–15** | 25 | 45–50 | 2–4% |
| Ảnh in hồ sơ năng lực (300 DPI) | **12–20** | 25–35 | 45–50 | 4–5% |
| Ảnh sẽ bị nén mạnh (tin nhắn, story) | **6–10** | 20 | 45 | ~1,5% |
| Ảnh 4K trở lên, in khổ lớn | 18–25 | 25–35 | 45–55 | 5–6% |
| Ảnh nhỏ 1920×1080 | 8–12 | 15–20 | 45 | 2–3% |

Dạng nhiễu dùng **Gaussian, đơn sắc** — nhiễu màu làm ảnh trông bẩn.

### ⚠️ Một điểm hai bộ nghiên cứu CHỎI NHAU — chưa giải quyết

Về ảnh **tông sáng** (phòng trắng, kem) và ảnh **tông tối** (phòng ngủ đèn vàng), hai bộ nói ngược nhau:

| | Ảnh tông sáng | Ảnh tông tối | Lý lẽ |
|---|---|---|---|
| **Bộ 1** | Cần **nhiều** hơn (15–22) | Cần **ít** hơn (8–14) | Vùng sáng mịn dễ lộ vỡ dải màu; hạt trong vùng tối rất lộ, dễ thành bẩn |
| **Bộ 2** | Cần **ít** hơn (8–12) | Cần **nhiều** hơn (15–20) | Vùng sáng lộ hạt rõ nên dễ bẩn; vùng tối "nuốt" hạt nên cần bù |

**Cả hai lý lẽ đều nghe hợp lý** — chúng nhìn từ hai phía của cùng một hiện tượng.

> 📌 **Cách giải: tự test một lần rồi chốt thành chuẩn công ty.** Lấy hai ảnh của mình — một tông sáng, một tông tối. Mỗi ảnh xuất ba bản Amount 10 / 15 / 20. Xem ở kích thước xuất cuối. Chọn bản đẹp nhất cho từng loại. Ghi lại. Xong.
>
> Đây là ví dụ mẫu cho cả giáo trình: **khi hai nguồn đáng tin chỏi nhau, đừng chọn bừa — hãy test.**

### Quy tắc vàng về độ phân giải

> **Luôn đánh giá hạt nhiễu ở KÍCH THƯỚC XUẤT CUỐI CÙNG, xem toàn ảnh — KHÔNG phóng 100%.**

Hạt đặt cho file lớn sẽ trông mịn hơn nhiều khi xuất về file nhỏ, và ngược lại. Cùng một thiết lập, ảnh 1080px trông nặng hạt gấp đôi ảnh 4K.

### Khi nào KHÔNG thêm hạt

- Ảnh cận cảnh sản phẩm để làm ca-ta-lô — hạt phóng đại thành khuyết tật bề mặt.
- Ảnh sắp qua thêm một lần nén nặng nữa.
- Ảnh đã có nhiễu sẵn do render thiếu thời gian — thêm nữa là thành bẩn thật.

---

## 14.4. Chỉnh riêng từng dải màu

Ba thành phần của mỗi dải: **màu sắc** (dịch tông), **độ bão hoà** (đậm nhạt), **độ sáng**.

### Biên độ an toàn

| Dải | Màu sắc | Bão hoà | Độ sáng |
|---|---|---|---|
| **Cam** — gỗ, sàn | ±5 | +5 đến +10 | +3 đến +8 |
| **Vàng** — nắng, đèn | ±5 | −10 đến +5 | ±5 |
| **Lục** — cây | +8 đến +12 | −10 đến −5 | +5 |
| **Lam** — trời, tông lạnh | ±8 | −5 đến +10 | ±5 |

**Nguyên tắc chung: mỗi dải giữ trong ±10–15.**

Dải **cam và vàng** là hai dải bạn chỉnh nhiều nhất — vì đó là gỗ, sàn, nắng, đèn vàng. Cũng chính là hai dải **nguy hiểm nhất**.

> ## ⚠️ RỦI RO NGHỀ NGHIỆP, KHÔNG PHẢI RỦI RO THẨM MỸ
>
> Chỉnh lệch dải cam là **lệch màu ván khách đã chốt trên bảng mẫu**. Khách nhận nhà thấy tủ không giống ảnh → tranh chấp nghiệm thu.
>
> **Quy tắc bắt buộc: ảnh chốt hợp đồng thì gần như không đụng dải cam và vàng.** Muốn ảnh ấm hơn thì làm ở bước tạo tông tổng thể, đừng kéo riêng dải gỗ.

Mẹo hay dùng: **hạ bão hoà dải lục** một chút để cây bớt "xanh nhựa" — đây là chỉnh an toàn vì không ai chốt hợp đồng theo màu lá.

---

## 14.5. "Nước ảnh" kiểu Trung Quốc

### Sự thật cần biết trước

> 📌 **"Nước ảnh" phần lớn đến từ RENDER — ánh sáng đúng, vật liệu đúng, cân bằng trắng đúng. Hậu kỳ chỉ tinh chỉnh.**

Đây khớp đúng thứ tự ưu tiên của cả giáo trình. Ai nghĩ có thể lấy bộ lọc đắp lên ảnh sai sáng để thành ảnh Trung Quốc là đi sai đường ngay từ đầu.

Một trong tám ca thực chiến ở Phụ lục E tuyên bố **không hậu kỳ, không dùng LUT** mà ảnh vẫn rất đẹp. Hai trong ba ca có ghi chép về LUT thì không dùng LUT.

### Tạo tông bằng chia tông màu

Kỹ thuật cốt lõi: cho **vùng sáng một tông, vùng tối một tông khác** — thường là sáng ngả ấm, tối ngả lạnh, hoặc ngược lại.

> **Giữ độ bão hoà mỗi bánh xe DƯỚI 20.** Quá đó là ảnh bị "nhuộm", trông rẻ tiền.

Ba tông đang thịnh: **kem ấm** · **xám cao cấp** (trung tính hơi lạnh) · **nâu trầm**.

### Bộ LUT của công ty

Bạn **tạo được LUT riêng** và nên làm: chỉnh một ảnh mẫu cho thật ưng, xuất ra file `.cube`, cả team dùng chung. Ba đến năm bộ là đủ cho mọi tình huống.

Lợi ích thật không phải đẹp hơn, mà là **cả team ra ảnh đồng nhất** — đúng tinh thần Chương 13 về bộ ảnh cùng một căn.

⚠️ Công cụ làm đẹp ảnh trong Kujiale **chưa xác nhận có nhận file LUT ngoài hay không**. LUT tự tạo dùng ở Photoshop hoặc Lightroom.

---

## 14.6. Cứu vùng cháy và vùng tối

### Thứ tự đúng khi ảnh vừa cháy vừa tối

> **1. Kéo vùng sáng xuống → 2. Nâng vùng tối lên → 3. Chỉnh phơi sáng tổng → 4. Cuối cùng mới dùng đường cong**

Làm ngược thứ tự là bạn chỉnh đi chỉnh lại mãi không xong.

### Ngưỡng: cứu được hay phải render lại

| Tình trạng | Xử lý |
|---|---|
| Vùng sáng còn chi tiết mờ | ✅ Kéo vùng sáng xuống, cứu được |
| Vùng sáng gần trắng nhưng còn chênh lệch | 🟡 Cứu được một phần, chấp nhận |
| **Điểm ảnh bằng 255-255-255 trên mảng lớn** | ❌ **Mất dữ liệu vĩnh viễn — RENDER LẠI** |

**Cửa sổ cháy trắng là ca phổ biến nhất.** Cách chữa gốc nằm ở Chương 13: hạ `外景亮度` trước, giữ `太阳光`. Ở hậu kỳ chỉ còn cách ghép một ảnh cửa sổ khác vào — tốn công hơn render lại.

### Nâng vùng tối mà không làm ảnh xám bệt

Kéo thanh vùng tối lên quá tay sẽ làm ảnh **xám đục** — mất điểm đen thật, ảnh trông như phủ sương.

Cách đúng: nâng vùng tối vừa phải, rồi **kéo điểm đen của đường cong xuống một chút** để trả lại chỗ đen thật. Ảnh có ít nhất một vùng đen thật thì mới "trong".

---

## 14.7. Ba quy trình có số

### Quy trình nhanh — khoảng 3–5 phút, khuyến nghị cho người mới

Chạy trên Lightroom hoặc Camera Raw:

1. **Cân bằng trắng** — chỉnh nếu ảnh ám vàng hoặc ám xanh
2. **Vùng sáng** kéo xuống, **vùng tối** kéo lên — cứu hai đầu trước
3. **Đường cong chữ S nhẹ** — 25% xuống −5 đến −8, 75% lên +5 đến +8
4. **Chỉnh dải màu** — chủ yếu hạ bão hoà lục; **né dải cam vàng**
5. **Chia tông màu** — bão hoà dưới 20
6. **Hạt nhiễu** — Amount 12–15, Size 25, Roughness 45–50
7. **Làm nét** — vừa phải, xem ở kích thước xuất
8. **Lưu thành mẫu (preset)** → **đồng bộ cho cả bộ ảnh**

Bước 8 là bước ăn tiền nhất: ảnh đầu mất 5 phút, các ảnh sau mất 30 giây, **và cả bộ đồng nhất**.

### Quy trình mạnh — khoảng 8–12 phút

Chạy trên Photoshop, dùng khi cần cứu sáng nặng, ghép cửa sổ, hoặc tạo LUT. Xương sống: **Curves → Color Lookup → Add Noise**, mỗi thứ một lớp riêng để còn sửa được.

### Quy trình gấp — khoảng 2–3 phút

Trên điện thoại, dùng lúc đang tư vấn tại chỗ. Ứng dụng Snapseed hoặc ứng dụng chỉnh ảnh Trung Quốc. Chỉ làm ba việc: cứu hai đầu sáng tối, tăng tương phản nhẹ, thêm hạt rất nhẹ.

### Không mua bản quyền Adobe thì dùng gì

Photopea chạy trên trình duyệt, miễn phí, làm được gần hết những việc trên. Đã dùng ở Chương 10 cho ảnh vân.

---

## 14.8. Làm nét và khử nhiễu

**Làm nét bao nhiêu là đủ:** vừa phải, và **luôn đánh giá ở kích thước xuất cuối**. Ảnh nội thất làm nét quá tay sẽ lộ viền trắng quanh cạnh tủ — dấu hiệu nghiệp dư rõ nhất.

**Thứ tự: làm nét TRƯỚC, thêm hạt SAU.** Làm ngược thì công cụ làm nét sẽ khuếch đại chính hạt bạn vừa thêm.

**Khử nhiễu mâu thuẫn với thêm hạt** — đừng làm cả hai. Ảnh render Kujiale vốn không có nhiễu, nên gần như không bao giờ cần khử nhiễu. Nếu ảnh có nhiễu thì đó là do render thiếu thời gian — **sửa ở khâu render, không sửa ở hậu kỳ.**

⚠️ Nhắc lại: công cụ khử nhiễu AI của Adobe **không chạy trên JPG/PNG**.

---

## Thực hành

### Bài 1 — Chốt liều hạt nhiễu của công ty
Lấy hai ảnh của mình: một tông sáng, một tông tối. Mỗi ảnh xuất ba bản Amount 10 / 15 / 20. Xem ở kích thước xuất cuối, không phóng.
**Đạt khi:** chọn được liều cho từng loại và **ghi lại thành chuẩn công ty** — qua đó giải quyết luôn điểm hai bộ nghiên cứu chỏi nhau ở 14.3.

### Bài 2 — Một mẫu cho cả bộ
Lấy bộ 6 ảnh đã render ở Chương 13. Hậu kỳ ảnh đầu theo quy trình nhanh, lưu thành mẫu, đồng bộ cho 5 ảnh còn lại, rồi chỉnh tay từng ảnh nếu cần.
**Đạt khi:** cả 6 ảnh xếp cạnh nhau không ảnh nào lệch tông; và ảnh thứ 2 đến 6 mỗi ảnh mất dưới 1 phút.

### Bài 3 — Nhận diện ảnh không cứu được
Lấy ba ảnh render có cửa sổ ở ba mức cháy khác nhau. Với mỗi ảnh, thử kéo vùng sáng xuống hết cỡ.
**Đạt khi:** chỉ đúng được ảnh nào phải render lại, và giải thích được bằng khái niệm điểm ảnh 255.

---

## Checklist tự chấm

- [ ] Thuộc ba con số: đường cong ~8/255 · hạt 12–15 · mỗi dải ±10–15
- [ ] Đọc được biểu đồ cột, biết ảnh đang thiếu gì
- [ ] Kéo được đường cong chữ S nhẹ, giữ đường mượt, không quá 3 điểm neo
- [ ] Giải thích được vì sao đường cong mạnh hơn thanh tương phản
- [ ] Đánh giá hạt nhiễu ở **kích thước xuất cuối**, không phóng 100%
- [ ] **Không đụng dải cam và vàng** trên ảnh chốt hợp đồng
- [ ] Giữ bão hoà chia tông màu dưới 20
- [ ] Nhận ra ảnh cháy 255 là phải render lại
- [ ] Nâng vùng tối mà vẫn giữ được một vùng đen thật
- [ ] Lưu mẫu và đồng bộ cho cả bộ ảnh
- [ ] Làm nét trước, thêm hạt sau

---

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Ảnh xám bệt, không "trong" | Cột dồn giữa, hai đầu trống | Đường cong chữ S nhẹ |
| Vùng chuyển màu vỡ thành mảng | Đường cong kéo gắt, có khúc gãy | Giữ đường mượt, 2–3 điểm neo |
| Ảnh xám đục như phủ sương | Nâng vùng tối quá tay, mất điểm đen | Kéo điểm đen của đường cong xuống chút |
| Ảnh trông bẩn sau khi thêm hạt | Quá liều, hoặc dùng nhiễu màu | Hạ Amount, đổi sang Gaussian đơn sắc |
| Hạt nhiễu biến mất sau khi đăng | Nén của nền tảng ăn mất | Với ảnh sẽ nén mạnh, để Amount 6–10 |
| Hạt trông nặng gấp đôi dự tính | Đánh giá ở file lớn, xuất file nhỏ | Luôn xem ở kích thước xuất cuối |
| Viền trắng quanh cạnh tủ | Làm nét quá tay | Giảm, xem ở kích thước xuất |
| Khách kêu màu tủ không giống ảnh | Đã kéo dải cam hoặc vàng | Ảnh chốt hợp đồng không đụng hai dải này |
| Ảnh trông bị "nhuộm màu" | Bão hoà chia tông quá 20 | Hạ xuống dưới 20 |
| Cửa sổ cháy, kéo kiểu gì cũng trắng | Điểm ảnh đã bằng 255 | **Render lại**, hạ `外景亮度` |
| Công cụ khử nhiễu AI không bấm được | Nó chỉ nhận RAW | Đúng như vậy, không phải lỗi |
| Bộ 8 ảnh mỗi ảnh một tông | Hậu kỳ từng ảnh riêng | Lưu mẫu, đồng bộ cả bộ |

---

## Nguồn số liệu

**Đặc điểm file — chắc chắn:**
- Kujiale xuất JPG/PNG 8-bit, không có RAW; cháy 255 không cứu được
- Công cụ khử nhiễu AI của Adobe chỉ chạy trên file RAW
- Độ phân giải xuất tối đa **phụ thuộc bậc hội viên** — tài khoản công ty là bậc cao cấp cá nhân, không phải bản doanh nghiệp. Kiểm trong app, đừng lấy số của bản doanh nghiệp

**Ba con số cốt lõi — hai bộ nghiên cứu độc lập hội tụ:**
- Đường cong dịch ~8/255 (bộ 1 nói 5–8, bộ 2 nói 8–12 → giao nhau ở 8)
- Hạt nhiễu Amount 12–15 (bộ 1 nói 12–18, bộ 2 nói 10–15 → giao nhau 12–15)
- Mỗi dải màu ±10–15

**⚠️ Một điểm hai bộ CHỎI NHAU — chưa giải, phải tự test:**
- Ảnh tông sáng và tông tối cần nhiều hay ít hạt hơn. Xem 14.3 và Bài 1

**Số tham khảo từ tài liệu nhiếp ảnh, không phải chuẩn render — đánh ⚠️:**
- Toạ độ cụ thể của đường cong chữ S
- Toàn bộ bảng liều lượng hạt nhiễu
- Biên độ an toàn từng dải màu
- Thông số chia tông màu — phần lớn nguồn gốc từ tutorial chân dung, logic chuyển được nhưng số nên test lại

**Chờ verify:**
- Công cụ làm đẹp ảnh trong Kujiale có nhận file LUT ngoài không
- Không gian màu của file xuất — gần như chắc là sRGB, kiểm bằng cách mở file xem hồ sơ màu nhúng
