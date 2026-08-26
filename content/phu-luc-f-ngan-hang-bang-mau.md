# Phụ lục F. Ngân hàng bảng phối màu + Phiếu phối màu

Phụ lục này là **kho hàng** của C15. Chương 15 dạy cách nghĩ; phụ lục này đưa thẳng **12 bảng màu dùng được ngay**, một **bảng tra brief → bảng màu**, và **Phiếu phối màu** in ra điền.

Ba điều phải nhớ trước khi lấy bất kỳ bảng nào:

1. **Mã hex ở đây là mã VẬT LIỆU (albedo), không phải màu bạn sẽ thấy trong ảnh render.** Ảnh cuối còn phụ thuộc đèn, nắng, GI và hậu kỳ — xem C15.8.
2. **LRV in kèm là ⚠️ số xấp xỉ**, tính từ mã hex theo công thức độ sáng tương đối. Dùng để so tương quan giữa các ô trong cùng một bảng, không dùng để cãi với bảng màu của hãng sơn.
3. **Mọi bảng đều phải neo vào vật liệu thật trước khi trình khách** (C15.11). Bảng ở đây là điểm xuất phát, không phải đơn đặt hàng.

---

## F.1. Bảng tra nhanh: khách nói gì → mở bảng nào

Chốt ba khóa với khách theo C15.9 rồi tra bảng này:

| Khách nói | Khóa 1 (tông) | Khóa 2 (undertone) | Mở 3 bảng |
|---|---|---|---|
| "Hiện đại, tone sáng", "sáng sủa cho rộng" | SÁNG | ẤM hoặc TRUNG TÍNH | **HD-01 · HD-02 · HD-03** |
| "Ấm cúng", "như khách sạn", "nhìn sang" | TRUNG–TỐI | ẤM | **HD-03 · HT-01 · PC-02** |
| "Sang trọng", "đẳng cấp", "tối màu" | TỐI | ẤM | **HT-01 · HT-03 · PC-04** |
| "Trẻ trung", "cá tính", "khác người ta" | TRUNG | tùy | **HT-02 · PC-04 · PC-06** |
| "Đơn giản thôi", "ít đồ", "kiểu Nhật" | SÁNG | ẤM | **PC-01 · HD-01 · PC-02** |
| "Nhẹ nhàng", "nữ tính", "phòng cho con gái" | SÁNG | ẤM | **PC-05 · PC-01 · HD-01** |
| "Tân cổ điển", "có phào chỉ" | SÁNG–TRUNG | ẤM | **PC-03 · HD-01 · HT-02** |
| "Phòng cho bé", "vui một chút" | SÁNG | TRUNG TÍNH | **PC-06 · PC-05 · HD-02** |

> 💡 Ba bảng gợi ý luôn xếp theo thứ tự **A an toàn → B xu hướng → C cá tính** của C15.9. Cứ lấy đúng thứ tự đó mà trình.

---

## F.2. Cách đọc một bảng màu trong phụ lục này

Mỗi bảng có đúng **7 ô** của form chuẩn, kèm bốn thông tin:

| Cột | Nghĩa |
|---|---|
| **Ô** | Một trong 7 vai: Trần · Tường nền · Sàn · Chủ thể · Phụ trợ · Nhấn · Neo tối |
| **Hex** | Mã màu vật liệu (nhập vào 基础颜色 trong Kujiale) |
| **LRV ⚠️** | Độ phản xạ xấp xỉ 0–100 |
| **Vật liệu thật gợi ý** | Neo ra đời thực — loại vật liệu, không phải mã hãng (mã hãng do công ty tự điền) |

Kèm theo mỗi bảng: **CCT khuyến nghị**, **số màu có sắc** (khóa 3), **hợp khách nào**, và **cảnh báo render** — điều hay hỏng nhất khi dựng bảng đó trong Kujiale.

---

# NHÓM HD — HIỆN ĐẠI TONE SÁNG

Nhóm dùng nhiều nhất cho căn hộ Việt. Cả ba bảng đều: tường LRV ≥ 78, trần sáng nhất, chênh tường–sàn ≥ 29 điểm.

## HD-01 · Kem – sồi – be

**Hợp khách:** gia đình trẻ, căn hộ 2–3 phòng ngủ, khách nói "sáng sủa, dễ nhìn, không cầu kỳ" · **Khóa 3:** 0 màu có sắc · **CCT:** 3000K

| Ô | Hex | LRV ⚠️ | Vật liệu thật gợi ý |
|---|---|---|---|
| Trần | `#FAF7F2` | 93 | Sơn trắng ngả kem, mờ |
| Tường nền | `#EFE9E0` | 82 | Sơn kem ấm |
| Sàn | `#C8A87E` | 42 | Sàn gỗ sồi tự nhiên, vân nhẹ |
| Chủ thể (tủ) | `#E8E1D6` | 76 | Melamine trắng kem mờ (哑光) |
| Phụ trợ (rèm/sofa) | `#B4A794` | 39 | Vải linen taupe |
| Nhấn | `#8A6F4E` | 17 | Da nâu, gốm đất, mây tre |
| Neo tối | `#3B3833` | 4 | Chân kim loại sơn tĩnh điện nâu đen |

**Vì sao chạy được:** toàn bộ nằm một phía **ấm**, không có màu có sắc nào để cãi nhau. Chênh tường–sàn 40 điểm nên chân tường luôn đọc rõ.
**Cảnh báo render:** bộ này rất dễ ra **bệt trắng** nếu đẩy thiên quang cao — vì 4/7 ô nằm trên LRV 39. Bắt buộc giữ ô neo tối lộ ra trong khung hình, và đọc lại C13 về gradient sáng.

## HD-02 · Trắng – ghi – gỗ nhạt (Bắc Âu)

**Hợp khách:** khách trẻ, chuộng Scandinavian, nhà có nhiều nắng · **Khóa 3:** 1 màu có sắc (xanh rêu) · **CCT:** 3500–4000K

| Ô | Hex | LRV ⚠️ | Vật liệu thật gợi ý |
|---|---|---|---|
| Trần | `#FBFBFA` | 96 | Sơn trắng trung tính |
| Tường nền | `#EDEDEA` | 85 | Sơn trắng ngà rất nhạt |
| Sàn | `#D8C3A5` | 56 | Sàn gỗ tần bì / sồi nhạt |
| Chủ thể (tủ) | `#D6D8D5` | 68 | Melamine ghi nhạt mờ |
| Phụ trợ | `#9AA0A0` | 35 | Vải ghi, thảm len xám |
| Nhấn | `#6B7F73` | 20 | Xanh rêu nhạt: gối, tranh, cây |
| Neo tối | `#33393A` | 4 | Khung kính đen, chân bàn đen |

**Cảnh báo render:** chênh tường–sàn chỉ **29 điểm** — sát ngưỡng. Nếu sàn bị nắng chiếu sáng lên, chân tường sẽ dính. Hạ nửa bậc sáng của sàn, hoặc chọn sàn tối hơn một bậc.
**Cảnh báo undertone:** đây là bảng **trung tính-lạnh duy nhất trong nhóm HD**. Chỉ dùng khi sàn thật cũng nhạt/trung tính. Ghép bảng này lên sàn gỗ vàng đỏ là ca hỏng điển hình (C15.6).

## HD-03 · Kem – cacao – olive (xu hướng 2026)

**Hợp khách:** khách muốn "sáng nhưng phải ấm và sang", chuộng gu đang thịnh · **Khóa 3:** 1 màu có sắc (olive) · **CCT:** 3000K

| Ô | Hex | LRV ⚠️ | Vật liệu thật gợi ý |
|---|---|---|---|
| Trần | `#FBF7F1` | 93 | Sơn trắng ngà |
| Tường nền | `#EDE4D8` | 78 | Sơn kem, hoặc vữa mịn |
| Sàn | `#B08D62` | 29 | Sàn gỗ tông mật ong |
| Chủ thể (tủ) | `#6B4F3A` | 9 | Melamine vân óc chó / nâu cacao mờ |
| Phụ trợ | `#C9B79D` | 49 | Rèm kem đậm, vải bố |
| Nhấn | `#7C7F55` | 20 | Olive: gối, bình, tranh |
| Neo tối | `#2E2723` | 2 | Kim loại đen mờ |

**Vì sao chạy được:** ô chủ thể nằm ở **LRV 9** — nghĩa là tủ vừa là chủ thể vừa làm luôn nhiệm vụ neo. Bộ này có biên độ sáng-tối rộng nhất nhóm HD, lên ảnh nhìn "dày" nhất.
**Cảnh báo render:** tủ tối + tường sáng là ca dễ **cháy tường** khi kéo sáng cho tủ hiện chi tiết. Xử theo C13: đánh đèn cho tủ riêng thay vì đẩy sáng tổng.

---

# NHÓM HT — HIỆN ĐẠI TRUNG VÀ TỐI

## HT-01 · Ghi khói – óc chó – đồng

**Hợp khách:** khách nam, căn hộ cao cấp, "sang, trầm, không lòe loẹt" · **Khóa 3:** 1 màu có sắc (đồng) · **CCT:** 3000K

| Ô | Hex | LRV ⚠️ | Vật liệu thật gợi ý |
|---|---|---|---|
| Trần | `#F0EFEC` | 86 | Sơn trắng ấm |
| Tường nền | `#C9C7C2` | 57 | Sơn ghi khói, hoặc tấm ốp vân xi măng |
| Sàn | `#8A6A4B` | 16 | Sàn gỗ óc chó |
| Chủ thể (tủ/sofa) | `#5A5751` | 10 | Melamine ghi đậm mờ, nỉ ghi chì |
| Phụ trợ | `#A9A49B` | 37 | Rèm ghi sáng, thảm len |
| Nhấn | `#B08A4E` | 28 | Đồng cổ: đèn, tay nắm, viền |
| Neo tối | `#2B2A28` | 2 | Kim loại đen, kính khói |

**Cảnh báo render:** bộ tối cần **nhiều lớp đèn hơn** bộ sáng — bề mặt tối không dội sáng, phòng dễ ra "hang". Đọc kỹ C13 phần bố đèn cho không gian tối, và tăng số nguồn nhỏ thay vì tăng cường độ một nguồn.
**Mẹo:** ô nhấn đồng chỉ đẹp khi có **phản xạ nét** — kiểm 反射光泽度 của vật liệu kim loại theo C5, đừng để đồng thành nhựa vàng.

## HT-02 · Navy – trắng – gỗ

**Hợp khách:** khách thích có màu nhưng "màu người lớn"; hợp phòng làm việc, phòng ngủ nam · **Khóa 3:** 2 màu có sắc (navy + vàng đồng) · **CCT:** 3500–4000K

| Ô | Hex | LRV ⚠️ | Vật liệu thật gợi ý |
|---|---|---|---|
| Trần | `#F7F6F3` | 92 | Sơn trắng |
| Tường nền | `#E4E3DE` | 77 | Sơn trắng ngà lạnh nhẹ |
| Sàn | `#C2A57C` | 40 | Sàn gỗ sồi trung tính |
| Chủ thể (tủ) | `#2F3E52` | 5 | Melamine / sơn navy mờ |
| Phụ trợ | `#9BA6B2` | 37 | Vải ghi-xanh |
| Nhấn | `#C4A24A` | 38 | Vàng đồng: tay nắm, đèn, khung |
| Neo tối | `#1B2430` | 2 | Navy đậm gần đen, kim loại đen |

**Cảnh báo undertone:** navy là màu **lạnh**, sàn gỗ là **ấm** — đây là bộ **cố ý trộn**, và nó chỉ chạy được vì hai thứ đó không nằm cạnh nhau trên cùng mặt phẳng lớn. Nếu khách đòi thêm mảng ấm thứ ba (gạch terracotta chẳng hạn), bộ này vỡ.
**Cảnh báo render:** navy dưới đèn 3000K sẽ ngả tím và xỉn. Chốt 4000K rồi mới render, đúng luật C15.7.

## HT-03 · Đen mờ – gỗ tối – da bò

**Hợp khách:** căn hộ độc thân, studio, showroom; khách nói "chất", "cá tính mạnh" · **Khóa 3:** 1 màu có sắc (da bò) · **CCT:** 2700–3000K

| Ô | Hex | LRV ⚠️ | Vật liệu thật gợi ý |
|---|---|---|---|
| Trần | `#EAE7E1` | 80 | Sơn trắng ấm (giữ sáng để cứu phòng) |
| Tường nền | `#514F4A` | 8 | Sơn đen mờ / tấm ốp sẫm |
| Sàn | `#6E5237` | 10 | Sàn gỗ tối |
| Chủ thể | `#2A2926` | 2 | Melamine đen mờ, kim loại đen |
| Phụ trợ | `#8C8579` | 24 | Vải ghi ấm, bê tông |
| Nhấn | `#8A5A32` | 13 | Da bò: ghế, gối, dây đeo |
| Neo tối | `#141312` | 1 | Đen sâu nhất — khung, ray |

**Cảnh báo:** đây là bảng **khó nhất** trong ngân hàng, và cũng là bảng khách hay đòi rồi hối hận. Ba điều bắt buộc:
1. **Giữ trần sáng** (LRV 80) — bỏ luật này là phòng thành hầm.
2. Bộ này **ăn sáng khủng khiếp**: phải có ít nhất một mảng kính/nắng lớn, hoặc gấp đôi số nguồn đèn so với bộ sáng.
3. **Cảnh báo khách trước khi render**: phòng tối ngoài đời sẽ tối hơn ảnh render — vì render có thể đánh sáng tùy ý, đời thật thì không. Đây là ca dễ khiếu nại nhất.

---

# NHÓM PC — THEO PHONG CÁCH

## PC-01 · Japandi (Nhật – Bắc Âu)

**Hợp khách:** ít đồ, chuộng gỗ mộc và sự yên tĩnh · **Khóa 3:** 1 màu có sắc (xanh rêu trầm) · **CCT:** 3000K

| Ô | Hex | LRV ⚠️ | Vật liệu thật gợi ý |
|---|---|---|---|
| Trần | `#F6F2EA` | 89 | Sơn trắng ngà |
| Tường nền | `#E7DFD2` | 74 | Sơn kem nhạt, vữa mịn |
| Sàn | `#D6BE9B` | 53 | Gỗ sồi trắng, vân nhạt |
| Chủ thể | `#EFE9DF` | 82 | Melamine trắng kem, gỗ sồi nhạt |
| Phụ trợ | `#A79C8B` | 34 | Vải bố, cói, giấy |
| Nhấn | `#5F6B5A` | 14 | Xanh rêu trầm, gốm men |
| Neo tối | `#26241F` | 2 | Gỗ sồi nhuộm đen, thép đen mảnh |

**Cảnh báo render:** bộ này gần như **không có tương phản** ở mảng lớn (tường 74, chủ thể 82) — rất dễ ra ảnh bẹt. Cứu bằng **bóng đổ và chất bề mặt**, không bằng màu: vân gỗ nét, vải có sợi, nắng xiên tạo bóng dài (C13 phần nắng qua rèm).

## PC-02 · Wabi – vữa đất

**Hợp khách:** khách chuộng thô mộc, "không bóng bẩy", nhà có mảng tường lớn · **Khóa 3:** 0 màu có sắc · **CCT:** 2700–3000K

| Ô | Hex | LRV ⚠️ | Vật liệu thật gợi ý |
|---|---|---|---|
| Trần | `#F2ECE2` | 84 | Sơn hiệu ứng mịn |
| Tường nền | `#DCCFBE` | 64 | Vữa nghệ thuật / sơn hiệu ứng đất |
| Sàn | `#B79C7A` | 35 | Gỗ tông đất, hoặc gạch nung mờ |
| Chủ thể | `#C4B49E` | 47 | Gỗ mộc không phủ bóng, vải bố dày |
| Phụ trợ | `#9A8B78` | 27 | Vải thô, mây, gốm |
| Nhấn | `#8E6B4A` | 17 | Gốm đất nung, gỗ tối |
| Neo tối | `#3A322A` | 3 | Sắt rỉ, gỗ cháy |

**Cảnh báo render:** cả bộ dựa vào **chất bề mặt**, không dựa vào màu. Nếu vật liệu chỉ có một ảnh màu không có map lồi lõm (C5.3), bảng này lên ảnh sẽ ra "phòng be nhạt nhẽo". Bắt buộc dùng vật liệu có 凹凸 và đánh đèn xiên để vân nổi lên.

## PC-03 · Tân cổ điển nhẹ

**Hợp khách:** khách thích phào chỉ, "sang kiểu cổ điển nhưng không nặng" · **Khóa 3:** 2 màu có sắc (sage + vàng đồng) · **CCT:** 3000K

| Ô | Hex | LRV ⚠️ | Vật liệu thật gợi ý |
|---|---|---|---|
| Trần | `#FCFAF5` | 96 | Sơn trắng, phào trắng |
| Tường nền | `#EFE9DC` | 82 | Sơn kem, tấm phào ô vuông |
| Sàn | `#B99A6B` | 34 | Gỗ sồi tông vàng, hoặc đá vân nhạt |
| Chủ thể | `#F2EEE6` | 86 | Sơn trắng ngà cho hệ tủ phào |
| Phụ trợ | `#A8B4A6` | 44 | Vải sage: rèm, ghế |
| Nhấn | `#C0A15A` | 37 | Vàng đồng: tay nắm, đèn chùm, gương |
| Neo tối | `#2F3330` | 3 | Chân ghế sẫm, khung tranh |

**Cảnh báo render:** trần 96 + chủ thể 86 + tường 82 nghĩa là **ba mảng lớn nhất gần như cùng độ sáng**. Bộ này sống bằng **phào chỉ và bóng đổ của phào** — nếu model không có phào thật (C12), render ra sẽ là hộp trắng. Đây là bảng phụ thuộc model nhiều nhất trong ngân hàng.

## PC-04 · Indochine

**Hợp khách:** khách yêu chất Việt/Đông Dương, nhà phố, biệt thự · **Khóa 3:** 2 màu có sắc (xanh lá trầm + đỏ gạch) · **CCT:** 2700–3000K

| Ô | Hex | LRV ⚠️ | Vật liệu thật gợi ý |
|---|---|---|---|
| Trần | `#F3EDE1` | 85 | Sơn kem, trần gỗ nan |
| Tường nền | `#E0D2B8` | 65 | Sơn kem đậm, hoặc gạch bông ốp chân |
| Sàn | `#7A5334` | 11 | Gỗ tự nhiên tối, gạch bông |
| Chủ thể | `#3E5140` | 7 | Xanh lá trầm: tủ, cửa, khung |
| Phụ trợ | `#B9A176` | 37 | Mây tre đan, vải bố |
| Nhấn | `#9C4A2F` | 12 | Đỏ gạch, gốm, sơn mài |
| Neo tối | `#241C15` | 1 | Gỗ đen, sắt uốn |

**Cảnh báo render:** bảng nhiều màu nhất ngân hàng (2 màu có sắc + gỗ tối). Bắt buộc **dồn nhấn đỏ gạch vào 2–3 cụm** (C15.12 lỗi 2), rải đều là hỏng ngay. Hoa văn gạch bông cần texture đúng khổ thật, đừng để lặp vân (C10).

## PC-05 · Kem – hồng phấn

**Hợp khách:** phòng ngủ nữ, phòng con gái, khách nói "nhẹ nhàng, nữ tính" · **Khóa 3:** 1 màu có sắc (hồng phấn) · **CCT:** 2700–3000K

| Ô | Hex | LRV ⚠️ | Vật liệu thật gợi ý |
|---|---|---|---|
| Trần | `#FDFAF7` | 96 | Sơn trắng ấm |
| Tường nền | `#F2E6E0` | 81 | Sơn hồng phấn rất nhạt |
| Sàn | `#D9BFA3` | 55 | Gỗ sồi nhạt tông ấm |
| Chủ thể | `#EADAD2` | 72 | Melamine hồng kem mờ |
| Phụ trợ | `#C9A9A0` | 43 | Vải hồng trầm, nhung |
| Nhấn | `#8E6E63` | 18 | Nâu hồng, đồng hồng |
| Neo tối | `#3A302C` | 3 | Kim loại nâu đen |

**Cảnh báo render:** bộ toàn LRV cao — **rất dễ ra ảnh trắng bệch, mất hết sắc hồng**. Hai cách chặn: (1) giữ nhấn và neo lộ rõ trong khung; (2) đừng đẩy thiên quang cao, để bóng mềm giữ lại sắc (C13). Hồng phấn dưới đèn 4000K sẽ ngả tím tái — giữ đúng 2700–3000K.

## PC-06 · Ghi xanh – gỗ nhạt (phòng trẻ em)

**Hợp khách:** phòng bé trai/bé gái trung tính, khách không muốn "quá trẻ con" · **Khóa 3:** 2 màu có sắc (ghi xanh + cam vàng) · **CCT:** 3500–4000K

| Ô | Hex | LRV ⚠️ | Vật liệu thật gợi ý |
|---|---|---|---|
| Trần | `#FBFCFC` | 97 | Sơn trắng |
| Tường nền | `#E3EBEC` | 82 | Sơn ghi xanh rất nhạt |
| Sàn | `#DCC7A8` | 59 | Gỗ nhạt, hoặc sàn nhựa vân gỗ |
| Chủ thể | `#C7D6D8` | 65 | Melamine ghi xanh nhạt |
| Phụ trợ | `#93A9AC` | 38 | Vải ghi xanh đậm hơn |
| Nhấn | `#E0A24A` | 42 | Cam vàng: đồ chơi, tranh, đèn |
| Neo tối | `#2F3B3D` | 4 | Khung giường, tay nắm sẫm |

**Cảnh báo render:** chênh tường–sàn 23 điểm, chủ thể 65 sát sàn 59 — bộ này **thiếu tương phản ở mảng lớn** như PC-01. Cứu bằng ô nhấn cam vàng (LRV 42, màu có sắc mạnh) và ô neo. Phòng trẻ em vốn nhiều đồ nhỏ nhiều màu — **đếm lại số màu có sắc sau khi bày đồ**, rất dễ vọt từ 2 lên 5 mà không ai để ý (C11 về bày đồ).

---

## F.3. Bảng đối chiếu nhanh 12 bảng màu

| Mã | Tên | Tông | Undertone | Màu có sắc | CCT | LRV tường | LRV sàn | Chênh |
|---|---|---|---|---|---|---|---|---|
| HD-01 | Kem – sồi – be | SÁNG | Ấm | 0 | 3000K | 82 | 42 | 40 |
| HD-02 | Trắng – ghi – gỗ nhạt | SÁNG | Trung tính-lạnh | 1 | 3500–4000K | 85 | 56 | 29 |
| HD-03 | Kem – cacao – olive | SÁNG | Ấm | 1 | 3000K | 78 | 29 | 49 |
| HT-01 | Ghi khói – óc chó – đồng | TRUNG | Trung tính-ấm | 1 | 3000K | 57 | 16 | 41 |
| HT-02 | Navy – trắng – gỗ | TRUNG | Trộn có chủ đích | 2 | 3500–4000K | 77 | 40 | 37 |
| HT-03 | Đen mờ – gỗ tối – da bò | TỐI | Ấm | 1 | 2700–3000K | 8 | 10 | 2 ⚠️ |
| PC-01 | Japandi | SÁNG | Ấm | 1 | 3000K | 74 | 53 | 21 |
| PC-02 | Wabi vữa đất | TRUNG | Ấm | 0 | 2700–3000K | 64 | 35 | 29 |
| PC-03 | Tân cổ điển | SÁNG | Ấm | 2 | 3000K | 82 | 34 | 48 |
| PC-04 | Indochine | TRUNG | Ấm | 2 | 2700–3000K | 65 | 11 | 54 |
| PC-05 | Kem – hồng phấn | SÁNG | Ấm | 1 | 2700–3000K | 81 | 55 | 26 |
| PC-06 | Ghi xanh trẻ em | SÁNG | Trung tính | 2 | 3500–4000K | 82 | 59 | 23 |

> ⚠️ **HT-03 chênh 2 điểm** là ngoại lệ cố ý: tường tối và sàn tối gần bằng nhau. Bộ này không tách tường–sàn bằng độ sáng mà tách bằng **chất** (tường mờ lì vs sàn gỗ có vân và phản xạ nhẹ) và bằng **ánh sáng hắt chân tường**. Đây là ca duy nhất trong ngân hàng được phép phá luật LRV số 2 — và chỉ chạy được nếu bố đèn đủ giỏi.

---

## F.4. PHIẾU PHỐI MÀU — form chuẩn công ty

In ra, hoặc copy phần dưới vào file mới cho từng công trình. Một phiếu cho **một phòng**.

```
════════════════════════════════════════════════════════════
PHIẾU PHỐI MÀU
Công trình: ..................... Phòng: .....................
Người làm: ..................... Ngày: .......................
Bảng gốc lấy từ Phụ lục F: ............ (hoặc: tự dựng)
════════════════════════════════════════════════════════════

【0】 BRIEF KHÁCH — chép nguyên văn
"................................................................"
Ảnh mood khách gửi:  □ có (đính kèm)   □ không

【1】 BA KHÓA
Khóa 1 — Tông:        □ SÁNG (tường LRV ≥75)  □ TRUNG (55–75)  □ TỐI (<55)
Khóa 2 — Undertone:   □ ẤM   □ TRUNG TÍNH   □ LẠNH
Khóa 3 — Cá tính:     □ 0 màu có sắc   □ 1 màu   □ 2 màu
CCT đèn đã chốt:      □ 2700–3000K   □ 3500–4000K   □ 4000K+
                      (chốt CCT TRƯỚC khi chốt màu — C15.7)

【2】 BẢY Ô
┌───┬──────────────┬──────────┬─────┬────────┬──────────────────────┐
│ # │ Ô            │ Hex      │ LRV │ % ước  │ Vật liệu thật + mã   │
├───┼──────────────┼──────────┼─────┼────────┼──────────────────────┤
│ 1 │ Trần         │ #        │     │ 15–20% │                      │
│ 2 │ Tường nền    │ #        │     │ 25–35% │                      │
│ 3 │ Sàn          │ #        │     │ 15–20% │                      │
│ 4 │ Chủ thể      │ #        │     │ 15–25% │                      │
│ 5 │ Phụ trợ      │ #        │     │  8–12% │                      │
│ 6 │ Nhấn         │ #        │     │   5–8% │                      │
│ 7 │ Neo tối      │ #        │     │   2–5% │                      │
└───┴──────────────┴──────────┴─────┴────────┴──────────────────────┘
Ô chưa neo được vào vật liệu thật: ..........................  ⚠️

【3】 BA LUẬT KIỂM — không qua được thì không gửi khách
□ LRV trần ≥ LRV tường                          (trần: ....  tường: ....)
□ Chênh LRV tường ↔ sàn ≥ 20 (tone sáng: ≥30)   (chênh: ....)
□ Có ô LRV <10 và ô LRV >80                     (thấp nhất: ....  cao nhất: ....)
□ Mọi mảng lớn cùng phía undertone
□ Không ô nào là #FFFFFF
□ Số màu có sắc = đúng khóa 3 đã chốt

【4】 BA PHƯƠNG ÁN TRÌNH KHÁCH — quy tắc hai ô (C15.10)
Giữ nguyên: ô 1, 2, 3, 7      Đổi: ô 4 (chủ thể) + ô 6 (nhấn)

        │ Ô 4 — Chủ thể        │ Ô 6 — Nhấn
────────┼──────────────────────┼──────────────────────
A An toàn│ #                    │ #
B Xu hướng│ #                   │ #
C Cá tính│ #                    │ #

Render 3 ảnh:  □ cùng camera  □ cùng đèn  □ cùng thông số render  □ cùng hậu kỳ

【5】 KẾT QUẢ
Khách chọn: □ A   □ B   □ C   □ ghép: .........................
Nếu ghép chéo → đã chạy lại mục 【3】?  □ rồi
Ngày khách duyệt: ............  Người xác nhận: ...............
════════════════════════════════════════════════════════════
```

> 📌 **Phiếu này là hồ sơ, không phải giấy nháp.** Lưu cùng bộ ảnh đã gửi khách. Khi khách đổi ý sau ba tháng ("sao màu tủ nhìn khác ảnh?"), phiếu là thứ trả lời được — có mã màu, có CCT, có ngày duyệt.

---

## F.5. Cách thêm bảng mới vào ngân hàng

Ngân hàng này **phải lớn dần theo công trình công ty làm**, đúng như Phụ lục E lớn dần theo ca đánh đèn. Quy tắc thêm:

1. **Chỉ thêm bảng đã render thật và khách đã duyệt** — không thêm bảng lấy từ Pinterest chưa qua tay.
2. Điền đủ **7 ô + LRV + CCT + số màu có sắc**, đúng khuôn F.2. Thiếu ô thì chưa thêm.
3. Viết **một dòng "hợp khách nào"** — đây là thứ giúp người sau tra được.
4. Viết **một dòng cảnh báo render** — chỗ chính bạn đã vấp khi làm bảng đó. Dòng này giá trị nhất.
5. Đặt mã theo nhóm: `HD-xx` (hiện đại sáng), `HT-xx` (hiện đại trung/tối), `PC-xx` (theo phong cách).
6. Cập nhật bảng đối chiếu F.3 và bảng tra brief F.1.

> 💡 Mục tiêu sau một năm: **25–30 bảng**, trong đó ít nhất một nửa là bảng của chính công ty đã thi công thật — kèm ảnh render và ảnh chụp thực tế đặt cạnh nhau. Lúc đó ngân hàng này quý hơn mọi bài phối màu trên mạng, vì nó biết màu nào *lên ảnh* thế nào và màu nào *ra công trình* thế nào.
