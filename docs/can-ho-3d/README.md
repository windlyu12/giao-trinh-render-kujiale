# Căn hộ 2PN Japandi – mô hình 3D

Mô hình khối 3D căn hộ 2 phòng ngủ dựng từ mặt bằng nội thất (AutoCAD), phong cách Japandi, trần 2.7 m, nội thất gỗ MDF An Cường.

**Xem online:** https://windlyu12.github.io/giao-trinh-render-kujiale/can-ho-3d/ (ai mở cũng xem được, không cần đăng nhập). Bạn có thể:

- Xoay, phóng to, thu nhỏ mô hình
- Cắt ngang ở 1.4 m hoặc 0.9 m
- Xem từ tầm mắt trong phòng khách và trong phòng ngủ master
- Chuyển ánh sáng ban ngày hoặc buổi tối
- Bấm vào từng món để xem kích thước và vật liệu

## Tệp

| Tệp | Nội dung |
|---|---|
| `index.html` | Trang xem 3D (three.js) |
| `model.js` | Dữ liệu dựng mô hình: tường, cửa, nội thất (đơn vị pt của PDF, cao độ m) |
| `can_ho_3d.glb` / `.obj` | Mô hình để mở bằng SketchUp, Blender, Revit… |
| `tools/dung_khoi_3d.py` | Script Python sinh lại GLB/OBJ (`pip install trimesh shapely mapbox_earcut`) |

## Cách trang được đăng

Thư mục này nằm trong `docs/` của repo giáo trình. GitHub Pages của repo đang serve `docs/` từ nhánh `main`, nên chỉ cần thư mục này có trên `main` là trang lên, không phải cấu hình thêm. Sửa `index.html` hoặc `model.js` rồi đẩy lên `main`, đợi 1–2 phút là link cập nhật.

Script `build-site-from-content-markdown.py` ở gốc repo chỉ ghi đè các trang chương và `docs/index.html`, không đụng tới thư mục này.
