# Prompt đang chạy — bản mới nhất, dán là dùng

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

# ✅ CA2 bản A6-ĐƠN GIẢN — đổi chiến lược (ca 11)

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
