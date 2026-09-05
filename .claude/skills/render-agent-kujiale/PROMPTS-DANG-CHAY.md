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
> | **Cả một CĂN, nhiều góc, cần đồng bộ** | **CA5 bản M** — cuối file. Một prompt chạy mọi góc, không sửa chữ nào |
> | Căn hộ compact — khoá riêng từng khung | CA5 bản S1–S5 — chỉ dùng khi một khung trượt nặng dưới bản M |
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

# CA 5 — Căn hộ compact, bộ 5 khung (SketchUp / clay, có lưới overlay)

**Nguồn:** 5 ảnh viewport SketchUp phong cách clay + line — **không phải Kujiale**, không phải render.
Đọc được hình học, bố cục, chủng loại vật liệu; **không đọc được độ bóng và độ nổi vân**.

**Đặc điểm chung quyết định cách viết prompt:**

| Điểm | Hệ quả |
|---|---|
| Cả 5 ảnh có **lưới trắng chia 3×3 đè lên ảnh** | Phải thêm câu xoá overlay — thứ CA1/CA2 chưa gặp. Không xoá thì AI vẽ luôn lưới thành khe trần/chỉ nẹp |
| Nét CAD đen viền mọi bề mặt | Câu `Remove every CAD outline and edge line` như CA2 |
| **Cửa sổ nằm CUỐI TRỤC** ở khung 1·2·3·4 (không phải bên hông như CA1) | Gradient chạy **theo chiều sâu**: cuối phòng sáng → tiền cảnh chìm. Chép trục ngang của CA1 sang là hỏng |
| Khung 5 (bếp) là khung **duy nhất** nguồn sáng bên hông (cửa kính đen bên phải) | Gradient ngang phải→trái |
| Sàn gỗ **sẫm**, tường + tủ **kem/trắng trơn đều** | Đúng nhóm "AI hay ra nhựa" của §0 — tủ trắng và mặt đá phải tả riêng, không gộp |
| Sofa + ghế ăn **nỉ olive**, không phải boucle | **Đừng viết `boucle`, đừng viết `woven`** — dính bẫy ca 04. Gọi `matte woven upholstery with a fine nap` |
| Khung 4 có **gương vòm lớn** | Chỗ AI bịa nhiều nhất — phải khai báo gương phản chiếu ĐÚNG cái gì đang đứng trước nó |

**Áp sẵn khung `05` §7.4** (đèn bật nhưng không gánh chiếu sáng · gradient dốc · giữ trộn nóng–lạnh).
Cả 5 bản **cố ý không có nắng xiên**: rèm voan phủ kín cửa ở khung 1–4, và nắng xiên vào sàn gỗ sẫm
+ tủ trắng trơn là công thức ra ảnh tắm cam của ca 02.

⚠️ **Phạm vi dùng:** mood board / thăm dò phong cách / nháp tại chỗ khi tư vấn.
**CẤM** ảnh khách ký duyệt · ảnh kèm hợp đồng/báo giá · ảnh mô tả vật liệu sẽ thi công · ảnh nghiệm thu.
**Riêng bản S5 (bếp) là ca rủi ro cao nhất** — vân đá backsplash và vân cánh gỗ là thứ AI bịa đẹp hơn
tấm thật, và đúng là hạng mục khách soi khi nghiệm thu.

---

## 🔄 CA5 bản S1 — góc rộng phòng khách + bàn ăn (CHƯA TEST)

```
Photorealistic interior photograph of this exact living room in a compact modern apartment.
Keep the camera angle, room layout, furniture positions, cabinetry proportions and material
types exactly as in the source image — do not add, remove or move any object.

Render it as a continuous photograph. Remove every CAD outline and edge line, and remove the
white grid lines overlaid across the frame. Surfaces meet without drawn borders. Nothing
should look like a 3D viewport.

It is daytime. Soft daylight coming through the sheer curtains of the full-height balcony
window at the far end of the room does all the lighting work, and it falls away steeply
toward the camera: the curtain wall and the floor in front of it are bright and open, the
round coffee table and the olive sofa sit comfortable in the middle, and the dining chairs
and the timber door in the near left foreground sink into genuine shadow — the darkest,
quietest part of the frame. This falloff is the strongest tonal movement in the picture.

Two colour temperatures live together in the frame. The daylight is cool and clean; the
fixtures are warm. The washi paper globe pendant on its black cable glows warm 3000K from
within, the small recessed ceiling downlights read as small warm discs, and the black track
spotlight reads as a warm point. At this hour they light only themselves — none of them
brightens the room, casts a pool on the floor, or throws a patch of light on a wall. Their
warmth reads against the cool daylight instead of tinting the whole picture.

Shot on a 35mm lens at eye level 1.15m. Vertical lines stay perfectly vertical, natural
undistorted perspective. Keep the same framing and crop as the source image.

The white TV wall is matte lacquer panelling with a fine hand-applied surface, never glassy —
the sheen shifts very slightly from panel to panel and the recessed joints read as shadow,
not as drawn lines. The tall cabinet and the low TV console are light oak laminate with open
pores, the grain changing from door to door. The television is a dark glass rectangle holding
a soft blurred reflection of the curtain behind the camera. The sofa and the dining chairs
are olive upholstery with a fine matte nap that goes slightly lighter where it curves toward
the light. The round coffee table is honed white stone, faintly chalky to the touch. The rug
is a wool pile with a soft cream ground and pale ochre mottling, its edge sitting flat on
dark oak flooring in a low satin finish, planks varying in tone. The dining table is a pale
stone slab with quiet veining. Everyday traces, quiet and few: books stacked slightly askew
on the console, one cushion pressed out of shape on the sofa.

Each material carries its own level of sheen — chalky walls, satin lacquer panels, oiled oak,
matte olive upholstery, honed stone, dark glass.

Contact shadows keep everything grounded: under the sofa base, under the three legs of the
coffee table where they meet the rug, along the edge of the rug on the floorboards, and
beneath each dining chair leg.

Deep photographic tonal range: the near left corner genuinely dark, whites stopping just
short of pure white, and a full rich range in between. The image has somewhere bright for the
eye to land and somewhere dark to rest. Muted natural colour. The look of a printed magazine
interior photograph.

One dining chair sits pulled back a little from the table, turned slightly out of line.
```

---

## 🔄 CA5 bản S2 — chính diện phòng khách, một điểm tụ (CHƯA TEST)

```
Photorealistic interior photograph of this exact living room in a compact modern apartment,
seen straight down its axis. Keep the camera angle, room layout, furniture positions,
cabinetry proportions and material types exactly as in the source image — do not add, remove
or move any object.

Render it as a continuous photograph. Remove every CAD outline and edge line, and remove the
white grid lines overlaid across the frame. Surfaces meet without drawn borders. Nothing
should look like a 3D viewport.

It is daytime. Soft daylight through the sheer curtains of the full-height balcony window at
the end of the axis does all the lighting work, and it falls away steeply toward the camera:
the curtain and the floor beneath it are the brightest, most open part of the frame; the
coffee table, the rug and the olive sofa sit comfortable in the middle; the two timber doors
and the wall panels at the left and right edges of the foreground sink into genuine shadow —
the darkest, quietest parts of the picture. This falloff is the strongest tonal movement in
the image.

Two colour temperatures live together in the frame. The daylight is cool and clean; the
fixtures are warm. The washi paper globe pendant glows warm 3000K from within, the recessed
ceiling downlights read as small warm discs, and the black track spotlight reads as a warm
point. At this hour they light only themselves — none of them brightens the room, casts a
pool on the floor, or throws a patch of light on a wall. Their warmth reads against the cool
daylight instead of tinting the whole picture. Beyond the sheer curtain the outdoor view stays
soft and low in contrast, pale and readable rather than burning out to white.

Shot on a 35mm lens at eye level 1.15m, two-point perspective straight down the room.
Vertical lines stay perfectly vertical, natural undistorted perspective. Keep the same framing
and crop as the source image.

The white wall panelling is matte lacquer with a fine hand-applied surface, never glassy — the
recessed joints read as shadow, not as drawn lines. The tall cabinet and the low TV console
are light oak laminate with open pores, the grain changing from door to door. The television
is a dark glass rectangle holding a soft blurred reflection of the curtain light. The sofa is
olive upholstery with a fine matte nap, lighter where it curves toward the window. The framed
abstract print on the right wall is matte paper behind glass with one faint soft highlight.
The round coffee table is honed white stone. The rug is wool pile, cream with pale ochre
mottling, lying flat on dark oak flooring in a low satin finish, planks varying in tone. The
robot vacuum is matte white plastic with a soft dust line along its lower rim. Everyday
traces, quiet and few: books stacked slightly askew on the console, a cushion pressed out of
shape.

Each material carries its own level of sheen — chalky walls, satin lacquer panels, oiled oak,
matte olive upholstery, honed stone, dark glass, matte plastic.

Contact shadows keep everything grounded: under the sofa base, under the coffee table legs on
the rug, along the rug edge on the floorboards, and a small tight shadow under the robot
vacuum.

Deep photographic tonal range: the foreground corners genuinely dark, whites stopping just
short of pure white, and a full rich range in between. The image has somewhere bright for the
eye to land and somewhere dark to rest. Muted natural colour. The look of a printed magazine
interior photograph.

A tabby cat lies curled and asleep on the arm of the sofa.
```

---

## 🔄 CA5 bản S3 — cận cảnh sofa + tranh (khung gần vuông) (CHƯA TEST)

```
Photorealistic interior photograph of this exact seating corner in a compact modern
apartment. Keep the camera angle, room layout, furniture positions, wall panelling
proportions and material types exactly as in the source image — do not add, remove or move
any object.

Render it as a continuous photograph. Remove every CAD outline and edge line, and remove the
white grid lines overlaid across the frame. Surfaces meet without drawn borders. Nothing
should look like a 3D viewport.

It is daytime. Soft daylight through the sheer curtain along the left edge of the frame does
all the lighting work, and it falls away steeply to the right: the curtain and the floor
beside it are bright and open, the olive sofa and the framed print are comfortable in the
middle, and the timber door and the wall at the right edge sink into genuine shadow — the
darkest, quietest part of the picture. This falloff is the strongest tonal movement in the
image.

Two colour temperatures live together in the frame. The daylight is cool and clean; the
fixtures are warm. The washi paper globe pendant above glows warm 3000K from within and the
recessed downlights read as small warm discs. At this hour they light only themselves — none
of them brightens the room, casts a pool on the floor, or throws a patch of light on the wall
behind the sofa. Their warmth reads against the cool daylight instead of tinting the whole
picture.

Shot on a 50mm lens at seated eye level 1.0m. Vertical lines stay perfectly vertical, natural
undistorted perspective. Keep the same framing and crop as the source image.

The wall behind the sofa is matte lacquer panelling with a fine hand-applied surface, never
glassy — the recessed joints read as shadow, not as drawn lines. The framed abstract print is
matte paper behind glass, carrying one faint soft highlight from the window. The sofa is olive
upholstery with a fine matte nap that goes noticeably lighter along the curved backrest facing
the window and darker in the seams; the seat cushions crease gently where people sit. The
patterned cushion is a slubby terracotta weave. The round coffee table is honed white stone,
faintly chalky. The glass vase holding dried grasses is thin and clear, with a bright rim
where the window light passes through it. The floor is dark oak in a low satin finish, planks
varying in tone. The timber door is ash veneer with a matt lacquer and a black lever handle.
Everyday traces, quiet and few: a magazine left open on the table, the corner of the rug
slightly turned up.

Each material carries its own level of sheen — chalky walls, satin lacquer panels, matte olive
upholstery, honed stone, clear glass, oiled oak, matt black metal.

Contact shadows keep everything grounded: under the sofa base, where the coffee table legs
meet the rug, and where the rug edge lies on the floorboards.

Deep photographic tonal range: the right side genuinely dark, whites stopping just short of
pure white, and a full rich range in between. The image has somewhere bright for the eye to
land and somewhere dark to rest. Muted natural colour. The look of a printed magazine interior
photograph.

The dried grasses lean a little to one side in the vase.
```

---

## 🔄 CA5 bản S4 — bàn ăn nhìn về phòng khách (CHƯA TEST)

```
Photorealistic interior photograph of this exact dining area looking through to the living
room of a compact modern apartment. Keep the camera angle, room layout, furniture positions,
cabinetry proportions and material types exactly as in the source image — do not add, remove
or move any object.

Render it as a continuous photograph. Remove every CAD outline and edge line, and remove the
white grid lines overlaid across the frame. Surfaces meet without drawn borders. Nothing
should look like a 3D viewport.

It is daytime. Soft daylight through the sheer curtains of the balcony window at the far end
of the living room does all the lighting work, and it falls away steeply toward the camera:
the curtain and the living room floor are the brightest, most open part of the frame; the
dining table and chairs are comfortable in the middle; the tall cabinetry along the left wall
and the ceiling above the camera sink into genuine shadow — the darkest, quietest part of the
picture. This falloff is the strongest tonal movement in the image.

Two colour temperatures live together in the frame. The daylight is cool and clean; the
fixtures are warm. The long black linear pendant over the dining table carries a row of small
clear glass globes that glow warm 3000K, the paper globe pendant further down the room glows
warm as well, and the recessed downlights read as small warm discs. At this hour they light
only themselves — none of them brightens the room, casts a pool on the table, or throws a
patch of light on a wall. Their warmth reads against the cool daylight instead of tinting the
whole picture.

The tall arched mirror on the right reflects only what genuinely stands in front of it — the
olive armchair, the curtain and a slice of the room — softly, and a little darker and cooler
than the room itself. It is a mirror, not a second window.

Shot on a 35mm lens at eye level 1.2m. Vertical lines stay perfectly vertical, natural
undistorted perspective. Keep the same framing and crop as the source image.

The tall cabinetry on the left is matte cream lacquer with a fine hand-applied surface, never
glassy — the sheen shifts slightly from door to door and the recessed joints read as shadow,
not as drawn lines. The dining table is a pale stone slab with quiet veining and a honed,
faintly chalky surface, on a dark stained timber base. The dining chairs are olive upholstery
with a fine matte nap over dark stained timber frames, lighter where the curved backs face the
window. The floor is dark oak in a low satin finish, planks varying in tone, with a faint wear
path toward the living room. The arched mirror has a slim matt black frame. Everyday traces,
quiet and few: an open book left face-down on the table, one chair turned slightly out of
line.

Each material carries its own level of sheen — chalky walls, satin cream lacquer, honed stone,
matte olive upholstery, oiled oak, clear glass, matt black metal.

Contact shadows keep everything grounded: beneath each chair leg, under the table base, where
the tall cabinetry meets the floor, and a small tight shadow under the robot vacuum.

Deep photographic tonal range: the ceiling and the left cabinetry genuinely dark, whites
stopping just short of pure white, and a full rich range in between. The image has somewhere
bright for the eye to land and somewhere dark to rest. Muted natural colour. The look of a
printed magazine interior photograph.

The white flowers in the bowl on the table lean a little toward the window.
```

---

## 🔄 CA5 bản S5 — bếp chính diện (CHƯA TEST — ca rủi ro vật liệu cao nhất)

```
Photorealistic interior photograph of this exact galley kitchen in a compact modern apartment,
seen straight on. Keep the camera angle, room layout, appliance positions, cabinetry
proportions and material types exactly as in the source image — do not add, remove or move any
object.

Render it as a continuous photograph. Remove every CAD outline and edge line, and remove the
white grid lines overlaid across the frame. Surfaces meet without drawn borders. Nothing
should look like a 3D viewport.

It is daytime. Soft daylight through the black-framed glass door on the right does all the
lighting work, and it falls away steeply to the left: the worktop near the hob and the plant
by the door are bright and open, the sink and the middle of the run are comfortable, and the
tall fridge housing and the timber door at the far left sink into genuine shadow — the
darkest, quietest part of the frame. This falloff is the strongest tonal movement in the
picture.

Two colour temperatures live together in the frame. The daylight is cool and clean; the
fixtures are warm. The recessed ceiling downlights read as small warm discs. At this hour they
light only themselves — none of them brightens the room, casts a pool on the worktop, or
throws a scallop of light on the splashback. Their warmth reads against the cool daylight
instead of tinting the whole picture.

Shot on a 35mm lens at eye level 1.5m, square to the cabinet run. Vertical lines stay
perfectly vertical, natural undistorted perspective. Keep the same framing and crop as the
source image.

The upper cabinet doors are flat matte white lacquer with a fine hand-applied surface, never
glassy — the sheen shifts very slightly from door to door and the shadow gaps between them
read as shadow, not as drawn lines. The base cabinets are wood-grain laminate in a warm
greige, framed shaker fronts, the grain running vertically and changing from door to door,
with slim matt black bar handles that carry one narrow highlight each. The worktop and the
splashback are white stone with soft grey veining, honed rather than polished, the veining
varying in density and never repeating as a pattern. The extractor and the induction hob are
dark glass, each holding a soft blurred reflection rather than reading as a flat black
rectangle. The fridge and the sink are brushed stainless steel with a fine directional grain
and a soft, broken reflection of the room. The floor is dark oak in a low satin finish, planks
varying in tone. Everyday traces, quiet and few: a few water spots drying on the steel around
the sink, a faint fingerprint near one handle.

Each material carries its own level of sheen — chalky walls, matte white lacquer, wood-grain
laminate, honed stone, brushed steel, dark glass, matt black metal.

Contact shadows keep everything grounded: under the overhang of the worktop along the whole
run, beneath the plinth where the base cabinets meet the floor, under the toaster and the
utensil jar, and under the plant pot by the door.

Deep photographic tonal range: the left end of the run genuinely dark, whites stopping just
short of pure white, and a full rich range in between. The image has somewhere bright for the
eye to land and somewhere dark to rest. Muted natural colour. The look of a printed magazine
interior photograph.

One wooden spoon leans out of the utensil jar toward the hob.
```

### Xem gì khi test cả 5 bản

| Câu hỏi | Vì sao |
|---|---|
| **Lưới trắng 3×3 có sạch không?** | Câu xoá overlay là thứ mới của ca này — chưa từng test |
| Gradient có chạy **theo chiều sâu** không (S1–S4) | Khác trục của CA1; nếu AI vẫn kéo gradient ngang thì khối 2 phải viết lại |
| **Tủ trắng và mặt đá có ra nhựa không** | Nhóm trơn-đều, đúng chỗ §0 cảnh báo |
| **Nỉ olive có ra vải không, hay lại xù lông** | Đã cố ý tránh `boucle` và `woven` sau ca 04 |
| **Gương vòm ở S4 phản chiếu đúng hay bịa** | Chưa có ca nào test gương |
| S5: **vân đá backsplash có bị AI bịa đẹp hơn tấm thật không** | Đúng cái bẫy pháp lý C8 |

---

## 🔄 CA5 bản M — PROMPT TỔNG THỂ CẢ CĂN, dùng chung cho mọi khung (CHƯA TEST)

**Vì sao có bản này:** S1–S5 tả riêng từng khung → mỗi ảnh dễ ra một căn nhà khác nhau, đúng lỗi
C13.7 cảnh báo (*"bộ 8 ảnh nhìn như 8 căn khác nhau"*). Bản M dịch luật **"một bộ ánh sáng duy nhất,
render cả bộ bằng đúng bộ đó"** sang prompt AI.

**Ba thứ C13.7 bắt nhất quán → ba câu tương ứng trong prompt:**

| C13.7 | Câu trong bản M |
|---|---|
| Nhiệt màu chênh ≤300–500K | `Keep the same white balance … in every frame of the set` |
| Mức sáng chênh ≤1 khẩu | `… and the same overall exposure in every frame of the set` |
| Hướng đổ bóng giống hệt | `Shadows … fall in the same direction throughout the set` |

**Khác S1–S5 về cấu trúc:** luật ánh sáng viết dạng **tổng quát theo nguồn**, không theo địa danh
của từng khung — `the part of the room nearest that glazing is bright … the corner furthest from it
sinks into genuine shadow`. Nhờ vậy một prompt chạy đúng cho cả 5 góc mà không phải sửa chữ nào.
Ba khoá riêng của S4/S5 (gương vòm, mặt đá, kính đen) được giữ dưới dạng **luật chung áp cho mọi khung**.

```
Photorealistic interior photographs of this exact compact modern apartment. Every image belongs
to one single set of the same home, shot in one session. Keep the camera angle, room layout,
furniture positions, cabinetry proportions and material types exactly as in each source image —
do not add, remove or move any object.

Render each one as a continuous photograph. Remove every CAD outline and edge line, and remove
the white grid lines overlaid across the frame. Surfaces meet without drawn borders. Nothing
should look like a 3D viewport.

One consistent light for the whole set. It is late morning on a bright overcast day, and soft
daylight from the full-height glazing — the balcony window in the living room and the glazed
door beside the kitchen — does all the lighting work in every frame. In each image the part of
the room nearest that glazing is bright and open, the middle of the frame is comfortable, and
the corner furthest from it — a timber door, a run of tall cabinetry, a foreground wall — sinks
into genuine shadow, the darkest and quietest part of the picture. This falloff is the strongest
tonal movement in every image and it always runs outward from the glazing. Shadows stay soft and
fall in the same direction throughout the set, with no direct sun patch anywhere.

Two colour temperatures live together in every frame. The daylight is cool and clean; the
fixtures are warm. The washi paper globe pendant, the black linear pendant carrying a row of
small clear glass globes, the recessed ceiling downlights and the black track spot are switched
on and clearly visible, glowing warm 3000K. At this hour they light only themselves — none of
them brightens a room, casts a pool on the floor, or throws a patch of light on a wall. Their
warmth reads against the cool daylight instead of tinting the picture. Keep the same white
balance and the same overall exposure in every frame of the set.

Shot on a 35mm lens at eye level 1.15m. Vertical lines stay perfectly vertical, natural
undistorted perspective. Keep the same framing and crop as each source image.

One material palette across the whole apartment. Walls and tall cabinetry are matte lacquer,
white to cream, with a fine hand-applied surface, never glassy — the sheen shifts very slightly
from panel to panel and the recessed joints read as shadow, not as drawn lines. Light oak
laminate on the TV cabinet, the console and the kitchen base units, open-pored, the grain
changing from door to door. Worktops, splashback, coffee table and dining table are white stone,
honed rather than polished, the veining soft, varying in density and never repeating as a
pattern. The sofa and every dining chair are olive upholstery with a fine matte nap that goes
lighter where it curves toward the light and darker in the seams. Dark oak flooring throughout
in a low satin finish, planks varying in tone. Matt black metal on handles, lever handles,
pendant frames and the glazed door. The televisions, the induction hob and the extractor are
dark glass holding a soft blurred reflection of the room, never flat black rectangles. Brushed
stainless steel on the fridge and the sink, a fine directional grain with a soft broken
reflection. Any mirror reflects only what genuinely stands in front of it, softly, a little
darker and cooler than the room itself. Sheer curtains stay translucent and keep their fold
structure, and the view beyond them stays pale, soft and readable rather than burning out to
white.

Everyday traces in each frame, quiet and few: books stacked slightly askew, a cushion pressed
out of shape, faint water spots drying by the sink.

Each material carries its own level of sheen — chalky walls, satin lacquer, oiled oak, matte
olive upholstery, honed stone, brushed steel, dark glass, matt black metal.

Contact shadows keep everything grounded in every frame: under the sofa and cabinet bases,
beneath every chair and table leg, along the edge of the rug on the floorboards, under the
worktop overhang and the kitchen plinth.

Deep photographic tonal range in every image: the corner furthest from the glazing genuinely
dark, whites stopping just short of pure white, and a full rich range in between. Each image has
somewhere bright for the eye to land and somewhere dark to rest. Muted natural colour. The look
of one printed magazine feature on a single apartment.

Wherever it appears in the frame, one dining chair sits pulled back a little from the table,
turned slightly out of line.
```

### Cách chạy bản M

1. **Một hội thoại duy nhất cho cả bộ** — ChatGPT giữ ngữ cảnh, ảnh sau bám ảnh trước.
2. **Dán prompt + 1 ảnh mỗi lượt.** Prompt **không đổi một chữ** qua cả 5 lượt — đó là toàn bộ ý nghĩa
   của bản này. Dán nhiều ảnh một lượt cũng chạy, nhưng bố cục bám kém hơn.
3. **Ảnh mốc chạy đầu tiên: khung chính diện phòng khách** — nhiều vật liệu nhất, dễ soi nhất.
   Mốc đạt rồi mới chạy 4 khung còn lại.
4. Tỉ lệ khung chọn trong **cài đặt**, không viết vào prompt (bẫy ca 03).

### Xem gì khi test — soi theo BỘ, không soi từng ảnh

| Câu hỏi | Vì sao |
|---|---|
| **Xếp 5 ảnh cạnh nhau — có ra cùng một căn không?** | Đây là thứ bản M sinh ra để giải |
| Trắng của tủ ở 5 ảnh có cùng một sắc không | Ngưỡng nhiệt màu ≤300–500K của C13.7 |
| Ảnh nào sáng vống hoặc tối hẳn so với 4 ảnh kia | Ngưỡng mức sáng ≤1 khẩu |
| Bóng ở 5 ảnh có đổ cùng hướng không | Cùng một mặt trời |
| Luật gradient tổng quát có ăn ở khung bếp không | Khung duy nhất sáng từ bên hông — chỗ dễ trượt nhất của bản M |

> 📌 **Nếu một khung cụ thể trượt nặng** thì mới rơi về bản S tương ứng cho riêng khung đó —
> và chấp nhận khung đó hơi lệch bộ. Đừng sửa bản M theo một khung: sửa là hỏng nhất quán cả bộ.
