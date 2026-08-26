# Video clip — kê đơn lộ trình máy ảnh và chấm clip

Gói kiến thức cho **chế độ E**. Hợp nhất C16 (xuất video), C17 (đường đi máy ảnh),
C18 (hậu kỳ clip dọc), C19 (nội dung ra khách).

Ba luật nền của SKILL.md vẫn áp nguyên. Thêm **một luật riêng của video**:

> ## Luật video: KÉO RENDER VỀ PHÍA QUAY THẬT, không bao giờ kéo ngược lại.
> Cảnh quay điện thoại là chuẩn thực tế người xem tin. Render phải mềm đi, có hạt, hơi rung, bớt rực.
> Chỉnh cảnh quay thật cho "sạch" như render thì **cả hai đoạn cùng giả**.

---

## 1. Giới hạn và chi phí — số phải nói đúng

| Việc | Số | Tin cậy |
|---|---|---|
| Đơn vị tính phí video | **15 giây = 1 视频额度**; độ nét cao tốn nhiều hơn | ✅ bài 3FO4K4WM9WHW |
| Chu kỳ 额度 | Thứ Hai phát, **tối Chủ nhật hết hạn**, không cộng dồn | ✅ |
| Render lỗi | Hoàn bằng `视频券`, hạn 1 tuần | ✅ |
| Trần độ phân giải, tài khoản cá nhân | **1080P** (có chế độ `极致1080p`) | ✅ 3FO4K4WMJGUR |
| Chế độ render | **Chỉ `离线模式`** | ✅ |
| `全景图小视频` | 15 giây cố định, **một phòng**, free 5 lượt/ngày · trả phí 20 lượt/ngày — **không ăn 额度** | ✅ 3FO4JYHXYBMA |
| Bản `白天480/720` | Chỉ để xem trước; `体积光` và `辉光` **bị xoá khỏi cảnh**; `窗纱`/`玻璃` hay lỗi → đổi `实时材质` | ✅ 3FO4K4WNDBNE |
| **FPS xuất ra** | **Chưa công bố** | ⚠️ Phụ lục B I3 |
| **Thời lượng tối đa một clip** | **Chưa công bố** | ⚠️ Phụ lục B I4 |
| **Danh sách `构图比` — có 9:16 không** | **Chưa công bố.** Nút `构图比` thì ✅ có tồn tại | ⚠️ Phụ lục B I2 |
| Một video tốn bao nhiêu 核豆 / bao nhiêu tiền | **Không có số.** Hai hệ đơn vị song song, hãng không cho hệ số quy đổi | ⚠️ |

**Agent không được bịa bốn ô ⚠️ trên.** Gặp câu hỏi về chúng thì trả lời:
*"Chưa công bố — mở hộp thoại `生成视频` / bấm `构图比` trên app rồi ghi vào Phụ lục B mục I."*

### Năm thứ Kujiale KHÔNG làm được
Rèm bay / người đi / nước chảy (không có mô phỏng vật lý) · đèn khác nhau theo từng `片段` ·
ngày→đêm trọn vẹn (chỉ một phần qua `阳光动画` + `灯光动画`) · vật liệu đầy đủ ở bản ngày 480/720 ·
**chống xuyên tường (không có collision detection)**.

---

## 2. Kê lộ trình máy ảnh — bộ số

| Hạng mục | Dải khởi điểm | Tin cậy |
|---|---|---|
| Tốc độ | **0,4–0,7 m/s** → quãng ~3 m kéo **5–7 giây** | ⚠️ mượn (dolly điện ảnh 0,3–0,8 m/s) |
| **Độ cao máy khi đi ngang** | **1500–1600 mm** | ⚠️ mượn (Chaos/V-Ray, Bluent) |
| Đi thấp (nhấn chi tiết) | 700–900 mm | ⚠️ |
| Đi cao (mở toàn cảnh) | 1800–2000 mm, dùng ngắn | ⚠️ |
| Góc nhìn `视野范围` | **60–75°**; tối đa an toàn ~80° | ⚠️ (Game Accessibility Guidelines, MDPI) |
| Clip 2 PN | 25–40 giây · Clip 3 PN 40–60 giây · B-roll 3–5 giây | ⚠️ (Trim Render) |

> ## ⚠️ BẪY SỐ HAY GẶP NHẤT — agent phải chủ động cảnh báo
> **Ảnh tĩnh: 800–1200 mm (✅ số CHÍNH THỨC, bài 3FO4K4W2BGW1).**
> **Video: 1500–1600 mm (⚠️ số mượn).**
> Không mâu thuẫn — hai việc khác nhau: ảnh tĩnh hạ máy cho khung "sang"; video nâng lên tầm mắt
> người đang đi, vì não người xem đang tự đặt mình vào vị trí đó. Đi ở 1000 mm trong video = đang bò.
> **Người chuyển từ làm ảnh sang làm video chép nhầm số này rất thường xuyên.**

**Bốn quyết định chống say hình, xếp theo sức nặng:**
① đi chậm · ② **mỗi `片段` CHỈ MỘT chuyển động** · ③ góc nhìn 60–75° · ④ giả ease hai đầu.

**Giả ease** (Kujiale không có nút ease-in/out): đặt **điểm mốc kép** — hai `关键帧` rất gần nhau ở
đầu đoạn và hai cái gần nhau ở cuối đoạn, các điểm giữa thưa hơn → máy tự chạy chậm–nhanh–chậm.

**Tốc độ không có ô nhập m/s.** Tốc độ = khoảng cách giữa hai điểm mốc ÷ thời gian đoạn.

**Điều khiển theo cấp:** `高度` / `俯仰角度` / `视野范围` / `相机裁剪` đổi được ở cấp `关键帧`;
`聚焦` và `相机矫正` **cố định trong cả `片段`**.

**Năm mẫu `运镜`:** `直线` · `曲线` · `垂直` · `环拍` · `聚焦`.

### Bốn lộ trình mẫu (ghi dạng [vị trí | cao | hướng | FOV])

| Lộ trình | Cấu trúc | Thời lượng |
|---|---|---|
| **A — Vào nhà** | [ngoài cửa lùi 1 m \| 1550 \| thẳng vào cửa \| 60°] **mốc kép** → [giữa khung cửa \| 1550 \| trục sảnh \| 60°] 3–4 s → [chớm phòng khách \| 1550 \| hé sang sofa \| 65°] 4–5 s → [giữa phòng khách \| 1550 \| sofa/vách TV \| 70°] **mốc kép**, giữ 2 s | 12–15 s |
| **B — Một hơi** | cửa → khách → bàn ăn/bếp → hành lang (FOV về 60°) → ngủ chính → dừng nhấn. Cao 1500–1550 suốt | 40–60 s |
| **C — `环拍` quanh điểm nhấn** | [bán kính 1,5–2 m \| 1300–1500 \| luôn hướng tâm \| 65°], xoay **90–120°** (đừng 360°), mốc kép hai đầu | 6–8 s |
| **D — B-roll một chuyển động** | [cách 2 m \| 1400 \| thẳng vào vật \| 60°] → [cách 0,8 m \| 1400 \| vật ở tâm \| 60°]. Không xoay, không đổi cao, không đổi FOV | 3–5 s |

**Qua cửa / hành lang hẹp:** một điểm mốc **giữa khung cửa** · hướng **thẳng trục** · FOV về **60°** ·
**đi chậm lại** · tâm máy cách tường **≥ 0,4 m** (vì không có collision detection).

### Ba luật đặt máy cho khung dọc 9:16
1. **Chủ thể nằm trên trục dọc giữa** — cắt dọc là cắt hai mép trái–phải.
2. **Đi theo chiều sâu, không quét ngang** — khung dọc ăn chiều sâu tốt, ăn chiều ngang rất tệ.
3. **Chừa đất trên–dưới** — khung dọc được thêm trần và sàn so với khung ngang; tận dụng.

*Kiểm miễn phí:* xem Play preview, che hai bên màn hình chừa dải giữa ~1/3. Chủ thể có ở trong dải
đó suốt cả đoạn không?

---

## 3. Ghép render với cảnh quay thật — sáu kỹ thuật

Sáu khác biệt vật lý cần khoả lấp: độ nét · nhiễu · rung · màu · nhoè chuyển động · quang sai/tối góc.

| # | Kỹ thuật | Mức | Thao tác CapCut/剪映 |
|---|---|---|---|
| ① | **Chỉnh màu khớp** *(quan trọng nhất)* | `饱和度` −5…−15 · `对比度` −5…−10 · `高光` giảm nhẹ · `阴影` tăng nhẹ · `色温` về xanh nếu render ám vàng | `调节`; so bằng mắt qua **một điểm tham chiếu chung** (mảng tường trắng / gỗ / da người) |
| ② | **Hạt nhiễu** *(hàn gắn mạnh nhất)* | `调节`→`噪点` **15–40**, hoặc `特效` **30–60%**; vùng sáng 40–60, vùng tối 15–30 | Máy tính: `特效`→`噪点`→**`小颗粒`**. **Phủ lên TOÀN timeline**, cả đoạn quay thật |
| ③ | **Rung tay giả** | **±1–2%** | Phóng to 103–105%, mỗi ~0,5 s một keyframe `位置` X +2%→−2%, Y +1%→−1%; hoặc `特效`→`抖动` nhẹ |
| ④ | **Giảm nét** | `锐化` về âm; `高斯模糊` **3–5%** | Thêm mask blur nhẹ ở rìa khung |
| ⑤ | **Chuyển cảnh** | Ưu tiên **match cut theo chuyển động** > hard cut đúng beat > speed ramp > whip pan. **Tránh dissolve và mọi hiệu ứng sặc sỡ** | — |
| ⑥ | **Bốn thủ thuật ống kính** | `暗角` nhẹ · `色差` cực nhẹ · `光晕` ở vùng đèn · **nâng chân đen** bằng `曲线` | — |

**Độ dài đoạn render xen vào: 3 giây là vừa, tối đa 5 giây.** Quá 5 giây bắt đầu lộ "quá hoàn hảo".
**Không mở đầu clip bằng render** — người xem nghi quảng cáo rồi lướt.
**Tỉ lệ:** thật ~60–70% / render ~30–40% (⚠️ suy luận, chưa có nguồn ngành — nói rõ là để A/B test).

### Chuẩn xuất cuối
**1080×1920 · 9:16 · 30fps · H.264 main profile level 4.1+ · AAC-LC 44.1kHz ≥128kbps · MP4 · 8–12 Mbps.**
Một file dùng chung cho TikTok và Facebook. Đừng xuất master 50 Mbps (nền tảng nén lại).

**Vùng an toàn TikTok:** trên ~130 px · **dưới ~484 px** · phải ~140 px · trái ~44 px →
còn **~896×1306 px** giữa khung. ⚠️ Số tổng hợp từ hướng dẫn chuyên ngành 2026, **không phải tài liệu
chính thức của TikTok**; giao diện đổi theo thời gian.

**Lệch fps:** Kujiale ghép với clip quay 60fps trong cùng timeline → giật. **Đặt project một fps
thống nhất (30fps)**, ép mọi clip về trước khi ghép.

---

## 4. Nội dung — chọn dạng, viết ba giây đầu

| Dạng | Độ dài | Ra view hay ra khách |
|---|---|---|
| 漫游/一镜到底 | 15–40 s | ⚠️ view > khách nếu thiếu lời thoại |
| **前后对比** (trước–sau) | 15–25 s | ⭐ ra khách mạnh |
| **户型图转3D** (mặt bằng → 3D) | 15–25 s | ⭐ ra khách mạnh |
| 方案讲解 (giải thích phương án) | 20–35 s | ra khách + uy tín |
| 快速建模/延时 | 10–20 s | ⚠️ view/giải trí |
| **实拍+渲染混剪** (ghép thật + render) | 20–40 s | ⭐ ra khách + tin cậy cao nhất |

**Ba giây đầu của clip render KHÔNG dựa vào "đẹp"** — người xem biết là dựng nên phản xạ đầu là hoài
nghi hoặc lướt. Ba cách mở: **kết quả cuối trước** · **nỗi đau/xung đột** · **biến hình** (2D→3D,
tường mọc lên, trước/sau chồng lớp — cái chỉ render làm được).
**Tuyệt đối tránh:** mở bằng cú lia chậm qua phòng trống.

**Không giấu là render.** Ghi **"Hình minh hoạ 3D"** trên mọi đoạn render — vừa minh bạch vừa là quản
trị rủi ro (Luật Quảng cáo VN số 16/2012/QH13; ở TQ có án lệ 退一赔三 khi render khác thứ thi công).
Nối thẳng với **Luật nền #4** về ranh giới AI của C8.

**Đo:** với nội dung nhà ở, **lượt lưu > lượt thích**. Bằng chứng số thật (Bilibili, 建筑师大成
"坡上之家"): lưu 1.649 > thích 1.390. Tối ưu cho "đáng lưu": con số diện tích, phương án cụ thể,
checklist — không chỉ "đẹp mắt".

**Đặc thù VN mà bản Trung không có:** phong thuỷ · **ban thờ** · chung cư bàn giao thô ·
**Facebook Group cư dân** (thay cho POI/团购 của Douyin — dựng render đúng mặt bằng tòa đó rồi đăng
vào Group cư dân dự án đó).
**Không bê sang được:** POI/团购/本地生活 · 私信通+小程序 · livestream tại công trình · gu 新中式/侘寂/高级灰.

---

## 5. Chấm clip — 10 tiêu chí × 5 điểm

Song song với rubric ảnh tĩnh (`06-cham-anh.md`), **không thay thế nó**. Clip vẫn nên chấm chất lượng
render từng khung bằng rubric ảnh nếu cần.

**Test mở màn — xem trên ĐIỆN THOẠI, một lần, không tua:** *"Mình có lướt qua không?"*
Lướt trong 3 giây đầu → ghi lại **cái gì làm mình lướt**. Vẫn chấm tiếp, nhưng clip trượt test này
**tối đa xếp SỬA LẠI** dù tổng điểm cao.

### Nhóm 1 — MÁY ẢNH VÀ CHUYỂN ĐỘNG (4 tiêu chí)

| # | Tiêu chí | ĐẠT (4–5đ) | Lỗi điển hình (1–2đ) | Sửa ở |
|---|---|---|---|---|
| 1 | **Không gây chóng mặt** | Xem hết không nôn nao | Đi nhanh + FOV rộng + xoay gấp | C17 §17.2 |
| 2 | **Mỗi đoạn một chuyển động** | Tiến, HOẶC xoay, HOẶC nâng | Vừa tiến vừa xoay vừa nâng → "như lái xe trong game" | C17 §17.2 |
| 3 | **Vào–ra mềm** | Đầu/cuối đoạn chậm lại | Khựng ở hai đầu (điểm mốc đặt đều) | C17 §17.3 (điểm mốc kép) |
| 4 | **Độ cao và FOV đúng** | 1500–1600 mm, FOV cố định trong đoạn | Máy quá thấp; hình "thở" phồng-xẹp | C17 §17.4 |

### Nhóm 2 — ĐỘ CHỎI RENDER ↔ QUAY THẬT (3 tiêu chí — nặng nhất với clip lai)

| # | Tiêu chí | ĐẠT | Lỗi điển hình | Sửa ở |
|---|---|---|---|---|
| 5 | **Màu khớp** | Mảng tường trắng/gỗ hai bên cùng tông | Render ám vàng rực hẳn so với đoạn quay | C18 §18.4 ① |
| 6 | **Chất liệu khớp** | Grain phủ đều toàn clip; render không nét hơn hẳn | Render sạch bong, sắc lạnh giữa clip có hạt | C18 §18.4 ②④ |
| 7 | **Mối nối giấu được** | Người ngoài không chỉ đúng hết chỗ nối | Cắt lộ; dùng chuyển cảnh sặc sỡ | C18 §18.4 ⑤ |

### Nhóm 3 — NHỊP VÀ NỘI DUNG (3 tiêu chí)

| # | Tiêu chí | ĐẠT | Lỗi điển hình | Sửa ở |
|---|---|---|---|---|
| 8 | **Ba giây đầu giữ chân** | Mở bằng kết quả/nỗi đau/biến hình | Mở bằng lia chậm qua phòng trống | C19 §19.3 |
| 9 | **Nhịp cắt** | Cảnh đổi mỗi 2–4 s, cắt trúng beat | Một cú máy dài đều đều; nhạc lệch nhịp | C18 §18.3, C19 §19.4 |
| 10 | **Đăng được ngay** | Chữ trong vùng an toàn, xuất đúng chuẩn, có ghi "Hình minh hoạ 3D" | Chữ bị nút che; hình vỡ khi nén; không ghi minh bạch | C18 §18.8, C19 §19.8 |

**Ngưỡng:** **ĐẠT ≥ 40** (không tiêu chí nào ≤ 2, qua test mở màn) · **SỬA LẠI 30–39** ·
**LÀM LẠI < 30**.

Mỗi điểm ≤ 2 **bắt buộc kèm mốc thời gian trong clip** (*"giây 0:07–0:09"*) — chấm clip mà không chỉ
giây thì người dựng không sửa được. Luôn kèm cột "sửa ở chương nào".

### Thứ tự ưu tiên khi cứu một clip nhìn giả

> **Đường đi máy (C17) > độ chỏi render↔thật (C18 §18.4) > nhịp cắt (C18 §18.3) > chữ và xuất file**

Và chẩn đoán 3 bước trước khi đề xuất bất cứ thao tác CapCut nào:
```
① Chóng mặt / như game / xuyên tường?      → SỬA ĐƯỜNG ĐI TRONG KUJIALE, render lại đoạn đó
② Đoạn render chỏi ra khỏi clip?           → hậu kỳ CapCut: màu → grain → rung → giảm nét
③ Không ai xem hết / không ai hỏi?         → nội dung: ba giây đầu, dạng clip, câu chốt
```
Lỗi ① **không bao giờ sửa được bằng ②③** — và sửa nó thì tốn 额度, nên phải nói thẳng chi phí ra.
