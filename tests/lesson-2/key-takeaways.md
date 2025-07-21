#Lesson 2

##Git
- Mục đích: dùng để quản lý phiên bản giữa các project và là cách hữu hiệu để có thể làm việc với nhiều người
- Công dụng: dễ dùng, tốc độ xử lý nhanh, chi phí free, phổ biến
- So sánh Git và Github:
-- Git: là một phần mềm cài trên máy tính, là commandline tool, công cụ quản lý phiên bản, đưa file vào git repository, có các tính tăng của Version Control System
-- Github: là một dịch vụ web, Host trên web, là công cụ có giao diện, là nơi để upload git repository lên, có các tính năng của Version Control System và một số tính năng khác
- Có 3 vùng git
-- Working Directory: vùng quản lý các file mới hoặc các file có thay đổi trên local máy tính
-- Staging Area: các file đưa vào để chuẩn bị commit(tạo ra các phiên bản)
-- Repository: Các commit(phiên bản) hay gọi là vùng lưu trữ lịch sử của các phiên bản
- Các bước để add một folder từ local máy lên vùng repository và push lên github
-- git init
-- git add <filename> or git add .
-- git commit -m "message"
-- git push origin master
* dùng global config khi muốn áp dụng cho tất cả các repo
* 
##Javascript
- Khái niệm: là một ngôn ngữ lập trình giúp cho browser có thể hoạt động được
-- Trên browser Javascript có thể chạy được là do browser enginee support
--- Edge: Chaka
--- Firefox: SpiderMonkey
--- Chrome: V8
-- Để chạy được trên máy tính không cần trình duyệt thì cần dùng Node Js run-time
- Biến:
-- Var: biến dùng để lưu trữ giá trị, có thể thay đổi giá trị được, phạm vi toàn cục
--- Cú pháp: var <tenbien> = <giatri>;
- Let: biến dùng để lưu trữ giá trị ở phạm vi trong cặp ngoặc {} -> nên dùng let vì dễ kiểm soát phạm vi
--- Cú pháp: let <tenbien> = <giatri>;
- Const: hằng số, dùng để khai báo giá trị không thể thay đổi được
--- Cú pháp: const <name> = <value>;
- Data type: có 8 loại kiểu dữ liệu
-- String: khai báo dữ liệu kiểu chuỗi
-- Number: khai báo dữ liệu kiểu số
-- Boolean: khai báo giá trị kiểu true/false
-- Null: khai báo kiểu dữ liệu rỗng
-- Undefined: khai báo kiểu dữ liệu không được định nghĩa
-- Symbol: Khai báo dạng biểu tượng
-- Object: khai báo dạng đối tượng
-- Bigint: lưu trữ số nguyên rất lớn
- Comparison operation(toán tử so sánh) bao gồm: >, <, ==, ===, !=. >=. <=
--> Sự khác nhau giữa == và  === học ở bài sau
- Unary operation(toán tử một ngôi) bao gồm i++ bằng với  i = i + 1 hoặc i-- bằng với i = i - 1
- Arithmetic operation(toán tử số học) bao gồm +, -, *, /
- Condition(điều kiện):
-- Cú pháp: if(<điều kiện>){// code}
- Loop(vòng lặp)
-- Cú pháp: for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>){// code}
- Format code:
-- Mac: Option + Shift + F
-- Win: Alt + Shift + F
