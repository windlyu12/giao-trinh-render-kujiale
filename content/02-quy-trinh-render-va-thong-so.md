# C2. Quy trình render và thông số

> **Sau chương này bạn làm được:**
> - Chọn đúng chế độ render trong 3 chế độ mới (thử-sai ở đâu, xuất final ở đâu, video/ảnh nhìn từ trên xuống ở đâu)
> - Đi hết quy trình 5 giai đoạn: rà model → dựng sáng realtime → nháp → final → hậu kỳ
> - Set đúng 16 tham số nâng cao cho ảnh nội thất chân thực, biết tham số nào đang "ăn" thời gian render vô ích
> - Nhìn ảnh lỗi và phán đúng trong 3 bước: lỗi model, lỗi tham số, hay lỗi vật liệu
> - Render đúng SOP nháp → final để không đốt 核豆 oan

---

## 2.1. Ba chế độ render — bản đồ UI mới

> ⚠️ **CẢNH BÁO PHIÊN BẢN:** Từ **8/2025**, Kujiale gộp toàn bộ lối vào render thành **3 chế độ**. Mọi video hướng dẫn quay trước 2025 (kể cả khóa BJM bạn đã học) đều mô tả giao diện cũ với các nút 普通图/全景图/俯视图 riêng lẻ — các nút đó giờ nằm hết trong 离线模式. Chương này viết theo UI mới.

**Đường vào:** rê chuột vào nút **渲染** (render) trên thanh công cụ trên cùng → hiện 3 lối vào. Muốn đặt chế độ mặc định: avatar góc phải trên → **偏好设置** (cài đặt tuỳ chọn) → 渲染 → 默认渲染模式.

| | **实时轻量模式** (realtime nhẹ) | **实时专业模式** (realtime chuyên nghiệp) | **离线模式** (render ngoại tuyến) |
|---|---|---|---|
| Tên cũ | 实时自动模式 | 实时手动模式 / 实时渲染 | Các nút 普通图/全景图/俯视图 cũ |
| Preview thời gian thực | Có | Có | **Không** |
| Chỉnh đèn thủ công (手动灯光) | Không | **Có** | **Có** |
| Thay vật liệu | Không | Có | Có |
| Phân giải tối đa | Ảnh thường 1K, panorama 2K | 8K | 8K |
| Render video + 俯视图 | Không | Không | **CHỈ Ở ĐÂY** |
| Tính phí | — | Theo **thời lượng** dùng, không theo tấm | Theo vé / 核豆 mỗi tấm |

**Tuyến làm việc chuẩn của bạn:** dựng sáng và thử-sai trong **实时专业模式** → xuất ảnh final trong **离线模式**. Chế độ 实时轻量 chỉ để demo nhanh cho khách ngồi cạnh, không dùng cho ảnh giao khách.

Lưu ý nhanh:
- 实时渲染 chỉ chạy với phương án phiên bản 5.0. Vật liệu sửa trong realtime chỉ áp cho template hiện tại, KHÔNG ghi đè phương án gốc.
- Muốn chỉnh đèn tay: trong 实时专业 hoặc 离线, ở danh sách **灯光模板** (template ánh sáng) bấm **+手动灯光**. ⚠️ Giới hạn 20 template đèn tay + 20 realtime = 40 phương án đèn/căn — số từ tài liệu 2024, kiểm tra lại theo Sổ ghi nhận (Phụ lục B).

> ⚠️ **CẢNH BÁO TEMPLATE:** Dòng 极速 1.x/2.x đã bị gỡ, hệ tự thay bằng **极速3.0/3.1**. Template 3.0 trở lên tính phản xạ ánh sáng (GI) dội mạnh hơn — **cùng độ sáng đèn cũ sẽ cháy trắng**. Nâng template xong PHẢI chủ động hạ độ sáng đèn tay. Đây là nguyên nhân số 1 của ảnh cháy trắng hàng loạt. Chi tiết template ở C3, công thức đèn ở C4.

### 4 loại ảnh trong 离线模式

| Loại | Là gì | Dùng khi |
|---|---|---|
| **普通图** (ảnh phối cảnh thường) | Ảnh tĩnh 1 góc nhìn | Gửi Zalo, chốt phương án, in |
| **全景图** (ảnh toàn cảnh 720°) | Khách quét QR "đi dạo" trong nhà | Chốt đơn tại showroom |
| **俯视图** (ảnh nhìn từ trên xuống) | Layout 3D toàn căn | Trình bày bố cục cho khách dễ hiểu |
| **漫游视频** (video đi dạo) | Video animation | TikTok, Facebook |

> 💡 Độ phân giải panorama KHÔNG so trực tiếp được với ảnh thường: panorama là 6 mặt ảnh ghép lại, nên panorama 5K không hề nét hơn ảnh thường 4K. Hiểu lầm phổ biến nhất của người mới.

---

## 2.2. Quy trình chuẩn 5 giai đoạn

| Giai đoạn | Việc chính | Ở đâu | Tốn gì |
|---|---|---|---|
| **A. Rà model** | Kiểm tra **重面** (mặt trùng nhau) — kính chồng trần, ván tủ chồng nhau, đèn 面光源 (đèn mặt) chồng vào trần. Đây là gốc của "vệt đen lạ, noise loang" | Công cụ thiết kế | Không |
| **B. Dựng sáng + thử-sai** | Chọn 灯光模板 → set camera → chỉnh đèn tay → chỉnh vật liệu → hậu kỳ realtime | 实时专业模式 | Theo thời lượng |
| **C. Render nháp** | 普通图 phân giải thấp nhất, soi lỗi | 离线模式 | Rất ít / miễn phí |
| **D. Render final** | Nâng phân giải + bật option nặng ĐÚNG chỗ cần | 离线模式 | Vé / 核豆 |
| **E. Hậu kỳ + xuất** | 图册 (album) → 美化 (làm đẹp) chỉnh sáng/màu → crop → tải về | Album | Không |

**3 nguyên tắc vàng:**
1. **Không bao giờ chỉnh đèn bằng cách render thử ảnh lớn.** Toàn bộ thử-sai làm trong preview realtime (~1 giây thấy kết quả).
2. **Nháp và final phải cùng bộ tham số ánh sáng, chỉ khác phân giải.** Bật thêm tham số ảnh hưởng ánh sáng ở bước final là ảnh ra khác nháp. Nhóm option "nặng" tác dụng cục bộ (gương, vật liệu phức tạp) được phép để dành đến final — nhưng tấm nháp CHỐT cuối cùng nên render 1920×1080 với đúng bộ option final trước khi lên 4K.
3. **Lỗi model không sửa được bằng tham số render.** Mặt trùng, đèn chồng model → quay lại giai đoạn A.

---

## 2.3. Chọn loại ảnh + độ phân giải theo mục đích

| Mục đích | Chọn gì |
|---|---|
| Nháp soi lỗi | 普通图 800×450 hoặc 1920×1080 |
| Gửi khách xem nhanh qua Zalo | 普通图 1920×1080–2K + 全景图 4K |
| Thuyết trình showroom, chốt đơn | 全景图 5K–6K (khách quét QR) |
| Đăng Facebook / TikTok | 普通图 2K–3K hoặc 漫游视频 720p |
| **In ấn** (catalogue, standee) | 普通图 **8K bắt buộc** — dưới mức này in ra vỡ |
| Portfolio / dự thi | 普通图 4K–8K, bật đủ option chất lượng |

Các mức nằm trong khung **夜间免费渲染** (render đêm miễn phí): 普通图 800×450 / 1920×1080 / 2560×1440 · 全景图 2000×1000 → 4000×2000 · 俯视图 800×450 / 1920×1080. Cao hơn thì dùng vé hoặc 核豆.

> ⚠️ **CẢNH BÁO HỆ ĐIỂM 核豆 (từ 01/03/2026):** Kujiale tính phí render bằng **核豆** (hạt điểm render) — 基础 500 / 高级 1200 / 专业 1800 核豆 mỗi tháng. **Số 核豆 tiêu cho từng tấm ảnh KHÔNG có bảng công khai** — chỉ xem được trong app qua nút **「核豆消耗 - 查看详情」** ngay trong cửa sổ render, tại thời điểm bấm nút. Giáo trình này cố tình KHÔNG in bảng giá cứng: mọi con số bạn đo được hãy ghi vào Sổ ghi nhận mục A1 (Phụ lục B). Riêng **vé 6K panorama (8 vé/tháng) phải vào 会员中心 (trung tâm hội viên) tự nhận theo tuần, nhận xong chỉ có 7 ngày để dùng — quên là mất.**

Thực tế cho bạn: tài khoản công ty đang ở bậc **高级会员** → mỗi tháng có 1200 核豆 + gói 300 vé render 4K (普通图/俯视图/全景图) + 8 vé 6K panorama nhận tay. Ảnh 8K thuộc quyền 专业会员 (200 lượt/năm) — cần in khổ lớn phải báo quản lý tính trước (mua thêm vé hoặc nâng hạng, chủng loại vé mua thêm tuỳ hạng ⚠️ xem trong app).

---

## 2.4. Bảng 16 tham số nâng cao — trái tim của chương

**Đường vào:** 离线模式 → góc trái dưới **高级设置** (cài đặt nâng cao) — tham số 1–8. Tham số 9–16 nằm ở **panel hiệu ứng cạnh 灯光模板** hoặc trong 实时渲染 → 效果 → 后处理 (hậu xử lý), vì tác dụng của chúng phụ thuộc template.

> 💡 Rê chuột vào dấu **"?"** cạnh mỗi tham số → hiện ảnh minh hoạ trước/sau. Ô check bị xám không bấm được = template hiện tại không hỗ trợ → đổi sang template dòng **写实** (tả thực) rồi thử lại.

| # | Tham số (Hán — Anh) | Tác dụng | Khuyên dùng cho ảnh chân thực | Khi nào TẮT |
|---|---|---|---|---|
| 1 | **溢色修正** — Color Correction | Chặn mảng màu lớn hắt màu lên bề mặt khác (sàn gỗ nâu → trần ám vàng) | BẬT khi khung hình có mảng màu đậm/bão hoà lớn | Khi muốn giữ hắt màu tự nhiên — đây là vật lý thật: tắt thì thật hơn, bật thì "sạch" hơn |
| 2 | **影响高光** — Affect Specular | Hiện/ẩn đốm phản chiếu của nguồn sáng trên bề mặt bóng | BẬT (mặc định) — sàn bóng phải thấy bóng đèn mới đúng vật lý | Khi sàn bóng lốm đốm trắng hàng loạt gây rối mắt |
| 3 | **硬装灯带使用新材质** — vật liệu mới cho đèn LED dây | Sửa đèn dây đứt đoạn / cháy sáng / sai độ sáng; render chính xác dải 0–6000% | BẬT gần như luôn, nhất là thiết kế không đèn chủ (无主灯), đèn hắt trần/tủ | Chỉ khi phương án cũ đã canh sáng theo vật liệu cũ, bật lên bị lệch |
| 4 | **环境阻光 (AO)** — Ambient Occlusion | Bóng tiếp xúc ở góc/khe → nổi khối, phào chỉ sắc nét | BẬT · **Size 0.8 · Radius 0.05 ft** (~1,5 cm). Muốn khối mạnh hơn: tăng Size, giảm Radius | Không tắt. Size quá thấp → ảnh bẹt; Radius quá lớn → bóng loang bẩn |
| 5 | **镜面真实反射** — phản chiếu gương thật | Engine mặc định bỏ qua vật thể sau lưng camera → gương "mất đồ"; bật để gương phản chiếu đúng | CHỈ bật khi khung hình có gương lớn (WC, tủ cánh gương). Không được nhớ trạng thái — lần nào cần lần đó tick | Mặc định TẮT. Không gương mà bật = cộng thời gian render vô ích |
| 6 | **渲染复杂材质** — render vật liệu phức tạp | Bật displacement (置换 — vân nổi thật) + 3S (xuyên sáng dưới bề mặt): đá marble xuyên sáng, rèm mỏng, da, nến | BẬT khi có các vật liệu đó. Dòng 极速 chỉ hỗ trợ 3S; dòng 写实 đủ cả hai | Không có vật liệu loại này — bật vô nghĩa mà vẫn tốn giờ |
| 7 | **超真实渲染** — render siêu thực | Nâng chất lượng riêng cho panorama | Chỉ có ở **全景图 ≥ 5K**, chỉ bật ở bước final cho khách VIP | Mọi trường hợp khác (普通图/俯视图 không có option này). Tăng mạnh thời gian render |
| 8 | **HDR** | Xuất dải sáng động cao để hậu kỳ nặng trong Photoshop | Chỉ khi cần kéo lại vùng cháy/vùng tối ở hậu kỳ. Không được nhớ trạng thái | Mặc định tắt. ⚠️ Tài liệu 2021 ghi quyền chỉ mở cho VIP bản doanh nghiệp — kiểm tra lại theo Sổ ghi nhận (Phụ lục B) |
| — | **↓ 8 tham số ở panel hiệu ứng / hậu kỳ realtime ↓** | | | |
| 9 | **自动曝光** — Auto Exposure | Hệ tự chỉnh thông số đèn chống quá sáng/quá tối | Mặc định KHÔNG tick — giữ quyền kiểm soát. Chỉ tick khi ảnh hỏng sáng mà chưa biết chỉnh tay | ⚠️ Tick là hệ **ghi đè thông số đèn của bạn**. Chỉ xuất hiện ở template 自然写实; template nào có → kiểm rồi ghi vào Sổ ghi nhận |
| 10 | **炫光** — Glare (loé sáng) | Quầng loé quanh đồ vật loại "đèn"; thang 1–10, mặc định 1.5 | Giữ **1.5–2.5** | Cảnh ban ngày không bật đèn. Đẩy trên 4–5 → giả kiểu poster |
| 11 | **降噪** — khử nhiễu | Khử hạt nhiễu | Template 3.1 trở lên **tự bật**, không cần tick. Bản còn nút: tick = +3 phút render | Ảnh không nhiễu thì đừng tick. ⚠️ Nguồn mâu thuẫn về việc nút còn/mất theo template — kiểm rồi ghi vào Sổ ghi nhận |
| 12 | **色彩增艳** — tăng tươi màu | Tăng bão hoà màu tổng thể | Để **thấp hoặc TẮT** — màu quá tươi là dấu hiệu số 1 của "ảnh 3D" | Luôn cân nhắc tắt cho ảnh chân thực. Chỉ có ở dòng 写实 |
| 13 | **漏光修复** — chống rò sáng | Tính cache ánh sáng chính xác hơn, chống rò sáng qua khe tường/trần | Chỉ bật ở **final** khi thật sự thấy rò (bản 3.1: 99% cảnh đã tự tránh) | Ở bước nháp — phân giải thấp gần như không thấy khác biệt mà vẫn cộng giờ render |
| 14 | **曝光压制** — nén phơi sáng | Kiểm soát độ sáng + chi tiết vùng cháy | Giá trị càng **THẤP** → highlight càng mềm, cứu được cửa sổ cháy trắng. Nằm ở 实时渲染 → 效果 → 后处理 | Không cần đụng khi ảnh không có vùng cháy |
| 15 | **LUT滤镜** — bộ lọc màu LUT | Áp bộ màu kiểu điện ảnh; 8 LUT sẵn + tự upload file .cube (sRGB) | LUT **nhẹ** để phá "cảm giác màu render". Từ bản 3.1 dòng 写实 mới hỗ trợ | Khi LUT làm sai màu vật liệu mà khách đã chốt |
| 16 | **景深** — Depth of Field | Làm mờ hậu cảnh/tiền cảnh theo tâm điểm (chỉnh điểm + độ mờ) | Dùng **nhẹ tay** — thủ pháp mạnh để giống ảnh chụp máy ảnh thật | Khi khách cần xem rõ chi tiết toàn phòng. Lạm dụng → giả + mất chi tiết |

**Ghi nhớ trạng thái:** hệ thống nhớ lần tick trước của phần lớn tham số (溢色修正, 影响高光, AO...) — tạo phương án mới không phải set lại. **Ngoại lệ: 镜面真实反射 và HDR không được nhớ** vì ảnh hưởng trực tiếp thời gian render.

### Bộ mặc định khuyến nghị (dán cạnh màn hình)

```
高级设置:
  溢色修正        BẬT khi có mảng màu lớn / TẮT nếu muốn thật hơn
  影响高光        BẬT (tắt nếu sàn lốm đốm)
  硬装灯带新材质   BẬT
  环境阻光 AO      BẬT · Size 0.8 · Radius 0.05 ft
  镜面真实反射     TẮT — chỉ bật khi có gương
  渲染复杂材质     TẮT — chỉ bật khi có đá xuyên sáng / rèm / da
  超真实渲染      chỉ panorama ≥5K, chỉ ở final
  HDR            chỉ khi cần hậu kỳ nặng (kiểm tra quyền)

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

## 2.5. Chẩn đoán lỗi 3 bước

Nhân viên mới hay ngồi vặn tham số render trong khi lỗi nằm ở model. Trước khi sửa gì, hỏi 3 câu theo thứ tự:

```
Thấy lỗi trên ảnh
   ↓
① Lỗi hình dạng KỲ QUÁI, loang lổ, cục bộ?
   → Nghi 重面 / đèn chồng model → SỬA MODEL, đừng đụng tham số
   ↓ không phải
② Lỗi ĐỀU khắp ảnh (tối đều / cháy đều / nhiễu đều / ám màu đều)?
   → Tham số render hoặc độ sáng đèn → sửa 高级设置 / hạ đèn
   ↓ không phải
③ Lỗi chỉ ở MỘT vật liệu cụ thể (gương, đá, kính, đèn dây)?
   → Bật option tương ứng (镜面真实反射 / 渲染复杂材质 / 灯带新材质)
     hoặc đổi sang template dòng 写实
```

Bảng lỗi chi tiết ở cuối chương. Quy tắc sắt: **lỗi bước ① không bao giờ sửa được bằng bước ②③.**

---

## 2.6. SOP nháp → final tiết kiệm 核豆

| Bước | Hành động | Chế độ | Tốn điểm? |
|---|---|---|---|
| 1 | Rà model: mặt trùng, đèn chồng trần | Công cụ thiết kế | Không |
| 2 | Vào 实时专业模式, chọn template dòng 写实 | Realtime Pro | Theo thời lượng |
| 3 | Set camera: FOV 人眼 (tầm mắt người), chiều cao mắt, bố cục (chi tiết C6) | Realtime Pro | — |
| 4 | Dựng sáng: nắng/trời → đèn chính → đèn bù → đèn nhấn (chi tiết C4) | Realtime Pro | — |
| 5 | Hậu kỳ realtime: 曝光压制, LUT, 景深 | Realtime Pro | — |
| 6 | Lưu → sang 离线模式 → nháp **1920×1080** + đủ bộ 高级设置 chuẩn | Offline | Rất ít |
| 7 | Soi lỗi theo bảng cuối chương → sửa → nháp lại nếu cần | — | — |
| 8 | Final: nâng 3K/4K + bật option nặng đúng chỗ cần | Offline | Có — xem 核豆 trước khi bấm |

**Chiến lược tiết kiệm:**

| Tình huống | Làm gì |
|---|---|
| Đang tập chỉnh đèn | Ở lì trong 实时专业模式 — tuyệt đối không render ảnh thật để thử |
| Kiểm bố cục & lỗi model | Nháp 800×450 hoặc 1920×1080 — trong khung miễn phí |
| Tập render phân giải cao | Xếp vào khung giờ render không giới hạn của hạng hội viên ⚠️ khung giờ cụ thể xem trong app |
| Đã chốt phương án | Mới nâng 3K/4K + bật option nặng |
| **Không bao giờ** | Bật 镜面真实反射 / 渲染复杂材质 / 超真实渲染 / HDR / 漏光修复 ở bước nháp |
| Vé 6K panorama | Vào 会员中心 nhận tay hằng tuần — nhận rồi chỉ có 7 ngày |

> 💡 Render là **cloud render** — bấm xong tắt máy vẫn render tiếp trên server. Bật 出图提醒 (báo khi ảnh xong) trong cài đặt để khỏi ngồi canh. Panorama 4K trở lên giờ cao điểm có thể bị gắn nhãn cộng giờ hoặc đẩy vào 闲时渲染 (render giờ rảnh).

---

## Thực hành

### Bài 1 — Đi trọn quy trình nháp → final trên căn hộ mẫu

Lấy 1 phương án 2 phòng ngủ đã dựng xong nội thất (căn Sapphire mẫu của công ty).

1. **Rà model (10'):** soi các vị trí kính/trần/tủ tìm 重面; kiểm tra đèn 面光源 không chạm trần. Sửa hết rồi mới đi tiếp.
2. **Dựng sáng (30'):** vào 实时专业模式 → template 室内白天 3.1 → camera FOV 人眼, cao ~1,2–1,5 m → chỉnh đèn đến khi preview ưng mắt.
3. **Nháp lần 1:** sang 离线模式 → 普通图 → chọn **mức phân giải thấp nhất trong danh sách** (tài liệu ghi 800×450; UI của bạn hiện mức khác — ví dụ 800×600 — thì cứ chọn mức thấp nhất) → set 高级设置 đúng bộ mặc định mục 2.4 → render.
4. **Soi lỗi:** dò theo bảng lỗi cuối chương, chẩn đoán bằng quy trình 3 bước. Sửa → nháp lần 2 ở 1920×1080.
5. **Nháp chốt:** khi hết lỗi, render 1 tấm 1920×1080 với **đúng bộ option sẽ dùng ở final** (bật 镜面真实反射 nếu khung có gương...).
6. **Final:** nâng 3K (dùng vé) hoặc 4K. **TRƯỚC khi bấm render:** mở **「核豆消耗 - 查看详情」**, chép số 核豆/vé của TỪNG mức phân giải đang hiện → **ghi vào Sổ ghi nhận mục A1 (Phụ lục B)**. Render xong đối chiếu số thực trừ trong tài khoản, ghi nốt.

**Tiêu chí đạt:** ảnh final không còn lỗi nào trong bảng cuối chương; ánh sáng final khớp ảnh nháp chốt; Phiếu A1 có đủ số 核豆 đo thực tế cho ít nhất 3 mức phân giải.

### Bài 2 — Thí nghiệm A/B một tham số

Cùng 1 góc camera, render 2 tấm nháp 1920×1080 (khung miễn phí): tấm A bật 环境阻光 AO (Size 0.8 / Radius 0.05 ft), tấm B tắt. Đặt 2 ảnh cạnh nhau, chỉ ra 3 vị trí khác biệt (góc tường, khe tủ, chân phào). Lặp lại với 影响高光 nếu phòng có sàn bóng.

**Tiêu chí đạt:** nói được bằng lời tham số đó làm gì với ảnh — không cần nhìn lại bảng.

---

## Checklist tự chấm

- [ ] Kể được 3 chế độ render và biết video/俯视图 chỉ render được ở 离线模式
- [ ] Biết đặt chế độ render mặc định trong 偏好设置
- [ ] Nói được vì sao KHÔNG thử đèn bằng cách render ảnh lớn
- [ ] Set được bộ 高级设置 mặc định không cần mở giáo trình
- [ ] Giải thích được khi nào bật / không bật: 镜面真实反射, 渲染复杂材质, 漏光修复
- [ ] Biết AO Size 0.8 / Radius 0.05 ft và cách chỉnh khi muốn khối mạnh hơn
- [ ] Thuộc quy trình chẩn đoán 3 bước, phân biệt lỗi model vs lỗi tham số
- [ ] Đã ghi số 核豆 đo thực tế vào Sổ ghi nhận mục A1
- [ ] Biết vé 6K panorama phải nhận tay hằng tuần, hạn 7 ngày
- [ ] Ảnh final bài 1 được người hướng dẫn xác nhận đạt

---

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Vệt đen loang lổ hình thù kỳ quái + noise cục bộ | **重面** — hai mặt phẳng chồng khít nhau | Chỉ có 1 cách: xoá mặt trùng (tủ tuỳ biến: tìm tấm ván trùng trong danh sách tài nguyên; hard-finish: xoá trong công cụ tạo hình, bí quá xoá trần làm lại) |
| Trần "biến mất" khi render | Đèn 面光源 chồng vào mặt trần | Hạ đèn xuống không chạm trần |
| Khe đen giữa đèn và model | Đèn diện chồng lên model | Dời vị trí/độ cao đèn |
| Trần/tường ám màu lạ (sàn nâu → trần vàng) | Hắt màu (color bleeding) — vật lý thật | Bật 溢色修正 |
| Sàn bóng đầy đốm tròn trắng | Nguồn sáng phản chiếu lên vật liệu bóng | Tắt 影响高光. Vẫn còn đốm → lỗi vật liệu/model, không phải tham số |
| Ảnh bẹt, không khối, phào không nét | AO tắt hoặc Size thấp | Bật AO, Size 0.8 / Radius 0.05 ft |
| Vật thể biến mất trong gương | Engine không tính vật sau lưng camera | Bật 镜面真实反射 |
| Đá không xuyên sáng, gạch vân nổi bị phẳng | Vật liệu phức tạp chưa được render | Bật 渲染复杂材质; vẫn không được → đổi template dòng 写实 (极速 chỉ hỗ trợ 3S) |
| Đèn LED dây đứt đoạn / cháy trắng | Vật liệu đèn dây cũ | Bật 硬装灯带使用新材质 |
| Cửa sổ cháy trắng bệt mất chi tiết | Highlight quá ngưỡng | Hạ 曝光压制 (实时渲染 → 效果 → 后处理) |
| Nâng template 3.0/3.1 xong cháy trắng cả ảnh | GI dội mạnh hơn, đèn cũ thành thừa sáng | Hạ độ sáng toàn bộ đèn tay |
| Màu giả, tươi quá, "lộ CG" | 色彩增艳 / 炫光 quá cao | Hạ 色彩增艳; 炫光 về 1.5–2.5 |
| Rò sáng qua khe tường/trần | Cache ánh sáng chưa đủ chính xác | Tick 漏光修复 ở final (nháp thấp không thấy khác biệt) |
| Ảnh in ra vỡ, răng cưa | Phân giải quá thấp so khổ in | Render lại 8K — không cứu được bằng phóng to |
| Render fail / rất chậm | Xếp hàng đông hoặc bật quá nhiều option nặng | Tắt bớt option, thử lại; panorama lớn có thể vào 闲时渲染 |

---

## Nguồn số liệu

**Nguồn chính thức (help center kujiale.com/hc + ask.kujiale.com, có article ID):**
- 3 chế độ render + ánh xạ tên cũ→mới: article 3FO4K4WCDICB (2025-08-18); 离线模式 nhập môn: 3FO4K4W09FRH (2025-08-29)
- 16 tham số nâng cao: 3FO4K4VWISQV (2025-01-10) + bản Coohom EN có AO Size 0.8 / Radius 0.05 ft (2025-12-17) + các bài 影响高光 3FO4K4VOILR3, 炫光 3FO4K4VNKX8B, 自动曝光 3FO4K4VN8BUJ, HDR 3FO4K4VWVLSP, 渲染复杂材质 3FO4K4WG2UO0, AO 3FO4K4VY61M0, 渲染参数配置器 3FO4K4VR4XBE
- Template 3.0/3.1 + GI + hạ đèn: 3FO4K4WL2OLA, 3FO4K4WI93WS; gỡ 极速 cũ: 3FO4K4WCL5TL (2025-10-27)
- Hệ 核豆 + quyền hội viên 2026: 3FO4K4WPKVPL (2026-08-04); nút「核豆消耗-查看详情」: 3FO4K4WE4TYN (2025-11-28)
- Danh sách phân giải render đêm miễn phí: ask 3FO4JYPT9JHW; bảng lỗi render: 3FO4K4VPIAIG, 3FO4K4WOB3J7, 3FO4K4VQTPJC

**Nguồn cộng đồng:**
- ⚠️ Khung "quy trình 出图" tổng hợp từ Zhihu/Bilibili — không phải SOP chính thức; SOP mục 2.6 do giáo trình tự chuẩn hoá theo tuyến realtime → offline.

**Số chờ verify (Sổ ghi nhận — Phụ lục B):**
- ⚠️ Số 核豆 tiêu / tấm theo từng phân giải — KHÔNG có nguồn công khai, đo trong app (mục A1)
- ⚠️ Giới hạn 40 phương án đèn/căn (nguồn 2024-02-22)
- ⚠️ Quyền HDR cho tài khoản cá nhân (nguồn 2021)
- ⚠️ Nút 降噪 / 漏光修复 còn hay mất theo từng template (nguồn mâu thuẫn)
- ⚠️ Template nào có 自动曝光
- ⚠️ Khung giờ render không giới hạn theo hạng hội viên; chủng loại vé mua thêm của bậc 高级
- ⚠️ Danh sách tỉ lệ khung hình + mức phân giải chính xác trong UI hiện tại (800×450 hay 800×600...)
