# C8. Công cụ AI — cái nào dùng, cái nào cấm

> **Sau chương này bạn làm được:**
> - Kể tên đúng các công cụ AI trong hệ Kujiale, biết mỗi cái nằm ở đâu, làm gì, và hay sai kiểu gì
> - Bật đúng hai khóa 主体保留 / 材质保留 trước khi cho AI đụng vào bất kỳ ảnh nào
> - Thuộc bảng CẤM / CHO PHÉP nội bộ và giải thích được vì sao có nó (án lệ x3 tiền)
> - Chạy workflow lai 3 tầng: AI ra ý tưởng nhanh → khách duyệt hướng → render chuẩn làm bản giao
> - Làm được vai "người soát thứ hai" trước khi bất kỳ ảnh nào rời công ty

## 8.1 Vì sao chương này nghiêm hơn các chương khác

Bảy chương trước dạy bạn làm ảnh **đúng**. Chương này dạy bạn không để ảnh **đẹp mà sai** rời khỏi công ty.

Công cụ AI của Kujiale ra ảnh rất nhanh, rất "sang" — nhưng bản chất của nó là vẽ lại ảnh theo xác suất, không phải tính toán ánh sáng trên vật liệu thật như render truyền thống. Nó có thể đổi màu gỗ, bịa thêm hoa văn, thay phản quang kim loại, thậm chí xê dịch cửa sổ. Với công ty chỉ làm ảnh cho vui thì kệ. Nhưng Newhomes **bán đồ thật, thi công thật**: khách cầm ảnh ra so với tủ melamine vừa lắp. Ảnh AI sai vân gỗ một lần = một lần thợ tháo ra làm lại, hoặc tệ hơn — mục 8.4 kể bạn nghe tệ hơn là thế nào.

Chương này có hai nửa: nửa đầu **kiểm kê công cụ** (biết địch biết ta), nửa sau **luật chơi nội bộ** (cái gì cấm, cái gì được, quy trình soát).

## 8.2 Kiểm kê: AI của Kujiale gồm những gì

Kujiale có hai nhánh AI liên quan render, cộng một tính năng mới toanh.

### Nhánh 1 — AI室内大师 (AI bậc thầy nội thất), vào qua 应用市场 (chợ ứng dụng)

Đây là cụm công cụ "ảnh vào → ảnh ra" do Kujiale hợp tác với đối tác **建筑学长** (một thương hiệu công cụ AI kiến trúc của Trung Quốc). Ra mắt với **6 chức năng gốc**, sau đó nâng cấp thêm **9 chức năng mới**.

6 chức năng gốc:

| Chức năng | Làm gì | Hay sai kiểu gì |
|---|---|---|
| 模型渲染 (render từ model) | Chụp góc camera từ model Kujiale / bản dựng trắng → ảnh hiệu ứng | Hãng quảng cáo "chính xác 100%", thực tế vẫn phải soát lại vật liệu + tỷ lệ |
| 风格转换 (chuyển phong cách) | Giữ model, đổi không khí sang hiện đại / công nghiệp / tân Trung... | Có thể đổi luôn chi tiết phần cứng (trần, ốp tường) |
| 家具替换 (thay nội thất) | Thay món đồ trên ảnh, hòa nhập tự động | Món AI vẽ ra **không khớp mã hàng thật đang bán** |
| 材质替换 (đổi vật liệu) | Đổi bề mặt: óc chó → sồi trắng... | **Rủi ro cao nhất** — vân AI vẽ khác vân tấm thật của xưởng |
| 局部重绘 (vẽ lại cục bộ) | Bôi vùng cần sửa + mô tả → AI vẽ lại vùng đó | Mô tả lệch một chút là sinh chi tiết ảo |
| 细节增强 (tăng chi tiết) | Làm ảnh tinh xảo, nét hơn | Có thể bịa thêm hoa văn không hề có trong model |

9 chức năng mới (⚠️ danh sách từ bài giới thiệu cộng đồng, chưa kiểm đủ trên tài khoản công ty — xem Sổ ghi nhận mục E3), đáng chú ý:

- 实物装修 (hoàn thiện từ ảnh thật): chụp nhà thô/nhà bàn giao + dán vật liệu → ảnh "nhà tinh". Hợp chào hàng tại chỗ, nhưng AI có thể tự thêm đá bậu cửa sổ, tự đổi trần.
- 手绘创作 (phác tay thành ảnh): line-sketch đen trắng → ảnh hiệu ứng. Kiểm soát kích thước kém.
- 室内照明 (chiếu sáng ngày→đêm): ảnh ban ngày → ảnh bật đèn đêm. Có 准确模式 (chế độ chính xác — giữ nguyên đồ) và 创意模式 (chế độ sáng tạo — **đổi luôn vật liệu đồ đạc**). Dùng thì chỉ dùng 准确模式.
- AI添加家具 (thêm nội thất), 杂物消除 (xóa đồ lặt vặt) và vài chức năng phụ khác.

Chi phí: bản cơ bản miễn phí, các tính năng "ngoan" nhất (khóa vật liệu, không xếp hàng, nhiều style) nằm ở 企业版 (bản doanh nghiệp, trả phí). Tài khoản công ty đang có gì → tự kiểm và điền **Sổ ghi nhận mục E3** (Phụ lục B).

### Nhánh 2 — AI写实增强 / AI修图 (tăng chân thực / sửa ảnh AI), nằm ngay trong pipeline render

Khác nhánh 1, cái này không phải app rời mà gắn thẳng vào ảnh bạn vừa render: vào 图册 (album ảnh) → mở 大图 (ảnh lớn) → nút **AI修图** → **立即增强** (tăng cường ngay). Trong 高级设置 (cài đặt nâng cao) có thanh trượt **创造性** (độ sáng tạo).

Quy tắc một câu: **创造性 càng cao, ảnh càng đẹp kiểu "tạp chí" — và càng xa model gốc của bạn.** Quy định nội bộ: luôn để 创造性 ở mức thấp. Số lần dùng miễn phí mỗi ngày + độ phân giải ảnh ra: chưa có số công khai chắc chắn, tự kiểm theo **Sổ ghi nhận mục E2**.

### Nhánh 3 — AI+渲染 / AI美化 (AI làm đẹp) — mới ra 09/07/2026

> ⚠️ **CẢNH BÁO:** tính năng này mới được công bố tại sự kiện ra mắt sản phẩm của hãng ngày 09/07/2026 — quảng cáo "một chạm tăng chất liệu, 3 giây ra ảnh", kèm bộ template 清晨 / 傍晚 / 夜景 (sáng sớm / chiều tà / cảnh đêm) đổi không khí toàn ảnh. **Chưa rõ tài khoản 高级 thường của công ty đã được mở tính năng này chưa, và đường vào nằm đâu** — kiểm tra theo Sổ ghi nhận mục E1 (Phụ lục B). Về bản chất nó là chuyển phong cách toàn ảnh, tức cùng họ rủi ro với 风格转换: nhanh, đẹp, và lệch gốc.

### Cơ chế khóa sai lệch — thứ BẮT BUỘC bật trước khi dùng bất kỳ nhánh nào

Công cụ AI của Kujiale có hai công tắc:

- **主体保留** (giữ nguyên chủ thể) — khóa bố cục, đồ đạc, kết cấu.
- **材质保留** (giữ nguyên vật liệu) — khóa màu + vân bề mặt.

Hai công tắc này **không tự bật — bạn phải bật tay**. Không bật thì AI được toàn quyền "sáng tác": tài liệu của chính hệ sinh thái này thừa nhận khi không khóa, AI có thể đổi màu, đổi vật liệu, và từng ghi nhận **đổi cả vị trí cửa sổ**. Bên 建筑学长 còn bán riêng tính năng 材质锁定 (khóa vật liệu) ở bản 企业版 với lời quảng cáo đại ý "để AI ngoan ngoãn nghe lời" — hãng tự nói vậy, tức mặc định nó *không* ngoan.

Và kể cả bật đủ khóa: **ảnh sinh ra vẫn phải soát bằng mắt người** trước khi đi tiếp. Khóa giảm xác suất sai, không đưa nó về 0.

> 💡 Template đèn thông minh (智能打光, 自动曝光...) cũng gắn mác AI nhưng thuộc pipeline render truyền thống — đã học ở C3/C4, không tính vào các quy định cấm của chương này.

## 8.3 Án lệ 钟某: ảnh AI nói là thật = đền gấp 3

Ngày 12/03/2026, Tòa án Trung cấp Quảng Châu công bố một vụ trong nhóm 10 án điển hình bảo vệ người tiêu dùng: khách hàng 钟某 mua 2 chiếc áo giá 411 tệ qua ảnh quảng cáo. Ảnh do AI sinh, nhưng người bán khẳng định "toàn bộ là ảnh chụp thật". Tòa phán đây là **消费欺诈** (lừa dối tiêu dùng): người kinh doanh có nghĩa vụ thẩm tra nội dung do AI sinh ra; nội dung AI khác biệt rõ với thực tế mà không nói thật, khiến khách hiểu sai và xuống tiền, là lừa dối. Kết quả: **hoàn tiền + bồi thường gấp 3 lần giá mua**.

Chuyện áo quần, nhưng loại suy sang nội thất là một đường thẳng: khách ký hợp đồng dựa trên ảnh có vân gỗ, màu đá, ánh kim loại do AI bịa → lắp xong khác ảnh → đó chính là "货不对板" (hàng không đúng ảnh). Ở Trung Quốc, luật chống cạnh tranh không lành mạnh bản sửa đổi (hiệu lực 15/10/2025) còn nâng trần phạt quảng cáo sai lên tới 2 triệu tệ.

Đây là án lệ Trung Quốc — Việt Nam chưa có án tương tự để dẫn. Nhưng đừng thở phào: cái bạn chắc chắn gặp trước tòa án là **khách so ảnh với tủ vừa lắp ngay tại công trình**, và một bài bóc phốt kèm ảnh so sánh trên nhóm cư dân Ocean Park. Với công ty bán đồ thật, thi công thật, **sai vật liệu trên ảnh = mất tiền thật** — tiền tháo lắp lại, tiền giảm giá xoa dịu, và đắt nhất là tiền uy tín không mua lại được.

Một giám đốc thiết kế studio Hong Kong (⚠️ phỏng vấn báo chí 07/2026) nói gọn: AI hay sinh ra vật liệu "tìm mãi không mua được" — mọi phương án cuối vẫn phải ra công trường đo, bàn với thợ rồi mới chốt.

## 8.4 QUY ĐỊNH NỘI BỘ: bảng CẤM / CHO PHÉP

Đây là quy định làm việc, không phải gợi ý. Căn cứ: mục 8.3.

### CẤM TUYỆT ĐỐI dùng ảnh AI (bắt buộc render chuẩn 离线模式 theo C2–C6)

| # | Loại ảnh | Vì sao |
|---|---|---|
| 1 | Ảnh chốt phương án để khách ký duyệt | Khách quyết định xuống tiền dựa trên ảnh này |
| 2 | Ảnh đính kèm hợp đồng / báo giá | Thành chứng cứ pháp lý — sai là "货不对板" |
| 3 | Ảnh mô tả vật liệu cụ thể sẽ thi công (vân melamine, màu acrylic, mặt đá, vải...) | AI bịa vân đẹp hơn tấm thật = tự tạo khiếu nại |
| 4 | Ảnh nghiệm thu, ảnh cam kết "giống thực tế" | Đây là lời hứa, không phải minh họa |

### CHO PHÉP dùng ảnh AI (có điều kiện)

| # | Loại ảnh | Điều kiện bắt buộc |
|---|---|---|
| 1 | Ảnh ý tưởng sơ bộ, mood board, thăm dò phong cách | Nói rõ với khách: "đây là ảnh minh họa hướng phong cách, không phải bản chốt" |
| 2 | Ảnh marketing / đăng mạng xã hội | **Luôn kèm watermark "Ảnh minh họa AI"** trên ảnh, không chỉ trong caption |
| 3 | Sửa nhanh tại chỗ khi khách muốn thử đổi phong cách trong buổi tư vấn | Nói rõ là bản nháp; muốn chốt thì về render chuẩn |

### Quy tắc kỹ thuật khi được phép dùng

1. Luôn bật **主体保留 + 材质保留** trước khi sinh ảnh.
2. 创造性 để mức thấp.
3. Đồ trong ảnh phải đối chiếu được với mã hàng thật công ty đang bán — món nào AI "vẽ thêm" thì hoặc xóa, hoặc ghi chú rõ với khách.

### Quy trình 2 người soát — không ảnh nào rời công ty qua tay 1 người

Mọi ảnh gửi khách (AI hay render chuẩn) phải qua một người thứ hai soát 4 điểm, đối chiếu với model gốc:

- [ ] Vật liệu / màu / vân đúng với mẫu công ty đang bán?
- [ ] Kích thước, tỷ lệ đồ đạc hợp lý (tủ không cao xuyên trần, bàn không dài quá phòng)?
- [ ] Bố cục, kết cấu (cửa, cửa sổ, trần) đúng vị trí như model?
- [ ] Nếu là ảnh AI: đã có watermark "Ảnh minh họa AI" chưa?

> ⚠️ **Ngưỡng siết chặt:** ngay khi công ty nhận ≥1 khiếu nại "ảnh khác thực tế", ảnh AI bị cấm dùng cả ở khâu marketing cho tới khi quy trình watermark + soát chéo được rà lại xong. Không thương lượng.

## 8.5 Workflow lai 3 tầng: dùng AI đúng chỗ để nhanh mà không liều

AI không phải kẻ thù — nó chỉ bị cấm ngồi nhầm ghế. Ghế đúng của nó là **đầu quy trình**, chỗ tốc độ đáng giá hơn độ chính xác:

**Tầng 1 — AI ra ý tưởng (nhanh, rẻ, được phép sai).**
Khách mới, chưa rõ thích gì → dùng 模型渲染 / 风格转换 sinh nhanh 3 hướng phong cách trên chính mặt bằng căn của khách. Thay cho việc lục 50 ảnh mạng mất cả buổi. Ảnh ở tầng này là ảnh nháp — nói rõ với khách như vậy.

**Tầng 2 — khách duyệt hướng.**
Khách chọn 1 trong 3 hướng, góp ý màu, không khí. Muốn cho khách xem thêm biến thể → style transfer tiếp, vẫn dán nhãn minh họa. Chốt hướng xong mới sang tầng 3.

**Tầng 3 — render chuẩn làm bản giao.**
Dựng model bằng đúng mã hàng, đúng vật liệu công ty (C5), đánh sáng (C3–C4), đặt camera (C6), render 离线模式 chất lượng cao (C2). Ảnh này mới là ảnh ký duyệt, đính hợp đồng. Được phép chạy AI修图 mức nhẹ cho sạch nhiễu — 创造性 thấp, đủ khóa, và vẫn qua 2 người soát.

Ăn tiền của workflow này: tốc độ AI nằm ở khâu **chưa ai cam kết gì**, còn mọi lời hứa với khách đều đứng trên render chuẩn — thứ "thấy gì được nấy". ⚠️ Hãng dẫn case doanh nghiệp khoe "20 phút ra 3 phương án, chu kỳ thiết kế 7 ngày còn 2 ngày" — số nói tại sự kiện tiếp thị của chính hãng, nghe để tham khảo nhịp làm, đừng lấy làm chỉ tiêu.

## Thực hành

**Bài 1 — Bắt lỗi AI bằng chính mắt mình.**
Lấy 1 góc phòng khách căn mẫu đã render chuẩn ở C4/C5. Vào 应用市场 mở AI室内大师, chạy 模型渲染 cùng góc đó (chưa bật khóa gì cả). Đặt 2 ảnh cạnh nhau, tìm tối thiểu **3 điểm AI tự đổi** so với model (vân gỗ, màu, phản quang, đồ bịa thêm...). *Đạt khi:* liệt kê được ≥3 khác biệt cụ thể, chỉ đúng vị trí trên ảnh. Nhân tiện điền Sổ ghi nhận D3 (chức năng nào miễn phí / đòi 企业版).

**Bài 2 — Thanh 创造性 nguy hiểm thế nào.**
Lấy 1 ảnh render chuẩn có tủ melamine vân gỗ. Chạy AI修图 hai lần: một lần 创造性 thấp nhất, một lần cao nhất. So vân gỗ 2 ảnh ra với vân tấm mẫu thật của công ty. *Đạt khi:* chỉ ra được bản 创造性 cao lệch vân/màu ở đâu, và tự trả lời "ảnh này gửi khách chốt được không, vì sao". Điền luôn Sổ ghi nhận D2 (số lần miễn phí/ngày, độ phân giải ra) và D1 (tài khoản có AI美化 chưa).

**Bài 3 — Đóng vai người soát thứ hai.**
Nhờ đồng nghiệp (hoặc tự làm mù: để ảnh nghỉ 1 ngày) đưa bạn 1 ảnh AI + model gốc. Soát theo checklist 4 điểm mục 8.4, ghi kết luận: cho đi / chặn lại, lý do. *Đạt khi:* bắt được toàn bộ điểm sai đã cài (người đưa ảnh cố tình để 创造性 cao hoặc quên watermark).

## Checklist tự chấm

- [ ] Kể được 2 nhánh AI + 1 tính năng mới 09/07/2026, và đường vào của từng cái
- [ ] Biết 主体保留 / 材质保留 nằm đâu và vì sao phải bật tay
- [ ] Kể lại được án lệ 钟某 trong 3 câu: chuyện gì, tòa phán gì, liên quan gì đến Newhomes
- [ ] Thuộc 4 loại ảnh CẤM dùng AI, không cần mở sách
- [ ] Thuộc 3 loại ảnh CHO PHÉP + điều kiện đi kèm từng loại
- [ ] Nói được 4 điểm người soát thứ hai phải kiểm
- [ ] Vẽ lại được workflow 3 tầng và chỉ ra tầng nào ảnh AI bị cấm
- [ ] Đã điền Sổ ghi nhận D1, D2, D3 (Phụ lục B)

## Lỗi thường gặp trong chương này

| Hiện tượng | Nguyên nhân | Cách sửa |
|---|---|---|
| Ảnh AI ra vân gỗ đẹp lạ, kho mẫu công ty không có tấm nào giống | 创造性 cao và/hoặc quên bật 材质保留 | Hạ 创造性, bật khóa, đối chiếu lại mã hàng; ảnh đã lỡ gửi khách → báo lại ngay là ảnh minh họa |
| Ảnh marketing đăng lên thiếu chữ "Ảnh minh họa AI" | Bỏ qua bước soát thứ hai | Gỡ/sửa bài, bổ sung watermark; rà lại quy trình 2 người |
| Ảnh AI đổi vị trí cửa sổ / thêm đá bậu cửa mà không ai nhận ra | Không bật 主体保留 + soát ảnh chỉ nhìn "đẹp/xấu" | Bật khóa; người soát so ảnh với model gốc từng mảng tường, không so trí nhớ |
| Tưởng AI美化 "3 giây ra ảnh" thay được render chuẩn | Nhầm bản chất: nó là chuyển phong cách toàn ảnh, không phải tính ánh sáng vật lý | Bản giao khách luôn là render 离线模式; AI美化 nếu có chỉ dùng cho ảnh minh họa |
| Khách đòi chốt ngay trên ảnh AI ở buổi tư vấn | Ảnh tầng 1 quá thuyết phục | Vui vẻ nhận đó là tín hiệu tốt, hẹn bản chốt render chuẩn — không ký trên ảnh nháp |

## Nguồn số liệu

- **Nguồn chính thức (help center kujiale.com/hc):** đường vào + hành vi AI写实增强/AI修图 (article 3FO4K4WI5A6N), 局部智能编辑 (3FO4K4WEX1D3), động thái sản phẩm AI 2026 (3FO4K4WEL6QJ).
- **Án lệ + luật (nguồn công bố chính thức Trung Quốc):** vụ 钟某 kiện công ty may mặc, Tòa Trung cấp Quảng Châu công bố 12/03/2026, phán 消费欺诈, hoàn tiền + bồi thường gấp 3 theo Điều 55 Luật Bảo vệ quyền lợi người tiêu dùng TQ; luật chống cạnh tranh không lành mạnh sửa đổi hiệu lực 15/10/2025, trần phạt quảng cáo sai 200万 tệ.
- **Nguồn cộng đồng / tiếp thị (⚠️):** danh sách 6+9 chức năng AI室内大师 (bài Zhihu + video Bilibili giới thiệu hợp tác 建筑学长); công bố AI+渲染/AI美化 tại sự kiện hãng 09/07/2026 (đưa tin 163.com); nhận xét template đèn dễ cháy sáng (bài test Zhihu 02/2024 — dữ liệu cũ); phát biểu hiệu quả "7 ngày → 2 ngày" của khách hàng mẫu tại sự kiện hãng.
- **Số chờ verify trong app (Phụ lục B):** D1 — tài khoản công ty có AI美化/AI+渲染 chưa, đường vào; D2 — số lần AI修图 miễn phí/ngày + độ phân giải ảnh ra; D3 — chức năng AI室内大师 nào miễn phí / đòi 企业版.

---

## Tự tra video thực chiến

> 📌 **Sách này cho bạn ĐƯỜNG ĐI. Video cho bạn ĐÔI TAY.**
>
> Chương vừa rồi dựng khung: nguyên lý là gì, thứ tự làm ra sao, số nào tin được số nào không. Nhưng thao tác thật — chuột đi đường nào, bấm chỗ nào, chỉnh tới đâu thì dừng — thì **xem người ta quay màn hình học nhanh hơn đọc nhiều lần.** Người làm nghề Trung Quốc chia sẻ rất nhiều và rất thực chiến.
>
> **Đọc chương xong, tra vài video về đúng công cụ AI, rồi quay lại làm.** Đó mới là cách chương này phát huy hết.

Dán nguyên cụm vào ô tìm kiếm của **小红书** hoặc **抖音 (Douyin)**:

| Từ khoá | Tìm được gì |
|---|---|
| `酷家乐 AI 渲染 教程` | Hướng dẫn render bằng AI |
| `酷家乐 AI美化` | Làm đẹp ảnh bằng AI |
| `酷家乐 AI室内大师` | Công cụ AI dựng nội thất |
| `AI 效果图 风险` | Rủi ro khi dùng ảnh AI — xem để hiểu vì sao công ty có quy định cấm |

> 💡 **Bốn quy tắc lọc, dùng cho mọi từ khoá:** sắp theo `最新` (mới nhất) · ưu tiên bài có **ảnh chụp panel kèm số** · bỏ bài `AI一键` (quảng cáo) · **chỉ chép số từ bài ghi rõ template 3.0 hoặc 3.1**, bài cũ hơn thì chỉ học tư duy.
>
> Cách vào 小红书 từ Việt Nam, danh sách tài khoản đáng theo dõi, và mẫu ghi lại một ca thu được: xem **Phụ lục E mục E.10**.
