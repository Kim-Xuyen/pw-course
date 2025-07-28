###Lesson 4
-
##Javascript
---


>_- Phạm vi của biến:_  

`var`  
***Khái niệm: phạm vi global, có thể truy cập được vào biến trước khi khai báo***  
***Giá trị: Undefined***

`let`  
***Khái niệm: phạm vi scope{}, không thể truy cập vào biến trước khi khai báo***  

>_- Advance condition: if...else, if...else if switch...case:_ 

```
if ... else

if ... else if ... if

switch ... case
    default
```
`=> So sánh sự khác nhau giữa if ... else và switch ... case`  
* if...else: , , giá tr
* switch...case: , 

```
| if...else                                                                 | switch...case                                                             |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------|
| Được sử dụng để chọn giữa 2 tùy chọn                                      | Được sử dụng giữa nhiều tùy chọn                                          |
| Nếu câu lệnh trong if false thì câu lệnh trong else sẽ được thực thi      | Nếu điều kiện trong switch false thì câu lệnh default sẽ được chạy        |
| Được xác định bởi các ràng buộc                                           | Được xác định bởi các tùy chọn người dùng                                 |
| Khó thay đổi vì mất thời gian xác định vị trí cần sửa                     | Dễ thay đổi vì dễ theo dõi                                                |
| Có thể dùng nhiều câu lệnh if lồng nhau                                   | Chỉ có một biểu thức trong switch, dùng nhiều case                        |
  
```

>_- == and !=:_ 
* == and !=: so sánh kiểu lỏng lẻo, convert giá trị về kiểu "lớn hơn", chỉ so sánh giá trị mà không quan tâm đến kiểu dữ liệu  
`Ex: 10 == "10" => true ||  4 == "5" => false`

* === and !==: so sánh tuyệt đối, so sánh giá trị và kiểu dữ liệu  
`Ex: 10 === 10 => true || "10" === 10 false`


>_- Vòng lặp nâng cao:_
```
| Vòng lặp     | Array                         | Object                         | Ghi chú                                                                 |
|--------------|-------------------------------|--------------------------------|-------------------------------------------------------------------------|
| `for...in`   | Lặp qua index                 | Lặp qua key                    | Không nên dùng với array khi thứ tự quan trọng                         |
| `forEach`    | Lặp qua value + index         | Không dùng trực tiếp           | Dùng `Object.entries()` để lặp object                                  |
| `for...of`   | Lặp qua value                 | Không dùng trực tiếp           | Dùng `Object.entries()` hoặc `Object.values()` để lặp object           |

🔁 for...in:
Ex: 
-- Array:
    const arr = ['a', 'b', 'c'];
    for (const index in arr) {
    console.log(index, arr[index]);
    }
    // Output:
    // 0 a
    // 1 b
    // 2 c

-- Object:
    const obj = { name: 'Ni', age: 25 };
    for (const key in obj) {
    console.log(key, obj[key]);
    }
    // Output:
    // name Ni
    // age 25


🔁 forEach
Ex: 
-- Array:
    const arr = ['a', 'b', 'c'];
    arr.forEach((value, index) => {
    console.log(index, value);
    });
    // Output:
    // 0 a
    // 1 b
    // 2 c


-- Object: Không dùng trực tiếp → Phải chuyển sang mảng trước.
    const obj = { name: 'Ni', age: 25 };
    Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value);
    });
    // Output:
    // name Ni
    // age 25



🔁 for...of
Ex: 
-- Array:
    const arr = ['a', 'b', 'c'];
    for (const value of arr) {
    console.log(value);
    }
    // Output:
    // a
    // b
    // c



-- Object: Không dùng trực tiếp →  Phải dùng Object.values, Object.entries.
    const obj = { name: 'Ni', age: 25 };
    for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
    }
    // Output:
    // name Ni
    // age 25

```


>_- Các hàm tiện ích có sẵn giúp xử lý code nhanh gọn hơn:_  

**○ String util:**
| Phương thức         | Công dụng                                                            | Ví dụ                                                    |
|---------------------|----------------------------------------------------------------------|-----------------------------------------------------------|
| `startsWith()`      | Kiểm tra chuỗi có bắt đầu bằng ký tự/chuỗi con nào đó không         | `'Hello'.startsWith('He') → true`                        |
| `endsWith()`        | Kiểm tra chuỗi có kết thúc bằng ký tự/chuỗi con nào đó không        | `'Hello'.endsWith('lo') → true`                          |
| `includes()`        | Kiểm tra chuỗi có chứa chuỗi con nào đó không                       | `'Hello'.includes('ll') → true`                          |
| `slice()`           | Cắt chuỗi từ vị trí xác định                                        | `'Hello'.slice(1, 4) → 'ell'`                            |
| `toUpperCase()`     | Chuyển toàn bộ chuỗi thành chữ in hoa                               | `'hello'.toUpperCase() → 'HELLO'`                        |
| `toLowerCase()`     | Chuyển toàn bộ chuỗi thành chữ thường                               | `'HELLO'.toLowerCase() → 'hello'`                        |
| `charAt()`          | Lấy ký tự tại vị trí cụ thể                                         | `'Hello'.charAt(1) → 'e'`                                |
| `split()`           | Tách chuỗi thành mảng theo dấu phân cách                            | `'a,b,c'.split(',') → ['a', 'b', 'c']`                    |
| `replace()`         | Thay thế một chuỗi con bằng chuỗi khác                              | `'Hello'.replace('H', 'J') → 'Jello'`                    |
| `repeat()`          | Lặp lại chuỗi nhiều lần                                              | `'Hi'.repeat(3) → 'HiHiHi'`                              |

**○ String utils function:**

| Phương thức        | Công dụng                                                         | Ví dụ                                                   |
|--------------------|-------------------------------------------------------------------|----------------------------------------------------------|
| `trim()`           | Loại bỏ khoảng trắng đầu và cuối chuỗi                           | `'  hello  '.trim() → 'hello'`                          |
| `toLowerCase()`    | Chuyển toàn bộ chuỗi sang chữ thường                             | `'HELLO'.toLowerCase() → 'hello'`                       |
| `toUpperCase()`    | Chuyển toàn bộ chuỗi sang chữ in hoa                             | `'hello'.toUpperCase() → 'HELLO'`                       |
| `includes()`       | Kiểm tra chuỗi có chứa chuỗi con nào đó không                    | `'JavaScript'.includes('Script') → true`                |
| `replace()`        | Thay thế chuỗi con đầu tiên tìm được bằng chuỗi khác             | `'apple'.replace('p', 'b') → 'abple'`                   |
| `split()`          | Tách chuỗi thành mảng dựa theo dấu phân cách                     | `'a,b,c'.split(',') → ['a', 'b', 'c']`                   |
| `substring()`      | Trích xuất chuỗi con từ vị trí bắt đầu đến vị trí kết thúc       | `'hello'.substring(1, 4) → 'ell'`                       |
| `indexOf()`        | Tìm vị trí xuất hiện đầu tiên của chuỗi con                      | `'hello'.indexOf('l') → 2`                              |

**○ Array util**

| Phương thức        | Công dụng chính                                               | Ví dụ đơn giản                                               |
|--------------------|---------------------------------------------------------------|---------------------------------------------------------------|
| `toString()`       | Chuyển mảng thành chuỗi                                       | `[1, 2, 3].toString() → '1,2,3'`                              |
| `join()`           | Nối phần tử bằng ký tự xác định                               | `[1, 2, 3].join('-') → '1-2-3'`                               |
| `concat()`         | Nối hai hoặc nhiều mảng                                       | `[1, 2].concat([3, 4]) → [1, 2, 3, 4]`                         |
| `splice()`         | Thêm/xoá phần tử tại vị trí bất kỳ                            | `arr.splice(1, 1) → Xoá 1 phần tử tại index 1`                |
| `slice()`          | Cắt ra một phần của mảng mới                                  | `[1, 2, 3].slice(1, 3) → [2, 3]`                              |
| `indexOf()`        | Tìm vị trí đầu tiên của phần tử                                | `[1, 2, 3].indexOf(2) → 1`                                    |
| `lastIndexOf()`    | Tìm vị trí cuối cùng của phần tử                               | `[1, 2, 1].lastIndexOf(1) → 2`                                |
| `flat()`           | Làm phẳng mảng lồng                                           | `[1, [2, [3]]].flat(2) → [1, 2, 3]`                           |
| `forEach()`        | Duyệt qua từng phần tử                                        | `arr.forEach(val => console.log(val))`                       |
| `map()`            | Tạo mảng mới từ mảng cũ bằng hàm chuyển đổi                  | `[1, 2, 3].map(x => x * 2) → [2, 4, 6]`                       |
| `filter()`         | Lọc các phần tử thoả điều kiện                                | `[1, 2, 3].filter(x => x > 1) → [2, 3]`                       |
| `reduce()`         | Tính toán tích luỹ từ mảng                                    | `[1, 2, 3].reduce((a, b) => a + b, 0) → 6`                    |
| `some()`           | Kiểm tra có **ít nhất 1 phần tử** thoả điều kiện              | `[1, 2, 3].some(x => x > 2) → true`                           |
| `every()`          | Kiểm tra **tất cả phần tử** thoả điều kiện                    | `[1, 2, 3].every(x => x > 0) → true`                          |
| `find()`           | Tìm **phần tử đầu tiên** thoả điều kiện                       | `[1, 2, 3].find(x => x > 1) → 2`                              |
| `findIndex()`      | Tìm **index của phần tử đầu tiên** thoả điều kiện             | `[1, 2, 3].findIndex(x => x > 1) → 1`                         |
| `sort()`           | Sắp xếp mảng (mặc định theo chuỗi Unicode)                    | `[3, 1, 2].sort() → [1, 2, 3]` (với hàm so sánh đúng)         |


**○ Array utils function**

| Hàm           | Công dụng chính                                                | Ví dụ                                                  |
|---------------|----------------------------------------------------------------|---------------------------------------------------------|
| `map()`       | Tạo mảng mới bằng cách biến đổi từng phần tử                  | `[1,2,3].map(x => x * 2) → [2,4,6]`                     |
| `filter()`    | Lọc ra các phần tử thoả điều kiện                              | `[1,2,3].filter(x => x > 1) → [2,3]`                    |
| `find()`      | Tìm phần tử **đầu tiên** thoả điều kiện                        | `[1,2,3].find(x => x > 1) → 2`                          |
| `reduce()`    | Tính toán tích luỹ (cộng dồn, tính tổng, nhân, v.v.)          | `[1,2,3].reduce((a,b)=>a+b, 0) → 6`                     |
| `some()`      | Kiểm tra **ít nhất một** phần tử thoả điều kiện               | `[1,2,3].some(x => x > 2) → true`                       |
| `every()`     | Kiểm tra **tất cả** phần tử thoả điều kiện                    | `[1,2,3].every(x => x > 0) → true`                      |
| `push()`      | Thêm phần tử vào cuối mảng                                    | `const arr=[1]; arr.push(2) → [1,2]`                    |
| `shift()`     | Xoá và trả về phần tử đầu tiên của mảng                       | `const arr=[1,2]; arr.shift() → 1, arr → [2]`           |
| `sort()`      | Sắp xếp mảng (mặc định theo Unicode)                          | `[3,1,2].sort((a,b)=>a-b) → [1,2,3]`                    |


**○ pop()**  
Khái niệm: xóa và trả về phần tử cuối cùng của mảng, làm thay đổi mảng gốc
```
Ex
    let arr = [1, 2, 3];
    let last = arr.pop(); // arr = [1, 2], last = 3
    console.log(arr); // [1, 2]
    console.log(last); // 3
```

**○ unshift()**  
Khái niệm: Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi mảng gốc.
```
Ex
    let arr = [1, 2, 3];
    arr.unshift(0); // arr = [0, 1, 2, 3]
    console.log(arr); // [0, 1, 2, 3]

```

**○ trim()**  
Khái niệm: Loại bỏ khoảng trắng ở đầu và cuối chuỗi, không thay đổi chuỗi gốc mà trả về chuỗi...
```
Ex
    const str = "Hello World ";
    - Để xóa khoảng trắng ở đầu sử dụng trimStart()
    - Để xóa khoảng trắng ở cuối sử dụng trimEnd()

```

**○ for of**  
Khái niệm: Bản chất một chuỗi cũng là một mảng. Ví dụ chuỗi "Playwright" bản chất là một mảng gồm các kí tự ["P", "l", "a", "y", "w", "r", "i", "g", "h", "t"]  
Để lặp trong mảng này, bạn sử dụng string.length để lấy độ dài của chuỗi và lấy ra từng
phần tử một theo index
```
Ex
    const str = "K9 2024";
    for (let i = 0; i < str.length; i++){
    console.log(str[i]);
    }
    // Kết quả in ra
    K
    9
    2
    0
    2
    4

```

○  ○  ○  ○  ○ 


