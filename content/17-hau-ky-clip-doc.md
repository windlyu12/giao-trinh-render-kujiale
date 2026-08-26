# C17. Hậu kỳ clip dọc — từ file Kujiale tới video đăng được

> **Sau chương này bạn làm được:**
> - Đặt quy ước xuất và đặt tên file để không bao giờ phải render lại vì lỡ ghi đè
> - Dựng ba dạng clip: toàn render · render xen quay thật · so sánh trước–sau
> - Kéo đoạn render về phía cảnh quay điện thoại bằng sáu kỹ thuật cụ thể, có số
> - Chọn đúng kiểu chuyển cảnh, và biết kiểu nào làm lộ "mùi phần mềm"
> - Xuất một file dùng được cho cả TikTok lẫn Facebook, chữ không bị nút che
> - Lưu một bản mẫu để clip thứ hai trở đi làm trong 45 phút thay vì 2 tiếng

---

> ## 📌 LUẬT SỐ MỘT CỦA CẢ CHƯƠNG
>
> ## KÉO RENDER VỀ PHÍA QUAY THẬT. KHÔNG BAO GIỜ KÉO NGƯỢC LẠI.
>
> Cảnh quay bằng điện thoại là "chuẩn thực tế" mà người xem tin. Render phải hạ mình xuống cho khớp: mềm đi, có hạt, hơi rung, bớt rực.
>
> Làm ngược — chỉnh cảnh quay thật cho "sạch" như render — thì **cả hai đoạn cùng giả**, và clip hỏng theo cách không sửa được.
>
> Luật này là em ruột của luật ở C14: *thêm hạt nhiễu để ảnh hết "nhựa"*. Ở video thì phải làm mạnh tay hơn, vì chuyển động phơi bày sự hoàn hảo rõ hơn ảnh tĩnh nhiều.

---

## 17.1. Quy ước xuất — quyết định trước khi render, không phải sau

Kujiale tính tiền theo thời lượng (C15), nên mỗi giây render dư là 额度 vứt đi. Nguyên tắc: **render đúng cái sẽ dùng, ở độ nét đủ dùng, dọc sẵn nếu được.**

| Việc | Chốt thế nào |
|---|---|
| Chia đoạn | Mỗi phòng / mỗi cú máy **một đoạn 8–15 giây** |
| Độ nét | **1080P** cho clip toàn render · **720P** cho b-roll 3–5 giây xen vào clip quay thật |
| Tỉ lệ khung | Dọc nhất `构图比` cho phép; không có 9:16 thì lấy 3:4 (cắt thêm chút là ra 9:16 — mất ít hơn hẳn so với cắt từ 16:9) |
| Dư đầu đuôi | **Dư 1 giây mỗi đầu.** Đủ cho chuyển cảnh "ăn" vài khung và cắt trúng nhịp nhạc. Đừng dư 3–5 giây kiểu quay phim chuyên nghiệp — ở đây dư là tiền |

**Cây thư mục — dùng chung cả công ty:**

```
/DuAn_TenKhachHang_Ma/
   /01_Render_Goc/        ← file tải từ Kujiale, TUYỆT ĐỐI KHÔNG SỬA, KHÔNG GHI ĐÈ
       CanHo_A12_Bep_1080p_v1.mp4
       CanHo_A12_PhongKhach_1080p_v1.mp4
   /02_Quay_That/
       A12_bep_quay_30fps.mp4
   /03_Nhac_Chu/
   /04_Draft_CapCut/
   /05_Xuat_Cuoi/
       A12_TikTok_1080x1920_final.mp4
```

Quy ước tên: `[Căn]_[Phòng]_[Độ nét]_[phiên bản]`.

> ⚠️ **Thư mục 01 là thư mục bất khả xâm phạm.** Ghi đè một file render gốc = mất 额度 để render lại. Đây là quy ước rẻ nhất và bị vi phạm nhiều nhất.

---

## 17.2. Vì sao render và cảnh quay điện thoại "chỏi" nhau

Hai loại hình khác nhau về **bản chất vật lý**, không phải về thẩm mỹ:

| Đặc điểm | Render Kujiale | Quay điện thoại |
|---|---|---|
| Độ nét | Nét đều toàn khung, sắc lạnh | Nét ở giữa, mờ dần ra rìa |
| Nhiễu | **Sạch tuyệt đối** | Có hạt, nhất là vùng tối |
| Rung | Đứng yên / mượt tuyệt đối | Rung tay nhẹ, liên tục |
| Màu | Chuẩn theo mẫu đèn (thường ám vàng ấm) | Ám theo đèn phòng thật, cân bằng trắng lệch |
| Nhoè chuyển động | Thường không có | **Luôn có** khi chuyển động |
| Quang sai / tối góc | Không | Có — đặc trưng ống kính điện thoại |

Sáu dòng này chính là sáu việc phải làm ở 17.4. Mỗi dòng là một cách người xem nhận ra "cái này là 3D".

---

## 17.3. Dạng 1 — clip toàn render

Clip 20–40 giây toàn hình dựng dễ **đều đều gây chán**, vì máy 3D quá mượt và không có gì bất ngờ. Việc của khâu dựng là tạo **nhịp**, **điểm dừng** và **điểm nhấn**.

| Phần | Thời lượng | Nội dung | Kỹ thuật |
|---|---|---|---|
| Mở | 0–3 s | Cú máy ấn tượng nhất (thường phòng khách nhìn thẳng) | Vào thẳng, **không fade** |
| Thân | 3–30 s | Đi qua từng phòng theo tuyến hợp lý (cửa → khách → bếp → ngủ → tắm) | Cắt đoạn theo phòng, chuyển cảnh ở ngưỡng cửa |
| Kết | 30–40 s | Quay lại góc đẹp nhất + đứng yên 2 giây cho câu chốt/logo | Chậm dần rồi dừng |

**Cắt nhiều đoạn ngắn, đừng để một cú máy dài.** Người xem TikTok lướt nhanh: cảnh đổi mỗi **2–4 giây** giữ chân tốt hơn hẳn một cú máy liền 30 giây. Cắt đoạn còn giúp khớp nhịp nhạc.

**Chuyển giữa các phòng:**
- **Ngưỡng cửa làm điểm cắt tự nhiên** — camera đi qua khung cửa thì cắt.
- **Match cut theo chuyển động**: kết đoạn A đang tiến về phía cửa, mở đoạn B cũng đang tiến vào. Mắt đọc là liền mạch.

**Tua nhanh bao nhiêu là còn tự nhiên:**

| Đoạn | Tốc độ |
|---|---|
| Hành lang, đoạn nối, không có gì đặc biệt | 1,25× – 1,5× |
| Lướt qua phòng phụ | 1,5× – 2× |
| Khu vực đẹp cần khoe (bếp, đảo bếp, đầu giường) | **1,0× hoặc 0,75× chậm lại** |

> ⚠️ **Trên 2× là bắt đầu lộ giả** với video 3D, vì thiếu nhoè chuyển động. Buộc phải tua nhanh thì thêm chút làm mờ chuyển động.

**Chèn ảnh tĩnh (效果图) — nên làm.** Chèn 1–2 giây ảnh render chất lượng cao vào điểm nhấn tạo "nhịp thở", cho người xem kịp đọc chi tiết. Ảnh tĩnh thường nét và đẹp hơn từng khung của video, và là chỗ tốt để đặt câu chốt hoặc giá.
**Mẹo:** cho ảnh tĩnh phóng to chậm (`缩放` + keyframe, kiểu Ken Burns) để không bị "khựng" giữa video đang động.

**Speed ramp (`曲线变速`):** vào phòng chậm → lướt nhanh giữa phòng → chậm lại ở điểm đẹp. Thao tác: chọn clip → `变速` → `曲线变速` → `自定义`; thêm/bớt điểm bằng nút +/−; kéo điểm **lên = nhanh**, **xuống = chậm**.

**Âm thanh:** render không có tiếng hiện trường — nó "vô hồn" theo đúng nghĩa đen. Thêm tiếng môi trường nhẹ (tiếng phố xa, tiếng chim ngoài ban công) và foley (bước chân, tiếng cửa) thì clip sống hẳn lên. Chi tiết ở C18.

---

## 17.4. Dạng 2 — b-roll render xen clip quay thật ⭐ TRỌNG TÂM

Đây là dạng ra khách tốt nhất (lý do ở C18) và cũng là dạng khó nhất về kỹ thuật.

**Độ dài đoạn render xen vào: 3 giây là vừa nhất, tối đa 5 giây.** Đủ để khoe mà chưa kịp lộ chất render. Quá 5 giây, mắt bắt đầu nhận ra sự "quá hoàn hảo".

**Đặt ở đâu:** rải đều, chèn vào giữa các nhịp, **không dồn một cục**. Công thức hay dùng:

```
quay thật (hook) → 3s render (khoe kết quả) → quay thật (giải thích)
   → 3s render (góc khác) → quay thật + câu chốt
```

**Tránh mở đầu bằng render** — người xem nghi "quảng cáo" rồi lướt.

### ① Chỉnh màu cho khớp — quan trọng nhất

Làm ở **đoạn render**, kéo nó về phía cảnh quay thật. Công cụ: CapCut → `调节` (điều chỉnh).

**Điểm tham chiếu để so bằng mắt:** chọn **một mảng tường trắng, một mảng gỗ, hoặc da người** xuất hiện ở cả hai loại hình; chỉnh cho mảng đó trông cùng màu. Bản điện thoại không có ống hút màu, nên so bằng mắt qua điểm tham chiếu là cách chính.

Render Kujiale thường ám vàng, tương phản cao, bão hoà cao. Hướng chỉnh điển hình:

| Thông số | Hướng chỉnh đoạn render | Vì sao |
|---|---|---|
| `色温` (nhiệt độ màu) | Giảm nhẹ về xanh nếu render ám vàng; tăng nếu cảnh quay thật ám vàng hơn | Khớp cân bằng trắng |
| `色调` (tint) | Chỉnh nhẹ về xanh lá / hồng cho khớp da người | Khớp ám màu đèn phòng |
| `饱和度` (bão hoà) | **Giảm 5–15** | Render rực hơn thực tế |
| `对比度` (tương phản) | **Giảm 5–10** | Render tương phản gắt hơn |
| `高光` (vùng sáng) | Giảm nhẹ | Kéo vùng sáng render về mức camera chịu được |
| `阴影` (vùng tối) | Tăng nhẹ (mở vùng tối) | Camera điện thoại ít chi tiết ở vùng tối gắt |

Bản `剪映专业版` trên máy tính có **HSL** và **`曲线`**: dùng HSL chỉnh riêng màu gỗ/tường; dùng đường cong **kéo nhẹ chân đen lên** (lifted blacks) để giả cảm giác camera — video camera hiếm khi có đen tuyệt đối. Nguyên lý đường cong đã học ở C14.

### ② Thêm hạt nhiễu — bước hàn gắn mạnh nhất

**Grain phủ lên cả hai đoạn làm chúng thành "cùng một chất liệu".** Đây là kỹ thuật ăn tiền nhất của cả chương.

| Nơi làm | Thao tác | Mức |
|---|---|---|
| CapCut điện thoại | `特效` → `基础`/`复古` → `噪点胶片` / `老电影` / `颗粒噪点` | **30–60%** |
| CapCut điện thoại (bản mới) | `调节` → `噪点` (nằm dưới `锐化`) | **15–40** |
| `剪映专业版` máy tính | `特效` → `噪点` → chọn **`小颗粒`** (hạt nhỏ) | `小颗粒` khớp 1080p tốt nhất; tránh `大颗粒` |

**Vùng sáng chịu grain cao hơn (40–60); vùng tối để thấp (15–30)** — để cao ở vùng tối thì hạt vón cục và xuất hiện màu loang.

> ## 📌 Mẹo của dân dựng phim: phủ MỘT lớp grain lên TOÀN BỘ timeline — cả đoạn quay thật lẫn đoạn render — thay vì chỉ thêm vào render.
> Cách làm chuẩn nhất: xuất một lớp grain riêng rồi phủ lên bằng chế độ hoà trộn `叠加` (overlay) hoặc `柔光` (soft light). Đồng nhất chất liệu tuyệt đối.

### ③ Rung tay giả — rất nhẹ thôi

Hai cách:
- **Nhanh:** `特效` → `抖动` (rung) cường độ thấp.
- **Chính xác hơn — dùng keyframe trên đoạn render:**
  1. Phóng to đoạn render lên **103–105%** (để có chỗ xê dịch mà không lòi mép).
  2. Mỗi khoảng **0,5 giây** thêm một keyframe chỉnh `位置`: **X: +2% → −2%**, **Y: +1% → −1%**.

**Biên độ tự nhiên là ±1–2%.** Mạnh hơn thành "giả bộ rung", lộ liễu hơn cả không rung. (Hướng dẫn 剪映 phổ biến khuyên cường độ `抖动` khoảng 5% để *"mô phỏng cảm giác quay tay, tránh hình quá đứng như thật"*.)

### ④ Xử lý lệch độ nét

- Render quá nét → `调节` → **`锐化` kéo về âm / giảm**; hoặc thêm `模糊` → `高斯模糊` (làm mờ Gauss) cường độ **3–5%**, rất nhẹ.
- **Nhoè chuyển động giả:** đoạn render đang chuyển động thì dùng `曲线变速` nhẹ hoặc hiệu ứng làm mờ chuyển động ở chỗ máy đi nhanh.
- **Giảm nét ở rìa khung:** thêm mask blur nhẹ quanh mép — mô phỏng ống kính điện thoại nét giữa mờ rìa.

### ⑤ Chọn kiểu chuyển cảnh

| Kiểu | Khi nào dùng | Ghi chú |
|---|---|---|
| **Cắt thẳng** (hard cut) | Hai cảnh cùng nhịp, cùng hướng chuyển động | Sạch, hiện đại, hợp TikTok |
| **Match cut** (theo chuyển động) | Render và quay thật cùng đang tiến/quét cùng hướng | ⭐ **Giấu mối nối tốt nhất — ưu tiên** |
| **Speed ramp** | Nối một cảnh động sang render | Che khác biệt bằng tốc độ |
| **Whip pan** (quét nhanh) | Chuyển phòng | Tạo động lực, che mối nối |
| **Dissolve** (mờ dần) | Chuyển "trước → sau", chuyển tâm trạng | Ít dùng cho b-roll — trông "cũ" |

> ⚠️ **Đừng đụng vào kho hiệu ứng chuyển cảnh sặc sỡ** (xoay 3D, lật trang, hào quang). Đó là dấu hiệu số một của clip nghiệp dư, và với clip có render thì nó đóng đinh cảm giác "đồ hoạ máy tính". Hướng dẫn dựng của TQ nói thẳng: khoảng 90% hiệu ứng "炫酷" (hào nhoáng) nên tránh.

### ⑥ Bốn thủ thuật làm render bớt "CG"

| Thủ thuật | Thao tác CapCut | Mô phỏng cái gì |
|---|---|---|
| **Tối bốn góc** (vignette) | `特效` → `暗角`, cường độ nhẹ | Ống kính thật; dẫn mắt vào giữa |
| **Quang sai màu** (chromatic aberration) | `特效` → `色差`/`故障` **cực nhẹ** | Viền màu đỏ/xanh mảnh ở cạnh tương phản cao |
| **Quầng sáng** (halation/bloom) | `特效` → `光晕` nhẹ ở vùng đèn sáng | Ánh sáng loang trên cảm biến thật |
| **Nâng chân đen** (lifted blacks) | `曲线` kéo điểm đen lên chút | Video camera không có đen tuyệt đối |

> 💡 **Khi quay thật, cố quay cùng góc, cùng độ cao, cùng hướng đi với cú máy render.** Match cut sẽ mượt gấp mấy lần, và việc chỉnh màu cũng dễ hơn vì hai bên nhìn cùng một thứ.

---

## 17.5. Dạng 3 — so sánh trước và sau

"Trước–sau" tạo khoảnh khắc "wow" tức thì và chứng minh năng lực. **Điểm hỏng chí mạng: hai bên không cùng một góc nhìn** — não người xem không so sánh được, hiệu ứng mất sạch.

### Chọn kiểu bố cục

| Kiểu | Cách làm | Hợp khung dọc? |
|---|---|---|
| **Cắt thẳng theo nhịp** | Đặt "trước" rồi "sau" nối nhau, cắt trúng tiếng nhạc | ⭐ **Hiệu quả nhất** — đơn giản, mạnh, giữ trọn khung |
| **Lật qua lật lại** | Cắt qua lại 2–3 lần trước ↔ sau cùng góc | ⭐ Rất tốt — nhấn mạnh sự thay đổi |
| **Kéo thanh trượt** (slider wipe) | `画中画` + `线性蒙版` + `关键帧` kéo mask từ trái sang phải | Tốt nhưng khó — cần hai hình khớp góc **tuyệt đối** |
| **Chia đôi màn hình** | Hai video cạnh nhau | ❌ Kém cho khung dọc — mỗi bên quá nhỏ |

> ⚠️ **Chưa tìm được số liệu hiệu suất chính thức của TikTok** so sánh các kiểu này. Khuyến nghị trên dựa vào đặc tính khung dọc và thực hành phổ biến — hãy tự A/B test trên kênh của công ty.

**Thao tác slider wipe trong 剪映:** đưa đoạn "sau" vào track chính; đưa ảnh/đoạn "trước" lên `画中画`; thêm `线性蒙版` cho lớp "trước", xoay 90°; đặt 4 `关键帧` — keyframe đầu kéo mask sang trái hết cỡ, keyframe cuối kéo sang phải hết cỡ. Thêm một dải trắng đi cùng để làm "thanh trượt".

### Canh khớp góc — chỗ hay hỏng nhất

**Quy trình chuẩn: chụp thật trước, dựng render sau.**

1. **Chụp ảnh căn thô trước**, ghi lại: chiều cao máy (đứng chụp ngang tầm mắt ~1,5 m), đứng ở đâu (**đánh dấu vị trí chân bằng băng dính trên sàn**), bật **lưới 3×3** trên điện thoại để canh đường chân trời.
2. Ghi tiêu cự: điện thoại thường ~26–28 mm tương đương ở ống kính chính. **Không dùng góc siêu rộng 0.5× — méo, không khớp được.**
3. **Vào Kujiale dựng máy khớp theo ảnh thật:** `相机高度` ~1,5 m, chỉnh góc nhìn cho khớp độ rộng ảnh chụp, đặt máy đúng chỗ đã đứng, hướng trùng hướng đã chụp.
4. Dùng **`我的视角` → `保存视角`** (góc nhìn của tôi → lưu góc nhìn) để không mất góc.
5. Mở ảnh chụp thật cạnh màn hình làm tham chiếu; canh một mốc cố định (góc tường, cạnh cửa sổ) trùng nhau.

**Không có ảnh chụp căn thô thì lấy gì làm "trước"?**

| Nguồn "trước" | Chất lượng |
|---|---|
| Ảnh chủ đầu tư gửi | Tốt nếu đúng góc — thường lệch, phải chọn ảnh gần nhất |
| **Render phòng trống trong Kujiale** (dựng lại căn thô) | ⭐ **Khớp góc hoàn hảo** — vì cùng camera với render "sau" |
| Mặt bằng 2D | Khá — chuyển "sơ đồ → thực tế"; kém "wow" hơn |

> ## 📌 Không có ảnh thật thì dựng render phòng trống làm "trước". Cùng một camera, khớp góc tuyệt đối, và tốn thêm rất ít 额度.

**Nhịp:** giữ **"trước" 1,5–2 giây** (đủ để người xem đọc hiện trạng) → lật sang "sau" **đúng nhịp nhạc** → giữ **"sau" 2,5–3 giây** (lâu hơn vì đây là phần muốn khoe).

**Chữ:** tối giản — "TRƯỚC / SAU" hoặc "Bàn giao thô / Hoàn thiện", đặt trong vùng an toàn. Hình đã nói nhiều rồi; chữ chỉ để định hướng.

---

## 17.6. Chọn phần mềm dựng

| Công cụ | Ưu | Nhược | Kết luận |
|---|---|---|---|
| **CapCut / 剪映** (điện thoại + PC) | Dễ nhất; đủ grain/rung/biến tốc/HSL; đồng bộ hai máy; giao diện tiếng Trung quen với người dùng Kujiale | Bản quốc tế và bản Trung khác kho nhạc/hiệu ứng | ⭐ **Tốt nhất cho người không chuyên** |
| **`剪映专业版`** (máy tính, bản Trung) | Grain theo cỡ hạt, HSL, đường cong, keyframe đầy đủ | Cần máy tính; cần tài khoản 抖音 | ⭐ Cho đoạn cần chỉnh màu kỹ |
| **VN Editor** | Của người Việt, giao diện tiếng Việt, kho nhạc VN | Ít tính năng nâng cao (grain, HSL hạn chế) | Cho clip đơn giản |
| **DaVinci Resolve** | Chỉnh màu mạnh nhất, khớp màu chuyên nghiệp | Khó, nặng máy, học lâu | Không khuyến nghị cho người mới |
| **Canva** | Nhiều mẫu chữ, làm trước–sau nhanh | Yếu về grain/màu/biến tốc | Cho clip thiên đồ hoạ và chữ |
| **InShot** | Đơn giản, nhanh | Bản free có watermark | Cho người thích siêu đơn giản |

**Chọn CapCut/剪映.** Người thiết kế đã quen giao diện tiếng Trung của Kujiale nên `剪映专业版` là lựa chọn quen tay và mạnh nhất; muốn kho nhạc và hashtag hợp thị trường Việt thì dùng CapCut bản quốc tế.

> ⚠️ **Rủi ro cần công ty tự kiểm:** CapCut từng bị chặn ở Mỹ ngày 19/01/2025 theo luật PAFACA (khoảng 48 giờ, rồi được khôi phục ngày 21/01/2025); Ấn Độ cấm vĩnh viễn từ 2020. Tính tới giữa 2026 vẫn hoạt động ở phần lớn quốc gia. **Chưa tìm được thông tin xác thực riêng về tình trạng pháp lý tại Việt Nam** — nên giữ sẵn phương án **VN Editor** (đơn giản) hoặc **DaVinci Resolve** (chỉnh màu kỹ) nếu công ty gặp rào cản.

---

## 17.7. Quy trình một clip, có mốc thời gian

| Bước | Việc | Thời gian |
|---|---|---|
| 1 | Lên khung cảnh Kujiale + đặt máy dọc + chọn độ nét | 15–30 phút |
| 2 | Đặt render (thao tác) + chờ đám mây render | 10 phút thao tác + chờ |
| 3 | Quay bổ sung bằng điện thoại (nếu cần) | 20–40 phút |
| 4 | Tải render + đổ file vào thư mục theo quy ước | 5 phút |
| 5 | Dựng thô: xếp đoạn, cắt theo nhịp | 20–30 phút |
| 6 | Chỉnh màu khớp + grain + rung + chuyển cảnh | 20–30 phút |
| 7 | Thêm chữ (trong vùng an toàn) + nhạc | 15 phút |
| 8 | **Xem lại trên điện thoại thật** + sửa | 10 phút |
| 9 | Xuất + đăng | 5–10 phút |

**Tổng công dựng (không tính chờ render): ~1,5–2,5 giờ cho clip đầu tiên; còn ~45–60 phút khi đã có bản mẫu.**

### Bản mẫu — làm một lần, dùng mãi

- **`剪映专业版`:** làm xong một clip chuẩn → lưu thành `草稿模板` (mẫu bản nháp); hoặc copy cả bản nháp rồi thay `素材` (đổi video, giữ nguyên chỉnh màu/grain/chữ/nhạc).
- **Cách thực dụng nhất:** giữ một "bản nháp mẫu" đã cài sẵn: khung 1080×1920 · lớp grain phủ toàn timeline · khung chữ đặt sẵn trong vùng an toàn · nhạc. Mỗi lần chỉ thay clip nguồn.
- CapCut cũng cho lưu tổ hợp hiệu ứng/bộ lọc đã chỉnh, để tái dùng thông số chỉnh màu khớp render ↔ quay thật.

---

## 17.8. Chuẩn xuất cuối

| Thông số | TikTok | Facebook Reels |
|---|---|---|
| Độ phân giải | **1080×1920** | 1080×1920 |
| Tỉ lệ | 9:16 | 9:16 |
| fps | **30** (dùng 60 nếu chuyển động nhanh) | 30 hoặc 60 |
| Codec hình | **H.264 main profile, level 4.1+** | H.264 |
| Codec tiếng | **AAC-LC, stereo, 44.1 kHz, ≥128 kbps** | AAC |
| Vỏ file | **MP4** | MP4 |
| Bitrate | 6–8,5 Mbps ở 30fps; 8–12 Mbps ở 60fps | 5–10 Mbps |
| Dung lượng | ≤287,6 MB (iOS trong app) · ~72 MB (Android trong app) · tới 4 GB qua web/TikTok Studio | ≤4 GB |

> ## Một file **1080×1920, H.264, AAC, 30fps, ~8 Mbps, MP4** dùng được cho cả TikTok lẫn Facebook. Không cần xuất hai bản.

**Đừng xuất master 50 Mbps** — TikTok nén lại mọi file trên khoảng 15 Mbps, nên bitrate thừa chỉ làm file nặng chứ không đẹp hơn.

### Vùng an toàn — giữ chữ khỏi bị nút che

| Nền tảng | Trên | Dưới | Phải | Trái | Còn lại |
|---|---|---|---|---|---|
| **TikTok** | ~130 px | **~484 px** | ~140 px | ~44 px | **~896×1306 px giữa khung** |
| Facebook / Instagram Reels | ~220 px | ~420 px | — | — | ~1010×1280 px |

Giữ **chữ, logo, giá, câu chốt** trong vùng giữa. Đáy là chỗ nguy hiểm nhất — caption và nút chiếm gần 500 px.

> ⚠️ Số vùng an toàn tổng hợp từ các nguồn hướng dẫn chuyên ngành 2026, **không phải tài liệu chính thức của TikTok**, và giao diện đổi theo thời gian (tháng 1/2026 TikTok mở rộng vùng phải thêm ~20 px cho nút "Add to Playlist"). **Xem trước bằng công cụ kiểm vùng an toàn, hoặc đơn giản là đăng thử ở chế độ riêng tư rồi soi trên điện thoại thật.**

---

## Thực hành

**Bài 1 — Dựng bản mẫu của công ty (làm một lần, cả team dùng):**
Tạo một bản nháp CapCut khung 1080×1920 với: lớp grain phủ toàn timeline · khung chữ đặt sẵn cách đáy ≥ 484 px và cách đỉnh ≥ 130 px · một bài nhạc mặc định. Lưu lại, đặt tên rõ ràng, chia sẻ cho cả team.
*Tiêu chí đạt:* người khác mở bản nháp lên, thả clip vào, xuất được ngay mà không phải chỉnh gì về khung và vùng an toàn.

**Bài 2 — Bài luyện mắt quan trọng nhất chương:**
Lấy một đoạn render 3 giây và một đoạn quay điện thoại cùng phòng. Ghép cạnh nhau, **xuất bản A không chỉnh gì**. Rồi chạy đủ sáu kỹ thuật ở 17.4, **xuất bản B**. Xem cả hai trên điện thoại thật, không phải trên màn máy tính.
*Tiêu chí đạt:* đưa bản B cho một người không làm nghề xem, hỏi "đoạn nào là hình dựng" — họ chỉ sai hoặc phải xem lại mới đoán được.

**Bài 3 — Trước–sau khớp góc:**
Chọn một căn có ảnh chụp thô. Dựng camera Kujiale khớp đúng góc ảnh chụp theo quy trình 5 bước ở 17.5. Xuất clip trước–sau kiểu **lật qua lật lại**, giữ trước 2 s / sau 3 s, cắt trúng nhịp.
*Tiêu chí đạt:* đặt hai khung hình chồng lên nhau, các mốc cố định (góc tường, cạnh cửa sổ) lệch không quá một phần mười chiều rộng khung.

**Bài 4 — Xuất và soi trên máy thật:**
Xuất bản cuối theo chuẩn 17.8. Đăng ở chế độ riêng tư lên cả TikTok lẫn Facebook. Soi trên điện thoại.
*Tiêu chí đạt:* không chữ nào bị nút che ở cả hai nền tảng; hình không vỡ ở cảnh nhiều chi tiết; không thấy dải màu loang trên tường trơn.

## Checklist tự chấm

- [ ] Nhớ luật số một: kéo render về phía quay thật, không bao giờ ngược lại
- [ ] Không bao giờ ghi đè file trong thư mục `01_Render_Goc`
- [ ] Kể được sáu khác biệt vật lý giữa render và cảnh quay điện thoại
- [ ] Chạy đủ sáu kỹ thuật ghép b-roll, biết mức của từng thứ
- [ ] Đoạn render xen vào không quá 5 giây, không đặt ở mở đầu clip
- [ ] Phủ grain lên toàn timeline, không chỉ lên đoạn render
- [ ] Rung tay giả giữ trong ±1–2%, không hơn
- [ ] Không dùng hiệu ứng chuyển cảnh sặc sỡ
- [ ] Trước–sau: khớp góc trước, rồi mới chọn kiểu bố cục
- [ ] Xuất đúng chuẩn 1080×1920 / H.264 / AAC / 30fps / ~8 Mbps
- [ ] Chữ nằm trong ~896×1306 px giữa khung

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Đoạn render "chỏi" hẳn ra khỏi clip | Chưa chỉnh màu, chưa có grain, quá nét, đứng yên tuyệt đối | Chạy đủ sáu kỹ thuật 17.4; ưu tiên grain + chỉnh màu trước |
| Hình quá mượt, trông giả | Máy 3D chuyển động quá đều, thiếu nhoè chuyển động | Thêm rung giả ±1–2%, grain, làm mờ chuyển động nhẹ; **tránh tua trên 2×** |
| Người xem bình luận "cái này là hình 3D à" | Grain quá ít, `锐化` quá cao | **Tăng grain, giảm `锐化`, thêm rung** — theo đúng thứ tự đó |
| Chuyển cảnh gây chóng mặt | Máy Kujiale bay quá nhanh / quay đầu quá gấp | Sửa ở gốc: giảm tốc trong Kujiale (C16); tạm thời giảm tốc đoạn đó ở CapCut |
| Chữ bị nút TikTok/FB che | Đặt chữ ngoài vùng an toàn | Giữ trong ~896×1306 px; cách đáy ≥ 484 px |
| Clip lên nền tảng bị nén vỡ hình | Bitrate thấp + cảnh nhiều chi tiết; dải màu bị vỡ | Xuất 8–12 Mbps; **thêm chút grain để phá vỡ dải màu**; tránh mảng chuyển màu trơn lớn |
| Nhạc lệch nhịp cắt | Cắt không trúng beat | Dùng `踩点` (đánh dấu nhịp) trong CapCut, cắt trúng điểm nhịp |
| Màu render ám vàng | Mẫu đèn ấm trong Kujiale | Sửa ở gốc: đổi mẫu sang trắng trung tính khi render; tạm thời hạ `色温` ở CapCut |
| Răng cưa ở cạnh tủ sau khi nén | Render độ nét thấp + nén của nền tảng | Render 1080P; làm mềm rìa nhẹ (giảm `锐化` / mờ 3%); **tránh 480P cho cảnh nhiều cạnh thẳng** |
| Video giật do lệch fps | Kujiale ghép với clip quay 60fps trong cùng timeline | **Đặt project một fps thống nhất (30fps)**; ép mọi clip về 30fps trước khi ghép; hoặc quay điện thoại ở 30fps |

## Nguồn số liệu

**Chính thức:**
- Cơ chế 视频额度 (15 giây = 1 额度), độ nét ảnh hưởng mức tiêu hao: Kujiale bài 3FO4K4WM9WHW — xem C15
- `全景图小视频` 5/20 lượt/ngày, cố định 15 giây, một phòng: Kujiale bài 3FO4JYHXYBMA
- Bản `极速` hỗ trợ 16:9 / 4:3 / 3:4 / 1:1, đổi tỉ lệ không giãn khung: thông báo 《酷家乐极速版渲染上线》
- Độ nét 480P/720P/1080P và giới hạn ban ngày: Kujiale bài 3FO4K4WNDBNE

**Chuyên ngành / cộng đồng (đã đánh ⚠️ trong bài):**
- Nguyên tắc "làm render xấu đi cho khớp cảnh quay": Ebal Studios, School of Motion, Creative Bloq, D5 Render
- Thông số CapCut (grain 30–60% / 15–40, rung ±1–2% hoặc ~5%, mờ 3–5%, chỉnh màu 5–15): hướng dẫn cộng đồng 剪映 + thực hành archviz — **khoảng khuyến nghị, cần tinh chỉnh theo từng clip**
- Thông số xuất TikTok/Facebook 2026 và vùng an toàn (130/484/140/44 px): tổng hợp hướng dẫn chuyên ngành (EzUGC, AdConvert, Kreatli) — **không phải tài liệu chính thức của TikTok**
- Tình trạng pháp lý CapCut: luật PAFACA Mỹ 19/01/2025, khôi phục 21/01/2025, thoả thuận TikTok USDS đóng 22/01/2026; Ấn Độ cấm từ 2020. **Tình trạng tại Việt Nam chưa xác thực được**

**Chờ verify (Phụ lục B mục I):**
- I2 danh sách `构图比` có 9:16 không (quyết định có phải cắt dọc ở CapCut hay không)
- I3 FPS Kujiale xuất ra — quyết định có phải ép fps trước khi ghép hay không

---

## Tự tra video thực chiến

> 📌 **Sách này cho bạn ĐƯỜNG ĐI. Video cho bạn ĐÔI TAY.**
>
> Chương vừa rồi dựng khung: kỹ thuật nào, mức nào, theo thứ tự nào. Nhưng thao tác CapCut thì **xem người ta quay màn hình nhanh hơn đọc nhiều lần** — nhất là các bước có keyframe và mask.
>
> **Đọc chương xong, tra vài video về đúng kỹ thuật đang cần, rồi quay lại làm.**

Dán nguyên cụm vào ô tìm kiếm của **小红书**, **抖音 (Douyin)** hoặc YouTube:

| Từ khoá | Tìm được gì |
|---|---|
| `剪映 噪点 教程` | Thêm hạt nhiễu — kỹ thuật hàn gắn quan trọng nhất |
| `剪映 曲线变速` | Biến tốc theo đường cong, làm ease |
| `剪映 抖动 手持感` | Giả rung tay cầm |
| `剪映 蒙版 前后对比` | Kéo thanh trượt trước–sau bằng mask |
| `剪映 踩点 卡点` | Cắt trúng nhịp nhạc |
| `效果图 实拍 混剪` | Ghép render với cảnh quay thật |
| `CapCut match render footage` | Cùng chủ đề, nguồn tiếng Anh |

> 💡 **Bốn quy tắc lọc:** sắp theo `最新` · ưu tiên video **quay màn hình có hiện số trên thanh trượt** · bỏ video chỉ khoe thành phẩm không chỉ thao tác · **thấy clip nào của người TQ ghép render vào quay thật mà bạn không nhận ra chỗ nối — lưu lại và xem đi xem lại**. Đó là bài luyện mắt tốt nhất cho chương này.
