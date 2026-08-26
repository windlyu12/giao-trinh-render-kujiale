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

**Cảnh báo render:** bảng nhiều màu nhất ngân hàng (2 màu có sắc + gỗ tối). Bắt buộc **dồn nhấn đỏ gạch vào 2–3 cụm** (C15.13 lỗi 2), rải đều là hỏng ngay. Hoa văn gạch bông cần texture đúng khổ thật, đừng để lặp vân (C10).

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

---

## F.6. Ô 2 — thang trắng tường cho thị trường Việt

Gần như 100% công trình của công ty sơn tường **trắng hoặc gần trắng**. Nên ô 2 không phải là bài toán "chọn màu gì" mà là **"chọn trắng nào"** — và câu trả lời quyết bởi **undertone của gỗ** ở ô 3/ô 4, không quyết bởi sở thích.

### Năm loại trắng — chọn theo gỗ, không chọn theo cảm giác

⚠️ Mã hex dưới đây là **mã tham chiếu của sách** để dựng trong Kujiale, **không phải mã của hãng sơn nào**. Cột cuối để công ty điền mã hãng thật sau khi đối chiếu bảng màu giấy.

| Loại trắng | Hex tham chiếu | LRV ⚠️ | Undertone | Đi với gỗ nào | Mã hãng thật (điền) |
|---|---|---|---|---|---|
| **Trắng thuần** | `#FAFAFA` | 96 | Không | Chỉ khi cần trần trắng tuyệt đối, hoặc phòng tắm/kho | |
| **Trắng lạnh** (ngả xám-xanh) | `#F0F2F3` | 89 | Lạnh | Gỗ xám tro, gỗ tẩy trắng, bộ ghi-lạnh | |
| **Trắng trung tính** | `#F2F1EE` | 90 | Rất nhẹ, gần trung tính | **An toàn nhất** — chạy được với hầu hết gỗ | |
| **Trắng ngà / trắng sứ** | `#F5F2EA` | 89 | Ấm nhẹ | Sồi vàng, tần bì, gỗ mật ong — **gu phổ biến nhất VN** | |
| **Kem** | `#EFE9E0` | 82 | Ấm rõ | Gỗ ấm đậm, óc chó, bộ kem-cacao | |

**Luật chọn trong mười giây:**

```
Gỗ ngả VÀNG/ĐỎ  → trắng ngà, hoặc kem nếu muốn ấm hơn
Gỗ ngả XÁM/TRO  → trắng lạnh, hoặc trắng trung tính
Không chắc gỗ ngả gì → trắng trung tính (không bao giờ sai hẳn)
```

> ⚠️ **Về mã bán chạy nhất thị trường (Jotun 9918 "Morning Fog"):** đây là mã trắng được dùng nhiều nhất trong nhà ở Việt Nam. Nhưng các nguồn mô tả nó **chỏi nhau** — nơi gọi là *trắng lạnh ngả xám nhẹ*, nơi gọi là *undertone vàng-xám*. Sách **không chốt** undertone của mã này. Cách xử lý đúng: lấy mẫu sơn thật (hoặc bảng màu giấy của hãng), đặt cạnh tờ A4 trắng dưới ánh sáng ban ngày, tự đọc undertone, hút màu ra hex, rồi ghi vào **bảng neo vật liệu công ty** (F.7). Một lần làm, hết tranh cãi mãi mãi.

### Ba điều về tường trắng trong render

1. **Không bao giờ nhập `#FFFFFF`.** Tường là mảng phản xạ lớn nhất — trắng tinh làm ánh sáng dội gần như vô hạn: cháy sáng, GI loang, render chậm hơn. Trắng "an toàn" quanh RGB 180–200 (C15.8).
2. **Màu tường trong ảnh do sàn và đèn quyết định, không do mã sơn.** Sàn gỗ vàng + 3000K → tường trắng lên ảnh ngả kem. Đây là color bleeding, đúng vật lý, không phải lỗi.
3. **Tường trắng lấy mất một ô tạo tương phản.** Toàn bộ phần tối phải đến từ ô 3, ô 4 và ô 7 — xem bảng quy đổi ở **C15.12**.

---

## F.7. Ô 3 và ô 4 — neo vào bảng mã An Cường

Đây là hai ô quyết định bộ màu (vì ô 2 đã gần như cố định — F.6), và cũng là hai ô **phải mua được**. Với công ty, "mua được" nghĩa là có mã trong bảng mẫu An Cường mà xưởng đang cầm.

### Cái gì đã chắc, cái gì phải tự khoá

✅ **Chắc** (nhiều nguồn phân phối thống nhất): bảng melamine An Cường có khoảng **300–350 mã** (một số nguồn nói 400+ sau các đợt bổ sung), chia thành các nhóm: **màu trơn** (solid) · **vân gỗ** · **vân đá** · **vân vải** · và các nhóm đặc biệt mới (giả da, digital). Nhóm vân gỗ trải theo các họ gỗ quen: **sồi (Oak) · tần bì (Ash) · phong (Maple) · dẻ gai (Beech) · tràm (Acacia) · teak · óc chó (Walnut) · long não · anh đào (Cherry)**, từ tông hiện đại tới giả cổ.

⚠️ **Chưa khoá:** danh sách mã cụ thể và quy ước ký hiệu bề mặt. Sách **cố tình không chép mã từ các trang bán hàng** — mã in trên web đại lý hay lệch phiên bản catalogue, và chép sai một mã là sai cả đơn hàng. **Nguồn đúng duy nhất là bảng mẫu vật lý mà xưởng đang dùng.**

> ## 📌 Việc phải làm một lần: dựng BẢNG NEO VẬT LIỆU CÔNG TY.
> Sau khi có bảng này, mọi phiếu phối màu đều neo được trong ba mươi giây, và ảnh render dùng đúng
> màu tấm mà xưởng cắt ra. Đây là việc đáng giá nhất trong cả chương màu.

### Quy trình dựng bảng neo (nửa buổi, làm một lần)

| Bước | Việc | Chi tiết |
|---|---|---|
| 1 | **Chụp bảng mẫu thật** | Ánh sáng ban ngày gián tiếp (cạnh cửa sổ, **không nắng gắt, không đèn vàng**). Đặt **một tờ A4 trắng** vào trong khung hình làm mốc |
| 2 | **Cân bằng trắng theo tờ A4** | Photoshop/Lightroom: dùng eyedropper cân bằng trắng bấm vào tờ giấy. Bỏ qua bước này thì mọi hex thu được đều lệch |
| 3 | **Hút màu** | Eyedropper để **Sample Size 31×31** (lấy trung bình, không lấy một điểm ảnh) |
| 4 | **Với ô gỗ: hút 3 điểm** | Chỗ vân sáng nhất · chỗ vân tối nhất · vùng trung bình → ghi **LRV trung bình ± biên độ** |
| 5 | **Ghi vào bảng** | Theo đúng cột ở dưới, lưu dạng CSV dùng chung |
| 6 | **Tính LRV** | Chạy `tools/tinh-lrv.py` (xem cuối mục này) → có LRV + cảnh báo luật |
| 7 | **Dựng vào Kujiale** | Tạo thư viện vật liệu công ty theo `实时材质制作工具` (C5.2), đặt tên **trùng mã An Cường** |

Bước 7 là bước biến bảng giấy thành thứ dùng được: từ đó chọn màu **trong thư viện công ty**, không chọn trong thư viện chung của Kujiale — vừa nhanh, vừa không bao giờ chọn phải màu không mua được.

### Đường tắt: đã có sẵn folder bitmap màu thì để máy đo

Nếu An Cường (hoặc xưởng) đã đưa **folder ảnh, mỗi ảnh một mã, tên file có chứa mã**, thì bỏ qua bước
2–6 ở trên — chạy `tools/doc-bang-mau.py` một lần ra cả bảng:

```bash
pip install pillow numpy

# B1 — kiểm máy có tách đúng mã từ tên file không (chưa ghi gì)
python3 tools/doc-bang-mau.py <folder-anh> --dry-run

# B2 — đo thật
python3 tools/doc-bang-mau.py <folder-anh> --out bang-neo-ancuong.csv

# B3 — nếu là ẢNH CHỤP: chụp thêm tờ A4 trắng cùng buổi rồi cân bằng trắng theo nó
python3 tools/doc-bang-mau.py <folder-anh> --white-ref giay-trang.jpg --out bang-neo-ancuong.csv
```

Máy đo được **bốn thứ mà hút màu bằng tay không cho**:

| Cột | Máy làm gì | Vì sao hơn làm tay |
|---|---|---|
| `hex` | Trung bình **trong không gian linear light** rồi mới đổi về sRGB | Hút một điểm ảnh là ăn may; trung bình thẳng trên sRGB thì lệch tối |
| `lrv` + `lrv_p10/p90` | Trung bình và phân vị của độ sáng cả vùng đo | Ra luôn **biên độ vân** — thứ mắt không đo nổi |
| `undertone` | Đổi sang **CIELAB**, xét dấu `b*` (vàng ↔ xanh) | Không phải cãi nhau "cái này ngả vàng hay ngả xám" |
| `nhom` | Đoán **gỗ / solid** theo biên độ, mờ ranh giới thì ghi `?` | Nhất quán giữa mọi người đo |

Script còn cắm cờ vào cột `ghi_chu` khi ảnh **cháy sáng** (màu đo được đã sai), **quá tối**, hoặc
**nghi chứa nhiều ô màu** (phá giả định một ảnh một mã). Có cờ thì soi tay dòng đó.

> ## ⚠️ Cột `wb` là chỗ phải đọc kỹ.
> `wb = ref` — đã cân bằng trắng theo tờ giấy, hex tin được ở mức cao.
> `wb = raw ⚠️` — **chưa cân bằng**: hex đang mang theo nhiệt độ đèn lúc chụp. So sánh **giữa các mã
> trong cùng folder** thì vẫn tin được (mọi ảnh lệch như nhau), nhưng **đừng đem so với mã hãng ngoài
> folder**, và đừng dán con số đó vào hợp đồng.
>
> File **quét hoặc xuất từ catalogue số** thì không cần `--white-ref` — script tự nhận ra nền trắng đều
> và nhắc.

Ba cột `o` · `be_mat` · `ten_trong_kujiale` script **cố tình để trống** — đó là phần người điền: ô nào
trong bộ 7 ô, bề mặt mờ/bóng/sần (phải sờ tấm thật mới biết), và tên vật liệu tương ứng trong thư viện
Kujiale. Điền xong thì chạy tiếp `tools/tinh-lrv.py --csv` để kiểm bốn luật.

### Khuôn bảng neo — điền vào

| Mã An Cường | Tên | Nhóm | Hex đo được | LRV ⚠️ | Biên độ vân | Undertone | Bề mặt | Tên trong thư viện Kujiale |
|---|---|---|---|---|---|---|---|---|
| | | gỗ / solid / đá / vải | `#` | | ±.. (gỗ) hoặc — (solid) | ấm/lạnh/trung | mờ/bóng/sần | |

**Số dòng tối thiểu để bảng dùng được** — không cần đủ 350 mã, chỉ cần **bộ dùng thật của công ty**:

| Nhóm | Số mã nên có | Vì sao |
|---|---|---|
| **Vân gỗ sáng** (sồi, tần bì, phong) | 4–6 | Phủ hầu hết ô 3 và ô 4 của các bộ tone sáng |
| **Vân gỗ trung** (mật ong, teak) | 3–4 | Ô 3 của các bộ ấm |
| **Vân gỗ tối** (óc chó, gỗ nhuộm) | 3–4 | Ô 4 tạo tương phản, ô 7 |
| **Solid trắng/kem** | 3–4 | Ô 4 của các bộ tone sáng |
| **Solid ghi** (nhạt → đậm) | 3–4 | Ô 4 trung tính, chạy được với mọi gỗ |
| **Solid đậm** (đen, navy, xanh rêu) | 3–4 | Ô 4 cá tính + ô 7 |
| **Vân đá** | 2–3 | Mặt bếp, mặt bàn |

Tổng khoảng **25–30 mã** là đủ chạy 90% công trình. Bảng nhỏ mà đúng thì hơn hẳn catalogue 350 mã mà không ai đo.

### Gỗ và solid — đọc bảng mẫu bằng mắt nghề

Phần nguyên lý ở **C15.11**. Ba điều thực hành khi cầm bảng mẫu trên tay:

1. **Gỗ: đọc biên độ vân trước, đọc màu sau.** Hai mã gỗ cùng LRV trung bình 45 nhưng một mã vân êm (biên độ ±6) và một mã vân gắt (±18) sẽ cho hai kết quả render khác hẳn. Vân gắt trên mảng tủ lớn = rối; vân êm trên mảng lớn = an toàn nhưng dễ chán.
2. **Solid: sờ bề mặt.** Solid **mờ hoàn toàn** an toàn nhất cho mảng lớn. Solid **bóng** đẹp trên ảnh nhưng ngoài đời lộ vân tay và xước — và trong render phải chỉnh `反射光泽度` rất cao mới ra chất, sai một chút là ra "nhựa" (C5.4).
3. **Solid có vân sần (bề mặt nhám)** là lựa chọn cứu ô 4 khỏi bệt: nó cho bump nhẹ mà không cho vân gỗ, hợp với các bộ tối giản. Trong Kujiale phải nhớ gán map `凹凸` cho nó, nếu không thì render ra vẫn là mặt phẳng chết.

### Công cụ tính LRV

Repo có sẵn `tools/tinh-lrv.py`. Dùng hai cách:

```bash
# Cách 1 — tính nhanh vài mã
python3 tools/tinh-lrv.py "#EFE9E0" "#C8A87E" "#3B3833"

# Cách 2 — chạy cả bảng neo (CSV có cột "hex")
python3 tools/tinh-lrv.py --csv tools/bang-neo-vat-lieu.csv
```

Chạy với CSV thì công cụ in luôn **LRV từng dòng** và **kết quả kiểm bốn luật** của bộ 7 ô nếu CSV có cột `o` (số thứ tự ô).

---

## F.8. Bộ từ khoá tiếng Trung — tự tra bảng phối màu

Người làm nghề Trung Quốc viết về phối màu nội thất nhiều và cụ thể hơn hẳn tài liệu tiếng Anh (họ hay đăng kèm mã màu và ảnh thi công thật). Đây là bộ từ khoá dán thẳng vào ô tìm kiếm **小红书** / **抖音** / **知乎**.

### Nhóm 1 — Tra theo phong cách (kèm tình hình xu hướng)

| Từ khoá | Nghĩa | Ghi chú xu hướng ⚠️ |
|---|---|---|
| `奶油风 配色` | Phong cách kem | Đang **giảm nhiệt** — lượng tìm kiếm xuống ba quý liên tiếp. Vẫn hợp khách Việt, nhưng đừng bán là "mới nhất" |
| `原木风 配色` | Phong cách gỗ mộc | Ổn định, an toàn, hợp gu Việt nhất |
| `中古风 装修` | Mid-century (đồ cổ điển thập niên 50–70) | **Đang tăng mạnh** — bài viết tăng ~186% so với cùng kỳ. Đây là chỗ lấy ý tưởng mới |
| `静奢风 配色` | "Quiet luxury" — sang mà kín tiếng | Hướng chủ đạo của phân khúc cao cấp 2026 |
| `侘寂风 配色` | Wabi-sabi | Hợp bảng PC-02 |
| `极简风 配色` / `现代简约` | Tối giản / hiện đại giản lược | Nền tảng, luôn có bài tốt |
| `法式 奶油 配色` | Pháp pha kem | Hợp khách thích tân cổ điển nhẹ |
| `新中式 配色` | Tân Trung Hoa | Tham khảo cho khách thích Á Đông; gần Indochine |

### Nhóm 2 — Tra theo hệ màu

| Từ khoá | Nghĩa | Dùng khi |
|---|---|---|
| `莫兰迪色 家装` | Hệ màu Morandi — màu pha xám, giảm bão hòa | Khách nói "nhẹ nhàng, không chói" |
| `高级灰 配色` | "Ghi cao cấp" | Bộ trung tính, tìm được rất nhiều ví dụ |
| `低饱和 配色` | Màu bão hòa thấp | Cùng họ với hai từ trên |
| `无彩色 搭配` | Phối vô sắc (đen–trắng–ghi) | Khách nói "đơn giản, không màu mè" |
| `邻近色 搭配` | Phối màu lân cận | Bộ êm, ít rủi ro |
| `撞色 搭配` | Phối màu đối chọi | Khi khách đòi cá tính mạnh |
| `色彩比例 6:3:1` | Tỉ lệ 6:3:1 | Bài giảng tỉ lệ, có sơ đồ |
| `背景色 主角色 配角色 点缀色` | Bốn vai màu | Đúng hệ khái niệm của C15.2 |

### Nhóm 3 — Tra theo vật liệu và bề mặt

| Từ khoá | Nghĩa |
|---|---|
| `木饰面 颜色 搭配` | Phối màu gỗ ốp |
| `柜门 颜色 搭配` | Phối màu cánh tủ — đúng ô 4 |
| `岩板 颜色` | Màu đá thiêu kết (mặt bếp, mặt bàn) |
| `墙漆 颜色 奶油白` | Sơn tường trắng kem |
| `原木色 搭配 什么颜色` | "Màu gỗ mộc hợp với màu gì" |
| `胡桃木 配色` | Phối màu gỗ óc chó |

### Nhóm 4 — Tra theo phòng

| Từ khoá | Phòng |
|---|---|
| `客厅 配色 方案` | Phòng khách |
| `卧室 配色 方案` | Phòng ngủ |
| `儿童房 配色` | Phòng trẻ em |
| `厨房 柜门 颜色` | Bếp |
| `小户型 配色 显大` | Căn nhỏ — phối màu cho trông rộng |

### Nhóm 5 — Hai cụm quý nhất: bài kể chuyện hỏng

| Từ khoá | Nghĩa | Vì sao quý |
|---|---|---|
| `装修 配色 翻车` | "Lật xe" = làm hỏng | Bài kể ca hỏng dạy nhanh hơn bài khoe ảnh đẹp — và thường có ảnh trước/sau |
| `配色 避坑` | Tránh hố | Tổng hợp lỗi thường gặp, đối chiếu được với chín lỗi ở C15.13 |
| `一房一色 翻车` | Mỗi phòng một màu, hỏng | Đúng lỗi 9 của C15.13 |

### Nhóm 6 — Thao tác trong Kujiale

| Từ khoá | Tìm được gì |
|---|---|
| `酷家乐 材质 颜色 修改` | Đổi màu vật liệu |
| `酷家乐 一键换色` | Đổi màu hàng loạt — phục vụ quy tắc hai ô |
| `酷家乐 自定义 材质 上传` | Tạo vật liệu riêng (dựng thư viện công ty ở F.7) |

### Từ điển màu Việt – Trung (để đọc kết quả tìm được)

| Việt | Trung | Việt | Trung |
|---|---|---|---|
| Trắng ngà / trắng sứ | 象牙白 / 奶白 | Ghi (xám) | 灰色 |
| Kem | 奶油色 / 米白 | Ghi ấm (greige) | 灰咖 / 奶咖 |
| Be | 米色 | Taupe | 灰褐色 |
| Nâu cacao | 可可棕 | Đen mờ | 哑光黑 |
| Gỗ sồi | 橡木 | Gỗ óc chó | 胡桃木 |
| Gỗ tần bì | 白蜡木 | Gỗ mộc / màu gỗ nguyên bản | 原木色 |
| Xanh rêu | 墨绿 | Olive | 橄榄绿 |
| Navy | 藏蓝 / 深蓝 | Terracotta / đỏ gạch | 陶土色 / 砖红 |
| Vân đá | 岩板纹 / 大理石纹 | Vân vải | 布纹 |
| Mờ (matt) | 哑光 | Bóng | 高光 |

> 💡 **Bốn luật lọc kết quả** (giống mọi chương): sắp theo `最新` · ưu tiên bài **có mã màu cụ thể hoặc ảnh thi công thật** · bỏ bài `AI一键` · lưu lại bài hay vào ngân hàng theo khuôn **F.5**.
>
> Khác với bài số đèn, bài phối màu **không cần** đúng đời template Kujiale — nguyên lý màu không đổi theo phiên bản phần mềm. Nhưng vẫn phải đổi tư duy khi áp vào công trình Việt: nhà Trung Quốc hay có trần cao hơn, cửa sổ lớn hơn và **tường không mặc định trắng** — nên bộ màu của họ thường có ô 2 là màu, còn ta thì ô 2 gần như luôn trắng (F.6). Chép bộ màu của họ mà quên điều này là chép hụt một ô.
