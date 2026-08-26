# C17. Đường đi máy ảnh — làm cho mượt và có nhịp

> **Sau chương này bạn làm được:**
> - Dựng đường đi bằng `关键帧` và hiểu vì sao Kujiale không có "đồ thị tốc độ" như 3ds Max
> - Đặt tốc độ, chiều cao, góc nhìn sao cho người xem không chóng mặt — có số để bắt đầu
> - Giả được hiệu ứng vào–ra mượt (ease) bằng cách bố trí điểm mốc, dù máy không có nút đó
> - Chạy được bốn lộ trình mẫu: vào nhà · đi hết căn một hơi · xoay quanh điểm nhấn · b-roll
> - Đặt máy sao cho **cắt dọc 9:16 vẫn đủ hình** — nghĩ trước, thay vì cắt bừa lúc dựng
> - Biết sáu lỗi làm hỏng một clip dạo quanh và chặn từng lỗi ở đâu

---

> ## ⚠️ CẢNH BÁO ĐẦU CHƯƠNG — BỐN THỨ KUJIALE KHÔNG CÓ
>
> Trước khi tìm mãi không thấy nút, biết trước cho đỡ mất thời gian. Kujiale **không có**:
>
> 1. **Nút ease-in / ease-out** (vào chậm – ra chậm)
> 2. **Mẫu tốc độ `慢`/`中`/`快`** (chậm/vừa/nhanh)
> 3. **Rung tay cầm** (handheld shake) — chuyển động của Kujiale phẳng lì như ray trượt
> 4. **Phát hiện va chạm** (collision detection) — **máy đi xuyên tường tự do, không ai chặn bạn**
>
> Cả bốn đều mô phỏng được: ba cái đầu bằng cách bố trí điểm mốc khéo + hậu kỳ CapCut (C18); cái thứ tư thì **chỉ có mắt bạn và nút Play xem trước** lo được.
>
> Và **không có đồ thị tốc độ (curve editor)** như 3ds Max/After Effects. Mọi kỹ thuật kéo đồ thị bạn thấy trong tutorial 3ds Max không áp được ở đây — chương này mượn *nguyên lý*, rồi dịch thành thao tác đặt điểm mốc.

---

## 17.1. Đường đi được dựng thế nào

Cơ chế: **ĐIỂM MỐC + NỘI SUY TỰ ĐỘNG**. Bạn không vẽ đường bằng tay.

```
Video hoàn chỉnh
  └── nhiều 片段 (piànduàn — đoạn)
        └── mỗi đoạn chứa nhiều 关键帧 (guānjiànzhēn — điểm mốc / keyframe)
              └── Kujiale TỰ TÍNH chuyển động trơn giữa hai điểm mốc kề nhau
```

Ba cách tạo đường đi, tài khoản cá nhân dùng được cả ba:

| Cách | Thao tác | Khi nào dùng |
|---|---|---|
| **Nhập từ `镜头库`** (thư viện cú máy) | Chọn cú máy gợi ý theo phòng → bấm `导入` (nhập) | Làm nhanh, b-roll, người mới |
| **Thủ công bằng `关键帧`** | Đặt cú máy đầu → `添加片段` (thêm đoạn) → chỉnh cú máy tiếp → lặp lại | Kiểm soát chính xác — cách chính của chương này |
| **`一键导入全屋漫游镜头`** | Một chạm nhập cú máy dạo cả nhà | Nháp nhanh cả căn rồi sửa |

**Năm mẫu chuyển động (`运镜`) có sẵn:**

| Tên | Nghĩa | Dùng cho |
|---|---|---|
| `直线` | Đi thẳng | Đẩy vào phòng, đi dọc hành lang |
| `曲线` | Đi cong | Vòng qua bàn ăn, lượn quanh đảo bếp |
| `垂直` | Nâng / hạ | Mở từ chi tiết sàn lên toàn cảnh |
| `环拍` | Xoay quanh một điểm | Khoe một chủ thể: đảo bếp, vách TV |
| `聚焦` | Lấy nét vào chủ thể | Giữ mắt người xem ở một vật |

Có nút **Play xem trước** đường đi — **miễn phí, dùng trước khi trả 额度**, luôn luôn.

---

## 17.2. Vì sao người xem chóng mặt — cơ chế, không phải "đừng đi nhanh"

Say khi xem video gọi là **vection**: ảo giác tự chuyển động khi mắt thấy cảnh chạy mà tai trong báo cơ thể đang đứng yên. Nghiên cứu trên PLOS One (Kooijman và cộng sự, journal.pone.0175305) đo được *"VIMS increases with vection strength"* — chứng say do thị giác tăng theo cường độ vection (tương quan R² = 0,48).

Ba thứ **trong tay bạn** làm vection mạnh lên:

| Yếu tố | Vì sao gây say |
|---|---|
| **Đi quá nhanh** | Dòng chảy hình ảnh (optical flow) toàn màn hình tăng vọt → não đọc là "tôi đang lao đi" nhưng thân không động |
| **Góc nhìn quá rộng** | Optical flow ở **rìa khung** tăng mạnh — đúng vùng nhạy vection nhất. Game Accessibility Guidelines: *"If the field of view is significantly different to what the eye/brain expects to see, it can result in motion sickness"* |
| **Xoay / lắc gấp** | Vector chuyển động đổi hướng đột ngột — xung đột thị giác–tiền đình lớn nhất khi quay |

> ⚠️ **Số gốc đến từ nghiên cứu VR** (kính VR có góc nhìn 110°, mạnh hơn màn phẳng nhiều). Áp cho video xem trên điện thoại là **ngưỡng thận trọng** — thực tế màn phẳng chịu được rộng hơn chút. Nhưng giữ trong dải khuyến nghị vẫn là vùng an toàn nhất, và **không mất gì**.

**Bốn quyết định chống say, xếp theo sức nặng:**

> ## ① Đi chậm · ② Mỗi đoạn CHỈ MỘT chuyển động · ③ Góc nhìn 60–75° · ④ Giả ease hai đầu

Quyết định ② là quyết định người mới hay phá nhất: vừa tiến vừa xoay vừa nâng máy trong cùng một đoạn. Kết quả là thứ chuyển động không ai quay được ngoài đời — mắt đọc ngay ra "game", và bụng thì cồn cào.

---

## 17.3. Điều khiển được gì — cái nào đổi giữa chừng, cái nào cố định

| Tham số | Nghĩa | Cấp điều khiển | Đổi giữa chừng? |
|---|---|---|---|
| `高度` | Độ cao máy | `关键帧` | **Có** — nâng/hạ dọc tuyến |
| `俯仰角度` | Góc ngẩng / cúi | `关键帧` | **Có** |
| `视野范围` | Trường nhìn (FOV) | `关键帧` | **Có** — nhưng nên hạn chế đổi, xem lỗi "thở ống kính" |
| `相机裁剪` | Cắt khung | `关键帧` | **Có** |
| `聚焦` | Điểm lấy nét | `片段` | ❌ Cố định trong cả đoạn |
| `相机矫正` | Sửa méo phối cảnh (dựng thẳng đường đứng) | `片段` | ❌ Cố định trong cả đoạn |

Chỉnh thô trên mặt bằng **2D**: di chuyển, xoay, đảo chiều (`移动` / `旋转` / `反向`) cả đường đi cùng lúc.

### Tốc độ — sự thật thẳng thắn

**Không có ô nhập "m/s". Không có ô "tổng thời lượng".** Tốc độ = **khoảng cách giữa hai điểm mốc ÷ thời gian đoạn**. Muốn chậm lại: kéo hai điểm mốc lại gần nhau **hoặc** kéo dài thời gian đoạn.

### Giả ease — mẹo quan trọng nhất chương

Kujiale không có nút vào chậm – ra chậm. Nhưng nội suy tự động thì luôn chạy. Nên:

> ## Đặt HAI điểm mốc rất gần nhau ở ĐẦU đoạn, HAI điểm mốc gần nhau ở CUỐI đoạn, các điểm giữa thưa hơn.
> Máy sẽ tự chạy **chậm → nhanh → chậm**. Đó chính là ease.

Cả chương gọi cặp điểm này là **"điểm mốc kép"**. Nó xuất hiện ở đầu và cuối cả bốn lộ trình mẫu bên dưới.

*(Nguyên lý mượn từ Lumion — phần mềm có sẵn nút này: "we ticked the 'ease in smooth' and 'ease out smooth' buttons to ensure a consistent camera speed". Kujiale không có nút, ta làm bằng tay.)*

---

## 17.4. Số thật cho căn hộ chung cư 60–90 m², trần 2,7 m

| Hạng mục | Dải dùng được ngay | Nguồn |
|---|---|---|
| **Tốc độ di chuyển** | **0,4–0,7 m/s** — chậm hơn đi bộ (1,2–1,4 m/s). Quy đổi sang Kujiale: đoạn dài ~3 m thì kéo **5–7 giây** | ⚠️ Mượn — dolly điện ảnh chạy 0,3–0,8 m/s |
| **Độ cao máy khi đi ngang** | **1500–1600 mm** | ⚠️ Mượn — Chaos/V-Ray: *"standard 1,750mm–1,800mm eye-level"*; Bluent CAD: *"eye level (5–6 feet)"* |
| Đi thấp (nhấn sàn, chi tiết thấp) | 700–900 mm — làm không gian trông rộng, trần cao | ⚠️ Mượn từ điện ảnh |
| Đi cao (mở toàn cảnh) | 1800–2000 mm — bao quát bố cục, dùng ngắn | ⚠️ Mượn |
| **Góc nhìn `视野范围`** | **60–75°** | ⚠️ Mượn — Game Accessibility Guidelines: *"60 degrees for TV, 90 degrees for monitor"* |
| Góc nhìn tối đa an toàn | **~80° trong phòng nhỏ, không vượt** | ⚠️ Mượn — MDPI Applied Sciences vol.14, 2231 (2024) |
| Thời lượng clip 2 phòng ngủ | **25–40 giây** | ⚠️ Mượn — Trim Render: *"recommended length is 30-60 seconds"* |
| Thời lượng clip 3 phòng ngủ | **40–60 giây** | ⚠️ Mượn |
| B-roll một chuyển động | **3–5 giây** | ⚠️ Mượn |

> ## 📌 CHÚ Ý — chiều cao máy quay video KHÁC chiều cao máy chụp ảnh tĩnh
>
> | | Chiều cao | Nguồn |
> |---|---|---|
> | **Ảnh tĩnh nội thất** (C6) | **800–1200 mm** | ✅ **Số CHÍNH THỨC của Kujiale** (bài 3FO4K4W2BGW1) |
> | **Video dạo quanh** (chương này) | **1500–1600 mm** | ⚠️ Số mượn từ archviz phương Tây |
>
> **Không phải sách tự mâu thuẫn.** Hai việc khác nhau:
> - Ảnh tĩnh **hạ máy xuống** để thấy nhiều mặt sàn, tôn tỉ lệ đồ đạc, cho khung ảnh "sang" kiểu tạp chí. Máy đứng yên nên thấp không sao.
> - Video **nâng máy lên tầm mắt người đang đi** vì bộ não người xem đang tự đặt mình vào vị trí người đi trong nhà. Đi ở độ cao 1000 mm là đang bò — não đọc ra ngay, và đó là một trong những lý do clip trông "như lái xe trong game".
>
> **Chép nhầm số của C6 sang đây là lỗi hay gặp nhất khi chuyển từ làm ảnh sang làm video.**

> Ghi chú về chi phí: Super Renders Farm nêu *"A 60-second architectural walkthrough at 30 fps requires 1,800 individual frames"* — mỗi giây là một chuỗi khung hình render riêng. **Giữ clip ngắn không chỉ vì nhịp, mà còn vì 额度** (C16).

### Đi qua cửa và hành lang hẹp

Bốn việc, làm đủ cả bốn:
1. Đặt **một điểm mốc ngay giữa khung cửa**.
2. Hướng nhìn **thẳng theo trục hành lang**, đừng chéo.
3. **Giảm góc nhìn về ~60°** để đỡ méo hai mép tường.
4. **Đi chậm lại** ở đoạn này.

Và vì không có phát hiện va chạm: tự canh **tâm máy cách tường ≥ 0,4 m**.

---

## 17.5. Đặt máy sao cho cắt dọc 9:16 vẫn đủ hình

Đây là phần C16 hứa sẽ nói kỹ. Nếu chưa chắc `构图比` của bạn có 9:16 gốc hay không (đa số trường hợp là chưa chắc), thì **giả định sẽ phải cắt dọc** và dựng cảnh theo giả định đó. Không mất gì, mà cứu được cả buổi làm.

**Ba luật đặt máy cho khung dọc:**

| Luật | Nội dung | Vì sao |
|---|---|---|
| **① Chủ thể nằm trên trục dọc giữa** | Sofa, giường, đảo bếp đặt giữa khung theo chiều ngang | Cắt dọc là cắt hai mép trái–phải. Thứ gì ở mép thì mất |
| **② Đi theo chiều sâu, không quét ngang** | Ưu tiên `直线` tiến/lùi; hạn chế lia ngang dài | Khung dọc **ăn chiều sâu rất tốt và ăn chiều ngang rất tệ**. Một cú lia ngang trong khung dọc chỉ thấy được một phần ba nội dung |
| **③ Chừa "đất" trên và dưới** | Đừng cắt cụt trần, đừng cắt cụt chân tường | Khung dọc cao — trần và sàn là hai thứ **được thêm** so với khung ngang. Tận dụng: thấy trần giật cấp, thấy hắt sáng, thấy vân sàn |

> 💡 **Cách kiểm nhanh mà không tốn gì:** trong lúc xem Play preview, lấy ngón tay che hai bên màn hình chừa lại dải giữa cỡ một phần ba. Dải đó chính là khung dọc sau khi cắt. Chủ thể có còn nằm trong dải đó suốt cả đoạn không?

---

## 17.6. Bốn lộ trình mẫu

> Quy ước ghi điểm mốc: **[vị trí | chiều cao | hướng nhìn | góc nhìn]**

### Lộ trình A — "VÀO NHÀ" · khoảng 12–15 giây

Mở từ cửa chính, đi vào, mở ra không gian chung.

| # | Điểm mốc | Thời gian |
|---|---|---|
| 1 | **[Ngoài cửa chính, lùi 1 m \| 1550 mm \| nhìn thẳng vào cửa \| 60°]** — **điểm mốc kép** (khởi động chậm) | — |
| 2 | **[Ngay giữa khung cửa \| 1550 mm \| thẳng theo trục sảnh \| 60°]** — đẩy tới, chậm | 3–4 s |
| 3 | **[Cuối sảnh, chớm vào phòng khách \| 1550 mm \| bắt đầu hé sang sofa \| 65°]** | 4–5 s |
| 4 | **[Giữa phòng khách \| 1550 mm \| dừng nhấn ở sofa/vách TV \| 70°]** — **điểm mốc kép cuối** (dừng mềm), giữ 2 s | 2 s |

**Vì sao:** cửa tạo "điểm vào" tâm lý cho người xem; đẩy chậm qua cửa hẹp với góc nhìn 60° chống méo hai mép; kết ở điểm nhấn chính của căn.

### Lộ trình B — "MỘT HƠI KHÔNG CẮT" · khoảng 40–60 giây (2–3 phòng ngủ)

Thứ tự phòng: **cửa → phòng khách → bàn ăn/bếp → hành lang → phòng ngủ chính** (→ phòng ngủ phụ nếu 3 PN).

| # | Điểm mốc | Thời gian |
|---|---|---|
| 1 | [Cửa chính \| 1550 \| thẳng vào \| 60°] | — |
| 2 | [Phòng khách, lướt ngang qua sofa \| 1550 \| hơi chếch sang cửa sổ \| 65°] | 8–10 s |
| 3 | [Khu bàn ăn, `曲线` vòng nhẹ \| 1500 \| nhìn bàn ăn/đảo bếp \| 65°] | 8–10 s |
| 4 | [Đầu hành lang \| 1550 \| thẳng trục hành lang \| **60°**] | 5–6 s |
| 5 | [Cửa phòng ngủ chính \| 1500 \| mở vào đầu giường \| 68°] | 8–10 s |
| 6 | [Trong phòng ngủ, dừng nhấn \| 1500 \| giường + cửa sổ \| 70°] | dừng 2 s |

**Vì sao thứ tự này:** đi theo **mạch sinh hoạt thật** của người ở — vào nhà → sinh hoạt chung → riêng tư. Phòng riêng để cuối tạo cao trào. Hành lang là "đoạn nối" nên giữ **ngắn, thẳng, góc nhìn hẹp** để không lê thê và không méo.

> ⚠️ **Lộ trình B là lộ trình đắt nhất và rủi ro nhất.** Một đoạn 50 giây tốn khoảng 4 额度 (C16) và sai một chỗ là render lại cả. Với TikTok/Facebook, **cách khôn hơn là cắt B thành 5 đoạn ngắn rồi ghép ở CapCut** — xem 17.8.

### Lộ trình C — "XOAY QUANH ĐIỂM NHẤN" (`环拍`) · 6–8 giây

Quanh bàn ăn / đảo bếp / vách TV. Điểm mốc: **[bán kính nhỏ 1,5–2 m | 1300–1500 mm | luôn hướng tâm vào chủ thể | 65°]**, xoay **90–120°**.

**Đừng xoay trọn 360°** — vừa lê thê vừa dễ say. Hai đầu đặt điểm mốc kép để vào/ra mềm.

**Vì sao:** chuyển động vòng làm nổi khối chủ thể; bán kính nhỏ + góc xoay vừa phải giữ optical flow thấp.

### Lộ trình D — "B-ROLL" một chuyển động đơn · 3–5 giây

Một cú **đẩy tới** chậm vào kệ trang trí / bình hoa / góc cây xanh:
**[cách 2 m | 1400 mm | thẳng vào vật | 60°] → [cách 0,8 m | 1400 mm | giữ vật ở tâm | 60°]**
Không xoay. Không đổi độ cao. Không đổi góc nhìn.

**Vì sao:** b-roll là "gia vị" để xen vào clip quay thật (C18, C19). Một chuyển động duy nhất thì luôn mượt và luôn dễ khớp nhịp nhạc. **Đây cũng là lộ trình rẻ nhất** — 3 giây, để 720P là đủ.

---

## 17.7. Sáu lỗi làm hỏng một clip dạo quanh

| Lỗi | Cơ chế | Cách chặn |
|---|---|---|
| **Người xem chóng mặt** | Đi nhanh + góc nhìn rộng + xoay gấp → optical flow rìa mạnh → vection cao | Tốc độ 0,4–0,7 m/s; góc nhìn 60–75°; **mỗi đoạn một chuyển động**; giả ease hai đầu |
| **Xuyên tường / xuyên đồ** | **Không có phát hiện va chạm** — máy đi xuyên tự do | Tự canh điểm mốc cách tường ≥ 0,4 m; **bắt buộc Play xem trước toàn tuyến** trước khi render |
| **Đi qua chỗ tối om** | Đèn chỉ đủ cho một góc tĩnh, các góc khác chưa đánh | Đánh đèn **theo cả tuyến máy chạy**, không chỉ một khung (C4, C13) |
| **Lộ mảng chưa hoàn thiện / tường trống** | Cảnh đẹp một góc nhưng tuyến máy quét qua vùng chưa dựng xong | Duyệt preview; **đừng chĩa vào tường trống quá 1–2 giây** |
| **Đèn nhấp nháy** (`忽明忽暗`) | Tham số đèn đổi giữa các khung; độ nét thấp | Render 1080P hoặc `极致1080p`; tránh `灯光动画` đổi mạnh khi máy đang chạy; dùng `降低帧率` |
| **Video "thở" ống kính** | Đổi `视野范围` liên tục giữa các điểm mốc | **Cố định góc nhìn trong mỗi đoạn.** Chỉ đổi khi sang đoạn mới, và đổi ít |

**Có nên đi giật lùi không?** Ưu tiên **luôn đi tới**. Chỉ dùng lùi để **mở ra (reveal)** một không gian rộng — ví dụ lùi từ bàn ăn ra để lộ cả phòng khách. Lùi liên tục làm người xem mất phương hướng.

---

## 17.8. Ghép nhiều đoạn ngắn hay xuất một đoạn dài?

| Tiêu chí | Nhiều đoạn ngắn rồi ghép | Một đoạn dài liền |
|---|---|---|
| **额度** | Hỏng đoạn nào render lại đoạn đó | Hỏng là render lại cả clip |
| Khâu dựng | Dễ đổi thứ tự, chèn b-roll, khớp nhịp nhạc | Cứng, khó sửa nhịp |
| Chuyển động | Phải tự lo chuyển cảnh giữa các đoạn | Liền mạch sẵn |
| Nhịp TikTok | **Chủ động cắt theo beat** | Bị động |

> ## Với TikTok/Facebook: xuất nhiều đoạn ngắn — mỗi đoạn MỘT chuyển động, 3–10 giây — rồi ghép ở CapCut.
> Chỉ dùng một đoạn dài khi khách đòi xem "một hơi không cắt" để duyệt phương án. Đó là hai mục đích khác nhau.

**Cắt ở đâu cho tự nhiên:** dùng **ngưỡng cửa làm điểm cắt**. Camera đi qua khung cửa thì cắt sang đoạn sau — mắt người xem đọc đó là chuyển phòng, không đọc là "mối nối".

### Bảng vá lỗ hổng Kujiale bằng CapCut / 剪映

| Kujiale KHÔNG có | Làm gì ở CapCut (chi tiết C18) |
|---|---|
| Ease vào–ra mượt | `曲线变速` (biến tốc theo đường cong) — kéo cong đầu/cuối clip |
| Chậm mượt (slow-motion) | `平滑慢动作` — nội suy khung để chậm không giật |
| Rung tay cầm tự nhiên | Hiệu ứng `抖动` cường độ thấp, hoặc keyframe dịch ±1–2% |
| Khớp nhịp nhạc | Cắt theo beat, dùng `踩点` (tự nhận nhịp) |
| Xuất dọc 9:16 | Đặt khung 1080×1920, crop hoặc thêm nền mờ |

---

## Thực hành

**Bài 1 — Lộ trình A, làm cho đúng chứ không làm cho nhanh:**
Dựng lộ trình A trên một căn đã có. Bốn điểm mốc, có điểm mốc kép ở đầu và cuối. Bấm Play xem trước, sửa tới khi: không xuyên tường, không có giây nào chĩa vào tường trống, không có đoạn nào tối om.
*Tiêu chí đạt:* xem preview ba lần liên tiếp mà không thấy chỗ nào gợn. Render 720P một bản để kiểm.

**Bài 2 — Thử ease bằng mắt:**
Cùng một đoạn đi 3 m. Render hai bản 720P: bản 1 đặt điểm mốc **đều nhau**; bản 2 đặt **điểm mốc kép** ở hai đầu. Xem cạnh nhau trên điện thoại.
*Tiêu chí đạt:* nói được bằng lời khác biệt bạn thấy, và giải thích được nó đến từ đâu. (Đây là bài đáng làm nhất chương — sau bài này bạn không bao giờ đặt điểm mốc đều nữa.)

**Bài 3 — Bộ b-roll cho một căn:**
Làm **năm** đoạn lộ trình D, mỗi đoạn 3–5 giây, 720P, vào năm chi tiết khác nhau (bình hoa, kệ sách, góc cây, tay nắm tủ bếp, đầu giường).
*Tiêu chí đạt:* năm file rời, tổng chi phí không quá 2 额度, và cả năm đều **lọt trong dải dọc giữa khung** khi che hai bên màn hình.

**Bài 4 — Kiểm dọc trước khi trả tiền:**
Lấy lộ trình B (hoặc bản nháp của nó). Xem preview, che hai bên màn hình chỉ chừa dải giữa. Ghi lại **từng giây** mà chủ thể rơi ra khỏi dải đó.
*Tiêu chí đạt:* sửa được đường đi để không còn giây nào rơi ra ngoài, **trước khi** bấm render.

## Checklist tự chấm

- [ ] Giải thích được cơ chế điểm mốc + nội suy, và vì sao không có đồ thị tốc độ
- [ ] Nhớ bốn thứ Kujiale không có, và cách vá từng thứ
- [ ] Đặt được điểm mốc kép để giả ease, và thấy được khác biệt bằng mắt
- [ ] Thuộc dải: tốc độ 0,4–0,7 m/s · cao 1500–1600 mm · góc nhìn 60–75°
- [ ] **Không chép nhầm chiều cao 800–1200 mm của ảnh tĩnh sang video**
- [ ] Mỗi `片段` chỉ một chuyển động — không vừa tiến vừa xoay vừa nâng
- [ ] Luôn bấm Play xem trước toàn tuyến trước khi trả 额度
- [ ] Đặt máy theo ba luật khung dọc, và biết cách che màn hình để kiểm
- [ ] Chạy được cả bốn lộ trình mẫu mà không cần mở lại sách

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Clip trông "như lái xe trong game" | Đi nhanh + máy quá thấp + nhiều chuyển động cùng lúc | Chậm về 0,4–0,7 m/s; nâng máy lên 1500–1600 mm; tách mỗi chuyển động ra một đoạn |
| Xem xong thấy nôn nao | Vection cao — góc nhìn rộng và xoay gấp | **Giảm tốc thêm 30% và hạ góc nhìn về 60° trước khi nghĩ tới bất cứ cách nào khác** |
| Máy chui qua tường | Không có phát hiện va chạm | Điểm mốc cách tường ≥ 0,4 m; Play xem trước |
| Vào/ra đoạn bị "khựng" | Điểm mốc đặt đều nhau | Đặt điểm mốc kép hai đầu; hoặc `曲线变速` ở CapCut |
| Hình bị "thở" phồng lên xẹp xuống | Góc nhìn đổi liên tục giữa các điểm mốc | Cố định `视野范围` trong mỗi đoạn |
| Đi qua cửa thấy tường bị kéo méo | Góc nhìn quá rộng ở chỗ hẹp | Về 60° tại điểm mốc giữa cửa; đi thẳng trục, đừng chéo |
| Cắt dọc xong mất hết tủ bếp hai bên | Đặt máy theo tư duy khung ngang | Ba luật khung dọc ở 17.5; kiểm bằng cách che hai bên màn hình |
| Clip lê thê, người xem lướt | Một đoạn dài, không có b-roll | Cắt xuống ≤ 30 giây (2 PN); tăng số cảnh b-roll; xem nhịp ở C18, C19 |

## Nguồn số liệu

**Chính thức (Kujiale help center):**
- Cơ chế `片段` + `关键帧`, tham số theo cấp điểm mốc/đoạn: bài 3FO4K4WPG7V7
- Năm mẫu `运镜` (`直线`/`曲线`/`垂直`/`环拍`/`聚焦`), chỉnh 2D, Play xem trước: bài 3FO4K4VIJARH
- Nhập từ `镜头库`, `一键导入全屋漫游镜头`: bài 3FO4K4WP3YVJ
- Đèn nhấp nháy và `降低帧率`: bài 3FO4K4WD5QAG
- **Chiều cao camera ảnh tĩnh 800–1200 mm** (dùng để đối chiếu): bài 3FO4K4W2BGW1 — xem C6
- Mốc ra mắt 02/2021, nâng 漫游视频 2.0 ngày 14/09/2021: China Daily 29/04/2021

**Mượn từ ngành khác (đã đánh ⚠️ — dải khởi điểm, không phải thông số của Kujiale):**
- Cơ chế vection và VIMS: PLOS One journal.pone.0175305 (Kooijman và cộng sự)
- Ngưỡng góc nhìn: Game Accessibility Guidelines · MDPI Applied Sciences vol.14, 2231 (2024)
- Chiều cao tầm mắt archviz: Chaos/V-Ray, Bluent CAD
- Nguyên lý ease và rung tay cầm: tài liệu Lumion (lumion.com/blog)
- Thời lượng khuyến nghị: Trim Render, Super Renders Farm
- Tốc độ dolly điện ảnh 0,3–0,8 m/s: thực hành quay phim

**Chờ verify trên app (Phụ lục B mục I):**
- I3 FPS xuất · I4 thời lượng tối đa một clip · I7 số `片段`/`关键帧` tối đa
- Hai bài help nên mở trực tiếp để bổ sung: `漫游视频-基础设置` (3FO4K4WPIS5Y) và `漫游视频如何生成渲染` (3FO4K4WPDWMI)

---

## Tự tra video thực chiến

> 📌 **Sách này cho bạn ĐƯỜNG ĐI. Video cho bạn ĐÔI TAY.**
>
> Chương vừa rồi dựng khung: cơ chế đường đi, số nào an toàn, lộ trình nào chạy được. Nhưng cảm giác "đoạn này đi nhanh quá" thì **chỉ có xem nhiều clip của người khác mới quen mắt.**
>
> **Đọc chương xong, tra vài video về đúng đường đi máy ảnh, rồi quay lại làm.**

Dán nguyên cụm vào ô tìm kiếm của **小红书** hoặc **抖音 (Douyin)**:

| Từ khoá | Tìm được gì |
|---|---|
| `酷家乐 漫游视频 运镜` | Cách đi máy trong Kujiale |
| `酷家乐 关键帧 相机` | Đặt điểm mốc, chỉnh máy |
| `酷家乐 镜头库` | Thư viện cú máy có sẵn |
| `室内 漫游动画 镜头` | Đường đi máy cho video nội thất nói chung |
| `一镜到底 装修` | Clip đi hết căn một hơi |
| `D5渲染器 动画 运镜` | Nguyên lý đi máy — phần mềm khác nhưng tư duy chung |

> 💡 **Bốn quy tắc lọc, dùng cho mọi từ khoá:** sắp theo `最新` (mới nhất) · ưu tiên bài **quay màn hình thao tác thật**, bỏ bài chỉ khoe thành phẩm · bỏ bài `AI一键` (quảng cáo) · **xem clip nào thấy chóng mặt thì mở lại bảng 17.7 xem nó phạm lỗi nào** — đó là cách luyện mắt nhanh nhất.
