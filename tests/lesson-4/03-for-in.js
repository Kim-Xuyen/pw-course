const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 3. for...in
// Thêm vào file 03-for-in.js và thêm lời giải cho các bài sau:
// 3.1 In tên và giá trị mỗi thuộc tính của student
for (const key in student) {
    console.log(`Giá trị của ${key} là ${student[key]}`);
}

// 3.2 Tính tổng các giá trị số trong student
let sum = 0;
for (let key in student) {
    if (typeof student[key] === 'number') {
        sum += student[key];
    }
}
console.log("Tổng các giá trị số là:", sum);


// 3.3 Tạo mảng chứa tên các thuộc tính của student
const mangTen = [];
for (const key in student) {
    mangTen.push(key);
}
console.log("Mảng tên chứa các thuộc tính:", mangTen);