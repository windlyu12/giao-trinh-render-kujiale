# Phụ lục D. Từ vựng prompt AI — từ nguyên tắc ánh sáng sang cụm tiếng Anh

**Bảng này dùng khi nào:** khi bạn viết prompt cho AI sinh ảnh (Nano Banana, Midjourney và các công cụ tương tự) — làm ảnh ý tưởng, ảnh mood, ảnh tham khảo phong cách cho khách. Toàn bộ kiến thức ánh sáng bạn đã học ở chương Mở đầu **áp thẳng vào đây**: AI sinh ảnh "hiểu" đúng những khái niệm đó, chỉ cần bạn gọi tên chúng bằng cụm tiếng Anh chuẩn mà giới nhiếp ảnh và CGI vẫn dùng. Phụ lục này KHÔNG nhắc lại lý thuyết — nó chỉ là bảng tra + công thức + ví dụ. Quên vì sao "dám để tối" quan trọng thì mở lại chương Mở đầu.

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

## Nguồn số liệu

- **Bảng cụm prompt + công thức 6 khối:** tổng hợp từ hướng dẫn viết prompt nhiếp ảnh cho Midjourney (Hui Zhu — Medium), insMind (nguyên tắc một ý đồ ánh sáng), PromptHero, Tory Barber, imageprompt.cloud — đều là nguồn cộng đồng/blog, không phải tài liệu chính thức của hãng AI nào.
- ⚠️ Hiệu quả từng cụm prompt **thay đổi theo công cụ và theo phiên bản model** — bảng này là điểm xuất phát đã kiểm chứng bằng thực hành cộng đồng, không phải bảo hành "gõ là ra". Cụm nào không ăn với công cụ bạn dùng → ghi lại vào sổ tay riêng của nhóm.
- Cơ sở lý thuyết của mọi cụm (hướng sáng, tương phản, nhiệt độ màu, raking light, tì vết, grain...): xem chương Mở đầu, mục nguồn cuối chương.
