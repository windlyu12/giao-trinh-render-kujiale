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

## 🔄 CA2 bản A2 — vá "vật liệu nhựa" (CHƯA TEST)

Ca 06: bản A ánh sáng ăn nhưng *"vật liệu cảm giác rất nhựa"*.
**Giữ nguyên khối 1–4 của bản A**, thay hai khối cuối:

```
Matte cream lacquer cabinetry with a fine hand-applied surface, never glassy — the sheen
shifts slightly from door to door. Oak veneer with open pores, the grain changing from
board to board. The curved console catches a soft satin sheen only where light grazes it.
Dark walnut herringbone floor in a low satin finish, planks varying in tone, a faint wear
path toward the door. Cane chair backs woven from real rattan, the weave slightly
irregular. Cotton seat cushions with a soft matte weave and gentle creasing where people
sit. Glazed ceramic vases with uneven glaze pooling. Everyday traces, quiet and few: a
faint scuff on the floor near the shoes, soft dust settled on the top shelf.

Each material carries its own level of sheen — chalky walls, satin cabinet fronts, oiled
wood, dry woven cane, glazed ceramic. Subtle film grain. Muted natural colour. The look
of a printed magazine interior photograph.
```

**Bỏ hẳn:** `physically based materials` · `soft specular highlights`.
**Nếu quá tay thành nhà cũ bẩn:** bỏ dòng `Everyday traces...` trước, giữ phần sheen.
