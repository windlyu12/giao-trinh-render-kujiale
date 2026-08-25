# C6. Camera, bố cục và hậu kỳ — biến render đúng thành ảnh đẹp

> **Sau chương này bạn làm được:**
> - Cài camera "chất ảnh chụp": chiều cao theo bảng chính thức, trường nhìn hợp mục đích, cột dọc thẳng đứng
> - Dùng đúng lúc 3 công cụ: 相机矫正 (nắn méo phối cảnh), 相机剪裁 (cắt cảnh chụp phòng hẹp), 景深 (xóa phông)
> - Dựng 4 kiểu bố cục theo mục đích ảnh: duyệt phương án / tạp chí / catalogue cận / dọc cho Facebook–TikTok
> - Hậu kỳ 图片美化 trong app nhẹ tay đúng biên độ, chạy checklist 8 bước dưới 10 phút mỗi ảnh
> - Chọn đúng cỡ render theo kênh xuất — không đốt 核豆 vô ích

---

## 6.1. Camera Kujiale nói "độ", không nói "mm"

Điều đầu tiên phải gỡ khỏi đầu: **Kujiale không có ô nhập tiêu cự tính bằng mm.** Bảng camera chỉ có **视野 (trường nhìn — Field of View/FOV, đơn vị: độ)**, mặc định **60° = 标准 (chuẩn)**. Tăng độ = góc rộng hơn — tài liệu Kujiale ví tăng 视野 giống bật chế độ siêu rộng trên camera điện thoại. Mọi lời khuyên kiểu "chỉnh ống 24mm/35mm" của giới nhiếp ảnh phải quy sang độ để hình dung:

| Ống kính máy ảnh | FOV tương đương | Cảm giác ảnh |
|---|---|---|
| 24mm | ≈ 84° | Rất rộng — phòng trông to nhưng méo rìa mạnh, đồ sát mép bị kéo dài |
| 35mm | ≈ 63° | Góc "ảnh nội thất tạp chí" quen mắt — gần mặc định 60° của Kujiale |
| 50mm | ≈ 46° | Nén phối cảnh, tự nhiên như mắt nhìn — hợp ảnh cận đồ vật |

> ⚠️ Bảng quy đổi trên chỉ để **hình dung** (tham chiếu nhiếp ảnh, không phải tài liệu Kujiale). Trong app bạn chỉ nhập độ. Con số duy nhất Kujiale nêu chính thức là 60° = chuẩn.

Bảng camera nằm trong trang render, mục **相机参数 (tham số camera)**, gồm: **俯仰角 (góc ngẩng/cúi)**, **高度 (chiều cao)**, 视野, 相机剪裁, 相机矫正, **保存视角 (lưu góc nhìn)**.

> ⚠️ **CẢNH BÁO UI:** từ 8/2025 Kujiale gộp render về 3 chế độ 实时轻量 / 实时专业 / 离线模式 (xem Chương 2). Các bài help về camera viết theo UI cũ nên vị trí nút có thể xê dịch đôi chút — tên tham số thì không đổi. Không thấy nút ở đâu thì tìm trong panel camera của chế độ render đang mở.

> 💡 Hai thói quen nhỏ lãi to: (1) giữ **俯仰角 = 0** (máy ngang — 平视) trừ khi cố ý chụp góc đặc biệt, camera ngửa/cúi là nguồn méo số 1; (2) bấm **保存视角** sau khi căn xong góc đẹp — chỉnh đèn, đổi vật liệu xong quay lại render đúng góc cũ để so sánh trước/sau.

Đừng nhầm: module chụp sản phẩm 棚拍 có mục 镜头选择 ("chọn ống kính") nhưng thực chất chỉ là tick chọn các shot dựng sẵn, **không phải chọn tiêu cự**.

## 6.2. Chiều cao camera — bảng chính thức hiếm hoi, học thuộc

Giữa một chương toàn số kinh nghiệm, đây là **bảng Kujiale công bố chính thức** trên help center — dùng làm chuẩn, không phải đoán:

| Loại công trình | Chiều cao trần | 相机高度 (chiều cao camera) |
|---|---|---|
| **Nhà ở (căn hộ)** — trần 2700–2800mm | 2700–2800mm | **800–1200mm** |
| Biệt thự — trần 3000–3500mm | 3000–3500mm | 1200–1400mm |
| Công trình công cộng & ngoại thất — trần ~5000mm | ~5000mm | 1400–1600mm |

Căn hộ Vinhomes Ocean Park trần thông thủy 2,6–2,7m → luôn thuộc nhóm "nhà ở": **đặt camera 800–1200mm**.

> 💡 **Vì sao thấp thế?** 800–1200mm thấp hơn hẳn tầm mắt người đứng (~1500mm). Đây là chủ đích: ảnh nội thất chuyên nghiệp chụp ngang "tầm ngực–thắt lưng" — sàn và trần cân đối trong khung, mặt bàn/sofa không bị nhìn chúc xuống, và giữ máy ngang dễ hơn nên cột dọc ít đổ. Đặt camera 1500mm+ là dấu hiệu ảnh nghiệp dư dễ nhận nhất.

Mẹo vị trí từ tài liệu Kujiale: kê camera ở **4 góc phòng bắn chéo ra** thường cho khung đẹp hơn đứng giữa phòng.

## 6.3. Ba công cụ camera phải biết

### 相机矫正 — một chạm giữ cột dọc thẳng

Nút **相机矫正 (nắn méo phối cảnh camera)** chỉnh méo phối cảnh một chạm — mô tả chính thức là cho tỉ lệ bố cục hoàn hảo. Tác dụng thực tế: **mọi cạnh tường, khung cửa, cạnh tủ dọc trở về thẳng đứng** thay vì đổ chụm kiểu ống góc rộng. Mắt người xem cực nhạy với cột đổ — đây là ranh giới "ảnh chụp" và "hình 3D" rõ nhất. Quy tắc: **bật cho gần như mọi ảnh kiến trúc – nội thất**, chỉ tắt khi cố ý chụp góc nghiêng nghệ thuật.

### 相机剪裁 — chụp phòng hẹp không cần đập tường

Phòng WC, bếp nhỏ, phòng ngủ hẹp: camera lùi hết cỡ vẫn không lấy đủ khung vì vướng tường. Bật **相机剪裁 (cắt cảnh camera)** → phần mềm tự **ẩn tường/trần/吊顶 (trần thạch cao giật cấp) chắn trước ống kính**, cho phép đặt camera lùi ra ngoài phòng nhìn vào. Kéo nút trước camera hoặc chỉnh độ sâu cắt (裁减深度) ở cột phải. Đây là cách đúng — đừng tăng 视野 lên 90°+ để "nhét" phòng vào khung, ảnh sẽ méo như mắt cá.

### 景深 — xóa phông cho ảnh cận, chỉ có ở chế độ thời gian thực

> ⚠️ **CẢNH BÁO:** **景深 (độ sâu trường ảnh — DOF) chỉ có trong render thời gian thực** (dòng 实时 — xem Chương 2), **không có ở render 离线 thông thường**. Bài help mô tả đường vào theo UI cũ (công cụ → render → 实时渲染 → panel camera → 景深); trên UI mới 3 chế độ, tìm trong panel camera của chế độ 实时 — kiểm tra lại theo Sổ ghi nhận (Phụ lục B).

Cách dùng 3 bước: (1) bật công tắc 景深; (2) **click vào món đồ chủ thể** để đặt điểm lấy nét — chỗ này nét nhất; (3) chỉnh **模糊度 (độ mờ)** để kiểm soát mức xóa phông. Dùng cho ảnh cận vật liệu, phụ kiện, tay nắm tủ — không dùng cho ảnh toàn phòng (toàn phòng phải nét hết).

## 6.4. Bốn kiểu bố cục theo mục đích ảnh

Trước khi đặt camera, trả lời: **ảnh này để làm gì?** Mỗi mục đích một công thức:

| Kiểu | Mục đích | 相机高度 | 视野 | 相机矫正 |
|---|---|---|---|---|
| A — toàn phòng 1 điểm tụ | Khách duyệt phương án | 800–1200mm (chính thức) | 60°; phòng chật nâng ~70–80° ⚠️ | BẬT |
| B — góc 1/3 kiểu tạp chí | Ảnh đẹp đăng fanpage, hồ sơ năng lực | ~1000–1200mm ⚠️ | 55–60° ⚠️ | BẬT |
| C — cận vật liệu/phụ kiện | Catalogue, chi tiết gỗ – phụ kiện | Ngang tầm món đồ ⚠️ | 40–50° ⚠️ | Tùy |
| D — dọc 3:4 / 9:16 | Facebook, TikTok, Zalo video | 900–1200mm ⚠️ | 55–65° ⚠️ | BẬT (rất quan trọng) |

> ⚠️ Các giá trị 视野 theo loại ảnh (40–50° cận, 55–65° dọc...) là **suy luận từ kinh nghiệm nhiếp ảnh nội thất**, không phải bảng chính thức Kujiale — chỉ 60° chuẩn và chiều cao nhóm "nhà ở" là số chính thức. Coi đây là điểm xuất phát, render nháp rồi tự chỉnh.

### Kiểu A — toàn phòng một điểm tụ (一点透视) cho khách duyệt phương án

1. Chuyển màn 2D, đặt camera áp sát tường sau, hướng **vuông góc thẳng vào tường đối diện**.
2. Hạ 高度 về 800–1200mm.
3. Giữ 视野 ~60°; phòng nhỏ không đủ khung → tăng 视野 hoặc bật 相机剪裁 (đừng lạm dụng tăng độ).
4. **Bật 相机矫正** — mọi cạnh dọc thẳng đứng.
5. Để điểm tụ (灭点) **lệch nhẹ khỏi tâm** — đối xứng tuyệt đối trông máy móc.
6. Khung 4:3 hoặc 16:9. Phối cảnh 1 điểm tụ cho cảm giác phòng rộng rãi, sáng sủa, ngay ngắn — đúng thứ khách cần khi duyệt phương án.

### Kiểu B — góc 1/3 kiểu tạp chí (两点透视)

1. Đặt camera ở **một góc phòng**, xoay thấy 2 bức tường tạo góc (thành 2 điểm tụ — 成角透视).
2. Cao ~1000–1200mm ⚠️, 视野 55–60° ⚠️.
3. Áp **quy tắc 1/3 (三分法)**: chủ thể (sofa, giường, đảo bếp) đặt tại giao điểm lưới 3×3, không đặt giữa khung.
4. Đường chân trời để **1/3 dưới hoặc 1/3 trên**, tránh cắt đôi khung.
5. Chừa **khoảng thở (留白)** — một mảng tường/trần trống dẫn mắt về chủ thể. Đủ chỗ thở, mắt người xem mới đậu vào đúng món chủ lực.
6. Bật 相机矫正.

### Kiểu C — cận vật liệu/phụ kiện (catalogue)

1. Vào chế độ thời gian thực, hạ camera **ngang tầm món đồ** (mẫu melamine, tay nắm, bình hoa).
2. 视野 hẹp 40–50° ⚠️ — nén phối cảnh, giảm méo cận cảnh.
3. Bật **景深**, click chủ thể làm điểm nét, tăng 模糊度 cho phông sau mờ mịn.
4. Chủ thể lấp gần đầy khung, chừa khoảng thở một phía.
5. Thêm đạo cụ: sách, cây nhỏ, ly cà phê, vải rũ — khung hình "có người sống".

### Kiểu D — dọc 3:4 / 9:16 cho Facebook–TikTok

1. **Đổi tỉ lệ khung TRƯỚC khi render.** Kujiale xác nhận đổi tỉ lệ không kéo giãn phạm vi ống kính. Danh sách tỉ lệ có nguồn: **16:9, 4:3, 3:4, 1:1** — riêng 9:16 chưa thấy nguồn xác nhận có sẵn trong mọi chế độ ⚠️ kiểm tra lại theo Sổ ghi nhận mục A2; nếu app không có 9:16 thì render 3:4 khổ lớn rồi crop dọc khi hậu kỳ.
2. Bố cục dọc: chủ thể ở **1/3 dưới**, chừa 1/3 trên cho trần + đèn thả tạo chiều cao.
3. Cao 900–1200mm ⚠️, 视野 55–65° ⚠️.
4. **Bật 相机矫正** — khung dọc phóng to mọi lỗi cột đổ, đây là kiểu ảnh cần nó nhất.

> 💡 **Đạo cụ làm khung hình sống** (áp cho cả 4 kiểu): cây xanh/bình hoa (mảng màu sống), vải mềm rũ (rèm, khăn, thảm), một nguồn sáng ấm cục bộ (đèn bàn, đèn hắt), đồ cá nhân nhỏ (sách, tách, tranh). Và nhớ nguyên tắc từ Chương 4: ánh sáng phải **có lớp lang** — sáng dần từ nguồn, không phẳng lì; "càng sáng càng tốt" là hiểu lầm.

## 6.5. Hậu kỳ trong app — 图片美化, nhẹ tay là vua

Kujiale có công cụ hậu kỳ tích hợp **图片美化 (làm đẹp ảnh)**. Đường vào: **图册 (album ảnh) → chọn ảnh → 编辑 (sửa) → 美化 (làm đẹp)**. Hai mức: **整体美化 (chỉnh toàn ảnh)** và **局部美化 (chỉnh cục bộ)** — mức cục bộ bật **通道图 (bản đồ kênh)** để chọn đúng vùng cần sửa. Mục tiêu Kujiale đặt cho tính năng này: khỏi cần mở Photoshop cho việc chỉnh màu thường ngày.

| Công cụ | Tác dụng | Mức khuyến nghị ⚠️ (kinh nghiệm) |
|---|---|---|
| 亮度 (độ sáng) | Sáng tổng thể | ±5 → ±15 |
| 对比度 (tương phản) | Sáng/tối gắt hay dịu | +5 → +15, đừng gắt |
| 饱和度 (bão hòa màu) | Màu đậm/nhạt | +5 → +10; quá tay ra "màu nhựa" |
| 色温 (nhiệt độ màu) | Ám vàng/xanh | Chỉnh nhẹ về trắng trung tính |
| 滤镜 (bộ lọc màu) | Filter sẵn | Chọn 1 cái, giảm cường độ ~50% |
| 曝光 (phơi sáng) | Sáng kiểu máy ảnh | ±0.2 → ±0.5 |
| 高光 (vùng sáng) | Cứu vùng cháy | −10 → −30 nếu cửa sổ cháy trắng |
| 阴影 (vùng tối) | Cứu góc tối chết | +10 → +25 |
| 局部美化 | Chỉnh riêng 1 vùng qua 通道图 | Khi chỉ 1 vùng lệch màu |
| AI降噪 (khử nhiễu AI) | Hết lốm đốm | Bật khi ảnh có hạt |

**Nguyên tắc vàng: biên độ nhỏ ±10–15.** ⚠️ (biên độ là kinh nghiệm chung, không phải khuyến nghị chính thức). Ưu tiên cân bằng trắng + cứu 高光/阴影 hơn là đẩy 饱和度; **một filter là đủ**. Đẩy bão hòa + filter mạnh là nguyên nhân số 1 khiến render lộ vẻ "giả".

**Chỉnh từ khâu render để đỡ phải hậu kỳ màu** (nguồn chính thức — 4 việc):

1. Chọn mẫu đèn dòng **写实 (tả thực)** — 室内白天/夜晚 hiện hành, cảnh gamma 2.2. Mẫu đời cũ gamma 1.0 gây sai màu nặng.
2. Tick **溢色修正 (sửa ám màu tràn)** góc dưới trái — giảm màu môi trường loang lên đồ (tường đỏ hắt hồng lên tủ trắng).
3. **色彩增强 (tăng cường màu) giữ 0/1, không để 2/3** — mức cao gây màu đậm/tối bất thường.
4. Tự đánh đèn: 面光源 dùng **色温 6500–7000K** ánh trắng để giảm sai màu.

## 6.6. Hậu kỳ ngoài app + checklist 8 bước 5–10 phút

Ảnh quan trọng (gửi khách chốt, in ấn, chạy quảng cáo) nên qua một vòng ngoài app: xuất **PNG chất lượng cao** → chỉnh trên PC (**Photoshop / Lightroom Classic**) hoặc điện thoại (**Snapseed / Lightroom Mobile / 醒图 Xingtu / Polarr**). Công cụ AI tăng cường (AI写实增强 của Kujiale, Generative Fill, Topaz) — xem quy định dùng ở Chương 8, chương này không bàn.

Những việc app làm chưa đủ tinh:

- **曲线 (đường cong — Curves):** kéo **chữ S nhẹ** (điểm sáng nhích lên, điểm tối nhích xuống) → ảnh trong, có chút "chất phim". Histogram tràn 2 đầu (cháy trắng/đen chết) → kéo 2 đầu về tìm lại chi tiết.
- **Cân bằng trắng:** khử ám vàng đèn hoặc ám tím.
- **Cứu cháy sáng:** kéo Highlights + Whites xuống, nhất là vùng cửa sổ.
- **Thêm hạt (颗粒 — grain) rất nhẹ:** phá cái mịn "nhựa CG" — nghịch lý nghề render: thêm một tí nhiễu ảnh lại thật hơn.
- **HSL:** chỉnh riêng từng dải màu — gỗ ấm hơn, lá cây tươi hơn, không đụng màu khác.

**Checklist hậu kỳ 8 bước — 5–10 phút/ảnh** ⚠️ (quy trình kinh nghiệm, thời lượng ước tính):

1. **[0:30]** Nắn thẳng + crop theo tỉ lệ kênh; soát chân tường/trần không bị cắt cụt.
2. **[1:00]** Cân bằng trắng: khử ám vàng/tím.
3. **[1:00]** 曝光 + Curves chữ S nhẹ.
4. **[1:00]** Kéo 高光 xuống (cứu cửa sổ) + nâng 阴影 (cứu góc tối).
5. **[0:45]** 饱和度/Vibrance +5~10; HSL tinh chỉnh gỗ và cây.
6. **[0:30]** Sharpen nhẹ + khử nhiễu nếu có hạt.
7. **[0:30]** Thêm grain rất nhẹ.
8. **[0:30]** Xuất đúng kích thước/định dạng theo kênh (mục 6.7).

## 6.7. Chuẩn xuất theo kênh — đừng đốt 核豆

Kích thước pixel Kujiale công bố (nguồn ask chính thức):

- **普通图 (ảnh thường):** 800×450 · 1920×1080 · 2560×1440
- **全景图 (ảnh toàn cảnh 360°):** 2000×1000 · 3000×1500 · 4000×2000
- **俯视图 (ảnh nhìn từ trên xuống):** 800×450 · 1920×1080

Kujiale gọi 2560×1440 là "3K" (nhãn riêng của hãng, không theo chuẩn TV).

> ⚠️ **Pixel thực của tier "4K" và "8K极清" Kujiale KHÔNG công bố** — 3840×2160 / 7680×4320 chỉ là chuẩn ngành, chưa xác nhận cho Kujiale (bản HD lịch sử từng là 3200×2400, tỉ lệ 4:3, lệch hẳn chuẩn TV). Kiểm tra lại theo Sổ ghi nhận mục A3.

| Kênh | Render cỡ nào là đủ | Kích thước đích | Định dạng |
|---|---|---|---|
| Zalo / Facebook (feed) | 2K (1920×1080) | 1920×1080 (16:9) hoặc 1080×1350 (4:5) | JPG/PNG |
| TikTok / Reels (dọc) | 2K | 1080×1920 (9:16) | JPG/PNG |
| Khách duyệt trên điện thoại | 2K–3K | 2560×1440 | JPG |
| **In A4 (catalogue, hồ sơ năng lực)** | 4K trở lên | **2480×3508 px (A4 dọc @300DPI)** / 3508×2480 (ngang) | PNG/TIFF |
| Màn hình lớn / triển lãm | 4K+ | 3840×2160+ | PNG |

**Quy tắc tiết kiệm:** mạng xã hội nén ảnh về ~2K — **render 8K cho ảnh đăng Facebook/Zalo/TikTok là ném 核豆 qua cửa sổ**. Tier cao nhất chỉ dành cho in ấn và màn hình lớn (8K平面图 được Kujiale mô tả là chất lượng in ấn). Số 核豆 tiêu cho từng cỡ ảnh **chỉ xem được trong app** qua 「核豆消耗 - 查看详情」khi bấm render — ghi lại theo Sổ ghi nhận mục A1; hệ điểm 核豆 và vé render xem Chương 1.

---

## Thực hành

**Bài 1 — Kiểu A cho khách duyệt (căn hộ mẫu, phòng khách):**
Đặt camera áp tường sau, vuông góc tường đối diện, 高度 1000mm, 视野 60°, 俯仰角 0, bật 相机矫正, điểm tụ lệch nhẹ khỏi tâm, khung 16:9, 保存视角 rồi render 1920×1080.
*Tiêu chí đạt:* mọi cạnh dọc (khung cửa, cạnh tủ) thẳng đứng tuyệt đối; thấy đủ sàn + trần cân đối; chân tường không bị cắt cụt.

**Bài 2 — Cùng phòng, kiểu B tạp chí:**
Dời camera sang góc phòng thấy 2 bức tường, 高度 1100mm, 视野 55–60°, sofa đặt tại giao điểm lưới 1/3, chân trời ở 1/3 dưới, chừa khoảng thở phía trên, bật 相机矫正, render rồi **đặt cạnh ảnh bài 1 so sánh**.
*Tiêu chí đạt:* chỉ ra được bằng lời ảnh nào hợp gửi khách duyệt, ảnh nào hợp đăng fanpage và vì sao (1 điểm tụ = rõ ràng dễ hiểu; 2 điểm tụ = có chiều sâu, "chất tạp chí").

**Bài 3 — Hậu kỳ + xuất 2 kênh:**
Lấy ảnh bài 2, chạy đủ checklist 8 bước mục 6.6 trong app (美化) hoặc Snapseed, bấm giờ. Xuất 2 bản: 1920×1080 cho Facebook và bản dọc 1080×1350 crop từ cùng ảnh.
*Tiêu chí đạt:* tổng thời gian hậu kỳ ≤ 10 phút; mọi thanh chỉnh nằm trong biên độ mục 6.5; bản trước/sau đặt cạnh nhau — bản sau trong hơn, cửa sổ hết cháy, nhưng người ngoài nhìn **không nhận ra là đã qua chỉnh**.

## Checklist tự chấm

- [ ] Nói được ngay: Kujiale chỉnh camera bằng đơn vị gì, mặc định bao nhiêu là chuẩn
- [ ] Thuộc lòng chiều cao camera nhóm nhà ở (số chính thức)
- [ ] Biết khi nào bật 相机矫正 và giải thích được nó sửa cái gì
- [ ] Chụp được phòng WC/bếp hẹp bằng 相机剪裁 mà không tăng 视野 quá 80°
- [ ] Bật được 景深 đúng chế độ, đặt điểm nét bằng click vào chủ thể
- [ ] Dựng đủ 4 kiểu bố cục và nói được mỗi kiểu phục vụ mục đích gì
- [ ] Hậu kỳ 1 ảnh trong ≤ 10 phút, các thanh không vượt biên độ khuyến nghị
- [ ] Chọn đúng cỡ render cho từng kênh — giải thích được vì sao không render 8K đăng Facebook

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Cột/tường đổ nghiêng (méo phối cảnh) | 视野 quá rộng; camera ngửa/cúi | Giảm 视野; đưa 俯仰角 về 0; **bật 相机矫正** |
| Chân tường/trần bị cắt cụt vô duyên | Camera quá thấp/cao; khung chưa căn | Chỉnh 高度 theo bảng 6.2; đổi tỉ lệ khung; phòng hẹp dùng 相机剪裁; crop lại khi hậu kỳ |
| Ảnh nghiêng lệch | Camera không cân | Bật 相机矫正; nắn thẳng khi hậu kỳ |
| Màu ám/gắt sau render | 色彩增强 để 2/3; sai cân bằng trắng; đẩy bão hòa quá tay | 色彩增强 về 0/1; tick 溢色修正; kéo 饱和度 về; sửa cân bằng trắng |
| Cửa sổ cháy trắng | Nắng/thiên quang ngoài quá mạnh | Giảm đèn theo Chương 4; hậu kỳ kéo 高光 xuống |
| Ảnh phẳng lì thiếu chiều sâu | Ánh sáng thiếu lớp | Đánh đèn 3 lớp theo Chương 4; thêm điểm nhấn sáng ấm cục bộ trong khung |
| Màu render lệch vật liệu thật | Dùng mẫu đèn gamma 1.0 đời cũ | Đổi mẫu 写实 gamma 2.2; tick 溢色修正; 面光源 6500–7000K |
| Ảnh nhiều nhiễu hạt | Cỡ render/mẫu đèn thấp | Bật khử nhiễu khi render; AI降噪 trong 美化 |
| Phòng nhỏ không lấy đủ khung | Camera bị tường chặn | Bật 相机剪裁; hạ camera + tăng 视野 vừa phải |

## Nguồn số liệu

**Chính thức (Kujiale help center / ask):**
- Chiều cao camera theo loại công trình: article 3FO4K4W2BGW1 (số chính thức duy nhất của chương)
- 景深: article 3FO4K4WHJ68C · 相机矫正: article 3FO4K4VRLK4D · 图片美化: article 3FO4K4WI8C6K
- Giảm sai màu khi render (gamma 2.2 / 溢色修正 / 色彩增强 / 6500–7000K): article 3FO4K4WO8BKD
- Kích thước pixel 普通图/全景图/俯视图 + danh sách tỉ lệ khung 16:9·4:3·3:4·1:1: ask.kujiale.com (3FO4K0CVWOUR, 3FO4K865KV2O)

**Cộng đồng / kinh nghiệm (đã đánh ⚠️ trong bài):**
- 视野 khuyến nghị theo loại ảnh, chiều cao kiểu B/C/D, biên độ thanh 美化, checklist 8 bước: kinh nghiệm nhiếp ảnh nội thất + Zhihu (zhuanlan 656678535, 258558912)
- Bảng quy đổi mm ↔ FOV: tham chiếu nhiếp ảnh, chỉ để hình dung

**Chờ verify trên app (Phụ lục B):**
- Mục A1 — số 核豆 tiêu theo cỡ ảnh · Mục A2 — có tỉ lệ 9:16 sẵn không · Mục A3 — pixel thực tier "4K"/"8K"
- Vị trí panel 景深 trên UI 3 chế độ mới

---

## Tự tra video thực chiến

> 📌 **Sách này cho bạn ĐƯỜNG ĐI. Video cho bạn ĐÔI TAY.**
>
> Chương vừa rồi dựng khung: nguyên lý là gì, thứ tự làm ra sao, số nào tin được số nào không. Nhưng thao tác thật — chuột đi đường nào, bấm chỗ nào, chỉnh tới đâu thì dừng — thì **xem người ta quay màn hình học nhanh hơn đọc nhiều lần.** Người làm nghề Trung Quốc chia sẻ rất nhiều và rất thực chiến.
>
> **Đọc chương xong, tra vài video về đúng máy ảnh và bố cục, rồi quay lại làm.** Đó mới là cách chương này phát huy hết.

Dán nguyên cụm vào ô tìm kiếm của **小红书** hoặc **抖音 (Douyin)**:

| Từ khoá | Tìm được gì |
|---|---|
| `酷家乐 相机 参数 设置` | Thiết lập máy ảnh |
| `酷家乐 构图 技巧` | Kỹ thuật bố cục |
| `酷家乐 相机矫正` | Sửa méo phối cảnh một chạm |
| `酷家乐 图片美化 教程` | Công cụ làm đẹp ảnh có sẵn trong app |
| `室内效果图 构图` | Bố cục ảnh nội thất nói chung |

> 💡 **Bốn quy tắc lọc, dùng cho mọi từ khoá:** sắp theo `最新` (mới nhất) · ưu tiên bài có **ảnh chụp panel kèm số** · bỏ bài `AI一键` (quảng cáo) · **chỉ chép số từ bài ghi rõ template 3.0 hoặc 3.1**, bài cũ hơn thì chỉ học tư duy.
>
> Cách vào 小红书 từ Việt Nam, danh sách tài khoản đáng theo dõi, và mẫu ghi lại một ca thu được: xem **Phụ lục E mục E.10**.
