# C5. Vật liệu — đúng chất từng bề mặt

> **Sau chương này bạn làm được:**
> - Chỉnh vật liệu bằng hệ 4 kênh của Kujiale (反射颜色 / 反射光泽度 / 凹凸比例 / 折射) mà không lạc sang tư duy Metallic/Roughness
> - Làm đúng chất 2 vật liệu nuôi sống công ty: melamine/laminate mờ và acrylic bóng gương
> - Lọc được vật liệu "xịn" trong thư viện: 实时材质通用库, nhãn 精选, 品牌馆, hậu tố "-4K"
> - Chẩn đoán 4 bước "ảnh bệt do đèn hay do map" — không đổ oan cho texture
> - Tự dựng bảng mẫu 5 mốc độ bóng làm chuẩn nội bộ công ty

---

## 5.1. Quên PBR chuẩn đi — Kujiale dùng hệ 4 kênh riêng

Nếu bạn từng học V-Ray, Blender hay bất kỳ tài liệu PBR nào, hãy tạm cất tư duy đó: **Kujiale KHÔNG có thanh Metallic, KHÔNG có thanh Roughness.** Ai vào tìm "kéo Roughness lên cho mờ" sẽ chỉnh sai từ đầu. Ở đây, chất của một bề mặt được quyết định bằng 4 cần gạt:

| Kênh | Nó điều khiển gì | Thang đo |
|---|---|---|
| **反射颜色** (màu phản xạ) | **Cường độ** phản xạ. Quy tắc chính thức: đen = không phản xạ, trắng = phản xạ toàn phần | Màu xám đen↔trắng (KHÔNG phải con số) |
| **反射光泽度** (độ bóng phản xạ) | **Độ nét/mờ** của phản xạ = cảm giác bóng hay lì. Chính thức: "0 = bề mặt nhám, 1 = rất bóng" | Số 0–1 |
| **凹凸比例** (tỉ lệ lồi lõm — bump) | Vân nổi tế vi trên bề mặt, dùng ảnh đen-trắng: trắng lồi, đen lõm | Số thực, xem 5.4 |
| **折射** (khúc xạ: 折射颜色 + 折射光泽度) | Độ trong suốt + độ mờ của vật trong suốt (kính, acrylic trong) | Màu + số 0–1 |

Dịch tư duy nhanh: **Roughness của thế giới ngoài ≈ nghịch đảo của 反射光泽度; Metallic ≈ 反射颜色 đẩy sáng lên + nhuộm màu kim loại.** Ba cần gạt đầu quyết định 90% chuyện "đúng chất" với đồ gỗ công nghiệp.

Các kênh phụ sẽ gặp trong 材质编辑 (trình chỉnh vật liệu): 基础颜色/漫反射 (màu gốc + ảnh vân), 法线 (normal — bump nâng cao, ảnh xanh tím), 自发光 (tự phát sáng — LED, màn hình), 不透明度 (độ mờ đục, thang 0–100), 菲涅尔 (Fresnel — chính thức khuyên **để mặc định, không đụng**), VR颜色 (lớp màu nhân chồng kiểu Multiply để chỉnh tông không phá ảnh gốc).

> 💡 **Bẫy thang đo hỗn hợp:** UI trộn ba kiểu thang — 反射光泽度/折射光泽度 chạy 0–1, 不透明度 chạy 0–100, còn 反射颜色/折射颜色 là **màu xám** chứ không phải số. Trao đổi với đồng nghiệp phải nói rõ "thang nào", đừng chỉ hô "để 0.7".

Mở app lần đầu học chương này: mở 材质编辑 một vật liệu gỗ bất kỳ, đối chiếu đủ 4 kênh trên → điền **Sổ ghi nhận mục C1 (Phụ lục B)**.

## 5.2. Hai đường vào chỉnh vật liệu

| Tình huống | Công cụ | Đường vào |
|---|---|---|
| Đổi/chỉnh nhanh 1 bề mặt trong phương án (dùng hằng ngày) | 材质替换 (thay vật liệu) → 材质编辑 | Chọn bề mặt → 材质替换 → chọn vật liệu → 材质编辑 |
| Tạo vật liệu chuẩn công ty từ texture riêng (đủ bộ map, làm 1 lần dùng mãi) | 实时材质制作工具 (công cụ tạo vật liệu thời gian thực) | 商家后台 (hậu trường doanh nghiệp) → 企业商品库 → 创建素材 → 贴图 → 实时材质制作工具 |

Theo tài liệu chính thức, thư viện vật liệu, công cụ lát gạch, sơn và tủ định chế **đều đã dùng chung** hệ 实时材质 (vật liệu thời gian thực) — nghĩa là bộ 4 kênh ở mục 5.1 áp dụng cho mọi chỗ, học một lần dùng khắp nơi.

Lưu ý theo UI mới từ 8/2025: chế độ 实时轻量 **không cho thay vật liệu** — muốn vừa xem trước vừa thử chất liệu thì vào 实时专业 hoặc 离线模式 (xem Chương 2).

## 5.3. Lọc vật liệu "xịn" trong thư viện — đừng nhặt bừa

Thư viện Kujiale hàng triệu vật liệu, phần lớn là đồ cũ chỉ có **một ảnh màu duy nhất** — gán lên là bệt, không cứu được. Bốn dấu hiệu nhận diện đồ tốt:

1. **Dòng 实时材质 / 实时材质通用库 (thư viện vật liệu thời gian thực dùng chung):** đủ bộ map 漫反射 + 反射 + 光泽度 + 凹凸, cho chỉnh sửa từng kênh. Đây là dòng ưu tiên số 1 cho render nội thất.
2. **Hậu tố "-4K" trong tên:** ví dụ mẫu chính thức "克拉洛胡桃-哑光-4K" (óc chó Claro mờ), "橡木-高光-4K" (sồi bóng), "大理石-4K" (marble). Bản 4K = vân nét + đủ map. Chú ý tên vật liệu gỗ luôn ghi rõ **哑光 (mờ) / 高光 (bóng)** — chọn đúng ngay từ tên, đỡ chỉnh.
3. **Nhãn 精选 (chọn lọc):** góc tem trong thư viện, hàng đã được duyệt chất lượng.
4. **品牌馆 (gian thương hiệu):** vật liệu chính hãng từ nhà sản xuất — độ tin cậy cao nhất.

**Thao tác kiểm tra cuối trước khi gán:** mở **材质详情 (chi tiết vật liệu)** → xem có đủ map 反射 + 凹凸 không. Chỉ có 1 map màu → bỏ, tìm bản khác.

> 💡 Tìm được vật liệu ưng ý, copy **酷口令** (mã lệnh chia sẻ) gửi nhóm Zalo/WeChat công ty — đồng nghiệp dán mã là lấy được đúng vật liệu đó, khỏi mô tả bằng lời.

Vị trí chính xác của các bộ lọc này trong UI hiện tại → xác nhận theo **Sổ ghi nhận mục C3**.

## 5.4. Trọng tâm nghề: melamine/laminate mờ vs acrylic bóng gương

Đây là mục quan trọng nhất chương — hai chất liệu này phủ 80% diện tích tủ trong mọi công trình của công ty.

| Tham số | Melamine / Laminate mờ (哑光) | Acrylic bóng gương (高光) |
|---|---|---|
| Vật liệu nền nên chọn | V覆膜木纹哑光 hoặc V饰面木纹哑光 (gỗ phủ phim/phủ mặt mờ) | 亚克力 (acrylic) hoặc dòng 高光 |
| 漫反射 | Ảnh vân gỗ thật, seamless, 2000px trở lên | Màu trơn sạch hoặc vân, không tì vết |
| 反射颜色 | Quy tắc chính thức: quanh mặc định **±10** — ảnh sẫm màu +10, ảnh nhạt −10 | Đẩy sáng (gần trắng) cho phản xạ mạnh |
| 反射光泽度 | ⚠️ Thấp–trung, tham chiếu ngành **0.5–0.7** (không có số chính thức) | ⚠️ **~0.97–0.98** — số từ tutorial chính thức nhưng cho kim loại bóng/kính, loại suy sang acrylic |
| 凹凸比例 | **0.03–0.1, mặc định 0.05** (số chính thức). Nguyên văn: lệch 0.01 thôi hiệu quả đã khác nhiều | Gần **0** — acrylic phẳng lì, có bump là sai chất |
| Kết quả cần đạt | Mặt lì, vân nổi tế vi, phản xạ khuếch tán mềm | Mặt gương, phản chiếu môi trường rõ, cạnh sắc |

> ⚠️ Các số 反射光泽度 theo nhóm trong chương này (0.5–0.7 melamine, 0.97 acrylic...) là **tham chiếu ngành, KHÔNG phải số chính thức của Kujiale** — hãng chỉ công bố chắc chắn 3 điều: thang 0–1, quy tắc 反射颜色 ±10, và 凹凸比例 0.03–0.1 mặc định 0.05. **Pilot nội bộ sẽ render bảng mẫu (bài thực hành cuối chương) để lập bảng số chuẩn của công ty** — khi bảng đó có, dùng số công ty, không dùng số sách.

**Ba việc bắt buộc khi làm tủ gỗ công nghiệp:**

1. **Nhập kích thước thật (尺寸):** khi upload/chỉnh vân, nhập đúng khổ ván **1220 × 2440mm** theo ô "dài ngang × rộng dọc". Công cụ mặc định để 1000mm — quên sửa là vân bị phóng sai tỉ lệ, mắt nghề nhìn ra ngay.
2. **Hướng vân đúng từng cánh:** vân dọc/ngang sai trên một cánh tủ là lỗi bị khách soi nhiều nhất. Sửa bằng **定制纹理刷 (chổi vân tủ định chế)** đổi 横纹 (vân ngang) ⇄ 竖纹 (vân dọc); dùng **定制样式刷 (chổi kiểu — phím N)** copy từ cánh mẫu đúng sang hàng loạt.
3. **Đồng bộ toàn nhà:** dùng **材质刷 (chổi vật liệu — phím M)** quét cùng một vật liệu sang mọi mặt tủ để thống nhất tông — tuyệt đối không gán tay từng mặt.

**Giả lập vân nổi "sờ được" (同步纹):** melamine cao cấp ngoài đời có vân sờ nổi trùng khớp vân in. ⚠️ Kujiale **không có tính năng tên này** — mẹo thay thế (do người biên soạn đề xuất, không phải quy trình chính thức): dùng **cùng một ảnh vân** làm cả 漫反射 lẫn ảnh 凹凸 (bản đen-trắng, làm trong Photoshop: 图像 → 调整 → 黑白 rồi chỉnh 色阶), đặt 凹凸比例 0.05–0.08 để rãnh lõm trùng đường vân.

**Chuẩn upload texture công ty:** các luồng upload có giới hạn khác nhau (2MB vs 5MB tùy đường vào) — chuẩn an toàn dùng chung: **JPG, hệ màu RGB, cạnh 2000–5000px, ≤2MB**. TGA không được tài liệu chính thức nhắc — đừng dùng. Ảnh phải đạt 3 điều kiện chất lượng chính thức: (1) **seamless/四方连续** — không lộ đường ghép (kiểm trong Photoshop: 滤镜 → 其他 → 位移); (2) **không có sẵn bóng/vệt sáng** trong ảnh — render sẽ tự đánh sáng, ảnh có sẵn bóng là chồng sáng giả; (3) đủ bộ map chứ không chỉ 1 ảnh màu. Giới hạn dung lượng thật trên UI hiện tại → điền **Sổ ghi nhận mục C2**.

## 5.5. Năm nhóm vật liệu còn lại — bảng tra nhanh

Mọi số độ bóng dưới đây là ⚠️ tham chiếu ngành (trừ chỗ ghi "chính thức") — chờ bảng chuẩn nội bộ từ pilot.

| Nhóm | Chọn gì / kênh chính | Số tham chiếu | Mẹo đúng chất |
|---|---|---|---|
| **Gỗ tự nhiên / veneer (木饰面)** | 实木擦黑封闭漆（哑光）hoặc 木饰面 | 反射光泽度 ~0.6–0.75 ⚠️; 凹凸比例 **0.08–0.15** ⚠️ (cao hơn melamine) | Veneer khác melamine ở thớ SÂU — cần đèn xiên mới thấy thớ |
| **Đá: marble bóng / đá thiêu kết / terrazzo** | Dòng đá trong 实时材质, bản "-4K" | Marble bóng ~0.9 ⚠️; 岩板 mờ ~0.6–0.7 ⚠️; 水磨石 ~0.5–0.7 ⚠️ | Muốn mờ mà render ra bóng lộn → hạ 反射光泽度 + giảm độ trắng 反射颜色. Đá "chết" không phản xạ → tăng 环境反射亮度 (mục 5.6) |
| **Vải: nỉ sofa / voan / chăn ga** | 实时材质-布艺 (vải), 窗纱 (voan) | Nỉ: 反射光泽度 rất thấp, 反射颜色 gần đen; voan: dùng preset 窗纱 + chỉnh 不透明度 | Vải mà bóng lên là sai ngay. Voan đừng tự chế kênh trong suốt — preset 窗纱 ổn định hơn |
| **Kim loại: inox, champagne, đen mờ** | 实时材质-金属 | Inox bóng ~0.95 ⚠️; xước/champagne ~0.97 (tutorial chính thức) kèm ảnh 凹凸 vân xước đúng chiều — trông quá gương thì hạ về 0.7–0.85 ⚠️; đen mờ ~0.3–0.5 ⚠️ | Không có thanh Metallic → kim loại = 反射颜色 **nhuộm màu** (vàng champagne, xám đen) + độ bóng cao |
| **Kính / gương** | Preset 白玻璃 (kính trong), 磨砂玻璃 (kính mờ), 镜子 (gương) | Kính mờ: 折射光泽度 **0.7 (chính thức)** — càng cao càng trong, càng thấp càng mờ | Kính đen kịt/méo → đổi kính 折射率 (chiết suất) thấp, model phải dựng 2 mặt. Gương không phản chiếu → bật 镜面真实反射 (mục 5.6) |
| **Sơn tường / giấy dán / gạch ốp** | 乳胶漆（哑光）(sơn nước mờ); 墙纸 (giấy dán); gạch dùng **硬装铺贴工具** (công cụ lát phần thô) chứ không phải 材质编辑 | Gạch: nhập đúng cỡ viên (300×600, 600×600, 800×800...); mạch 砖缝 mặc định phổ thông 1mm, 600×600 ~3mm ⚠️ | Sơn tường gần như không phản xạ — tường bóng là sai. Gạch dùng 材质刷 (M) quét sang các tường khác cho thẳng mạch |

## 5.6. Vật liệu × ánh sáng — vì sao map chuẩn vẫn ra bệt

> ⚠️ **CẢNH BÁO phiên bản:** tài liệu vật liệu cũ (kể cả nguồn của chương này) hay dặn "duyệt chất liệu bằng template 写实". Từ 8–10/2025 Kujiale đã **gộp UI render về 3 chế độ và gỡ nhiều template cũ** — dòng hiện hành chỉ còn 极速3.0/3.1, 室内白天/夜晚 (2.1–3.1), 实时白天/夜晚. Quy tắc chuyển đổi của sách: **soi chất liệu = 离线模式 + template dòng 室内白天/夜晚** (dòng chất lượng cao hiện hành); ⚠️ tên template chất lượng cao trên UI của bạn có thể khác — chụp lại theo **Sổ ghi nhận mục B3**. Tuyệt đối **không duyệt chất liệu bằng dòng 极速** — dòng này không render được vật liệu phức tạp (displacement/3S), vân sẽ "mất tích" oan.

Kiến thức cốt lõi được chính Kujiale khẳng định: **hiệu ứng 凹凸 phụ thuộc ánh sáng.** Nguyên văn tài liệu chính thức: cùng một vật liệu vân nổi, sang cảnh đèn yếu thì "hiệu ứng lồi lõm biến mất hoàn toàn" — vì bump chỉ hiện khi có bóng đổ vào rãnh vân. Đây chính là lý do số 1 của "material chuẩn mà render ra bệt".

**Muốn vân gỗ nổi, cần ánh sáng tạt ngang (掠射光):**

- **灯带 (đèn hắt khe)** kéo dọc cánh tủ — nguồn sáng gần song song mặt ván, bóng đổ vào từng rãnh vân → melamine "hiện vân" đẹp nhất. Số đèn xem Chương 4.
- **射灯 / 筒灯 (đèn rọi / đèn âm trần)** — chính thức khuyên dùng để "thể hiện hiệu quả lồi lõm", tạo tương phản sáng tối cục bộ.
- Ánh đèn phẳng, đều, chiếu vuông góc = kẻ thù của vân. Phòng sáng đều tăm tắp thì tủ nào cũng bệt.

**Các công tắc 高级设置 (cài đặt nâng cao) ảnh hưởng trực tiếp chất liệu:**

| Công tắc | Khi nào đụng |
|---|---|
| 渲染复杂材质 (render vật liệu phức tạp) | **Bật** khi cảnh có displacement/3S (đá vân sâu, voan xuyên sáng). Tắt = các vật liệu này render sai |
| 镜面真实反射 (phản xạ gương thật) | Mặc định TẮT. Gương trong ảnh "chết đen" không phản chiếu → bật |
| 影响高光 (ảnh hưởng đốm sáng) | Mặt bàn/đá lỗ chỗ đốm trắng của đèn → tắt để bỏ đốm |
| 溢色修正 (sửa loang màu) | Sàn gỗ/thảm màu mạnh hắt màu lên tủ trắng, trần → bật |
| 环境阻光 (che sáng môi trường — AO) | Mặc định bật — giữ nguyên, giúp khe vân và góc cạnh nét khối hơn |

**环境反射亮度 (độ sáng phản xạ môi trường) — cứu tinh của mặt bóng "chết":** nằm ở mục 外景 (ngoại cảnh) trong giao diện render. Số chính thức minh họa: **2 → 6 → 12** tăng dần độ phản chiếu môi trường lên mặt vật liệu. Acrylic, đá, kim loại trông "chết" dù độ bóng đã cao → tăng dần thanh này; nhưng quá tay sẽ cháy sáng cục bộ.

**Về màu ấm/lạnh của gỗ:** Kujiale ⚠️ không có thanh cân bằng trắng hậu kỳ riêng trong UI render công khai — tông nóng/lạnh chỉnh bằng **色温 (nhiệt độ màu) của từng đèn**. Muốn soi màu vân trung thực khi duyệt vật liệu: dùng đèn trắng ~4000–4500K; đèn vàng ấm sẽ nhuộm vàng cả vân, dễ chọn sai tông ván.

## 5.7. Chẩn đoán 4 bước: "bệt do đèn hay do map?"

Render ra bệt/nhựa/xám, đừng vội đổ cho texture rồi ngồi thay map cả buổi. Chạy đúng thứ tự 4 bước — thứ tự này xếp theo xác suất thủ phạm từ cao xuống thấp:

| Bước | Kiểm tra | Nếu trúng → sửa |
|---|---|---|
| **1. Đèn có tạt ngang không?** (thủ phạm số 1) | Cảnh có 灯带/射灯 chiếu xiên vào mặt tủ không, hay toàn sáng phẳng đều? | Thêm 1 dải đèn hắt dọc cánh tủ hoặc 射灯 xiên → render nháp lại. Đa số case dừng ở đây |
| **2. Render bằng gì?** | Đang dùng dòng 极速? 渲染复杂材质 đang tắt? | Chuyển 离线模式 + template chất lượng cao, bật 渲染复杂材质 |
| **3. Phản xạ môi trường đủ chưa?** | Mặt bóng (acrylic/đá/kim loại) không phản chiếu gì, nhìn "chết"? | Tăng 环境反射亮度 theo nấc 2 → 6 → 12, dừng trước khi cháy |
| **4. Map có đủ kênh không?** (lúc này mới là lỗi map) | Mở 材质详情: chỉ có 1 ảnh màu, không 反射 không 凹凸? | Thay bằng bản 实时材质 "-4K", hoặc tự bổ sung ảnh 凹凸 + đặt 凹凸比例 0.05 |

> 📌 Kết luận từ tài liệu chính thức: đa số ảnh "bệt" là do **ánh sáng và thiết lập render**, không phải do map. Chỉ khi vật liệu đúng là "một ảnh màu trần trụi" mới được kết tội map.

---

## Thực hành

### Bài 1 — Bảng mẫu 5 mốc độ bóng (bài quan trọng nhất chương)

> 💡 **Không phải bài phải xong trước khi làm việc thật.** Cứ nhận việc, cứ render cho khách. Nhưng khi nào có một buổi rảnh thì làm bài này — nó cho công ty **bộ số riêng**, thay được toàn bộ số ⚠️ tham chiếu ngành trong chương. Làm một lần dùng mãi.

1. Mở căn hộ mẫu, dựng 5 tấm ván đứng cạnh nhau (mỗi tấm ~600 × 2000mm, cách nhau 100mm) trong một phòng trống.
2. Gán cả 5 tấm **cùng một vật liệu melamine** — ưu tiên bản "哑光-4K" trong 实时材质通用库, hoặc texture vân công ty tự upload (đúng chuẩn mục 5.4, nhập 尺寸 1220×2440).
3. Vào 材质编辑 từng tấm, đặt 反射光泽度 lần lượt: **0.5 / 0.6 / 0.7 / 0.85 / 0.97**. Giữ 凹凸比例 = 0.05 cho cả 5 tấm, các kênh khác giữ nguyên.
4. Đặt 1 dải 灯带 chạy dọc phía trên 5 tấm (ánh sáng tạt ngang) + 1 射灯 chiếu xiên 45°. Đèn trắng 4000–4500K để không nhuộm màu vân.
5. Render **离线模式**, template chất lượng cao (dòng 室内白天), bật 渲染复杂材质, độ phân giải thấp nhất cho nhanh.
6. Mở ảnh render cạnh **tấm mẫu melamine thật + tấm acrylic thật của công ty** (mượn ở showroom). Ghi lại: mốc nào giống melamine thật nhất, mốc nào bắt đầu "nhựa hóa", mốc nào khớp acrylic.
7. Gửi ảnh và kết luận cho quản lý → vào bảng số chuẩn nội bộ. Nhân tiện ghi luôn mục C1 và C2 vào **Sổ ghi nhận (Phụ lục B)**.

**Tiêu chí đạt:** che nhãn số, nhìn ảnh render gọi đúng tên từng mốc gloss (tự kiểm tra kiểu "thi mù"); chốt được 1 con số đề xuất cho melamine mờ và 1 cho acrylic của công ty, kèm lý do một câu.

### Bài 2 — Chạy chẩn đoán 4 bước trên ảnh bệt thật

1. Lấy 1 cảnh tủ áo/tủ bếp bạn từng render mà tự thấy "bệt, giả".
2. Chạy lần lượt 4 bước ở mục 5.7, mỗi bước sửa xong render nháp 1 ảnh, đặt tên ảnh theo bước (b1-den, b2-template...).
3. So 4 ảnh: bước nào tạo khác biệt lớn nhất → đó là thủ phạm của cảnh này.

**Tiêu chí đạt:** ảnh cuối vân gỗ nhìn rõ nổi ở khu vực gần đèn; nói được bằng 1 câu "cảnh này bệt do X".

## Checklist tự chấm

- [ ] Nói vo được 4 kênh chính của vật liệu Kujiale + kênh nào điều khiển cường độ, kênh nào điều khiển độ nét phản xạ
- [ ] Biết 3 số chính thức duy nhất: 凹凸比例 0.03–0.1 (mặc định 0.05), thang gloss 0–1, quy tắc 反射颜色 ±10
- [ ] Nhận diện được vật liệu xịn qua 4 dấu hiệu: 实时材质通用库 / "-4K" / 精选 / 品牌馆 — và biết mở 材质详情 kiểm map
- [ ] Tủ melamine trong phương án: đúng khổ vân 1220×2440, đúng hướng vân từng cánh, đồng bộ bằng 材质刷
- [ ] Phân biệt được cách xử lý melamine mờ (có bump nhẹ) vs acrylic (bóng cao, không bump)
- [ ] Thuộc thứ tự chẩn đoán bệt: đèn → template/công tắc → 环境反射亮度 → map
- [ ] Đã render bảng mẫu 5 mốc độ bóng (làm khi có buổi rảnh — không phải điều kiện để bắt đầu làm việc thật)
- [ ] Đã điền Sổ ghi nhận mục C1, C2, C3

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Vân gỗ bị kéo giãn, to bất thường | 尺寸 sai (còn để mặc định 1000mm) hoặc scale ngang/dọc lệch | 材质编辑 → nhập đúng khổ 1220×2440; chỉnh 横向/纵向缩放 |
| Vân lặp ô rõ rệt trên mảng tủ lớn | Ảnh không seamless | Kiểm bằng Photoshop 滤镜→其他→位移; xử lý seamless hoặc dùng phần mềm ngoài (PixPlant) phá lặp |
| Mặt tủ như nhựa (塑料感) | Gloss sai chất + thiếu bump + đèn phẳng | Hạ 反射光泽度 về dải mờ; 凹凸比例 0.05; thêm đèn tạt ngang |
| Vân như dán đề can nổi lên | Thiếu bump/phản xạ, hoặc ảnh texture có sẵn bóng sáng | Thêm 凹凸 nhẹ; thay ảnh "không có sẵn bóng" |
| Vân gỗ sai chiều trên vài cánh tủ | Cánh đặt 横纹/竖纹 sai | 定制纹理刷 đổi chiều; 定制样式刷 (N) copy từ cánh đúng |
| Phản xạ cháy trắng trên mặt bóng | 环境反射亮度 quá cao; 影响高光 bật với đèn mạnh | Hạ 环境反射亮度; tắt 影响高光; hạ đèn |
| Gương không phản chiếu đồ đạc | 镜面真实反射 mặc định tắt | Bật trong 高级设置 |
| Kính đen kịt / méo hình cầu | Chiết suất quá cao; model kính 1 mặt | Đổi kính 折射率 thấp; dựng kính 2 mặt |
| Cùng vật liệu, đổi cảnh thì mất vân | Bump nhạy với đèn — cảnh mới đèn yếu/phẳng | Thêm 射灯/灯带 tạt ngang; đây là hành vi bình thường, không phải hỏng vật liệu |
| Cùng vật liệu, đổi góc camera thì đổi màu | Phản xạ môi trường + hiệu ứng Fresnel theo góc nhìn | Hành vi vật lý bình thường ("vật liệu tắc kè") — không cần sửa |

## Nguồn số liệu

**Chính thức (help center / ask kujiale.com, có mã bài):**
- Bộ kênh 材质编辑: bài 3FO4K4WP0MUJ (cập nhật 2025-06-25); thang gloss 0–1, quy tắc ±10, 凹凸比例 0.05 (0.03–0.1): bài 3FO4K8ET1FL0
- Chuẩn upload texture: 3FO4K4VPE026 (jpg/png ≤5000px ≤5MB RGB) + 3FO4K4WFSI07 (sổ tay chuẩn: ≥2000px, seamless, không bóng sẵn) — các luồng khác giới hạn khác nhau, chuẩn an toàn của sách lấy mức chặt nhất
- Công tắc 高级设置: 3FO4K4VWISQV (2025-01-10); 环境反射亮度 minh họa 2/6/12: 3FO4K4VQ5WY8; bump phụ thuộc đèn: 3FO4K4VPCD7O
- Kính mờ 折射光泽度 0.7: 3FO4K4WP0G6H; chỉnh chiều vân tủ: 3FO4K4WOA1QV; scale/xoay vân: 3FO4K0MK32JE
- Lọc vật liệu xịn ("-4K", 实时材质, 酷口令): 3FO4K4WPW9M0; UI 3 chế độ render + 实时轻量 không thay vật liệu: 3FO4K4WCDICB (2025-08-18); template hiện hành: 3FO4K4WCL5TL (2025-10-27)

**Cộng đồng / tutorial (dùng có đánh dấu ⚠️):**
- Gloss kim loại xước ~0.97, kính 0.98: video tutorial Kujiale chính thức trên Douyin — số cho kim loại/kính, loại suy sang acrylic
- Trị kính đen (chiết suất thấp, dựng 2 mặt): jb51.net; số gloss theo nhóm chất liệu: đối chiếu chuẩn ngành V-Ray (Zhihu)

**Số chờ verify trên UI hiện tại (Phụ lục B):**
- Mục C1 — bộ kênh 材质编辑 đúng như mục 5.1
- Mục C2 — giới hạn dung lượng upload thật (2MB hay 5MB)
- Mục C3 — vị trí bộ lọc 精选 / 实时材质 / 品牌馆 trong UI mới
- Mục B3 — tên template chất lượng cao hiện hành để soi chất liệu (thay cụm "写实" cũ)

---

## Tự tra video thực chiến

> 📌 **Sách này cho bạn ĐƯỜNG ĐI. Video cho bạn ĐÔI TAY.**
>
> Chương vừa rồi dựng khung: nguyên lý là gì, thứ tự làm ra sao, số nào tin được số nào không. Nhưng thao tác thật — chuột đi đường nào, bấm chỗ nào, chỉnh tới đâu thì dừng — thì **xem người ta quay màn hình học nhanh hơn đọc nhiều lần.** Người làm nghề Trung Quốc chia sẻ rất nhiều và rất thực chiến.
>
> **Đọc chương xong, tra vài video về đúng vật liệu, rồi quay lại làm.** Đó mới là cách chương này phát huy hết.

Dán nguyên cụm vào ô tìm kiếm của **小红书** hoặc **抖音 (Douyin)**:

| Từ khoá | Tìm được gì |
|---|---|
| `酷家乐 材质 参数 设置` | Thiết lập tham số vật liệu |
| `酷家乐 反射光泽度 调节` | Chỉnh độ bóng phản xạ — cần gạt quan trọng nhất |
| `酷家乐 木纹 材质 教程` | Làm chất gỗ |
| `酷家乐 亚克力 材质` | Chất acrylic bóng gương |
| `酷家乐 实时材质制作工具` | Công cụ tạo vật liệu riêng |
| `酷家乐 材质 发灰 怎么办` | Chữa vật liệu bị xám bệt |

> 💡 **Bốn quy tắc lọc, dùng cho mọi từ khoá:** sắp theo `最新` (mới nhất) · ưu tiên bài có **ảnh chụp panel kèm số** · bỏ bài `AI一键` (quảng cáo) · **chỉ chép số từ bài ghi rõ template 3.0 hoặc 3.1**, bài cũ hơn thì chỉ học tư duy.
>
> Cách vào 小红书 từ Việt Nam, danh sách tài khoản đáng theo dõi, và mẫu ghi lại một ca thu được: xem **Phụ lục E mục E.10**.
