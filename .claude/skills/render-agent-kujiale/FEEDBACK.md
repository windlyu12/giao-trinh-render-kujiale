# Sổ phản hồi — tích trước, sửa skill sau

> 📌 **Text đầy đủ của các prompt đang chạy nằm ở `PROMPTS-DANG-CHAY.md`** (cùng thư mục).
> File này ghi *vì sao*, file kia giữ *cái để copy*. Sửa prompt thì sửa ở file kia.

**Cách dùng:** mỗi lần agent xuất prompt hoặc phiếu thông số rồi người dùng đem đi test thật
(AI render hoặc Kujiale), ghi một ca vào đây. **Không sửa `references/` ngay.**
Khi sổ đủ dày (≈8–10 ca, hoặc thấy một luật lặp lại từ 3 ca trở lên) thì mới rà một lượt và vá skill.

Lý do làm vậy: sửa skill theo từng ca lẻ là cách nhanh nhất để nhét vào đó một luật chỉ đúng cho
một cảnh. Luật đáng vào skill là luật **lặp lại qua nhiều cảnh khác nhau**.

---

## Mẫu ghi một ca

```
### [số] — ngày — phòng gì

**Vào:** ảnh mẫu (nguồn) + ảnh model, hoặc chỉ model
**Agent xuất:** prompt biến thể nào / phiếu mục nào
**Test bằng:** ChatGPT · Nano Banana · Midjourney · Flow · Kujiale
**Kết quả:** ăn / lệch / hỏng
**Sai ở khối nào:** 1 không gian · 2 nguồn sáng · 3 nhiệt màu · 4 ống kính · 5 vật liệu · 6 chất ảnh
                   (hoặc: mục nào của phiếu thông số)
**Sửa thành gì thì ăn:**
**Rút ra:** (để trống nếu chưa thấy luật gì — đừng ép)
```

Dùng đúng hệ **6 khối** của `05-prompt-ai.md` để định vị lỗi. Ghi theo hệ đó thì sau này gom lại
biết ngay khối nào hay hỏng, và vá đúng chỗ.

---

## Các ca

### 01 — 2026-08-25 — Bàn ăn (marble + panel gỗ + sàn sẫm)

**Vào:** ảnh mẫu screenshot Xiaohongshu (khách+ăn+bếp, tông kem, cửa cuối trục) + ảnh model
SketchUp khu bàn ăn chưa render
**Agent xuất:** phiếu A đọc ngược + phiếu B thông số Kujiale + 2 biến thể prompt (airy / nắng xiên)
**Test bằng:** bản A (airy) — image-to-image
**Kết quả:** **ăn.** Người dùng: *"ánh sáng khá ổn"*

**Cái landed đúng:**
- Bố cục + đồ đạc giữ gần như nguyên: tủ kem trái, panel gỗ, tường marble, đèn linear + 2 đèn trụ,
  TV, bàn chân trụ, 4 ghế boucle chân đen, cửa sổ phải, đèn chùm cầu, thảm tròn
- **Gradient ngang phải → trái ăn rõ**, tủ kem góc trái chìm đúng ý → **nhận định 2 ĐÚNG**
- Đèn linear tự bật và hắt quầng ấm lên tường marble — không cần mô tả riêng, chỉ cần nêu nó trong khối 5
- Staging khối 5 landed gần hết: sách mở, tách cà phê, khăn linen vắt lệch

**Cái drift (AI tự đổi):**
- Vật liệu lệch: màu panel gỗ ấm/sáng hơn model, chi tiết tay nắm tủ kem biến mất, hướng ván sàn đổi
- Cây khô trong bình bị đổi hẳn loại (model là cây sẫm → output thành pampas khô)
- → **xác nhận đúng luật C8**: không dùng được cho ảnh chốt / ảnh mô tả vật liệu thi công

**Sai ở khối nào:**
- **Khối 6** — không khai tỉ lệ khung → ChatGPT/Nano Banana mặc định ra **ảnh vuông 1:1**.
  Phải nêu tỉ lệ bằng lời trong prompt (`wide horizontal 16:9 composition`), `--ar` không ăn ở đây.
- **Khối 2** — cụm `bright and airy` + `gentle bloom around the window` đẩy cửa sổ **hơi cháy**.
  Với ảnh AI làm mood thì chấp nhận được; nhưng nếu lấy làm chuẩn cho render Kujiale thì đây là
  trượt tiêu chí 3 của bộ chấm.

**Nhận định 1 — CHƯA kết luận được, và lộ ra một chỗ SKILL ĐANG TỰ MÂU THUẪN:**
Bản A không có nắng, mà **vân marble vẫn đọc tốt** — trong khi **vân gỗ panel và mặt tủ kem thì hơi bẹt**.
Lý do có vẻ là: **vân đá là hoa văn MÀU (diffuse), không phải vân NỔI** — nên không cần sáng tạt.
Vân gỗ và bề mặt nhám mới cần.

Chỗ mâu thuẫn trong skill hiện tại:
- `04` §2/§3 ghi marble `凹凸比例 ≈ 0` (đúng — đá bóng phẳng lì)
- `04` §8 lại xếp "marble / đá vân lớn" vào nhóm **đòi sáng tạt** (có vẻ quá tay)

→ Nghi ngờ: **tách "vân màu" khỏi "vân nổi"** trong bảng §8. Đá bóng cần *điểm phản chiếu*,
không cần sáng tạt. Đá NHÁM (`岩板` mờ, terrazzo, đá đục) mới cần.
**Chờ thêm 2 ca nữa mới sửa** — xem bảng cuối file.

**Nhận định 3 — bằng chứng ngược nhẹ:** khung này đếm được ~3 điểm bóng (sàn, marble, màn TV)
mà vẫn nhìn ổn. Ngưỡng "1–2" có thể hơi chặt; có lẽ nên là "≤3, và phải có chủ đích".
Chờ thêm ca.

**Sửa thành gì thì ăn:** chưa cần sửa prompt — chỉ thêm khai tỉ lệ khung vào khối 6.
**Rút ra:** xem hai dòng đã đưa vào bảng "luật đang chờ đủ bằng chứng" bên dưới.

---

### 02 — 2026-08-25 — Bàn ăn (cùng model ca 01) — bản B nắng xiên

**Vào:** cùng ảnh model. Bản B = bản A đổi **đúng khối 2** sang nắng xiên ấm.
**Test bằng:** Nano Banana (ảnh ra có dấu ✦) — image-to-image
**Kết quả:** **HỎNG.** Người dùng: *"nhìn giả quá"*

**Bốn nguyên nhân, xếp theo mức phá ảnh:**

1. **Cả khung tắm màu cam — mất hẳn trộn nóng–lạnh.**
   **Đây là lỗi soạn prompt, không phải lỗi công cụ.** Khi thay khối 2, bản B **đánh rơi cụm
   `mixed with the cool daylight`** vốn có trong bản A. Còn lại toàn nguồn ấm → không còn mốc lạnh nào
   để mắt neo vào → ám vàng toàn ảnh.
   Chính là lỗi C0 §2.3 + C4 §4.7 mà giáo trình đã cảnh báo: **trộn nóng–lạnh phải có chủ đích, và
   nền phải trung tính/lạnh thì lớp nhấn ấm mới nổi.** Prompt tự vi phạm sách.

2. **Nét CAD của model sống sót.** Thấy rõ đường viền đen mảnh ở: cạnh tủ cao trái, mép bàn, khung cửa,
   viền gương, vòng đèn âm trần vẽ phẳng. Ca 01 (bản A) thì AI xoá sạch nét và vẽ lại hẳn.
   → Prompt **thiếu câu bắt xoá nét line-art** của ảnh nguồn. Đây là thứ tố cáo "ảnh 3D" mạnh nhất trong khung.

3. **AI bịa bóng lá cây đổ lên tủ kem.** Ngoài cửa không có cây nào. Đúng nghĩa `上帝之光` phiên bản AI:
   bóng đổ từ vật không tồn tại. Cụm `raking` + `long shadow` mở đường cho nó tự thêm đạo cụ đổ bóng.

4. **Vật liệu bẹt hơn ca 01.** Ghế boucle ở ca 01 ra đúng chất vải; ở đây thành mặt nhẵn như clay.
   Sàn gỗ mất vân. Nắng gắt nuốt hết vi tương phản bề mặt.

**Sai ở khối nào:** **khối 2** (nguồn sáng — mất mốc lạnh, cụm raking quá mạnh) + **khối 6**
(chất ảnh — thiếu lệnh xoá nét CAD, thiếu khoá tông màu, thiếu tỉ lệ khung).

**Sửa thành gì thì ăn:** bản B2 — giữ nắng xiên nhưng (a) trả lại mốc lạnh rõ ràng,
(b) ghì cường độ nắng xuống "một vệt mềm" thay vì "quét cho vân hiện rõ",
(c) thêm lệnh xoá nét CAD, (d) cấm bịa bóng từ vật không có trong cảnh, (e) khai tỉ lệ khung.

**Rút ra — nhận định 1 CHƯA bị bác:** nắng xiên **có** làm vân gỗ tủ trái hiện lên rõ hơn ca 01.
Vấn đề không phải "có nên dùng nắng xiên" mà là **liều lượng và mốc lạnh đi kèm**. Chờ B2 để chốt.

---

### 03 — 2026-08-25 — Bàn ăn (cùng model) — bản B2 chạy trên Google Flow

**Vào:** cùng ảnh model, bản B2
**Test bằng:** **Google Flow**
**Kết quả:** khung **toàn ra 16:9**, cắt mất tường marble cao và tủ kem kịch trần
**Người dùng:** *"flow toàn tự nhảy sang ảnh 16:9"*

**Nguyên nhân — lỗi soạn prompt, hai tầng:**

1. **B2 có nguyên cụm `wide horizontal 16:9 composition` ở khối 4.** Tự tay viết vào.
   Cụm này thêm sau ca 01 vì ảnh ra vuông 1:1 và bị ghi nhầm là "lỗi phải sửa".
   → **Sửa hố.** Cảnh này đứng (tường marble cao, tủ cao kịch trần, trần trong khung);
   ép 16:9 là cắt đúng thứ đáng khoe. Vuông hoặc 4:5 hợp hơn.

2. **`no wide-angle distortion`** — câu phủ định chứa token hình ảnh mạnh (`wide-angle`),
   nhiều khả năng góp phần đẩy khung rộng. `05` §3 đã ghi luật "công cụ không có ô negative thì
   diễn đạt dương tính" mà prompt vẫn vi phạm.

**Cộng thêm đặc tính công cụ:** Flow là công cụ **video**, nền Veo → mặc định khung ngang, và
tỉ lệ nằm ở **cài đặt output của project**, không điều được bằng prompt. Cài đặt thắng câu chữ.

**Sửa thành gì thì ăn:** thay cả dòng khối 4 bằng
`Shot on a 35mm lens at eye level 1.1m. Vertical lines stay perfectly vertical, natural
undistorted perspective. Keep the same framing and crop as the source image.`
→ **đừng gọi tên tỉ lệ; bảo nó giữ khung ảnh gốc.** Tỉ lệ set trong UI. Cần khung khác thì crop sau.

**Rút ra:** hai luật đã cập nhật ở bảng dưới — trong đó luật của ca 01 bị **bác và đảo hướng**.
Ghi lại đây làm ví dụ: **một ca lẻ đủ để dựng giả thuyết, không đủ để thành luật.**

---

### 04 — 2026-08-25 — Bàn ăn (cùng lượt chạy B2 với ca 03) — ghế xù lông

**Kết quả:** vải ghế **xù hết lông lên**. Người dùng: *"không hiểu vấn đề tại sao"*

**Nguyên nhân — lỗi soạn prompt, hai thứ nhân nhau:**

1. **Cụm nhấn thừa.** Bản A viết `cream boucle chairs with slim black metal legs` → ghế ra **đúng chất vải**
   (đã ghi ở ca 01). B2 đổi thành `cream boucle chairs with visible looped fabric texture and slim
   black metal legs` để chữa lỗi "ghế bẹt như clay" của ca 02.
   Nhưng **`boucle` bản thân đã là vải vòng xù** — thêm `visible looped texture` là bảo AI phóng đại
   vòng vải. Nó nhả sợi ra thành lông.

2. **Nắng xiên cộng hưởng.** Sáng tạt là loại ánh sáng làm nổi tối đa mọi thứ gồ ghề trên bề mặt —
   đúng lý do đưa nó vào để khoe vân gỗ. Nhưng nó **không phân biệt**: vân gỗ nổi thì lông boucle
   cũng nổi. Vải xù + sáng tạt = xù tối đa.

**Sửa thành gì thì ăn:** trả về đúng câu bản A. Nếu vẫn xù vì còn nắng xiên thì ghì bằng **cụm bó**:
`cream boucle chairs, tight compact weave with a low even nap, slim black metal legs`
(`tight` / `compact` / `low` / `even` — đều là giới hạn, không phải khuếch đại).

---

### 05 — 2026-08-25 — Sảnh vào + bàn ăn (3ds Max/Corona) — CHƯA TEST

**Vào:** chỉ ảnh model, không có ảnh mẫu. Viewport 3ds Max `Default Shading`.
**Agent xuất:** mục "sửa trước khi bố đèn" (7 dòng) + 2 bản prompt (ấm / ban ngày)
**Test bằng:** _(chờ)_

**Ba thứ mới so với ca 01–04, cần thực tế xác nhận:**
1. **Ảnh nguồn 3ds Max có overlay viewport** (chữ tên camera + trục toạ độ) — prompt đã thêm câu
   xoá. Ảnh nguồn Kujiale/SketchUp không có thứ này → **luật mới chỉ áp cho nguồn 3ds Max**.
2. **Khung không có cửa sổ** → cố ý bỏ hẳn nắng. Xem AI có tự bịa thêm nguồn sáng/cửa sổ không.
3. **Ghế lưng mây đan rỗng** — cố ý chỉ gọi `cane-back`, không mô tả kết cấu, để kiểm luật ca 04
   (cụm nhấn → giao thừa) có đúng ở vật liệu khác không.

**Ghi chú pipeline:** đây là **3ds Max + Corona**, không phải Kujiale. Prompt AI dùng chung được;
nhưng **phiếu thông số thì không** — tên tham số Corona khác hoàn toàn Kujiale. Nếu cần phiếu
thông số cho ca này thì phải xác nhận đang render bằng gì trước.

---

## Luật đang chờ đủ bằng chứng

Ghi ở đây khi thấy một thứ **có vẻ** là luật nhưng mới gặp 1–2 lần. Đủ 3 ca thì nâng lên `references/`.

| Luật nghi ngờ | Gặp ở ca | Đã đủ 3 chưa |
|---|---|---|
| 🔴 **CHÍN — ĐỦ 3 CA. Chữa lỗi prompt bằng CỤM NHẤN thì AI luôn giao thừa.** Thấy thiếu gì thì thêm **cụm BÓ** (`tight`, `compact`, `low`, `even`, `restrained`, `subtle`) hoặc chỉ gọi đúng tên vật liệu rồi để model tự lo. Ba lần cùng một cơ chế: `raking...so texture reads clearly` → tắm cam + bịa bóng lá; `wide horizontal 16:9` → cắt mất tường cao; `visible looped fabric texture` → ghế xù lông | 02, 03, 04 | **3/3 — sẵn sàng vá vào `05-prompt-ai.md`** |
| **Sáng tạt không phân biệt bề mặt nào đáng khoe.** Bật nắng xiên để nổi vân gỗ thì đồng thời nổi luôn lông vải, sợi thảm, hạt nhiễu. Cảnh có vải xù (boucle, nhung, thảm lông) phải ghì vật liệu lại khi dùng sáng tạt | 04 | 1/3 |
| **Vân MÀU (đá bóng) không cần sáng tạt; chỉ vân NỔI + bề mặt nhám mới cần.** Tách khỏi bảng `04` §8 | 01 | 1/3 |
| Ngưỡng điểm bóng nên là **≤3 có chủ đích**, không phải cứng 1–2 | 01 | 1/3 |
| ~~Prompt phải khai tỉ lệ khung bằng lời ở khối 6~~ → **BỊ BÁC ở ca 03.** Thay bằng: **đừng gọi tên tỉ lệ trong prompt**; bảo nó `keep the same framing and crop as the source image`, còn tỉ lệ set trong cài đặt công cụ | 01, 03 | **đã chốt hướng ngược** |
| **Câu phủ định có token hình ảnh mạnh thì phản tác dụng** (`no wide-angle distortion` → vẫn ra khung rộng). Luật này đã có ở `05` §3 mà prompt tự vi phạm | 03 | 1/3 |
| Cụm `bright and airy` + `bloom` dễ đẩy cửa sổ sang cháy — cần cặp cụm ghì lại | 01 | 1/3 |
| **Đổi khối 2 sang tông ấm thì BẮT BUỘC giữ lại một mốc lạnh** (`mixed with cool daylight` / `cool blue-grey skylight fills the shadows`), không thì cả khung ám cam | 02 | 1/3 |
| **Prompt image-to-image từ model CAD phải có câu xoá nét line-art**, không thì viền đen sống sót và ảnh lộ ngay là 3D | 02 | 1/3 |
| Cụm `raking` / `long shadow` mở đường cho AI **bịa vật đổ bóng** (bóng lá cây) — cần câu cấm bịa nguồn bóng | 02 | 1/3 |
