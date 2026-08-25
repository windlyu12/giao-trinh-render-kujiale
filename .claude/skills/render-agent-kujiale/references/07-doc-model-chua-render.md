# Đọc ảnh model CHƯA render — tìm lỗi trước khi bố đèn

Đầu vào của chế độ B: ảnh model trắng, clay, ảnh chụp màn hình SketchUp/Kujiale ở chế độ hiển thị
phẳng, ảnh nhà thô, mặt bằng.

> ## 📌 Quy tắc sắt
> ## Không kê một dòng thông số đèn nào trước khi chạy hết file này.
>
> Lý do: **lỗi model không sửa được bằng tham số render**, và lỗi bày đồ / bố cục cũng vậy.
> Kê đèn cho một model còn lỗi là bắt người dùng render nháp nhiều vòng rồi mới phát hiện phải quay lại
> sửa model — vừa tốn `核豆` vừa mất buổi.

Ảnh chưa có ánh sáng nên **không đọc được** độ bóng, độ nổi vân, nhiễu, tương phản. Bù lại, ảnh phẳng
**để lộ rất rõ** thứ mà ảnh render giấu đi: hình học, tỉ lệ, vị trí đồ, mật độ bày biện, bố cục khung.
Đọc đúng thứ ảnh này giỏi cho, đừng đòi nó thứ nó không có.

---

## Bốn nhóm — chạy theo thứ tự, đắt tiền nhất trước

| Nhóm | Sửa ở đâu | Vì sao xếp trước |
|---|---|---|
| **① MODEL** | Công cụ thiết kế | Không tham số nào cứu được. Phát hiện muộn = làm lại từ đầu |
| **② BỐ CỤC** | Panel camera | Quyết định khung hình. Sửa sau khi đã bố đèn thì đèn phải cân lại |
| **③ BÀY ĐỒ** | Thư viện model | Rẻ, nhanh, nhưng phải xong trước khi chốt camera |
| **④ VẬT LIỆU** | `材质编辑` | Làm song song được với bố đèn, nhưng khổ vân phải đúng từ đầu |

---

## ① MODEL — bảy thứ soi trên ảnh phẳng

| Soi cái gì | Thấy gì là hỏng | Vì sao |
|---|---|---|
| **Chỗ hai mặt phẳng giáp nhau** — tấm ốp giáp panel, tủ cao chạm trần, TV áp tường, kính chồng trần | Không nhìn thấy trực tiếp trên ảnh phẳng, nhưng đây là **ba vị trí điển hình** sinh `重面` | Gốc của vệt đen loang lổ + noise cục bộ. **Luôn nhắc kiểm**, kể cả không thấy dấu hiệu |
| **Đèn thả / đèn chùm** | Lệch tâm bàn, chạy chéo ra ngoài mép bàn, treo quá cao/thấp | Render càng nét càng lộ. Khách soi ra ngay |
| **Model đèn trên trần** | Đếm được bao nhiêu chiếc, ở đâu | **Quyết định được đặt bao nhiêu `射灯`/`筒灯` ảo.** Không có model đèn thì không được đặt nguồn — ra `上帝之光` |
| **Đèn âm trần dạng dẹt như miếng dán** | Không có vành, không có độ sâu | Vành tạo bóng đổ nhỏ quanh mép — đúng thứ não đọc là "đèn thật lắp vào trần thật" |
| **Trần** | Phẳng trơn, không giật cấp, không khe hắt | Nếu ảnh mẫu có dải sáng ấm trên trần thì **đây là lý do không tái tạo được** — phải dựng (C12), không phải việc render |
| **Tỉ lệ đồ** | Tủ cao xuyên trần, ghế to hơn bàn, bàn dài quá phòng, cây to bất thường | Dấu hiệu 3D số 6. Não người cực nhạy với scale — không đèn nào cứu |
| **Cây / đồ mềm** | Cây một màu đen hoặc lục đều tăm tắp; rèm dùng model thay vì công cụ rèm | Sẽ ra "xanh nhựa" (dấu hiệu số 7). Đổi model cây có **chuyển sắc** vàng-lục → lục tươi → lục sẫm |

**Mốc kích thước thật để kiểm tỉ lệ nhanh** (dùng cửa đi 2100–2200mm làm thước chuẩn trong khung):

| Vật | Cao thật (mm) |
|---|---|
| Mặt ngồi ghế / sofa | 400–450 |
| Mặt bàn trà | 400–450 |
| Mặt bàn ăn, bàn làm việc | 750 |
| Lưng tựa sofa | 750–850 |
| Mặt bếp, mặt đảo bếp | 850–900 |
| Tay nắm cửa | ~1000 |
| Công tắc điện (VN) | 1200–1300 |
| Mép trên cửa đi | 2100–2200 |
| Trần căn hộ VN | 2600–2800 |

---

## ② BỐ CỤC — đọc khung như đọc ảnh chụp

Ảnh phẳng đọc bố cục **chính xác hơn** ảnh render, vì không bị ánh sáng đánh lạc hướng.

| Soi cái gì | Thấy gì là hỏng | Sửa |
|---|---|---|
| **Đường giữa khung cắt qua đâu** | Cắt trên tay nắm cửa (~1000mm) → camera đang cao hơn 1200mm | Hạ về **800–1200mm** ✅ (căn hộ) |
| **Có nhìn chúc xuống không** | Thấy quá nhiều mặt bàn, mặt bếp | `俯仰角` về **0** |
| **Cạnh tường dọc** | Đổ chụm | Bật `相机矫正` |
| **Đồ ở mép khung** | Đồ tròn bị kéo méo, chân ghế bị kéo dài | `视野` đang quá rộng — về **60°**; phòng chật thì bật `相机剪裁`, **đừng tăng độ** |
| **Chủ thể nằm đâu** | Nằm giữa khung, hoặc nằm trên đường 1/2 | Đưa về **giao điểm lưới 1/3** |
| **Mảng chết** | Có 1/3 khung là mặt phẳng đặc trống rỗng (tủ trơn, tường trơn) | Xoay/lùi camera để mảng đó nhường chỗ cho thứ kể chuyện |
| **Đếm lớp chiều sâu** | Chỉ có trung cảnh + hậu cảnh, **không có tiền cảnh** | Lùi camera mượn một cạnh ghế / mép thảm / mép tủ làm tiền cảnh |
| **Có nguồn sáng nào trong khung không** | Không thấy cửa sổ, không thấy đèn nào | Khung sẽ **không giải thích được hướng sáng**. Cân nhắc xoay để lấy cửa sổ vào khung |
| **Đồ bị cắt ngang mép** | Ghế cụt nửa dưới, chân tường bị cắt | Nới khung hoặc dời camera |

> 💡 Lớp tiền cảnh là thứ người mới hay bỏ nhất, và là khác biệt lớn nhất giữa "ảnh chụp phòng" với
> "ảnh khoe đồ". Ảnh mẫu đẹp gần như luôn có ba lớp.

---

## ③ BÀY ĐỒ — đếm, đừng cảm nhận

Cách kiểm khách quan: **đếm số món "đang có người dùng"** trong khung.

| Đếm được | Đọc là |
|---|---|
| 0–1 món | "Phòng không ai sống" — dấu hiệu 3D số 7 + 11. **Phải thêm** |
| **2–4 món** | Vùng đúng cho ảnh bán hàng |
| 5+ món | Ổn cho ảnh tạp chí; quá 8 thì thành lộn xộn vô chủ đích — giả kiểu khác |

Món tính là "đang có người dùng": sách **mở**, ly/tách **đang uống**, chăn khăn **hơi nhàu**, gối **lệch nhẹ**,
dép ở cửa, hoa cắm hơi lệch, trái cây trong bát, đồ cá nhân nhỏ.
**Không tính**: bình hoa cắm ngay ngắn, sách xếp thẳng, đồ decor đối xứng.

Bốn thứ soi thêm:
- **Ghế xếp thẳng hàng đều tăm tắp** → kéo lệch một chiếc ra ~15°, đẩy nhẹ một chiếc vào.
- **Gối xếp như duyệt binh** → bày lệch có chủ đích.
- **Ổ điện, công tắc, dây điện, khe gió lộ trong khung** → nhiếp ảnh gia nội thất xoá ở hậu kỳ như bước
  tiêu chuẩn; ở đây thì dời camera hoặc dời đồ che.
- **Khách Việt:** thiếu bàn thờ, dép ở cửa, cây hợp khí hậu → xem `content/11-...` §11.7.

---

## ④ VẬT LIỆU — thứ đọc được và thứ KHÔNG đọc được

> ⚠️ Ảnh chưa render **không cho biết** độ bóng, độ nổi vân, hay vật liệu có đủ map không.
> **Đừng phán `反射光泽度` từ ảnh phẳng.** Chỉ được nêu dải theo *loại vật liệu*, và nói rõ là dải theo loại.

Thứ **đọc được** từ ảnh phẳng:

| Soi cái gì | Thấy gì là hỏng |
|---|---|
| **Tỉ lệ vân so với vật** | Cánh tủ rộng ~400mm mà chỉ chứa nửa thớ vân → khổ nhập sai (phải **1220×2440**, không để mặc định 1000mm) |
| **Số mạch gạch / số tấm sàn** | Sàn trông vụn, mạch dày gấp đôi bình thường → nhập sai module gạch |
| **Hướng vân** | Cánh tủ đứng mà vân ngang; cụm tủ liền dải mà vân mỗi cánh một hướng |
| **Vân lặp** | Hai tấm sàn vân y hệt cạnh nhau; mảng tủ lặp mẫu rõ |
| **Đối hoa đá** | Mặt đá / tấm ốp lớn có ghép đối xứng vân qua mạch không |
| **Màu trắng** | Trắng tinh 255 trên tủ/tường → phải là **xám rất nhạt, RGB ~180–200** |

---

## Khuôn xuất — mục "Sửa trước khi bố đèn"

Xuất thành **một bảng duy nhất**, mỗi dòng có nhãn nhóm, đặt **trước** phiếu thông số:

| Thấy gì trong model | Vì sao phải sửa | Nhóm |
|---|---|---|
| *(quan sát cụ thể, chỉ đúng chỗ)* | *(neo vào dấu hiệu bảng 12 hoặc quy tắc có tên)* | MODEL / BỐ CỤC / BÀY ĐỒ / VẬT LIỆU |

Ba luật viết mục này:
1. **Mỗi dòng phải chỉ đúng chỗ trong ảnh** — "cây trong bình đang đen kịt", không phải "cây chưa ổn".
2. **Mỗi dòng phải neo vào một quy tắc có tên** — dấu hiệu số mấy trong bảng 12, hoặc quy tắc nào.
   Không có neo thì đó là ý kiến thẩm mỹ, và phiếu này không chấm gu thẩm mỹ.
3. **Nhóm MODEL xếp trên cùng** — vì phát hiện muộn là đắt nhất.

---

## Khi ảnh model bị crop / thiếu khung

Rất hay gặp: ảnh chụp màn hình bị cắt, có overlay lưới, có watermark, có thanh UI.

| Ảnh hưởng | Cách xử |
|---|---|
| **Không đọc được chiều cao camera** bằng đường chân trời | Nói rõ "không đọc được từ ảnh này", và bảo người dùng **mở panel `相机参数` đọc số thật**. Đừng đoán |
| Không đếm đủ model đèn trên trần | Bảo mở **màn 2D** đếm — đây là số bắt buộc phải có trước khi đặt `射灯` |
| Không thấy hết khung để chấm bố cục | Chấm phần thấy được, ghi rõ phần không thấy |

**Có lưới 1/3 overlay sẵn trên ảnh** = người dùng đang tự căn bố cục → dùng luôn lưới đó để chỉ chỗ:
*"bàn đang nằm giữa khung, nên đưa về giao điểm dọc phải"*. Tiện hơn mô tả bằng lời rất nhiều.
