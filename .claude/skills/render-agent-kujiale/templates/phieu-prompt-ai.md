# Mẫu — PHIẾU PROMPT AI (chế độ C)

---

## PHIẾU PROMPT AI

**Mục đích ảnh:** ..................  **Ngày:** ..................

> ## ⚠️ PHẠM VI DÙNG — ĐỌC TRƯỚC
> Ảnh AI **CẤM** dùng cho: ảnh khách ký duyệt · ảnh đính kèm hợp đồng/báo giá ·
> ảnh mô tả vật liệu sẽ thi công · ảnh nghiệm thu.
> **Được phép** cho: mood board (nói rõ "ảnh minh họa hướng phong cách") ·
> marketing (**watermark "Ảnh minh họa AI" TRÊN ảnh**) · nháp tại chỗ khi tư vấn.
> Ảnh này thuộc nhóm: ☐ Được phép, loại ... ☐ **DỪNG — phải render Kujiale**

### Phân rã 6 khối

| Khối | Nội dung |
|---|---|
| 1. Không gian | |
| 2. Nguồn sáng + hướng *(chỉ MỘT ý đồ)* | |
| 3. Nhiệt màu / mood | |
| 4. Ống kính / góc máy | |
| 5. Vật liệu + staging | |
| 6. Chất ảnh | |
| Negative *(2–3 dòng đúng bệnh)* | |

---

### 🅰️ Bản cho ChatGPT / Nano Banana
*(không có ô negative → diễn đạt dương tính)*

```
...
```

**Cách dùng tốt nhất:** đưa kèm **ảnh model trắng hoặc ảnh render nháp của mình** rồi mô tả ý đồ —
bám bố cục tốt hơn hẳn tả chay. Sửa lặp từng khối một, đừng viết lại cả prompt.

### 🅱️ Bản cho Midjourney

```
... --ar ... --no ... --style raw
```

### 🅲 Bản cho Google Flow

⚠️ Tính năng Flow đổi nhanh — kiểm lại trong app trước khi hứa với khách.

**Lối vào khuyến nghị:** ☐ `frames-to-video` **(nên dùng — khung đầu là ảnh render Kujiale thật)**
☐ `ingredients-to-video` ☐ `text-to-video` *(chỉ cho mood, không cho vật liệu)*

```
[chuyển động máy — MỘT động tác duy nhất, chậm]
[nguồn sáng + hướng]
Lighting stays consistent throughout, no flicker.
Materials and layout remain exactly as in the source frame — [liệt kê vật liệu].
[ống kính, chiều cao, phương đứng]
[một chi tiết động rất nhẹ: rèm lay, ánh nắng dịch]
[âm thanh nền / no dialogue]
```

**Ba luật video nội thất:**
1. **Chậm** — `slow`, `subtle`, `gentle`. Nhanh là AI "trôi" vật liệu.
2. **Một chuyển động mỗi clip.** Cần nhiều động tác → cắt nhiều clip ngắn rồi ghép.
3. **Khai báo ánh sáng TĨNH** — không thì AI tự "diễn" ánh sáng đổi giữa clip.

---

### ✅ Soát trước khi gửi đi

- [ ] Chỉ **một** ý đồ ánh sáng trong khối 2–3
- [ ] Đã gọi **đúng tên vật liệu nghề** (`matte melamine cabinetry`, `high-gloss acrylic panels`,
      `quartz stone countertop`, `wood-grain laminate`) — không để AI mặc định gỗ tự nhiên Âu Mỹ
- [ ] Negative chỉ 2–3 dòng đúng bệnh
- [ ] *(Nếu dùng AI trong Kujiale)* đã bật **`主体保留` + `材质保留`**, `创造性` để **THẤP**
- [ ] Đã qua **quy trình 2 người soát** 4 điểm
- [ ] Đã gắn **watermark "Ảnh minh họa AI"** nếu là ảnh marketing

### 🔧 Ảnh ra sai thì sửa khối nào

| Sai gì | Sửa khối |
|---|---|
| Sáng bẹt, không hướng | **2** |
| Màu giả, ám vàng/xanh | **3** |
| Méo, cột đổ, góc quá rộng | **4** |
| Vật liệu sai chất, sai vân | **5** |
| Quá mượt kiểu CG, thiếu chất ảnh | **6** |
| Phòng trống vô hồn | **5** (staging) |

**Đừng viết lại cả prompt** — soi sai ở khối nào rồi chỉ sửa khối đó.
Đây chính là chẩn đoán 3 bước của C2: **tách vấn đề, sửa một biến mỗi lần.**
