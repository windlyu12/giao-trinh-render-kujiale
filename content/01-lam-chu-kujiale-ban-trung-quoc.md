# C1. Làm chủ Kujiale bản Trung Quốc

> **Sau chương này bạn làm được:**
> - Đăng nhập tài khoản 高级会员 (hội viên cao cấp) có sẵn của công ty và tự đọc quyền lợi render của mình trong 会员中心 (trung tâm hội viên)
> - Nắm quy tắc 核豆 (điểm render) + phiếu render: cái gì tự về đầu chu kỳ, cái gì phải bấm lĩnh mỗi tuần kẻo mất
> - Phân biệt 3 chế độ render mới 实时轻量 / 实时专业 / 离线模式 và biết việc nào bắt buộc vào chế độ nào
> - Làm việc bình tĩnh trên giao diện tiếng Trung: hiểu vì sao tiện ích dịch trang không dịch được khu thiết kế, thuộc 15 thuật ngữ gặp nhiều nhất
> - Tự điền Phiếu verify trong app (Phụ lục B) cho các con số "chỉ xem được sau khi đăng nhập"

## 1.1 Tài khoản: bạn dùng tài khoản cao cấp có sẵn của công ty

Công ty đã mua bậc **高级会员** (hội viên cao cấp) trên kujiale.com. Bạn KHÔNG cần tự đăng ký hay tự trả tiền — chỉ cần:

1. Nhận email + mật khẩu tài khoản từ quản lý.
2. Vào `https://www.kujiale.com`, đăng nhập bằng email đó.
3. Rê chuột vào avatar góc phải trên → vào 会员中心 để xem quyền lợi thật của tài khoản (số 核豆 còn lại, phiếu render tháng này). Đây là nơi bạn sẽ ghé mỗi đầu tuần (lý do ở mục 1.2).

Quy ước dùng chung tài khoản công ty:

- **Luôn làm việc trên tài khoản công ty.** 方案 (phương án thiết kế) lưu trên tài khoản cá nhân miễn phí chỉ được giữ 30 ngày — làm nhầm tài khoản là mất bài.
- KHÔNG tự đổi mật khẩu, KHÔNG đưa tài khoản cho người ngoài. Mật khẩu do công ty quản lý tập trung.
- Đặt tên 方案 theo quy ước công ty (mã căn + phân khu + ngày) để người khác tìm được trong 工作台 (bàn làm việc — nơi quản lý mọi phương án, góc phải trên).
- Server Kujiale đặt tại Trung Quốc, mạng từ Việt Nam có lúc chậm khi tải thư viện mô hình. Nếu văn phòng bị chậm/rớt thường xuyên, báo quản lý — đó là việc của hạ tầng công ty, không phải bạn tự cài phần mềm lạ vào máy.

> 💡 **Tham khảo phụ — khi nào cần tự đăng ký tài khoản mới:** chỉ khi công ty mở thêm ghế. Đăng ký được bằng **email** (không cần số điện thoại Trung Quốc +86): bấm 注册 (đăng ký) → điền email + mật khẩu + mã xác minh → chọn 个人用户 (người dùng cá nhân) → chọn nghề 设计师 (nhà thiết kế). ⚠️ Hai điểm hay thay đổi với người nước ngoài: yêu cầu 实名认证 (xác thực danh tính) khi kích hoạt một số dịch vụ, và khâu thanh toán từ Việt Nam (đường khả thi là Alipay quốc tế gắn thẻ Visa/Mastercard, giao dịch trên 200 tệ chịu phí khoảng 3% — số của báo chí Trung Quốc 2023, kiểm tra lại trước khi mua). Việc này để quản lý làm, không nằm trong bài học của bạn.

## 1.2 Quyền lợi render của tài khoản: 核豆 + phiếu render

> ⚠️ **CẢNH BÁO — hệ điểm 核豆 mới, hiệu lực từ 01/03/2026:** Kujiale chuyển sang tính chi phí render bằng **核豆** (hạt điểm, phát theo tháng). Số 核豆 **tiêu cho mỗi ảnh** theo từng độ phân giải KHÔNG được công bố trên web — chỉ xem được trong app qua nút **「核豆消耗 - 查看详情」** (tiêu hao 核豆 - xem chi tiết) trong cửa sổ render. Giáo trình này **cố tình không in bảng giá cứng** — mọi con số tiêu hao bạn tự tra trong app và điền vào Phiếu verify (Phụ lục B). Gặp tài liệu/video nào in bảng "X 核豆/ảnh" thì coi là số hết hạn.

Tài khoản 高级会员 của công ty, theo bài chính thức《2026年个人会员权益变更说明》, mỗi tháng có:

| Quyền lợi | Con số | Ghi chú vận hành |
|---|---|---|
| 核豆 | **1.200 核豆/tháng** | Phát tự động mỗi 30 ngày; chu kỳ lẻ ngày thì quy đổi theo ngày |
| Lượt render 超清 (siêu nét) | **308 lượt/tháng** | Kèm **gói 300 phiếu 超清/tháng** phát 1 cục đầu chu kỳ — không còn kiểu phát theo ngày như trước |
| Độ phân giải phiếu | 4K cho 普通图 (ảnh thường)/俯视图 (ảnh nhìn từ trên xuống) + 4K 全景图 (ảnh toàn cảnh) | Bậc 基础 chỉ 3K ảnh thường; bậc 专业 mới mở 6K trở lên |
| Phiếu 6K toàn cảnh | **8 phiếu/tháng — phải TỰ LĨNH THEO TUẦN** tại 会员中心, mỗi lần lĩnh hạn dùng 7 ngày | **Quên lĩnh = mất.** Đưa vào thói quen sáng thứ Hai |
| Render đêm | 4K/5K không giới hạn trong khung **20:00–8:00** | Việc không gấp dồn vào tối để tiết kiệm phiếu |
| Hết giữa tháng | Được 增购 (mua thêm) 核豆/phiếu | Đơn giá không công bố web — xem 会员中心, và phải hỏi quản lý trước khi mua |

Ba điều phải nhớ ngay từ tuần đầu:

1. **Sáng thứ Hai: vào 会员中心 lĩnh phiếu 6K toàn cảnh.** Đây là loại phiếu duy nhất không tự về túi. Quên một tuần là mất 2 phiếu, không truy lĩnh được.
2. **Trước khi bấm render ảnh nét cao, liếc「核豆消耗 - 查看详情」** để biết ảnh này ăn bao nhiêu điểm. Thói quen này giữ cho cả team không cháy quỹ điểm giữa tháng.
3. **Chế độ 实时专业 (render thời gian thực chuyên nghiệp) tính tiền theo thời lượng bật preview.** ⚠️ Số tham chiếu cũ: 0,15 tệ/phút, tính theo giây thực dùng, tự ngắt khi bạn không thao tác — nhưng bài nguồn đăng trước khi hệ 核豆 chạy, chưa rõ nay còn thu kiểu này hay đã trừ 核豆. Kiểm tra lại theo Phiếu verify trong app (Phụ lục B). Trong lúc chưa chắc: đừng treo màn hình preview 实时专业 rồi bỏ đi ăn trưa.

> 💡 Còn gặp chữ **酷币** (xu Kujiale) trong tài liệu cũ: đó là tiền ảo nạp để render/tải bản vẽ khi hết phiếu, thuộc hệ cũ. Tài khoản công ty vận hành theo hệ 核豆 + phiếu là chính.

## 1.3 Giao diện render mới: 3 chế độ

> ⚠️ **CẢNH BÁO — UI render đã gộp từ 08/2025:** các nút 普通图 / 全景图 / 俯视图 / 视频 riêng lẻ mà bạn thấy trong video hướng dẫn cũ **không còn tồn tại**. Tất cả gộp vào 3 chế độ dưới đây. Mọi chương trong giáo trình này chỉ đường theo UI mới; gặp video/bài viết mô tả UI cũ, bạn tự quy chiếu về bảng này.

Rê chuột vào nút **渲染** (render) trên thanh công cụ trên cùng → hiện 3 lựa chọn:

| Chế độ | Dùng để làm gì | Chỉnh đèn tay (手动灯光)? | Đổi vật liệu? | Giới hạn |
|---|---|---|---|---|
| **实时轻量** (thời gian thực — nhẹ) | Vừa dựng vừa xem nhanh hiệu ứng, thử mẫu không khí | ✗ | ✗ | Ảnh thường 1K, toàn cảnh 2K; không video/俯视图 |
| **实时专业** (thời gian thực — chuyên nghiệp) | Canh đèn + vật liệu có preview tức thì | ✓ | ✓ | Tới 8K; không video/俯视图; tính phí theo thời lượng (mục 1.2) |
| **离线模式** (chế độ offline) | Ảnh final chất lượng cao, chạy hàng đợi | ✓ | ✓ | Tới 8K; **chế độ DUY NHẤT render được video và 俯视图** |

Cách nhớ nhanh: **nháp xem không khí → 实时轻量; canh đèn có preview → 实时专业; xuất bài final / video / ảnh mặt bằng → 离线模式.** Quy trình phối hợp 3 chế độ để tiết kiệm 核豆 học ở chương C2.

Ánh xạ tên cũ → mới (để đọc tài liệu cộng đồng không lạc đường):

| Tên cũ trong video/bài viết | Nay là |
|---|---|
| 实时自动模式 | 实时轻量 |
| 实时手动模式 / 实时渲染 | 实时专业 |
| Nút 普通图 / 全景图 / 俯视图 / 视频 | Đều nằm trong 离线模式 |

Hai thao tác phụ cần biết ngay:

- **Đặt chế độ mặc định:** avatar góc phải trên → 偏好设置 (thiết lập ưu tiên) → 渲染 → chọn ở mục 默认渲染模式 (chế độ render mặc định). Sau đó bấm thẳng nút 渲染 sẽ vào luôn chế độ đã đặt.
- **Mẫu đèn hiện hành:** dòng 极速 (tốc hành) chỉ còn **极速3.0 / 极速3.1**, các bản 1.x/2.x đã bị gỡ; kèm dòng 室内白天/夜晚 (trong nhà ngày/đêm) và 实时白天/夜晚. Mở phương án cũ có thể gặp nút 一键升级 (nâng cấp 1 chạm) — chi tiết và bẫy "nâng template xong ảnh cháy trắng" học ở C3, C4.

## 1.4 Rào cản tiếng Trung: vì sao tiện ích dịch không cứu được

Khu vực thiết kế của Kujiale là **vùng vẽ đồ họa (canvas WebGL)** — chữ trong đó do card đồ họa vẽ ra như hình ảnh, không phải văn bản web. Vì vậy:

- Tiện ích dịch trang như 沉浸式翻译 (Immersive Translate) hay Google Dịch **chỉ dịch được menu/nút ngoài rìa và các trang tài liệu, bài viết** — KHÔNG dịch được nhãn bên trong khu thiết kế và bảng tham số vẽ trên canvas.
- Kujiale bản Trung Quốc **không có nút chuyển giao diện sang tiếng Anh**. Bản tiếng Anh là sản phẩm riêng tên Coohom — thư viện và mẫu đèn khác, công ty đã chủ động không dùng. Đừng mất thời gian đi tìm "ẩn ngôn ngữ Anh".

Chiến thuật sống chung — 3 lớp:

1. **In Phụ lục C** (cheat sheet 97 thuật ngữ, chia 6 nhóm) khổ lớn, dán cạnh màn hình. Đây là công cụ số 1.
2. **Vẫn cài tiện ích dịch trang** — dùng cho trang trợ giúp kujiale.com/hc, bài Zhihu, mô tả khóa học. Đọc tài liệu thì tiện ích dịch rất được việc.
3. **Học thuộc 15 thuật ngữ lõi** ở mục 1.5 ngay tuần đầu — đủ để thao tác không phải tra bảng liên tục.

## 1.5 15 thuật ngữ gặp nhiều nhất — thuộc trong tuần đầu

Đây là những chữ bạn sẽ nhìn thấy hàng chục lần mỗi ngày. Bảng đầy đủ 97 mục kèm pinyin + tiếng Anh xem Phụ lục C.

| Chữ Hán | Đọc | Nghĩa | Gặp ở đâu |
|---|---|---|---|
| 渲染 | xuànrǎn | Render | Nút trên thanh công cụ — rê chuột hiện 3 chế độ |
| 方案 | fāng'àn | Phương án thiết kế | Tên gọi mỗi bản thiết kế |
| 工作台 | gōngzuòtái | Bàn làm việc | Nơi quản lý mọi 方案, góc phải trên |
| 素材库 | sùcáikù | Thư viện mô hình/vật liệu | Kéo–thả đồ vào cảnh |
| 保存 | bǎocún | Lưu | Ctrl+S — lưu 方案 |
| 效果图 | xiàoguǒtú | Ảnh phối cảnh (ảnh render) | Sản phẩm chính của bạn |
| 普通图 | pǔtōngtú | Ảnh thường (1 khung tĩnh) | Loại ảnh render cơ bản |
| 全景图 | quánjǐngtú | Ảnh toàn cảnh 360° | Khách quét mã xem VR |
| 俯视图 | fǔshìtú | Ảnh nhìn từ trên xuống | Chỉ render được ở 离线模式 |
| 灯光模板 | dēngguāng múbǎn | Mẫu ánh sáng (tự động) | Danh sách template khi vào render |
| 手动灯光 | shǒudòng dēngguāng | Đèn chỉnh tay | Kỹ năng lõi từ chương C4 |
| 材质 | cáizhì | Vật liệu | Gán lên bề mặt — trọng tâm C5 |
| 外景 | wàijǐng | Ngoại cảnh ngoài cửa sổ | Cột trái trong giao diện render |
| 亮度 | liàngdù | Độ sáng / cường độ | ⚠️ Có 2 thang số cũ/mới — xem C4 |
| 会员中心 | huìyuán zhōngxīn | Trung tâm hội viên | Nơi lĩnh phiếu 6K mỗi tuần |

## Thực hành

**Bài 1 — Đọc quyền lợi thật của tài khoản (15 phút).**
Đăng nhập tài khoản công ty → vào 会员中心. Chụp 3 màn hình: (1) bậc hội viên + số 核豆 đang còn, (2) số phiếu render tháng này, (3) chỗ lĩnh phiếu 6K toàn cảnh — lĩnh luôn phiếu tuần này nếu chưa lĩnh.
*Tiêu chí đạt:* nói được với quản lý "tháng này tài khoản còn X 核豆, Y phiếu, phiếu 6K tuần này đã lĩnh".

**Bài 2 — Test chỉ nút 5 phút.**
Mở một 方案 mẫu bất kỳ. Nhờ đồng nghiệp đọc ngẫu nhiên 15 thuật ngữ ở mục 1.5 (đọc nghĩa tiếng Việt), bạn chỉ đúng vị trí trên màn hình trong tổng 5 phút.
*Tiêu chí đạt:* ≥ 12/15. Chưa đạt thì dán Phụ lục C sát màn hình hơn và thi lại hôm sau.

**Bài 3 — Bài tập tuần đầu: điền Phiếu verify trong app (Phụ lục B).**
Cầm Phiếu verify ở Phụ lục B, lần lượt vào app tra và điền các mục "chỉ xem được sau đăng nhập" — trọng tâm chương này: bảng tiêu hao 核豆 mỗi ảnh qua「核豆消耗 - 查看详情」(thử với ảnh thường và toàn cảnh ở vài mức phân giải), cách 实时专业 đang tính phí, đơn giá 增购. Mỗi mục kèm ảnh chụp màn hình.
*Tiêu chí đạt:* điền xong các mục thuộc phạm vi C1, có ảnh chụp đính kèm, nộp quản lý lưu chung.

## Checklist tự chấm

- [ ] Đăng nhập được tài khoản 高级会员 công ty, biết vị trí 会员中心 và 工作台
- [ ] Nói đúng: 核豆 là gì, tài khoản được bao nhiêu 核豆/tháng, xem số tiêu mỗi ảnh ở đâu
- [ ] Đã tự tay lĩnh phiếu 6K toàn cảnh tuần này tại 会员中心
- [ ] Kể đúng tên + công dụng 3 chế độ render, và chế độ nào mới render được video/俯视图
- [ ] Biết đặt chế độ render mặc định trong 偏好设置
- [ ] Giải thích được vì sao tiện ích dịch trang không dịch được khu thiết kế
- [ ] Qua bài test chỉ nút ≥ 12/15
- [ ] Nộp Phiếu verify (Phụ lục B) phần các mục thuộc C1 kèm ảnh chụp

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Bật tiện ích dịch mà khu thiết kế vẫn nguyên tiếng Trung | Chữ trong canvas do GPU vẽ, không phải văn bản web | Chấp nhận — tra Phụ lục C, chỉ dùng tiện ích dịch cho trang tài liệu |
| Xem video cũ, tìm mãi không thấy nút 普通图/全景图 | UI gộp 3 chế độ từ 08/2025 | Vào 离线模式 — mọi loại ảnh cũ nằm trong đó |
| Cuối tháng thiếu phiếu 6K dù "được 8 phiếu/tháng" | Phiếu 6K phải tự lĩnh theo tuần, hạn 7 ngày, quên là mất | Đặt lịch cố định sáng thứ Hai vào 会员中心 lĩnh |
| Mất phương án sau 1 tháng | Làm nhầm trên tài khoản cá nhân miễn phí (方案 chỉ giữ 30 ngày) | Luôn kiểm tra avatar trước khi làm — phải là tài khoản công ty |
| Muốn render video mà trong 实时专业 không có | Video/俯视图 chỉ có ở 离线模式 | Chuyển sang 离线模式 |
| Tưởng Coohom là "Kujiale tiếng Anh", học lẫn tài liệu Coohom | Coohom là sản phẩm riêng, thư viện/template khác | Chỉ học theo tài liệu kujiale.com bản Trung |
| Treo preview 实时专业 rồi rời máy | Chế độ này tính phí theo thời lượng | Xem xong tắt; số phí cụ thể chờ verify Phụ lục B |

## Nguồn số liệu

- **Chính thức (help center kujiale.com/hc):**
  - 《2026年个人会员权益变更说明》— article 3FO4K4WPKVPL (cập nhật 2026-08-04, hiệu lực 01/03/2026): 1.200 核豆/tháng bậc 高级, 308 lượt + gói 300 phiếu/tháng, phiếu 6K 8 phiếu/tháng lĩnh theo tuần hạn 7 ngày, quyền 增购.
  - 《【渲染】三种渲染模式功能详解》— article 3FO4K4WCDICB (2025-08-18): 3 chế độ render, ánh xạ tên cũ→mới, giới hạn từng chế độ, cách đặt mặc định.
  - 《灯光模板…下线通知》— article 3FO4K4WCL5TL (2025-10-27): 极速3.0/3.1 thay dòng cũ, nút 一键升级.
  - 《【酷家乐棚拍】20251128功能更新》— article 3FO4K4WE4TYN (2025-11-28): vị trí nút「核豆消耗 - 查看详情」.
- **Cộng đồng / báo chí (⚠️ tham khảo):** quy trình đăng ký 个人用户→设计师 (hướng dẫn Zhihu); phí Alipay quốc tế ~3% cho giao dịch >200 tệ (báo 第一财经 2023). Chính sách đăng ký/thanh toán cho người nước ngoài đổi thường xuyên.
- **Chờ verify trong app (Phụ lục B):** bảng 核豆 tiêu mỗi ảnh theo độ phân giải; giá gói CNY + đơn giá 增购; mức phí 实时专业 hiện hành (số 0,15 tệ/phút lấy từ bài 3FO4K4WJ8L04 đăng 2024-11-12 — trước khi hệ 核豆 chạy).
