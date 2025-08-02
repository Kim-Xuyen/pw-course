###Lesson 5
-
##DOM 
---


>_- Function advance:_  

`Lambda function (Arrow function)`  

***Khái niệm: là một cách ngắn gọn để viết hàm trong JS, sử dụng dấu => thay vì từ khóa function***  

****Cú pháp***
```
(parameters) => {
    // code here
}

Ex:

const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7
 
```

>_- Function advance:_  

`Anonymous functions`  

***Khái niệm: là hàm không có tên, thường được sử dụng 1 lần hoặc làm đối số truyền vào các hàm khác***  

****Cú pháp***
```
function (parameters) => {
    // code here
}

Ex:

function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5

 
```

>_- DOM (Document Object Model)_  

***Khái niệm: là một mô hình dữ liệu dạng cây thể hiện cấu trúc của một tài liệu HTML hoặc XML mà Javascript có thể truy cập và thao tác được***  

****Cấu trúc***
```
Document
└── html
    └── body
        ├── h1#title
        └── p.text

 Ex:

<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Hello DOM</h1>
    <p class="text">This is a paragraph.</p>
    <img src="image.jpg" alt="Image description"/>
  </body>
</html>

```
****Cấu trúc của 1 element trong DOM***
```
Một element:
<option>United States</option>
<h1 id="title">Hello DOM</h1>

* Thẻ mở: <option> || <h1 id="title">

* Thẻ đóng: </option> || </h1>

* Thẻ tự đóng: < element />

* Text: "United StatesUnited States" || "Hello DOM"

* Thuộc tính: id 

* Gía trị thuộc tính: "title"

```

****Các thẻ HTML thường gặp***

```
| **Thẻ HTML**              | **Ý nghĩa / Tên đầy đủ** | **Chức năng / Mô tả**                                      |
| ------------------------- | ------------------------ | ---------------------------------------------------------- |
| `<div>`                   | Divide                   | Chia các khối nội dung trong trang web                     |
| `<h1>` → `<h6>`           | Heading                  | Tạo tiêu đề từ cấp lớn nhất (`<h1>`) đến nhỏ nhất (`<h6>`) |
| `<form>`                  | Form                     | Bao bọc một biểu mẫu nhập liệu                             |
| `<input type="text">`     | Input Text               | Ô nhập văn bản đơn dòng                                    |
| `<input type="email">`    | Input Email              | Ô nhập email, có kiểm tra định dạng                        |
| `<input type="radio">`    | Radio Button             | Nút chọn một lựa chọn trong nhiều lựa chọn                 |
| `<input type="checkbox">` | Checkbox                 | Nút chọn nhiều lựa chọn cùng lúc                           |
| `<input type="file">`     | File Upload              | Chọn và tải file lên                                       |
| `<input type="color">`    | Color Picker             | Chọn màu từ bảng màu                                       |
| `<input type="range">`    | Range Slider             | Thanh trượt chọn giá trị trong khoảng xác định             |
| `<input type="date">`     | Date Picker              | Chọn ngày trong lịch                                       |
| `<textarea>`              | Textarea                 | Ô nhập văn bản nhiều dòng                                  |
| `<select>` / `<option>`   | Dropdown / List          | Danh sách chọn hoặc menu thả xuống                         |
| `<button>`                | Button                   | Tạo nút bấm (có thể dùng để submit, reset hoặc xử lý JS)   |
| `<table>`                 | Table                    | Tạo bảng dữ liệu                                           |
| `<thead>`                 | Table Head               | Phần đầu bảng, chứa các dòng tiêu đề                       |
| `<tr>`                    | Table Row                | Một dòng trong bảng                                        |
| `<th>`                    | Table Heading            | Ô tiêu đề, thường in đậm và căn giữa                       |
| `<tbody>`                 | Table Body               | Phần thân của bảng                                         |
| `<td>`                    | Table Data               | Ô dữ liệu trong bảng                                       |
| `<iframe>`                | Inline Frame             | Hiển thị nội dung từ trang web khác trong trang hiện tại   |

```

`Selector`  

***Khái niệm: là cách chọn phần tử trên trang***  

****Có nhiều kiểu***

** CSS selector (học ở bài sau)

** Playwright selector (học ở bài sau)

** Xpath selector
 >> Có 2 loại:  

* Tuyệt đối: đi dọc theo cây DOM  
■ bắt đầu bởi 1 /  

Ex: /html/body/div[1]/form/input[1]


* Tương đối: tìm dựa vào đặc tính  
■ bắt đầu bởi 2 //  
■ //tenthe[@thuoctinh=”giatri”]  

Ex: //button[@id="submit-btn"]

** So sánh xpath tuyệt đối và xpath tương đối
```
| 📌 Tiêu chí                          | ✅ XPath Tuyệt Đối        | ✅ XPath Tương Đối    |
| ------------------------------------ | ------------------------ | -------------------- |
| **Ký hiệu bắt đầu**                  | `/`                      | `//`                 |
| **Phụ thuộc vào cấu trúc DOM**       | Cao – dễ vỡ khi thay đổi | Thấp – linh hoạt hơn |
| **Độ linh hoạt**                     | ❌ Thấp                   | ✅ Cao                |
| **Dễ đọc / dễ bảo trì**              | ❌ Khó                    | ✅ Dễ                 |
| **Thường dùng thực tế**              | ❌ Ít                     | ✅ Rất phổ biến       |
| **Tính chính xác (nếu DOM ổn định)** | ✅ Chính xác              | ✅ Chính xác          |

```
---> Nên dùng Xpath tương đối  


`Playwright basic syntax - test`  

***Khái niệm: Đơn vị cơ bản để khai báo một test***  

****Cú pháp***

```
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
// Code của test
});

```

`Playwright basic syntax - step`  

***Khái niệm: Đơn vị nhỏ hơn test, để khai báo từng step của test case***  

****Cú pháp***

```
await test.step('Tên step', async () => {
// Code here
});

* Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.

await test.step('Tên step', async () => {
// Code here
});
------

test('<tên test>', async ({ page }) => {
await test.step('Tên step', async () => {
// Code here
});
});

```

○ Basic actions - Navigate
>> await page.goto('https://pw-practice.playwrightvn.com/');

○ Basic actions - Click

* Single click  
>> await page.locator("//button").click(); 

* Double click  
>>>await page.locator("//button").dblclick();

* Click chuột phải  

>>>page.locator("//button").click({
>>>button: 'right'
>>>})

* Click chuột kèm bấm phím khác  
>>>page.locator("").click({
>>>modifiers: ['Shift'],
>>>})

○ Basic actions - Input

* Fill: Giống việc bạn paste content vào một ô input  
>>>page.locator("//input").fill('Playwright Viet Nam');

* pressSequentially: Giống việc bạn gõ từng chữ cái vào ô input  
>>>page.locator("//input").pressSequentially('Playwright Viet Nam', {delay: 100,});

○ Basic actions - Radio/checkbox 

* Lấy giá trị hiện tại đang là check hay không:
>>>const isChecked =
>>>page.locator("//input").isChecked();

* Check/ uncheck
>>>page.locator("//input").check();
>>>page.locator("//input").setChecked(false);

○ Basic actions - Select option
>>>await page.selectOption('#fruit', 'banana'); 

 Basic actions - Set Input File
>>>await page.setInputFiles('#uploadFile', 'path/to/file.png');


