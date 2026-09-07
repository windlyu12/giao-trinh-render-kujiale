# Prompt đang chạy — bản mới nhất, dán là dùng

> # 📍 DÙNG BẢN NÀO — khỏi phải đọc hết file
>
> | Cần gì | Lấy ở đâu |
> |---|---|
> | **Cảnh MỚI bất kỳ (ban ngày)** | **`references/05-prompt-ai.md` §7.4** — khung điền vào ngoặc vuông |
> | Cảnh sảnh vào + bàn ăn (3ds Max) | **CA2 bản A8** — cuối file, đã hội tụ ✅ |
> | Cảnh bàn ăn marble + panel gỗ | CA1 bản B3 — chưa test |
> | Cảnh phòng khách hẹp (sửa ảnh đã render) | CA3 — chưa test |
> | **Phòng ngủ trẻ em — sửa thứ bậc màu + sáng** | **CA4** — cuối file, chưa test |
> | **Sau MỌI bản prompt** | Mục **HẬU KỲ BẮT BUỘC** — không kèm là xuất thiếu |
>
> Các bản A3→A7, B, B2, A4, A5, A6 giữ lại **chỉ để truy vết vì sao**. Đừng dùng lại.
> Bảng **"cụm ĐÃ THỬ và HỎNG"** ở giữa file là thứ đáng đọc nhất trước khi viết prompt mới.


Đây là **text đầy đủ** của các prompt đã/đang test. `FEEDBACK.md` ghi *vì sao*, file này giữ *cái để copy*.
Sửa prompt thì sửa ở đây và ghi lại lượt, đừng để text trôi trong chat.

**Ca đang chạy:** khu bàn ăn — marble vân lớn + panel gỗ vân dọc + tủ kem + sàn gỗ sẫm,
cửa sổ bên phải có rèm voan. Dùng **image-to-image**: luôn đưa kèm ảnh model, không tả chay.

> ⚠️ **Phạm vi dùng:** mood board / thăm dò phong cách / nháp tại chỗ khi tư vấn.
> **CẤM** dùng cho ảnh khách ký duyệt, ảnh kèm hợp đồng, ảnh mô tả vật liệu sẽ thi công, ảnh nghiệm thu.
> Ca 01 đã xác nhận: AI đổi màu panel gỗ, xoá chi tiết tay nắm tủ, đổi loại cây.

---

## ✅ Bản A — airy (ĐÃ TEST, ánh sáng ăn)

Ca 01. Người dùng: *"ánh sáng khá ổn"*. Bố cục giữ gần như nguyên, gradient ngang phải→trái đúng ý,
**ghế boucle ra đúng chất vải**.

```
Photorealistic interior photograph of this exact dining area. Keep the camera angle,
room layout, furniture positions, cabinetry proportions and material types exactly as
in the source image — do not add, remove or move any object.

Bright and airy late-morning daylight entering from the full-height window on the
right, softly diffused through sheer curtains; brightness falls off gradually toward
the left so the tall cream cabinet settles into gentle shadow. Warm 3000K glow from
the linear pendant above the table mixed with the cool daylight. Shot on a 35mm lens
at eye level 1.1m, straight verticals, no wide-angle distortion.

Book-matched white marble feature wall with soft grey veining, vertical wood-grain
laminate panels, matte cream tall cabinetry, light oak table top on a cylindrical oak
pedestal, cream boucle chairs with slim black metal legs, dark oak flooring, black
wall-mounted TV. Lived-in styling: an open book, a half-finished coffee cup, a linen
runner slightly askew, one chair pulled out at an angle.

Layered composition with foreground depth, soft specular highlights, physically based
materials, subtle film grain, gentle bloom around the window. Muted natural colour,
nothing oversaturated.
```

**Còn lệch:** cửa sổ hơi cháy · vân gỗ panel và mặt tủ kem hơi bẹt · ra vuông 1:1 (không sao — xem ca 03).

---

## 🔄 Bản B3 — nắng xiên, đã vá ca 02+03+04 (CHƯA TEST)

Ba đời trước: **B** hỏng (tắm cam, bịa bóng lá, nét CAD sống sót) → **B2** vẫn hỏng
(ra 16:9 cắt mất tường cao, ghế xù lông). B3 vá cả 5 chỗ.

```
Photorealistic interior photograph of this exact dining area. Keep the camera angle,
room layout, furniture positions, cabinetry proportions and material types exactly as
in the source image — do not add, remove or move any object.

Render it as a continuous photograph: remove every CAD outline, edge line and flat
line-art stroke from the source. Surfaces meet without drawn borders. Nothing in the
image should look like a 3D viewport.

Late-morning sun entering from the full-height window on the right at a low angle,
filtered through the sheer curtain — one soft shaft reaching the floor, restrained, not
a flood. Cool blue-grey skylight fills the shadows so they stay neutral and never turn
orange. Brightness falls off gradually toward the left; the tall cream cabinet sits in
cool soft shadow. Warm 3000K glow from the linear pendant above the table, mixed with
the cool daylight. Cast shadows only from objects actually present in the scene.

Shot on a 35mm lens at eye level 1.1m. Vertical lines stay perfectly vertical, natural
undistorted perspective. Keep the same framing and crop as the source image.

Book-matched white marble feature wall with soft grey veining, vertical wood-grain
laminate panels, matte cream tall cabinetry, light oak table top on a cylindrical oak
pedestal, cream boucle chairs with slim black metal legs, dark oak flooring with
visible grain, black wall-mounted TV. Lived-in styling: an open book, a coffee cup,
a linen runner slightly askew.

Overall colour balance stays neutral — cool daylight against warm lamp accents. Soft
specular highlights, physically based materials, subtle film grain. Muted natural colour.
```

**Khác B2 ở đâu:**
| Chỗ | B2 | B3 | Vì |
|---|---|---|---|
| Khối 4 | `no wide-angle distortion, wide horizontal 16:9 composition` | `natural undistorted perspective. Keep the same framing and crop as the source image.` | Ca 03 |
| Khối 5 — ghế | `cream boucle chairs with visible looped fabric texture and...` | `cream boucle chairs with slim black metal legs` | Ca 04 |
| Bóng bịa | `...no foliage shadows, no shadows from anything outside the frame` | `Cast shadows only from objects actually present in the scene.` | Bỏ phủ định, giữ dương tính |

**Xem gì khi test B3:** ghế có ra chất vải như bản A không · nét CAD có sạch không ·
tông có còn ám cam không · khung có giữ như ảnh gốc không.

---

## 🚫 Cụm ĐÃ THỬ và HỎNG — đừng dùng lại

| Cụm | Ca | Hậu quả |
|---|---|---|
| `raking ... so the veining and texture read clearly` | 02 | AI đẩy nắng cực mạnh + tự bịa bóng lá cây đổ lên tủ |
| bỏ `mixed with the cool daylight` khi đổi sang tông ấm | 02 | Mất mốc lạnh → cả khung tắm màu cam |
| `wide horizontal 16:9 composition` | 03 | Cắt mất tường marble cao và tủ kem kịch trần |
| `no wide-angle distortion` | 03 | Phủ định chứa token hình ảnh mạnh — nghi phản tác dụng |
| `visible looped fabric texture` (kèm `boucle`) | 04 | Ghế xù hết lông — `boucle` đã hàm ý vải vòng rồi |

> ## 📌 Luật rút ra (đã chín 3/3 ca)
> **Chữa lỗi prompt bằng CỤM NHẤN thì AI luôn giao thừa.**
> Thấy thiếu gì thì thêm **cụm BÓ** — `tight`, `compact`, `low`, `even`, `restrained`, `subtle` —
> hoặc chỉ gọi đúng tên vật liệu rồi để model tự lo.

---

## Ghi chú theo công cụ

| Công cụ | Ghi chú |
|---|---|
| **Google Flow** | Công cụ **video**, nền Veo → mặc định khung ngang. **Tỉ lệ nằm ở cài đặt output của project, không điều được bằng prompt** — cài đặt thắng câu chữ. ⚠️ Vị trí nút kiểm lại trong app |
| **Nano Banana / Gemini** | Mạnh ở sửa ảnh có sẵn. Không có ô negative → diễn đạt dương tính. Ảnh ra có dấu ✦ |
| **ChatGPT** | Chịu sửa lặp tốt — dò từng khối một. Tỉ lệ mô tả bằng lời hoặc chọn trong cài đặt |
| **Midjourney** | Giữ bố cục kém — chỉ dùng cho mood, đừng kỳ vọng ra đúng model |

---

# CA 2 — Sảnh vào + bàn ăn (3ds Max / Corona viewport)

**Nguồn:** ảnh viewport 3ds Max `Default Shading` (`Corona Camera015`) — **không phải Kujiale**.
Đọc được hình học/bố cục; **không đọc được vật liệu thật** (tường xám = màu shading mặc định).

**Đặc điểm quyết định cách đánh đèn: KHÔNG CÓ CỬA SỔ TRONG KHUNG.**
Sảnh vào + bàn ăn nằm sâu trong lõi căn → **tắt nắng** (bật là sinh bóng xuyên tường).
Sáng đến từ: đèn âm trần (~5–6 chiếc trong model) + đèn thả trên bàn + hắt từ ngoài khung bên phải.
Sàn xương cá sẫm nuốt sáng → Quy luật 1, cần nhiều hơn cảnh sàn sáng.
**Cửa vòm gỗ là nhân vật chính** của khung.

⚠️ **Bẫy riêng của cảnh này:** lưng ghế **đan mây rỗng** = "boucle" của khung này.
**Đừng viết `visible woven texture`** — đúng bẫy ca 04. Gọi `cane-back` là đủ.

## ✅ CA2 bản A — ấm, đèn nhân tạo dẫn (ĐÃ TEST — ánh sáng ăn, VẬT LIỆU RA NHỰA)

```
Photorealistic interior photograph of this exact entryway and dining area. Keep the
camera angle, room layout, furniture positions, cabinetry proportions and material
types exactly as in the source image — do not add, remove or move any object.

Render it as a continuous photograph. Remove the viewport text overlay in the top-left
corner and the axis gizmo in the bottom-left corner. Remove every CAD outline and edge
line; surfaces meet without drawn borders. Nothing should look like a 3D viewport.

Soft warm interior lighting, late afternoon. Recessed ceiling downlights wash the tall
cabinetry from above; the charcoal globe pendant glows warm 3000K over the dining table.
A gentle cool daylight spill enters from the living area off-frame to the right, keeping
the shadows neutral rather than orange. The arched oak door is the brightest point in
the frame; brightness settles gradually toward the left corner. Cast shadows only from
objects actually present in the scene.

Shot on a 35mm lens at eye level 1.1m. Vertical lines stay perfectly vertical, natural
undistorted perspective. Keep the same framing and crop as the source image.

Arched oak door with fine grain, tall built-in cabinetry in matte cream lacquer mixed
with oak veneer, curved-end oak console, framed abstract art, dark walnut herringbone
flooring, light stone dining table with oak legs, cane-back dining chairs with cream
seat cushions, oak floating shelves, a large monstera. Lived-in styling: one pair of
shoes turned slightly out of line at the bench, an open magazine on the table.

Overall colour balance stays neutral warm. Soft specular highlights, physically based
materials, subtle film grain. Muted natural colour.
```

## 🔄 CA2 bản B — ban ngày hắt từ ngoài khung phải (CHƯA TEST)

Chỉ đổi **khối 2** của bản A:

```
Bright even daylight spilling in from the living area off-frame to the right, soft and
diffused, no direct sun reaching the frame. Warm 3000K glow from the charcoal globe
pendant above the dining table, mixed with the cool daylight. Brightness falls off
gradually toward the left corner, where the console sits in soft shadow. The dark
herringbone floor picks up a gentle sheen near the right. Cast shadows only from objects
actually present in the scene.
```

**Cả hai bản cố ý KHÔNG có nắng xiên** — khung không cửa sổ thì vệt nắng là nói dối vật lý,
và lưng ghế mây gặp sáng tạt rất dễ ra kiểu xù của ca 04.

**Đã áp sẵn 3 luật học được:** không cụm nhấn · không gọi tên tỉ lệ (giữ khung ảnh gốc) ·
giữ mốc lạnh khi dùng tông ấm. Thêm một câu mới: **xoá overlay viewport** (chữ `[Corona Camera015]`
góc trên trái + trục toạ độ góc dưới trái) — thứ ảnh nguồn Kujiale không có nhưng 3ds Max thì có.

## ✅ CA2 bản A3 — ĐÃ TEST (vật liệu ăn) — **đã bị A4 thay thế, xem cuối file**

Gộp mọi thứ học được từ ca 01–06. **Không phải ghép gì cả.**

```
Photorealistic interior photograph of this exact entryway and dining area. Keep the
camera angle, room layout, furniture positions, cabinetry proportions and material
types exactly as in the source image — do not add, remove or move any object.

Render it as a continuous photograph. Remove the viewport text overlay in the top-left
corner and the axis gizmo in the bottom-left corner. Remove every CAD outline and edge
line; surfaces meet without drawn borders. Nothing should look like a 3D viewport.

Soft interior lighting, late afternoon. Recessed ceiling downlights wash the tall
cabinetry from above; the charcoal globe pendant glows warm 3000K over the dining table;
a warm strip lights the arched oak niche from within. A gentle cool daylight spill
enters from the living area off-frame to the right, keeping the shadows neutral rather
than orange. The arched niche is the brightest point in the frame; brightness settles
gradually toward the left corner. Cast shadows only from objects actually present in
the scene.

Shot on a 35mm lens at eye level 1.1m. Vertical lines stay perfectly vertical, natural
undistorted perspective. Keep the same framing and crop as the source image.

Matte cream lacquer cabinetry with a fine hand-applied surface, never glassy — the sheen
shifts slightly from door to door. Oak veneer with open pores, the grain changing from
board to board. The curved console catches a soft satin sheen only where light grazes
it. Dark walnut herringbone floor in a low satin finish, planks varying in tone, a faint
wear path toward the door. Cane chair backs woven from real rattan, the weave slightly
irregular. Cotton seat cushions with a soft matte weave and gentle creasing where people
sit. Glazed ceramic vases with uneven glaze pooling. Everyday traces, quiet and few: a
faint scuff on the floor near the shoes, soft dust settled on the top shelf.

Each material carries its own level of sheen — chalky walls, satin cabinet fronts, oiled
wood, dry woven cane, glazed ceramic.

True photographic tonal range: real deep shadow under the console and inside the shoe
niche, a clear falloff across the ceiling, whites that stop just short of pure white.
Let parts of the frame sit in genuine shadow.

Lens and film character: fine grain visible across the whole frame, a gentle vignette at
the corners, slight softness at the extreme edges, faint chromatic fringing on the
highest-contrast edges. Full-frame camera at ISO 400.

Neutral white balance — the cream cabinet fronts read as near-white, not amber. Warmth
comes only from the pendant and the arch strip, never as an overall tint. Muted natural
colour. The look of a printed magazine interior photograph.
```

### Đổi gì so với bản A *(bảng này là phần bổ sung, prompt trên đã đầy đủ)*

| Khối | Bản A | Bản A3 | Vì |
|---|---|---|---|
| 2 ánh sáng | `Soft warm interior lighting` | `Soft interior lighting` + để nguồn tự mang hơi ấm | Ám ấm đều toàn khung → mắt đọc là filter |
| 5 vật liệu | Liệt kê tên vật liệu | Tả **bề mặt** từng thứ + tì vết bó liều | Ca 06 — không có tì vết thì ra nhựa |
| 6 chất ảnh | `physically based materials, soft specular highlights, subtle film grain` | Bỏ 2 cụm đầu · `fine grain **visible** across the whole frame` | `physically based` nghi đẩy về vẻ CG · `subtle` bó grain xuống 0 |
| **mới** | — | Khối dải tông + khối ống kính/phim + khối cân bằng trắng | Ca 06 — "lớp nhựa" là lỗi tầng toàn ảnh |

**Nếu quá tay thành nhà cũ bẩn:** bỏ **một** câu `Everyday traces...`, giữ nguyên phần còn lại.

> ⚠️ **Ca 07 xác nhận:** khối `Lens and film character` **không ăn** — grain, vignette, quang sai đều
> ra 0 dù đã đổi `subtle` → `visible`. Giữ khối đó trong prompt cũng được (vô hại), nhưng
> **đừng trông cậy vào nó**. Bốn thứ đó làm ở hậu kỳ, xem mục cuối file.
>
> ⚠️ **Regression cần canh:** câu `one pair of shoes turned slightly out of line` ăn ở bản A nhưng
> **mất ở A3** — nghi do khối 5 dài thêm làm loãng. Nếu cần staging đó thì tách thành câu riêng
> đặt cuối khối 5.

---

# 🧪 HẬU KỲ BẮT BUỘC — 2 phút, theo C14

> **Ảnh AI không bao giờ là bản cuối.** "Lớp nhựa" là đặc tính của diffusion model — prompt ghì
> được một phần, hậu kỳ mới dứt điểm. Số dưới lấy thẳng từ C14 của giáo trình.

| Bước | Làm gì | Số |
|---|---|---|
| 1 | **Đường cong chữ S** — trả lại dải tông | Điểm vào 64 → ra **57** · điểm vào 192 → ra **198** (dịch ~8/255). Giữ điểm giữa 128, nhích tối đa ±3 |
| 2 | **Hạt nhiễu** — thứ giết "nhựa" mạnh nhất | Amount **12–15** · Size 25 · Roughness 45–50 · **Gaussian đơn sắc** (nhiễu màu làm ảnh bẩn). Ảnh 1080–2K thì Amount **8–12** |
| 3 | **Tối góc** nhẹ | Vignette vừa đủ cảm thấy |
| 4 | **Khử ám** | Kéo cân bằng trắng về trung tính nếu cả ảnh ngả kem |
| 5 | **Dải lục** | Hạ bão hoà −5 → −10 cho cây bớt "xanh nhựa" |

⚠️ **KHÔNG đụng dải cam/vàng** — đó là màu ván khách chốt trên bảng mẫu, lệch là tranh chấp nghiệm thu.
⚠️ **Đánh giá hạt ở KÍCH THƯỚC XUẤT CUỐI, xem toàn ảnh — không phóng 100%.** Cùng thiết lập,
ảnh 1080px trông nặng hạt gấp đôi ảnh 4K.

Làm được trên Snapseed / Lightroom Mobile / Photoshop — 2 phút.

---

# CA 3 — Phòng khách hẹp (ảnh ĐÃ RENDER, sửa lỗi bằng AI)

**Khác hai ca trước:** đầu vào không phải model chưa render mà là **một ảnh render đã hoàn thiện**.
Việc là **sửa lỗi**, không phải dựng từ đầu.

**Chấm theo Phụ lục A: 31/50, hai tiêu chí ≤2 → ngưỡng cơ học là LÀM LẠI.**
Nhưng gốc lỗi tập trung (cân bằng trong–ngoài + thiếu bóng tiếp xúc) nên thực tế là
**render lại có trọng điểm**, không phải làm lại từ số không.

| # | Tiêu chí | Điểm |
|---|---|---|
| 3 | Cửa sổ không cháy trắng | **1** — cháy bệt hoàn toàn, không đọc được gì ngoài kính |
| 7 | Phản chiếu & chất liệu | **2** — tủ lạnh là mảng xám chết, không phản chiếu gì |
| 1 · 2 · 6 · 9 | Hướng sáng · tương phản · chi tiết bề mặt · bố cục | 3 |
| 4 · 5 · 8 · 10 | Nhiệt màu · sạch nhiễu · góc máy · hậu kỳ | 4 |

## 🔧 CA3 — prompt sửa lỗi, ĐẦY ĐỦ (CHƯA TEST)

```
Photorealistic interior photograph of this exact living room. Keep the camera angle,
room layout, furniture positions, wall panelling proportions and material types exactly
as in the source image — do not add, remove or move any object.

Recover the window: the sheer curtain keeps its full fold structure all the way across,
never flattening into white. Beyond the glass a soft low-contrast daylight view is
gently readable — pale sky and the blurred green of a plant on the balcony — bright but
holding detail.

Ground everything in the room: clear contact shadows where the sofa base, the marble
pedestal and the round rug meet the floor; soft darkening under the seat cushions and
behind each boucle pillow; a small shadow where the artwork frame stands off the wood
panel.

The dark fridge panel picks up a soft blurred reflection of the room — the window light
and the cabinetry — instead of reading as a flat dark rectangle. Same for the stone
worktop at the right edge.

Oak veneer wall panelling with grain that changes from board to board, warm and open-
pored, never a repeating pattern. White marble slab with veining that varies in density.
Cream boucle sofa with its looped pile intact. Dark oak floor in a low satin finish,
planks varying in tone.

True photographic tonal range: real deep shadow beneath the sofa and inside the right-
hand recess, whites that stop just short of pure white, a full range in between. Warm
interior light against cool daylight from the left — keep the two temperatures separate,
no overall amber tint.

Shot on a 35mm lens at eye level 1.05m. Vertical lines stay perfectly vertical, natural
undistorted perspective. Keep the same framing and crop as the source image.
```

### Cái prompt này KHÔNG sửa được

| Lỗi | Vì sao AI không sửa được | Cách đúng |
|---|---|---|
| Đèn chùm **bị cắt ngang đỉnh khung** | Là lỗi khung hình, không phải lỗi pixel | Render lại: hạ camera hoặc nới `视野`; hoặc treo đèn cao hơn |
| Mép phải có **ghế ăn + bàn cắt cụt** | Như trên | **Crop bớt mép phải** — cách rẻ nhất, làm được ngay |
| Ảnh mịn tuyệt đối, không hạt | Ca 07 đã chứng minh không prompt được | Hậu kỳ, xem mục cuối file |

⚠️ **Cảnh báo riêng cho ca sửa ảnh:** yêu cầu "recover cửa sổ" là **bảo AI VẼ RA cảnh ngoài
chưa từng tồn tại**. Với ảnh mood thì được; với ảnh giao khách thì đó đúng là thứ C8 cấm.
Muốn cảnh ngoài thật thì phải render lại với `外景` đúng và hạ `外景亮度`.

---

# CA2 bản A4 — vá logic truyền sáng vòng 1 (ca 09) — **đã bị A5 thay thế**

Kỹ thuật bắt: hai cánh tủ nhỏ trên hõm vòm bị vẽ sẫm hơn hẳn mảng cánh lớn bên trái, dù
**cùng mặt phẳng, cùng vật liệu, cùng cao độ**. Còn mảng đáng tối nhất (tường trên cửa vào)
lại sáng hơn. **Trật tự sáng–tối đảo ngược cục bộ.**

Bản A4 = A3 + một khối khai báo **tương quan độ sáng tường minh**.

```
Photorealistic interior photograph of this exact entryway and dining area. Keep the
camera angle, room layout, furniture positions, cabinetry proportions and material
types exactly as in the source image — do not add, remove or move any object.

Render it as a continuous photograph. Remove every CAD outline and edge line; surfaces
meet without drawn borders. Nothing should look like a 3D viewport.

Soft interior lighting, late afternoon. Recessed ceiling downlights wash the tall
cabinetry from above; the charcoal globe pendant glows warm 3000K over the dining table;
a warm strip lights the arched oak niche from within. A gentle cool daylight spill
enters from the living area off-frame to the right, keeping the shadows neutral rather
than orange. Cast shadows only from objects actually present in the scene.

Light behaves consistently across every surface. The two small cabinet doors above the
arch sit in the same plane, in the same white lacquer, at the same height as the tall
door panels to their left — they read at exactly the same brightness as those panels.
Do not darken them to make the lit arch stand out. The dimmest area in the whole frame
is the plain wall above the entry door, which is furthest from the downlights and
receives no bounce. Brightness across the room is set by distance from the downlights,
the pendant and the arch strip — by nothing else.

Shot on a 35mm lens at eye level 1.1m. Vertical lines stay perfectly vertical, natural
undistorted perspective. Keep the same framing and crop as the source image.

Matte cream lacquer cabinetry with a fine hand-applied surface, never glassy — the sheen
shifts slightly from door to door. Oak veneer with open pores, the grain changing from
board to board. The curved console catches a soft satin sheen only where light grazes
it. Dark walnut herringbone floor in a low satin finish, planks varying in tone, a faint
wear path toward the door. Cane chair backs woven from real rattan, the weave slightly
irregular. Cotton seat cushions with a soft matte weave and gentle creasing where people
sit. Glazed ceramic vases with uneven glaze pooling. Everyday traces, quiet and few: a
faint scuff on the floor near the shoes, soft dust settled on the top shelf.

Each material carries its own level of sheen — chalky walls, satin cabinet fronts, oiled
wood, dry woven cane, glazed ceramic.

True photographic tonal range: real deep shadow under the console and inside the shoe
niche, a clear falloff across the ceiling, whites that stop just short of pure white.
Let parts of the frame sit in genuine shadow.

Neutral white balance — the cream cabinet fronts read as near-white, not amber. Warmth
comes only from the pendant and the arch strip, never as an overall tint. Muted natural
colour. The look of a printed magazine interior photograph.

One pair of shoes sits turned slightly out of line on the floor beside the bench.
```

### Đổi gì so với A3 *(bảng bổ sung — prompt trên đã đầy đủ)*

| Chỗ | A3 | A4 | Vì |
|---|---|---|---|
| **mới** | — | Cả khối `Light behaves consistently…` | Ca 09 — trật tự sáng–tối bị đảo |
| Ống kính/phim | Có khối `Lens and film character` | **Bỏ hẳn** | Ca 07 — grain/vignette/quang sai ra 0 qua 2 cách phát biểu. Giữ chỉ tổ dài prompt |
| Staging giày | Nằm chìm trong khối 5 dài | **Tách thành câu riêng ở cuối** | Ca 07 — bị loãng và mất |

> ⚠️ **Không đảm bảo.** AI không có bộ giải truyền sáng. Câu tương quan tường minh ghì được một phần,
> nhưng ảnh nào có người trong nghề soi thì **render thật, đừng AI** — engine giải đúng miễn phí.

---

# CA2 bản A5 — vá suy giảm vòng 2 (ca 09+10) — **hướng này KHÔNG hội tụ, xem A6-đơn giản**

Kỹ thuật bắt thêm hai lỗi nữa, cùng gốc với ca 09: **AI không tính ánh sáng yếu dần theo khoảng cách.**
A5 khai báo tường minh cả ba: nhất quán bề mặt · vũng sáng trên sàn · gradient trong hõm.

```
Photorealistic interior photograph of this exact entryway and dining area. Keep the
camera angle, room layout, furniture positions, cabinetry proportions and material
types exactly as in the source image — do not add, remove or move any object.

Render it as a continuous photograph. Remove every CAD outline and edge line; surfaces
meet without drawn borders. Nothing should look like a 3D viewport.

Soft interior lighting, late afternoon. Recessed ceiling downlights, a charcoal globe
pendant glowing warm 3000K over the dining table, and a warm LED strip inside the arched
niche. A gentle cool daylight spill enters from the living area off-frame to the right,
keeping the shadows neutral rather than orange. Cast shadows only from objects actually
present in the scene.

Light falls off with distance from its source — this governs the whole image.

Each recessed downlight throws a distinct soft pool onto the herringbone floor directly
beneath it, brightest at its centre and fading outward. The floor between two pools is
clearly darker than the floor inside them. The floor is never washed evenly.

The LED strip runs only along the top curve of the arch. It lights the upper third of the
oak back panel brightly, then falls away downward; the lower panel is dim and the bench
cushion at the bottom sits in soft shadow, lit by spill from the room rather than by the
strip.

The two small cabinet doors above the arch sit in the same plane, in the same white
lacquer, at the same height as the tall door panels to their left — they read at exactly
the same brightness as those panels. Do not darken them to make the lit arch stand out.
The dimmest area in the whole frame is the plain wall above the entry door, furthest from
every source and receiving no bounce.

Shot on a 35mm lens at eye level 1.1m. Vertical lines stay perfectly vertical, natural
undistorted perspective. Keep the same framing and crop as the source image.

Matte cream lacquer cabinetry with a fine hand-applied surface, never glassy — the sheen
shifts slightly from door to door. Oak veneer with open pores, the grain changing from
board to board. The curved console catches a soft satin sheen only where light grazes
it. Dark walnut herringbone floor in a low satin finish, planks varying in tone, a faint
wear path toward the door. Cane chair backs woven from real rattan, the weave slightly
irregular. Cotton seat cushions with a soft matte weave and gentle creasing where people
sit. Glazed ceramic vases with uneven glaze pooling. Everyday traces, quiet and few: a
faint scuff on the floor near the shoes, soft dust settled on the top shelf.

Each material carries its own level of sheen — chalky walls, satin cabinet fronts, oiled
wood, dry woven cane, glazed ceramic.

True photographic tonal range: real deep shadow under the console and inside the shoe
niche, whites that stop just short of pure white, a full range in between.

Neutral white balance — the cream cabinet fronts read as near-white, not amber. Warmth
comes only from the pendant and the arch strip, never as an overall tint. Muted natural
colour. The look of a printed magazine interior photograph.

One pair of shoes sits turned slightly out of line on the floor beside the bench.
```

### Đổi gì so với A4 *(bảng bổ sung — prompt trên đã đầy đủ)*

| Chỗ | A4 | A5 |
|---|---|---|
| Câu mở của khối sáng | `Light behaves consistently across every surface` | **`Light falls off with distance from its source — this governs the whole image.`** |
| **mới** | — | Đoạn **vũng sáng trên sàn** — mỗi đèn một vũng, giữa hai vũng phải tối hơn |
| **mới** | — | Đoạn **gradient trong hõm** — LED chỉ sáng 1/3 trên, đệm ngồi phải chìm |

> ## ⚠️ ĐÂY LÀ VÒNG THỨ BA SỬA ÁNH SÁNG — DẤU HIỆU CHẠM TRẦN CÔNG CỤ
> Vá xong ca 09 thì ca 10 lòi ra hai lỗi mới **cùng họ**. AI không có bộ giải truyền sáng;
> câu chữ chỉ ghì được bề nổi.
>
> **Ảnh nào sẽ có người trong nghề soi → render thật.** Suy giảm theo khoảng cách là thứ
> Corona/Kujiale giải **đúng và miễn phí**. AI để dò không khí và mood — dừng ở đó.

---

# CA2 bản A6-đơn giản (ca 11) — **TẮT SẠCH ĐÈN, mất thiết kế. Xem A7**

**Bốn vòng vá ánh sáng không hội tụ.** Mỗi lần khai báo vật lý cho một biểu hiện thì kỹ thuật lại
bắt ra biểu hiện khác cùng họ. Gốc: **AI vẽ hiệu ứng ánh sáng như hoạ tiết, không như hệ quả của
một nguồn phát** — nó không có nguồn sáng để mà mô tả.

**Đảo hướng: đừng ép AI làm ánh sáng ĐÚNG. Bảo nó làm ánh sáng ĐƠN GIẢN.**
Mọi phàn nàn đều nhắm vào hiệu ứng phức tạp — bỏ hiệu ứng thì không còn gì để bắt.
Ảnh ít kịch tính hơn, nhưng **không có mâu thuẫn vật lý** — và mood board thì không cần kịch tính.

```
Photorealistic interior photograph of this exact entryway and dining area. Keep the
camera angle, room layout, furniture positions, cabinetry proportions and material
types exactly as in the source image — do not add, remove or move any object.

Render it as a continuous photograph. Remove every CAD outline and edge line; surfaces
meet without drawn borders. Nothing should look like a 3D viewport.

Simple, quiet, believable interior daylight. The room is filled by soft ambient light
coming from the living area off-frame to the right, the way an overcast afternoon fills
a hallway. Walls and ceiling are lit smoothly and evenly by that ambient light alone,
their surfaces plain and unmarked by any fixture. The ceiling downlights and the pendant
are switched off and read as plain objects. The arched niche is plain oak in ambient
light. Brightness eases gently from the right side of the frame toward the left corner,
which is the quietest part of the image. Shadows are soft, shallow and few — the kind
daylight makes indoors on a grey day.

Shot on a 35mm lens at eye level 1.1m. Vertical lines stay perfectly vertical, natural
undistorted perspective. Keep the same framing and crop as the source image.

Matte cream lacquer cabinetry with a fine hand-applied surface, never glassy — the sheen
shifts slightly from door to door. Oak veneer with open pores, the grain changing from
board to board. The curved console catches a soft satin sheen only where light grazes
it. Dark walnut herringbone floor in a low satin finish, planks varying in tone, a faint
wear path toward the door. Cane chair backs woven from real rattan, the weave slightly
irregular. Cotton seat cushions with a soft matte weave and gentle creasing where people
sit. Glazed ceramic vases with uneven glaze pooling. Everyday traces, quiet and few: a
faint scuff on the floor near the shoes, soft dust settled on the top shelf.

Each material carries its own level of sheen — chalky walls, satin cabinet fronts, oiled
wood, dry woven cane, glazed ceramic.

Contact shadows keep everything grounded: where the console meets the floor, under the
bench, beneath each chair leg, behind the shoes.

True photographic tonal range: whites that stop just short of pure white, the left corner
genuinely dim, a full range in between. Neutral white balance throughout — the cream
cabinet fronts read as near-white, not amber, and no overall tint sits over the image.
Muted natural colour. The look of a printed magazine interior photograph.

One pair of shoes sits turned slightly out of line on the floor beside the bench.
```

### Vì sao bản này khác hẳn A4/A5

| A4 / A5 | A6-đơn giản |
|---|---|
| Khai báo **vật lý tường minh** cho từng hiệu ứng (vũng sáng, gradient hõm, tương quan bề mặt) | **Bỏ hết hiệu ứng.** Chỉ còn ánh sáng môi trường đều + gradient một chiều |
| Đèn bật, hõm phát sáng, tường có vệt loe | **Đèn tắt**, hõm là gỗ thường, tường trơn không dấu vết đèn |
| Kỹ thuật bắt được 4 lỗi | Không còn hiệu ứng nào để bắt |
| Kịch tính hơn | Trầm hơn — nhưng đúng thứ mood board cần |

> 📌 **Nếu cần ảnh CÓ kịch tính ánh sáng và có người trong nghề soi → render thật.**
> Cân bằng năng lượng và suy giảm theo khoảng cách là thứ Corona/Kujiale giải đúng, miễn phí,
> không phải đoán.

---

# ✅ CA2 bản A7 — đèn BẬT nhưng không gánh chiếu sáng (ca 12)

A6 né được lỗi truyền sáng nhưng **tắt sạch đèn** → mất hõm hắt sáng và đèn thả, tức mất
hạng mục thiết kế khách trả tiền. **Sửa vật lý, đừng xoá thiết kế.**

**Lời giải:** ban ngày, một dải LED 5W hay một bóng đèn thả **thật sự** không rửa sáng được căn
phòng — ánh sáng trời áp đảo. Đây là **sự thật vật lý**, không phải mẹo né. Nên: đèn **bật và nhìn
thấy được** là những đốm sáng ấm trên chính bộ đèn, còn **việc chiếu sáng do ánh sáng trời làm.**

```
Photorealistic interior photograph of this exact entryway and dining area. Keep the
camera angle, room layout, furniture positions, cabinetry proportions and material
types exactly as in the source image — do not add, remove or move any object.

Render it as a continuous photograph. Remove every CAD outline and edge line; surfaces
meet without drawn borders. Nothing should look like a 3D viewport.

It is daytime. Soft ambient daylight from the living area off-frame to the right fills
the room and does all of the lighting work. Brightness eases gently from the right side
of the frame toward the left corner, which is the quietest part of the image. Shadows are
soft and shallow, the kind daylight makes indoors on a bright overcast day.

The lights are switched on and clearly visible, but at this hour they are far weaker than
the daylight and light only themselves: the pendant globe over the table glows warm and
luminous, a fine warm line of LED traces the curve of the arched niche, and the recessed
ceiling downlights read as small warm discs. None of them brightens the room, none casts
a pool on the floor, and none throws a patch of light on a wall — the daylight is much
stronger than all of them together. Walls and ceiling stay smooth and even, unmarked by
any fixture.

Shot on a 35mm lens at eye level 1.1m. Vertical lines stay perfectly vertical, natural
undistorted perspective. Keep the same framing and crop as the source image.

Matte cream lacquer cabinetry with a fine hand-applied surface, never glassy — the sheen
shifts slightly from door to door. Oak veneer with open pores, the grain changing from
board to board. The curved console catches a soft satin sheen only where light grazes
it. Dark walnut herringbone floor in a low satin finish, planks varying in tone, a faint
wear path toward the door. Cane chair backs woven from real rattan, the weave slightly
irregular. Cotton seat cushions with a soft matte weave and gentle creasing where people
sit. Glazed ceramic vases with uneven glaze pooling. Everyday traces, quiet and few: a
faint scuff on the floor near the shoes, soft dust settled on the top shelf.

Each material carries its own level of sheen — chalky walls, satin cabinet fronts, oiled
wood, dry woven cane, glazed ceramic.

Contact shadows keep everything grounded: where the console meets the floor, under the
bench, beneath each chair leg, behind the shoes.

True photographic tonal range: whites that stop just short of pure white, the left corner
genuinely dim, a full range in between. Neutral white balance throughout — the cream
cabinet fronts read as near-white, not amber, and no overall tint sits over the image.
Muted natural colour. The look of a printed magazine interior photograph.

One pair of shoes sits turned slightly out of line on the floor beside the bench.
```

### So ba đời gần nhất

| | A5 | A6-đơn giản | **A7** |
|---|---|---|---|
| Đèn | Bật, **gánh chiếu sáng** | **Tắt hết** | **Bật, chỉ sáng chính nó** |
| Lỗi truyền sáng | ❌ Kỹ thuật bắt 4 lỗi | ✅ Hết | ✅ Hết |
| Thiết kế (hõm hắt, đèn thả) | ✅ Còn | ❌ **Mất** | ✅ **Còn** |
| Vật lý | Sai | Đúng nhưng nghèo | **Đúng và đủ** |

> 📌 **Nếu cần ảnh CẢNH ĐÊM, đèn thật sự gánh chiếu sáng** → cách này không dùng được, vì lúc đó
> đèn *phải* rửa sáng phòng và mọi lỗi truyền sáng quay lại. **Cảnh đêm thì render thật, đừng AI.**

---

# 🏆 CA2 bản A8 — **CHUẨN, ĐÃ HỘI TỤ** (ca 14)

Người dùng: *"có vẻ khá thật, có chiều sâu"*. Đủ cả ba mặt lần đầu sau 8 đời prompt:
**đúng vật lý · giữ thiết kế · nịnh mắt.**

**Khung dùng lại được cho cảnh khác đã đưa vào `references/05-prompt-ai.md` §7.**
Bản dưới là A8 nguyên văn cho đúng cảnh sảnh vào + bàn ăn này.

Khác A7 đúng hai chỗ, và cả hai đều là **gỡ bó**, không phải thêm chữ:
| A7 | A8 |
|---|---|
| `Brightness eases **gently**` | `falls away **steeply**` + góc trái `sinks into genuine shadow` |
| `Neutral white balance **throughout**, no overall tint` | `Two colour temperatures live together` — đèn ấm chọi trời lạnh |

---

# CA 4 — Phòng ngủ trẻ em: test phương án sửa bằng Banana Pro

**Vào:** ảnh render Kujiale đã hoàn thiện. **Việc:** test trước phương án sửa (thứ bậc màu + ánh sáng)
trên AI, **trước khi render lại thật** — để biết hướng đúng chưa mà không tốn `核豆`.

> 📌 **Đây là cách dùng AI đúng nhất tìm được sau 16 ca:** không phải để thay render,
> mà để **thăm dò phương án thiết kế trước khi bỏ công render**. Sai vật lý cũng không sao —
> cái cần biết là "thêm olive vào có nổi lên không", "dồn sáng vào khu học có ăn không".

**Mẹo chiến lược riêng của ca này:** đặt **vùng sáng của ánh sáng môi trường** và **vị trí các bộ đèn**
vào **CÙNG MỘT CHỖ** (khu học tập). Như thế ngay cả khi AI không tính được vũng sáng của đèn,
kết quả vẫn đọc ra đúng — vì gradient môi trường đã làm sẵn việc đó.

```
Photorealistic interior photograph of this exact children's bedroom. Keep the camera
angle, room layout, furniture positions, cabinetry proportions and material types
exactly as in the source image — do not move or remove any built-in element.

It is daytime. Soft ambient daylight fills the room and does all of the lighting work,
and it falls away steeply from right to left: the study nook and the desk are the
brightest, most open part of the frame; the bed sits comfortable in the middle; the
timber door and the wall at the far left sink into genuine soft shadow — the darkest,
quietest corner of the picture. This falloff is the strongest tonal movement in the image.

Two colour temperatures live together. The daylight is cool and clean; the fixtures are
warm. The black desk lamp is switched on and glows warm 3000K over the desktop, and a
warm LED strip under the shelf lights the underside of the shelf and the top of the desk.
The two recessed ceiling downlights read as small warm discs. At this hour the fixtures
light only themselves and their immediate surface — none of them washes the room, casts
a pool across the floor, or throws a patch on a wall. Their warmth lands in the same
place the daylight is strongest, so the study nook clearly reads as the heart of the room.

Shot on a 35mm lens at eye level 1.0m, a child's eye height. Vertical lines stay
perfectly vertical, natural undistorted perspective. Keep the same framing and crop as
the source image.

Introduce one single accent colour, muted olive green, and repeat it in exactly three
places: a small round olive rug at the foot of the bed, one olive cushion among the
white bedding, and a few olive book spines on the shelf. Nothing else changes colour.
The mustard duvet becomes one shade deeper and slightly richer. The desk chair frame
becomes dark stained timber so it separates from the pale wall behind it.

Matte cream lacquer wardrobe doors with a fine hand-applied surface, never glassy — the
sheen shifts slightly from door to door. Light oak trim with open pores, grain changing
from board to board. Light oak flooring in a low satin finish, planks varying in tone.
Cotton bedding with soft matte weave and gentle creasing where someone has sat. The
confetti wallpaper stays as a quiet texture behind the shelf, not a competing pattern.
Everyday traces, quiet and few: an open notebook on the desk, the duvet turned back at
one corner.

Each material carries its own level of sheen — chalky walls, satin cabinet fronts, oiled
oak, soft cotton, matte paper.

Contact shadows keep everything grounded: under the bed platform, beneath each chair
leg, where the wardrobe meets the floor, under the shelf.

Deep photographic tonal range: the left corner genuinely dark, whites stopping just
short of pure white, a full rich range in between. The image has somewhere bright for
the eye to land and somewhere dark to rest. Muted natural colour. The look of a printed
magazine interior photograph.
```

### Xem gì khi test

| Câu hỏi | Vì sao quan trọng |
|---|---|
| **Nheo mắt — điểm sáng nhất có rơi vào khu học không?** | Kiểm cả gradient lẫn ý đồ thứ bậc |
| **Thu nhỏ cỡ con tem — còn đọc được không?** | Test mà bản gốc đang trượt |
| **Ba điểm olive có tạo thành một đường dẫn mắt không?** | Kiểm phương án màu A **trước khi mua đồ thật** |
| Góc trái có chìm không | |
| Chăn mustard đậm hơn có thắng được confetti không | |

⚠️ **Kết quả này KHÔNG dùng để giao khách** — chỉ để chốt hướng. Chốt xong thì render lại bằng
Kujiale theo phiếu thông số.

---

# CA 5 — Sảnh + khu sinh hoạt chung trường CĐ (SketchUp viewport, 5 góc)

**Nguồn:** 5 ảnh viewport SketchUp shading trắng — sảnh lễ tân + khu lounge sinh viên của
HaNoi Polytechnic College. Đọc được hình học/bố cục; **không đọc được vật liệu thật**.

**Đặc điểm quyết định cách đánh đèn: KHÔNG có cửa sổ trời rõ trong 4/5 khung.** Chỉ ảnh 3 và 5
thấy vách kính. Không gian công cộng nằm trong lõi tầng → theo A7/A8: **sáng trời (từ vách kính
ngoài khung) gánh chiếu sáng, mọi bộ đèn bật nhưng chỉ sáng chính nó.**

⚠️ **Bẫy riêng của ca này — CHỮ TRÊN TƯỜNG.** Ba khung có chữ: `HaNoi Polytechnic College`,
`TECHNOLOGY`, logo `HPC`. Diffusion model **luôn** bóp méo chữ. Prompt có khoá chữ nhưng
**không tin được** — phải soi và sửa lại bằng Photoshop. Đây là lỗi tầng "bố cục/khung hình"
của §7.1, prompt không sửa được.

⚠️ **Ba thứ trong model phải xử lý, không phải việc của đèn:**
| Thứ | Ở ảnh | Xử |
|---|---|---|
| Màn TV hiện màn hình `Windows 10` | 2, 4 | Prompt cho tắt màn → panel tối có phản chiếu mềm |
| Poster chữ Trung `文化解读` / `BEGONIA` | 2, 4 | Prompt đổi thành bảng trưng bày trơn, không chữ nước ngoài |
| Đèn thả đơn treo lệch trục trước mảng graphic | 1, 5 | **Sửa model** — prompt không sửa được vị trí |

## 🅐 Ảnh 1 — quầy lễ tân chính diện

```
Photorealistic interior photograph of this exact college reception lobby. Keep the camera
angle, room layout, furniture positions, counter proportions, ceiling design and material
types exactly as in the source image — do not add, remove or move any object, and keep the
frame free of people.

Render it as a continuous photograph. Remove every CAD outline and edge line; surfaces meet
without drawn borders. Nothing should look like a 3D viewport or a SketchUp model.

It is daytime. Soft cool daylight from the glazed entrance wall behind and to the left of the
camera does all of the lighting work, and it falls away steeply into the room: the front edge
of the stone counter and the timber block in front of it are the brightest, most open part of
the frame; the timber-clad back wall is comfortable; the display niche at the far left and the
ceiling above the counter sink into genuine shadow — the darkest, quietest part of the picture.
This falloff is the strongest tonal movement in the image.

Two colour temperatures live together in the frame. The daylight is cool and clean; the
fixtures are warm. The row of six small black cylinder pendants and the single pendant beside
them are switched on and glow warm 3000K at their apertures; the long linear light box in the
ceiling reads as an even soft white line; the large printed technology graphic behind the
counter glows quietly from within, its blue staying on the panel itself, its glass joints
faintly visible. At this hour none of them brightens the room, casts a pool on the floor, or
throws a patch of light on a wall — their warmth reads against the cool daylight instead of
tinting the whole picture.

Shot on a 35mm lens at eye level 1.2m. Vertical lines stay perfectly vertical, natural
undistorted perspective. Keep the same framing and crop as the source image.

The counter front is a pale grey marble-look sintered stone slab, honed rather than polished,
its veining running continuously across the panel. The lower desk block is wood-grain laminate
with open pores, the grain changing from panel to panel, catching a low satin sheen only along
its top edge. The back wall is wood-grain laminate in a warmer tone; the side walls are large
grey marble-look porcelain slabs, matte. The ceiling is a timber batten acoustic ceiling, each
batten slightly different in tone, with soft shadow between the battens. The floor is dark navy
carpet tile, dense and low-pile, swallowing light rather than reflecting it. The two aluminium
desktop computers sit switched off, their screens dark and softly reflective. Everyday traces,
quiet and few: a faint scuff along the base of the counter, a light haze of fingerprints on the
stone edge where people lean.

Each material carries its own level of sheen — matte carpet, honed stone, satin laminate, dry
timber battens, glossy screen glass.

Contact shadows keep everything grounded: where the counter meets the carpet, under the timber
desk block, beneath the vase, along the base of the display shelving.

Deep photographic tonal range: the left niche and the ceiling recess genuinely dark, whites
stopping just short of pure white, and a full rich range in between. The image has somewhere
bright for the eye to land and somewhere dark to rest. The look of a printed magazine interior
photograph.

The slim branch arrangement leans slightly off-centre in its glass vase on the timber block.
```

## 🅑 Ảnh 2 — khu lounge nhìn chéo, tường TECHNOLOGY

```
Photorealistic interior photograph of this exact student lounge in a college building. Keep the
camera angle, room layout, furniture positions, wall panel proportions and material types
exactly as in the source image — do not add, remove or move any object, and keep the frame free
of people.

Render it as a continuous photograph. Remove every CAD outline and edge line; surfaces meet
without drawn borders. Nothing should look like a 3D viewport or a SketchUp model.

Keep the wall lettering exactly as in the source image and correctly spelled: the HPC logo mark
with the words "HaNoi Polytechnic College" on the white hexagon-patterned panel, and the word
"TECHNOLOGY" in white capitals on the dark blue angled panel. Same fonts, same positions, same
sizes. The wall-mounted screen is switched off and reads as a dark matte panel holding a soft
blurred reflection of the room. The hinged display board on the blue wall carries plain
untitled printed sheets, no foreign text.

It is daytime. Soft cool daylight from the glazed façade off-frame to the right does all of the
lighting work, and it falls away steeply across the room: the high bar counter and the
hexagon-printed wall on the right are the brightest, most open part of the frame; the modular
seating in the middle is comfortable; the tall oak cabinet, the mustard chairs and the corner
behind them sink into genuine shadow — the darkest, quietest part of the picture. This falloff
is the strongest tonal movement in the image.

Two colour temperatures live together in the frame. The daylight is cool and clean; the fixtures
are warm. The recessed ceiling downlights read as small warm discs and a thin warm line traces
the ceiling recess above the blue panel. At this hour they light only themselves — none of them
brightens the room, casts a pool on the floor, or throws a patch of light on a wall. Their
warmth reads against the cool daylight instead of tinting the whole picture.

Shot on a 35mm lens at eye level 1.3m. Vertical lines stay perfectly vertical, natural
undistorted perspective. Keep the same framing and crop as the source image.

The dark blue angled panel is painted matte, chalky and completely non-reflective, its colour
shifting very slightly across the plane. The white panel beside it is a printed hexagon graphic
under a low-sheen laminate. The oak tall cabinet and open shelving are wood-grain laminate with
open pores, the grain changing from door to door, satin only where light grazes them. The
modular seating is upholstered in sage green and warm grey woven fabric with a soft matte weave
and gentle creasing where people sit. The round side tables are oak drums with pale grey
laminate tops. The dark green pouffe is knitted wool with visible loops. The mustard chairs are
moulded plastic with a soft satin shell. The floor is polished grey terrazzo with fine aggregate
and a broad soft reflection, and a low oak platform runs along the wall. Everyday traces, quiet
and few: a faint scuff on the edge of the timber platform, a light wear path across the terrazzo
toward the bar.

Each material carries its own level of sheen — chalky paint, satin laminate, dry oak, matte
upholstery, wet-looking terrazzo, glossy screen glass.

Contact shadows keep everything grounded: under each modular seat, beneath the pouffe, where the
timber platform meets the floor, under the planter.

Deep photographic tonal range: the left corner and the shadow under the platform genuinely dark,
whites stopping just short of pure white, and a full rich range in between. The image has
somewhere bright for the eye to land and somewhere dark to rest. The look of a printed magazine
interior photograph.

One modular seat sits turned slightly out of line with the rest of the cluster.
```

## 🅒 Ảnh 3 — góc rộng, vách kính trái + quầy lễ tân phải

```
Photorealistic interior photograph of this exact college lobby seen from the lounge. Keep the
camera angle, room layout, furniture positions, glazed partition proportions, ceiling design and
material types exactly as in the source image — do not add, remove or move any object, and keep
the frame free of people.

Render it as a continuous photograph. Remove every CAD outline and edge line; surfaces meet
without drawn borders. Nothing should look like a 3D viewport or a SketchUp model.

It is daytime. Soft cool daylight from the full-height glazed partition on the left does all of
the lighting work, and it falls away steeply across the room: the glass doors and the floor in
front of them are the brightest, most open part of the frame; the meeting room behind the glass
and the plants beside it are comfortable; the reception counter on the right and the ceiling
above it sink into genuine shadow — the darkest, quietest part of the picture. This falloff is
the strongest tonal movement in the image.

Two colour temperatures live together in the frame. The daylight is cool and clean; the fixtures
are warm. The row of small black cylinder pendants over the counter and the single pendant beside
them are switched on and glow warm 3000K at their apertures; the long linear light box in the
ceiling reads as an even soft white line; the printed technology graphic at the right edge glows
quietly from within, its blue staying on the panel itself. At this hour none of them brightens
the room, casts a pool on the floor, or throws a patch of light on a wall — their warmth reads
against the cool daylight instead of tinting the whole picture.

Shot on a 35mm lens at eye level 1.3m. Vertical lines stay perfectly vertical, natural undistorted
perspective. Keep the same framing and crop as the source image.

The glazed partitions are clear tempered glass in slim frames with brushed stainless pull handles,
the glass carrying faint vertical reflections and a few soft smudges near the handles. The
reception counter is a pale grey marble-look sintered stone slab, honed, with a wood-grain laminate
block in front of it. The columns are large grey marble-look porcelain slabs, matte. The ceiling is
a timber batten acoustic ceiling, each batten slightly different in tone, with soft shadow between
the battens. The floor changes from polished grey terrazzo in the foreground to dark navy carpet
tile at the reception area, the joint clean and straight. The modular seats are upholstered in sage
green and warm grey woven fabric with a soft matte weave; the round side tables are oak drums with
pale grey laminate tops. The planters are ribbed ceramic with an uneven matte glaze. Everyday
traces, quiet and few: soft smudges on the glass around the handles, a faint wear path across the
terrazzo toward the doors.

Each material carries its own level of sheen — matte carpet, wet-looking terrazzo, honed stone,
dry timber battens, clear glass, glazed ceramic.

Contact shadows keep everything grounded: under each modular seat, beneath the planters, where the
counter meets the carpet, along the base of the glass partitions.

Deep photographic tonal range: the ceiling above the counter and the shadow under the seating
genuinely dark, whites stopping just short of pure white, and a full rich range in between. The
image has somewhere bright for the eye to land and somewhere dark to rest. The look of a printed
magazine interior photograph.

One of the tall plants leans very slightly toward the daylight.
```

## 🅓 Ảnh 4 — tường HPC chính diện, bục gỗ

```
Photorealistic interior photograph of this exact student lounge in a college building. Keep the
camera angle, room layout, furniture positions, wall panel proportions and material types exactly
as in the source image — do not add, remove or move any object, and keep the frame free of people.

Render it as a continuous photograph. Remove every CAD outline and edge line; surfaces meet without
drawn borders. Nothing should look like a 3D viewport or a SketchUp model.

Keep the wall lettering exactly as in the source image and correctly spelled: the HPC logo mark
with the words "HaNoi Polytechnic College" on the white hexagon-patterned panel, and the word
"TECHNOLOGY" in white capitals on the dark blue angled panel. Same fonts, same positions, same
sizes. The wall-mounted screen is switched off and reads as a dark matte panel holding a soft
blurred reflection of the room. The hinged display board carries plain untitled printed sheets, no
foreign text.

It is daytime. Soft cool daylight from the glazed partition off-frame to the left does all of the
lighting work, and it falls away steeply across the wall: the white hexagon-printed panel and the
seating in front of it are the brightest, most open part of the frame; the modular seating in the
middle is comfortable; the dark blue angled panel on the right, the oak shelving behind it and the
ceiling above sink into genuine shadow — the darkest, quietest part of the picture. This falloff is
the strongest tonal movement in the image.

Two colour temperatures live together in the frame. The daylight is cool and clean; the fixtures are
warm. The recessed ceiling downlights read as small warm discs and a thin warm line traces the
ceiling recess above the blue panel. At this hour they light only themselves — none of them brightens
the room, casts a pool on the floor, or throws a patch of light on a wall. Their warmth reads against
the cool daylight instead of tinting the whole picture.

Shot on a 35mm lens at eye level 1.3m. Vertical lines stay perfectly vertical, natural undistorted
perspective. Keep the same framing and crop as the source image.

The dark blue angled panel is painted matte, chalky and completely non-reflective, its colour shifting
very slightly across the plane. The white panel is a printed hexagon graphic under a low-sheen
laminate, its joints faintly visible. The oak shelving is wood-grain laminate with open pores, the
grain changing from board to board. The low platform is oak flooring in a satin finish, planks varying
in tone. The modular seating is upholstered in sage green and warm grey woven fabric with a soft matte
weave and gentle creasing where people sit; the round tables are oak drums with pale grey laminate
tops. The hexagonal stools are matte white and matte blue laminate. The floor is polished grey terrazzo
with fine aggregate and a broad soft reflection. Everyday traces, quiet and few: a faint scuff along
the nosing of the timber platform, a light wear path across the terrazzo in front of the seating.

Each material carries its own level of sheen — chalky paint, satin laminate, dry oak, matte upholstery,
wet-looking terrazzo, glossy screen glass.

Contact shadows keep everything grounded: under each modular seat, beneath the hexagonal stools, where
the timber platform meets the terrazzo, under the planters.

Deep photographic tonal range: the shadow under the platform and the right-hand corner genuinely dark,
whites stopping just short of pure white, and a full rich range in between. The image has somewhere
bright for the eye to land and somewhere dark to rest. The look of a printed magazine interior
photograph.

One modular seat sits turned slightly out of line with the rest of the cluster.
```

## 🅔 Ảnh 5 — nhìn từ lounge về quầy lễ tân, đối xứng

```
Photorealistic interior photograph of this exact college reception lobby seen from the lounge. Keep
the camera angle, room layout, furniture positions, counter proportions, ceiling design and material
types exactly as in the source image — do not add, remove or move any object, and keep the frame free
of people.

Render it as a continuous photograph. Remove every CAD outline and edge line; surfaces meet without
drawn borders. Nothing should look like a 3D viewport or a SketchUp model.

It is daytime. Soft cool daylight from the glazed doors on the right of the frame does all of the
lighting work, and it falls away steeply across the room: the right-hand plants and the near end of
the counter are the brightest, most open part of the frame; the modular seating in the foreground is
comfortable; the left-hand corner behind the tall plants and the ceiling above the counter sink into
genuine shadow — the darkest, quietest part of the picture. This falloff is the strongest tonal
movement in the image.

Two colour temperatures live together in the frame. The daylight is cool and clean; the fixtures are
warm. The row of six small black cylinder pendants and the single pendant beside them are switched on
and glow warm 3000K at their apertures; the long linear light box in the ceiling reads as an even soft
white line; the large printed technology graphic behind the counter glows quietly from within, its blue
staying on the panel itself, its glass joints faintly visible. At this hour none of them brightens the
room, casts a pool on the floor, or throws a patch of light on a wall — their warmth reads against the
cool daylight instead of tinting the whole picture.

Shot on a 35mm lens at eye level 1.2m. Vertical lines stay perfectly vertical, natural undistorted
perspective. Keep the same framing and crop as the source image.

The counter front is a pale grey marble-look sintered stone slab, honed rather than polished, its
veining running continuously across the panel; the lower desk block is wood-grain laminate with open
pores, satin only along its top edge. The columns are large grey marble-look porcelain slabs, matte.
The ceiling is a timber batten acoustic ceiling, each batten slightly different in tone, with soft
shadow between the battens. The floor changes from polished grey terrazzo in the foreground to dark
navy carpet tile at the reception area, the joint clean and straight. The modular seating is
upholstered in sage green and warm grey woven fabric with a soft matte weave and gentle creasing where
people sit; the round side tables are oak drums with pale grey laminate tops. The planters are ribbed
ceramic with an uneven matte glaze. Everyday traces, quiet and few: a faint scuff along the base of the
counter, a light wear path across the terrazzo toward the desk.

Each material carries its own level of sheen — matte carpet, wet-looking terrazzo, honed stone, satin
laminate, dry timber battens, glazed ceramic.

Contact shadows keep everything grounded: under each modular seat, beneath the planters, where the
counter meets the carpet, under the timber desk block.

Deep photographic tonal range: the ceiling above the counter and the left corner genuinely dark, whites
stopping just short of pure white, and a full rich range in between. The image has somewhere bright for
the eye to land and somewhere dark to rest. The look of a printed magazine interior photograph.

One of the tall plants leans very slightly toward the daylight.
```

## Cách chạy trong ChatGPT

1. **Mỗi lần một ảnh + một prompt.** Nhồi 5 ảnh cùng lúc là ra ảnh lai bố cục.
2. Đưa **ảnh viewport gốc** kèm prompt — image-to-image, không tả chay.
3. Tỉ lệ khung: **đừng gọi tên tỉ lệ** (ca 03). Prompt đã có `Keep the same framing and crop`.
4. Sai thì sửa **đúng một khối**, rồi **dán lại cả prompt** — không sửa mảnh.
5. **Chạy hậu kỳ 2 phút** theo mục HẬU KỲ BẮT BUỘC ở trên. Không kèm là xuất thiếu.

## Xem gì khi test

| Câu hỏi | Bắt lỗi gì |
|---|---|
| **Chữ `HaNoi Polytechnic College` / `TECHNOLOGY` có đúng chính tả không?** | Lỗi cố hữu của diffusion — gần như chắc phải sửa Photoshop |
| Sàn có vũng sáng dưới từng đèn downlight không? | Nếu **có** là AI lại tự vẽ truyền sáng — vá bằng cách nhấn lại câu `light only themselves` |
| Trần lam gỗ có ra từng thanh riêng, có bóng giữa các thanh không? | Bề mặt lặp đều — chỗ AI hay ra nhựa |
| Thảm navy có "nuốt" sáng hơn terrazzo không? | Kiểm hai mức sheen có tách được không |
| Mảng graphic xanh có hắt xanh ra cả phòng không? | Nếu có là sai — nó chỉ được sáng chính nó |
| Góc tối nhất có thật sự tối không? | Gradient dốc — thứ tạo chiều sâu |

## 🔄 CA5 bản 🅓-2 — vá màu + bề mặt (ca 19)

**Kết quả bản 🅓:** người dùng — *"màu nó giả quá, nhất là bề mặt vật liệu"*.

**Ăn:** chữ `HaNoi Polytechnic College` + `TECHNOLOGY` ra **đúng chính tả** (lần đầu chữ ăn) ·
sạch nét CAD · đèn không gánh chiếu sáng, không có vũng sáng bịa · bố cục giữ nguyên.

**Hỏng — và ba lỗi đầu là do PROMPT EM VIẾT, không phải do model:**

| Lỗi | Cụm gây ra | Cơ chế |
|---|---|---|
| **Sàn thành gương**, phản chiếu ghế rõ nét | `polished ... broad soft reflection` **+** `wet-looking terrazzo` ở khối sheen | Hai cụm nhấn cùng hướng — đúng Luật 2 |
| **Vải ghế ra nhựa**, không sợi, không đường may | Chỉ có `soft matte weave and gentle creasing` — 6 chữ cho bề mặt **lớn nhất khung** | Tả quá ngắn so với vật liệu khác |
| **Bão hoà quá cao**, xanh navy + xanh lá kêu như nhựa | Cả prompt chỉ có `Muted natural colour` ở cuối | Một cụm 3 chữ không ghì nổi cả bảng màu |
| Trần lam gỗ ra tấm nhựa in vân | `each batten slightly different in tone` | Chưa tả vân + khe tối |
| Gradient bẹt, không có vùng tối thật | — | Khối 2 đúng nhưng bị bảng màu sáng đè |
| Màn hình vẫn hiện `Windows 10` | `switched off` không ăn | Texture nguồn quá mạnh → **sửa model** |

```
Photorealistic interior photograph of this exact student lounge in a college building. Keep the
camera angle, room layout, furniture positions, wall panel proportions and material types exactly
as in the source image — do not add, remove or move any object, and keep the frame free of people.

Render it as a continuous photograph. Remove every CAD outline and edge line; surfaces meet without
drawn borders.

Keep the wall lettering exactly as in the source image and correctly spelled: the HPC logo mark with
the words "HaNoi Polytechnic College" on the white hexagon-patterned panel, and the word
"TECHNOLOGY" in white capitals on the dark blue angled panel. Same fonts, same positions, same
sizes. The wall-mounted screen is switched off: a dark grey-black panel showing nothing, its glass
holding one soft dim reflection of the room. The hinged display board on the blue wall holds plain
cream paper sheets with a faint printed pattern and no readable words.

It is daytime. Soft cool daylight from the glazed partition off-frame to the left does all of the
lighting work, and it falls away steeply across the room: the white hexagon panel and the seating in
front of it are the brightest, most open part of the frame; the middle of the seating cluster is
comfortable; the dark blue panel on the right, the oak shelving beside it and the ceiling above them
sink into genuine shadow — the darkest, quietest part of the picture. This falloff is the strongest
tonal movement in the image.

Two colour temperatures live together in the frame. The daylight is cool and clean; the fixtures are
warm. The recessed ceiling downlights read as small warm discs and a thin warm line traces the
ceiling recess. At this hour they light only themselves — none of them brightens the room, casts a
pool on the floor, or throws a patch of light on a wall.

Shot on a 35mm lens at eye level 1.3m. Vertical lines stay perfectly vertical, natural undistorted
perspective. Keep the same framing and crop as the source image.

Colour is muted and slightly desaturated, the way a real camera records paint and fabric. The wall
blue is a deep chalky navy, not a bright saturated blue. The upholstery green is a dusty sage with
grey in it, not emerald. The plants read olive and a little dull. The timber is a soft mid-brown
with grey undertones rather than orange. Nothing in the frame is a pure, fully saturated colour.

The floor is honed grey terrazzo with a matte, slightly chalky surface: it absorbs light rather than
mirroring it, so each object leaves only a faint soft darkening beneath it instead of a reflected
copy, and a broad dull glow spreads across it near the daylight.

The ceiling is real sawn timber battens — open grain running the length of each batten, tone
shifting from board to board between pale and slightly warmer, a dark shadow line in every gap.

The blue panel is matte emulsion paint with a faint roller texture, chalky and completely
non-reflective, its tone drifting very slightly across the large plane. The white hexagon panel is a
printed graphic under a low-sheen laminate, its panel joints faintly visible.

The modular seats are upholstered in a flat, tightly woven wool fabric — a fine weave just readable
at this distance, a visible stitched seam along every facet edge, corners slightly rounded and
softened with use, shallow creases where the top surface takes weight.

The drum tables are oak veneer with grain changing from table to table under a matte lacquer; their
pale tops are a fine matte laminate with a faint dusty bloom. The hexagonal stools are covered in
felted grey and blue fabric, slightly fuzzy where the panels meet. The oak shelving is wood-grain
laminate with open pores. The low platform is oak flooring in a satin finish, planks varying in tone.

Everyday traces, quiet and few: a faint scuff along the nosing of the timber platform, dust settled
on the top shelf, a light wear path across the floor in front of the seating.

One material in the frame is genuinely reflective — the dark glass of the switched-off screen.
Everything else is matte or satin: chalky paint, matte woven upholstery, dry open-grain timber,
honed floor.

Contact shadows keep everything grounded: a dark tight shadow directly under each modular seat and
each stool, under the drum tables, where the timber platform meets the floor, under the planters.

Deep photographic tonal range: the corner behind the shelving, the shadow under the platform and the
underside of every seat are genuinely dark — dark enough that detail almost disappears. Whites stop
just short of pure white. The look of a printed magazine interior photograph.

One modular seat sits turned slightly out of line with the rest of the cluster.
```

### Đổi gì so với bản 🅓 *(bảng bổ sung — prompt trên đã đầy đủ)*

| Chỗ | 🅓 | 🅓-2 | Vì |
|---|---|---|---|
| Sàn | `polished ... broad soft reflection` · `wet-looking terrazzo` | `honed ... absorbs light rather than mirroring it` + tả **vệt tối dưới chân đồ** thay cho ảnh phản chiếu | Bỏ cả hai cụm nhấn cùng hướng |
| **mới** | — | Cả khối **bó bão hoà**, gọi đích danh từng màu (`chalky navy`, `dusty sage`, `olive`, `grey undertones`) | `Muted natural colour` 3 chữ không ghì nổi |
| Vải ghế | 1 dòng | Cả đoạn: sợi dệt · **đường may từng mặt** · góc mòn · nếp lún | Bề mặt lớn nhất khung mà tả ngắn nhất |
| Trần lam | `slightly different in tone` | + vân chạy dọc thanh + **khe tối giữa mỗi thanh** | Khe tối là thứ tách "lam thật" khỏi "tấm in" |
| Sheen | Liệt kê 6 mức ngang nhau | **Chỉ định ĐÚNG MỘT thứ bóng** (kính màn hình), còn lại matte/satin | Cho AI một thang bậc thay vì 6 lựa chọn |
| Tối | `genuinely dark` | + `dark enough that detail almost disappears` và chỉ đích danh 3 chỗ | Ép có vùng tối thật |

⚠️ **Đừng bó tay vào cụm vải.** `a fine weave just readable at this distance` là bó có chủ ý —
thêm `visible`/`detailed`/`textured` vào là ra ghế xù lông (ca 04).

---

# CA 6 — Hành lang biển bảng trường CĐ (SketchUp, 4 góc)

**Nguồn:** 4 ảnh viewport SketchUp — hành lang + hệ biển bảng thương hiệu HaNoi Polytechnic College.

> ## 📌 HỌ VẬT LIỆU KHÁC HẲN 5 CA TRƯỚC — ĐỌC TRƯỚC KHI SỬA PROMPT
> Đây **không phải** nội thất nhà ở. Toàn bộ mặt tường là **mica/acrylic cắt laser, in UV trên alu,
> chữ nổi, hộp đèn**. Sàn **vinyl cuộn**, trần **thạch cao**.
>
> | | Melamine/gỗ (5 ca trước) | **Mica/acrylic/in UV (ca này)** |
> |---|---|---|
> | Chi tiết nằm ở | **vân bề mặt** | **cạnh cắt · khe ghép · độ dày tấm** |
> | Highlight | rộng, mềm | **hẹp, sắc, chói** |
> | Bóng đổ | mềm | **cứng, mỏng, sát mép tấm** |
> | Tì vết | xước, mòn, vệt đi lại | **vân tay · bụi tĩnh điện mép dưới · xước xoáy** |
> | **Tương phản đến từ** | **ÁNH SÁNG** | **VẬT LIỆU** (sơn matte chọi mica bóng) |
>
> ⚠️ **Đừng bó bão hoà như ca 19.** Ca 19 là vải + sơn thật nên phải dìm màu. Màu in UV **vốn dĩ
> bão hoà** — dìm là sai thực tế. Chỉ cần `matte laminate softens them slightly`.
>
> ⚠️ **Đừng đánh gradient dốc.** Hành lang thật thì dãy đèn trần chiếu **ĐỀU**. May mắn là dãy đèn
> đồng đều cũng chính là thứ AI vẽ ít sai nhất — không có vũng sáng đơn lẻ nào để sai.

**Hai tầng chữ — bắt buộc khai báo tách bạch:** tiêu đề lớn khoá cứng từng ký tự · thân bài nhỏ cho ra
**dạng chữ mờ không đọc được**. Ép AI viết chữ nhỏ là mời nó bịa. Chữ Hán trong model là placeholder
→ prompt thay bằng tiêu đề tiếng Anh.

## 🅐 Ảnh 1 — elevation sảnh, tấm mica lớn + chữ nổi dọc

```
Photorealistic interior photograph of this exact college corridor signage wall. Keep the camera
angle, wall layout, panel positions and proportions exactly as in the source image — do not add,
remove or move any element, and keep the frame free of people.

Render it as a continuous photograph. Remove every CAD outline and edge line; surfaces meet without
drawn borders.

Two levels of text, handled differently. The large text is locked and correctly spelled: "LOGO" as a
blue graphic mark and "Hanoi Polytechnic College" in blue capitals on the white acrylic plaque, and
"BELIEVE IN YOURSELF" in white capitals running vertically on the blue fin. The small text inside
the numbered arrow panels on the right is fine printed body copy, far too small to read at this
distance — it reads as soft even grey lines of type. The large numerals 01 02 03 04 05 05 stay
sharp and legible.

Everything on this wall is signage, not joinery. Every panel stands a few millimetres proud of the
wall and you can read that thickness: a short hard-edged shadow runs along the bottom and one side of
each panel, and each laser-cut edge catches a thin bright line. The white acrylic plaque is glossy —
it returns one narrow hard specular highlight from the ceiling lights rather than a broad soft sheen,
carries faint spiral polishing swirls, a few fingerprints near its lower corners, and a line of static
dust clinging along its bottom edge. The raised lettering is solid acrylic with a matte face and a
glossy return edge, each letter throwing its own small crisp shadow onto the wall behind. The
numbered arrow panels are flat UV prints on aluminium composite under a matte laminate: perfectly
even colour whose only detail is the hairline joint between panels, their printed blues still
saturated but slightly calmed by the matte finish. The blue wall itself is matte emulsion with a
faint roller texture, chalky and non-reflective. The small lightbox at the left glows evenly from
within through opal acrylic, perfectly smooth, no hotspot.

The contrast in this picture comes from the materials, not from the lighting: matte paint against
glossy acrylic, deep navy against near-white, so the image holds real blacks and real speculars
while the lighting itself stays even.

The ceiling is painted gypsum board, matte white-grey, with fine flush joint lines and recessed
linear luminaires. They are on at a neutral 4000K and light the corridor evenly, the way real
corridor lighting does — steady and slightly cool, easing off gently toward the dark navy panels at
the right. The floor is sheet vinyl in grey with a fine speckled fleck, its matte PU wear layer
giving only a soft broad low sheen and a faint darkening beneath the wall, never a mirrored copy of
anything.

Shot on a 35mm lens at eye level 1.5m, square-on to the wall. Vertical lines stay perfectly vertical,
natural undistorted perspective. Keep the same framing and crop as the source image.

Everyday traces, quiet and few: fingerprints low on the white plaque, a fine line of dust along the
bottom edge of the raised lettering, one panel joint very slightly wider than its neighbours.

Deep photographic tonal range: the navy arrow panels at the right genuinely dark, the acrylic
speculars punching to near-white, and a full range in between. The look of a printed architectural
photograph.
```

## 🅑 Ảnh 2 — hành lang một điểm tụ, hộp đèn cuối trục

```
Photorealistic interior photograph of this exact college corridor. Keep the camera angle, corridor
layout, door positions, wall panel proportions and material types exactly as in the source image —
do not add, remove or move any element, and keep the frame free of people.

Render it as a continuous photograph. Remove every CAD outline and edge line; surfaces meet without
drawn borders.

The only large text is locked and correctly spelled: "BELIEVE IN YOURSELF" in white capitals running
vertically on the blue fin at the right, and "YOUR LOGO / COMPANY NAME" on the illuminated panel at
the end of the corridor. Any smaller lettering on the doors and side panels is too small to read at
this distance and reads as soft grey marks.

The backlit opal acrylic panel closing the far end of the corridor is the brightest thing in the
frame, glowing evenly from within with a perfectly smooth surface and no hotspot. The recessed
linear luminaires in the gypsum ceiling are on at a neutral 4000K and light the corridor evenly, the
way real corridor lighting does — steady, slightly cool, with the near foreground walls falling into
the quietest, darkest part of the picture. There are no dramatic pools of light on the floor; the
corridor simply gets brighter as it approaches the glowing end wall.

Everything on these walls is signage and door joinery, not furniture. The blue and navy wall panels
are flat UV prints and painted panels standing a few millimetres proud of the wall: each one casts a
short hard-edged shadow along one side, and each cut edge catches a thin bright line. The painted
navy is matte emulsion with a faint roller texture, chalky and non-reflective. The pale blue panels
are matte laminate, perfectly even in colour, their only detail the hairline joints between sheets.
The doors are flush laminate leaves with slim stainless pull handles that carry one narrow bright
specular each and a haze of fingerprints around the grip. The vertical fin sign is acrylic with a
matte face and a glossy return edge.

The ceiling is painted gypsum board, matte white-grey, in a regular grid of panels with fine flush
joints. The floor is sheet vinyl in grey with a fine speckled fleck, its matte PU wear layer giving
only a soft broad low sheen — beneath the glowing end panel it lifts into a wide dull glow rather
than a mirror image, and a faint scuff path runs down the centre of the corridor where people walk.

The contrast in this picture comes from the materials and from the glowing end wall, not from
dramatic lighting: matte paint against glossy acrylic, deep navy against near-white.

Shot on a 35mm lens at eye level 1.5m, looking straight down the corridor. Vertical lines stay
perfectly vertical, natural undistorted perspective. Keep the same framing and crop as the source
image.

Everyday traces, quiet and few: fingerprints around the door handles, a faint scuff along the skirting
at the left, a fine line of dust on the top edge of the fin sign.

Deep photographic tonal range: the foreground walls genuinely dark, the lightbox stopping just short
of pure white, and a full range in between. The look of a printed architectural photograph.
```

## 🅒 Ảnh 3 — góc nghiêng, biển chữ nổi + dãy mũi tên + infographic màu

```
Photorealistic interior photograph of this exact college corridor. Keep the camera angle, corridor
layout, panel positions and proportions exactly as in the source image — do not add, remove or move
any element, and keep the frame free of people.

Render it as a continuous photograph. Remove every CAD outline and edge line; surfaces meet without
drawn borders.

Two levels of text, handled differently. The large text is locked and correctly spelled: "BELIEVE IN
YOURSELF" in white capitals running vertically on the dark fin at the left, and the raised sign on
the dark plaque reads "HANOI POLYTECHNIC COLLEGE" in brushed metal capitals beside its logo mark. On
the coloured infographic panel at the right the headings read TEAM, GOAL, STRATEGY, MARKETING,
PROMOTION, BENEFIT beside the numerals 01 to 06. All other body copy on both panels is fine printed
type, far too small to read at this distance — it reads as soft even grey lines. The large numerals
01 02 03 04 05 05 on the arrow panels stay sharp.

Everything on these walls is signage, not joinery. Every panel stands a few millimetres proud of the
wall and you can read that thickness: a short hard-edged shadow along one side of each panel, and a
thin bright line along each laser-cut edge. The raised metal lettering has a brushed face with fine
parallel grain and a bright polished return edge, each letter casting its own small crisp shadow onto
the dark plaque behind. The dark plaque itself is a satin-finish panel that returns one soft
elongated highlight. The arrow panels and the coloured infographic are flat UV prints on aluminium
composite under a matte laminate — perfectly even colour, their only detail the hairline joints
between sheets; the printed reds, yellows, teals and blues stay saturated as printed ink does,
slightly calmed by the matte finish rather than glowing. The blue wall is matte emulsion with a faint
roller texture, chalky and non-reflective.

The contrast in this picture comes from the materials, not from the lighting: matte paint against
satin metal, deep navy against printed white.

The ceiling is painted gypsum board, matte white-grey, in a regular grid of panels with fine flush
joints and recessed luminaires. They are on at a neutral 4000K and light the corridor evenly, the way
real corridor lighting does — steady and slightly cool, easing off into the corridor receding at the
centre, which is the quietest, darkest part of the picture. The floor is sheet vinyl in grey with a
fine speckled fleck, its matte PU wear layer giving only a soft broad low sheen and a faint darkening
where it meets the wall, never a mirrored copy.

Shot on a 35mm lens at eye level 1.5m. Vertical lines stay perfectly vertical, natural undistorted
perspective. Keep the same framing and crop as the source image.

Everyday traces, quiet and few: a fine line of dust along the bottom edge of the raised lettering, a
faint scuff on the skirting, one panel joint very slightly wider than its neighbours.

Deep photographic tonal range: the receding corridor genuinely dark, the printed whites stopping just
short of pure white, and a full range in between. The look of a printed architectural photograph.
```

## 🅓 Ảnh 4 — elevation dãy 4 bảng nội dung

```
Photorealistic interior photograph of this exact college corridor content wall. Keep the camera
angle, wall layout, panel positions and proportions exactly as in the source image — do not add,
remove or move any element, and keep the frame free of people.

Render it as a continuous photograph. Remove every CAD outline and edge line; surfaces meet without
drawn borders.

Two levels of text, handled differently. Each of the four white panels carries one large blue heading,
locked and correctly spelled, left to right: "COMPANY PROFILE", "CORPORATE CULTURE", "CORPORATE
HISTORY", "ENTERPRISE SERVICES". Everything below each heading is fine printed body copy, far too
small to read at this distance — it reads as soft even grey lines of type filling neat columns. The
small photographs set into the lower part of each panel read as soft blue-toned images without
legible detail.

Everything on this wall is signage, not joinery. Each white panel stands a few millimetres proud of
the blue wall and you can read that thickness: a short hard-edged shadow runs down one side and along
the bottom of every panel, and each cut edge catches a thin bright line. The panels are flat UV prints
on aluminium composite under a matte laminate — perfectly even colour whose only detail is the
hairline joint between sheets, holding one broad soft reflection of the ceiling luminaires rather than
a sharp mirrored one. The blue wall behind is matte emulsion with a faint roller texture, chalky and
non-reflective, its tone drifting very slightly across the large plane. The pale blue vertical bands
are the same paint in a lighter shade with a crisp masked edge. The flush doors at the left are
laminate leaves with slim stainless pull handles carrying one narrow bright specular each.

The contrast in this picture comes from the materials, not from the lighting: matte blue paint against
crisp printed white, so the image holds a deep blue field and clean bright panels while the lighting
itself stays even.

The ceiling is painted gypsum board, matte white-grey, in a regular grid of panels with fine flush
joints and recessed luminaires. They are on at a neutral 4000K and light the wall evenly, the way real
corridor lighting does — steady and slightly cool, easing off gently toward the left end of the wall.
The floor is sheet vinyl in grey with a fine speckled fleck, its matte PU wear layer giving only a soft
broad low sheen and a faint darkening where it meets the skirting, never a mirrored copy.

Shot on a 35mm lens at eye level 1.5m, square-on to the wall. Vertical lines stay perfectly vertical,
natural undistorted perspective. Keep the same framing and crop as the source image.

Everyday traces, quiet and few: a fine line of dust along the top edge of one panel, a faint scuff on
the skirting below, one panel joint very slightly wider than its neighbours.

Deep photographic tonal range: the blue wall in the shadowed left end genuinely dark, the printed
whites stopping just short of pure white, and a full range in between. The look of a printed
architectural photograph.
```

## ⚠️ Hậu kỳ cho ca này KHÁC ca nhà ở

| Bước | Cảnh nhà ở (C14) | **Cảnh biển bảng** |
|---|---|---|
| Hạt nhiễu | Amount 12–15 | **6–10** — rắc nhiều lên mặt mica bóng thì thành bẩn, không thành thật |
| Đường cong S | vào 64→57 · 192→198 | **giữ nguyên hoặc mạnh hơn một chút** — vật liệu bóng chịu tương phản |
| Hạ bão hoà dải lục | −5 → −10 | **BỎ** — màu in UV vốn bão hoà, dìm là sai thực tế |
| Khử ám | có | có |

## Xem gì khi test

| Câu hỏi | Bắt lỗi gì |
|---|---|
| **Mỗi tấm có bóng đổ sắc ở mép dưới không?** | Không có = AI vẽ tấm phẳng dán decal, mất hết phù điêu |
| Highlight trên mica là **vệt hẹp** hay **mảng loang rộng**? | Loang rộng = AI đang tả nó như melamine |
| Chữ nhỏ có ra dạng "vệt xám không đọc được" không, hay AI bịa chữ méo? | Kiểm chiến lược hai tầng chữ |
| Sàn vinyl có mờ hơn hẳn đá không? | Ca 19 — cấm sàn gương |
| Tiêu đề lớn có đúng chính tả không? | Vẫn phải soi, kể cả đã khoá |
