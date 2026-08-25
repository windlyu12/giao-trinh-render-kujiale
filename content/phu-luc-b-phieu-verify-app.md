# Phụ lục B. Phiếu khám phá app — bài tập tuần đầu

> **Sau bài tập này bạn làm được:** biết chính xác giao diện Kujiale bản hiện tại khác gì số liệu trong sách; tự tay khoá toàn bộ số ⚠️ trong giáo trình; quen mặt mọi màn hình quan trọng trước khi học sâu.

**Vì sao có phiếu này:** Kujiale đổi giao diện và hệ điểm rất nhanh. Sách viết từ nguồn công khai nên một số con số phải kiểm trên phần mềm thật. Bạn là người kiểm — điền xong nộp lại quản lý để cập nhật sách.

**Cách làm:** dùng tài khoản cao cấp (`高级`) của công ty. Làm lần lượt, **chụp màn hình từng mục** lưu vào thư mục `verify-screenshots/`.

**Ba ký hiệu trong phiếu:**

| Ký hiệu | Nghĩa |
|---|---|
| ⛔ | **Chặn cửa** — chưa có đáp án thì mọi số liên quan đều treo. Làm trước tiên |
| ✅ | Sách đã có đáp án từ nguồn chính thức — bạn chỉ liếc xác nhận đúng hay sai |
| (trống) | Cần đi tìm và ghi lại |

---

> ## ⛔ BỐN MỤC CHẶN CỬA — LÀM TRƯỚC, TRONG MỘT BUỔI
>
> Bốn mục này quyết định **mọi con số về ánh sáng** trong Chương 13 và Phụ lục E có dùng được hay không. Chưa xong bốn mục này thì đừng làm mục khác.
>
> | # | Mục | Ở đâu trong phiếu |
> |---|---|---|
> | 1 | **Đơn vị độ sáng** — thang cũ, `瓦`, hay `%` | B1 |
> | 2 | **`阴影柔和度` có phải hai thang không** | B5 |
> | 3 | **`手动曝光`** — panel nào, thang bao nhiêu | B8 |
> | 4 | **`室内光亮度`** — thang bao nhiêu, tối đa có phải 500% | B9 |

---

## A. Hộp thoại render và hệ điểm

| # | Việc cần làm | Kết quả điền |
|---|---|---|
| A1 | Bấm render → tìm nút **`核豆消耗 - 查看详情`** → chụp bảng số điểm tiêu cho ảnh thường 1080p / 2K / 4K / 8K (bảng này không có trên web) | |
| A2 | Ghi danh sách tỉ lệ khung hình có sẵn | |
| A3 | Ghi pixel THỰC khi chọn "4K" và "8K" | |
| A4 | ✅ Ba chế độ = `实时轻量` / `实时专业` / `离线模式`; video và ảnh nhìn từ trên CHỈ ở `离线`. Liếc xác nhận | |
| A5 | Đo thời gian render thật một phòng: 1080p / 2K / 4K, cùng cảnh | |
| A6 | Vào `会员中心`: chụp quyền lợi bậc `高级` + nơi **lĩnh vé** hằng tuần (quên lĩnh là mất) | |
| A7 | Chế độ `实时专业` còn tính phí theo phút hay trừ điểm? Chụp màn hình tính phí | |
| A8 | ✅ `实时轻量` **có chia đôi màn hình** vừa dựng vừa render: `视角同步`, `方案同步` (Ctrl/⌘+U), `生成`, `退出`. Xác nhận tài khoản mình có chưa | |
| A9 | **Độ phân giải xuất tối đa của bậc `高级` CÁ NHÂN** là bao nhiêu? ⚠️ Đừng lấy số 8K mặt bằng / 32K toàn cảnh — đó là của bản doanh nghiệp | |

## B. Ánh sáng — nhóm quan trọng nhất

| # | Việc cần làm | Kết quả điền |
|---|---|---|
| **B1** ⛔ | **Tạo một `面光源` → chụp panel tham số → độ sáng hiện đơn vị gì?** Ba khả năng: **thang cũ** (số hàng trăm) · **`瓦`** · **`%`**. ⚠️ Câu hỏi này bản cũ của phiếu hỏi thiếu — phải kiểm đủ **ba** khả năng, không phải hai. Làm thêm cho `灯带`, `筒灯`, `聚光灯` xem có khác nhau không | |
| B2 | ✅ Đường vào đèn thủ công = `离线模式` hoặc `实时专业` → `灯光模板` → `添加手动灯光`. Đối tượng `所有用户`. Liếc xác nhận | |
| B3 | **Mở `灯光版本管理` → chụp danh sách template ĐANG CÓ.** ⚠️ Ba nguồn cho ba số khác nhau: một bài chính thức khuyên bản 2.1, nhật ký bản ghi mới nhất là 3.10, nghiên cứu đợt 1 nói 2.x đã gỡ. **Tin app, đừng tin bài** | |
| B4 | ✅ Nhóm phơi sáng ở template `自然写实` gồm `自动曝光` / `手动曝光` / `漏光修复` / `降噪` / `炫光`. **⚠️ Nhưng bản `室内白天/夜晚` 3.0 đã GỠ ba nút `降噪` / `漏光修复` / nhấn mạnh vân — máy tự làm.** Ghi rõ: template nào còn nút gì | |
| **B5** ⛔ | **Kiểm `阴影柔和度` có phải HAI thang.** Cố định cảnh, đổi ô của **`阳光`**: 1 / 3 / 5 / 8 / 10 — ghi min-max thanh trượt. Rồi mở ô của **đèn nhân tạo**, ghi min-max. Sách đoán nắng chạy 1–10, đèn nhân tạo chạy 100–3000 | |
| B6 | Mở thư viện đèn IES: chụp danh sách. ✅ Sách ghi có `补灯1` · `射灯1–12` · `筒灯1–2`. Render thử 3–4 profile lên tường, ghi cái nào quạt rộng, hẹp, rọi tranh | |
| B7 | Cột `外景`: chụp danh mục ngoại cảnh + thử tải ngoại cảnh riêng (còn nhận PNG/JPG tỉ lệ 2:1 ≤20MB, chỉ template dòng `写实`?) | |
| **B8** ⛔ | **`手动曝光`:** đi đường `效果 → 模板 → 曝光` xem có hai nút `自动曝光` / `手动曝光` không. Chọn thủ công → chụp ô **`强度`**, ghi **thang bao nhiêu và mặc định bao nhiêu**. Sách ghi dải dùng được 0,5–1,0 | |
| **B9** ⛔ | **`室内光亮度`:** tìm ô này, kéo hết thang, ghi **min–max**. Sách ghi thường 100%, tối đa có thể 500% | |
| B10 | **`灯光专属环境阻光` trong panel đèn và `环境阻光` ở `高级设置` là MỘT hay HAI thứ?** Mở cả hai, so tên và giá trị | |
| B11 | Ô tích **`阳光投射至每个房间`** làm gì? Bật/tắt, render so | |
| B12 | **`真实光源模式`** ở `灯带` là gì? Mở panel `灯带` xem có ô đó không | |
| B13 | **`辉光` có phải loại đèn thứ chín?** Mở menu thêm đèn, đếm số loại, chụp lại | |
| B14 | Panel đèn có **hai tab `色温` và `颜色`** không? Thử nhập mã RGB `240-231-216` vào tab `颜色`, xem có ăn không | |
| B15 | ✅ Bảy công tắc `高级设置`: `修复溢色` · `影响高光` · `硬装灯带使用新材质` (0%–6000%) · `环境阻光` · `全景优先` · `镜面真实反射` · `渲染复杂材质`. Xác nhận đủ bảy | |
| B16 | **`光照分析图` (bản đồ nhiệt độ rọi) tài khoản cá nhân có dùng được không?** ⚠️ Blog nói được, tài liệu trợ giúp nói module đó là chức năng doanh nghiệp. Bấm thử `⌥8` | |
| B17 | `体积光`: đi đường `渲染 → 离线模式 → 手动灯光 → template 写实 → 光源类型 = 体积光`. Chụp panel, ghi thang của `光柱长度` và `底面半径` | |

## C. Vật liệu và ảnh vân

| # | Việc cần làm | Kết quả điền |
|---|---|---|
| C1 | ✅ Mở `材质编辑` một vật liệu gỗ: xác nhận đủ **năm** tham số `漫反射` / `反射` / `反射光泽度` / `凹凸` / `菲涅尔`, và **không có** Metallic hay Roughness | |
| C2 | **Giới hạn tải ảnh vân — kiểm ba cổng.** Sách nói ảnh màu ≤5MB, ảnh `凹凸`/`反射` ≤2MB, nhưng có ba cách giải thích khác nhau về con số 2MB. Thử tải một file ~4MB ở cổng công ty dùng, rồi thử làm ảnh `凹凸`, ghi UI báo gì | |
| C3 | ✅ Vật liệu tốt = dòng `实时材质通用库` + nhãn `精选` + `品牌馆` + hậu tố "-4K". Xác nhận **vị trí bộ lọc** trong giao diện | |
| C4 | ✅ **`定制随机纹理刷` và `定制旋转纹理刷`** — tài liệu chính thức ghi `所有用户`, cập nhật 17/10/2024. Vào `全屋定制 → 工具` xác nhận có nút, quét thử một cánh tủ | |
| C5 | **`连纹商品` / `连纹大岩板` có bấm được không?** ⚠️ Tài liệu chính thức **tự mâu thuẫn**: tiêu đề mang nhãn `企业功能` nhưng ô đối tượng ghi `全部用户`. Bấm thử, ghi kết quả | |
| C6 | ✅ **`图案排版`** ghi rõ `仅限商家用户`. Xác nhận không có nút — nếu **có** thì báo ngay, vì sách đang dạy làm đối hoa gương thủ công | |
| C7 | **Ảnh `法线` màu xanh tím nạp thẳng có ăn không?** Tải một normal map RGB và một ảnh height đen-trắng cùng vật liệu, render so. Sách khuyên dùng đen-trắng ở ô `凹凸` | |
| C8 | Công cụ **`无缝拼接`** trong `实时材质制作工具`: xác nhận đường vào `材质替换 → 实时材质制作 → 上传 → 无缝拼接 → 材质选区 → 亮度均衡 → 生成预览图` | |
| C9 | Đường vào **`实时材质制作工具`** cho tài khoản cá nhân: sách ghi hai đường hơi khác nhau — `工作台 → 我的素材库 → 创建素材` và `模型管理 → 创建素材`. Kiểm đường nào đúng trên bản hiện tại | |
| C10 | Hạn mức `收藏` và kho vật liệu riêng của bậc `高级`: lưu tới khi báo giới hạn, ghi con số | |

## D. Phần thô và model

| # | Việc cần làm | Kết quả điền |
|---|---|---|
| D1 | ✅ `行业库` (giao diện Anh: `Advanced`) có tám module. Xác nhận `全屋硬装` = `Construction` `⌥3` và `自由造型` = `Custom modeling` | |
| D2 | **Tường thẳng có nút khoét lỗ trong bản hiện tại không?** Mở `全屋硬装`, chọn một mặt tường thẳng, tìm nút `挖洞` hoặc `开洞`. Sách nói không có, phải lách bằng `门窗洞` | |
| D3 | **`凸出` của trần giật cấp một cấp là gì?** ⚠️ Bài chính thức ghi số **400** nhưng không nói đơn vị và ý nghĩa. Là **bề rộng dải viền** hay **độ hạ trần**? Dựng thử, đo lại. Quan trọng vì sách dạy hạ trần 100–150mm | |
| D4 | Chất lượng model `出风口` và `磁吸轨道` trong thư viện: tìm, xoay xem trước, ghi model nào dựng đúng hướng | |
| D5 | ✅ Điều kiện tải model: `.skp` bản ≤2024, đơn vị mm, ≤30m, `.obj` ≤3 triệu mặt, ảnh vân RGB, **không nhận vật liệu Vray**, tên file không có dấu cách. Thử tải một file thật | |
| D6 | Thử tải một file `.fbx` nhỏ — sách nói **không có đường chính thức**. Ghi kết quả | |
| D7 | Công cụ rèm tham số `定制窗帘`: xác nhận đường vào và các tham số chỉnh được | |

## E. Công cụ AI

| # | Việc cần làm | Kết quả điền |
|---|---|---|
| E1 | Tài khoản công ty có `AI美化` / `AI+渲染` chưa? Đường vào đâu | |
| E2 | Dùng thử sửa ảnh bằng AI: số lần miễn phí mỗi ngày, độ phân giải ảnh ra | |
| E3 | Trong chợ ứng dụng: cái nào miễn phí, cái nào đòi bản doanh nghiệp | |

## F. Giá — làm cùng quản lý

| # | Việc cần làm | Kết quả điền |
|---|---|---|
| F1 | Mở trang giá hoặc `会员中心` → nâng cấp: chụp bảng giá các bậc + đơn giá mua thêm điểm | |

---

## G. Bản đồ quyền — đối chiếu nhanh

Tài liệu chính thức ghi rõ đối tượng dùng của từng chức năng. Bảng dưới là **đáp án sách đã có**; việc của bạn là **liếc xác nhận** và báo nếu lệch.

### ✅ `所有用户` — phải dùng được

`手动灯光` · `体积光` · `实时材质制作工具` · `发光材质` · `定制随机纹理刷` · `定制旋转纹理刷` · `材质刷` · `磁吸轨道灯` · `无主灯吊顶` · `一级吊顶石膏顶` · `出风口` · `内嵌踢脚线` · `成品踢脚线` · `壁龛` · `洞口` · `酷大师`

- [ ] Đã thử ít nhất 8 trong số trên, tất cả đều bấm được

### ❌ Chức năng doanh nghiệp — KHÔNG dùng được

| Chức năng | Sách xử lý thế nào |
|---|---|
| Module `照明设计` (`⌥8`) | Không dạy. Mất `光照分析图` — xem B16 |
| `一键生成灯带` | Sách dạy đặt `面光源` dải mảnh bằng tay |
| `图案排版` + `翻转` | Sách dạy làm đối hoa gương thủ công trong Photopea |
| `衰减贴图` | Bỏ khỏi giáo trình |

- [ ] Đã bấm thử cả bốn, xác nhận bị chặn
- [ ] Nếu có cái nào **bấm được** → **báo ngay**, vì sách đang dạy đường vòng không cần thiết

---

## H. Ghi lại giao diện tiếng Anh (nếu công ty dùng bản tiếng Anh)

Kujiale **có** chuyển được giao diện sang tiếng Anh. Nhưng nhãn tiếng Anh **không suy được** từ tên tiếng Trung — sách đã bắt ba trường hợp dịch lệch. Nếu bạn dùng bản tiếng Anh, ghi lại nhãn thật.

| Đã xác nhận | 中文 | English |
|---|---|---|
| ✅ | `渲染` | **`Images/Videos`** — không hề có chữ "Render" |
| ✅ | `工具` | `Toolkit` |
| ✅ | `层高` | `Room height` |
| ✅ | `行业库` | `Advanced` |
| ✅ | `门窗洞` (lỗ **tường**) | `Opening` |
| ✅ | `洞口` (lỗ **sàn/trần**) | `Floor opening` |
| ⚠️ | `包管` (hộp bao ống) | **`Partition wall`** — dịch lệch, dễ tìm nhầm |

**Việc của bạn:** chụp panel ánh sáng ở cả hai ngôn ngữ, ghi nhãn tiếng Anh của mọi tham số trong Chương 13. Đây là phần help center **không giúp được**, vì tài liệu chỉ có tiếng Trung.

---

## Checklist tự chấm

- [ ] **Xong bốn mục chặn cửa B1, B5, B8, B9 trước tiên**
- [ ] Đủ ảnh chụp cho mọi mục (trừ mục ✅ chỉ cần xác nhận đúng hay sai)
- [ ] B1 có ảnh panel đèn rõ đơn vị, và đã kiểm **cả ba** khả năng
- [ ] B5 có ảnh cả hai ô `阴影柔和度`, ghi rõ min-max từng ô
- [ ] Đã thử đủ bốn chức năng doanh nghiệp ở mục G, xác nhận bị chặn
- [ ] Đã báo ngay nếu có chức năng nào lệch với bản đồ quyền
- [ ] Đã nộp phiếu và thư mục ảnh cho quản lý
- [ ] Quản lý đã cập nhật số vào sách
