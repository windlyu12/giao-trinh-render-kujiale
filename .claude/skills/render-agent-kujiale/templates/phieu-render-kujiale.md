# Mẫu — PHIẾU THÔNG SỐ RENDER KUJIALE (chế độ B: kê đơn)

---

## PHIẾU THÔNG SỐ RENDER

**Phương án:** ..................  **Phòng:** ..................  **Ngày:** ..................
**Mục đích ảnh:** ☐ Khách duyệt ☐ Fanpage/hồ sơ ☐ Catalogue cận ☐ MXH dọc ☐ In ấn

> ## ⚠️ ĐỌC TRƯỚC KHI NHẬP BẤT KỲ SỐ NÀO
> Mọi số dưới đây là **THANG CŨ** (dải quen thuộc 0–800, đèn hắt ~1500).
> Kujiale có **ba** hệ đơn vị song song: **thang cũ** · **`瓦`** (watt ảo) · **`%`**.
> ⚠️ Quy ước "`瓦` = thang cũ ÷ 10" **CHƯA được xác nhận** — đừng mặc định chia 10.
> **Việc đầu tiên: tạo một đèn bất kỳ, nhìn panel xem đơn vị hiện gì.** Chưa biết đơn vị máy mình thì
> **đừng nhập số nào — dò từ thấp lên.**
>
> **Đây là ĐIỂM XUẤT PHÁT để dò, không phải đáp số.** Template 3.x có GI dội mạnh — bắt đầu từ **đầu
> THẤP** của mọi dải, render nháp rồi tăng dần.

### Giả định đã dùng để kê đơn
*(nếu giả định nào sai thì phiếu đổi ở đâu)*

| Giả định | Nếu sai thì đổi gì |
|---|---|
| Phòng: ... | |
| Cửa sổ: ... mặt thoáng, ☐ có ☐ không ban công | Số lớp `递推光` |
| Thời điểm: ☐ ngày ☐ đêm | Nhiệt màu + tỉ lệ nền/nhấn |
| Tông vật liệu: ☐ sáng ☐ tối | **Quy luật 1** — dải hắt chênh tới 10 lần |
| Rèm: ☐ không ☐ voan ☐ vải dày ☐ sáo ☐ lam gỗ | **Quy luật 2** + `阴影柔和度` |
| Con đường bố đèn: ☐ A ☐ B ☐ C ☐ D | Toàn bộ tỉ lệ gánh sáng |

---

### ⓪ Sửa trước khi bố đèn *(không tốn điểm — và không tham số nào cứu được)*

> Chạy hết `references/07-doc-model-chua-render.md`. Mỗi dòng phải **chỉ đúng chỗ trong ảnh** và
> **neo vào một quy tắc có tên**. Nhóm MODEL xếp trên cùng vì phát hiện muộn là đắt nhất.

| Thấy gì trong model | Vì sao phải sửa | Nhóm |
|---|---|---|
| | | MODEL / BỐ CỤC / BÀY ĐỒ / VẬT LIỆU |

Bốn thứ luôn nhắc kiểm dù không thấy dấu hiệu:
- [ ] **`重面`** ở chỗ tấm ốp giáp panel, tủ cao chạm trần, đồ áp tường
- [ ] Đèn `面光源` **không chạm trần**
- [ ] **Đếm model đèn thật trên trần** (màn 2D) — quyết định được đặt bao nhiêu `射灯` ảo
- [ ] Khổ vân nhập đúng (**1220×2440** cho ván, không để mặc định 1000mm)

### ② Chế độ + template

| Mục | Giá trị |
|---|---|
| Dựng sáng ở | `实时专业模式` |
| Xuất final ở | `离线模式` |
| Template | ... |
| Loại ảnh | ☐ `普通图` ☐ `全景图` ☐ `俯视图` ☐ `漫游视频` |
| Phân giải nháp | 1920×1080 |
| Phân giải final | ... |

### ③ Camera `相机参数`

| Tham số | Giá trị | Tin cậy |
|---|---|---|
| `相机高度` | ...mm | ✅ (căn hộ 800–1200mm) |
| `视野` | ...° | ✅ 60° = `标准` |
| `俯仰角` | **0** | |
| `相机矫正` | **BẬT** | |
| `相机剪裁` | ☐ | dùng khi phòng hẹp, **thay vì** tăng `视野` |
| `景深` | ☐ | chỉ có ở chế độ thời gian thực |
| Tỉ lệ khung | | đổi **TRƯỚC** khi render |
| `保存视角` | [ ] đã lưu, tên: ... | |

### ④ Nắng `太阳光`

| Tham số | Giá trị | Tin cậy |
|---|---|---|
| Trạng thái | ☐ BẬT ☐ TẮT | (WC/phòng không cửa sổ → **TẮT**) |
| `色温` | ...K | ✅ 6500K ban ngày |
| `亮度` | ... | ✅ 20–50, **không vượt 50** |
| `俯仰角` (= ô `角度`) | ...° | ✅ 25–50; đẹp nhất 15–35 ⚠️ |
| `方位角` (= ô `位置`) | ... | ⚠️ lệch ~30° mặt cửa |
| `阴影柔和度` | ... | thang **1–10**; nắng qua rèm voan: **3–5** |

### ⑤ Thiên quang `天光` — `面光源` dựng đứng cỡ khung cửa

| Vị trí | Độ sáng | Màu | Tin cậy |
|---|---|---|---|
| Ngoài cửa sổ | ... | | ✅ 400–600 / ⚠️ 600–800 |
| Trong cửa | ... | | ✅ 200–300 / ⚠️ 300–500 |
| `递推光` lớp 3 | ... | | ⚠️ |
| `递推光` lớp 4 | ... | | ⚠️ |

Cách cửa ~150–200mm · **không dán sát tường/trần** (sinh vệt loang `光斑`).

### ⑥ Ngoại cảnh `外景`

| Tham số | Giá trị | Ghi chú |
|---|---|---|
| `外景亮度` | | **chỉ** đổi sáng ngoài cửa |
| `环境光亮度` | | cái này mới đổi sáng **trong phòng** |
| Loại `环境光` | ☐ `自然光` ☐ `暖光` ☐ `冷光` | |
| `环境光反射` | | |
| `环境反射亮度` | | nấc 2 → 6 → 12 ✅, cứu mặt bóng "chết" |
| Khớp hướng nắng với ngoại cảnh | [ ] đã chỉnh `方位角` | phần mềm **không tự khớp** |

### ⑦ Đèn chức năng — `筒灯` / `射灯`

> **Mỗi đèn ảo phải ứng với MỘT model đèn thật trên trần.** Không có model mà đặt nguồn = `上帝之光`.
> **Đặt nguồn sáng ảo lệch XUỐNG dưới model đèn 10–30mm**, không thì model che nguồn.

| Vị trí (đèn thật nào) | Loại | Độ sáng | Cao | `色温` | Góc |
|---|---|---|---|---|---|
| | | | 2400mm | | |
| | | | | | |

### ⑧ Đèn nhấn

| Hạng mục | Loại | Thông số |
|---|---|---|
| Khe hắt trần | `面光源` mảnh | rộng 20–25, ... ⚠️ · `灯槽宽度` 60–100mm |
| Đèn tầng tủ `层板灯` | `面光源` | rộng ~60, ~1200, **3500K**, nghiêng ~30° ✅ |
| Đèn thả | `球形灯` | 250–300 ⚠️, đặt **giữa đèn và trần** |
| Đèn bàn | `点光源` | 30–40 ⚠️, **thấp hơn model 0,15–0,2m** |
| Rọi tranh | `射灯` | 100–150, góc 30–45° |
| Nội tủ | `自发光` | năng lượng ~1 ⚠️ |

**Nhiệt màu toàn khung:** chênh **≤500K** giữa các đèn **cùng chiếu một bề mặt**.
Gradient theo khoảng cách (ngoài lạnh → trong ấm) vẫn hợp lệ.

### ⑨ `高级设置`

| Công tắc | Đặt | Vì sao (cảnh này) |
|---|---|---|
| `溢色修正` | ☐ | |
| `影响高光` | ☐ | |
| `硬装灯带使用新材质` | ☐ | |
| `环境阻光` AO | ☐ Size 0,8 · Radius 0,05 ft | |
| `镜面真实反射` | ☐ | ⚠️ không được nhớ — lần nào cần lần đó tick |
| `渲染复杂材质` | ☐ | bắt buộc nếu có rèm voan / đá xuyên sáng |
| `超真实渲染` | ☐ | chỉ panorama ≥5K, chỉ final |
| `HDR` | ☐ | ⚠️ không được nhớ |
| `自动曝光` | **TẮT** | tick là hệ **ghi đè thông số đèn của bạn** |
| `炫光` | 1,5–2,5 | |
| `色彩增艳` | thấp/tắt | |
| `漏光修复` | ☐ | chỉ final |
| `曝光压制` | | hạ thấp để cứu cửa sổ cháy |
| `LUT` / `景深` | | nhẹ tay |

### ⑩ Vật liệu cần chỉnh

| Bề mặt | Vật liệu nền | `反射颜色` | `反射光泽度` | `凹凸比例` | Khổ vân |
|---|---|---|---|---|---|
| | | | | | |

### ⑪ Hậu kỳ

| Việc | Mức |
|---|---|
| Đường cong chữ S | điểm 64→56–59, điểm 192→197–200 (dịch ~8/255) |
| `高光` / `阴影` | −10→−30 / +10→+25 |
| `饱和度` | +5→+10 |
| Hạt nhiễu | Amount **12–15**, Size 25, Roughness 45–50, Gaussian đơn sắc |
| Dải màu | mỗi dải trong ±10–15 · **KHÔNG đụng cam/vàng** nếu là ảnh chốt hợp đồng |
| Xuất | ... |

---

## 🔄 THỨ TỰ DÒ — quan trọng hơn con số

**Mỗi lần chỉ đổi ĐÚNG MỘT biến rồi render nháp.** Đổi hai biến cùng lúc thì không bao giờ biết biến
nào gây ra thay đổi.

1. **Khoá nắng** (`亮度` + góc) để có vệt
2. **Chỉnh thiên quang ngoài** để có mức sáng nền
3. **Đẩy `递推光`** cho gradient từ cửa vào
4. **Thêm đèn chức năng** đúng vị trí đèn thật
5. **Thêm đèn nhấn**
6. **Cân `外景亮度`** cuối cùng để cửa không cháy
7. *(nếu có rèm)* chỉnh `不透明度` rèm → tinh `阴影柔和度`

**Cháy ở đâu thì hạ ở đó, theo thứ tự:** `外景亮度` → `曝光压制` → `面光源` ngoài → đèn cục bộ.
**Đừng hạ `太阳光` đầu tiên** — mất vệt nắng là mất linh hồn ảnh.

## ✅ Tiêu chí nghiệm thu ảnh này

- [ ] Nhìn ra ngay hướng sáng chính (sáng dần từ cửa vào trong)
- [ ] Đồ nội thất nổi khối — có mảng sáng mảng tối, không đều tăm tắp
- [ ] Trần sạch: không mảng loang trắng
- [ ] Đèn hắt không lộ dải nguồn
- [ ] Cửa sổ giữ được chi tiết cảnh ngoài
- [ ] Không loang màu, chênh nhiệt màu ≤500K
- [ ] Không có vệt `上帝之光` ở trần trống
- [ ] Vân gỗ đọc được ở cả vùng xa cửa
- [ ] Cột dọc thẳng đứng tuyệt đối

## 💰 Trước khi render final
- [ ] Đã render **nháp chốt 1920×1080 với ĐÚNG bộ option final**
- [ ] Đã mở **「核豆消耗 - 查看详情」** xem số tiêu thực tế
- [ ] Không bật option nặng thừa (`镜面真实反射` khi không có gương, `渲染复杂材质` khi không có vật liệu đó)
