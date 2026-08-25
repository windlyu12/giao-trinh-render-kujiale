# C7. Photorealism — học từ case thực chiến

> **Sau chương này bạn làm được:**
> - Xếp đúng thứ tự ưu tiên 4 trụ cột khi "cứu" một ảnh nhìn giả — biết sửa cái gì trước, cái gì sau
> - Soi ảnh của mình bằng danh sách 12 dấu hiệu tố cáo ảnh 3D, và biết lỗi nào sửa ở chương nào
> - Thêm khiếm khuyết có chủ đích (imperfection) để ảnh "bớt hoàn hảo" đúng cách
> - Chạy trọn workflow xuất ảnh (出图) 7 bước theo tinh thần "thiếu đâu bù đó"
> - Đọc một case chia sẻ trên mạng Trung Quốc đúng cách: biết case nào đáng chép số, case nào chỉ học tư duy

---

Các chương 3–6 dạy từng mảng kỹ thuật rời. Chương này ghép chúng lại thành **một cách nghĩ**: vì sao ảnh vẫn "có mùi 3D" dù từng thứ đều làm đúng, và người giỏi ngoài kia thực sự làm gì. Đây là chương đọc đi đọc lại nhiều nhất sau khi bạn đã render được vài chục tấm.

## 7.1. Bốn trụ cột — thứ tự ưu tiên khi cứu ảnh

Cộng đồng render Trung Quốc đồng thuận một thứ tự rất rõ, xuất phát từ giáo trình được Kujiale xác nhận chính thức của 仙姑老师 (thứ tự trong bài gốc: thiết kế → mô hình·vật liệu → **ánh sáng là hạt nhân** → bố cục → độ nét là bảo đảm):

> 📌 **灯光 (ánh sáng) > 材质·贴图 (vật liệu·texture) > 构图·相机 (bố cục·máy ảnh) > 后期 (hậu kỳ)**

| Trụ cột | Vai trò | Điều phải nhớ |
|---|---|---|
| 1. 灯光 — ánh sáng | **Quyết định.** Hướng sáng rõ + tương phản sáng-tối (明暗对比) là thứ mắt người bắt đầu tiên | Ảnh sai sáng thì vật liệu đẹp mấy cũng vô ích. Sửa ảnh luôn bắt đầu từ đèn (Chương 3–4) |
| 2. 材质·贴图 — vật liệu·texture | Rất cao. Cộng đồng có câu **「三分材质，七分贴图」— 3 phần vật liệu, 7 phần texture**: chỉnh tham số chỉ ăn 3 phần, ảnh vân chất lượng mới ăn 7 phần | Vân phải liền mạch (seamless) + ngẫu nhiên, đủ 4 kênh. Chuẩn chính thức: texture ≥ 2000×2000 px, ≤ 5MB (Chương 5) |
| 3. 构图·相机 — bố cục·máy ảnh | Cao. Tài liệu chính thức gọi ảnh render là "nhiếp ảnh gia dụng ảo hóa" — tức là phải chụp như nhiếp ảnh gia, không phải quay màn hình game | Chiều cao máy, phương đứng thẳng, lớp lang xa-gần (Chương 6) |
| 4. 后期 — hậu kỳ | Trung bình. Chỉ là lớp sơn cuối — **không cứu được ảnh sai sáng** | Tiết chế, ±10–15 là đủ (Chương 6) |

Hai yếu tố xuyên suốt không nằm riêng trụ nào: **imperfection** (mục 7.3) và **bày đồ có hơi thở đời sống** (đồ vật như có người đang dùng — thuộc trụ 3). Còn độ phân giải 4K/8K chỉ là "bảo đảm" — điều kiện cần, hoàn toàn không cứu được ảnh bố sáng sai.

**Cách dùng thực tế:** ảnh bị chê "giả" → dò từ trụ 1 xuống trụ 4, sửa trụ trên trước. Đừng bao giờ mở Photoshop khi chưa chắc đèn đã đúng.

## 7.2. Mười hai dấu hiệu tố cáo ảnh 3D — danh sách "cấm phạm"

Tổng hợp từ các thảo luận cộng đồng về "vì sao ảnh hiệu quả giả / cảm giác nhựa / liếc là biết 3D". Ảnh của bạn dính từ 2 dấu hiệu trở lên là người xem nhận ra ngay.

| # | Dấu hiệu | Vì sao mắt người bắt được | Cách né — sửa ở đâu |
|---|---|---|---|
| 1 | Sáng đều tăm tắp, không rõ nguồn từ đâu | Đời thực luôn có hướng sáng; sáng vô hướng = ánh sáng "máy tính". Template đèn mặc định của Kujiale bị cộng đồng chê hay dư sáng làm ảnh thất chân | Bố sáng 3 lớp, thiếu đâu bù đó (C4) |
| 2 | Ngoài cửa sổ cháy trắng xóa | Mất cân bằng sáng trong-ngoài — ảnh chụp thật máy ảnh vẫn giữ được chi tiết ngoài trời | Hạ thiên quang, cân trong-ngoài (C3) |
| 3 | Vật liệu quá mới, quá sạch | Định nghĩa kinh điển của "cảm giác nhựa": bề mặt như vừa xuất xưởng, không vết dùng | Thêm imperfection (mục 7.3 + C5) |
| 4 | Phản chiếu hoàn hảo như gương | Sai độ bóng; kính/sàn thật phản chiếu có mờ, có suy giảm. ⚠️ Kinh nghiệm cộng đồng: chiết suất kính để ~1.5–1.6 | Hạ 反射光泽度 (độ bóng phản xạ) (C5) |
| 5 | Trắng/đen tuyệt đối, màu quá bão hòa | RGB 255 và đen kịt không tồn tại ngoài đời | Quy tắc trắng 180–200 (mục 7.3) |
| 6 | Tỉ lệ đồ sai, phối cảnh sai | Ghế to hơn bàn, cây ngoài cửa là tấm ảnh phẳng dán vào — não người cực nhạy với scale | Dựng đúng kích thước thật; ngoại cảnh chuẩn (C3) |
| 7 | Cây xanh "xanh nhựa" | Lá thật có chuyển sắc vàng-lục → lục tươi → lục sẫm; lá 3D một màu đều | Chọn model cây có chuyển sắc, tránh model lá phẳng (C5) |
| 8 | Vân lặp giống hệt / lộ đường nối | Sàn gỗ 10 tấm cùng một vân là dấu hiệu 3D điển hình — chuẩn texture chính thức của Kujiale yêu cầu vân liền mạch + ngẫu nhiên hóa | Texture seamless, đảo vân (C5) |
| 9 | Nhiễu hạt, đốm tối ở góc/trần | Do đèn đặt sai (聚光灯 giả nắng), vật liệu độ phân giải thấp | Chẩn đoán 3 bước (C2), quy tắc đèn (C4) |
| 10 | Ảnh "phẳng và xám" (又平又灰) | Thiếu tương phản, thiếu lớp lang — nheo mắt lại không còn phân biệt vùng sáng tối | Dám để tối vùng phụ (C4) |
| 11 | Đồ bày đối xứng máy móc | Gối xếp thẳng hàng như duyệt binh; đời thực không ai sống ngăn nắp tuyệt đối | Bày lệch có chủ đích, thêm dấu vết sinh hoạt (C6) |
| 12 | Mọi bóng đèn sáng hoàn hảo vô khuyết | Đời thực: đèn bị chao che bớt, góc tường có bóng đổ, bóng đèn cũ hơi mờ | Chấp nhận vài đèn mờ hơn, vài vùng tối (mục 7.3) |

> 💡 In bảng này dán cạnh màn hình. Trước khi bấm render bản cuối, dò 12 dòng một lượt — rẻ hơn nhiều so với tốn 核豆 (hạt điểm render) cho một tấm hỏng.

## 7.3. Imperfection — khiếm khuyết có chủ đích

Nghe ngược đời: muốn ảnh thật hơn thì phải làm nó **kém hoàn hảo đi**. Máy render luôn cho ra thế giới sạch tuyệt đối — chính cái sạch đó tố cáo ảnh giả. Bốn nhóm khiếm khuyết nên chủ động thêm:

**1. Màu không tuyệt đối.** Quy tắc quan trọng nhất: ⚠️ **dùng ~RGB 180,180,180 làm màu trắng, không vượt 200** (kinh nghiệm cộng đồng được nhắc lại nhiều nguồn). Trần "trắng", tủ "trắng", chăn ga "trắng" — tất cả đều là xám rất nhạt. Tương tự, không có gì đen kịt: đồ đen thực tế là xám rất đậm. Nhập màu thuần 255 hoặc 0 vào vật liệu là tự tay phá ảnh.

**2. Bề mặt có dấu vết sử dụng.** Vân trầy nhẹ trên sàn khu đi lại nhiều, vân da (thêm vào kênh 凹凸 — vân lồi lõm) cho sofa, độ bóng không đều trên mặt đá. Trong Kujiale bạn không sửa được model sâu như phần mềm khác, nên vũ khí chính là **chọn texture có sẵn chi tiết bẩn/xước nhẹ** và chỉnh kênh phản xạ + lồi lõm (chi tiết ở Chương 5).

**3. Ánh sáng không hoàn hảo.** Vài đèn trong dãy hơi mờ hơn nhau, góc phòng tối hơn giữa phòng, bóng đổ có chỗ đậm chỗ nhạt. Đừng "sửa" hết mọi vùng tối — vùng tối chính là thứ làm vùng sáng có giá.

**4. Bày đồ như có người sống.** Sách mở úp trên sofa, cốc nước trên bàn, chăn hơi nhăn một góc. Một chi tiết "bừa có chủ đích" đáng giá hơn mười món decor xếp thẳng hàng.

> ⚠️ **CẢNH BÁO liều lượng:** imperfection là gia vị, không phải món chính. Xước quá tay thành nhà hoang, đồ bừa quá thành ảnh lỗi. Mỗi khung hình chỉ cần 2–3 điểm khiếm khuyết đủ nhận ra khi soi kỹ — người xem không soi kỹ, nhưng não họ ghi nhận "cảnh này có đời sống".

## 7.4. Workflow xuất ảnh 7 bước — "thiếu đâu bù đó"

Đây là trình tự chuẩn ghép từ tài liệu chính thức + quy trình của 仙姑老师, đã quy về UI mới (3 chế độ render từ 8/2025 — xem Chương 2). Nguyên tắc xuyên suốt: **「哪里不足补哪里」— thiếu đâu bù đó**, luôn đi từ bản tự động rồi mới chỉnh tay, không bao giờ bố đèn từ con số không.

| Bước | Làm gì | Ghi chú |
|---|---|---|
| 1. Kiểm mô hình | Dựng xong 硬装 (phần thô) + đồ đạc, **kiểm scale theo kích thước thật** — sai tỉ lệ là dấu hiệu #6, không đèn nào cứu được | Bạn đã biết dựng; chỉ nhấn: kiểm trước khi mất công bố sáng |
| 2. Vật liệu | Thay texture liền mạch, chỉnh phản xạ/độ bóng/lồi lõm, thêm imperfection | Chương 5. Nhớ 「三分材质，七分贴图」 |
| 3. Bố sáng | Render 1 tấm bằng **đèn tự động** (template hiện hành: 极速3.0/3.1, 室内白天/夜晚, 实时白天/夜晚) → soi thiếu gì → thêm 手动灯光 (đèn thủ công) bù đúng chỗ thiếu, theo 3 lớp nền → chức năng → nhấn | Chương 4. KHÔNG xóa hết làm lại từ đầu |
| 4. Máy ảnh + bố cục | Chỉnh chiều cao/góc/trường nhìn, dựng phương đứng thẳng, lưu góc nhìn | Chương 6 |
| 5. Render nháp | Lặp nhanh, giá rẻ: xem trước bằng 实时专业 (thời gian thực chuyên nghiệp) hoặc render 离线 (ngoại tuyến) ở độ phân giải thấp. Sửa → nháp lại, thường vài vòng | SOP nháp→final tiết kiệm 核豆: Chương 2 |
| 6. Render final | 离线模式, độ phân giải cao, bật 高级参数 (tham số nâng cao): 环境阻光 (đổ bóng tiếp xúc — khối rõ hơn), 影响高光 (giữ đốm sáng phản chiếu), vật liệu phức tạp nếu cần | Số 核豆 tiêu cho từng cỡ ảnh **chỉ xem trong app** qua 「核豆消耗 - 查看详情」 — điền Sổ ghi nhận mục A1 |
| 7. Hậu kỳ | Chỉnh nhẹ đường cong/tương phản, tiết chế | Chương 6, quy tắc ±10–15 |

> ⚠️ **CẢNH BÁO hệ điểm 核豆 (từ 3/2026):** sách không in bảng giá render vì Kujiale đổi liên tục. Bậc tài khoản công ty được cấp 核豆 theo tháng, vé render 6K phải **lĩnh tay mỗi tuần — quên là mất**. Trước khi render final cỡ lớn, mở 「核豆消耗 - 查看详情」xem số tiêu thực tế.

Mốc thời gian để tự lượng sức: tài liệu chính thức Coohom ghi ảnh tĩnh 4K render máy ~1–2 phút; ⚠️ các con số "cả nhà dưới 15 phút" là blog marketing, đừng lấy làm cam kết với khách. Thời gian thật của bạn nằm ở các vòng nháp bước 5 — người mới vài giờ/ảnh là bình thường.

## 7.5. Ngân hàng case thực chiến — học số hay học tư duy?

> ⚠️ **CẢNH BÁO trước khi đọc bảng:** mọi số độ sáng trong bảng dưới là **thang cũ** (0–800). ⚠️ Quy ước "`瓦` = số thang cũ **chia 10**" **chưa được xác nhận bằng nguồn chính thức nào** — xem hộp cảnh báo đầu Chương 4 và Sổ ghi nhận mục B1. Kujiale còn có hệ thứ ba là `%`. Ngoài ra các case dùng template đời cũ (白天3.0...); template hiện hành GI dội mạnh hơn → **lấy số case làm điểm xuất phát ở đầu THẤP của dải, render nháp rồi tăng dần.**

Quy tắc đọc case, trước khi xem bảng:

> 📌 Case đánh **✅** (nguồn chính thức hoặc được Kujiale xác nhận, còn cập nhật) → được phép **học số**: lấy thông số làm điểm xuất phát.
> Case đánh **⚠️** (bài cộng đồng cũ, chưa verify, hoặc có màu quảng cáo) → chỉ **học tư duy**: học cách họ phân tích cảnh và bố đèn, KHÔNG chép số.
> Chính 帅大韩 — một người dạy bố sáng có tiếng trong cộng đồng Kujiale — cảnh báo: *phân tích cảnh trước đã, học vẹt tham số là tự đào hố chôn mình.*

| # | Nguồn (tác giả — nền tảng) | Phòng | Bài học rút ra | Thông số chia sẻ (thang cũ) | Tin cậy — dùng để |
|---|---|---|---|---|---|
| 1 | 仙姑老师 — Kujiale xác nhận chính thức, bản cập nhật 2026 | Khách + ngủ + bếp | Xương sống cả giáo trình: 3 lớp sáng + quy trình sửa ảnh "thiếu đâu bù đó" | 天光 (thiên quang) 2 lớp: ngoài cửa 600–800, trong cửa 300–500 xanh trời nhạt; 筒灯/射灯 200–300, cao ~2400mm; bù tủ 150–200 trắng ấm; bù đồ nội thất 100–150, góc 30–45° | ✅ **học số** |
| 2 | Tài liệu chính thức 高级参数 — help center | Chung + gương WC | 环境阻光 làm khối rõ; vật liệu phức tạp chỉ render đủ ở template 写实; vật liệu đèn LED render chính xác dải 0–6000% | Xem Chương 2 | ✅ **học số/chức năng** |
| 3 | Tài liệu chính thức 体积光 — help center | Chung | Cột sáng cửa sổ tăng chất khí quyển; có tham số riêng chiều dài cột sáng + bán kính đáy | Xem Chương 3 | ✅ **học số/chức năng** |
| 4 | 百度经验 "thiên quang đả quang pháp" | Khách ban ngày | Thiên quang làm chủ, đèn phụ tuyệt đối không lấn chủ; sáng suy giảm dần từ cửa vào trong | Ngoài trắng 280–300; trong xanh nhạt 250–280; phụ 150–200 vàng nhạt, cao = trần −0,1m | ⚠️ học tư duy (số chỉ tham khảo) |
| 5 | Bài Zhihu bố đèn rèm + đèn hắt | Khách (rèm, đèn hắt, đèn bàn) | 2 lớp đèn mặt ở rèm: chuyển từ sáng mạnh ngoài → dịu trong; đèn hắt dải nhỏ phải nhân đôi cường độ | Đèn hắt vàng, cường độ ×2; đèn bàn dùng đèn điểm chỉnh nhiệt màu/bán kính | ⚠️ học tư duy |
| 6 | 帅大韩 — cộng đồng Kujiale | Tư duy tổng quát | Chỉ cần 3 loại đèn (đèn mặt/nắng/đèn rọi) là đủ mọi cảnh — quan trọng là phân tích cảnh trước | Cố ý không cho số | ⚠️ học tư duy (chính là bài học) |
| 7 | Bài cộng đồng "đèn tự động 3.0" | Ngủ | Muốn template tự động match đúng thì phải **đặt đủ model đèn thật** trong cảnh; đồ mềm tránh "tạp hối" nhiều kiểu trộn lẫn | Định tính | ⚠️ học tư duy |
| 8 | 居为家设计商学院 — Zhihu (2023) | Quy trình chung | Chuỗi chỉnh: tham số ảnh → máy ảnh → đèn → chi tiết — cùng logic 7 bước mục 7.4 | Mục lục quy trình, ít số | ⚠️ học tư duy |
| 9 | 百度经验 vật liệu kính | Tủ kính/vách kính | Kính để **1 lớp**, tránh phản xạ đôi quá mạnh — mẹo nhỏ nhưng trị đúng dấu hiệu #4 | Chọn kính đơn thay kính kép | ⚠️ học tư duy |
| 10 | Case bếp "老友记" — Zhihu (2019, ảnh cũ) | Bếp kiểu Mỹ | Kể chuyện bằng vật liệu: tường gạch tạo cảm giác năm tháng, đèn ấm điểm trên nền lam — staging tạo "tuổi" cho không gian | Định tính | ⚠️ học tư duy |

**Vì sao case 1 và case 4 cho số khác nhau cùng một loại phòng?** (600–800 vs 280–300 cho thiên quang ngoài cửa) — vì khác template, khác cỡ phòng, khác đời phần mềm. Đây chính là bằng chứng sống cho lời 帅大韩: con số không mang đi được giữa các cảnh, **tư duy bố sáng mới mang đi được**. Gặp số mới trên mạng, câu hỏi đúng không phải "số này bao nhiêu" mà là "số này đóng vai gì trong hệ sáng của họ".

## Thực hành

**Bài 1 — Tái tạo case ✅ (học số).** Chọn case #1 (仙姑老师), phòng khách căn hộ mẫu của công ty:
1. Bố đèn đúng theo thông số case: thiên quang 2 lớp, 筒灯/射灯 200–300 ở vị trí đèn thật, đèn bù tủ. Kiểm đơn vị máy mình trước (Sổ ghi nhận mục B1) — ⚠️ đừng mặc định chia 10.
2. Render nháp độ phân giải thấp → so với mô tả case: sáng có suy giảm từ cửa vào trong không? 3 lớp sáng có tách bạch không?
3. Lệch chỗ nào chỉnh chỗ đó theo "thiếu đâu bù đó" — tối đa 3 vòng nháp.
4. **Đạt khi:** ảnh chấm theo Phụ lục A được ≥ 40/50, không tiêu chí nào ≤ 2 điểm.

**Bài 2 — Tái tạo case ⚠️ (học tư duy).** Chọn case #5 (rèm + đèn hắt) hoặc #7 (đèn tự động 3.0), áp lên phòng ngủ căn hộ mẫu:
1. CHỈ lấy sơ đồ bố đèn của case (đèn gì, đặt đâu, vai trò gì) — che cột thông số đi.
2. Tự dò số từ đầu thấp của các dải trong bảng Chương 4, render nháp, chỉnh dần.
3. Ghi lại bộ số cuối cùng của bạn, so với số gốc của case: lệch bao nhiêu? Vì sao?
4. **Đạt khi:** ảnh qua được 4 test tự soi (Phụ lục A) và bạn giải thích được từng đèn trong cảnh tồn tại để làm gì.

**Bài 3 — Soi 12 dấu hiệu.** Lấy 3 ảnh render cũ nhất của chính bạn (hoặc của công ty), dò từng ảnh qua bảng 12 dấu hiệu mục 7.2, ghi số thứ tự các dấu hiệu dính phải. Đây là danh sách việc phải luyện của riêng bạn trong Chương 9.

## Checklist tự chấm

- [ ] Đọc thuộc thứ tự 4 trụ cột và giải thích được vì sao hậu kỳ đứng cuối
- [ ] Kể được ít nhất 8/12 dấu hiệu tố cáo ảnh 3D không cần mở sách
- [ ] Nói được quy tắc màu trắng 180–200 và vì sao không dùng 255
- [ ] Chạy trọn 7 bước xuất ảnh trên căn hộ mẫu, có ít nhất 2 vòng nháp trước final
- [ ] Hoàn thành Bài 1: ảnh tái tạo case ✅ đạt ≥ 40/50 theo Phụ lục A
- [ ] Hoàn thành Bài 2: giải thích được vai trò từng đèn trong ảnh tái tạo case ⚠️
- [ ] Có danh sách dấu hiệu "hay dính" của riêng mình từ Bài 3

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Chép số case vào cảnh của mình, ảnh cháy trắng | Sai hệ đơn vị, hoặc template mới GI dội mạnh hơn đời case | Kiểm Sổ ghi nhận mục B1; vào số từ đầu thấp của dải, nháp rồi tăng |
| Làm theo case mà ảnh vẫn không giống | Khác phòng, khác template, khác hướng cửa — số không mang đi được | Quay về học tư duy: case đó bố mấy lớp sáng, mỗi đèn đóng vai gì |
| Thêm imperfection xong ảnh bẩn, cũ kỹ | Quá liều — xước/bừa khắp nơi | Giữ 2–3 điểm khiếm khuyết mỗi khung, phần còn lại sạch |
| Hậu kỳ kéo mãi không "thật" hơn | Sai từ trụ 1 (ánh sáng) mà đi sửa trụ 4 | Bỏ Photoshop, dò lại từ trụ 1 xuống |
| Ảnh đẹp từng góc nhưng "vô hồn" | Thiếu dấu vết sinh hoạt, đồ bày đối xứng máy móc | Dấu hiệu #11 — bày lệch có chủ đích, thêm 1–2 đồ vật "đang dùng dở" |

## Nguồn số liệu

- **Chính thức:** chuẩn texture 材质制作标准手册 (kujiale.com/hc, article 3FO4K4WFSI07 — ≥2000×2000 px, ≤5MB, 4 kênh); tham số nâng cao 高级参数 (3FO4K4VWISQV — 环境阻光, LED 0–6000%); 体积光 (3FO4K4VP57FJ); thời gian render 4K ~1–2 phút (Coohom Help Center).
- **Chính thức được xác nhận:** giáo trình 仙姑老师 (Kujiale 官方认证, ảnh designer 刘刚/仙姑, bản cập nhật 2026 — nguồn thứ tự 4 trụ cột, 3 lớp sáng, bộ số case #1).
- **Cộng đồng (⚠️):** quy tắc trắng 180–200 + danh sách dấu hiệu cháy sáng/quá mới (Renderbus, nhiều bài); chiết suất kính 1.5–1.6; case 百度经验/Zhihu #4, #5, #8, #9, #10; tư duy 帅大韩 (cộng đồng Kujiale); "cả nhà dưới 15 phút" là blog marketing Coohom — không dùng cam kết.
- **Chờ verify trên app:** đơn vị 瓦 (Sổ ghi nhận mục B1); số 核豆 tiêu theo cỡ ảnh (A1); giới hạn dung lượng upload texture 2MB hay 5MB (C2).
