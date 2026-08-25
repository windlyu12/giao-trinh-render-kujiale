# Vật liệu và texture

## 1. Quên PBR chuẩn đi — Kujiale dùng hệ 4 kênh riêng

**Kujiale KHÔNG có thanh Metallic, KHÔNG có thanh Roughness.** Ai vào tìm "kéo Roughness lên cho mờ"
sẽ chỉnh sai từ đầu.

| Kênh | Điều khiển gì | Thang đo |
|---|---|---|
| **`反射颜色`** màu phản xạ | **CƯỜNG ĐỘ** phản xạ. Chính thức: đen = không phản xạ, trắng = phản xạ toàn phần | **Màu xám** đen↔trắng (KHÔNG phải con số) |
| **`反射光泽度`** độ bóng phản xạ | **Độ NÉT/MỜ** của phản xạ = cảm giác bóng hay lì. Chính thức: "0 = nhám, 1 = rất bóng" | Số **0–1** |
| **`凹凸比例`** tỉ lệ lồi lõm (bump) | Vân nổi tế vi, dùng ảnh đen-trắng: trắng lồi, đen lõm | Số thực |
| **`折射`** khúc xạ (`折射颜色` + `折射光泽度`) | Độ trong suốt + độ mờ của vật trong suốt | Màu + số 0–1 |

**Dịch tư duy:** Roughness ≈ **nghịch đảo** của `反射光泽度`; Metallic ≈ `反射颜色` đẩy sáng + nhuộm màu kim loại.
Ba cần gạt đầu quyết định **90%** chuyện "đúng chất" với đồ gỗ công nghiệp.

Kênh phụ trong `材质编辑`: `基础颜色/漫反射` · `法线` (normal, ảnh xanh tím) · `自发光` ·
`不透明度` (thang **0–100**) · `菲涅尔` (Fresnel — chính thức khuyên **để mặc định, không đụng**) ·
`VR颜色` (lớp màu nhân chồng kiểu Multiply).

> 💡 **Bẫy thang đo hỗn hợp:** `反射光泽度`/`折射光泽度` chạy **0–1**, `不透明度` chạy **0–100**,
> `反射颜色`/`折射颜色` là **màu xám** chứ không phải số. Nói chuyện với đồng nghiệp phải nói rõ
> "thang nào", đừng chỉ hô "để 0.7".

---

## 2. Trọng tâm nghề: melamine/laminate mờ vs acrylic bóng gương

Hai chất liệu này phủ **80% diện tích tủ** trong mọi công trình.

| Tham số | Melamine / Laminate mờ `哑光` | Acrylic bóng gương `高光` |
|---|---|---|
| Vật liệu nền | `V覆膜木纹哑光` hoặc `V饰面木纹哑光` | `亚克力` hoặc dòng `高光` |
| `漫反射` | Ảnh vân gỗ thật, **seamless**, ≥2000px | Màu trơn sạch hoặc vân, không tì vết |
| `反射颜色` | ✅ Quanh mặc định **±10** — ảnh sẫm màu +10, ảnh nhạt −10 | Đẩy sáng (gần trắng) cho phản xạ mạnh |
| `反射光泽度` | ⚠️ Thấp–trung, tham chiếu ngành **0,5–0,7** | ⚠️ **~0,97–0,98** (số từ tutorial chính thức nhưng cho kim loại bóng/kính, loại suy sang acrylic) |
| `凹凸比例` | ✅ **0,03–0,1, mặc định 0,05**. Nguyên văn: *lệch 0,01 thôi hiệu quả đã khác nhiều* | Gần **0** — acrylic phẳng lì, có bump là **sai chất** |
| Kết quả cần đạt | Mặt lì, vân nổi tế vi, phản xạ khuếch tán mềm | Mặt gương, phản chiếu môi trường rõ, cạnh sắc |

> ⚠️ Hãng chỉ công bố chắc chắn **3 điều**: thang 0–1 · quy tắc `反射颜色` ±10 · `凹凸比例` 0,03–0,1
> mặc định 0,05. Mọi số `反射光泽度` theo nhóm đều là **tham chiếu ngành**.

### Ba việc bắt buộc khi làm tủ gỗ công nghiệp

1. **Nhập kích thước THẬT:** khổ ván **1220 × 2440mm**. Công cụ **mặc định 1000mm** — quên sửa là vân
   bị phóng sai tỉ lệ, mắt nghề nhìn ra ngay.
2. **Hướng vân đúng từng cánh** — lỗi bị khách soi nhiều nhất. Sửa bằng `定制纹理刷` đổi `横纹` ⇄ `竖纹`;
   dùng `定制样式刷` (phím **N**) copy từ cánh mẫu đúng sang hàng loạt.
3. **Đồng bộ toàn nhà:** dùng `材质刷` (phím **M**) quét cùng một vật liệu sang mọi mặt tủ —
   **tuyệt đối không gán tay từng mặt.**

**Giả lập vân nổi "sờ được" `同步纹`:** ⚠️ Kujiale **không có tính năng tên này**. Mẹo thay thế (do
người biên soạn đề xuất, không phải quy trình chính thức): dùng **cùng một ảnh vân** làm cả `漫反射`
lẫn ảnh `凹凸` (bản đen-trắng: PS → `图像` → `调整` → `黑白` rồi chỉnh `色阶`), đặt `凹凸比例` **0,05–0,08**
để rãnh lõm trùng đường vân.

---

## 3. Năm nhóm vật liệu còn lại

Mọi số độ bóng là ⚠️ **tham chiếu ngành** (trừ chỗ ghi "chính thức").

| Nhóm | Chọn gì | Số tham chiếu | Mẹo đúng chất |
|---|---|---|---|
| **Gỗ tự nhiên / veneer `木饰面`** | `实木擦黑封闭漆（哑光）` | `反射光泽度` ~**0,6–0,75** ⚠️; `凹凸比例` **0,08–0,15** ⚠️ (cao hơn melamine) | Veneer khác melamine ở **thớ SÂU** — cần đèn xiên mới thấy thớ |
| **Đá** | Dòng đá trong `实时材质`, bản "-4K" | Marble bóng ~**0,9** ⚠️; `岩板` mờ ~0,6–0,7 ⚠️; `水磨石` ~0,5–0,7 ⚠️ | Mờ mà render ra bóng lộn → hạ `反射光泽度` + giảm độ trắng `反射颜色`. Đá "chết" → tăng `环境反射亮度` |
| **Vải** | `实时材质-布艺`, `窗纱` | Nỉ: `反射光泽度` rất thấp, `反射颜色` gần đen | **Vải mà bóng lên là sai ngay.** Voan **đừng tự chế** kênh trong suốt — preset `窗纱` ổn định hơn |
| **Kim loại** | `实时材质-金属` | Inox bóng ~0,95 ⚠️; xước/champagne ~**0,97** (tutorial chính thức) kèm ảnh `凹凸` vân xước **đúng chiều**; quá gương thì hạ về 0,7–0,85 ⚠️; đen mờ ~0,3–0,5 ⚠️ | Không có thanh Metallic → kim loại = `反射颜色` **NHUỘM MÀU** + độ bóng cao |
| **Kính / gương** | Preset `白玻璃`, `磨砂玻璃`, `镜子` | Kính mờ: `折射光泽度` **0,7 (chính thức ✅)** — càng cao càng trong | Kính đen kịt/méo → `折射率` thấp, model phải dựng **2 mặt**; ⚠️ kính để **1 lớp**, tránh phản xạ đôi. Chiết suất kính ~**1,5–1,6** ⚠️. Gương không phản chiếu → bật `镜面真实反射` |
| **Sơn / giấy dán / gạch** | `乳胶漆（哑光）`; `墙纸`; gạch dùng **`硬装铺贴工具`** chứ không phải `材质编辑` | Gạch: nhập đúng cỡ viên; mạch `砖缝` mặc định 1mm, 600×600 ~3mm ⚠️ | Sơn tường **gần như không phản xạ** — tường bóng là sai |

---

## 4. Lọc vật liệu "xịn" trong thư viện

Thư viện có hàng triệu vật liệu, **phần lớn là đồ cũ chỉ có một ảnh màu duy nhất** — gán lên là bệt,
không cứu được. Bốn dấu hiệu đồ tốt:

1. **Dòng `实时材质` / `实时材质通用库`** — đủ bộ map `漫反射` + `反射` + `光泽度` + `凹凸`. **Ưu tiên số 1.**
2. **Hậu tố "-4K" trong tên** — vân nét + đủ map. Tên gỗ luôn ghi rõ `哑光` (mờ) / `高光` (bóng).
3. **Nhãn `精选`** — hàng đã duyệt chất lượng.
4. **`品牌馆`** — vật liệu chính hãng, tin cậy cao nhất.

**Kiểm tra cuối trước khi gán:** mở `材质详情` → xem có đủ map `反射` + `凹凸` không.
Chỉ có 1 map màu → **bỏ, tìm bản khác.**

💡 Tìm được vật liệu ưng ý, copy **`酷口令`** (mã lệnh chia sẻ) gửi nhóm — đồng nghiệp dán mã là lấy
được đúng vật liệu đó, khỏi mô tả bằng lời.

---

## 5. Chuẩn upload texture

**Chuẩn an toàn dùng chung: JPG, hệ màu RGB, cạnh 2000–5000px, ≤2MB.**
(Các luồng upload có giới hạn khác nhau — 2MB vs 5MB tuỳ đường vào. C7 ghi chuẩn chính thức
≥2000×2000px, ≤5MB.) **TGA không được tài liệu chính thức nhắc — đừng dùng.**

Ba điều kiện chất lượng **chính thức**:
1. **Seamless / `四方连续`** — không lộ đường ghép. Kiểm trong PS: `滤镜` → `其他` → `位移`.
2. **KHÔNG có sẵn bóng/vệt sáng** trong ảnh — render sẽ tự đánh sáng, ảnh có sẵn bóng là chồng sáng giả.
3. **Đủ bộ map**, không chỉ 1 ảnh màu.

### Công thức kích thước — chỉ một dòng

> **Kích thước nhập vào Kujiale = kích thước THẬT của tấm vật liệu lúc chụp ảnh, KHÔNG phải kích thước
> ảnh tính bằng pixel.**

- Ảnh chụp một viên gạch 800×800mm → nhập **800×800**.
- Ảnh là mảng 2×2 viên → nhập **gấp đôi**.
- Ảnh trên mạng không rõ khổ → ước theo mốc thật: **bề rộng một thớ gỗ khoảng 150–220mm**.

### Bảng khổ thật vật liệu Việt Nam

| Vật liệu | Khổ thật phổ biến |
|---|---|
| Ván MFC / MDF / HDF | **1220 × 2440 mm** (để mặc định 1000mm là **sai**) |
| Ván vượt khổ | 1830 × 2440; MDF dài 1220 × 2745 |
| Laminate (HPL) | **1220 × 2440** |
| Acrylic | **1220 × 2440** (cốt MDF 17mm) |
| Sàn gỗ công nghiệp | bản nhỏ 100–130; nhỡ 140–160; **to 190–220**; dài 1200–1300. Phổ biến ~**192 × 1205** (An Cường ~193–202 × 1192) |
| Sàn nhựa SPC | rộng ~180–228, dài ~1220 |
| Đá thạch anh / nung kết | **3200 × 1600** khổ đại (dùng cho đối hoa mặt bếp) |
| Gạch ốp lát | 600×600 · 800×800 · 600×1200 · 750×1500 |
| Giấy dán tường | cuộn 0,53 × 10 m; khổ rộng Hàn 1,06 × 15,5 m |

### Hướng vân — quy ước nghề

| Bộ phận | Hướng vân |
|---|---|
| Cánh tủ đứng, cửa | **Dọc** — cảm giác cao, thanh |
| Hộc kéo, mặt bàn, kệ ngang | **Ngang** — theo chiều dài |
| Sàn gỗ | Cạnh dài ván **song song hướng nắng chính** từ cửa sổ, hoặc song song cạnh dài phòng |
| Cụm tủ liền dải | Toàn cụm chạy vân **liền một hướng** |

**Sai tỉ lệ, mắt nghề bắt thế nào:** cánh tủ rộng 400mm mà chỉ chứa nửa thớ vân → trông như gỗ khổng
lồ, so với tay nắm là lộ. Viên gạch 800mm để thành 400mm → sàn trông vụn, số mạch gấp đôi bình thường,
so với chiều cao cửa 2100mm là thấy sai.

---

## 6. Dấu vết sử dụng — làm bề mặt hết "nhựa"

⚠️ Các số dưới là khuyến nghị thực hành, **chưa có chuẩn ngành**.

| Yếu tố | Ảnh **bán hàng** | Ảnh nghệ thuật |
|---|---|---|
| Độ mờ lớp dấu vết trên kênh bóng | **8–20%** ⚠️ | 25–50% ⚠️ |
| Độ mờ lớp bẩn trên kênh màu | **5–12%** ⚠️ | 15–30% ⚠️ |
| Số điểm dấu vết mỗi khung hình | **2–3** | 4–6 |
| Phần trăm diện tích bị ảnh hưởng | dưới **15%** ⚠️ | tuỳ |
| `凹凸比例` cho xước | **0,02–0,05** | 0,05–0,1 |

> 📌 **Ngưỡng hỏng:** khách nhận ra dấu vết mà **không cần nhìn kỹ** → đã quá tay.
> **Dấu vết chỉ nên "CẢM THẤY", không nên "NHÌN THẤY"** — chỉ hiện rõ khi ánh sáng xiên quét qua.

**Đặt ở đâu cho đáng công:**
1. **Vùng gần máy ảnh** — nơi mắt soi kỹ nhất. Một hai điểm ở đây đủ "bán" cả khung.
2. **Vùng nắng xiên quét ngang** — dấu vết chỉ hiện dưới ánh sáng này nên đặt đúng chỗ mới ăn tiền.
3. **Điểm mắt nhìn đầu tiên** — mặt bàn bếp trung tâm, mặt tủ chính.
4. **Bỏ hẳn** vùng xa, vùng tối, vùng khuất. Tốn công mà vô ích.

**Tuyệt đối KHÔNG thêm dấu vết:** trần nhà và tường phòng khách · mặt phô sản phẩm chính trong ảnh cận ·
bề mặt bán điểm nhấn sang (đá cao cấp, acrylic bóng gương — chỉ được phá bóng cực nhẹ).

**Quy tắc màu:** ⚠️ dùng **~RGB 180,180,180 làm màu trắng, không vượt 200**. Trần "trắng", tủ "trắng",
chăn ga "trắng" đều là **xám rất nhạt**. Đồ đen thực tế là **xám rất đậm**. Nhập màu thuần 255 hoặc 0
là tự tay phá ảnh. (C0 nêu ngưỡng ~190–220/255 — cùng một tinh thần, hai nguồn hơi khác dải.)

---

## 7. Chẩn đoán 4 bước: "bệt do đèn hay do map?"

Render ra bệt/nhựa/xám, **đừng vội đổ cho texture** rồi ngồi thay map cả buổi.
Thứ tự này xếp theo **xác suất thủ phạm từ cao xuống thấp**:

| Bước | Kiểm tra | Nếu trúng → sửa |
|---|---|---|
| **1. Đèn có tạt ngang không?** *(thủ phạm số 1)* | Cảnh có `灯带`/`射灯` chiếu **xiên** vào mặt tủ không, hay toàn sáng phẳng đều? | Thêm 1 dải đèn hắt **dọc cánh tủ** hoặc `射灯` xiên **30–45°** → render nháp lại. **Đa số case dừng ở đây** |
| **2. Render bằng gì?** | Đang dùng dòng `极速`? `渲染复杂材质` đang tắt? | Chuyển `离线模式` + template chất lượng cao, bật `渲染复杂材质` |
| **3. Phản xạ môi trường đủ chưa?** | Mặt bóng không phản chiếu gì, nhìn "chết"? | Tăng `环境反射亮度` theo nấc **2 → 6 → 12**, dừng trước khi cháy |
| **4. Map có đủ kênh không?** *(lúc này mới là lỗi map)* | Mở `材质详情`: chỉ có 1 ảnh màu? | Thay bằng bản `实时材质` "-4K", hoặc tự bổ sung ảnh `凹凸` + đặt `凹凸比例` 0,05 |

> 📌 Kết luận từ tài liệu chính thức: **đa số ảnh "bệt" là do ánh sáng và thiết lập render, KHÔNG phải
> do map.** Chỉ khi vật liệu đúng là "một ảnh màu trần trụi" mới được kết tội map.

**Kiến thức cốt lõi Kujiale khẳng định:** *hiệu ứng `凹凸` phụ thuộc ánh sáng.* Cùng một vật liệu vân
nổi, sang cảnh đèn yếu thì "hiệu ứng lồi lõm **biến mất hoàn toàn**" — vì bump chỉ hiện khi có bóng đổ
vào rãnh vân.

**Muốn vân gỗ nổi cần ánh sáng tạt ngang `掠射光`:**
- `灯带` kéo **dọc cánh tủ** — nguồn gần song song mặt ván, bóng đổ vào từng rãnh vân → melamine
  "hiện vân" đẹp nhất.
- `射灯`/`筒灯` — chính thức khuyên dùng để "thể hiện hiệu quả lồi lõm".
- **Ánh đèn phẳng, đều, chiếu vuông góc = kẻ thù của vân.** Phòng sáng đều tăm tắp thì tủ nào cũng bệt.

💡 Muốn soi màu vân **trung thực** khi duyệt vật liệu: dùng đèn trắng **~4000–4500K**. Đèn vàng ấm sẽ
nhuộm vàng cả vân, dễ chọn sai tông ván.
⚠️ Kujiale **không có** thanh cân bằng trắng hậu kỳ riêng trong UI render công khai — tông nóng/lạnh
chỉnh bằng `色温` của **từng đèn**.

⚠️ **Không duyệt chất liệu bằng dòng `极速`** — dòng này không render được vật liệu phức tạp
(displacement/3S), vân sẽ "mất tích" oan. Soi chất liệu = `离线模式` + template dòng `室内白天/夜晚`.
