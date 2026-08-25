# Mẫu — PHIẾU PHÂN TÍCH ẢNH (chế độ A: đọc ngược)

Điền theo mẫu này. Bỏ mục nào không đọc được từ ảnh — **ghi "không đọc được", đừng bịa số cho đủ bảng.**

---

## PHIẾU PHÂN TÍCH ẢNH RENDER

**Ảnh:** ..................  **Nguồn:** ..................  **Ngày đọc:** ..................

### 0. Ảnh này là gì
- **Loại:** ☐ Ảnh chụp thật ☐ Render giỏi ☐ Render kém ☐ Ảnh AI
- **Bằng chứng:** ...
- **Đời template đoán được** (nếu là render): ...
- **Tái dựng được không:** ☐ 1:1 ☐ Chỉ rút ý đồ ☐ Không nên chép

### 1. Ánh sáng

| Mục | Đọc được | Bằng chứng trong ảnh |
|---|---|---|
| Nguồn chính | | |
| Hướng (trái/phải/sau lưng camera) | | |
| Góc ngẩng nắng `俯仰角` | ...° | bóng dài gấp ... lần chiều cao ... |
| Phương vị `方位角` | | |
| Độ mềm bóng → `阴影柔和度` | | |
| Vật cản (rèm voan / lam gỗ / ...) | | |
| Tương phản (2:1 / 4:1 / 8:1) | | |
| Nhiệt độ màu — vùng sáng | ...K | |
| Nhiệt độ màu — vùng bóng | ...K | |
| Có trộn nóng–lạnh? | | |
| Đủ 3 lớp sáng? | nền ☐ chức năng ☐ nhấn ☐ | |
| Có `体积光`? | | |
| Test "tia Chúa": mọi vệt sáng đều có đèn thật? | ☐ Đạt ☐ Trượt | |

### 2. Camera

| Mục | Đọc được | Bằng chứng |
|---|---|---|
| `相机高度` | ...mm | đường giữa khung cắt qua ... |
| `视野` (FOV) | ...° | |
| `俯仰角` | | |
| Cột dọc thẳng? (`相机矫正`) | ☐ Có ☐ Không | |
| Số điểm tụ | ☐ 1 ☐ 2 | |
| Kiểu bố cục | ☐ A ☐ B ☐ C ☐ D | |
| Áp quy tắc 1/3? | | |

### 3. Vật liệu

| Bề mặt trong ảnh | Chất gì | `反射光泽度` ≈ | `凹凸比例` ≈ | Ghi chú |
|---|---|---|---|---|
| Sàn | | | | |
| Tủ / cánh | | | | |
| Mặt bàn / đá | | | | |
| Tường | | | | |
| Vải (sofa/rèm) | | | | |

- **Vân có lặp không:** ...
- **Tì vết đếm được:** ... (đặt ở đâu: ...)
- **Cây:** ☐ có chuyển sắc ☐ "xanh nhựa"
- **Tỉ lệ vân đúng khổ thật?** ...

### 4. Hậu kỳ và ngoại cảnh
- Đường cong / tương phản: ...
- Hạt nhiễu: ☐ có ☐ không — mức ước lượng: ...
- Tối góc / lan sáng: ...
- LUT / chia tông: ...
- Nhìn qua cửa sổ thấy gì: ...
- Cửa sổ có cháy không: ...

### 5. Bày đồ
- Dấu vết người sống tìm được: ...
- Đủ tiền – trung – hậu cảnh? ...
- Thứ nên xoá (ổ điện, dây, khe gió): ...

---

## ✅ BẢNG 1 — CÁI GÌ LÀM ẢNH NÀY THẬT
*(hoặc: cái gì tố cáo nó giả — 3–6 dòng, mỗi dòng chỉ đúng chỗ trong ảnh)*

| # | Quan sát | Ở đâu trong ảnh |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |

## 🔧 BẢNG 2 — THÔNG SỐ TÁI DỰNG TRONG KUJIALE

> **Số theo THANG CŨ — kiểm đơn vị trên panel máy bạn trước khi nhập (`瓦` / `%` / thang cũ).**
> ✅ = help center chính thức · ⚠️ = cộng đồng / suy luận từ ảnh

| Hạng mục | Giá trị | Tin cậy |
|---|---|---|
| Chế độ render | | |
| Template | | |
| **Camera** — `相机高度` / `视野` / `俯仰角` / `相机矫正` | | |
| **`太阳光`** — `色温` / `亮度` / `俯仰角` / `方位角` / `阴影柔和度` | | |
| **`天光`** — `面光源` ngoài / trong cửa | | |
| **`递推光`** — số lớp và dải giảm dần | | |
| **Ngoại cảnh** — `外景亮度` / `环境光亮度` / `环境光反射` | | |
| **Đèn chức năng** — `筒灯`/`射灯`: số lượng, độ sáng, cao, nhiệt màu | | |
| **Đèn nhấn** — `灯带` / `球形灯` / rọi tranh | | |
| **`高级设置`** — bật/tắt từng công tắc | | |
| **Vật liệu** — kênh chính từng bề mặt | | |
| **Hậu kỳ** — curve / grain / dải màu | | |

## 🔄 THỨ TỰ DÒ
*(mỗi lần đổi ĐÚNG MỘT biến rồi render nháp)*

1. ...
2. ...
3. ...
4. ...

## ⚠️ CÁI KHÓ NHẤT KHI TÁI DỰNG
...

## 📌 Ba thứ đáng chép nhất từ ảnh này
1. ...
2. ...
3. ...
