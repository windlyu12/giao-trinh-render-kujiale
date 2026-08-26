# C15. Xuất video từ Kujiale — làm được gì, mất bao nhiêu, vướng ở đâu

> **Sau chương này bạn làm được:**
> - Chọn đúng công cụ trong sáu dạng "video/ảnh động" của Kujiale — và không nhầm 漫游视频 với 全屋漫游
> - Biết tài khoản cá nhân bậc cao cấp render được video tới đâu, trần độ phân giải ở đâu
> - Tính được chi phí một clip theo 视频额度 và biết vì sao mỗi giây render dư là tiền vứt đi
> - Trả lời dứt khoát câu "Kujiale xuất dọc 9:16 cho TikTok được không" — và biết đường vòng chắc ăn
> - Kể được năm thứ Kujiale **không** làm được, để không hứa với sếp thứ máy không có
> - Chạy được quy trình mười bước từ cảnh đã dựng tới file MP4 nằm trong máy

---

> ## ⚠️ CẢNH BÁO ĐẦU CHƯƠNG — VIDEO KHÔNG PHẢI ẢNH DÀI RA
>
> Kujiale render video bằng cách **render từng khung hình một** (逐帧渲染) trên đám mây, cùng engine với ảnh tĩnh. Một giây video là 24–30 tấm ảnh xếp liền nhau.
>
> **Hệ quả 1 — tiền.** Mọi thứ đắt lên theo thời lượng, không theo số cảnh. Clip 40 giây tốn gấp bốn clip 10 giây, dù đẹp hơn không đáng kể.
>
> **Hệ quả 2 — thời gian.** Con số "render 10 giây" mà Kujiale quảng cáo là cho **ảnh tĩnh**. Video lâu hơn nhiều lần vì phải xếp hàng render cả chuỗi khung.
>
> **Hệ quả 3 — sai một chỗ là trả tiền lại cả đoạn.** Không có chuyện "render lại giây thứ 12". Đây là lý do gốc của lời khuyên xuyên suốt ba chương 15–17: **xuất nhiều đoạn ngắn, đừng xuất một đoạn dài.**
>
> **→ Chương này là chương tiền bạc và giới hạn. Đọc xong mới sang C16 dựng đường đi máy ảnh.**

---

## 15.1. Ba câu hỏi trả lời trước khi bấm bất cứ nút nào

| Câu hỏi | Trả lời ở đâu |
|---|---|
| Tài khoản của mình có render video không, tới độ nét nào? | 15.2 + 15.4 |
| Một clip tốn bao nhiêu, và tốn theo cái gì? | 15.6 |
| Ra file khung ngang hay khung dọc? | 15.5 — **câu vướng nhất, đọc kỹ** |

Trả lời sai câu ba là hỏng nhiều nhất: người ta dựng cả buổi, render xong mới phát hiện phải cắt dọc, mất hai phần ba bề ngang, tủ bếp hai bên bay hết.

---

## 15.2. Bản đồ sáu dạng "video / ảnh động" — đừng chọn nhầm

Kujiale gọi nhiều thứ khác nhau là "video". Sáu dạng dưới đây phục vụ sáu việc khác nhau:

| Dạng (tên TQ) | Đường vào | Dùng làm gì | Ai dùng được |
|---|---|---|---|
| **漫游视频** (video dạo quanh) | Rê chuột lên nút `渲染` → `漫游视频`; hoặc `工作台` → `方案详情` → `漫游视频` | **Clip chính để đăng mạng xã hội.** Tự đặt đường đi máy ảnh (`运镜`), ghép nhiều đoạn | ✅ `所有用户` (mọi người dùng) |
| **轻渲视频** (video render nhẹ) | `工作台` → `我的应用` → `轻渲视频` | Áp mẫu có sẵn, làm hàng loạt, một chạm chia sẻ | ✅ `所有用户`, **không cần hội viên** |
| **模板视频 / 剪辑成片 / 视频美化** | Trong bộ công cụ video | Ghép nhạc nền, chèn chữ bìa, dựng thành phẩm ngay trong Kujiale | ✅ `所有用户` |
| **全景图导出小视频** (toàn cảnh → clip ngắn) | Trong trình xem `全景图` | Clip xoay 360° tại chỗ, **cố định 15 giây**, **chỉ một phòng** | ✅ `所有用户` — free 5 lượt/ngày, trả phí 20 lượt/ngày |
| **生长动画 / 灯光动画 / 阳光动画 / 模型动效** | Trong `漫游视频` → `动画效果` | Đồ nội thất mọc lên, đèn biến đổi, nắng dịch chuyển, mở cánh tủ | ✅ `所有用户` |
| **AI视频 / AI工具箱-视频混剪** | Menu trên cùng → `AI` → `AI视频` | Ghép clip + lồng tiếng AI Trung/Anh tự động | ⚠️ Mới, tài liệu mỏng — thử trước khi đưa vào quy trình |

> 📌 **Đừng nhầm 漫游视频 với 全屋漫游.** Hai cái tên gần như nhau, hai thứ khác hẳn:
>
> | | `漫游视频` ✅ cái bạn cần | `全屋漫游` / `720云全景` |
> |---|---|---|
> | Ra cái gì | **File MP4** đăng TikTok/Facebook được | Ảnh 720° tương tác, quét QR để xem |
> | Bản chất | Video có chuyển động máy **do bạn dựng** | Người xem **tự xoay** bằng tay |
> | Đường vào | `渲染` → `漫游视频` | `渲染` → `全景图` → `生成3D全屋漫游` |
>
> Gửi khách xem nhà thì `全屋漫游` tuyệt vời. Nhưng nó không đăng lên TikTok được — TikTok chỉ ăn file video.

### Chọn dạng nào

- **Đăng TikTok/Facebook, cần kiểm soát:** `漫游视频`. Cả C16 và C17 viết cho dạng này.
- **Cần nhanh, chấp nhận mẫu có sẵn:** `轻渲视频`. Mẫu của nó thường đã ở khung dọc vì gắn thẳng với 抖音 — đây là **lối tắt nhanh nhất để có clip dọc**.
- **Gửi khách xem nhanh một phòng:** `全景图导出小视频`. Gần như miễn phí (tính theo lượt/ngày, không ăn 视频额度) nhưng cố định 15 giây, xoay tại chỗ, một phòng.

> 💡 **Mẹo tiết kiệm đáng giá nhất chương này:** những đoạn chỉ cần "xoay nhìn quanh phòng" thì dùng **全景图小视频** (tính theo lượt/ngày) thay vì `漫游视频` (ăn 额度 theo giây). Để dành 额度 cho các cú máy đi xuyên phòng — thứ mà toàn cảnh không làm được.

---

## 15.3. Giới hạn kỹ thuật — số nào chắc, số nào chưa

| Thông số | Giá trị | Độ tin cậy |
|---|---|---|
| Độ phân giải | **480p / 720p / 1080p** | ✅ Chính thức (3FO4K4WMJGUR: *"1080p已经是最高分辨率了"* — 1080p đã là cao nhất) |
| Trần của tài khoản cá nhân | **1080P**, kể cả bậc cao cấp | ✅ Chính thức |
| Chế độ chất lượng đặc biệt | **极致1080p** (cực nét 1080p) — khử nhấp nháy, dùng khi cảnh có `灯光动画` | ✅ Chính thức (3FO4K4WN7V2R) |
| Chế độ xem trước nhanh | **白天480/720** — chỉ để xem đường đi máy, *"以夜间720/1080P为准"* (lấy bản đêm 720/1080P làm chuẩn) | ✅ Chính thức (3FO4K4WNDBNE) |
| Chế độ render | **Chỉ `离线模式`** (chế độ offline) mới render được video | ✅ Chính thức — xem C1, C2 |
| Định dạng file | **MP4** | ⚠️ Cộng đồng — chưa có bài help chính thức |
| **FPS xuất ra** | **Chưa công bố** | ⚠️ Có nút `降低帧率` (giảm tốc độ khung) để chữa nhấp nháy → chắc chắn tồn tại một FPS mặc định, nhưng không ai công bố là bao nhiêu |
| **Thời lượng tối đa một clip** | **Chưa công bố** | ⚠️ Không có số ở bất kỳ nguồn nào |
| Số `片段` / `关键帧` tối đa | **Chưa công bố** | ⚠️ |
| Watermark cho tài khoản cá nhân | **Chưa có tuyên bố rõ ràng** | ⚠️ Kiểm trong app |
| Kênh alpha / render phân lớp (`分层`) | **Không có bằng chứng hỗ trợ** | ⚠️ Coi như không có với tài khoản cá nhân |
| Hạn mức tần suất theo tuần | ⚠️ Số lưu hành trên 知乎 (480p 100 lượt/tuần · 720p 50 · 1080p 5) là của **专业会员**, **không phải bậc cao cấp cá nhân**, và có từ **trước** đợt đổi hệ 额度 tháng 4/2026 | ⚠️ Chỉ dùng để hình dung xu hướng "1080P đắt hơn hẳn" — **đừng chép vào báo giá** |

> ⚠️ **Bốn ô "chưa công bố" ở trên là bốn ô bạn khoá được trong mười phút** khi mở app: FPS, thời lượng tối đa, danh sách tỉ lệ khung, watermark. Ghi vào **Phụ lục B mục I** rồi báo quản lý cập nhật sách.

---

## 15.4. Câu hỏi sống còn: Kujiale xuất dọc 9:16 được không?

**Trả lời thẳng: chưa có tài liệu công khai nào xác nhận có 9:16 gốc cho `漫游视频`.**

Tách rõ hai chuyện, vì trên mạng người ta hay trộn:

| Điều | Trạng thái |
|---|---|
| Có nút đổi tỉ lệ khung `构图比` trong bước `基础设置` | ✅ **Chính thức có** — bài 3FO4K4WM9WHW ghi rõ *"直接点击不同构图比按钮，可进行切换最终生成的视频构图比"* (bấm các nút tỉ lệ khác nhau để đổi tỉ lệ khung của video xuất ra) |
| Danh sách giá trị chọn được **gồm những gì** | ⚠️ **Không được công bố.** Không có bài nào liệt kê |
| Bản render `极速` (siêu tốc) hỗ trợ 16:9, 4:3, 3:4, 1:1 và đổi tỉ lệ **không làm giãn khung hình** | ✅ Có trong thông báo chính thức 《酷家乐极速版渲染上线》 — nhưng **đây là danh sách của bản 极速, không phải bằng chứng cho `漫游视频`** |
| Cộng đồng dùng gì cho phòng nhỏ | ⚠️ 知乎 (p/661888134): *"在小空间中，我们一般使用4：3的构图比例"* (không gian nhỏ thường dùng tỉ lệ 4:3) |

**Kết luận dùng được ngay:**

> ## 📌 Mở app, bấm vào `构图比`, chụp màn hình danh sách. Có 9:16 thì render thẳng dọc. Không có thì lấy tỉ lệ dọc nhất có được (3:4) rồi cắt nốt ở CapCut.
>
> Đừng ngồi tranh luận. Mười giây là biết. Ghi vào Phụ lục B mục I2.

**Ba đường chuyển ngang → dọc, xếp theo mức thiệt:**

| Cách | Được | Mất | Khi nào dùng |
|---|---|---|---|
| **Dựng cảnh sao cho cắt dọc vẫn đủ** | Không mất gì, đầy màn hình | Phải nghĩ trước lúc đặt máy | ⭐ **Tốt nhất — luôn ưu tiên.** Xem C16 |
| Cắt cúp giữa khung (crop) | Đầy màn hình, không viền đen | Cắt dọc từ 16:9 **mất khoảng 68% bề ngang**; từ 3:4 mất ít hơn nhiều | Khi chủ thể nằm giữa khung |
| Đặt khung + nền mờ (`画布模糊`) | Giữ trọn khung ngang | Hình nhỏ lại, nhiều khoảng trống trên dưới | Khi cần thấy cả phòng rộng |

**Cách dựng cảnh cho "cắt dọc vẫn đủ"** (chi tiết ở C16): đặt máy sao cho chủ thể chính — sofa, giường, đảo bếp — nằm trên **trục dọc giữa khung**; cho máy đi theo **chiều sâu** (tiến/lùi) thay vì quét ngang. Khung dọc ăn chiều sâu rất tốt và ăn chiều ngang rất tệ.

---

## 15.5. Chi phí — 视频额度, và chỗ nó gặp 核豆

### Con số chắc chắn nhất của cả chương

> ## Mỗi 15 giây video = 1 视频额度. Độ nét càng cao càng tốn nhiều.

Nguyên văn bài chính thức 3FO4K4WM9WHW (cập nhật 03/04/2026): *"视频额度权益正式上线，生成渲染视频可使用，**每15秒视频消耗1额度**"* và *"选择不同的清晰度会显示不同的消耗额度"* (chọn độ nét khác nhau sẽ hiện mức tiêu hao khác nhau).

| Quy tắc | Nội dung | Nguồn |
|---|---|---|
| Đơn vị tính | 15 giây = 1 额度 | ✅ 3FO4K4WM9WHW |
| Ảnh hưởng độ nét | Nét cao hơn → tốn 额度 nhiều hơn (mức cụ thể hiện trong hộp thoại) | ✅ |
| Chu kỳ phát | **Thứ Hai phát 额度 của tuần, tối Chủ nhật hết hạn** — không cộng dồn | ✅ |
| Render lỗi | Hoàn lại dưới dạng **`视频券`, hạn 1 tuần** | ✅ |
| `额度` khác `券` thế nào | `额度` = quyền lợi tặng kèm tài khoản, không có vé thực thể · `券` = tự mua hoặc trúng thưởng | ✅ |
| Tài khoản mới | *"新购买和续约账号会陆续停止送券"* — mua mới/gia hạn sẽ dần **ngừng được tặng券**, chuyển sang hệ 额度 tuần | ✅ |
| 核豆 của bậc cao cấp | **1200 核豆/tháng**, phát mỗi 30 ngày (thiếu 30 ngày thì tính theo ngày) | ✅ 3FO4K4WPKVPL |
| Bậc cao cấp mua thêm được gì | **`720P视频渲染券`** + các loại vé ảnh 3K/4K/6K + 核豆 | ✅ |

### Hai điều KHÔNG có số — đừng bịa

1. **Một video tốn bao nhiêu 核豆, hay giá RMB mỗi 核豆.** Không trang chính thức nào nêu. Hai hệ đơn vị đang chạy song song (video tính bằng `视频额度` theo giây, ảnh tĩnh tính bằng vé/核豆 theo tấm) và **Kujiale không cho hệ số quy đổi**.
2. **Video đắt gấp mấy lần ảnh tĩnh.** Cùng lý do trên. Muốn biết thì mở hộp thoại `生成视频`, chụp mức tiêu hao hiện trên đó — đó là con số duy nhất đúng cho tài khoản của bạn tại thời điểm đó.

> 📌 **Giáo trình này cố tình không in bảng giá cứng cho video**, đúng như đã làm với 核豆 ở C1. Bảng giá cứng hết hạn nhanh hơn tốc độ in sách.

### Cách tiêu 额度 khôn ngoan

| Việc | Cách làm | Vì sao |
|---|---|---|
| Chia đoạn | Mỗi phòng / mỗi cú máy **một đoạn 8–15 giây** | Sai đoạn nào render lại đoạn đó, không trả tiền lại cho cả clip |
| Chọn độ nét theo vai trò | **1080P** cho clip toàn-render · **720P** cho b-roll ngắn 3–5 giây xen vào clip quay thật | B-roll 3 giây lên điện thoại, sau khi thêm hạt nhiễu (C17) thì 720P không ai nhận ra |
| Dư đầu đuôi | Dư **1 giây mỗi đầu**, không hơn | Khâu dựng cần chỗ cho chuyển cảnh "ăn" vài khung và cắt trúng nhịp nhạc. Quay phim chuyên nghiệp dư 3–5 giây; ở đây dư nhiều là đốt 额度 |
| Đoạn xoay quanh phòng | Dùng `全景图小视频` thay vì `漫游视频` | Tính theo lượt/ngày, không ăn 额度 |
| Xem trước | Bấm **Play xem trước đường đi** trong Kujiale trước khi trả 额度 | Miễn phí. Bắt được lỗi xuyên tường, quét vào tường trống |

---

## 15.6. Thời gian chờ và hàng đợi đêm

| Việc | Sự thật |
|---|---|
| Xem tiến độ | Vào `图册` (thư viện ảnh) xem *"正在渲染的视频任务以及等待时长"* (tác vụ video đang render và thời gian chờ) — ✅ chính thức |
| Render mất bao lâu | ⚠️ Nguồn cộng đồng nói cảnh phức tạp mất **5–15 phút**; một tài liệu khác nói 1080P có thể tới **~1 giờ**. Hai con số này chỏi nhau và **cả hai đều không phải số chính thức** — đo trên tài khoản mình rồi ghi vào Phụ lục B |
| Hàng đợi đêm rẻ hơn | Cơ chế phân biệt thời đoạn **có tồn tại**: tài liệu `棚拍` nêu ban ngày (6:00–20:00) khi render sẽ hiện lựa chọn thời điểm, *"夜间渲染更优惠"* (render ban đêm ưu đãi hơn). ⚠️ Nhưng mức ưu đãi cụ thể **cho `漫游视频` thì chưa công bố** |

**Việc thực tế rút ra:** đặt render video vào cuối buổi chiều, để máy chạy qua đêm, sáng hôm sau tải về và dựng. Đừng đặt render lúc 9 giờ sáng rồi ngồi chờ.

---

## 15.7. Năm thứ Kujiale KHÔNG làm được

Phần này quan trọng ngang phần làm được — nó chặn bạn hứa với sếp hoặc với khách thứ máy không có.

| Muốn | Sự thật | Nguồn |
|---|---|---|
| **Rèm bay, người đi qua, nước chảy, mèo chạy ngang** | ❌ **Không có mô phỏng vật lý.** Chỉ có `生长动画` (đồ mọc lên), `模型动效`, `行业动效` (mở/đóng cánh tủ, cửa, cửa sổ) | Nhóm `动画效果` chính thức không có mục nào cho nước/người/rèm |
| **Đèn khác nhau ở các đoạn khác nhau trong cùng một clip** | ❌ Mẫu đèn đặt ở `基础设置` áp cho **toàn bộ video**. Muốn đèn biến đổi phải dùng `灯光动画` — đó là hiệu ứng, không phải đặt đèn tĩnh khác nhau cho từng `片段` | ✅ `灯光动画` có (3FO4K4VHSONT) |
| **Ngày chuyển sang đêm trong một clip** | ⚠️ Làm được **một phần** qua `阳光动画` (dịch góc chiếu nắng) kết hợp `灯光动画` | ✅ có `阳光动效` |
| **Vật liệu phức tạp đầy đủ như ảnh tĩnh ở bản xem trước ban ngày** | ❌ Bản `白天480/720` **giản lược mạnh**: `体积光` (tia sáng thể tích) và `辉光` (quầng sáng) *"不支持，场景中存在会被删除"* (không hỗ trợ, có trong cảnh sẽ bị xoá); `窗纱`/`玻璃` (rèm voan/kính) *"大部分会出现问题，建议使用材质替换为实时材质"* | ✅ 3FO4K4WNDBNE |
| **Chống xuyên tường khi đi máy** | ❌ **Không có phát hiện va chạm.** Máy đi xuyên tường tự do — bạn tự canh. Xem C16 | — |

> ## 📌 Luật vàng của chương: **luôn lấy bản đêm 720/1080P làm chuẩn.**
> Bản `白天480/720` chỉ để xem đường đi máy và bố cục đèn. Đừng bao giờ gửi khách bản đó, và đừng bao giờ kết luận "vật liệu này lỗi" dựa trên bản đó.
>
> **Trước khi render video, đổi `窗纱`/`玻璃` sang `实时材质` (vật liệu thời gian thực)** để tránh lỗi biến màu đen/tím.

---

## 15.8. Bẫy phiên bản 2024–2026

| Mốc | Đổi gì | Hệ quả với bạn |
|---|---|---|
| **02/2021** | Kujiale ra bộ `渲染视频` (漫游视频, 生长动画, 灯光动画, 模型动画) | Mọi tài liệu trước mốc này không có video |
| **14/09/2021** | Nâng lên **漫游视频 2.0** | Ảnh chụp UI cũ hơn không còn khớp |
| **08/2025** | **Gộp lối vào render thành 3 chế độ** (xem C1, C2) | Nút `视频` riêng lẻ trong video hướng dẫn cũ **không còn tồn tại** — vào `离线模式` |
| **01/03/2026** | Áp quyền lợi hội viên cá nhân mới, **lần đầu đưa 核豆 vào** (cao cấp 1200 核豆/tháng) | Mọi bảng giá tính bằng vé đều lỗi thời |
| **03/04/2026** | Video chuyển sang **`视频额度` theo tuần** (15s = 1 额度); tài khoản mua/gia hạn mới dần ngừng được tặng vé | Đây là hệ đang chạy |
| **Không rõ ngày** | Có hẳn bài *"视频工具结构升级"* (nâng cấp cấu trúc công cụ video, mã 3FO4K4WQG6NN) | **Mọi ảnh chụp menu video cũ có thể đã sai vị trí** — luôn ưu tiên đường vào ở bảng 15.2 |

**Tài liệu đã lỗi thời, cẩn trọng khi trích:** bài `轻渲教程个人版` (cập nhật 10/2022) và bài `白天480/720` (10/2022) vẫn mô tả theo **hệ vé cũ** — số vé và quy tắc phát trong đó không còn khớp hệ 额度 2026. Phần mô tả kỹ thuật (vật liệu bị giản lược) thì vẫn dùng được; phần tiền bạc thì bỏ.

---

## 15.9. Quy trình mười bước — từ cảnh đã dựng tới file MP4

Chương này lo bước 1–7. C16 lo đường đi máy (bước 3). C17 lo bước 8–10.

```
① Rà model + đánh đèn      → như đã học C4, C13. Đèn phải đủ cho CẢ TUYẾN máy chạy,
                              không chỉ một góc tĩnh
② Đổi 窗纱/玻璃 → 实时材质   → tránh lỗi biến màu đen/tím khi render video
③ 渲染 → 漫游视频           → dựng đường đi bằng 关键帧, hoặc nhập từ 镜头库  ← C16
④ Bấm PLAY xem trước       → MIỄN PHÍ. Soi xuyên tường, vùng tối, tường trống
⑤ 基础设置                  → chọn 构图比 (dọc nhất có thể) + mẫu đèn ĐÊM
⑥ 生成视频                  → chọn 1080p (hoặc 极致1080p nếu cảnh có 灯光动画)
                              → ĐỌC mức tiêu hao 额度 hiện trên hộp thoại trước khi xác nhận
⑦ Chờ render               → xem tiến độ ở 图册; đặt vào cuối buổi cho rẻ và đỡ chờ
⑧ Tải MP4 về               → đổ vào thư mục theo quy ước, KHÔNG ghi đè bản gốc   ← C17
⑨ Dựng ở CapCut/剪映        → khung 9:16, ghép đoạn, chỉnh màu, hạt nhiễu, nhạc  ← C17
⑩ Xuất + đăng              → 1080×1920, H.264, AAC, 30fps, ~8 Mbps              ← C17
```

> ⚠️ **Bước ④ là bước người ta hay bỏ và hay hối hận nhất.** Xem trước không tốn 额度. Render xong mới thấy máy chui qua tường thì mất cả đoạn.

---

## Thực hành

**Bài 1 — Khoá bốn ô trống của chương (15 phút, làm sớm nhất có thể):**
Mở một phương án bất kỳ → `渲染` → `漫游视频` → `基础设置`. Chụp màn hình bốn thứ: (a) **danh sách đầy đủ của `构图比`** — có 9:16 không; (b) hộp thoại `生成视频` với **mức tiêu hao 额度** cho 720p và cho 1080p của cùng một đoạn; (c) chỗ nào ghi **FPS** hoặc nút `降低帧率`; (d) khi đặt đoạn dài dần, tới độ dài nào thì **báo vượt giới hạn**.
*Tiêu chí đạt:* điền được bốn dòng vào Phụ lục B mục I, mỗi dòng kèm một ảnh chụp màn hình.

**Bài 2 — Đo giá thật của một clip:**
Lấy một phòng đã dựng xong. Đặt một đoạn 15 giây. Ghi mức 额度 hiện ra ở 480p, 720p, 1080p. Rồi đặt đoạn 30 giây, ghi lại ba mức đó lần nữa.
*Tiêu chí đạt:* trả lời được bằng số: "clip 30 giây 1080P của công ty mình tốn ___ 额度, tức ___ % quota tuần" — và nói được 720p rẻ hơn 1080p bao nhiêu lần.

**Bài 3 — Ba dạng cho cùng một phòng:**
Cùng một phòng khách, tạo ba thứ: (a) một `漫游视频` 10 giây đi từ cửa vào; (b) một `全景图小视频` 15 giây; (c) một clip từ `轻渲视频` dùng mẫu có sẵn.
*Tiêu chí đạt:* nói được mỗi dạng tốn gì, mất bao lâu, ra khung ngang hay dọc, và **dạng nào bạn sẽ dùng cho công việc hằng ngày** — kèm lý do bằng số, không phải cảm tính.

## Checklist tự chấm

- [ ] Phân biệt được `漫游视频` và `全屋漫游`, nói được cái nào ra file MP4
- [ ] Biết video chỉ render được ở `离线模式`, trần 1080P với tài khoản cá nhân
- [ ] Nhớ con số 15 giây = 1 额度 và biết quota hết hạn tối Chủ nhật
- [ ] Mở được hộp thoại `生成视频` và đọc mức tiêu hao trước khi bấm xác nhận
- [ ] Đã tự kiểm danh sách `构图比` trên app, biết chắc có 9:16 hay không
- [ ] Kể được năm thứ Kujiale không làm được (rèm bay, người đi, đèn khác theo đoạn, vật liệu ở bản ngày, chống xuyên tường)
- [ ] Nhớ đổi `窗纱`/`玻璃` sang `实时材质` trước khi render video
- [ ] Luôn bấm Play xem trước trước khi trả 额度

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Không tìm thấy nút render video | UI đã gộp 3 chế độ từ 08/2025; video chỉ có ở `离线模式` | Vào `离线模式`; đường vào theo bảng 15.2 |
| Render xong mới biết phải cắt dọc, mất hai bên khung | Không chốt tỉ lệ khung từ đầu | Chốt `构图比` ở `基础设置` **trước** khi render; dựng cảnh cho cắt dọc vẫn đủ (C16) |
| Rèm voan/kính bị đen hoặc tím trong video | Vật liệu phức tạp bị giản lược ở chế độ video | Đổi sang `实时材质` trước khi render; lấy bản đêm 720/1080P làm chuẩn |
| Video mất `体积光`, mất quầng sáng so với ảnh tĩnh | Đang xem bản `白天480/720` — hai hiệu ứng này bị **xoá khỏi cảnh** | Render lại ở bản đêm 720/1080P |
| Đèn nhấp nháy giữa các khung | Tham số đèn đổi giữa các khung; độ nét thấp | Render 1080P hoặc `极致1080p`; dùng nút `降低帧率`; tránh `灯光动画` đổi mạnh khi máy đang chạy |
| Hết 额度 giữa tuần | Render đoạn dài ở 1080P cho mọi thứ | Chia đoạn ngắn; b-roll để 720P; đoạn xoay tại chỗ chuyển sang `全景图小视频` |
| Quota tự nhiên biến mất | 额度 phát thứ Hai, **hết hạn tối Chủ nhật**, không cộng dồn | Lên lịch render trong tuần; vé hoàn do render lỗi cũng chỉ hạn 1 tuần |
| Sửa một chỗ nhỏ phải trả tiền lại cả clip | Xuất một đoạn dài liền | Xuất nhiều đoạn ngắn 8–15 giây, ghép ở CapCut |

## Nguồn số liệu

**Chính thức (Kujiale help center):**
- `漫游视频` mở cho `所有用户`: bài 3FO4K4VIH0IS, 3FO4K4VIJARH
- **视频额度 — 15 giây = 1 额度**, chu kỳ tuần, hoàn vé khi lỗi: bài 3FO4K4WM9WHW (cập nhật 03/04/2026) — con số chắc nhất của chương
- Quyền lợi hội viên cá nhân, 核豆 1200/tháng bậc cao cấp: bài 3FO4K4WPKVPL (cập nhật 04/08/2026, hiệu lực 01/03/2026)
- Trần 1080p, `轻渲视频` không cần hội viên: bài 3FO4K4WMJGUR
- Bản ngày 480/720 giản lược vật liệu, `体积光`/`辉光` bị xoá: bài 3FO4K4WNDBNE
- `极致1080p`: bài 3FO4K4WN7V2R · `灯光动画` ra mắt: bài 3FO4K4VHSONT
- `全景图小视频` (5 lượt/ngày free, 20 lượt/ngày trả phí, 15 giây, một phòng): bài 3FO4JYHXYBMA
- Nâng cấp cấu trúc công cụ video: bài 3FO4K4WQG6NN
- Mốc ra mắt bộ 渲染视频 02/2021, nâng 2.0 ngày 14/09/2021: China Daily 29/04/2021

**Cộng đồng / chưa xác nhận (đã đánh ⚠️ trong bài):**
- Định dạng MP4 · thời gian render 5–15 phút: trang mirror pc-kujiale.com.cn
- Hạn mức tuần 480p/720p/1080p: 知乎 zhuanlan p/611538440 — **của 专业会员, trước 04/2026**
- Tỉ lệ 4:3 cho không gian nhỏ: 知乎 zhuanlan p/661888134

**Chờ verify trên app (Phụ lục B mục I):**
- I1 mức tiêu hao 额度 theo độ nét · I2 danh sách `构图比` có 9:16 không · I3 FPS xuất
- I4 thời lượng tối đa một clip · I5 watermark · I6 thời gian render thật

---

## Tự tra video thực chiến

> 📌 **Sách này cho bạn ĐƯỜNG ĐI. Video cho bạn ĐÔI TAY.**
>
> Chương vừa rồi dựng khung: công cụ nào làm được gì, tốn bao nhiêu, vướng ở đâu. Nhưng thao tác thật — bấm chỗ nào, hộp thoại hiện ra sao — thì **xem người ta quay màn hình học nhanh hơn đọc nhiều lần.**
>
> **Đọc chương xong, tra vài video về đúng chức năng xuất video, rồi quay lại làm.**

Dán nguyên cụm vào ô tìm kiếm của **小红书** hoặc **抖音 (Douyin)**:

| Từ khoá | Tìm được gì |
|---|---|
| `酷家乐 漫游视频 教程` | Hướng dẫn video dạo quanh từ đầu tới cuối |
| `酷家乐 视频额度` | Cách tính phí video mới nhất |
| `酷家乐 轻渲视频` | Dạng video render nhẹ, làm hàng loạt |
| `酷家乐 全景图 小视频` | Clip 15 giây xuất từ ảnh toàn cảnh |
| `酷家乐 视频 竖版` | Người TQ làm clip dọc từ Kujiale thế nào |
| `酷家乐 灯光动画` | Hiệu ứng đèn biến đổi |

> 💡 **Bốn quy tắc lọc, dùng cho mọi từ khoá:** sắp theo `最新` (mới nhất) · ưu tiên bài có **ảnh chụp hộp thoại kèm số** · bỏ bài `AI一键` (quảng cáo) · **mọi bài nói về tiền mà đăng trước 04/2026 thì bỏ phần tiền, chỉ giữ phần thao tác** — hệ 额度 đã đổi.
