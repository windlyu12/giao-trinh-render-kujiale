# C4. Đèn thủ công — trụ cột số 1 của ảnh thật

> **Sau chương này bạn làm được:**
> - Gọi tên đúng 8 loại nguồn sáng trong 手动灯光 (đèn thủ công) và biết mỗi loại dùng vào việc gì
> - Bố đèn một căn hộ theo trình tự 4 bước chính thức, ánh sáng 3 lớp có chiều sâu
> - Áp 5 công thức phòng: khách + bếp mở / ngủ / bếp + ăn / WC / tủ cận cảnh
> - Giữ nhiệt độ màu nhất quán trong một khung hình, không loang màu
> - Tự chẩn đoán 3 lỗi giết ảnh nhiều nhất: ảnh bẹt, cháy trắng, "tia Chúa"

---

> ⚠️ **CẢNH BÁO QUAN TRỌNG NHẤT CẢ CUỐN SÁCH — ĐỌC TRƯỚC KHI NHẬP BẤT KỲ SỐ ĐÈN NÀO**
>
> **Ô độ sáng 亮度 (độ sáng) trong Kujiale đã ĐỔI THANG HIỂN THỊ.**
>
> - **Có BA hệ đơn vị song song**, không phải hai: **thang cũ** (dải quen thuộc 0–800, đèn hắt ~1500) · **`瓦`** (watt ảo) · **`%`**.
> - **MỌI số độ sáng trong chương này viết theo THANG CŨ.** Gần như toàn bộ bài chia sẻ trên mạng Trung Quốc cũng theo thang cũ — thấy số to đừng nhập thẳng.
> - ⚠️ **Quy ước "`瓦` = thang cũ chia 10" CHƯA ĐƯỢC XÁC NHẬN.** Bản đầu của cuốn sách này ghi nó như dữ kiện — **đó là sai**. Hai gói nghiên cứu độc lập đều không tìm được nguồn chính thức nào của Kujiale nói vậy. Hãy coi đây là **quy ước nội bộ chưa kiểm chứng**, đừng trích như thông tin của hãng.
> - **Hệ `%` thì là thật và chính thức:** tài liệu trợ giúp xác nhận `硬装灯带` dùng vật liệu mới render chính xác dải **0% – 6000%**. Ảnh chụp panel thật còn cho thấy `室内光亮度` hiện **100%** và **500%**.
> - `瓦` KHÔNG phải watt điện thật; `亮度` KHÔNG phải lumen hay lux — chỉ là **giá trị tương đối** của phần mềm. Bài quảng cáo nào ghi "300 lumen" thì bỏ qua.
> - **Việc đầu tiên khi mở app học chương này:** tạo một đèn bất kỳ, nhìn panel xem đơn vị hiện gì → điền **Sổ ghi nhận mục B1 (Phụ lục B)**. Kiểm đủ **cả ba** khả năng. Chưa biết đơn vị máy mình thì **đừng nhập số nào trong chương này cả** — dò từ thấp lên.

---

## 4.1. Vào chế độ đèn thủ công ở đâu (UI từ 8/2025)

Từ tháng 8/2025 Kujiale gộp render về 3 chế độ (xem Chương 2). Đèn thủ công **chỉ có ở 2 chế độ**:

| Chế độ | Có 手动灯光? | Ghi chú |
|---|---|---|
| 实时轻量 (thời gian thực nhẹ) | ❌ | Chỉ xem nhanh, không bố đèn tay |
| 实时专业 (thời gian thực chuyên nghiệp) | ✅ | Có xem trước tức thì — tiện chỉnh đèn |
| 离线模式 (render ngoại tuyến) | ✅ | Chất lượng cao nhất; 体积光 và ảnh final đi đường này |

Đường vào: **离线模式 hoặc 实时专业 → 灯光模板 (mẫu ánh sáng) → 添加手动灯光 (thêm đèn thủ công)** → chọn mẫu trắng 空白 hoặc lấy 1 mẫu tự động làm nền rồi sửa. Xác nhận lại đường vào theo Sổ ghi nhận mục B2.

Mẹo thao tác cần nhớ:

- Bố đèn ở **màn 2D** — phần mềm mặc định ẩn trần cho dễ đặt.
- Giữ **Shift** chọn hàng loạt 筒灯 (đèn âm trần)/射灯 (đèn rọi) để đổi tham số một lần.
- Mỗi phương án lưu tối đa **20 mẫu đèn thủ công + 20 mẫu thời gian thực**.
- Video/bài hướng dẫn cũ chỉ đường "công cụ → 渲染 → 手动灯光" là **UI cũ** — tự quy về đường mới ở trên.

## 4.2. Tám loại nguồn sáng — bảng tra nhanh

Mọi số ở cột "dải khởi điểm" là **thang cũ** (xem hộp cảnh báo đầu chương) và là điểm xuất phát — phải render nháp rồi chỉnh, không phải đáp số.

| # | Loại đèn | Dùng vào việc gì | Dải khởi điểm (thang cũ) | Ghi chú |
|---|---|---|---|---|
| 1 | 面光源 (đèn mặt — tấm phát sáng phẳng, có 双面光 phát 2 mặt) | Nguồn chính đa năng: dựng đứng ở cửa sổ làm 天光 (thiên quang — ánh trời), hắt trần, kéo mảnh làm đèn hắt | 天光 ngoài cửa 400–800, trong cửa 200–500 (xem mục 4.5); phụ trợ 100–300 | Loại đèn quan trọng nhất chương này |
| 2 | 点光源 / 球形灯 (đèn điểm / đèn cầu) | Đèn bàn, đèn thả, quầng sáng tỏa tròn | Đèn điểm 30–40 ⚠️; đèn cầu cho đèn thả 250–300 ⚠️ | Đèn bàn đặt thấp hơn model đèn 0,15–0,2m |
| 3 | 聚光灯 (đèn rọi hình nón) | Rọi tranh, rọi tường, giả máy chiếu (tải được 贴图 chiếu hoa văn) | Rọi tường 330–350, đêm 380, cao 2,4m ⚠️ | **CẤM dùng thay nắng ngoài trời** — sinh nhiễu nặng (nguồn chính thức) |
| 4 | 射灯/筒灯 dùng IES (đèn rọi / đèn âm trần theo file quang học) | Chiếu điểm theo đèn thật trên trần: sofa, bàn, rèm, tường đá | Mặc định 200–300, cao 2,4m; rọi nhấn 100–150, góc 30–45° | Thư viện profile S1–S5 = 射灯, T = 筒灯 ⚠️ chưa có bảng chính thức — thử trực quan, ghi lại theo Sổ ghi nhận mục B6 |
| 5 | 灯带 (đèn hắt khe — làm bằng 面光源 kéo mảnh hoặc công cụ 灯带 phần thô) | Hắt khe trần, gầm tủ bếp, đầu giường, hốc tường | 面光源 mảnh rộng 20–25, sáng ~1500, hơi ấm ⚠️; đèn tầng tủ 层板灯 rộng ~60, ~1200, 3500K (chính thức) | Giấu kín nguồn trong khe; phần mềm báo động nếu cắm vào tường |
| 6 | 体积光 (đèn thể tích — tia nắng xuyên bụi) | Cột sáng cửa sổ kiểu "tia sáng buổi sớm" | Tham số riêng: 光柱长度 (chiều dài cột sáng), 底面半径 (bán kính đáy) | Chỉ có ở mẫu 写实/离线 — chi tiết xem Chương 3 |
| 7 | 自发光 (vật liệu tự phát sáng) | Bảng LED, lưng tủ kính, kệ rượu phát sáng | 发光能量 (năng lượng phát sáng) ~1 cho lưng tủ ⚠️ | Đặt cao là thủ phạm số 1 gây cháy trắng cả ảnh |
| 8 | 太阳光 (nắng ảo) | Đổ nắng qua cửa, bóng cứng, định hướng sáng chính | Ví dụ cộng đồng: 亮度 35, 阴影柔和度 (độ mềm bóng) 3 ⚠️ | Phối với ngoại cảnh ở Chương 3 |

## 4.3. Ba lớp ánh sáng — vì sao ảnh bẹt

Ảnh "có chiều sâu như chụp thật" không đến từ một đèn to, mà từ **3 lớp sáng chồng lên nhau** (phân loại chính thức của Kujiale):

1. **Lớp nền (基础照明):** làm cả phòng sáng đều và mềm — 太阳光 + 天光 ở cửa sổ là chủ lực. Nguyên tắc chính thức: *phần lớn không gian sáng đều nhưng có lớp lang* — không phải càng sáng càng tốt.
2. **Lớp chức năng (局部照明):** chiếu khu sinh hoạt — 筒灯/射灯 trên sofa, bàn ăn, mặt bếp; 面光源 phụ cho hành lang, góc tối.
3. **Lớp nhấn (氛围 + 重点照明):** tạo không khí — đèn hắt khe, đèn cầu cho đèn thả, 射灯 rọi tranh, đèn bàn.

Ảnh bẹt = chỉ có lớp 1 phóng to. Câu thần chú của designer chính thức 仙姑老师: **「哪里不足补哪里」— thiếu đâu bù đó**, đừng tăng đều cả phòng.

## 4.4. Trình tự 4 bước chính thức

Theo tài liệu bố đèn nhà ở chính thức của Kujiale (số = thang cũ):

| Bước | Làm gì | Số chính thức |
|---|---|---|
| **1. Nguồn chính** | Đặt 面光源 dựng đứng ngoài + trong cửa sổ (天光 2 lớp) | Ngoài 400–600 xanh nhạt; trong 200–300 trắng |
| **2. Đèn phụ trợ** | Bù hành lang/góc âm, sáng **chuyển dần từ cửa vào trong**, không lấn nguồn chính | Lớp trên 200–300 (cách trần 100mm); lớp dưới 100–200 (cao ~1,5m) |
| **3. Chiếu tập trung** | Đặt 聚光灯/射灯 **đúng vị trí đèn thật trên trần** | 聚光灯 280–300 cao ~2,4m vàng nhạt; đèn bù 200–280 cao ~2m |
| **4. Đèn chi tiết** | 球形灯 cho đèn thả/đèn tường, 灯带 hắt khe — tăng độ tinh tế | Theo bảng mục 4.2 |

> ⚠️ **CẢNH BÁO 「上帝之光」(tia Chúa):** trần chỗ đó **không có đèn thật** mà bạn vẫn đặt 射灯/聚光灯 → ảnh ra vệt sáng rọi từ hư không, người xem nhận ra ảnh giả ngay. Quy tắc sắt: **mỗi đèn ảo lớp 3 phải ứng với một đèn thật nhìn thấy được trong khung hình hoặc hợp lý ngoài khung.**

> ⚠️ **CẢNH BÁO template mới — nguyên nhân cháy trắng số 1:** các mẫu render đời 3.0 trở lên (极速3.0/3.1, 室内白天/夜晚 3.x) tính phản xạ ánh sáng dội (GI) **mạnh hơn hẳn đời cũ**. Đổi lên template mới mà giữ nguyên số đèn tay cũ → ảnh dư sáng, trần loang trắng. Quy tắc: **nâng template thì HẠ đèn tay xuống trước** (bắt đầu từ đầu thấp của mọi dải số), render nháp rồi mới tăng dần.

Sau mỗi bước lớn: **render 1 ảnh nháp nhỏ** để xem quan hệ sáng–tối rồi mới quyết bù đèn — đừng render final liên tục vừa tốn 核豆 vừa mù hướng (SOP nháp→final xem Chương 2). Chế độ 实时专业 có xem trước tức thì, tận dụng khi cân đèn.

## 4.5. Hai bộ số đối chiếu: chính thức vs 仙姑老师

Hai nguồn số tin cậy nhất hiện nay **lệch nhau có hệ thống** — sách in cả hai để bạn biết mình đang đứng ở đâu:

| Hạng mục | Bộ chính thức (help center) | Bộ 仙姑老师 ⚠️ (designer được Kujiale chứng nhận, bài cập nhật 2026) |
|---|---|---|
| 天光 ngoài cửa | 400–600, xanh nhạt | **600–800**, xanh trời nhạt |
| 天光 trong cửa | 200–300, trắng | **300–500** |
| 筒灯/射灯 | 280–300 (聚光灯, cao 2,4m) | **200–300**, cao **2400mm** |
| Đèn bù tủ/mặt đứng | 200–300 (phụ trợ trên) | 150–200, trắng ấm |
| Đèn bù đồ rời (rọi nhấn) | — | 100–150, góc 30–45° |

Cách dùng 2 bộ số — quy tắc của sách:

1. **Khởi điểm luôn là bộ chính thức** (dải thấp hơn, an toàn với template 3.0+ GI mạnh).
2. Render nháp thấy tối, thiếu khí trời → **nâng dần về phía dải 仙姑老师**. Căn góc kính lớn, muốn ảnh ngập sáng kiểu ban mai → dải 仙姑 hợp hơn.
3. Riêng 射灯 tồn tại 3 dải cộng đồng: 200–300 (nền, 仙姑) / 100–180 (chống cháy sáng, 佳佳老师) / 330–350 (rọi tường ban đêm, Baidu) — **khác ngữ cảnh chứ không mâu thuẫn**: rọi nền lấy 200–300, ảnh bị cháy hạ về 100–180, cảnh đêm cần kịch tính mới lên 330+.
4. Nhắc lại: tất cả là **thang cũ** — kiểm đơn vị máy mình trước (Sổ ghi nhận mục B1), ⚠️ đừng mặc định chia 10.

## 4.6. Năm công thức phòng

Số dưới đây = **dải khởi điểm, thang cũ**. Màu quy ước: xanh nhạt = 天光 ban ngày; trắng trung tính ≈ 4000K; vàng ấm ≈ 3000–3500K. Vật liệu công ty (melamine/laminate phản xạ yếu hơn đá) thường cần nhỉnh sáng hơn phòng ốp đá một chút — cứ render nháp mà cân.

### Công thức 1 — Phòng khách + bếp mở (căn hộ Ocean Park điển hình)

1. **Nền:** 2 lớp 天光 dựng đứng cỡ khung cửa sổ: ngoài 600–800 ⚠️, trong 300–500 ⚠️ (bộ 仙姑 — căn Sapphire/Ruby cửa kính lớn ăn dải này; ảnh dư sáng thì lùi về bộ chính thức 400–600/200–300). Muốn có nắng đổ: bật 太阳光.
2. **Nền phụ:** 面光源 phụ ở hành lang/khu giữa 180–200, **cách tường ra** — sát tường là loang.
3. **Chức năng:** rải 筒灯 đúng vị trí đèn âm trần thật, 200–300, cao 2,4m, ban ngày 4000K. Thêm 1 chiếc trên sofa + dưới đèn thả.
4. **Nhấn:** đèn thả bàn ăn → 球形灯 250–300 ⚠️ đặt giữa đèn và trần, màu ấm. Tranh tường sofa → 射灯 100–150, góc 30–45°. Khe trần/kệ TV → 面光源 mảnh rộng 20–25, ~1500 ⚠️, hơi ấm.
5. **Bếp mở:** đèn hắt gầm tủ trên 3500K ~1200; trần bếp 筒灯 4000K.
6. Render nháp → thiếu đâu bù đó, soi kỹ trần có loang không.

### Công thức 2 — Phòng ngủ (ấm, có đèn hắt đầu giường)

1. **Nền:** 天光 300–400 — dịu hơn phòng khách, ngủ lấy ấm cúng làm chính.
2. **Nền phụ:** 200–250.
3. **Chức năng:** 筒灯 280–350, cao 2,4m, vàng nhạt; đèn bù 200–300.
4. **Nhấn đầu giường:** 面光源 mảnh rộng 20–25 hắt sau ốp đầu giường, ~1500 ⚠️, vàng ấm ~3000K. Đèn bàn 2 bên → 点光源 30–40 ⚠️, thấp hơn model 0,15–0,2m.
5. **Cảnh đêm:** 天光 chuyển xanh đậm hơn 300–500, hạ nền tăng nhấn — hợp phong cách gỗ ấm/Nhật mà công ty hay chạy.

### Công thức 3 — Bếp riêng + khu bàn ăn

1. **Nền:** 天光 ô thoáng 300–500 (không có thì 面光源 hắt trần đều). Trần: 筒灯 200–300, **4000K trắng trung tính** — bếp cần rõ, vàng quá trông cũ.
2. **Mặt bàn thao tác:** đèn hắt gầm tủ trên 3500K ~1200, nghiêng vào trong ~30°.
3. **Bàn ăn:** 球形灯 250–300 ⚠️ giữa đèn thả và trần, 2700–3000K — màu ấm cho món ăn ngon mắt.
4. **Nhấn:** tủ/kệ rượu → 灯带 trong tủ hoặc 自发光 năng lượng ~1 ⚠️; tường gạch trang trí → 射灯 100–150 góc 30–45°.
5. Mặt đá + kính bếp phản xạ mạnh → đèn không đặt sát, cháy thì hạ trước tiên ở đây.

### Công thức 4 — WC / phòng tắm ⚠️ CÔNG THỨC SUY LUẬN

> ⚠️ **Minh bạch nguồn:** Kujiale **chưa có bài chính thức kèm bảng số cho WC**. Toàn bộ số dưới đây suy từ nguyên tắc chung + chuẩn chiếu sáng WC ngoài đời (nhập vào ô 色温). Dùng làm khởi điểm rồi tự cân — đừng coi là chuẩn chính thức.

1. **Nền:** 面光源 150–200 ⚠️, 4000–4500K, cách trần ~100mm, không sát tường. WC không cửa sổ: tăng nhẹ nền + thêm 1 筒灯 âm trần cho tự nhiên.
2. **Đèn gương:** 面光源 dạng dải 2 bên hoặc trên gương, 4000K ⚠️, độ sáng vừa phải — gương phản xạ mạnh, tham sáng là cháy. Chuẩn ngành: ngang tầm mắt 1,5–1,8m, 2 bên đều hơn trên đỉnh.
3. **Khu tắm/rọi đá:** 射灯 100–150, góc 30–45°, trắng ấm.
4. **Chống cháy & bẹt (WC toàn gương–kính–đá):** không đèn nào sát gương/kính/đá; đèn điểm giữ thấp 30–40; chênh nhiệt độ màu ≤ 500K; khi render bật đủ 漏光修复 (sửa lọt sáng) + 降噪 (khử nhiễu) + 溢色修正 (sửa loang màu) — vị trí 3 nút này xác nhận theo Sổ ghi nhận mục B4.

### Công thức 5 — Cận cảnh tủ áo / tủ bếp cho catalogue (nồi cơm của công ty)

1. **Nền:** 面光源 lớn hắt đều mặt trước tủ; tủ không có đèn thì dựng 1 面光源 đứng cạnh, 150–200, trắng ấm.
2. **Đèn tầng tủ (层板灯):** 面光源 dài bằng thân tủ, rộng ~60, sáng ~1200, **3500K**, sát tấm hậu, nghiêng vào trong ~30° — bộ số này là **chính thức** (bài hướng dẫn đèn trong tủ/hốc tường), dùng thẳng.
3. **Nổi vân gỗ melamine:** thêm 筒灯 rọi **nghiêng** 30–45°, 100–150, trắng ấm — ánh xiên mới bắt vân, rọi thẳng mặt là bẹt.
4. **Nhấn nội tủ:** 自发光 tấm hậu năng lượng ~1 ⚠️ hoặc 灯带 trong ngăn.
5. **Camera catalogue:** cao 1100–1300mm, tỷ lệ 3:4 ⚠️ (kinh nghiệm 仙姑老师 — chi tiết camera ở Chương 6). Mặt gỗ bóng (acrylic) cháy thì hạ đèn nền trước, đừng hạ đèn tầng.

## 4.7. Nhiệt độ màu — một khung hình một câu chuyện màu

Ba mức chuẩn theo tài liệu chính thức: **3000K** vàng ấm (ngủ, bàn ăn) — **4000K** trung tính (khách, bếp, làm việc) — **6500K** trắng lạnh (hầu như không dùng cho nhà ở). Lưu ý UI: ô 色温 (nhiệt độ màu) và ô 颜色 (màu tự chọn) **chỉ nhận một trong hai** — hệ thống lưu giá trị chỉnh sau cùng.

Quy tắc phối trong một khung hình:

1. **Chênh lệch nhiệt độ màu ≤ 500K** ⚠️ (chuẩn ngành chiếu sáng, không phải số Kujiale): 4000K đi với 3500K thì được, 3000K trộn 6000K là loang màu ngay.
2. **Phân vai theo lớp:** nền trung tính/xanh nhạt (天光 ban ngày trung hòa ánh vàng trong nhà), lớp nhấn ấm hơn (2700–3500K) tạo điểm ấm cúng.
3. **Ngày vs đêm:** ngày 天光 xanh nhạt; đêm 天光 xanh đậm hơn + đèn cục bộ ấm hơn để nổi tương phản.
4. **Lỗi cấm:** mỗi đèn một màu không phân vai → ảnh ra "bệ trắng, tường vàng, trần xanh" — dấu hiệu 3D lộ liễu nhất.

## Thực hành — bố đèn phòng khách căn hộ mẫu

Làm trên căn hộ mẫu 2PN của lớp (phòng khách + bếp mở, cửa sổ một mặt).

1. **Chụp mốc so sánh:** render 1 ảnh nháp nhỏ bằng mẫu tự động 白天自然光, lưu lại — đây là "trước".
2. Vào 离线模式 → 添加手动灯光 → chọn mẫu tự động làm nền (đúng cách lai 「thiếu đâu bù đó」— không xây từ mẫu trắng).
3. Bố theo **Công thức 1**, đúng trình tự 4 bước: 天光 2 lớp → phụ trợ → 筒灯 theo đèn trần thật → đèn nhấn (đèn thả + rọi tranh + hắt khe kệ TV). Mỗi số trước khi nhập tự hỏi: *UI mình là 瓦 hay số trơn?*
4. Sau bước 1 và sau bước 4: render nháp nhỏ, ghi lại chỗ tối/cháy, chỉ bù đúng chỗ đó.
5. Render nháp cuối, đặt cạnh ảnh "trước" và chấm theo **tiêu chí đạt**:
   - Nhìn ra ngay hướng sáng chính (sáng dần từ cửa vào trong)
   - Sofa + bàn ăn nổi khối rõ hơn ảnh auto — có mảng sáng mảng tối, không đều tăm tắp
   - Trần sạch: không mảng loang trắng
   - Đèn hắt kệ TV không lộ dải nguồn
   - Cả khung không loang màu, chênh nhiệt độ màu ≤ 500K
   - Không có vệt "tia Chúa" ở trần trống
6. Trượt tiêu chí nào → tra bảng lỗi bên dưới, sửa đúng 1 thứ, render nháp lại. Đạt cả 6 mới coi là xong bài.

## Checklist tự chấm

- [ ] Đã xác nhận đơn vị độ sáng trên UI của mình (瓦 hay số trơn) — Sổ ghi nhận mục B1
- [ ] Kể được 8 loại nguồn sáng và việc của từng loại không cần mở sách
- [ ] Thuộc trình tự 4 bước: nguồn chính → phụ trợ → chiếu tập trung → chi tiết
- [ ] Đặt 射灯 nào cũng chỉ được vị trí đèn thật tương ứng trên trần
- [ ] Biết 2 bộ số 天光 (chính thức vs 仙姑老师) và khi nào nghiêng về bộ nào
- [ ] Nói được vì sao WC là công thức suy luận, không phải chuẩn chính thức
- [ ] Nâng template 3.0+ là tự động hạ đèn tay trước khi render
- [ ] Bài thực hành đạt đủ 6 tiêu chí, có ảnh trước/sau lưu lại
- [ ] Trước render final luôn bật: 漏光修复 + 降噪 + 溢色修正

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Ảnh bẹt, không khối | Một nguồn to sáng cả phòng, không lớp lang | Bố đủ 3 lớp; giảm nền, tăng nhấn — thiếu tương phản chứ không thiếu sáng |
| Cháy trắng CẢ ảnh, chỉ cửa sổ tối | Vật liệu 自发光 trên trần/mặt lớn quá sáng | Bật 自动曝光 (phơi sáng tự động) để định vị nguồn cháy → thay vật liệu đó |
| Cháy sáng cục bộ | 射灯 quá mạnh; hoặc ngoại cảnh trắng dội vào | Hạ 射灯 về 100–180 ⚠️; hạ độ sáng ngoại cảnh (xem Chương 3) |
| Trần loang sáng | 面光源 sát trần hoặc nền quá mạnh | Hạ 面光源 xuống ~10cm dưới điểm thấp nhất của trần; giảm nền |
| Vệt "tia Chúa" vô lý | 射灯/聚光灯 ở chỗ trần không có đèn thật | Xóa hoặc dời về đúng đèn thật |
| Đốm sáng trên sàn/đá | Nguồn phản chiếu lên vật liệu bóng; đèn hắt dùng vật liệu cũ | Tắt 影响高光 (ảnh hưởng vùng bóng sáng); đổi đèn hắt phần thô sang vật liệu mới; bật 降噪 |
| Bóng đôi, bóng lỗi | Nhiều nguồn chồng hướng; dùng 聚光灯 giả nắng | Bớt nguồn chồng; nắng ngoài trời chỉ dùng 太阳光 + 天光 |
| Lộ dải đèn hắt | 面光源 hắt đặt lộ, sát mép khe | Giấu vào khe/sau ốp, kéo mảnh rộng 20–25, không cắm vào tường |
| Tường chia 2 tầng sáng–tối gắt | 面光源 đặt lệch tạo ranh giới | Đẩy 面光源 lên cao hơn cho ranh mờ đi |
| Đèn tủ lọt sáng + nhiễu | Khe hở tấm hậu, vật liệu cũ | Bật 漏光修复 + 降噪; thêm tấm hậu |

## Nguồn số liệu

**Chính thức (kujiale.com/hc)** — viết thẳng không đánh dấu:
- 「如何自定义灯光？内含灯光参数！」 — bộ số 4 bước + tham số khách/ngủ
- 「手动灯光中面光源、聚光灯、球形灯如何使用？」 (2024-12) và 「【教程】聚光灯使用教程」 (2023-05) — thao tác + cấm 聚光灯 giả nắng
- 「如何调整手动灯光色温？」 (2024-11) — 3000/4000/6500K, ô 色温/颜色 chọn một
- 「柜内灯光打法（壁龛、柜体灯带）」 — đèn tầng tủ 3500K/~1200/rộng 60/nghiêng 30°
- 「你必须知道的室内灯光小知识」 — phân loại 3 lớp; 「渲染画面全部曝光？」 + 「如何设置渲染高级参数」 (2025-01, article 3FO4K4VWISQV) — bảng lỗi
- Đường vào UI mới 3 chế độ: article 3FO4K4WCDICB (8/2025)

**Cộng đồng — mọi số kèm ⚠️ trong chương:**
- 仙姑老师 (渲染秘籍, Kujiale 官方认证, re-post k.sina.cn + ask.kujiale.com/ask/3FO4K2PPMHK3, cập nhật 2026) — 天光 600–800/300–500, 筒灯/射灯 200–300 cao 2400mm, 灯带 ~1500, camera 1100–1300mm
- Huke88 — 点光源 30–40; Baidu Jingyan — 聚光灯 330–350/380; 佳佳老师 (住小帮) — 射灯 100–180 chống cháy; Zhihu 656678535 + 259822871 — thao tác, Shift hàng loạt
- Chuẩn ngành chiếu sáng (taoransj, ice-light...) — chênh ≤500K, đèn gương 4000K: **cho ô 色温, không phải tài liệu Kujiale**

**Suy luận / chờ verify:**
- Toàn bộ Công thức 4 (WC) = suy luận từ nguyên tắc chung — chưa có bài Kujiale chuyên WC
- Đơn vị 瓦 vs số trơn → Sổ ghi nhận mục B1; đường vào đèn tay → B2; nút 降噪/漏光修复/溢色修正 → B4; profile IES S1–S5/T → B6 (Phụ lục B)

---

## Tự tra video thực chiến

> 📌 **Sách này cho bạn ĐƯỜNG ĐI. Video cho bạn ĐÔI TAY.**
>
> Chương vừa rồi dựng khung: nguyên lý là gì, thứ tự làm ra sao, số nào tin được số nào không. Nhưng thao tác thật — chuột đi đường nào, bấm chỗ nào, chỉnh tới đâu thì dừng — thì **xem người ta quay màn hình học nhanh hơn đọc nhiều lần.** Người làm nghề Trung Quốc chia sẻ rất nhiều và rất thực chiến.
>
> **Đọc chương xong, tra vài video về đúng đèn thủ công, rồi quay lại làm.** Đó mới là cách chương này phát huy hết.

Dán nguyên cụm vào ô tìm kiếm của **小红书** hoặc **抖音 (Douyin)**:

| Từ khoá | Tìm được gì |
|---|---|
| `酷家乐 手动灯光 教程` | Hướng dẫn đèn thủ công — từ khoá quan trọng nhất chương |
| `酷家乐 打光 三步法` | Đánh đèn ba bước |
| `酷家乐 面光源 参数` | Tham số đèn mặt |
| `酷家乐 射灯 IES 使用` | Dùng đèn rọi có file quang học |
| `酷家乐 灯带 参数 设置` | Tham số dải hắt sáng |
| `酷家乐 客厅 打光 数值` | Trị số đánh đèn phòng khách |
| `酷家乐 卧室 打光` | Đánh đèn phòng ngủ |

> 💡 **Bốn quy tắc lọc, dùng cho mọi từ khoá:** sắp theo `最新` (mới nhất) · ưu tiên bài có **ảnh chụp panel kèm số** · bỏ bài `AI一键` (quảng cáo) · **chỉ chép số từ bài ghi rõ template 3.0 hoặc 3.1**, bài cũ hơn thì chỉ học tư duy.
>
> Cách vào 小红书 từ Việt Nam, danh sách tài khoản đáng theo dõi, và mẫu ghi lại một ca thu được: xem **Phụ lục E mục E.10**.
