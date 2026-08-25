# Viết prompt AI cho ảnh/video nội thất

> ## ⚠️ ĐỌC TRƯỚC — RANH GIỚI DÙNG (C8, có án lệ)
>
> **CẤM TUYỆT ĐỐI dùng ảnh AI cho:**
> 1. Ảnh chốt phương án để khách ký duyệt
> 2. Ảnh đính kèm hợp đồng / báo giá
> 3. Ảnh mô tả **vật liệu cụ thể sẽ thi công** (vân melamine, màu acrylic, mặt đá, vải)
> 4. Ảnh nghiệm thu, ảnh cam kết "giống thực tế"
>
> **CHO PHÉP có điều kiện:**
> - Ảnh ý tưởng sơ bộ / mood board → nói rõ với khách "đây là ảnh minh họa hướng phong cách, không phải bản chốt"
> - Ảnh marketing / mạng xã hội → **luôn kèm watermark "Ảnh minh họa AI" TRÊN ẢNH**, không chỉ trong caption
> - Sửa nhanh tại chỗ khi khách muốn thử đổi phong cách trong buổi tư vấn → nói rõ là bản nháp
>
> **Căn cứ:** án 钟某 (Tòa Trung cấp Quảng Châu, 12/03/2026) — ảnh AI nói là ảnh thật = `消费欺诈`,
> phán **hoàn tiền + bồi thường gấp 3 lần**. Loại suy sang nội thất: khách ký dựa trên vân gỗ / màu đá
> do AI bịa → lắp xong khác ảnh → `货不对板`.
>
> **Mọi prompt agent xuất ra phải đính kèm một dòng nhắc phạm vi dùng.**

---

## 0. Ba luật bắt buộc — rút từ thực chiến, đọc trước khi viết dòng nào

### Luật 1 — Xuất prompt ĐẦY ĐỦ, cấm xuất mảnh

Sửa lần thứ mười thì vẫn xuất lại **toàn bộ** prompt lần thứ mười. Không bao giờ viết
*"giữ khối 1–4, thay khối 5"*. Bảng diff (nếu có) đặt **sau** prompt đầy đủ, không thay cho nó.

### Luật 2 — Bó TÍNH CHẤT, nhưng phải ép SỰ HIỆN DIỆN

Chữa lỗi prompt bằng **cụm nhấn** thì AI luôn giao thừa:

| Đã thử | Kết quả |
|---|---|
| `raking … so the texture reads clearly` | Cả khung tắm cam + AI bịa bóng lá cây |
| `visible looped fabric texture` (kèm `boucle`) | Ghế xù hết lông |
| `wide horizontal 16:9 composition` | Cắt mất tường cao và tủ kịch trần |

→ Dùng **cụm bó**: `tight`, `compact`, `low`, `even`, `restrained`, `subtle`, `faint`, `quiet and few`.

**NHƯNG** bó quá thì thứ đó **biến mất hẳn**:

| Đã thử | Kết quả |
|---|---|
| `subtle film grain` — viết trong 5 bản prompt liền | **Grain ra bằng 0**, không đọc được hạt nào |

→ Công thức đúng: **bó tính chất + khẳng định sự hiện diện.**
`fine grain visible across the whole frame` — `fine` bó, `visible` ép có.
Áp cho mọi thứ dễ bị bó về 0: hạt nhiễu, tối góc, tì vết, quang sai.

### Luật 3 — "Lớp nhựa phủ toàn ảnh" KHÔNG sửa được bằng prompt

Triệu chứng người dùng mô tả: *"bề mặt ảnh như phủ một lớp nhựa"*. Bốn thứ cộng lại:

| Thứ | Hạng bảng 12 |
|---|---|
| Mất chi tiết tần số cao — diffusion làm mượt đều toàn khung | 11 |
| Dải tông quá hẹp, không có vùng tối thật | 2 + 10 |
| Ám màu đều toàn khung → mắt đọc là filter | 9 |
| Không tối góc, không mềm rìa, không hạt | 12 |

**Bộ đồ nghề chống "nhựa" của C14 đều là bước HẬU KỲ, không phải bước prompt.**
Nguyên văn C14: *"nghịch lý nghề render: thêm một tí nhiễu ảnh lại thật hơn"*.

> ## 📌 **Ảnh AI KHÔNG BAO GIỜ là bản cuối.**
> **Mọi prompt xuất ra phải kèm công thức hậu kỳ bên dưới.** Không kèm là xuất thiếu.

| Bước | Số (C14) |
|---|---|
| **Đường cong chữ S** | Điểm vào 64 → ra **57** · điểm vào 192 → ra **198** (dịch ~8/255). Giữ điểm giữa 128, nhích tối đa ±3 |
| **Hạt nhiễu** — giết "nhựa" mạnh nhất | Amount **12–15** · Size 25 · Roughness 45–50 · **Gaussian đơn sắc**. Ảnh 1080–2K: **8–12** |
| **Tối góc** | Vignette vừa đủ cảm thấy |
| **Khử ám** | Cân bằng trắng về trung tính nếu cả ảnh ngả một tông |
| **Dải lục** | Hạ bão hoà −5 → −10 cho cây bớt "xanh nhựa" |

⚠️ **KHÔNG đụng dải cam/vàng** — màu ván khách đã chốt trên bảng mẫu, lệch là tranh chấp nghiệm thu.
⚠️ **Đánh giá hạt ở kích thước xuất cuối, xem toàn ảnh — không phóng 100%.**

### Hệ quả cho khối 5 và 6

Khối 5 **bắt buộc có tì vết** (hàng 22 của bảng §2) — không có là vật liệu ra nhựa, hạng 3+4 bảng 12.
Khối 6 phải tả **mức bóng KHÁC NHAU giữa các vật liệu**, không dùng một cụm chung cho tất cả.

> 💡 Quan sát từ thực chiến: **bề mặt càng TRƠN và càng ĐỀU MÀU thì AI càng ra nhựa** — cánh tủ trắng,
> console sơn, khung ghế gỗ nhạt. Bề mặt có vân đậm và biến thiên (sàn xương cá) thì ra tốt.
> Nhóm trơn-đều **phải được tả riêng**, đừng gộp chung một dòng liệt kê.

⚠️ Tránh `physically based materials` — thuật ngữ engine render, nghi đẩy model về vẻ CG sạch.

---

## 1. Công thức 6 khối

```
[1 Không gian] + [2 Nguồn sáng + hướng] + [3 Nhiệt độ màu / mood]
+ [4 Ống kính / góc máy] + [5 Vật liệu + staging] + [6 Chất ảnh]
(+ negative)
```

| Khối | Trả lời câu hỏi | Ví dụ điền |
|---|---|---|
| 1. Không gian | Phòng gì, phong cách gì? | `living room of a modern apartment` |
| 2. Nguồn sáng + hướng | Sáng chính từ đâu? Cứng hay mềm? | `soft diffused daylight from a large left window` |
| 3. Nhiệt màu / mood | Ấm hay lạnh? Có trộn nóng–lạnh không? | `warm 3000K accent lamp mixed with cool daylight` |
| 4. Ống kính / góc máy | Tiêu cự, chiều cao, phương đứng | `35mm lens, eye-level view, straight verticals` |
| 5. Vật liệu + staging | Chất liệu gì, dấu vết sống nào? | `matte melamine cabinetry, linen sofa, open book on table` |
| 6. Chất ảnh | Grain, bloom, chiều sâu, bố cục | `subtle film grain, gentle window bloom, layered composition` |

> ## 📌 NGUYÊN TẮC SỐ 1 KHI ĐIỀN KHỐI 2–3
> ## Mỗi khung hình chỉ **MỘT** ý đồ ánh sáng.
>
> Một cụm rõ ràng kiểu "softbox chính + rim nhẹ" tốt hơn hẳn việc nhồi softbox + nến + trăng + neon +
> giờ vàng + spotlight vào cùng một câu. Nhồi 5 kiểu sáng thì AI trả về đúng thứ **ảnh bẹt không hướng
> sáng** mà bảng 12 nguyên nhân xếp hạng 1.

---

## 2. Bảng tra 26 nguyên tắc ánh sáng → cụm prompt

Mỗi prompt chỉ lấy **1 cụm ánh sáng chính** (hàng 1–9), đừng gom cả bảng.

| # | Nguyên tắc | Cụm prompt tiếng Anh | Dùng khi |
|---|---|---|---|
| 1 | Ánh sáng ngày mềm, khuếch tán | `soft diffused daylight`, `overcast soft light` | Dịu, thoáng — phòng ngủ, phong cách mộc |
| 2 | Nắng xiên giờ vàng | `golden hour side lighting`, `warm afternoon sun raking through window` | Nắng ấm, bóng dài — **ảnh chủ lực** |
| 3 | Ánh sáng tạt xiên lộ vân | `raking light`, `grazing light across textured wall` | **Khoe vân gỗ, vân đá** |
| 4 | Tương phản mạnh, bóng sâu | `high contrast chiaroscuro`, `dramatic low-key lighting` | Kịch tính, sang, tối giản |
| 5 | Sáng đều, tươi sáng | `bright and airy`, `high-key even lighting` | Kiểu ảnh bán hàng — rõ, mời gọi |
| 6 | Vệt sáng thể tích | `volumetric light shafts`, `god rays`, `light beams through window` | Không khí buổi sáng |
| 7 | Sáng suy giảm theo khoảng cách | `window light falloff`, `natural light gradient` | Chuyển tông từ cửa vào sâu phòng |
| 8 | Ánh sáng dội / nảy | `bounce light`, `indirect soft fill` | Mở vùng tối tự nhiên, tránh bẹt |
| 9 | Sáng viền tách chủ thể | `rim light`, `backlit silhouette edge` | Tách nội thất khỏi nền |
| 10 | Nhiệt độ màu ấm | `3000K warm ambient`, `warm tungsten glow` | Ấm cúng buổi tối |
| 11 | Trộn nhiệt màu có chủ đích | `mixed color temperature`, `warm interior vs cool daylight` | Tương phản nóng–lạnh điện ảnh |
| 12 | Giờ xanh, đèn trong nhà bừng lên | `blue hour twilight, interior lights glowing` | Cảnh chập tối |
| 13 | Tâm trạng trầm, tối | `moody low-key interior`, `deep shadows, crushed blacks` | Phòng ngủ/phòng đọc |
| 14 | Chỉ dùng ánh sáng tự nhiên | `natural light only`, `no artificial light` | Kiểu tạp chí tinh tế, màu sạch |
| 15 | "Nước ảnh" tạp chí | `editorial interior photography`, `architectural digest style` | Gọi thẳng chuẩn thẩm mỹ |
| 16 | Tối giản mộc, bão hòa thấp | `Kinfolk aesthetic, muted tones, negative space, natural light` | Wabi-sabi, tông trầm dịu |
| 17 | Ống kính thẳng phương đứng | `shot on 24mm tilt-shift lens`, `straight verticals, two-point perspective` | **Chống "mùi render rẻ tiền"** |
| 18 | Tiêu cự chuẩn mắt người | `35mm lens, eye-level view` | Góc nhìn tự nhiên |
| 19 | Chiều sâu trường ảnh | `shallow depth of field`, `subtle background blur` | Nhấn tiền cảnh |
| 20 | Khuyết tật quang học ống kính thật | `subtle lens bloom and glare`, `slight chromatic aberration`, `vignette` | Bớt vẻ "hoàn hảo vô trùng" |
| 21 | Hạt phim | `subtle film grain`, `analog photo texture` | Bớt mượt kiểu CG |
| 22 | Vật liệu có tì vết | `realistic material imperfections`, `worn edges, dust, fingerprints, subtle scratches` | Chống bề mặt sạch tuyệt đối |
| 23 | Phản xạ bề mặt đúng | `physically based materials`, `soft specular highlights, satin sheen` | Vật liệu "ra chất" |
| 24 | Dấu vết sinh hoạt | `lived-in styling, casual props`, `open book, coffee cup, rumpled throw` | Khung hình "có người sống" |
| 25 | Bố cục lớp lang | `layered composition, foreground-midground-background`, `rule of thirds` | Chiều sâu |
| 26 | Gọi tên chất liệu cụ thể | `oak wood grain, honed marble, linen texture, brushed brass` | Nêu đích danh vật liệu |

### Vật liệu đúng nghề công ty (thay vào hàng 26)

| Việt | Cụm prompt |
|---|---|
| Tủ melamine phủ mờ | `matte melamine cabinetry` |
| Laminate vân gỗ | `wood-grain laminate` |
| Cánh acrylic bóng gương | `high-gloss acrylic panels` |
| Mặt đá thạch anh | `quartz stone countertop` |
| Đá nung kết / sintered stone | `sintered stone slab` |
| Kính mờ | `frosted glass` |
| Ray đèn nam châm | `magnetic track lighting` |
| Khe hắt trần | `recessed cove lighting` |
| Trần giật cấp | `stepped gypsum ceiling` |

> 💡 **Không gọi đúng tên thì AI mặc định gỗ tự nhiên kiểu Âu Mỹ** — ra ảnh đẹp nhưng sai hẳn chất
> liệu công ty đang bán, và đó chính là cái bẫy pháp lý ở đầu file.

---

## 3. Negative prompt — chặn đúng 12 nguyên nhân ảnh giả

| Hiện tượng cần chặn | Cụm negative | Chặn nguyên nhân giả số |
|---|---|---|
| Sáng đều không hướng | `no flat lighting, no evenly lit scene` | 1 |
| Xám bệt, không dám tối | `no washed-out shadows, no low-contrast gray look` | 2 |
| Sạch vô trùng kiểu CG | `no sterile plasticky surfaces, no CGI look, no 3D render look` | 3–4, 11 |
| Méo góc siêu rộng | `no fisheye distortion, no extreme wide angle` | 6 |
| Flash gắt, cháy sáng | `no harsh flash, no overexposure, no blown-out highlights` | 9, 12 |
| Hậu kỳ lố | `no HDR look, no oversaturated colors, no excessive bloom` | 9–10 |

> 💡 **Đừng dán cả 6 hàng vào mọi prompt** — chọn **2–3 hàng đúng bệnh** mà công cụ hay mắc với thể
> loại ảnh bạn đang làm. Negative quá dài cũng làm nhiễu như positive quá dài.

**Cách khai báo tuỳ công cụ:**
- **Midjourney:** thêm `--no ...` cuối prompt.
- **Công cụ có ô negative riêng:** dán thẳng vào ô đó.
- **Nano Banana / ChatGPT và công cụ không có ô negative:** **diễn đạt NGƯỢC thành mô tả dương tính.**
  Thay vì cấm `flat lighting`, viết rõ `strong directional light from one window` ở khối 2.
  Với các công cụ này, mô tả dương tính thường **ăn hơn** câu phủ định.

---

## 4. Ba ví dụ hoàn chỉnh

**VD1 — Phòng khách kiểu tạp chí (ảnh mood tinh tế):**
```
editorial interior photography of a wabi-sabi living room in a compact apartment,
soft diffused daylight from a large left window, warm 3000K accent lamp mixed with
cool daylight, shot on 24mm tilt-shift lens, straight verticals, wood-grain laminate
TV wall, linen sofa, lived-in styling with an open book and coffee cup, layered
composition, subtle film grain and gentle window bloom
--no flat lighting, no HDR look
```

**VD2 — Bếp melamine kiểu ảnh bán hàng (sáng, rõ, mời gọi):**
```
bright and airy modern kitchen in a new apartment, high-key even lighting with
daylight from a balcony door, clean neutral white tones, 35mm lens, eye-level view,
straight verticals, matte melamine cabinetry with high-gloss acrylic upper doors,
quartz stone countertop, casual props: fruit bowl and coffee maker, soft specular
highlights, physically based materials
--no harsh flash, no oversaturated colors
```

**VD3 — Phòng ngủ buổi tối trầm ấm (ảnh cảm xúc):**
```
moody low-key master bedroom at night, warm tungsten glow from a bedside lamp,
rim light separating the headboard from the wall, deep shadows, crushed blacks,
35mm lens, slightly low camera height, wood-grain laminate wardrobe, rumpled throw
blanket on the bed, shallow depth of field, subtle film grain, vignette
--no evenly lit scene, no blown-out highlights
```

Cả ba theo **cùng một khung** — chỉ đổi ruột từng khối. **Ảnh ra sai thì đừng viết lại cả prompt:**
soi xem sai ở khối nào (sáng bẹt → khối 2, màu giả → khối 3, méo → khối 4) rồi **chỉ sửa khối đó**.
Đây chính là chẩn đoán 3 bước của C2 — **tách vấn đề, sửa một biến mỗi lần.**

---

## 5. Khác biệt theo công cụ

### ChatGPT (tạo ảnh)

- Nhận prompt **văn xuôi tự nhiên**, chịu được câu dài và có ngữ cảnh. Không có ô negative →
  **diễn đạt dương tính**.
- Mạnh nhất khi bạn **đưa ảnh tham chiếu kèm lời**: dán ảnh model trắng / ảnh render nháp rồi mô tả
  ý đồ ánh sáng — nó bám bố cục tốt hơn là tả chay.
- Chịu được **yêu cầu sửa lặp** ("giữ nguyên bố cục, chỉ đổi nắng sang xiên hơn") — tận dụng để dò
  từng khối một, đúng tinh thần "một biến mỗi lần".
- Tỉ lệ khung: mô tả bằng lời (`wide horizontal composition`, `vertical 3:4 composition`) hoặc chọn
  trong cài đặt — **đừng bê `--ar` sang**.

### Nano Banana (Gemini image)

- Rất mạnh ở **sửa ảnh có sẵn** (đưa ảnh render vào rồi bảo đổi ánh sáng / thêm đạo cụ) hơn là sinh từ
  con số không. Đây là cách dùng hợp lệ nhất với công ty: **giữ model gốc, chỉ thăm dò không khí**.
- Không có ô negative → **bắt buộc diễn đạt dương tính**.
- Ra ảnh xong vẫn phải soi lại vật liệu: đây là chỗ AI hay "bịa vân đẹp hơn tấm thật".

### Midjourney

- Cú pháp riêng: `--ar 3:2` (tỉ lệ), `--no flat lighting` (negative), `--style raw` (bớt vẻ minh hoạ).
- Ăn cụm từ khoá ngắn gọn hơn là văn xuôi dài.
- Mạnh về "chất ảnh", yếu về **giữ đúng bố cục model của bạn** → chỉ dùng cho mood board.

### Google Flow (Veo / Imagen)

⚠️ **Tính năng của Flow đổi nhanh — kiểm lại trong app trước khi hứa với khách.**

Flow là công cụ làm phim AI của Google (nền Veo cho video, Imagen cho ảnh tĩnh). Ba lối vào thường dùng:
- **text-to-video** — mô tả bằng lời, ra clip
- **frames-to-video** — đưa khung đầu (và khung cuối) làm mốc → clip nội suy giữa hai khung
- **ingredients-to-video** — đưa vài ảnh tham chiếu (không gian, vật liệu, đạo cụ) làm "nguyên liệu"

> 📌 **Cách dùng đúng nhất cho nghề mình: `frames-to-video` với khung đầu là ẢNH RENDER KUJIALE THẬT
> của mình.** Vật liệu và bố cục do Kujiale quyết (đúng hàng đang bán), Flow chỉ thêm chuyển động máy.
> Sinh video từ chữ trắng là mời AI tự bịa vật liệu — đúng cái bị cấm ở đầu file.

**Cấu trúc prompt video** — 6 khối ở §1 vẫn giữ nguyên, **thêm 2 khối**:

```
[1 Không gian] + [2 Nguồn sáng + hướng] + [3 Nhiệt màu/mood] + [4 Ống kính]
+ [5 Vật liệu + staging] + [6 Chất ảnh]
+ [7 CHUYỂN ĐỘNG MÁY] + [8 ÂM THANH / nhịp]
```

| Khối 7 — chuyển động máy | Cụm | Hợp với |
|---|---|---|
| Tiến chậm vào phòng | `slow dolly in`, `slow push in` | Mở đầu clip giới thiệu căn |
| Lùi ra lộ toàn cảnh | `slow dolly out revealing the room` | Kết clip |
| Trượt ngang | `slow lateral tracking shot, left to right` | Khoe một dải tủ dài |
| Nâng lên | `slow crane up` | Từ mặt bàn lên toàn phòng |
| Xoay quanh vật | `slow orbit around the kitchen island` | Đảo bếp, bàn ăn |
| Đứng yên, chỉ đời sống động | `locked-off static shot, only curtains drifting` | An toàn nhất — ít trôi vật liệu nhất |

Khối 8 (Veo có sinh âm thanh): `ambient room tone, faint city sound through the window` — hoặc ghi
`no dialogue` nếu không muốn giọng nói.

**Ba luật riêng cho video nội thất:**
1. **Chậm.** Chuyển động nhanh làm AI "trôi" vật liệu — vân gỗ đổi giữa chừng, tay nắm mọc thêm.
   `slow`, `subtle`, `gentle` là ba từ đáng tiền nhất trong prompt video.
2. **Một chuyển động mỗi clip.** Dolly in **rồi** orbit trong một câu = ra clip lộn xộn.
   Cần nhiều động tác → cắt nhiều clip ngắn rồi ghép.
3. **Ánh sáng phải khai báo là TĨNH:** thêm `lighting stays consistent throughout, no flicker` —
   nếu không AI hay tự "diễn" ánh sáng đổi giữa clip, và với ảnh nội thất thì đó là lỗi chứ không phải
   hiệu ứng.

**Ví dụ Flow (frames-to-video, khung đầu là ảnh render Kujiale):**
```
Slow dolly in through the living room toward the balcony window. Soft morning
daylight rakes across the wood-grain laminate TV wall from the left; warm 3000K
cove lighting stays on in the ceiling recess. Lighting stays consistent throughout,
no flicker. Materials and layout remain exactly as in the source frame — matte
melamine cabinetry, quartz countertop, linen sofa. 35mm lens, eye level, straight
verticals. Sheer curtains drift very slightly. Ambient room tone, no dialogue.
```

Câu **"Materials and layout remain exactly as in the source frame"** là câu quan trọng nhất — nó là
bản dịch sang tiếng Anh của hai công tắc `主体保留` + `材质保留` mà C8 bắt buộc bật.

---

## 6. Nếu dùng AI ngay trong Kujiale

Kujiale có AI riêng (`AI室内大师` qua `应用市场` · `AI写实增强`/`AI修图` trong pipeline render ·
`AI+渲染`/`AI美化`). Ba luật kỹ thuật bắt buộc:

1. **Luôn bật `主体保留` (giữ nguyên chủ thể) + `材质保留` (giữ nguyên vật liệu) TRƯỚC khi sinh ảnh.**
   Hai công tắc này **không tự bật.** Không bật thì AI được toàn quyền "sáng tác" — đã ghi nhận đổi
   màu, đổi vật liệu, và **đổi cả vị trí cửa sổ**.
2. **`创造性` để mức THẤP.** Càng cao ảnh càng đẹp kiểu tạp chí — và **càng xa model gốc của bạn**.
3. Đồ trong ảnh phải **đối chiếu được với mã hàng thật công ty đang bán**. Món nào AI "vẽ thêm" thì
   **xoá, hoặc ghi chú rõ với khách**.

Chức năng `室内照明` (ngày→đêm) có `准确模式` và `创意模式` — **chỉ dùng `准确模式`**, chế độ sáng tạo
đổi luôn vật liệu đồ đạc.

**Kể cả bật đủ khoá: ảnh sinh ra vẫn phải soát bằng mắt người.** Khoá giảm xác suất sai, không đưa về 0.

### Quy trình 2 người soát — không ảnh nào rời công ty qua tay 1 người

Mọi ảnh gửi khách (AI hay render chuẩn) phải qua người thứ hai soát 4 điểm, đối chiếu model gốc:

- [ ] Vật liệu / màu / vân đúng với mẫu công ty đang bán?
- [ ] Kích thước, tỷ lệ đồ đạc hợp lý (tủ không cao xuyên trần, bàn không dài quá phòng)?
- [ ] Bố cục, kết cấu (cửa, cửa sổ, trần) đúng vị trí như model?
- [ ] Nếu là ảnh AI: **đã có watermark "Ảnh minh họa AI" chưa?**

> ⚠️ **Ngưỡng siết chặt:** ngay khi công ty nhận **≥1 khiếu nại "ảnh khác thực tế"**, ảnh AI bị cấm dùng
> **cả ở khâu marketing** cho tới khi quy trình watermark + soát chéo được rà lại xong. Không thương lượng.
