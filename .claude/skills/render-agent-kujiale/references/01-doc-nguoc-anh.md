# Đọc ngược một ảnh — 12 bước

Mục tiêu: từ pixel suy ra setup đã tạo ra nó. Quy tắc sắt của cả file này:

> **Mỗi kết luận phải viết dạng `bằng chứng nhìn thấy được → suy ra`.**
> Không có bằng chứng thì ghi "không đọc được từ ảnh này" — tuyệt đối không bịa số cho đủ bảng.

Nguồn của mọi số quy chiếu: C0 (nguyên lý), C3–C4 (số đèn), C6 (camera), C13 (bảng hội tụ), C5/C10 (vật liệu).
Hình học bóng đổ và cách đọc chiều cao camera là **suy luận hình học** ⚠️ — đúng về toán, nhưng độ chính xác
phụ thuộc bạn đo trên ảnh cẩn thận đến đâu.

---

## Bước 0 — Ảnh này là gì

Trước khi đọc thông số, phân loại. Đọc sai loại là đọc sai tất cả.

| Loại | Dấu hiệu | Hệ quả |
|---|---|---|
| **Ảnh chụp thật** | Nhiễu cảm biến đều khắp ảnh, lan sáng quanh nguồn, tối nhẹ 4 góc, rìa ảnh hơi mềm, vật liệu có tì vết ngẫu nhiên không lặp, người/vật thể "bừa" tự nhiên | Đọc theo nhiếp ảnh rồi **dịch** sang Kujiale. Đây là chuẩn vàng — mọi thứ trong ảnh đều tuân vật lý |
| **Ảnh render giỏi** | Vẫn rất sạch ở vùng khuất, cây có thể hơi đều màu, tì vết đặt có chủ đích (chỉ ở vùng gần camera + vùng nắng xiên quét), bóng đổ hoàn hảo không có nhiễu khí quyển | Tái dựng được 1:1. Đây là ca lý tưởng nhất để học |
| **Ảnh render kém** | Dính ≥2 dấu hiệu bảng 12 (C7): sáng đều vô hướng, cửa sổ cháy trắng, vân lặp, cây xanh nhựa, đồ đối xứng máy móc | Đọc để **học tránh**, không để chép |
| **Ảnh AI** | Hình học phần cứng vô lý (phào chạy hụt, khe trần không khép kín, tay nắm mọc sai chỗ), chữ/hoa văn nhoè bịa, vật liệu "đẹp nhưng không mua được", phản chiếu trong gương không khớp cảnh, số lượng nan/bậc/khe không đếm được ổn định | **Không tái dựng 1:1 được** — bản thân ảnh không tuân vật lý. Chỉ rút được ý đồ ánh sáng + tông màu |

Nếu là render, thử đoán đời template: ảnh **rất trong, vùng tối vẫn giữ chi tiết, không có góc đen chết**
→ dòng `写实` / `室内白天` 3.x (GI mạnh). Ảnh có **góc chết đen, tương phản gắt kiểu cũ** → template đời cũ
hoặc `极速`.

---

## Bước 1 — Nguồn sáng chính

Đọc từ **bóng đổ**, không đọc từ vùng sáng.

1. Tìm một vật đứng có chân chạm sàn (chân bàn, chân ghế, bình hoa, cây).
2. Vẽ đường từ chân vật đến mũi bóng → **bóng chỉ ra xa nguồn**. Nguồn nằm ở hướng ngược lại.
3. Kiểm chéo bằng vật thứ hai ở chỗ khác trong phòng:
   - Hai bóng **song song** → nguồn ở rất xa = mặt trời (`太阳光`).
   - Hai bóng **toè ra từ một điểm** → nguồn gần trong phòng = đèn (`射灯` / `球形灯` / `面光源`).
   - Mỗi vật có **2–3 bóng chồng nhau** → nhiều nguồn cùng cấp. Nếu các bóng đậm ngang nhau thì đây là
     lỗi "bóng đôi" (C4), không phải chủ đích.

| Thấy gì | Suy ra |
|---|---|
| Một hệ bóng song song rõ, sắc + một nền sáng mềm không bóng | `太阳光` + `面光源` thiên quang ở cửa. **Đây là setup ban ngày chuẩn** |
| Chỉ có bóng mềm, không hệ bóng nào sắc | Không bật nắng (trời râm / hướng Bắc / template auto). Nguồn chính là 天光 |
| Nhiều chùm bóng toè từ trần | Đèn nhân tạo làm chủ → cảnh đêm hoặc phòng không cửa sổ |
| Không tìm được bóng nào | **Ảnh bẹt — lỗi hạng 1 bảng 12.** Ghi thẳng ra, đây là ảnh không đáng chép |

---

## Bước 2 — Góc ngẩng mặt trời `俯仰角` (EL): đo bằng bóng

Đây là phép đo định lượng chính xác nhất đọc được từ ảnh. Áp cho **vật đứng thẳng, bóng đổ trên sàn phẳng**.

```
tan(EL) = chiều cao vật ÷ chiều dài bóng
```

Đo trên ảnh: lấy chiều cao vật (tính bằng pixel, đo dọc) chia chiều dài bóng (tính bằng pixel, đo dọc
theo sàn). Sai số chấp nhận được nếu vật ở gần giữa khung.

| Bóng dài gấp mấy lần chiều cao vật | EL ≈ | Đặc trưng vệt nắng |
|---|---|---|
| 3,7× | **15°** | Nắng rất xiên, vệt dài chạy sâu vào phòng, quét ngang mặt tủ — **ăn vân nhất** |
| 2,7× | **20°** | Xiên mạnh, sáng sớm / chiều muộn |
| 2,1× | **25°** | Đầu dải khuyến nghị của C3 |
| 1,7× | **30°** | ⚠️ Kinh nghiệm cộng đồng cho căn **có ban công** |
| 1,4× | **35°** | ⚠️ Kinh nghiệm cộng đồng cho căn **không ban công** |
| 1,2× | **40°** | Nắng bắt đầu đứng |
| 1,0× (bóng = cao vật) | **45°** | |
| 0,7× | **55°** | Vệt ngắn, ít cảm xúc |
| 0,6× | **60°** | |
| 0,36× | **70°** | Gần trưa — **gần như không có bóng, tránh** |

Dải khuyến nghị của giáo trình: **EL 25–50** ✅ (C3), và **đẹp nhất là 15–35°** ⚠️ (C13).
Ở Hà Nội, khoảng **8:00–10:00** cho căn hướng Nam / Đông Nam — hướng phổ biến nhất của chung cư Việt.

**Phương vị `方位角`:** đọc từ hướng bóng trên mặt bằng. Nếu bóng cửa sổ in lên sàn **lệch chéo** so với
mặt tường có cửa (không vuông góc) → nắng vào lệch ~30° so với mặt cửa ⚠️ — đúng kinh nghiệm C3.
Bóng vuông góc mặt cửa = nắng bắn thẳng, ảnh cứng và ít chiều sâu hơn.

> ⚠️ **Bẫy đơn vị trong app:** ô `角度` của nắng là **góc NGẨNG**, ô `位置` mới là **phương vị**.
> Nhầm hai ô là vệt nắng đổ sai hướng cả buổi.

---

## Bước 3 — Độ mềm bóng → `阴影柔和度` + loại vật cản

Đo: nhìn rìa bóng đổ, ước **vùng chuyển từ tối sang sáng rộng bao nhiêu so với tổng chiều dài bóng**.

| Rìa bóng | Suy ra | `阴影柔和度` của nắng (thang 1–10) |
|---|---|---|
| Sắc như dao cắt, chuyển < 2% chiều dài bóng | Nắng trực tiếp không vật cản, hoặc vật cản đục có khe | **1–2** |
| Sắc nhưng có viền mềm mỏng | Kính trong, lam gỗ, rèm sáo | **2–3** |
| **Có hình rõ nhưng rìa nhoè êm** | **Rèm voan — ca đẹp nhất, đây là thứ cần chép** | **3–5** |
| Nhoè đến mức chỉ còn mảng sáng, mất hình khung cửa | Quá tay, hoặc ánh khuếch tán rửa trôi vệt | 8–10 — **lỗi** |
| Không có bóng nào | Trời râm / không bật nắng | — |

> ⚠️ **HAI ô tên gần giống nhau, hai thang khác nhau** — nguồn gốc của mọi bộ số "vênh gấp mười lần"
> trên mạng:
> - `阴影柔和度` của **`阳光` (nắng)** chạy **1–10**
> - `阴影柔和` của **đèn nhân tạo** chạy **100–3000**
>
> Khi xuất phiếu phải ghi rõ đang nói ô nào.

**Đọc ngược loại vật cản** — nhìn *hình* của vệt sáng, không nhìn độ mềm:

| Vệt sáng trong ảnh | Vật cản | Cơ chế | `阴影柔和度` |
|---|---|---|---|
| Mảng sáng mềm có hình khung cửa mờ | Rèm voan `窗纱` | Tán xạ qua vải + độ mở | 3–5, `不透明度` rèm 25–45% ⚠️ |
| Khe sáng hẹp sắc nét giữa vùng tối | Rèm vải dày hé khe | Hình học khe | 2–3, `不透明度` 80–100% |
| Sọc ngang đều tăm tắp | Rèm sáo `百叶帘` | Hình học khe đều | 2–4 |
| Sọc dọc mạnh, sắc, rất ăn hình | Lam gỗ `木格栅` | Đục hoàn toàn có khe | **1–3** |
| Lốm đốm không đều, mép mềm | Lá cây trước cửa | Kẽ lá | 3–5, cây đặt đủ xa cửa |
| Hoa văn rỗng in lên tường | Vách CNC / hoa gió | Hình học | thấp, giữ nét |
| Nửa mềm nửa sắc xen kẽ | Rèm cầu vồng `斑马帘` | Lai | dải voan `不透明度` 30–45% |

> **Quy tắc phân loại nhanh:** vải mỏng và mờ → dựa **tán xạ**, cạnh mềm.
> Vật đục có khe → dựa **hình học khe**, cạnh sắc hơn, hạ `阴影柔和度`.

**Nếu ảnh có cột nắng nhìn thấy trong không khí** → có `体积光`. Kiểm ngay: cột sáng và bóng đổ trên sàn
có **cùng một hướng** không? Lệch nhau là lỗi (C3). Và nền phòng phải hơi tối thì cột mới nổi.

---

## Bước 4 — Tương phản

Cách đo không cần phần mềm: chọn **một vật liệu duy nhất xuất hiện cả ở vùng sáng lẫn vùng bóng**
(bức tường trắng có nửa nắng nửa bóng là lý tưởng), so độ sáng hai nửa.

| Vùng bóng sáng bằng bao nhiêu vùng nắng | Tỉ lệ | Đọc là |
|---|---|---|
| ~1/1 đến 1/2 | 1:1 – 2:1 | Phẳng, sáng đều kiểu ảnh rao nhà. Trường phái *real estate* |
| ~1/4 | **4:1** | **Có khối, kịch tính vừa — vùng vàng cho ảnh nội thất** |
| ~1/8 hoặc tối hơn | 8:1+ | Trầm sang, bóng sâu. Trường phái *moody / AD* |

⚠️ Các tỉ lệ này là số gốc từ nhiếp ảnh chân dung/điện ảnh, dùng để **ước lượng bằng mắt**, không phải
tham số nhập vào phần mềm.

**Test khử màu:** hình dung ảnh về đen trắng — còn phân biệt được vùng sáng và vùng tối không?
Không phân biệt được = ảnh "phẳng và xám" `又平又灰`, lỗi hạng 10 bảng 12.

**Kiểm ngưỡng trắng:** ⚠️ mảng "trắng" trong ảnh đẹp thường dừng quanh **190–220/255** (kinh nghiệm
Lasse Rode), một nguồn khác của C7 nói **180–200**. Chỉ điểm chói nhất mới được chạm gần 255.
Nếu tường trắng trong ảnh đo được 250–255 trên diện rộng → ảnh đang cháy, và đó là lý do nó "lộ CG".

---

## Bước 5 — Nhiệt độ màu và trộn nóng–lạnh

Soi **bề mặt trung tính** (tường trắng, ga giường, tủ trắng, trần) ở hai vùng khác nhau:

| Thấy gì | Suy ra |
|---|---|
| Vùng nắng ngả vàng ấm + vùng bóng ngả xanh | **Trộn nóng–lạnh chuẩn**: nắng ~6500K + bóng nhận màu trời. Đây là thứ làm ảnh có chiều sâu "điện ảnh" mà không tốn gì |
| Trong nhà vàng ấm + ngoài cửa sổ xanh lạnh | Đèn nội thất 2700–3500K + thiên quang lạnh. Cảnh chập tối / *blue hour* |
| Cả ảnh một màu vàng đè lên mọi thứ | Ám vàng `偏黄` — đèn quá ấm hoặc `环境光` để loại `暖光`. **Lỗi** |
| Cả ảnh ngả xanh | Ám lạnh `偏蓝` — thiên quang xanh quá đậm, hoặc dùng nhầm `冷光` cho ảnh ngày. **Lỗi** |
| Chỗ vàng chỗ xanh chỗ trắng loang lổ không lý do | "Bệ trắng, tường vàng, trần xanh" — dấu hiệu 3D lộ liễu nhất (C4) |

Ba mức chuẩn ✅ (C4): **3000K** ấm (ngủ, bàn ăn) — **4000K** trung tính (khách, bếp, làm việc) —
**6500K** lạnh (nắng, gần như không dùng cho đèn nhà ở).

Quy tắc chênh **≤ 500K** ⚠️ chỉ áp cho **các đèn cùng chiếu một bề mặt**, không áp cho cả căn.
Gradient theo khoảng cách vẫn rất đẹp: ngoài nhà 8000K → 6500K → 4500K → trong nhà 3500K.

Nếu ảnh dùng tông màu mà thang Kelvin không với tới (hồng, tím, xanh lục) → họ dùng **ô `颜色` mã RGB**
thay ô `色温`. Panel chỉ nhận **một trong hai**, hệ lưu giá trị chỉnh sau cùng.

---

## Bước 6 — Đếm lớp sáng

Ảnh có chiều sâu = **3 lớp không sáng bằng nhau**. Soi từng lớp:

| Lớp | Tìm gì trong ảnh | Nếu thiếu |
|---|---|---|
| **Nền** `基础照明` | Độ sáng chung, gradient từ cửa vào sâu phòng | Phòng tối om hoặc chỉ có đốm sáng rời rạc |
| **Chức năng** `局部照明` | Vùng sáng hơn ở sofa / bàn ăn / mặt bếp / gương | Đồ đạc chìm, không biết nhìn đâu |
| **Nhấn** `氛围+重点` | Khe hắt trần, đèn thả, vệt rọi tranh, đèn bàn | **Ảnh bẹt** — chỉ có lớp 1 phóng to |

**Kiểm gradient — và đọc đúng TRỤC của nó.** Nguyên tắc xương sống của C3 hay được đọc tắt thành
"sáng giảm dần từ cửa vào sâu phòng", nhưng câu đầy đủ là: **sáng giảm dần theo trục tính từ cửa** —
và trục đó nằm đâu là do vị trí cửa so với camera quyết định:

| Cửa sổ nằm đâu so với camera | Trục gradient | Biểu hiện trên ảnh |
|---|---|---|
| **Sau lưng camera** | Theo chiều sâu, xa dần | Sáng ở gần, tối dần về tường cuối |
| **Bên hông** (trái hoặc phải) | **Ngang khung** | Sáng một bên, tối dần sang bên kia |
| **Cuối trục, camera nhìn thẳng vào** | Theo chiều sâu, **ngược lại** | Tối ở gần, **sáng dần vào trong** — halo cuối trục |
| Hai mặt thoáng | Hai trục chồng nhau | Tối nhất ở góc xa cả hai cửa |

Đọc sai trục là hỏng cả bài: chép một bộ đèn từ ảnh cửa-cuối-trục sang cảnh cửa-bên-hông thì gradient
chạy sai hướng, và ảnh mất luôn hướng sáng dù số đèn "đúng".

Sáng đều tăm tắp không theo trục nào = đèn nền tống đều, lỗi hạng 1.

**Test "tia Chúa" `上帝之光`** — cực quan trọng khi chấm ảnh người khác:
> Mỗi vệt sáng rọi xuống phải **ứng với một model đèn thật nhìn thấy được trên trần**, hoặc hợp lý
> ngoài khung. Có vệt sáng ở chỗ trần trống trơn = đèn ảo đặt ẩu, người xem nhận ra ảnh giả ngay.

Đếm ngược ra số đèn: mỗi đốm sáng tròn trên tường/sàn = 1 `射灯`/`筒灯`. Mỗi dải sáng dài liên tục ở khe
trần / gầm tủ = 1 `灯带` (`面光源` kéo mảnh rộng 20–25 ⚠️). Mỗi quầng tròn quanh đèn thả = 1 `球形灯`.

---

## Bước 7 — Camera: ba số đọc được từ ảnh

### 7a. Chiều cao `相机高度` — đọc bằng đường chân trời

Nếu ảnh có **cột dọc thẳng đứng** (đã bật `相机矫正` hoặc chụp bằng tilt-shift), thì `俯仰角 = 0` và
**đường chân trời nằm đúng giữa khung theo chiều dọc**. Mọi thứ ở đúng chiều cao camera sẽ nằm trên
đường đó. Kẻ đường ngang qua giữa ảnh, xem nó cắt qua cái gì:

> ## ⚠️ PHÉP ĐO NÀY CẦN KHUNG NGUYÊN VẸN
> Nó dựa trên giả định **tâm khung đang nhìn = tâm khung gốc**. Giả định đó vỡ khi ảnh bị:
> **crop** · **letterbox** (ảnh chụp màn hình điện thoại có thanh đen trên dưới) · có **thanh UI /
> watermark / overlay** che mất mép · đã bị cắt lại khi hậu kỳ.
>
> Ảnh chụp màn hình từ Xiaohongshu, Douyin, Pinterest, Zalo **gần như luôn dính ít nhất một cái**.
>
> **Cách xử:** ước theo vùng nội dung thật (bỏ thanh đen hai đầu ra rồi lấy tâm vùng còn lại), rồi
> **ghi rõ trong phiếu đây là ước lượng thô, không phải số đo**. Nếu là model của chính mình thì
> đừng đoán — **mở panel `相机参数` đọc số thật**.

| Đường giữa ảnh cắt qua | Chiều cao camera ≈ |
|---|---|
| Mặt bàn trà | **400–450mm** — rất thấp, kiểu tạp chí cực đoan |
| Mặt ngồi sofa/ghế | 400–450mm |
| Mặt bàn ăn / bàn làm việc | **750mm** |
| Lưng tựa sofa | 750–850mm |
| Mặt bếp / mặt đảo bếp | **850–900mm** |
| Tay nắm cửa | **~1000mm** |
| Công tắc điện (VN) | 1200–1300mm |
| Mép trên tủ bếp dưới / mặt bàn console cao | ~900mm |
| Vai người đứng | ~1400mm |
| Mép trên cửa đi | 2100–2200mm — **camera đặt quá cao, lỗi** |

**Chuẩn của giáo trình** ✅ (bảng chính thức hiếm hoi, C6):
- Nhà ở / căn hộ trần 2700–2800mm → **相机高度 800–1200mm**
- Biệt thự trần 3000–3500mm → 1200–1400mm
- Công trình công cộng trần ~5000mm → 1400–1600mm

Đọc ra >1500mm → ghi thẳng vào phiếu: *"camera đặt cao kiểu camera an ninh — dấu hiệu ảnh nghiệp dư
dễ nhận nhất"*. Đọc ra 800–1200mm → ảnh này biết nghề.

Nếu ảnh **cột dọc đổ chụm** thì `俯仰角 ≠ 0`, đường chân trời lệch khỏi giữa khung — lúc đó chỉ kết
luận định tính: cột đổ chụm **vào trong** = camera ngửa lên; đổ chụm **ra ngoài** = camera cúi xuống.

### 7b. Trường nhìn `视野` (FOV, đơn vị **độ** — Kujiale không có ô mm)

| Thấy gì | FOV ≈ | Quy chiếu ống kính |
|---|---|---|
| Đồ tròn ở rìa khung bị kéo méo thành bầu dục rõ, tường rìa như đổ ra ngoài | **80–90°** | siêu rộng — méo, "mùi ảnh rao nhà" |
| Rìa hơi kéo, phòng trông rộng rãi | **70–80°** | 20–24mm |
| Không thấy méo, tỉ lệ đồ tự nhiên | **55–65°** | ≈ 35mm — **mặc định 60° của Kujiale, vùng vàng** |
| Cảm giác nén, đồ xa trông to gần bằng đồ gần, chỉ thấy một phần phòng | **40–50°** | ≈ 50mm — ảnh cận vật liệu, catalogue |

### 7c. Phương đứng + kiểu bố cục

- Áp cạnh thẳng (mép tờ giấy, cạnh cửa sổ trình duyệt) vào **cạnh tường dọc** trong ảnh: song song = đã
  bật `相机矫正` ✅. Đổ chụm = chưa bật → lỗi hạng 6 bảng 12.
- **Một điểm tụ** (thấy 1 bức tường chính diện, các đường chạy về 1 điểm) → kiểu A, ảnh khách duyệt phương án.
- **Hai điểm tụ** (thấy 2 bức tường tạo góc) → kiểu B, "chất tạp chí".
- Điểm tụ nằm **đúng tâm khung** → hơi máy móc; **lệch nhẹ khỏi tâm** → biết nghề.
- Chủ thể nằm ở **giao điểm lưới 1/3** → có áp quy tắc 1/3.

---

## Bước 8 — Vật liệu

Đọc từng bề mặt lớn trong khung, quy về 4 kênh của Kujiale (**không có Metallic, không có Roughness**):

| Nhìn thấy | Suy ra kênh |
|---|---|
| Phản chiếu **nét như gương**, thấy rõ hình đồ vật trong mặt | `反射光泽度` cao ~0,95–0,98 ⚠️ + `反射颜色` sáng — acrylic bóng / inox / marble đánh bóng |
| Phản chiếu **mờ, chỉ thấy mảng sáng tối lờ mờ** | `反射光泽度` **0,5–0,7** ⚠️ — melamine/laminate mờ, đá mờ `岩板` |
| Gần như không phản chiếu gì | `反射颜色` gần đen — sơn tường, nỉ, vải |
| Có **vân nổi tế vi bắt sáng xiên** | `凹凸比例` **0,03–0,1, mặc định 0,05** ✅. Veneer thớ sâu hơn: 0,08–0,15 ⚠️ |
| Bề mặt phẳng lì tuyệt đối, không vân nổi | `凹凸比例` ≈ 0 — đúng cho acrylic, **sai** cho melamine |
| Vải/rèm có ánh mềm ở mép nếp gấp (*sheen*) | Đúng chất vải. Thiếu = rèm trông như đúc nhựa |
| Rèm voan có nếp gấp nổi + phát sáng từ trong | Đã bật `渲染复杂材质` (`置换` + `3S`) và dùng template dòng `写实` — dòng `极速` **chỉ có 3S**, thiếu displacement |
| Đá marble có vẻ xuyên sáng ở mép mỏng | `渲染复杂材质` bật (3S) |
| Mặt bóng nhưng trông "chết", không phản chiếu gì | `环境反射亮度` thấp — nấc chính thức **2 → 6 → 12** ✅ |

**Bốn thứ tố cáo ảnh 3D, soi kỹ:**
1. **Vân lặp:** lùi xa nhìn tổng thể sàn gỗ / mảng tủ — có 2 tấm vân y hệt cạnh nhau không?
2. **Tì vết:** đếm được 2–3 "khuyết tật thật" trong khung không (xước nhẹ, bụi, mòn cạnh)?
   Ảnh đẹp đặt tì vết ở **vùng gần camera** và **vùng nắng xiên quét ngang** — không rải đều.
3. **Cây:** lá có chuyển sắc vàng-lục → lục tươi → lục sẫm không, hay "xanh nhựa" một màu đều?
4. **Trắng/đen tuyệt đối:** tường trắng phải là xám rất nhạt, đồ đen phải là xám rất đậm.

**Đọc ngược tỉ lệ vân:** cánh tủ rộng ~400mm mà chỉ chứa nửa thớ vân → vân bị phóng sai (khổ ván thật
là **1220 × 2440mm**, để mặc định 1000mm là sai). Viên gạch trông vụn, số mạch gấp đôi bình thường →
nhập sai module gạch (600×600 / 800×800 / 600×1200 / 750×1500).

---

## Bước 9 — Hậu kỳ

| Nhìn thấy | Suy ra |
|---|---|
| Vùng tối không đen kịt mà giữ chi tiết, vùng sáng không cháy | Đường cong chữ S nhẹ (dịch ~8/255) hoặc kéo `高光` xuống / `阴影` lên |
| Hạt nhiễu rất mịn đều khắp ảnh, kể cả vùng sáng | Đã thêm grain — **Amount 12–15** cho ảnh nội thất tiêu chuẩn |
| Ảnh mượt tuyệt đối không một hạt | Chưa thêm grain → lỗi hạng 11 bảng 12 ("sạch mịn quá mức") |
| Tối nhẹ 4 góc | Vignette — khuyết tật ống kính cố ý thêm vào |
| Lan sáng quanh cửa sổ / bóng đèn | `炫光` (thang 1–10, hội tụ ở **1,50** ⚠️; giữ 1,5–2,5). Trên 4–5 → giả kiểu poster |
| Tông màu thống nhất kiểu điện ảnh, hơi lệch khỏi màu thật | LUT nhẹ hoặc chia tông màu |
| Màu bão hoà lòe loẹt, "mùi filter" | `色彩增艳` quá cao — lỗi hạng 9 |
| Cây xanh dịu, không chói | Hạ bão hoà dải **lục** — chỉnh an toàn, không ai chốt hợp đồng theo màu lá |
| Gỗ ấm hơn thực tế | ⚠️ Cảnh báo: chỉnh dải **cam/vàng** là lệch màu ván khách đã chốt → rủi ro nghiệm thu, không phải rủi ro thẩm mỹ |

---

## Bước 10 — Ngoại cảnh và cửa sổ

| Nhìn qua cửa sổ thấy gì | Suy ra |
|---|---|
| Thấy rõ trời, nhà, cây bên ngoài | Cân bằng trong–ngoài tốt. `外景亮度` hợp lý (hội tụ **3**, dải 1–10 ⚠️), `曝光压制` đủ thấp |
| Trắng xóa như bị flash rọi | **Cháy trắng — lỗi hạng 2 bảng 12 dấu hiệu 3D.** Sửa: hạ `外景亮度` TRƯỚC, giữ nguyên `太阳光` để không mất vệt nắng |
| Ngoài cửa tối thui trong khi trong nhà sáng | Ngược lại — `外景亮度` quá thấp hoặc cảnh đêm |
| Hình ngoài cửa méo/nhoè/tỉ lệ sai | Ngoại cảnh tự tải sai tỉ lệ — Kujiale chỉ nhận **PNG/JPG toàn cảnh 2:1**, ≤20MB, **KHÔNG nhận HDR/EXR** |
| Sàn bóng / kính phản chiếu cảnh ngoài rõ | `环境光反射` cao (hội tụ **18–20** ⚠️, một nguồn để 10). Quá cao → cháy cục bộ |
| Hướng nguồn sáng thấy trong cảnh ngoài **lệch** hướng bóng đổ trong phòng | **Lỗi** — phần mềm không tự khớp, phải tự chỉnh `方位角` của nắng cho khớp ngoại cảnh |

---

## Bước 11 — Bày đồ và "hơi thở đời sống"

| Tìm gì | Ý nghĩa |
|---|---|
| Sách mở, ly đang dùng, chăn hơi nhàu, gối lệch nhẹ, dép ở cửa | Có dấu vết người sống → ảnh có cảm xúc |
| Bàn trống trơn, sofa phẳng phiu, gối xếp thẳng hàng như duyệt binh | Lỗi hạng 7 + 11 — "hàng tồn kho" |
| Có đủ tiền cảnh – trung cảnh – hậu cảnh | Bố cục có lớp lang, mắt có đường đi |
| Ổ điện, công tắc, dây điện, khe thông gió lộ trong khung | Nhiếp ảnh gia nội thất xoá những thứ này ở hậu kỳ như bước tiêu chuẩn |
| Vật bị cắt ngang khó chịu ở mép khung | Lỗi bố cục |
| Decor nhồi nhét cho "sống động" | Lộn xộn vô chủ đích = giả kiểu khác. **2–3 điểm là đủ** |

Với khách Việt, ghi chú thêm nếu ảnh mẫu là ảnh nước ngoài: bàn thờ, dép ở cửa, cây hợp khí hậu — xem
`content/11-model-va-bay-do-ke-chuyen.md` §11.7.

---

## Bước 12 — Chốt: hai bảng

Kết thúc luôn bằng đúng hai bảng, không lan man:

**Bảng 1 — "Cái gì làm ảnh này thật"** (hoặc "cái gì tố cáo nó giả"): 3–6 dòng, mỗi dòng một quan sát
cụ thể chỉ đúng chỗ trong ảnh. Đây là phần người đọc học được nhiều nhất.

**Bảng 2 — Thông số tái dựng trong Kujiale:** đủ template / camera / nắng / thiên quang / đèn chức năng /
đèn nhấn / `高级设置` / vật liệu / hậu kỳ, mỗi dòng kèm **✅ hoặc ⚠️** và ghi rõ thang đơn vị.

Kèm cuối cùng: **thứ tự dò** (đổi một biến mỗi lần) và **cái khó nhất khi tái dựng** — thường là
một trong ba: cân bằng trong–ngoài ở cửa sổ, độ nổi vân cần sáng tạt, hoặc tì vết vật liệu.

---

## Bảng tra ngược nhanh — triệu chứng → thủ phạm

Dán cạnh màn hình. Cột phải là thứ cần vặn, cột giữa là vì sao.

| Thấy trong ảnh | Nguyên nhân | Vặn cái gì |
|---|---|---|
| Sáng đều, không biết nguồn ở đâu | Đèn nền tống đều, chỉ có lớp 1 | Bố đủ 3 lớp; giảm nền, tăng nhấn |
| Ảnh phẳng và xám | Thiếu tương phản, không dám để tối | Hạ đèn bù vùng phụ; đường cong chữ S |
| Cửa sổ cháy trắng | `外景亮度` cao / thiên quang ngoài quá mạnh / số đèn cũ + GI 3.x | Hạ `外景亮度` trước, rồi `曝光压制`, rồi `面光源` ngoài |
| Trần loang trắng | `面光源` dán sát trần, hoặc nền quá mạnh | Hạ `面光源` xuống ~100mm dưới điểm thấp nhất của trần |
| Vệt sáng rọi từ hư không | `射灯`/`聚光灯` ở chỗ trần không có model đèn thật | Xoá hoặc dời về đúng đèn thật |
| Đốm tròn trắng lốm đốm trên sàn bóng | Nguồn phản chiếu lên vật liệu bóng | Tắt `影响高光` |
| Gương "mất đồ", không phản chiếu | Engine bỏ qua vật sau lưng camera | Bật `镜面真实反射` (không được nhớ trạng thái — lần nào cần lần đó tick) |
| Đá không xuyên sáng, vân nổi bị phẳng | Vật liệu phức tạp chưa render | Bật `渲染复杂材质`; vẫn không được → đổi template dòng `写实` |
| Đèn LED dây đứt đoạn / cháy trắng | Vật liệu đèn dây cũ | Bật `硬装灯带使用新材质` (dải 0%–6000%) |
| Trần/tủ trắng ám màu sàn gỗ | Hắt màu — vật lý thật | Bật `溢色修正` (tắt thì **thật hơn**, bật thì **sạch hơn** — chọn theo ý đồ) |
| Ảnh bẹt, phào không nét, khe không sâu | AO tắt hoặc Size thấp | Bật `环境阻光`: Size **0,8** / Radius **0,05 ft** ✅ (≈15mm); C13 ghi `深浅` 0,50 · `半径` 25–50mm ⚠️ |
| Vệt đen loang lổ hình thù kỳ quái | **`重面` — hai mặt phẳng chồng khít** | **SỬA MODEL.** Không tham số nào cứu được |
| Trần "biến mất" khi render | Đèn `面光源` chồng vào mặt trần | Hạ đèn xuống không chạm trần |
| Vân gỗ đẹp mà render ra bẹt | Đèn chiếu vuông góc, không có sáng tạt | Thêm `灯带` dọc cánh tủ hoặc `射灯` xiên 30–45°. **Thủ phạm số 1 — đa số ca dừng ở đây** |
| Nâng template 3.x xong cháy trắng cả ảnh | GI dội mạnh hơn, đèn cũ thành thừa sáng | **Hạ đồng loạt độ sáng đèn tay** rồi render nháp tăng dần |
| Cột nắng một nơi, bóng nắng một nẻo | `体积光` không trùng hướng `太阳光` | Chỉnh `正视角度` / vị trí cột trùng `方位角` nắng |
| Bóng nắng trong phòng không cửa sổ | Quên tắt `太阳光` | Tắt trạng thái `太阳光` |
