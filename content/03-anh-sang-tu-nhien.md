# C3. Ánh sáng tự nhiên

> **Sau chương này bạn làm được:**
> - Chọn đúng template đèn (灯光模板) trong danh sách hiện hành cho từng mục đích: ảnh chính, ảnh nháp, preview nhanh
> - Dựng ánh sáng tự nhiên theo 3 lớp: nắng (太阳光) → thiên quang (天光) → ngoại cảnh (外景), sáng giảm dần từ cửa sổ vào sâu phòng
> - Đặt được ngoại cảnh tùy chỉnh bằng ảnh PNG/JPG 2:1 và khớp hướng nắng với ngoại cảnh
> - Tạo hiệu ứng nắng xiên qua rèm bằng ánh sáng khối (体积光)
> - Tự xử lý 3 tình huống thật: căn hộ 1 hướng cửa sổ, WC không cửa sổ, ảnh "nắng đổ cột" kiểu Xiaohongshu

---

## 3.1 Template ánh sáng — danh sách hiện hành

### Hai cách dùng template

Kujiale có 2 chế độ đèn:

- **Đèn tự động (自动灯光):** chọn template → render luôn, phần mềm tự bố trí đèn. Đủ dùng cho ảnh nháp.
- **Đèn thủ công (手动灯光):** chọn 1 template làm nền → vào công cụ chỉnh tay từng đèn. Đây là con đường bắt buộc nếu muốn ảnh "khó nhận ra là 3D".

Đường vào theo UI mới (từ 8/2025): rê chuột vào nút **渲染** (render) trên thanh công cụ trên cùng → hiện 3 chế độ **实时轻量 / 实时专业 / 离线模式** (xem chi tiết C2). Ghi nhớ 2 điều:

1. **手动灯光 chỉ có ở 离线模式 (chế độ offline) và 实时专业 (thời gian thực chuyên nghiệp).** Chế độ 实时轻量 không chỉnh đèn tay được.
2. Trong 离线模式 hoặc 实时专业, ở danh sách 灯光模板 bấm **+手动灯光** → chọn template nền → vào chỉnh. Đèn thủ công đã tạo KHÔNG bị ảnh hưởng khi Kujiale nâng phiên bản template — bài chỉnh tay của bạn không bị phá.

Mỗi phương án chứa tối đa 40 kịch bản đèn (20 thủ công + 20 render thời gian thực). ⚠️ Số 40 từ tài liệu 2024, kiểm tra lại theo Sổ ghi nhận (Phụ lục B).

### Danh sách template hiện hành (đã chốt theo thông báo chính thức 10/2025)

| Template | Đặc điểm | Khi nào dùng |
|---|---|---|
| **室内白天/夜晚** (trong nhà ban ngày/đêm) bản 2.1 → 3.0 → 3.1 | Chất ảnh cao nhất: khối cảnh nổi, vùng tối giữ chi tiết, màu trung thực. Từ 3.0 tăng số lần dội sáng GI; 3.1 thêm preview ~1 giây + tự khử nhiễu | **Mặc định cho ảnh chính** — phòng khách, phòng ngủ, ảnh giao khách |
| **极速3.0 / 极速3.1** (cực tốc) | Nhanh nhất, 4K ra trong ~60 giây. Chất kém dòng 室内 một bậc | Ảnh nháp, canh bố cục, ra số lượng lớn |
| **实时白天 / 实时夜晚** (thời gian thực) | Xem đèn + vật liệu đổi trực tiếp, chỉnh LUT, độ sâu trường ảnh. KHÔNG render trực tiếp — phải vào công cụ thời gian thực | Dò góc máy, thử vật liệu trước khi render chính |

> ⚠️ **CẢNH BÁO:** Dòng 极速 cũ (1.0 / 1.3 / 2.0 / 2.1 / 公装2.0) đã bị **gỡ khỏi phần mềm** từ 10/2025, phương án cũ tự thay bằng 极速3.0/3.1. Gặp tài liệu/video dạy theo template cũ → tên không còn tồn tại, tự quy chiếu sang danh sách trên. Nút **一键升级** (nâng cấp một chạm) giữ nguyên tham số đèn khi chuyển, nhưng độ sáng ngoại cảnh có thể lệch nhẹ sau nâng cấp — render nháp kiểm tra lại.

> ⚠️ **CẢNH BÁO — nâng template PHẢI hạ đèn tay:** Từ bản 3.0, thuật toán dội sáng GI mạnh hơn hẳn — cùng một độ sáng đèn, vùng được chiếu rộng hơn nhiều. Help center nói thẳng: từ 3.0 đèn tự động đã bị hạ độ sáng tương ứng, và **đèn chỉnh tay cũng nên giảm theo** để tránh cháy sáng. Đây là nguyên nhân số 1 của ảnh cháy trắng khi mở phương án cũ bằng template mới: bộ số đèn cũ + GI mới = thừa sáng. Quy tắc: đổi lên template 3.x → giảm đồng loạt độ sáng đèn tay rồi render nháp canh lại.

💡 Template 自然写实 (tự nhiên tả thực) với nút phơi sáng tự động (自动曝光) từng được khuyên cho người mới, nhưng ⚠️ chưa có tài liệu chính thức nào sau 8/2025 xác nhận template nào còn nút này trên UI hiện tại — kiểm tra lại theo Sổ ghi nhận (Phụ lục B). Trong khi chờ, cứ dùng 室内白天 3.1 làm nền.

---

## 3.2 Ba lớp ánh sáng tự nhiên

Ánh sáng ban ngày trong Kujiale dựng bằng 3 lớp, mỗi lớp một nhiệm vụ:

| Lớp | Công cụ | Nhiệm vụ |
|---|---|---|
| 1. Nắng | 太阳光 (mặt trời) | Tạo vệt nắng + bóng đổ — KHÔNG phải để chiếu sáng cả phòng |
| 2. Thiên quang | 面光源 (đèn mặt) dựng đứng ở cửa sổ | Ánh sáng bầu trời khuếch tán — nguồn sáng chính của phòng |
| 3. Ngoại cảnh | 外景 | Quyết định cảnh ngoài cửa kính + màu/cường độ sáng môi trường lọt vào + hình phản chiếu trên kính, sàn bóng |

Nguyên tắc xương sống, nhắc đi nhắc lại: **sáng giảm dần từ cửa sổ vào sâu phòng**. Ảnh giả thường do đèn nền tống đều khắp nơi — phẳng lì, không lớp lang. Ảnh thật luôn có chỗ sáng chỗ tối.

> ⚠️ **CẢNH BÁO VỀ SỐ ĐỘ SÁNG:** Mọi con số độ sáng (亮度) trong chương này là **thang cũ** của Kujiale. Kujiale có **ba** hệ đơn vị song song: thang cũ · `瓦` (watt ảo) · `%`. ⚠️ Quy ước "`瓦` = thang cũ ÷ 10" **chưa có nguồn chính thức nào xác nhận** — coi là quy ước nội bộ chưa kiểm chứng. `瓦` cũng KHÔNG phải watt/lumen vật lý, chỉ là mốc tương đối. **Kiểm đơn vị máy mình theo Sổ ghi nhận mục B1 trước khi nhập bất kỳ số nào.** Chi tiết đầy đủ ở đầu C4.

### 3.2.1 Nắng — 太阳光

Tham số gồm: bật/tắt (状态), nhiệt độ màu (色温), độ mềm bóng đổ (阴影柔和度), và vị trí tùy chỉnh với góc phương vị (方位角) + góc ngẩng (俯仰角, viết tắt EL). Kéo chỉnh trực quan được ngay trên khung nhìn.

| Tham số | Giá trị khuyến nghị (thang cũ) | Ghi chú |
|---|---|---|
| 色温 | 6500K ban ngày | Ban đêm dùng lạnh hơn để "ngoài lạnh trong ấm" |
| 亮度 (độ sáng) | **20–50, không vượt 50** (≈ 2–5瓦) | Nguồn chính thức. Nắng chỉ để tạo vệt + bóng; từ 3.0 GI mạnh → giữ thấp |
| 阴影柔和度 | ~5 theo help center; ⚠️ nguồn cộng đồng ghi 1.5 — hai nguồn vênh nhau, tự thử trên app | Càng cao bóng càng mềm; thấp quá bóng cứng như dao cắt |
| 俯仰角 (EL) | 25–50; ⚠️ kinh nghiệm cộng đồng: có ban công ~30, không ban công ~35 | Góc thấp → nắng xiên dài, lộ vân vật liệu; góc cao → nắng đứng |
| 方位角 | Tự chỉnh; ⚠️ kinh nghiệm: lệch ~30° so với mặt cửa sổ | Hướng vệt nắng về sofa hoặc mảng tường muốn khoe vân |

💡 Muốn khoe vân gỗ melamine/laminate trên tủ bếp, tủ áo: hạ EL xuống 25–30 cho nắng xiên dài quét ngang bề mặt — vân nổi hơn hẳn nắng đứng.

### 3.2.2 Thiên quang — 面光源 ở cửa sổ

Dựng **面光源 đứng, kích thước xấp xỉ khung cửa sổ**, đặt ngay ngoài cửa:

| Vị trí | Màu | Độ sáng (thang cũ) | Nguồn |
|---|---|---|---|
| Ngoài cửa sổ | Trắng / trắng lạnh | ⚠️ ~280–300 (phòng nhỏ để dưới 300; phòng lớn 600–800) — số cộng đồng. Help center Coohom ghi 300–500 | Cộng đồng + chính thức, hai dải vênh nhau |
| Trong cửa (lớp đẩy sáng thứ 2) | Xanh da trời rất nhạt | ⚠️ ~250–280, thấp hơn lớp ngoài — số cộng đồng. Coohom lại ghi lớp trong "cao hơn ngoài một chút" | Hai nguồn ngược nhau — thử cả hai, tin mắt mình |

Phòng sâu (căn 2PN–3PN Vinhomes bố cục ống): đẩy thêm 1–2 lớp 面光源 nữa vào trong — kỹ thuật đẩy sáng (递推光) — mỗi lớp nhỏ dần, tối dần. Kinh nghiệm cộng đồng: không ban công đẩy 2 lớp, có ban công (lô gia che bớt trời) đẩy 3 lớp.

💡 面光源 phải đặt **cách tường/trần một khoảng**, không dán sát — dán sát sinh vết sáng loang (光斑) trên bề mặt.

### 3.2.3 Ngoại cảnh — 外景

Ngoại cảnh chọn ở cột trái mục 外景 trong giao diện render. 4 tham số cần hiểu đúng:

| Tham số | Tác dụng | Mặc định |
|---|---|---|
| 水平旋转 (xoay ngang) | Xoay cảnh ngoài để khung nhìn qua cửa sổ đẹp nhất | — |
| 外景亮度 (độ sáng ngoại cảnh) | CHỈ chỉnh độ sáng cảnh ngoài cửa, **không ảnh hưởng sáng trong phòng** | Ngày ~1.8 |
| 环境光亮度 (độ sáng ánh sáng môi trường) | Ánh sáng **xuyên qua cửa sổ vào phòng** — cái này mới đổi độ sáng trong nhà. Chọn loại: 自然光 (tự nhiên)/暖光 (ấm) cho ảnh ngày, 冷光 (lạnh) cho ảnh đêm | Ngày ~1.5, đêm ~1 |
| 环境光反射 (phản chiếu ánh sáng môi trường) | Độ "long lanh" của kính, đá bóng, sàn bóng. Quá cao → cháy sáng cục bộ | Đêm ~5 |

**Ngoại cảnh tùy chỉnh (自定义外景):** đường vào giao diện render → cột trái 外景 → tab 我的 (của tôi) → 上传外景 (tải lên).

> ⚠️ **CẢNH BÁO:** Kujiale **KHÔNG nhận file HDR/EXR**. Ngoại cảnh tùy chỉnh chỉ nhận **ảnh PNG/JPG toàn cảnh tỷ lệ 2:1**, mỗi ảnh ≤ 20MB, khuyến nghị 8000×4000 đến 16000×8000px, tối đa 10 ảnh, và **chỉ template loại tả thực (写实类) mới dùng được ngoại cảnh tự tải**. Đừng mất công đi tìm/mua file .hdr — không dùng được. Tài liệu gốc mục này từ 2021, đường vào trên UI mới có thể đã dời chỗ — kiểm tra lại theo Sổ ghi nhận (Phụ lục B).

💡 Khớp hướng nắng với ngoại cảnh: phần mềm không tự khớp. Sau khi chọn 外景, tự chỉnh 方位角 của 太阳光 sao cho bóng đổ trong phòng cùng phía với nguồn sáng nhìn thấy trong cảnh ngoài cửa (mặt trời, khoảng trời sáng). Lệch hướng là một trong 12 dấu hiệu ảnh giả (xem C7).

---

## 3.3 Ánh sáng khối — 体积光 (nắng xiên qua rèm)

体积光 (ánh sáng khối) là hiệu ứng tia sáng xuyên qua môi trường bụi/sương thành cột sáng nhìn thấy được — dân trong nghề gọi "ánh sáng Jesus" (耶稣之光), vật lý gọi hiệu ứng Tyndall. Kujiale có sẵn **8 loại 体积光** kéo thả.

Quy trình (theo help center, bài cập nhật 8/2025):

1. Vào **渲染 → 离线模式**.
2. Chọn **手动灯光** → chọn template nền loại tả thực → **去编辑** (vào chỉnh sửa).
3. Ở mục loại nguồn sáng chọn **体积光** → chọn 1 trong 8 loại, kéo thả vào phương án.
4. Click vào nguồn vừa thả → panel bên phải chỉnh: bật/tắt, màu, 色温, độ sáng, độ cao, **光柱长度** (chiều dài cột sáng), **底面半径** (bán kính đáy), **正视角度** (góc chính diện).
5. Đặt cột sáng đi qua khe rèm/cửa sổ, **hướng trùng với 太阳光 đã đặt** — cột sáng một đường, bóng nắng một nẻo là hỏng.
6. Lưu template → chọn góc máy → **立即渲染** (render ngay).

💡 Công thức "chất Xiaohongshu": mặt trời EL thấp (nắng xiên dài) + rèm mỏng hé khe + **phòng nền hơi tối** (giảm đèn bù) để cột sáng nổi. Phòng sáng trưng thì 体积光 chìm nghỉm.

---

## 3.4 Cân bằng phơi sáng và chống ám màu

- **Nén phơi sáng (曝光压制):** tham số hậu kỳ trong render thời gian thực bản 3.1 — giá trị càng **thấp**, vùng cháy sáng càng mềm, giữ được nhiều chi tiết. Ảnh cháy nhẹ vùng cửa sổ → hạ tham số này trước khi nghĩ đến đặt lại đèn.
- **Ám vàng (偏黄):** do đèn quá ấm hoặc 环境光 loại 暖光. Sửa: hạ 色温, đổi 环境光 sang 自然光, thêm 1 面光源 xanh rất nhạt trong cửa để trung hòa.
- **Ám xanh/lạnh (偏蓝):** thiên quang xanh quá đậm hoặc dùng nhầm 冷光 cho ảnh ngày. Sửa: giảm bão hòa xanh của 面光源, tăng 色温.
- **Tăng rực màu (色彩增艳):** chỉ có ở nhóm template tả thực — tăng bão hòa màu, dùng nhẹ tay kẻo màu giả.
- **Sửa tràn màu (溢色修正):** bật khi phòng có mảng màu đậm (sofa xanh cổ vịt, tường đỏ gạch) để màu không "phun" lên trần trắng, tủ trắng bên cạnh.
- ⚠️ Phơi sáng tự động (自动曝光): chưa xác nhận template nào có trên UI hiện tại — kiểm tra theo Sổ ghi nhận (Phụ lục B).

---

## Thực hành

Ba bài dưới đây là 3 tình huống gặp hằng ngày với căn hộ Vinhomes Ocean Park. Làm tuần tự, mỗi bài render nháp ảnh nhỏ để canh trước, đạt rồi mới render bản nét cao (quy trình nháp→final tiết kiệm điểm render xem C2). Mọi số độ sáng là thang cũ — kiểm đơn vị máy mình trước (Sổ ghi nhận mục B1), chưa biết thì dò từ thấp lên.

### Bài 1 — Căn hộ 1 hướng cửa sổ (phổ biến nhất)

Dùng căn mẫu 2PN, phòng khách liền bếp, 1 mặt thoáng.

1. Vào 离线模式 → +手动灯光 → chọn nền **室内白天 3.1**.
2. **Đặt 太阳光:** 色温 6500K, 阴影柔和度 ~5, độ sáng 20–50. Vị trí tùy chỉnh: 方位角 lệch ~30° so với mặt cửa, hướng vệt nắng vào sofa hoặc mảng tủ muốn khoe vân; EL 25–35.
3. **Thiên quang ngoài cửa:** 面光源 đứng, to bằng khung cửa, cách cửa ~150–200mm, màu trắng, độ sáng ~280–300.
4. **Đẩy sáng vào trong:** copy 面光源 đặt phía trong cửa, màu xanh rất nhạt, ~250–280. Phòng sâu thêm 1 lớp nữa, nhỏ hơn, tối hơn.
5. **Đèn bù vùng sâu:** 面光源 nhỏ 150–200 màu vàng nhạt ở khu bếp/hành lang xa cửa — đủ để vân melamine không chìm vào tối, không hơn.
6. Render nháp nhỏ → soi: vùng cửa có cháy không, độ dốc sáng từ cửa vào có mượt không → chỉnh → render final.

**Tiêu chí đạt:** vệt nắng rõ, đúng 1 hướng; sáng giảm dần từ cửa vào rõ rệt; không cháy trắng mép rèm/khung cửa; đứng ở góc xa cửa vẫn đọc được vân gỗ tủ.

### Bài 2 — WC / khu vực không cửa sổ

1. **TẮT 太阳光.** Không có cửa cho nắng vào — để nắng bật sẽ sinh bóng "rò" phi lý xuyên tường.
2. Chiếu sáng nền bằng đèn đúng vị trí đèn thật trên trần: đèn rọi/筒灯 (đèn âm trần) độ sáng ⚠️ 150–250 (số cộng đồng; help center Coohom ghi 300–400 — thử từ thấp lên). Chi tiết từng loại đèn xem C4.
3. Bù sáng tổng: 面光源 đặt sát trần nhưng **cách tường**, màu trắng ấm, độ sáng vừa phải.
4. Giữ lớp lang: khu bồn rửa/gương sáng hơn, góc còn lại tối hơn — không tống sáng đều.
5. Gạch/đá tối màu nuốt sáng → tăng đèn cục bộ khu đó cao hơn khu vật liệu sáng.
6. Chống ám vàng (WC không có thiên quang xanh trung hòa): kéo 色温 đèn về trung tính, hoặc thêm 1 面光源 xanh cực nhạt.

**Tiêu chí đạt:** không có bóng nắng vô lý; nhìn ảnh biết ngay đèn nào trên trần đang phát sáng; có vùng sáng vùng tối; tường trắng không ngả vàng rõ.

### Bài 3 — Nắng xiên qua rèm với 体积光

1. Làm xong Bài 1 (đã có 太阳光 EL thấp 25–30 + thiên quang).
2. Kéo rèm mỏng che cửa, chừa khe sáng.
3. Theo quy trình mục 3.3: thả 1 trong 8 loại 体积光, chỉnh 光柱长度 chạm sàn, 底面半径 vừa khe rèm, hướng trùng 方位角 của nắng.
4. Giảm đèn bù nền 30–50% so với Bài 1 cho phòng hơi tối.
5. Render nháp → canh cột sáng và bóng nắng trên sàn ăn khớp nhau → final.

**Tiêu chí đạt:** cột sáng và bóng đổ cùng một hướng; cột sáng có đầu có cuối tự nhiên, không lơ lửng; vùng rèm không cháy trắng; tổng thể phòng trầm để cột sáng làm nhân vật chính.

---

## Checklist tự chấm

- [ ] Kể được danh sách template hiện hành và biết dòng 极速 1.x/2.x đã bị gỡ
- [ ] Biết 手动灯光 nằm ở 离线模式 + 实时专业, và video/俯视图 chỉ render được ở 离线模式
- [ ] Thuộc quy tắc: nâng template lên 3.x → hạ độ sáng đèn tay
- [ ] Biết số độ sáng tài liệu cũ là thang cũ, và biết Kujiale có ba hệ đơn vị — phải kiểm máy mình trước
- [ ] Dựng được 3 lớp nắng/thiên quang/ngoại cảnh cho căn 1 mặt thoáng, sáng giảm dần vào trong
- [ ] Phân biệt được 外景亮度 (không đổi sáng trong phòng) và 环境光亮度 (đổi sáng trong phòng)
- [ ] Biết ngoại cảnh tùy chỉnh chỉ nhận PNG/JPG 2:1, không nhận HDR
- [ ] Làm được ảnh 体积光 có cột sáng khớp hướng bóng nắng
- [ ] Cả 3 bài thực hành đạt tiêu chí, có render nháp trước final

---

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Cháy sáng vùng cửa sổ (过曝) | 太阳光 hoặc 面光源 ngoài cửa quá sáng; số đèn cũ + GI 3.0; 环境光反射 quá cao | Hạ nắng về 20–50 (thang cũ); hạ 面光源 ngoài; hạ 曝光压制; rà 环境光反射 |
| Trong nhà tối om (过暗) | Thiếu lớp đẩy sáng; 面光源 trong quá yếu; vật liệu tối nuốt sáng | Thêm lớp 递推光; tăng 环境光亮度; tăng đèn cục bộ khu vật liệu tối |
| Bóng đổ cứng như dao cắt | 阴影柔和度 quá thấp | Tăng 阴影柔和度 (~5 theo help center); thêm 面光源 lớn cho bóng mềm |
| Ám vàng (偏黄) | Đèn quá ấm; 环境光 loại 暖光; thiếu thiên quang xanh | Hạ 色温; đổi 环境光 sang 自然光; thêm 面光源 xanh nhạt |
| Ám xanh/lạnh (偏蓝) | Thiên quang xanh quá đậm; dùng 冷光 cho ảnh ngày | Giảm bão hòa xanh; tăng 色温; đổi tông 自然 |
| Ánh sáng phẳng, không lớp lang | Đèn nền tống đều "càng sáng càng tốt" | Sáng giảm dần từ cửa vào; nắng + đẩy sáng + đèn nhấn trọng điểm |
| Vết sáng loang trên tường/trần (光斑) | 面光源 dán sát tường/trần | Kéo 面光源 ra xa bề mặt |
| Cột sáng một nơi, bóng nắng một nẻo | 体积光 không trùng hướng 太阳光 | Chỉnh 正视角度/vị trí cột trùng 方位角 nắng |
| Bóng nắng trong phòng không cửa sổ | Quên tắt 太阳光 | Tắt trạng thái 太阳光 |

---

## Nguồn số liệu

**Nguồn chính thức (help center kujiale.com/hc, coohom.com/helpcenter):**
- 《三种渲染模式功能详解》 article 3FO4K4WCDICB (2025-08-18) — 3 chế độ render, vị trí 手动灯光
- 《灯光模板极速1.0…公装2.0下线通知》 article 3FO4K4WCL5TL (2025-10-27) — danh sách template gỡ/hiện hành, 一键升级, cảnh báo lệch 外景亮度
- 《离线渲染模式基础入门》 article 3FO4K4W09FRH (2025-08-29) — đường vào 离线模式
- Bài hướng dẫn 体积光 (cập nhật 2025-08-15) — 8 loại, quy trình, tham số cột sáng
- Bài cập nhật 室内白天/夜晚 3.1 (2024-12-19) — GI tăng từ 3.0, khuyến nghị hạ đèn tay
- Coohom "3 bước tùy chỉnh ánh sáng" + "Manual lighting, daytime" (2024-12-10) — nắng ≤50, 6500K, 阴影柔和度 5, EL 25–50
- 《渲染灯光模板使用说明》 article 3FO4K4WFRCUU (2024-02-22) — 自动/手动灯光, giới hạn 40 kịch bản (⚠️ tài liệu trước UI mới)
- 《外景支持自定义上传》 article 3FO4K4VRPUKN (⚠️ 2021-11-28, cũ) — PNG/JPG 2:1, ≤20MB, tối đa 10 ảnh, chỉ 写实类

**Nguồn cộng đồng (đánh dấu ⚠️ trong bài):**
- "Bí kíp Tiên Cô" (仙姑老师, ask.kujiale.com), Zhihu, Bách độ Kinh nghiệm — bộ số thiên quang 280–300/250–280, đèn bù 150–200, số lớp đẩy sáng, 方位角 ~30°, 阴影柔和度 1.5

**Số chờ verify trên app (Sổ ghi nhận — Phụ lục B):**
- Quy đổi giữa ba hệ đơn vị độ sáng (thang cũ / `瓦` / `%`) — ⚠️ quy tắc ÷10 chưa được xác nhận
- Template nào còn 自动曝光
- 阴影柔和度: 5 hay 1.5, thang min–max
- Đường vào 上传外景 trên UI mới + giới hạn còn đúng
- Giới hạn 40 kịch bản đèn/phương án
