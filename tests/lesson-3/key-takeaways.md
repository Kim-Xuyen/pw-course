###Lesson 3
-
##Git
---

***`Undo things`***
---

>_- Lệnh thay đổi commit message:_  
`git commit --amend`
* i:  vào chế độ insert
* esc:  thoát chế độ insert
* :wq: -> write and quit

`=>` Ví dụ: - git commit --amend -m"message"

>_- Lệnh thêm file mới và giữ nguyên commit message gần nhất:_  
`git add <file>` -> `git commit --amend --no-edit`

`=>` Ví dụ:

`->` - git add file1

`->` - git commit --amend --no-edit

>_- Lệnh hủy tất cả các commit:_
`git restore .`

`=>` Ví dụ: - git restore .

>_- Lệnh hoàn tác thay đổi chưa được git add, khôi phục về trạng thái commit gần nhất:_  
`git restore <file>`

`=>` Ví dụ: - git restore file1

>_- Lệnh đưa file từ vùng staging về vùng working directory:_  
`git restore --staged <file>`

`=>` Ví dụ: - git restore --staged file1

>_- Lệnh khôi phục file về trạng thái của 1 commit cụ thể:_  
`git restore --source <commit> <file>`

`=>` Ví dụ: - git restore --source HEAD~1 file1

>_- Lệnh đưa file từ vùng repository về working directory (uncommit):_  
`git reset HEAD~1 (undo 1 commit)`

`=>` Ví dụ: - git reset HEAD~2

>_- Lệnh xóa commit gần nhất nhưng vẫn giữ các thay đổi trong vùng staging:_  
`git reset --soft HEAD~1`

`=>` Ví dụ: - git reset --soft HEAD~1

>_- Lệnh xóa commit gần nhất cà xóa luôn các thay đổi trong vùng working directory:_  
`git reset --hard HEAD~1`

`=>` Ví dụ: - git reset --hard HEAD~1

***`Branching model`***
---

>_- Lệnh tạo nhánh trong git:_  
`git branch <ten_branch>`  

>_- Lệnh đổi tên nhánh:_  
`git branch --move <ten_branch_old> <ten_branch_new>`  

>_- Lệnh xóa nhánh:_  
`git branch -d <ten_branch>` 

>_- Lệnh chuyển nhánh trong git:_  
`git checkout <ten_branch>`  

>_- Lệnh kết hợp giữa tạo nhánh mới và di chuyển vào nhánh vừa tạo:_  
`git checkout -b <ten_branch>`  

---> Tip: khi clone code từ git về, luôn tạo một nhánh mới và thực hiện thay đổi trong nhánh mới, để khi có issue xảy ra trong quá trình viết code thì vẫn có thể switch về branch cũ để code trở về trạng thái ban đầu

>_- Cách ignore file: đưa tất cả các file không cần push lên github vào file .gitignore_  
`file .gitignore`  

##VSCode
--
> Muốn xem các thay đổi trên git, nhấn vào source Control ở menu bên trái màn hình Visual Studio Code hoặc nhấn tổ hợp phí Ctrl + Shift + G

##Javascript
---

>_- Conventions (Các quy tắc đặt tên):_    
* Đặt tên file: kebab-case  
`Ex: demo-login`  

* Đặt tên folder: PascalCase  
`Ex: BaiHoc01`  

* Đặt tên biến: camelCase  
`Ex: hocSinh`  

>_- Formatted (console.log):_  
 
-- Có 2 cách bỏ dấu nháy ( dùng ' hoặc ")  

`Ex: console.log('1 con vit')`  

`Ex: console.log("1 con vit")`  

-- Cách kết hợp text và chèn biến trong console.log  

`Ex: console.log(`\`${variable_name}\`)

`Ex: console.log(`\`Toi ten ${variable_name}\`)

`Ex: console.log("Toi ten" + ${variable_name})`

## - Object:

Khái niệm: là đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng 1 biến hoặc hằng số

** Khai báo:  
> let/const <ten_object> = {   
>    <thuoc_tinh>: <gia_tri>,  
>    ...  
>}  

Trong đó:  
<thuoc_tinh>: giống quy tắc đặt tên biến  
<gia_tri>: có kiểu giống biến, hoặc là 1 object khác

** Sử dụng  
> Ex: console.log("name = " + user.name);  

> Ex: console.log("manufacturer = " + product.manufacturer.name);

> Ex: console.log("price = ", product["price"]);  

** Gán lại  

> Ex:  
> user.age = 18  
> product["manufacturer"]["year"] = 2025

>_- Logical operator:_

* &&: cả 2 vế của mệnh đề đều đúng

* ||: một trong 2 vế đúng

* !: đảo ngược lại giá trị của mệnh đề

## - Array:

Khái niệm: là một kiểu dữ liệu dùng để lưu trữ nhiều giá trị trong một biến duy nhất, thay vì phải tạo nhiều biến riêng lẻ 

1. Tạo mảng   

1.a. Khai báo  
> let fruits = ["apple", "banana", "cherry"];  

1.b. Sử dụng
>console.log(fruits); 

2. Truy xuất mảng
 

2.a Truy xuất theo độ dài mảng (length)
>console.log(fruits.length);

2.b Truy xuất bằng index  
>console.log(fruits[0]);

## - Function:

Khái niệm: function là hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện một nhiệm vụ hoặc 1 tính toán cụ thể

**1. Khai báo**

> function <nameFunction>(){  
> // code  
>}  

--Ví dụ về khai báo không có tham số đầu vào

>function sayHello() {  
>  console.log("Xin chào!");  
>}  

>sayHello(); 

**2. Parameter (Khai báo có tham số đầu vào)**

>function sayHi(name) {  
>  console.log("Hi, " + name);  
>}  
>sayHi("Nini"); 

**3. Return value:**

>function square(n) {  
>  return n * n;  
>}  
>let result = square(4);
