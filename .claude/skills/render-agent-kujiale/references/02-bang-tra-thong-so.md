# Bảng tra thông số Kujiale — bản hợp nhất

Gộp số của C2 · C3 · C4 · C6 · C13 vào một chỗ để agent tra nhanh.
**✅** = help center chính thức · **⚠️** = cộng đồng / suy luận / chờ verify.

> **Cảnh báo đơn vị, nhắc lại lần cuối:** ba hệ song song — **thang cũ** (0–800, đèn hắt ~1500) ·
> **`瓦`** (watt ảo) · **`%`**. Quy ước "`瓦` = thang cũ ÷ 10" **CHƯA được xác nhận**.
> Hệ `%` là thật và chính thức: `硬装灯带` vật liệu mới render chính xác dải **0%–6000%** ✅;
> ảnh panel thật cho thấy `室内光亮度` hiện **100%** và **500%**.
> **Mọi số dưới đây là THANG CŨ** trừ chỗ ghi rõ khác.

---

## 1. Ba chế độ render (UI từ 8/2025)

| | `实时轻量` nhẹ | `实时专业` chuyên nghiệp | `离线模式` ngoại tuyến |
|---|---|---|---|
| Preview thời gian thực | Có | Có | **Không** |
| Đèn thủ công `手动灯光` | Không | **Có** | **Có** |
| Thay vật liệu | Không | Có | Có |
| Phân giải tối đa | ảnh thường 1K, panorama 2K | 8K | 8K |
| Video + `俯视图` | Không | Không | **CHỈ Ở ĐÂY** |
| `景深` (DOF) | — | **Có** | **Không** |
| Tính phí | — | theo **thời lượng** | theo vé / `核豆` mỗi tấm |

**Tuyến chuẩn:** dựng sáng + thử-sai ở `实时专业` → xuất final ở `离线模式`.
`实时轻量` chỉ để demo nhanh cho khách ngồi cạnh.

Đường vào: rê chuột nút `渲染` trên thanh công cụ trên cùng. Đặt mặc định: avatar góc phải trên →
`偏好设置` → `渲染` → `默认渲染模式`.

---

## 2. Template ánh sáng (danh sách hiện hành, chốt 10/2025)

| Template | Đặc điểm | Dùng khi |
|---|---|---|
| `室内白天` / `室内夜晚` 2.1 → 3.0 → 3.1 | Chất cao nhất; 3.0 tăng số lần dội GI; 3.1 thêm preview ~1s + tự khử nhiễu | **Mặc định cho ảnh chính** |
| `极速3.0` / `极速3.1` | Nhanh nhất, 4K ~60s; chất kém một bậc | Ảnh nháp, canh bố cục |
| `实时白天` / `实时夜晚` | Xem đèn + vật liệu đổi trực tiếp, chỉnh LUT + `景深` | Dò góc máy, thử vật liệu |

> ⚠️ Dòng `极速` cũ (1.0/1.3/2.0/2.1/公装2.0) **đã bị gỡ** từ 10/2025, tự thay bằng `极速3.0/3.1`.
> Gặp tài liệu dạy theo template cũ → tên không còn tồn tại.

> ⚠️ **NGUYÊN NHÂN CHÁY TRẮNG SỐ 1:** template 3.x tính GI dội **mạnh hơn hẳn** đời cũ. Cùng độ sáng
> đèn, vùng được chiếu rộng hơn nhiều. Nâng template → **HẠ đồng loạt độ sáng đèn tay TRƯỚC**, render
> nháp rồi tăng dần. Đèn thủ công đã tạo không tự đổi khi nâng bản — nhưng GI của cảnh mạnh lên nên
> cùng số cũ vẫn cháy.

Giới hạn: **20 mẫu đèn thủ công + 20 mẫu thời gian thực = 40 kịch bản/phương án** ⚠️ (số 2024).

---

## 3. Nắng `太阳光`

| Tham số | Giá trị | Tin cậy |
|---|---|---|
| `色温` | **6500K** ban ngày; đêm lạnh hơn để "ngoài lạnh trong ấm" | ✅ |
| `亮度` | **20–50, không vượt 50** (≈2–5 `瓦`) | ✅ |
| `阴影柔和度` | **~5** theo help center · **1,5** theo cộng đồng — hai nguồn vênh. Vùng dùng được cho nắng qua rèm: **3–5** | ✅/⚠️ |
| `俯仰角` (EL) | **25–50** ✅; đẹp nhất **15–35°** ⚠️; có ban công ~30, không ban công ~35 ⚠️ | ✅/⚠️ |
| `方位角` | Lệch **~30°** so với mặt cửa sổ ⚠️ | ⚠️ |

Bộ hội tụ nhiều nguồn: **6500K · `亮度` 50 · `角度` 30°** ⚠️.

> **Bẫy ô:** `角度` của nắng là góc **NGẨNG**; `位置` mới là **phương vị**.
> **Bẫy thang:** `阴影柔和度` của nắng chạy **1–10** (số lớn = mềm hơn); `阴影柔和` của đèn nhân tạo
> chạy **100–3000**. Trộn lẫn hai ô là nguồn gốc của mọi bộ số "vênh gấp mười lần" trên mạng.
> **Bẫy ẩn:** `手动曝光 强度` (dải dùng được **0,5–1,0** ⚠️, tông sâu 1,0–1,2) giải thích vì sao có người
> để `阳光 亮度` tới 100–150 mà không cháy. Thấy ai dùng số nắng cao bất thường → hỏi họ để phơi sáng bao nhiêu.

⚠️ **CẤM dùng `聚光灯` thay nắng ngoài trời** — sinh nhiễu nặng (nguồn chính thức).
Nắng ngoài trời chỉ dùng `太阳光` + `天光`.

---

## 4. Thiên quang `天光` — `面光源` dựng đứng ở cửa sổ

Dựng `面光源` đứng, **kích thước xấp xỉ khung cửa sổ**, đặt ngay ngoài cửa, cách cửa ~150–200mm.

| Vị trí | Bộ chính thức ✅ | Bộ 仙姑老师 ⚠️ | Bộ 百度经验 ⚠️ | Màu |
|---|---|---|---|---|
| Ngoài cửa sổ | **400–600** | **600–800** | 280–300 (phòng nhỏ <300, phòng lớn 600–800) | Xanh nhạt / trắng lạnh |
| Trong cửa (lớp đẩy 2) | **200–300** | **300–500** | 250–280 | Trắng / xanh trời rất nhạt |

**Cách dùng ba bộ số — quy tắc của giáo trình:**
1. Khởi điểm luôn là **bộ chính thức** (dải thấp hơn, an toàn với GI mạnh của template 3.x).
2. Nháp thấy tối, thiếu khí trời → nâng dần về phía **dải 仙姑**. Căn góc kính lớn, muốn ngập sáng
   kiểu ban mai → dải 仙姑 hợp hơn.
3. ⚠️ Hai nguồn còn **ngược nhau** về việc lớp trong sáng hơn hay tối hơn lớp ngoài — thử cả hai, tin mắt mình.

**Đẩy sáng `递推光`** cho phòng sâu (căn bố cục ống): **200 → 150 → 100 → 50** ⚠️, mỗi lớp nhỏ dần, tối dần.
Không ban công đẩy **2 lớp**, có ban công (lô gia che bớt trời) đẩy **3 lớp** ⚠️.

💡 `面光源` phải **cách tường/trần một khoảng**, không dán sát — dán sát sinh vệt sáng loang `光斑`.

---

## 5. Ngoại cảnh `外景`

| Tham số | Tác dụng | Giá trị |
|---|---|---|
| `外景亮度` | **CHỈ** độ sáng cảnh ngoài cửa, **không** ảnh hưởng sáng trong phòng | Mặc định ngày ~1,8; hội tụ **3**, dải 1–10 ⚠️ |
| `环境光亮度` | Ánh sáng **xuyên qua cửa vào phòng** — cái này mới đổi sáng trong nhà | Ngày ~1,5, đêm ~1; hội tụ **3–7, hay dùng 4** ⚠️ (mặc định chính thức 3) |
| `环境光反射` | Độ "long lanh" của kính, đá bóng, sàn bóng | Đêm ~5; hội tụ **18–20** ⚠️ (một nguồn để 10). Quá cao → cháy cục bộ |
| `环境反射亮度` | Cứu mặt bóng "chết" (acrylic/đá/kim loại không phản chiếu gì) | Nấc **2 → 6 → 12** ✅ |
| `水平旋转` | Xoay cảnh ngoài cho khung nhìn qua cửa đẹp nhất | — |

Loại `环境光`: `自然光` / `暖光` cho ảnh ngày · `冷光` cho ảnh đêm.

**Ngoại cảnh tự tải `自定义外景`:** giao diện render → cột trái `外景` → tab `我的` → `上传外景`.
> ⚠️ **KHÔNG nhận HDR/EXR.** Chỉ nhận **PNG/JPG toàn cảnh tỉ lệ 2:1**, ≤20MB/ảnh, khuyến nghị
> 8000×4000 → 16000×8000px, tối đa 10 ảnh, và **chỉ template dòng `写实` mới dùng được**.
> Đừng mất công đi tìm file .hdr.

💡 Phần mềm **không tự khớp** hướng nắng với ngoại cảnh — phải tự chỉnh `方位角` của `太阳光` cho bóng
đổ trong phòng cùng phía với nguồn sáng nhìn thấy trong cảnh ngoài cửa.

---

## 6. Tám loại nguồn sáng `手动灯光`

Đường vào: `离线模式` hoặc `实时专业` → `灯光模板` → `+手动灯光` → chọn mẫu trắng `空白` hoặc lấy
một mẫu tự động làm nền rồi sửa (**cách lai này đúng hơn** — "thiếu đâu bù đó", không xây từ số không).

| # | Loại | Dùng vào việc gì | Dải khởi điểm (thang cũ) | Ghi chú |
|---|---|---|---|---|
| 1 | `面光源` đèn mặt (có `双面光` phát 2 mặt) | Nguồn chính đa năng: thiên quang ở cửa, hắt trần, kéo mảnh làm đèn hắt | Thiên quang xem §4; phụ trợ **100–300** | **Loại quan trọng nhất.** `散射角` hội tụ **65–90°** ⚠️ |
| 2 | `点光源` / `球形灯` | Đèn bàn, đèn thả, quầng sáng toả tròn | Đèn điểm **30–40** ⚠️; đèn cầu cho đèn thả **250–300** ⚠️ | Đèn bàn đặt **thấp hơn model đèn 0,15–0,2m**. `球形灯` nhiệt màu **6500–10000K** khi đặt ngoài nhà ⚠️ |
| 3 | `聚光灯` đèn rọi hình nón | Rọi tranh, rọi tường, giả máy chiếu (tải được `贴图`) | Rọi tường **330–350**, đêm **380**, cao 2,4m ⚠️ | **CẤM dùng thay nắng ngoài trời** ✅. Kỹ thuật cao: để cường độ cực thấp **0,3–2%** chỉ để **tạo bóng**, sáng thật do `球形灯`/`面光源` lo ⚠️ |
| 4 | `射灯` / `筒灯` dùng IES | Chiếu điểm theo đèn thật trên trần: sofa, bàn, rèm, tường đá | Mặc định **200–300**, cao **2,4m**; rọi nhấn **100–150**, góc **30–45°**; ca thực chiến hội tụ **100** ⚠️ | Ưu tiên `射灯` có file IES hơn `聚光灯` thuần — IES cho quầng sáng + suy giảm tự nhiên. Profile S1–S5 = `射灯`, T = `筒灯` ⚠️ chưa có bảng chính thức |
| 5 | `灯带` đèn hắt khe | Hắt khe trần, gầm tủ bếp, đầu giường, hốc tường | `面光源` mảnh **rộng 20–25, sáng ~1500** ⚠️; đèn tầng tủ `层板灯` **rộng ~60, ~1200, 3500K** ✅ | **Xem Quy luật 1 §7** — số này phụ thuộc màu vật liệu, chênh tới 10 lần. Giấu kín nguồn trong khe |
| 6 | `体积光` đèn thể tích | Cột nắng nhìn thấy trong không khí (hiệu ứng Tyndall / "ánh sáng Jesus") | Tham số riêng: `光柱长度`, `底面半径`, `视角` | **Chỉ có ở template `写实` + `离线模式`.** 8 loại kéo thả sẵn |
| 7 | `自发光` vật liệu tự phát sáng | Bảng LED, lưng tủ kính, kệ rượu | `发光能量` **~1** cho lưng tủ ⚠️ | **Thủ phạm số 1 gây cháy trắng cả ảnh** khi đặt cao |
| 8 | `太阳光` | Xem §3 | | |

**Mẹo thao tác:**
- Bố đèn ở **màn 2D** — phần mềm mặc định ẩn trần cho dễ đặt.
- Giữ **Shift** khung chọn hàng loạt `筒灯`/`射灯` để đổi tham số một lần.
- `属性应用至同款灯` — nhân bản thiết lập sang mọi đèn cùng loại.
- Cảnh nặng: dùng `自发光材质` thay nguồn rời cho khe/dải/đèn lưới mật độ cao, rồi thêm vài `射灯`
  thật cho quầng nhấn.
- `衰减系数` (hệ số suy giảm): nâng từ mặc định **1,0 lên ~1,5** cho rìa mềm hơn, vùng nhấn nổi hơn.
- ⚠️ `一键生成灯带` nằm trong module `照明设计` = **chức năng doanh nghiệp**, tài khoản cá nhân
  không dùng được. Phải đặt `面光源` dải mảnh bằng tay. Đừng đi tìm nút đó.

---

## 7. Hai quy luật phụ thuộc — thứ thay được cả bảng số

### Quy luật 1 — độ sáng dải hắt phụ thuộc MÀU VẬT LIỆU

| Không gian tông | `灯带` để | Vì sao |
|---|---|---|
| **Sáng** (tường trắng, tủ trắng, sàn nhạt) | **300–800** ⚠️ | Bề mặt sáng nảy lại nhiều, cần ít |
| **Tối** (tường sẫm, gỗ đậm, đá đen) | **2000–6000** ⚠️ | Bề mặt tối nuốt ánh sáng, cần nhiều |

Chênh nhau **gần mười lần**. Đây là lý do người để 700, người để 1500, người để 4000 — và cả ba đều
đúng cho cảnh của họ.

### Quy luật 2 — độ sáng phụ thuộc CÓ RÈM HAY KHÔNG

Nguyên văn ghi chú của designer: **`有窗帘拉满，没窗帘看着给`** — có rèm thì kéo hết cỡ, không rèm thì
cho vừa mắt. Vì rèm cản lại một phần lớn ánh sáng trước khi nó vào phòng.

### Gộp thành một câu

> # Đừng hỏi "đèn này để bao nhiêu".
> # Hỏi "ánh sáng phải **ĐI QUA** cái gì và **ĐẬP VÀO** cái gì".

---

## 8. Nhiệt độ màu

| Dải | Cảm giác | Hợp với |
|---|---|---|
| **2700–3000K** | Vàng ấm, thư giãn | Phòng ngủ, bàn ăn, phòng khách buổi tối |
| **~4000K** | Trắng trung tính, tỉnh táo | Khách, bếp, bàn làm việc |
| **5000–6500K** | Trắng xanh như ban ngày | Ánh sáng trời, `太阳光` |
| 6500K+ đèn nhà ở | — | **Hầu như không dùng** |

`灯带` / `氛围灯`: **3500–4500K** ⚠️ · `筒灯`: **3500K** ⚠️ · Đèn tầng tủ `层板灯`: **3500K** ✅ ·
Đèn gương WC: 4000K ⚠️ (chuẩn ngành chiếu sáng, không phải số Kujiale).

**Chênh ≤ 500K** ⚠️ — chỉ áp cho các đèn **cùng chiếu một bề mặt**, KHÔNG áp cho cả căn nhà.
Gradient theo khoảng cách vẫn rất đẹp: ngoài nhà 8000K → 6500K → 4500K → trong nhà 3500K.

Ô `色温` và ô `颜色` **chỉ nhận một trong hai** — hệ lưu giá trị chỉnh sau cùng.
Kỹ thuật cao: dùng **mã RGB** thay Kelvin để với tới màu Kelvin không có (thang Kelvin chỉ chạy trên
trục vàng–xanh lam). Ví dụ từ một ca thực chiến ⚠️: `240-231-216` trắng ngà ấm (kèm `阴影柔和` 1000)
cho không khí và bóng đổ; `69-120-176` xanh dương trung (kèm `影响高光` BẬT, `亮度` 50) tạo vệt sáng xanh.

---

## 9. Camera

**Kujiale nói ĐỘ, không nói mm.** Chỉ có ô `视野` (FOV), mặc định **60° = `标准`** ✅.

| Ống kính | FOV ≈ | Cảm giác |
|---|---|---|
| 24mm | 84° | Rất rộng — phòng to nhưng méo rìa mạnh |
| 35mm | 63° | Góc "ảnh nội thất tạp chí" — gần mặc định 60° |
| 50mm | 46° | Nén phối cảnh, hợp ảnh cận đồ vật |

⚠️ Bảng quy đổi chỉ để **hình dung**, không phải tài liệu Kujiale.

### Chiều cao `相机高度` — bảng CHÍNH THỨC ✅

| Loại công trình | Trần | `相机高度` |
|---|---|---|
| **Nhà ở / căn hộ** | 2700–2800mm | **800–1200mm** |
| Biệt thự | 3000–3500mm | 1200–1400mm |
| Công trình công cộng, ngoại thất | ~5000mm | 1400–1600mm |

Thấp hơn tầm mắt người đứng (~1500mm) là **chủ đích**: sàn và trần cân đối trong khung, mặt bàn/sofa
không bị nhìn chúc xuống, giữ máy ngang dễ hơn nên cột dọc ít đổ.
**Camera 1500mm+ là dấu hiệu ảnh nghiệp dư dễ nhận nhất.**

💡 Kê camera ở **4 góc phòng bắn chéo ra** thường cho khung đẹp hơn đứng giữa phòng.
💡 Giữ **`俯仰角` = 0** trừ khi cố ý. Bấm **`保存视角`** sau khi căn xong.

### Ba công cụ camera

| Công cụ | Làm gì | Khi nào |
|---|---|---|
| `相机矫正` | Mọi cạnh dọc về **thẳng đứng** thay vì đổ chụm | **BẬT cho gần như mọi ảnh kiến trúc–nội thất** |
| `相机剪裁` | Tự ẩn tường/trần/`吊顶` chắn trước ống kính → đặt camera lùi ra ngoài phòng nhìn vào | Phòng WC/bếp nhỏ/ngủ hẹp. **Đây là cách đúng — đừng tăng `视野` lên 90° để "nhét" phòng vào khung** |
| `景深` | Xoá phông; click chủ thể đặt điểm nét, chỉnh `模糊度` | Ảnh cận vật liệu/phụ kiện. **CHỈ có ở chế độ thời gian thực.** Không dùng cho ảnh toàn phòng |

### Bốn kiểu bố cục

| Kiểu | Mục đích | `相机高度` | `视野` | `相机矫正` |
|---|---|---|---|---|
| **A** — toàn phòng 1 điểm tụ | Khách duyệt phương án | 800–1200mm ✅ | 60°; phòng chật ~70–80° ⚠️ | BẬT |
| **B** — góc 1/3 kiểu tạp chí (2 điểm tụ) | Fanpage, hồ sơ năng lực | ~1000–1200mm ⚠️ | 55–60° ⚠️ | BẬT |
| **C** — cận vật liệu/phụ kiện | Catalogue | Ngang tầm món đồ ⚠️ | 40–50° ⚠️ | Tùy |
| **D** — dọc 3:4 / 9:16 | Facebook, TikTok, Zalo | 900–1200mm ⚠️ | 55–65° ⚠️ | BẬT (quan trọng nhất ở kiểu này) |

Kiểu A: điểm tụ **lệch nhẹ khỏi tâm** — đối xứng tuyệt đối trông máy móc.
Kiểu B: chủ thể ở **giao điểm lưới 1/3**, chân trời ở 1/3 dưới hoặc trên, chừa **khoảng thở `留白`**.
Kiểu D: đổi tỉ lệ khung **TRƯỚC** khi render. Tỉ lệ có nguồn: **16:9, 4:3, 3:4, 1:1**;
⚠️ 9:16 chưa xác nhận có sẵn — không có thì render 3:4 khổ lớn rồi crop dọc.
Camera catalogue tủ ⚠️: cao **1100–1300mm**, tỉ lệ **3:4**.

---

## 10. Mười sáu tham số nâng cao

Đường vào 1–8: `离线模式` → góc trái dưới **`高级设置`**.
Đường vào 9–16: panel hiệu ứng cạnh `灯光模板`, hoặc `实时渲染` → `效果` → `后处理`.

💡 Rê chuột vào dấu **"?"** cạnh mỗi tham số → hiện ảnh minh hoạ trước/sau.
Ô check **bị xám** = template hiện tại không hỗ trợ → đổi sang dòng `写实`.

| # | Tham số | Tác dụng | Nên để | TẮT khi |
|---|---|---|---|---|
| 1 | `溢色修正` | Chặn mảng màu lớn hắt màu lên bề mặt khác | BẬT khi khung có mảng màu đậm/bão hoà lớn | Muốn giữ hắt màu tự nhiên — **tắt thì THẬT hơn, bật thì SẠCH hơn** |
| 2 | `影响高光` | Hiện/ẩn đốm phản chiếu nguồn sáng trên bề mặt bóng | C2 khuyên **BẬT** (sàn bóng phải thấy bóng đèn mới đúng vật lý); C13 ghi các ca thực chiến để **TẮT** ⚠️ hai nguồn chỏi nhau | Sàn bóng lốm đốm trắng hàng loạt gây rối mắt |
| 3 | `硬装灯带使用新材质` | Sửa đèn dây đứt đoạn/cháy/sai sáng; render chính xác **0%–6000%** | **BẬT gần như luôn**, nhất là thiết kế `无主灯` | Phương án cũ đã canh sáng theo vật liệu cũ |
| 4 | `环境阻光` (AO) | Bóng tiếp xúc ở góc/khe → nổi khối, phào sắc nét | **BẬT · Size 0,8 · Radius 0,05 ft** ✅ (≈15mm). C13: `深浅` 0,50 · `半径` 25–50mm ⚠️ | **Không tắt.** Size thấp → bẹt; Radius lớn → bóng loang bẩn |
| 5 | `镜面真实反射` | Engine mặc định bỏ vật sau lưng camera → gương "mất đồ" | **CHỈ bật khi khung có gương lớn.** ⚠️ Không được nhớ trạng thái — lần nào cần lần đó tick | Mặc định TẮT. Không gương mà bật = cộng giờ render vô ích |
| 6 | `渲染复杂材质` | Bật `置换` (vân nổi thật) + `3S` (xuyên sáng dưới bề mặt) | BẬT khi có đá xuyên sáng, rèm voan, da, nến. **Bắt buộc cho rèm voan** | Không có vật liệu loại này |
| 7 | `超真实渲染` | Nâng chất riêng cho panorama | Chỉ có ở `全景图 ≥5K`, chỉ ở final cho khách VIP | Mọi trường hợp khác |
| 8 | `HDR` | Xuất dải sáng động cao để hậu kỳ nặng trong PS | Chỉ khi cần kéo lại vùng cháy/tối ở hậu kỳ. ⚠️ Không được nhớ trạng thái | Mặc định tắt |
| 9 | `自动曝光` | Hệ tự chỉnh chống quá sáng/tối | **KHÔNG tick** — giữ quyền kiểm soát. ⚠️ Tick là hệ **GHI ĐÈ thông số đèn của bạn** | Trừ khi ảnh hỏng sáng mà chưa biết chỉnh tay (hoặc dùng để **định vị nguồn gây cháy**) |
| 10 | `炫光` (glare) | Quầng loé quanh vật loại "đèn"; thang 1–10, mặc định 1,5 | Giữ **1,5–2,5**; các ca hội tụ **1,50** | Cảnh ban ngày không bật đèn. Trên 4–5 → giả kiểu poster |
| 11 | `降噪` | Khử nhiễu | Template 3.1+ **tự bật**. Bản còn nút: tick = **+3 phút render** | Ảnh không nhiễu |
| 12 | `色彩增艳` | Tăng bão hoà tổng thể | **THẤP hoặc TẮT** — màu quá tươi là dấu hiệu số 1 của "ảnh 3D". Chỉ có ở dòng `写实` | Luôn cân nhắc tắt cho ảnh chân thực |
| 13 | `漏光修复` | Chống rò sáng qua khe tường/trần | Chỉ bật ở **final** khi thật sự thấy rò (3.1: 99% cảnh đã tự tránh) | Ở bước nháp |
| 14 | `曝光压制` | Kiểm soát độ sáng + chi tiết vùng cháy | Càng **THẤP** → highlight càng mềm, **cứu được cửa sổ cháy trắng** | Không có vùng cháy |
| 15 | `LUT滤镜` | Bộ màu điện ảnh; 8 LUT sẵn + upload `.cube` (sRGB) | LUT **nhẹ** để phá "cảm giác màu render". Từ 3.1 dòng `写实` mới hỗ trợ | LUT làm sai màu vật liệu khách đã chốt |
| 16 | `景深` | Mờ hậu/tiền cảnh theo tâm điểm | **Nhẹ tay** | Khách cần xem rõ chi tiết toàn phòng |
| — | `色彩增强` | (C6 gọi riêng) | Giữ **0/1, không để 2/3** ✅. C13: `标准` · `饱和度` 0,05 · `对比度` 0–0,05 · `亮度` 0,00 ⚠️ | |

**Ghi nhớ trạng thái:** hệ nhớ lần tick trước của phần lớn tham số. **Ngoại lệ: `镜面真实反射` và `HDR`
KHÔNG được nhớ** vì ảnh hưởng trực tiếp thời gian render.

⚠️ Bản `室内白天/夜晚` **3.0** đã **gỡ ba nút chỉnh tay**: `降噪`, `漏光修复`, và tuỳ chọn nhấn vân
cho panorama — vì máy **tự làm**. Không thấy nút `降噪` **không phải lỗi**.

### Bộ mặc định khuyến nghị (dán cạnh màn hình)

```
高级设置:
  溢色修正        BẬT khi có mảng màu lớn / TẮT nếu muốn thật hơn
  影响高光        BẬT (tắt nếu sàn lốm đốm)  ⚠️ C13 khuyên TẮT
  硬装灯带新材质   BẬT
  环境阻光 AO      BẬT · Size 0.8 · Radius 0.05 ft
  镜面真实反射     TẮT — chỉ bật khi có gương
  渲染复杂材质     TẮT — chỉ bật khi có đá xuyên sáng / rèm voan / da
  超真实渲染      chỉ panorama ≥5K, chỉ ở final
  HDR            chỉ khi cần hậu kỳ nặng
Panel hiệu ứng:
  自动曝光        TẮT (giữ quyền kiểm soát đèn)
  炫光           1.5–2.5
  色彩增艳        thấp hoặc tắt
  降噪           tự động từ template 3.1
  漏光修复        chỉ final, khi thấy rò
  曝光压制        hạ thấp để cứu cửa sổ cháy
  LUT / 景深      nhẹ tay
```

---

## 11. SOP nháp → final (tiết kiệm `核豆`)

| Bước | Hành động | Chế độ | Tốn |
|---|---|---|---|
| 1 | Rà model: `重面`, đèn chồng trần | Công cụ thiết kế | Không |
| 2 | Vào `实时专业`, chọn template dòng `写实` | Realtime Pro | Thời lượng |
| 3 | Set camera: FOV, chiều cao, bố cục | Realtime Pro | — |
| 4 | Dựng sáng: nắng/trời → đèn chính → bù → nhấn | Realtime Pro | — |
| 5 | Hậu kỳ realtime: `曝光压制`, LUT, `景深` | Realtime Pro | — |
| 6 | Lưu → `离线模式` → nháp **1920×1080** + đủ bộ `高级设置` chuẩn | Offline | Rất ít |
| 7 | Soi lỗi → sửa → nháp lại | — | — |
| 8 | Final: nâng 3K/4K + bật option nặng đúng chỗ | Offline | **Xem `核豆` TRƯỚC khi bấm** |

**Ba nguyên tắc vàng:**
1. **Không bao giờ chỉnh đèn bằng cách render thử ảnh lớn.** Toàn bộ thử-sai trong preview realtime.
2. **Nháp và final phải cùng bộ tham số ánh sáng, chỉ khác phân giải.** Tấm nháp CHỐT nên render
   1920×1080 với **đúng bộ option final** trước khi lên 4K.
3. **Lỗi model không sửa được bằng tham số render.**

**Không bao giờ bật ở bước nháp:** `镜面真实反射` · `渲染复杂材质` · `超真实渲染` · `HDR` · `漏光修复`.

Render là **cloud render** — bấm xong tắt máy vẫn render tiếp trên server. Bật `出图提醒`.

⚠️ **Hệ `核豆` (từ 01/03/2026):** 基础 500 / 高级 1200 / 专业 1800 `核豆`/tháng.
**Số `核豆` mỗi tấm KHÔNG có bảng công khai** — chỉ xem trong app qua nút **「核豆消耗 - 查看详情」**
ngay trong cửa sổ render. Vé **6K panorama (8 vé/tháng) phải vào `会员中心` tự nhận theo tuần,
nhận xong chỉ có 7 ngày** — quên là mất.

---

## 12. Phân giải và chuẩn xuất

Kích thước Kujiale công bố ✅:
- `普通图`: 800×450 · 1920×1080 · 2560×1440 (Kujiale gọi là "3K")
- `全景图`: 2000×1000 · 3000×1500 · 4000×2000
- `俯视图`: 800×450 · 1920×1080

⚠️ Pixel thực của tier "4K" và "8K极清" **KHÔNG được công bố**.

Khung **`夜间免费渲染`**: `普通图` 800×450 / 1920×1080 / 2560×1440 · `全景图` 2000×1000 → 4000×2000 ·
`俯视图` 800×450 / 1920×1080.

| Kênh | Render cỡ nào đủ | Kích thước đích |
|---|---|---|
| Zalo / Facebook feed | 2K | 1920×1080 (16:9) hoặc 1080×1350 (4:5) |
| TikTok / Reels dọc | 2K | 1080×1920 (9:16) |
| Khách duyệt trên điện thoại | 2K–3K | 2560×1440 |
| **In A4 catalogue** | 4K+ | **2480×3508px (A4 dọc @300DPI)** |
| Màn hình lớn / triển lãm | 4K+ | 3840×2160+ |
| **In khổ lớn** | **8K bắt buộc** | dưới mức này in ra vỡ |

**Quy tắc tiết kiệm:** mạng xã hội nén ảnh về ~2K — **render 8K cho ảnh đăng Facebook là ném `核豆`
qua cửa sổ.**

💡 Panorama **KHÔNG so trực tiếp được** với ảnh thường: panorama là 6 mặt ghép lại, nên panorama 5K
không hề nét hơn ảnh thường 4K. Hiểu lầm phổ biến nhất của người mới.

---

## 13. Render cả bộ ảnh một căn

> 📌 **Mặt trời được lưu BÊN TRONG từng `灯光模板`, không lưu theo từng góc máy.**
> Đổi mặt trời trong template đang dùng = đổi cho **mọi ảnh** dùng template đó.

**Quy tắc kỷ luật:** đặt MỘT bộ ánh sáng + mặt trời duy nhất, render tất cả các góc bằng đúng bộ đó.

Quy trình: dựng xong **cả căn** → khoá **một** template + **một** ngoại cảnh → `保存视角` đặt tên tất cả
các góc → render **nháp cả bộ** → sửa ảnh lệch → render **final cả bộ**.
Đừng làm xong ảnh 1 rồi mới dựng góc 2 — chắc chắn lệch.

| Bắt buộc nhất quán | Ngưỡng |
|---|---|
| Nhiệt độ màu giữa các ảnh | chênh **≤ 300–500K** ⚠️ |
| Mức sáng tổng | chênh **≤ ~1 khẩu** ⚠️ |
| Hướng đổ bóng | **giống hệt** — cùng một mặt trời |

Số lượng: căn 2PN thường **6–9 ảnh**, căn 3PN **9–12 ảnh** ⚠️.

---

## 14. Ánh xạ sang V-Ray / Corona — khái niệm quy đổi được, SỐ thì không

**Production của công ty là Kujiale.** Mục này chỉ dùng khi phải đọc tài liệu V-Ray/Corona,
hoặc nhận file từ bên ngoài.

> ## ⚠️ **KHÁI NIỆM quy đổi được. SỐ thì KHÔNG — và đừng bịa hệ số.**
> `亮度` của Kujiale là **giá trị tương đối của phần mềm**, thang không công bố (còn ba hệ song song).
> V-Ray và Corona dùng **đơn vị quang học thật** (lm · W · cd/m²). **Không tồn tại hệ số chuyển.**
> Ai đưa cho bạn một bảng "Kujiale 300 = V-Ray x lm" thì đó là số bịa.

### 14.1. Bảng ánh xạ khái niệm

| Kujiale | V-Ray | Corona |
|---|---|---|
| `面光源` đèn mặt | VRayLight type **Plane** | CoronaLight shape **Rectangle** |
| `点光源` / `球形灯` | VRayLight type **Sphere** | CoronaLight shape **Sphere** |
| `聚光灯` đèn rọi nón | VRayLight **Spot** | CoronaLight + **Directionality** |
| `射灯`/`筒灯` dùng IES | **VRayIES** | CoronaLight + **IES profile** |
| `太阳光` | **VRaySun** | **CoronaSun** |
| `天光` thiên quang | VRaySky / Dome | CoronaSky / Dome |
| `外景` ngoại cảnh | **Dome light + HDRI** | **Corona Dome / Environment** |
| `环境光亮度` | Environment / GI multiplier | Environment intensity |
| `环境阻光` AO | **VRayDirt** | **Corona AO map** |
| `自发光` | **VRayLightMtl** | **CoronaLightMtl** |
| `体积光` | VRayEnvironmentFog | Global volume material |
| `曝光压制` | Camera exposure / highlight burn | **Highlight compression** |
| `色温` | Light temperature (K) | Light Kelvin |
| `反射光泽度` | Reflection **Glossiness** | Glossiness (nghịch đảo Roughness) |
| `凹凸比例` | Bump amount | Bump amount |
| `折射光泽度` | Refraction glossiness | Refraction glossiness |
| `渲染复杂材质` | **Displacement + SSS** (bật riêng từng vật liệu) | Displacement + SSS |
| `降噪` | VRay Denoiser | Corona Denoiser |

### 14.2. Ba công tắc Kujiale KHÔNG có tương đương — vì không cần

| Kujiale | Vì sao V-Ray/Corona không có |
|---|---|
| `镜面真实反射` | Đây là **workaround** cho engine nhẹ của Kujiale (mặc định bỏ vật sau lưng camera). V-Ray/Corona tính đủ mặc định — **miễn phí** |
| `漏光修复` | Cùng lý do — cache ánh sáng của engine đủ chính xác sẵn |
| Ba hệ đơn vị độ sáng | Không tồn tại. V-Ray/Corona dùng đơn vị thật, **rõ ràng hơn hẳn** |

> 💡 **Nghịch lý đáng biết:** cái khó nhất của Kujiale (không biết `亮度` là thang gì) **biến mất**
> ở V-Ray/Corona. Bên đó nhập watt và lumen thật.

### 14.3. Thay vì quy đổi số — dùng SỐ THẬT mà giáo trình đã có sẵn

Cầu nối engine-agnostic **đã nằm trong C13 §13.5** (mục không đèn chủ):

| Phòng | Công suất thật |
|---|---|
| Khách | **5–6 W/m²** |
| Bếp | **6–8 W/m²** |
| Ngủ | **4–5 W/m²** |

Độ rọi mục tiêu **GB 50034**: khách sinh hoạt chung **100 lx** · đọc sách **300 lx** ·
ngủ **75 lx** · bếp và bàn ăn **150 lx**.

**Đây mới là thứ mang đi được giữa mọi engine** — vì nó là vật lý thật, không phải thang phần mềm.
Ở V-Ray/Corona thì nhập thẳng; ở Kujiale thì dò cho tới khi ảnh nhìn ra đúng mức đó.

Đúng **Luật nền #1** của agent: **chép TỈ LỆ và THỨ TỰ, đừng chép SỐ.**
