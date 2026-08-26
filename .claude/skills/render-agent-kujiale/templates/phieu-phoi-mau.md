# Mẫu — PHIẾU PHỐI MÀU (chế độ E)

Xuất **đầy đủ**, dán là dùng được. Không xuất mảnh, không bắt người dùng ghép (Khuôn xuất — luật số một).

---

## PHIẾU PHỐI MÀU

**Công trình:** ..................  **Phòng:** ..................  **Ngày:** ..................
**Bảng gốc:** ☐ Phụ lục F mã ......  ☐ tự dựng  ☐ đọc ngược từ ảnh mẫu

> ## ⚠️ ĐỌC TRƯỚC KHI SO MÀU
> Mã hex dưới đây là **màu VẬT LIỆU (albedo)** — thứ nhập vào `基础颜色` trong Kujiale.
> **Không phải** màu pixel bạn sẽ thấy trong ảnh render. Ảnh cuối = albedo × ánh sáng chiếu vào × các
> lần dội, cộng hậu kỳ. Lệch **một bậc sáng-tối và chút undertone** so với bảng là **bình thường**.
> **LRV là số xấp xỉ ⚠️** tính từ hex — dùng để so tương quan giữa các ô, không dùng để cãi với bảng
> màu của hãng sơn.

### 【0】 Brief khách — nguyên văn

> "................................................................"

Ảnh mood khách gửi: ☐ có ☐ không · Ràng buộc có sẵn (sàn/tủ/đá đã cố định): ..................

### 【1】 Ba khóa + CCT

| Khóa | Chốt | Ghi chú |
|---|---|---|
| **1 — Tông** | ☐ SÁNG (tường LRV ≥75) ☐ TRUNG (55–75) ☐ TỐI (<55) | |
| **2 — Undertone** | ☐ ẤM ☐ TRUNG TÍNH ☐ LẠNH | |
| **3 — Cá tính** | ☐ 0 màu có sắc ☐ 1 màu ☐ 2 màu | |
| **CCT đèn** | ☐ 2700–3000K ☐ 3500–4000K ☐ 4000K+ | **chốt TRƯỚC khi chốt màu** |

*Khóa nào do agent suy ra (khách chưa nói) thì ghi rõ "suy luận" — nếu suy sai, phiếu đổi ở đâu.*

### 【2】 Bảy ô

| # | Ô | Hex | LRV ⚠️ | % ước | Vật liệu thật + mã | Neo? |
|---|---|---|---|---|---|---|
| 1 | Trần | `#` | | 15–20% | | ☐ |
| 2 | Tường nền | `#` | | 25–35% | | ☐ |
| 3 | Sàn | `#` | | 15–20% | | ☐ |
| 4 | Chủ thể | `#` | | 15–25% | | ☐ |
| 5 | Phụ trợ | `#` | | 8–12% | | ☐ |
| 6 | Nhấn | `#` | | 5–8% | | ☐ |
| 7 | **Neo tối** | `#` | | 2–5% | | ☐ |

**Ô chưa neo được vào vật liệu thật:** .................. ⚠️
*Ô chưa neo → chỉ dùng cho mood board. Ảnh khách ký duyệt / kèm hợp đồng / mô tả vật liệu thi công bắt
buộc dùng vật liệu mua được (C8).*

### 【3】 Bốn luật kiểm

| Luật | Ngưỡng | Số thực tế | Đạt? |
|---|---|---|---|
| L1 — Trần sáng nhất | LRV trần ≥ LRV tường | trần .... / tường .... | ☐ |
| L2 — Chênh tường↔sàn | ≥20 (tone sáng ≥30) | chênh .... | ☐ |
| L3 — Biên độ | có ô <10 **và** ô >80 | thấp .... / cao .... | ☐ |
| L4 — Undertone | mảng lớn cùng phía; trộn chỉ ở ô 6–7 | | ☐ |
| Luật trắng | không ô nào `#FFFFFF`; albedo mảng lớn <~RGB 200 | | ☐ |
| Khóa 3 | số màu có sắc = đúng khóa đã chốt | đếm được .... | ☐ |

*Trượt luật nào thì sửa ĐÚNG ô đó, không dựng lại cả bảng.*

### 【4】 Ba phương án — quy tắc hai ô

Giữ nguyên ô **1, 2, 3, 7**. Đổi ô **4 (chủ thể)** và ô **6 (nhấn)**.

| | Tên | Ô 4 — Chủ thể | Ô 6 — Nhấn | Hợp khách kiểu nào |
|---|---|---|---|---|
| **A** | An toàn | `#` | `#` | |
| **B** | Xu hướng | `#` | `#` | |
| **C** | Cá tính | `#` | `#` | |

**Render 3 ảnh:** ☐ cùng camera ☐ cùng đèn ☐ cùng thông số render ☐ cùng hậu kỳ

> ⚠️ Ba ảnh lệch sáng vì render lúc chỉnh tay khác nhau → khách sẽ chọn ảnh sáng hơn và tưởng mình
> đang chọn màu. Đây là lỗi âm thầm bóp méo quyết định của khách.

### 【5】 Cảnh báo render riêng cho bộ màu này

*Bộ nào cũng có một chỗ dễ vỡ — nêu đúng chỗ đó, kèm chương để tra.*

| Rủi ro | Vì sao | Xử theo |
|---|---|---|
| | | |

Ba câu hỏi luôn tự trả lời:
- [ ] Bộ này có bị **bệt trắng** khi đẩy thiên quang không? (nhiều ô LRV cao → có)
- [ ] Bộ này có **ăn sáng** không? (nhiều ô LRV thấp → cần thêm lớp đèn, C13)
- [ ] Bộ này sống bằng **màu** hay bằng **chất bề mặt**? (nếu bằng chất → vật liệu bắt buộc có `凹凸`, C5)

### 【6】 Thao tác trong Kujiale

| Việc | Công cụ |
|---|---|
| Đổi màu hàng loạt mặt tủ | `材质刷` (chổi vật liệu — phím **M**) |
| Đổi vân/kiểu tủ định chế | `定制样式刷` (phím **N**), `定制纹理刷` |
| Nhập màu | `材质编辑` → `基础颜色` (nhập hex); độ bóng chỉnh ở `反射光泽度`, **không** đẩy màu lên trắng để "sáng hơn" |
| Ba phương án | lưu 3 bản sao phương án, render cùng camera đã lưu |

---

**Nguồn của phiếu:** `content/15-bo-phoi-mau-noi-that.md` (nguyên lý) ·
`content/phu-luc-f-ngan-hang-bang-mau.md` (12 bảng + form gốc) ·
`references/08-phoi-mau.md` (bản rút gọn để chạy việc).
