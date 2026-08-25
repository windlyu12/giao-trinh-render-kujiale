# Phụ lục D. Từ vựng prompt AI — từ nguyên tắc ánh sáng sang cụm tiếng Anh

**Bảng này dùng khi nào:** khi bạn viết prompt cho AI sinh ảnh/video (Nano Banana, Midjourney, Google Flow và các công cụ tương tự) — làm ảnh ý tưởng, ảnh mood, ảnh tham khảo phong cách cho khách. Toàn bộ kiến thức ánh sáng bạn đã học ở chương Mở đầu **áp thẳng vào đây**: AI sinh ảnh "hiểu" đúng những khái niệm đó, chỉ cần bạn gọi tên chúng bằng cụm tiếng Anh chuẩn mà giới nhiếp ảnh và CGI vẫn dùng. Phụ lục này KHÔNG nhắc lại lý thuyết — nó chỉ là bảng tra + công thức + ví dụ. Quên vì sao "dám để tối" quan trọng thì mở lại chương Mở đầu.

> ⚠️ **CẢNH BÁO:** Ảnh AI chỉ được dùng trong phạm vi quy định nội bộ ở Chương 8 (bảng cấm/cho phép). Tóm tắt một dòng: AI dùng cho ý tưởng và tham khảo — KHÔNG thay ảnh render Kujiale trong hồ sơ chốt với khách.

---

## D1. Bảng tra: 26 nguyên tắc ánh sáng → cụm prompt tiếng Anh

Cách dùng: xác định ý đồ ánh sáng của khung hình trước (như phân tích ảnh ở chương Mở đầu), rồi tra bảng lấy đúng cụm — mỗi prompt chỉ nên lấy 1 cụm ánh sáng chính, đừng gom cả bảng.

| # | Nguyên tắc (tiếng Việt) | Cụm prompt tiếng Anh | Hiệu ứng / khi nào dùng |
|---|---|---|---|
| 1 | Ánh sáng ngày mềm, khuếch tán | `soft diffused daylight`, `overcast soft light` | Dịu, thoáng, ít bóng gắt — phòng ngủ, phong cách mộc |
| 2 | Nắng xiên giờ vàng | `golden hour side lighting`, `warm afternoon sun raking through window` | Nắng ấm, bóng dài, giàu cảm xúc — ảnh chủ lực |
| 3 | Ánh sáng tạt xiên lộ vân | `raking light`, `grazing light across textured wall` | Khoe vân gỗ, vân đá, mặt tường có kết cấu |
| 4 | Tương phản mạnh, bóng sâu | `high contrast chiaroscuro`, `dramatic low-key lighting` | Kịch tính, sang, hợp không gian tối giản |
| 5 | Sáng đều, tươi sáng | `bright and airy`, `high-key even lighting` | Kiểu ảnh bán hàng — rõ, mời gọi |
| 6 | Vệt sáng thể tích | `volumetric light shafts`, `god rays`, `light beams through window` | Không khí buổi sáng, tia nắng có "bụi sáng" |
| 7 | Sáng suy giảm theo khoảng cách | `window light falloff`, `natural light gradient` | Chuyển tông tự nhiên từ cửa sổ vào sâu trong phòng |
| 8 | Ánh sáng dội / nảy | `bounce light`, `indirect soft fill` | Mở vùng tối một cách tự nhiên, tránh bẹt |
| 9 | Sáng viền tách chủ thể | `rim light`, `backlit silhouette edge` | Tách đồ nội thất khỏi nền, thêm chiều sâu |
| 10 | Nhiệt độ màu ấm | `3000K warm ambient`, `warm tungsten glow` | Không khí ấm cúng buổi tối |
| 11 | Trộn nhiệt độ màu có chủ đích | `mixed color temperature`, `warm interior vs cool daylight` | Tương phản nóng–lạnh kiểu điện ảnh |
| 12 | Giờ xanh, đèn trong nhà bừng lên | `blue hour twilight, interior lights glowing` | Cảnh có cửa sổ lúc chập tối, đèn nội thất nổi bật |
| 13 | Tâm trạng trầm, tối | `moody low-key interior`, `deep shadows, crushed blacks` | Sang, tĩnh, hợp phòng ngủ/phòng đọc |
| 14 | Chỉ dùng ánh sáng tự nhiên | `natural light only`, `no artificial light` | Kiểu ảnh tạp chí tinh tế, màu sạch |
| 15 | "Nước ảnh" tạp chí nội thất | `editorial interior photography`, `architectural digest style` | Gọi thẳng chuẩn thẩm mỹ tạp chí |
| 16 | Tối giản mộc, bão hòa thấp | `Kinfolk aesthetic, muted tones, negative space, natural light` | Wabi-sabi, tối giản, tông trầm dịu |
| 17 | Ống kính thẳng phương đứng | `shot on 24mm tilt-shift lens`, `straight verticals, two-point perspective` | Không méo, đường dọc thẳng — chống "mùi render rẻ tiền" |
| 18 | Tiêu cự chuẩn mắt người | `35mm lens, eye-level view` | Góc nhìn tự nhiên như người đứng trong phòng |
| 19 | Chiều sâu trường ảnh | `shallow depth of field`, `subtle background blur` | Nhấn tiền cảnh, làm mờ nhẹ hậu cảnh |
| 20 | Khuyết tật quang học của ống kính thật | `subtle lens bloom and glare`, `slight chromatic aberration`, `vignette` | Bớt vẻ "hoàn hảo vô trùng" của ảnh máy |
| 21 | Hạt phim | `subtle film grain`, `analog photo texture` | Bớt mượt kiểu CG, tăng chất "ảnh chụp" |
| 22 | Vật liệu có tì vết | `realistic material imperfections`, `worn edges, dust, fingerprints, subtle scratches` | Chống bề mặt sạch tuyệt đối, vô hồn |
| 23 | Phản xạ bề mặt đúng | `physically based materials`, `soft specular highlights, satin sheen` | Vật liệu "ra chất" — gỗ, kim loại, vải |
| 24 | Dấu vết sinh hoạt | `lived-in styling, casual props`, `open book, coffee cup, rumpled throw` | Khung hình "có người sống" |
| 25 | Bố cục lớp lang | `layered composition, foreground-midground-background`, `rule of thirds` | Chiều sâu, mắt có đường đi |
| 26 | Gọi tên chất liệu cụ thể | `oak wood grain, honed marble, linen texture, brushed brass` | Nêu đích danh vật liệu để AI bám theo |

> 💡 **Vật liệu đúng nghề công ty (hàng 26):** thay các chất liệu mẫu bằng vật liệu gỗ công nghiệp mình làm hằng ngày — `matte melamine cabinetry` (tủ melamine phủ mờ), `wood-grain laminate` (laminate vân gỗ), `high-gloss acrylic panels` (cánh acrylic bóng gương), `quartz stone countertop` (mặt đá thạch anh). Gọi đúng tên thì AI ra đúng chất bề mặt — không gọi thì nó mặc định gỗ tự nhiên kiểu Âu Mỹ.

---

## D2. Công thức cấu trúc prompt

Một prompt ảnh nội thất tốt xếp theo 6 khối, đúng thứ tự:

```
[1 Không gian] + [2 Nguồn sáng + hướng] + [3 Nhiệt độ màu / mood]
+ [4 Ống kính / góc máy] + [5 Vật liệu + staging] + [6 Chất ảnh]
(+ negative — xem D3)
```

| Khối | Trả lời câu hỏi | Lấy từ bảng D1 | Ví dụ điền |
|---|---|---|---|
| 1. Không gian | Phòng gì, phong cách gì? | — | `living room of a modern apartment` |
| 2. Nguồn sáng + hướng | Sáng chính từ đâu? Cứng hay mềm? | hàng 1–9 | `soft diffused daylight from a large left window` |
| 3. Nhiệt độ màu / mood | Ấm hay lạnh? Có trộn nóng–lạnh không? | hàng 10–16 | `warm 3000K accent lamp mixed with cool daylight` |
| 4. Ống kính / góc máy | Tiêu cự, chiều cao, phương đứng | hàng 17–19 | `35mm lens, eye-level view, straight verticals` |
| 5. Vật liệu + staging | Chất liệu gì, dấu vết sống nào? | hàng 22–24, 26 | `matte melamine cabinetry, linen sofa, open book on table` |
| 6. Chất ảnh | Grain, bloom, chiều sâu, bố cục | hàng 19–21, 25 | `subtle film grain, gentle window bloom, layered composition` |

**Nguyên tắc số 1 khi điền khối 2–3: mỗi khung hình chỉ MỘT ý đồ ánh sáng.** Hướng dẫn viết prompt của insMind nói thẳng: một cụm rõ ràng kiểu "softbox chính + rim nhẹ" tốt hơn hẳn việc nhồi softbox, nến, trăng, neon, giờ vàng, spotlight vào cùng một câu. Đây chính là bài "phải có nguồn sáng chính rõ ràng" ở chương Mở đầu — nhồi 5 kiểu sáng thì AI trả về đúng thứ ảnh bẹt không hướng sáng mà bảng 12 nguyên nhân xếp hạng 1.

> 💡 Cú pháp tỉ lệ khung `--ar 3:2` là của Midjourney. Công cụ khác (Nano Banana...) chọn tỉ lệ trong phần cài đặt hoặc mô tả bằng lời (`wide horizontal composition`) — đừng bê `--ar` sang mọi công cụ.

---

## D3. Negative prompt — chặn đúng 12 nguyên nhân ảnh giả

Negative prompt = danh sách thứ KHÔNG muốn thấy. Cách khai báo tùy công cụ:

- **Midjourney:** thêm `--no ...` cuối prompt (vd `--no flat lighting, harsh flash`).
- **Công cụ có ô negative riêng:** dán thẳng cụm vào ô đó.
- **Nano Banana và công cụ không có ô negative:** diễn đạt ngược thành mô tả dương tính — thay vì cấm `flat lighting`, hãy viết rõ `strong directional light from one window` ở khối 2. Với các công cụ này, mô tả dương tính thường ăn hơn câu phủ định.

Bộ negative khởi điểm, đối chiếu ngược về bảng 12 nguyên nhân ảnh giả (chương Mở đầu):

| Hiện tượng cần chặn | Cụm negative | Chặn nguyên nhân giả số |
|---|---|---|
| Sáng đều không hướng | `no flat lighting, no evenly lit scene` | 1 |
| Xám bệt, không dám tối | `no washed-out shadows, no low-contrast gray look` | 2 |
| Sạch vô trùng kiểu CG | `no sterile plasticky surfaces, no CGI look, no 3D render look` | 3–4, 11 |
| Méo góc siêu rộng | `no fisheye distortion, no extreme wide angle` | 6 |
| Flash gắt, cháy sáng | `no harsh flash, no overexposure, no blown-out highlights` | 9, 12 |
| Hậu kỳ lố | `no HDR look, no oversaturated colors, no excessive bloom` | 9–10 |

> 💡 Đừng dán cả 6 hàng vào mọi prompt — chọn 2–3 hàng đúng bệnh mà công cụ hay mắc với thể loại ảnh bạn đang làm. Negative quá dài cũng làm nhiễu như positive quá dài.

---

## D4. Ví dụ hoàn chỉnh

Ba ví dụ ghép đủ 6 khối, viết cho đúng bối cảnh công ty (căn hộ chung cư, tủ gỗ công nghiệp). Phần in nghiêng trong ngoặc là chú thích khối — khi dùng thì bỏ đi.

**Ví dụ 1 — Phòng khách kiểu tạp chí (ảnh mood tinh tế):**

```
editorial interior photography of a wabi-sabi living room in a compact apartment
(1), soft diffused daylight from a large left window (2), warm 3000K accent lamp
mixed with cool daylight (3), shot on 24mm tilt-shift lens, straight verticals (4),
wood-grain laminate TV wall, linen sofa, lived-in styling with an open book and
coffee cup (5), layered composition, subtle film grain and gentle window bloom (6)
--no flat lighting, no HDR look
```

**Ví dụ 2 — Bếp melamine kiểu ảnh bán hàng (sáng, rõ, mời gọi):**

```
bright and airy modern kitchen in a new apartment (1), high-key even lighting with
daylight from a balcony door (2), clean neutral white tones (3), 35mm lens,
eye-level view, straight verticals (4), matte melamine cabinetry with high-gloss
acrylic upper doors, quartz stone countertop, casual props: fruit bowl and coffee
maker (5), soft specular highlights, physically based materials (6)
--no harsh flash, no oversaturated colors
```

**Ví dụ 3 — Phòng ngủ buổi tối trầm ấm (ảnh cảm xúc):**

```
moody low-key master bedroom at night (1), warm tungsten glow from a bedside lamp,
rim light separating the headboard from the wall (2), deep shadows, crushed blacks
(3), 35mm lens, slightly low camera height (4), wood-grain laminate wardrobe,
rumpled throw blanket on the bed (5), shallow depth of field, subtle film grain,
vignette (6) --no evenly lit scene, no blown-out highlights
```

Để ý cả ba ví dụ đều theo cùng một khung — chỉ đổi ruột từng khối theo ý đồ. Khi ảnh ra sai, đừng viết lại cả prompt: soi xem sai ở khối nào (sáng bẹt → khối 2, màu giả → khối 3, méo → khối 4...) rồi chỉ sửa khối đó. Đây cũng chính là cách chẩn đoán ảnh render 3 bước ở Chương 2 — tách vấn đề, sửa một biến mỗi lần.

---

## D5. Ca thực chiến — biến ảnh model trắng thành ảnh thật bằng Google Flow

Đây là ca hay gặp nhất trong nhóm: có một **ảnh chụp màn hình model trắng** (clay — SketchUp hoặc khung nhìn dựng của Kujiale), muốn xem trước "nước ảnh" của góc đó theo kiểu pháp sư Trung Hoa trước khi tốn 核豆 render thật. Mục này chạy trọn ca đó bằng Google Flow, dùng đúng công thức 6 khối ở D2.

> ⚠️ **Flow là công cụ sinh VIDEO** (dòng model Veo của Google), không phải máy sinh ảnh tĩnh. Ảnh tĩnh bạn cần là **một khung hình rút ra từ clip**. Toàn bộ cách viết prompt dưới đây xoay quanh sự thật đó: phải ra lệnh cho máy quay **đứng yên**, nếu không mỗi khung một kiểu, không khung nào dùng được.
>
> ⚠️ Tên nút và các chế độ nạp ảnh của Flow đổi rất nhanh — phần D5.2 mô tả theo UI tại thời điểm biên soạn. Lệch thì ghi một dòng vào Sổ ghi nhận (Phụ lục B), đừng sửa prompt.

### D5.1. Sửa ảnh gốc trước khi nạp — 4 việc, 2 phút

Đưa ảnh vào nguyên xi là tự chuốc lỗi. Làm bốn việc này trước:

| # | Việc | Vì sao |
|---|---|---|
| 1 | **Cắt bỏ mọi chữ, watermark, logo, dòng chú thích** dính trong ảnh | Model sẽ vẽ lại chữ thành ký tự méo mó ngay giữa ảnh — lỗi không sửa được ở hậu kỳ |
| 2 | **Tắt lưới bố cục / đường tham chiếu** trước khi chụp màn hình | Vạch trắng chia ba bị hiểu là khe kính hoặc nẹp tường, máy sẽ dựng ra vách chia ô không có thật |
| 3 | **Cắt hoặc chèn nền cho đúng tỉ lệ khung** Flow đang xuất (16:9 hoặc 9:16) | Ảnh vuông nạp vào khung ngang thì hai dải trống hai bên **do máy tự bịa ra** — thường bịa thêm tường, thêm cửa |
| 4 | Xuất ảnh cạnh dài **≥ 2000 px** | Ảnh nguồn mờ thì vân gỗ, vân đá không có gì để máy bám vào — ra bề mặt "nhựa", đúng dấu hiệu #3 (Chương 7) |

### D5.2. Nạp ảnh kiểu nào

Flow có hai đường đưa ảnh vào, chọn sai là mất công:

| Đường nạp | Máy hiểu ảnh của bạn là gì | Hợp với ca này không |
|---|---|---|
| **Khung hình sang video** (ảnh làm khung đầu) | Khung mở đầu clip — clip **bắt đầu bằng đúng ảnh clay** rồi biến đổi dần theo prompt | ✅ Đường chính. Giữ được phối cảnh, tỉ lệ, vị trí đồ. Lấy khung **cuối** clip, không lấy khung đầu |
| **Nguyên liệu sang video** (ảnh làm nguyên liệu tham chiếu) | Tham chiếu về đồ vật/phong cách, không phải bố cục | 🟡 Dự phòng. Đồ giữ được, nhưng **góc máy và bố cục bị dựng lại** — hết là ảnh căn của bạn |

> 📌 Chọn **Khung hình sang video**, viết prompt mô tả cảnh clay "hiện hình" thành ảnh chụp trong khoảng một giây đầu rồi máy quay đứng yên đến hết clip. Khung cuối chính là ảnh tĩnh bạn cần.

### D5.3. Prompt chính — ban ngày, máy đứng yên

Bản chuẩn để dán thẳng. Sau đó chỉ đổi ruột từng khối theo đúng cách chẩn đoán ở D2.

```
A locked-off architectural photograph of this exact dining nook. Same camera, same
geometry, same furniture layout — the untextured clay model resolves into a real
photograph during the first second, then the shot holds perfectly still.

Lighting: one clear direction. Cool 5500K overcast daylight enters through the
sheer-curtained balcony on the right and falls off gradually across the room toward
the marble wall on the left; the linear pendant above the table glows warm 3000K
amber against that cool daylight; mixed color temperature, warm interior versus cool
daylight. Shadows stay deep but open under the table and inside the cabinet reveals,
room corners allowed to go dark. The only light sources are the window and the
fixtures already visible in frame.

Camera: 24mm tilt-shift lens, eye level at 1.45 m, straight verticals, two-point
perspective, f/5.6, sharp throughout.

Materials: honed Calacatta marble slab feature wall with soft grey veining and a low
satin sheen; matte oak wood-grain laminate tall cabinetry with vertical grain and
crisp shadow-gap joints; cream boucle upholstered chairs with visible fabric nap;
matte black powder-coated steel legs with faintly worn edges; oak veneer table
pedestal; warm off-white stone tabletop; grey-brown wide-plank vinyl flooring with
non-repeating grain and faint scuffs along the walking path; brushed brass pendant
cylinders; the dark dried-leaf arrangement in its matte ceramic vase; the open book
left on the table. Whites read as soft warm greys, never pure white; blacks read as
deep charcoal, never crushed. The dark TV panel holds a faint soft reflection of the
window instead of reading as a black void.

Finish: editorial interior photography, Architectural Digest style, warm-neutral
cream grade, warm highlights and slightly cool shadows, restrained saturation,
gentle lens bloom where daylight meets the sheer curtain, soft vignette, fine film
grain, true contact shadows under every furniture leg. The view outside the window
keeps detail — soft bright haze, not blown out.

The camera does not move. Nothing is added, removed, or rearranged: no extra
furniture, no new walls, doors or windows, no people, no text.
```

Đối chiếu với công thức 6 khối ở D2 — mỗi đoạn là một khối, không đoạn nào lẫn việc của đoạn khác:

| Đoạn trong prompt | Khối | Cụm lấy từ bảng D1 |
|---|---|---|
| Câu mở "locked-off... same geometry" | 1 + câu khoá giữ thiết kế (D5.5) | — |
| `Lighting:` | 2 + 3 | hàng 1, 7, 8, 11, 13 |
| `Camera:` | 4 | hàng 17, 18 |
| `Materials:` | 5 | hàng 22, 23, 26 + quy tắc trắng 180–200 (C7) |
| `Finish:` | 6 | hàng 15, 20, 21, 25 |
| Câu chốt "does not move / nothing added" | Ràng buộc riêng của Flow | — |

> 📌 Chú ý một điều nhỏ mà quyết định "nước ảnh": prompt **chỉ có MỘT ý đồ ánh sáng** — trời phủ mây từ phải, đèn ấm phản pha. Không nắng gắt, không giờ vàng, không nến, không neon chen vào. Đây đúng nguyên tắc số 1 ở D2, và cũng là thứ tách ảnh pháp sư khỏi ảnh nhồi đèn.

### D5.4. Hai biến thể — đổi khối 2 và 3, giữ nguyên phần còn lại

**Biến thể A — nắng xiên giờ vàng (ảnh chủ lực, giàu cảm xúc):** thay đoạn `Lighting:` bằng:

```
Lighting: late afternoon golden hour sun rakes in low from the right through the
sheer curtain, printing a soft warm light patch and legible curtain-fold shadows
across the floor and the lower cabinet fronts; grazing light along the wood grain
reveals its texture; the rest of the room falls off into warm shade; the pendant is
switched off. One light intent only.
```

**Biến thể B — giờ xanh, đèn trong nhà bừng lên (ảnh bán hàng buổi tối):** thay đoạn `Lighting:` bằng:

```
Lighting: blue hour twilight outside the balcony glazing, deep cool blue beyond the
sheer curtain; inside, the linear pendant and the brass cylinders glow warm 2700K
and become the main light, pooling on the tabletop and dropping off toward the
ceiling; recessed downlights add a low fill with visible scallops on the marble wall;
strong warm-versus-cool contrast, deep shadows, crushed-black-free.
```

Cả hai biến thể vẫn giữ nguyên `Camera:`, `Materials:`, `Finish:` và câu chốt. Đúng tinh thần "sai khối nào sửa khối đó".

### D5.5. Câu khoá giữ nguyên thiết kế — vì sao viết dương tính

Flow **không có ô negative prompt**. Đúng như D3 đã dặn: với loại công cụ này, câu phủ định ăn kém hơn nhiều so với mô tả dương tính. Ba câu khoá phải luôn có trong mọi prompt loại này:

| Câu khoá | Chặn cái gì |
|---|---|
| `Same camera, same geometry, same furniture layout` | Máy dựng lại phối cảnh, đổi góc, đổi tỉ lệ đồ (dấu hiệu #6, C7) |
| `The camera does not move` | Mỗi khung một bố cục, không rút được khung nào dùng được |
| `Nothing is added, removed, or rearranged` | Máy tự thêm ghế, thêm cửa sổ, thêm bình hoa — đúng loại lỗi Chương 8 gọi là mất 主体保留 (giữ chủ thể) |

Còn các bệnh ảnh giả thì đã được chặn sẵn bằng câu dương tính ngay trong prompt chính, không cần liệt kê thêm:

| Bệnh (12 dấu hiệu, C7) | Câu dương tính đang gánh |
|---|---|
| #1 sáng đều vô hướng | `one clear direction... falls off gradually` |
| #2 ngoài cửa cháy trắng | `keeps detail — soft bright haze, not blown out` |
| #3 vật liệu mới tinh | `faintly worn edges`, `faint scuffs along the walking path` |
| #5 trắng/đen tuyệt đối | `soft warm greys, never pure white; deep charcoal, never crushed` |
| #8 vân lặp | `non-repeating grain` |
| #10 phẳng và xám | `shadows stay deep but open`, `corners allowed to go dark` |

### D5.6. Từ clip ra ảnh dùng được

1. Chạy prompt, xem hết clip. Chỉ giữ clip nào **máy quay thực sự đứng yên** — rung nhẹ là bỏ, chạy lại.
2. Tua tới **khung cuối** (lúc cảnh đã hiện hình xong), rút khung đó ra làm ảnh tĩnh. Muốn chắc hơn thì tải cả clip rồi cắt khung bằng công cụ ảnh.
3. Soi ngay bằng **bảng 12 dấu hiệu (C7)** và **Phụ lục A**. Đừng hậu kỳ trước khi soi — hậu kỳ không cứu được sáng sai, ở ảnh AI cũng đúng y như ảnh render.
4. Hậu kỳ **tiết chế ±10–15** theo Chương 6/14: chia tông màu dưới 20, hạ bão hoà dải lục cho cây bớt xanh nhựa. Nước ảnh phần lớn đã nằm trong prompt rồi — giống hệt lời ở mục 14.5, nước ảnh đến từ khâu dựng chứ không từ bộ lọc.

### D5.7. Ảnh ra sai — sửa đúng khối, đừng viết lại cả prompt

| Ảnh ra bị | Hỏng ở khối | Sửa thế nào |
|---|---|---|
| Bẹt, không biết sáng từ đâu | 2 | Ghi rõ hơn hướng + cửa sổ nào; thêm `falls off gradually toward...` |
| Ngoài cửa trắng xoá | 2 | Nhấn mạnh `keeps detail outside`, hạ mô tả cường độ nắng |
| Đổi góc, ghế nhảy chỗ, thêm cửa | Câu khoá D5.5 | Đưa 3 câu khoá lên **ngay câu đầu** prompt, không để cuối |
| Vân gỗ/vân đá sai chất, quá bóng | 5 | Gọi đích danh vật liệu công ty (ghi chú hàng 26, D1): `matte melamine`, `wood-grain laminate`, `quartz stone countertop` |
| Bóng bẩy kiểu quảng cáo, màu rực | 6 | Bỏ bớt từ mạnh ở `Finish:`, thêm `restrained saturation`, `muted tones` |
| Chữ lạ, ký tự méo trên tường/ảnh treo | Ảnh gốc | Quay lại D5.1 việc #1 — cắt sạch watermark rồi nạp lại |
| Máy quay trôi, khung cuối lệch bố cục | Câu chốt | Lặp `locked-off, static shot, the camera does not move` cả đầu và cuối prompt |

> ⚠️ **Nhắc lại quy định Chương 8:** ảnh ra từ Flow là **ảnh ý tưởng** — dùng để thăm dò hướng ánh sáng và không khí trước khi render thật, hoặc làm mood cho khách xem kèm lời nói rõ "ảnh minh hoạ AI". Cấm tuyệt đối dùng nó làm ảnh chốt phương án, ảnh kèm hợp đồng, hoặc ảnh mô tả vân vật liệu sẽ thi công. Đăng mạng thì phải có watermark "Ảnh minh hoạ AI" trên ảnh.

---

## Nguồn số liệu

- **Bảng cụm prompt + công thức 6 khối:** tổng hợp từ hướng dẫn viết prompt nhiếp ảnh cho Midjourney (Hui Zhu — Medium), insMind (nguyên tắc một ý đồ ánh sáng), PromptHero, Tory Barber, imageprompt.cloud — đều là nguồn cộng đồng/blog, không phải tài liệu chính thức của hãng AI nào.
- **Ca Google Flow (D5):** biên soạn từ chính bảng D1 + công thức D2, áp lên một ảnh model trắng thật của nhóm. ⚠️ Tên nút và các chế độ nạp ảnh của Flow chưa được khoá bằng tài liệu chính thức của Google — mô tả theo UI tại thời điểm biên soạn, lệch thì ghi Sổ ghi nhận (Phụ lục B).
- ⚠️ Hiệu quả từng cụm prompt **thay đổi theo công cụ và theo phiên bản model** — bảng này là điểm xuất phát đã kiểm chứng bằng thực hành cộng đồng, không phải bảo hành "gõ là ra". Cụm nào không ăn với công cụ bạn dùng → ghi lại vào sổ tay riêng của nhóm.
- Cơ sở lý thuyết của mọi cụm (hướng sáng, tương phản, nhiệt độ màu, raking light, tì vết, grain...): xem chương Mở đầu, mục nguồn cuối chương.
