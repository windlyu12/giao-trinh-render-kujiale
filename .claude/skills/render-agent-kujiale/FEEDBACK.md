# Sổ phản hồi — tích trước, sửa skill sau

> 🚫 **LUẬT SỐ MỘT khi xuất kết quả: prompt phải ĐẦY ĐỦ, dán là chạy. Cấm xuất mảnh.**
> Đã vá vào `SKILL.md` mục "Khuôn xuất" và `05` §0 Luật 1 sau khi người dùng phàn nàn phải ghép tay
> qua 6 ca liền.

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
**Test bằng:** bản A — kết quả ở ca 06 bên dưới

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

### 06 — 2026-08-25 — CA2 bản A, kết quả test

**Kết quả:** ánh sáng **ăn**. Nhưng người dùng: *"nhìn kĩ thấy vật liệu cảm giác rất nhựa"*

**✅ BA DỰ ĐOÁN CỦA CA 05 ĐÚNG CẢ BA:**
1. Câu xoá overlay viewport **ăn** — sạch chữ `[Corona Camera015]` và trục toạ độ
2. AI **không bịa thêm cửa sổ** dù khung không có ô kính nào → bỏ nắng là quyết định đúng
3. Ghế mây chỉ gọi `cane-back`, không mô tả kết cấu → **ra đúng chất đan, không xù**
   → **luật "cụm bó thay cụm nhấn" (ca 04) đứng vững ở vật liệu thứ hai**

**❌ VẬT LIỆU RA NHỰA — bốn nguyên nhân:**

1. **Prompt chưa bao giờ nhắc tới tì vết. Một chữ cũng không** — qua cả 5 bản prompt đã viết.
   **`05-prompt-ai.md` CÓ SẴN hàng 22** (`realistic material imperfections`, `worn edges, dust,
   fingerprints, subtle scratches`) mà chưa dùng lần nào. **Skill biết, người soạn quên.**
   Đang phạm đúng hạng 3 (vật liệu sạch tuyệt đối) và hạng 4 (vật liệu lì) của bảng 12.
2. **`physically based materials` nghi phản tác dụng** — thuật ngữ engine render, đẩy model về phía
   "sạch, đúng kỹ thuật" = đúng vẻ CG. ⚠️ suy đoán, chưa test riêng.
3. **`soft specular highlights` làm mọi bề mặt bóng đều như nhau.** Phòng thật chênh dữ dội giữa
   sơn mờ / gỗ dầu / mây đan / gốm men.
4. **Khối 5 chỉ LIỆT KÊ vật liệu, không tả BỀ MẶT.** "matte cream lacquer" là gọi tên món hàng.

**🔑 Quan sát giá trị nhất — trong cùng một ảnh:**
**Sàn xương cá ra rất tốt. Cánh tủ trắng ra nhựa nhất.**
Khác nhau: sàn có vân đậm + biến thiên giữa từng thanh → AI có thứ để bám.
Cánh tủ trắng phẳng lì đều màu → không có gì bám, mặc định của nó là bề mặt hoàn hảo.
→ **Bề mặt càng TRƠN và càng ĐỀU MÀU thì càng phải tả riêng.** Console cong, khung ghế gỗ nhạt,
đệm ngồi cũng dính đúng lỗi này.

**⚠️ CHẨN ĐOÁN TRÊN CHƯA ĐỦ — người dùng nói rõ thêm:**
*"cả 2 prompt đều gây cảm giác nhựa, **bề mặt ẢNH như phủ 1 lớp nhựa**"*

Không phải lỗi từng vật liệu. Là **lỗi tầng TOÀN ẢNH**. Bốn thứ cộng lại thành "lớp phủ":

| Thứ | Biểu hiện | Neo vào bảng 12 |
|---|---|---|
| **Mất chi tiết tần số cao** | Không một mm nào của ảnh có vi chi tiết. Diffusion model làm mượt đều toàn khung | hạng 11 — sạch mịn quá mức |
| **Dải tông quá hẹp** | Gần như không có vùng tối thật. Trần sáng đều, mọi thứ nằm trong một dải trung gian | hạng 2 — không dám để tối · hạng 10 — phẳng và xám |
| **Ám ấm đều toàn khung** | Một sắc kem phủ lên tất cả → mắt đọc là "lớp phủ"/filter | hạng 9 — hậu kỳ quá tay |
| **Không có khuyết tật ống kính** | Không tối góc, không mềm rìa, không quang sai, **không hạt** | hạng 12 — thiếu khuyết tật ống kính |

**🔑 `subtle film grain` KHÔNG ĂN.** Đã viết trong cả 5 bản prompt, ảnh ra không có hạt nào đọc được.
→ **Tinh chỉnh luật ca 04:** cụm bó ghì được *liều lượng*, nhưng **bó quá thì thứ đó biến mất hẳn**.
`subtle` đã bó grain xuống 0. Phải bó *tính chất* mà vẫn khẳng định *sự hiện diện*:
`fine grain visible across the whole frame` — `fine` là bó, `visible` là ép có.

**🔑 Kết luận quan trọng nhất: đây KHÔNG phải bài toán prompt thuần.**
C14 của giáo trình đã có sẵn bộ đồ nghề chống "nhựa" — đường cong chữ S, hạt nhiễu, tối góc —
và cả ba đều là **bước HẬU KỲ, không phải bước prompt**. Nguyên văn C14: *"nghịch lý nghề render:
thêm một tí nhiễu ảnh lại thật hơn"*. Suốt 6 ca vừa rồi tao cứ cố ép AI làm việc đó trong prompt,
là chỗ kém tin cậy nhất để làm.

**Sửa thành gì thì ăn:** bản A3 (prompt) **+ bắt buộc một vòng hậu kỳ 2 phút theo C14**.

---

### 07 — 2026-08-25 — CA2 bản A3, kết quả test

**Kết quả:** **vật liệu ăn rõ. Grain và vignette vẫn KHÔNG ăn.**

**✅ Ăn — khối 5+6 viết lại có tác dụng thật:**
| Thứ | Trước (bản A) | Sau (A3) |
|---|---|---|
| Cánh tủ trắng | Nhựa nhất khung, phẳng lì đều màu | Có sheen biến thiên, đọc ra sơn mờ |
| Ghế mây | Ra chất nhưng hơi mượt | Mắt đan hiện rõ, ra đúng rattan thật |
| Console cong | Như đúc khuôn nhựa | Vân gỗ có chiều, bề mặt satin có hướng |
| Tường | Trơn | Đọc ra chất phấn/matte |
| Cân bằng trắng | Ám kem toàn khung | Cánh tủ đọc ra gần-trắng — **`Neutral white balance` ĂN** |

→ **Xác nhận:** tả **bề mặt** thay vì liệt kê **tên vật liệu**, và cho mỗi vật liệu một mức bóng riêng,
là đòn ăn nhất với cảm giác nhựa ở tầng vật liệu.
→ **Xác nhận:** bỏ `physically based materials` + `soft specular highlights` không gây hại, có lợi.

**❌ KHÔNG ăn — và đây là kết quả quan trọng nhất của ca này:**

| Yêu cầu trong prompt | Kết quả |
|---|---|
| `fine grain visible across the whole frame` | **Không có hạt nào đọc được.** Ảnh vẫn mịn tuyệt đối |
| `a gentle vignette at the corners` | Không thấy tối góc |
| `faint chromatic fringing` | Không thấy |
| `Let parts of the frame sit in genuine shadow` | Chỉ ăn một phần — trần vẫn sáng đều, không có vùng tối thật |

**🔑 Grain đã thử HAI cách phát biểu, cả hai đều ra 0:**
- `subtle film grain` (5 bản prompt) → 0
- `fine grain **visible** across the whole frame` (1 bản) → vẫn 0

→ **Luật 3 của `05` §0 được xác nhận bằng thực nghiệm, không còn là suy đoán:**
**tầng "lớp phủ" của ảnh (hạt · tối góc · quang sai · vi chi tiết) KHÔNG prompt được ở model này.**
Sửa `visible` không cứu được. **Đây là việc của hậu kỳ, chấm hết.**
Ngược lại, tầng **vật liệu** thì prompt được rất tốt — hai tầng này phải tách bạch khi chẩn đoán.

**Lỗi phụ — regression staging:** `one pair of shoes turned slightly out of line` ăn ở bản A,
**mất ở A3**. Giày lại xếp thẳng hàng. Nghi do khối 5 dài thêm nhiều làm loãng câu staging.

**Sửa thành gì thì ăn:** A3 là **bản giữ** cho phần vật liệu. Phần còn lại chuyển hẳn sang hậu kỳ.

---

### 08 — 2026-08-25 — CA3: phòng khách hẹp, ảnh ĐÃ RENDER — chấm + prompt sửa lỗi (CHƯA TEST)

**Vào:** một ảnh render đã hoàn thiện (không phải model). Việc: chấm rồi sửa lỗi bằng AI.
**Chấm:** 31/50, hai tiêu chí ≤2 (cửa sổ cháy = 1 · phản chiếu = 2).

**Kiểu ca MỚI, chưa có trong skill:** ba ca trước đều là *model chưa render → ảnh*.
Ca này là *ảnh đã render → sửa lỗi*. Chế độ D (chấm) và chế độ C (prompt) phải nối vào nhau,
mà `SKILL.md` hiện **không mô tả đường nối đó**.

**Phát hiện đáng vá:** khi sửa ảnh đã render bằng AI, phải tách rõ **ba nhóm lỗi**:
| Nhóm | Ví dụ ở ca này | Ai sửa |
|---|---|---|
| **Pixel** — sửa được bằng prompt | cửa sổ cháy, thiếu bóng tiếp xúc, tủ lạnh chết, vân gỗ lặp | AI |
| **Khung hình** — không sửa được bằng prompt | đèn chùm cắt ngang đỉnh, mép phải lạc | Render lại hoặc crop |
| **Lớp phủ** — không sửa được bằng prompt (ca 07) | mịn tuyệt đối, không hạt | Hậu kỳ |

Không tách ba nhóm này thì người dùng chạy prompt xong vẫn thấy lỗi và tưởng prompt hỏng.

⚠️ **Rủi ro pháp lý riêng của kiểu ca này:** "recover cửa sổ cháy" = bảo AI **vẽ ra cảnh ngoài
chưa từng tồn tại**. Ảnh mood thì được; ảnh giao khách thì đúng thứ C8 cấm.

---

### 09 — 2026-08-25 — CA2 A3: kỹ thuật bắt lỗi LOGIC TRUYỀN SÁNG

**Nguồn feedback:** kỹ thuật nội bộ, khoanh đỏ trực tiếp lên ảnh.

**Nguyên văn:** *"2 chỗ này vốn dĩ độ tối phải tương đương nhưng sao 2 cánh bé kia lại sẫm hơn hẳn,
cái chỗ tối nhất phải là cái tường trên cửa chứ không phải 2 cái cánh bé đó"*

**Sự việc:** hai cánh tủ nhỏ phía trên hõm vòm **cùng mặt phẳng, cùng vật liệu, cùng cao độ**
với mảng cánh lớn bên trái — nhưng AI vẽ chúng **sẫm hơn hẳn**. Trong khi mảng đáng tối nhất
(tường trên cửa vào, xa đèn âm trần nhất, không nhận hắt từ đâu) lại **sáng hơn**.
Trật tự sáng–tối bị **đảo ngược cục bộ**.

**Vì sao AI làm thế — nó KHÔNG tính truyền sáng.** Nó vẽ theo thói quen thị giác học được:
1. **Tối vùng sát nguồn sáng mạnh để nguồn đó nổi lên** — hõm vòm ngay dưới đang phát sáng ấm,
   nên nó dìm vùng ngay trên xuống. Đây là thủ pháp nhiếp ảnh học vẹt, không phải vật lý.
2. **Đọc nhầm là hõm.** Cụm cánh nhỏ nằm trên một hốc → nó suy cả cụm đó thụt vào → tối đi.
3. Không có cơ chế nào ép nó giữ **nhất quán độ sáng giữa các bề mặt đồng phẳng đồng chất**.

## 🔴 NHÓM LỖI THỨ TƯ — chưa có trong bảng ba nhóm của ca 08

| Nhóm | Sửa được bằng | Ghi chú |
|---|---|---|
| 1. **Pixel** | prompt | cửa sổ cháy, bóng tiếp xúc, phản chiếu chết |
| 2. **Khung hình** | render lại / crop | đèn cắt đỉnh, mép lạc |
| 3. **Lớp phủ** | hậu kỳ | hạt, tối góc, vi chi tiết (ca 07) |
| 4. **🆕 LOGIC TRUYỀN SÁNG** | **prompt ghì được một phần, KHÔNG đảm bảo** | trật tự sáng–tối giữa các bề mặt, đổ bóng liên vùng, hắt sáng |

**Cách ghì bằng prompt:** khai báo **trật tự sáng–tối TUYỆT ĐỐI và tương quan giữa các bề mặt cụ thể**
— "cụm A sáng bằng cụm B", "vùng tối nhất khung là X". Model theo được câu tương quan tường minh
tốt hơn nhiều so với để nó tự suy. **Nhưng mong manh** — không có bộ giải ánh sáng thì không có gì bảo đảm.

## 🔑 Hệ quả lớn nhất — bổ sung một lý do MỚI cho ranh giới C8

Từ trước tới giờ lý do cấm ảnh AI ở hồ sơ chốt là **pháp lý**: AI bịa vân, bịa màu → `货不对板`.
Ca này thêm một lý do **kỹ thuật, độc lập với pháp lý**:

> **Ảnh AI sai logic ánh sáng, và người có nghề nhìn ra trong vài giây.**
> Không phải sai đẹp/xấu — sai vật lý. Một designer hay một kỹ thuật viên soi ảnh sẽ bắt được,
> và uy tín mất ngay tại chỗ đó.

Ngược lại: **đây chính là thứ render engine làm đúng miễn phí**, vì nó thật sự giải truyền sáng.
→ Ảnh nào có người trong nghề sẽ soi → **render, đừng AI.** AI chỉ để dò không khí và mood.

---

## Luật đang chờ đủ bằng chứng

Ghi ở đây khi thấy một thứ **có vẻ** là luật nhưng mới gặp 1–2 lần. Đủ 3 ca thì nâng lên `references/`.

| Luật nghi ngờ | Gặp ở ca | Đã đủ 3 chưa |
|---|---|---|
| ✅ **ĐÃ VÁ vào `05` §0 Luật 2.** Chữa lỗi prompt bằng CỤM NHẤN thì AI luôn giao thừa. Thấy thiếu gì thì thêm **cụm BÓ** (`tight`, `compact`, `low`, `even`, `restrained`, `subtle`) hoặc chỉ gọi đúng tên vật liệu rồi để model tự lo. Ba lần cùng một cơ chế: `raking...so texture reads clearly` → tắm cam + bịa bóng lá; `wide horizontal 16:9` → cắt mất tường cao; `visible looped fabric texture` → ghế xù lông | 02, 03, 04 | **3/3 — sẵn sàng vá vào `05-prompt-ai.md`** |
| ✅✅ **ĐÃ VÁ + ĐÃ XÁC NHẬN BẰNG THỰC NGHIỆM (ca 07).** Grain thử 2 cách phát biểu đều ra 0. Tầng "lớp phủ" (hạt/tối góc/quang sai) **không prompt được**; tầng **vật liệu** thì prompt được rất tốt — phải tách bạch hai tầng khi chẩn đoán | 01, 02, 06, 07 | **đã vá** |
| ✅ **ĐÃ VÁ vào `05` §0 Luật 3.** "Lớp nhựa phủ toàn ảnh" không sửa được bằng prompt thuần. Bộ đồ nghề chống nhựa của C14 (curve S · hạt nhiễu · tối góc) đều là bước HẬU KỲ. Mọi bản prompt phải kèm công thức hậu kỳ, không được coi ảnh AI là bản cuối | 01, 02, 06 | **3/3 — sẵn sàng vá** |
| ✅ **ĐÃ VÁ vào `05` §0 Luật 2.** Bó quá thì thứ đó biến mất. `subtle film grain` viết 5 bản, grain ra bằng 0. Bó *tính chất* nhưng phải ép *sự hiện diện*: `fine grain visible across the whole frame`. Đây là tinh chỉnh của luật ca 04, không phải bác | 02, 04, 06 | **3/3 — sẵn sàng vá** |
| ✅ **ĐÃ VÁ vào `05` §0 (Hệ quả).** Prompt phải có tì vết ở khối 5. Hàng 22 của bảng 26 cụm có sẵn trong skill mà chưa dùng lần nào. Không có nó thì vật liệu ra nhựa (hạng 3+4 bảng 12) | 02, 06 | 2/3 |
| ✅ **ĐÃ VÁ vào `05` §0 (Hệ quả).** Bề mặt càng TRƠN + ĐỀU MÀU thì AI càng ra nhựa (cánh tủ trắng, console sơn, khung ghế nhạt). Bề mặt có vân đậm/biến thiên thì ra tốt (sàn xương cá). → phải tả riêng nhóm trơn-đều | 06 | 1/3 |
| ✅ **ĐÃ VÁ vào `05` §0.** `physically based materials` nghi đẩy về vẻ CG — thuật ngữ engine render. Thử bỏ hẳn | 06 | 1/3 |
| ✅ **ĐÃ VÁ vào `05` §0 (Hệ quả).** Khối 6 tả mức bóng khác nhau giữa các vật liệu, không dùng một cụm `soft specular highlights` cho tất cả | 06 | 1/3 |
| **Công thức 6 khối không có ô nào BẮT BUỘC tì vết** — khối 5 là "vật liệu + staging" nhưng không gì ép. Cân nhắc thêm bước soát trước khi xuất prompt | 06 | 1/3 |
| 🔴 **NHÓM LỖI THỨ TƯ: logic truyền sáng.** AI không giải truyền sáng → trật tự sáng–tối đảo ngược giữa các bề mặt đồng phẳng đồng chất. Ghì được bằng cách khai báo tương quan tường minh, nhưng KHÔNG đảm bảo. Thêm lý do **kỹ thuật** (độc lập với pháp lý) cho ranh giới C8 | 09 | 1/3 |
| **Kiểu ca "ảnh đã render → sửa lỗi" cần đường nối D→C trong SKILL.md**, và phải tách ba nhóm lỗi: pixel (AI sửa) · khung hình (render lại/crop) · lớp phủ (hậu kỳ) | 08 | 1/3 |
| **Sáng tạt không phân biệt bề mặt nào đáng khoe.** Bật nắng xiên để nổi vân gỗ thì đồng thời nổi luôn lông vải, sợi thảm, hạt nhiễu. Cảnh có vải xù (boucle, nhung, thảm lông) phải ghì vật liệu lại khi dùng sáng tạt | 04 | 1/3 |
| **Vân MÀU (đá bóng) không cần sáng tạt; chỉ vân NỔI + bề mặt nhám mới cần.** Tách khỏi bảng `04` §8 | 01 | 1/3 |
| Ngưỡng điểm bóng nên là **≤3 có chủ đích**, không phải cứng 1–2 | 01 | 1/3 |
| ~~Prompt phải khai tỉ lệ khung bằng lời ở khối 6~~ → **BỊ BÁC ở ca 03.** Thay bằng: **đừng gọi tên tỉ lệ trong prompt**; bảo nó `keep the same framing and crop as the source image`, còn tỉ lệ set trong cài đặt công cụ | 01, 03 | **đã chốt hướng ngược** |
| **Câu phủ định có token hình ảnh mạnh thì phản tác dụng** (`no wide-angle distortion` → vẫn ra khung rộng). Luật này đã có ở `05` §3 mà prompt tự vi phạm | 03 | 1/3 |
| Cụm `bright and airy` + `bloom` dễ đẩy cửa sổ sang cháy — cần cặp cụm ghì lại | 01 | 1/3 |
| **Đổi khối 2 sang tông ấm thì BẮT BUỘC giữ lại một mốc lạnh** (`mixed with cool daylight` / `cool blue-grey skylight fills the shadows`), không thì cả khung ám cam | 02 | 1/3 |
| **Prompt image-to-image từ model CAD phải có câu xoá nét line-art**, không thì viền đen sống sót và ảnh lộ ngay là 3D | 02 | 1/3 |
| Cụm `raking` / `long shadow` mở đường cho AI **bịa vật đổ bóng** (bóng lá cây) — cần câu cấm bịa nguồn bóng | 02 | 1/3 |
