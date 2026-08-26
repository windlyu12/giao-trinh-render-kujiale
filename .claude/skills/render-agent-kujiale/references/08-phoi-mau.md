# 08 — Phối màu nội thất: tỉ lệ, LRV, undertone, ba phương án

Nguồn gốc: `content/15-bo-phoi-mau-noi-that.md` + `content/phu-luc-f-ngan-hang-bang-mau.md`.
File này là bản rút gọn để chạy việc — cần chi tiết/nguồn thì mở hai file trên.

---

## 0. Luật nền riêng của mảng màu

Ba luật này cộng thêm vào 4 luật nền ở `SKILL.md`:

5. **Một bộ phối màu = danh sách màu KÈM diện tích từng màu.** Xuất ra mà không có tỉ lệ/diện tích thì
   chưa phải bộ phối màu, mới là mấy ô màu đẹp. Không bao giờ xuất "3 màu" chung chung.
6. **Mã hex là ALBEDO của vật liệu, không phải màu trong ảnh render.** Mọi phiếu màu phải có một dòng
   nói rõ điều này — nếu không, người dùng sẽ so mã hex với pixel ảnh render rồi báo "sai màu".
7. **Chốt CCT trước khi chốt màu.** Phiếu màu nào cũng phải ghi CCT ở đầu. Đổi CCT sau khi khách duyệt
   màu = duyệt lại từ đầu.

---

## 1. Bảy ô — khung xương của mọi phiếu màu

Tỉ lệ gốc 6:3:1 (TQ gọi 黄金比例 6:3:1, phương Tây gọi 60-30-10) chẻ xuống 7 ô đặt hàng được:

| # | Ô | Nhóm | % ⚠️ | Vật thật |
|---|---|---|---|---|
| 1 | Trần | Nền 60 | 15–20% | Sơn trần |
| 2 | Tường nền | Nền 60 | 25–35% | Sơn/giấy/tấm ốp |
| 3 | Sàn | Nền 60 | 15–20% | Gỗ/gạch/đá |
| 4 | Chủ thể | Chủ thể 30 | 15–25% | Tủ bếp, tủ áo, sofa, giường |
| 5 | Phụ trợ | Chủ thể 30 | 8–12% | Rèm, thảm, ghế đơn |
| 6 | Nhấn | Nhấn 10 | 5–8% | Gối, tranh, đèn, cây |
| 7 | **Neo tối** | Nhấn 10 | 2–5% | Chân bàn, khung kính, tay nắm |

**Ô 7 là ô hay bị bỏ nhất và cứu nhiều bộ màu nhất.** Bộ nào cũng phải có.

Biến thể tỉ lệ: **70/20/10** (tối giản, căn nhỏ) · **60/30/10** (mặc định) · **50/30/15/5** (cá tính, khó).

**Tỉ lệ đo bằng KHUNG HÌNH, không bằng mét vuông.** Cùng bộ màu, camera khác nhau ra cảm giác khác nhau —
nên chốt camera cùng lúc với chốt màu, và kiểm tỉ lệ trên đúng khung sẽ gửi khách.

---

## 2. Bốn luật kiểm — chạy trước khi xuất bất kỳ phiếu màu nào

| Luật | Ngưỡng | Trượt thì sao |
|---|---|---|
| **L1 — Trần sáng nhất** | LRV trần ≥ LRV tường | Phòng thấp xuống, ảnh nào cũng ngột |
| **L2 — Chênh tường↔sàn** | ≥ 20 điểm; tone sáng ≥ 30 | Mất chân tường, ảnh dính bệt |
| **L3 — Biên độ** | Có ít nhất một ô LRV < 10 **và** một ô > 80 | Bộ màu trôi, khách chê "nhạt" |
| **L4 — Undertone** | Mọi mảng lớn cùng phía ấm/lạnh; trộn chỉ ở ô 6 và 7 | "Từng món đẹp, ghép vào thấy đục" |

Cộng thêm **luật trắng**: không ô nào là `#FFFFFF`. Sơn trắng thật chỉ phản xạ 75–85%; giữ albedo mảng
lớn dưới ~RGB 180–200. Trắng tinh → cháy sáng, ảnh bẹt, GI loang, render lâu hơn.

### Vùng LRV ⚠️ (tham chiếu ngành)

`85+` trắng thật/trần · `65–80` tường sáng · `50–65` trung tính an toàn · `40–50` sàn gỗ tự nhiên ·
`20–39` ấm cúng/tường nhấn · `<20` neo tối, luxury tối.

LRV xấp xỉ tính từ hex bằng độ sáng tương đối (WCAG) × 100 — luôn ghi ⚠️ khi xuất.

---

## 3. Undertone — bảng chẩn

| Nhóm | Nghiêng về | Hay gặp ở |
|---|---|---|
| Ấm | vàng, đỏ, cam, nâu | kem, be, greige ấm, trắng ngà, sồi vàng |
| Lạnh | xanh dương, xanh lá, tím | ghi khói, trắng lạnh, gỗ xám tro |
| Trung tính | gần như không nghiêng | ghi thuần, trắng giấy |

**Test:** đặt cạnh mặt phẳng trắng chuẩn `#FFFFFF` không phản xạ → render nháp → so.

**Mặc định cho khách Việt:** sàn gỗ công nghiệp tông vàng-nâu (ấm) + đèn 3000–4000K → **mặc định ẤM hoặc
TRUNG TÍNH-ẤM**. Muốn làm bộ LẠNH thì **phải đổi cả sàn** — nếu sàn đã cố định là gỗ vàng, cảnh báo thẳng
rằng bộ lạnh sẽ hỏng, đừng kê rồi để người dùng tự vỡ.

**Ba cặp hỏng kinh điển** (không sửa được bằng đèn/hậu kỳ, phải đổi vật liệu):
sàn vàng-đỏ + tủ ghi-xanh · tường trắng lạnh + rèm kem ấm · đá xám lạnh + óc chó nâu đỏ.

---

## 4. CCT ăn màu

| CCT | Làm gì với màu | Cảnh báo |
|---|---|---|
| 2700–3000K | đẩy mạnh kem/vàng/đào; greige ngả hẳn be | ăn mất xanh lá/xanh dương — cây và gối xanh xỉn |
| 3500–4000K | trung tính; bắt đầu bật undertone lạnh của ghi | màu kem trông "trắng bệch" hơn ngoài đời |
| 4000K+ | bật rõ ám lạnh, ảnh crisp | da người tái, gỗ ấm mất hơi vàng; navy hết ngả tím |

Metamerism (hai màu khớp dưới đèn này, lệch dưới đèn kia) dính nặng nhất ở: **ghi, taupe, ghi-xanh,
ghi-lá, tím nhạt, mauve**.

---

## 5. Từ brief → ba phương án (quy trình xuất)

1. **Chép nguyên văn brief** khách. Không diễn giải.
2. **Dịch sang 3 khóa:**
   - Khóa 1 — Tông: SÁNG (tường LRV ≥75) / TRUNG (55–75) / TỐI (<55)
   - Khóa 2 — Undertone: ẤM / TRUNG TÍNH / LẠNH
   - Khóa 3 — Cá tính: 0 / 1 / 2 màu có sắc ngoài trung tính
3. **Mở ngân hàng F.1** lấy 3 bảng cùng khóa 1+2, khác khóa 3.
4. **Neo vào vật liệu thật** — mã sơn / vật liệu Kujiale (dòng `实时材质`, hậu tố `-4K`) / bảng mẫu xưởng.
   Ô chưa neo được → đánh dấu ⚠️ "chưa neo", **không đưa vào ảnh khách ký duyệt** (luật nền #4, C8).
5. **Chạy L1–L4 + luật trắng.** Trượt luật nào sửa ô đó, không sửa cả bảng.
6. **Quy tắc hai ô** (mục 6) → render 3 ảnh cùng camera – đèn – thông số – hậu kỳ.
7. **Đặt tên phương án theo tính cách:** A "An toàn" · B "Xu hướng/Ấm áp" · C "Cá tính". Không gọi 1-2-3.

Ba phương án là con số vàng: hai thì khách thấy bị ép, bốn trở lên thì khách đòi ghép chéo.
Khách ghép chéo → **chạy lại bước 5 trước khi gật**, vì ghép chéo là đường ngắn nhất tới lỗi undertone.

---

## 6. Quy tắc hai ô — làm 3 option không dựng lại nhà 3 lần

| Ô | Giữa 3 phương án |
|---|---|
| 1 Trần · 2 Tường · 3 Sàn · 7 Neo tối | **GIỮ NGUYÊN** |
| **4 Chủ thể** | **ĐỔI** — tạo khác biệt chính |
| 5 Phụ trợ | đổi theo ô 4 |
| **6 Nhấn** | **ĐỔI** — rẻ nhất, đổi cảm xúc mạnh nhất |

Trong Kujiale: `材质刷` (chổi vật liệu — phím M) quét đồng loạt, `定制样式刷` (phím N) cho tủ định chế.
Lưu 3 bản sao phương án, render cùng camera đã lưu.

> ⚠️ **Bẫy:** ba ảnh phải cùng thông số render + cùng hậu kỳ. Ảnh nào sáng hơn thì khách chọn ảnh đó và
> tưởng mình đang chọn màu. Luôn nhắc dòng này khi xuất phiếu 3 phương án.

---

## 7. Màu render khác màu bảng — giải thích chuẩn khi bị hỏi

1. **Albedo ≠ pixel.** Ảnh cuối = albedo × sáng chiếu vào × các lần dội.
2. **Cấm `#FFFFFF`** (xem mục 2).
3. **Color bleeding là ĐÚNG, cần có** — sàn gỗ vàng hắt vàng lên trần là thật, đừng "sửa" bằng cách bôi
   trắng lại trần. Chỉ khi ám rõ mới hạ nắng hoặc giảm bão hòa sàn.

**Ngưỡng chấp nhận:** lệch một bậc sáng-tối + chút undertone = bình thường. Lệch tới mức **đọc ra màu
khác** (kem → vàng, ghi → xanh) mới là lỗi; soi theo thứ tự **CCT → nắng → hậu kỳ → màu vật liệu**.

---

## 8. Ngân hàng 12 bảng — tra nhanh

Chi tiết 7 ô + hex + cảnh báo render từng bảng: `content/phu-luc-f-ngan-hang-bang-mau.md`.

| Mã | Tên | Tông | Undertone | Màu có sắc | CCT | Tường/Sàn LRV |
|---|---|---|---|---|---|---|
| HD-01 | Kem – sồi – be | SÁNG | Ấm | 0 | 3000K | 82 / 42 |
| HD-02 | Trắng – ghi – gỗ nhạt | SÁNG | Trung tính-lạnh | 1 | 3500–4000K | 85 / 56 |
| HD-03 | Kem – cacao – olive | SÁNG | Ấm | 1 | 3000K | 78 / 29 |
| HT-01 | Ghi khói – óc chó – đồng | TRUNG | Trung tính-ấm | 1 | 3000K | 57 / 16 |
| HT-02 | Navy – trắng – gỗ | TRUNG | Trộn có chủ đích | 2 | 3500–4000K | 77 / 40 |
| HT-03 | Đen mờ – gỗ tối – da bò | TỐI | Ấm | 1 | 2700–3000K | 8 / 10 ⚠️ |
| PC-01 | Japandi | SÁNG | Ấm | 1 | 3000K | 74 / 53 |
| PC-02 | Wabi vữa đất | TRUNG | Ấm | 0 | 2700–3000K | 64 / 35 |
| PC-03 | Tân cổ điển | SÁNG | Ấm | 2 | 3000K | 82 / 34 |
| PC-04 | Indochine | TRUNG | Ấm | 2 | 2700–3000K | 65 / 11 |
| PC-05 | Kem – hồng phấn | SÁNG | Ấm | 1 | 2700–3000K | 81 / 55 |
| PC-06 | Ghi xanh trẻ em | SÁNG | Trung tính | 2 | 3500–4000K | 82 / 59 |

**Tra theo câu khách nói:**

| Khách nói | Ba bảng |
|---|---|
| "hiện đại, tone sáng" | HD-01 · HD-02 · HD-03 |
| "ấm cúng", "như khách sạn" | HD-03 · HT-01 · PC-02 |
| "sang trọng", "tối màu" | HT-01 · HT-03 · PC-04 |
| "trẻ trung", "cá tính" | HT-02 · PC-04 · PC-06 |
| "đơn giản", "kiểu Nhật" | PC-01 · HD-01 · PC-02 |
| "nhẹ nhàng", "nữ tính" | PC-05 · PC-01 · HD-01 |
| "tân cổ điển" | PC-03 · HD-01 · HT-02 |
| "phòng cho bé" | PC-06 · PC-05 · HD-02 |

---

## 9. Chín lỗi — dùng khi chẩn một ảnh bị chê màu

| # | Lỗi | Dấu hiệu | Sửa ở đâu |
|---|---|---|---|
| 1 | Quá nhiều màu có sắc | rối | còn tối đa 2 màu có sắc |
| 2 | Nhấn rải đều | lấm tấm, "không sang" | dồn vào 2–3 cụm |
| 3 | Thiếu neo tối | bợt, "nhạt" | thêm ô 7 |
| 4 | Tường ≈ sàn LRV | mất chân tường | kéo chênh ≥20–30 |
| 5 | Lệch undertone mảng lớn | đục, bẩn | đổi hẳn 1 vật liệu |
| 6 | Trắng tinh | cháy, bẹt, GI loang | trắng có mã, albedo <~RGB 200 |
| 7 | Hai loại gỗ khác undertone | gỗ trông giả | một nhà một tông gỗ |
| 8 | Chọn màu dưới CCT khác lúc render | khách duyệt màu A nhận màu B | chốt CCT trước |
| 9 | Mỗi góc một tỉ lệ màu | "hai ảnh như hai nhà" | kiểm tỉ lệ từng khung |

**Lỗi 5 và 7 người mới không tự nhìn ra** — khi người dùng nói "thấy sai mà không biết sai đâu", soi hai
lỗi này trước.

---

## 10. Ranh giới — mảng màu dễ vượt rào nhất

- Bảng màu **chưa neo vào vật liệu thật** thì chỉ dùng cho mood board. Ảnh khách ký duyệt, ảnh kèm
  hợp đồng/báo giá, ảnh mô tả vật liệu thi công **bắt buộc** dùng vật liệu mua được (luật nền #4).
- Không hứa "màu này lên ảnh sẽ đúng như bảng". Luôn kèm dòng albedo ≠ pixel.
- Không tự ý đổi ô sàn khi người dùng đã nói sàn là nhà có sẵn — thay vào đó cảnh báo bộ màu nào
  không chạy được trên sàn đó.
