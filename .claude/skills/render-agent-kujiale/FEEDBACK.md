# Sổ phản hồi — tích trước, sửa skill sau

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
**Test bằng:** _(chưa test)_
**Kết quả:** _(chờ)_
**Sai ở khối nào:** _(chờ)_
**Sửa thành gì thì ăn:** _(chờ)_
**Rút ra:** _(chờ)_

Ghi trước để đối chiếu sau — ba nhận định của agent ở ca này cần được thực tế xác nhận hay bác bỏ:
1. Giữ nắng thấp (EL 20–25°) để khoe vân marble + panel gỗ, thay vì tắt nắng theo ảnh mẫu
2. Gradient chạy ngang (phải sáng → trái tối), không phải theo chiều sâu như ảnh mẫu
3. Chỉ cho phép 1–2 điểm bóng trong khung (marble + màn TV), còn lại mờ hết

---

## Luật đang chờ đủ bằng chứng

Ghi ở đây khi thấy một thứ **có vẻ** là luật nhưng mới gặp 1–2 lần. Đủ 3 ca thì nâng lên `references/`.

| Luật nghi ngờ | Gặp ở ca | Đã đủ 3 chưa |
|---|---|---|
| | | |
