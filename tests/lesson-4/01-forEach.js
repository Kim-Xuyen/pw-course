const numbers = [1, 2, 3];

// 1. forEach
// Thêm vào file 01-forEach.js và thêm vào lời giải cho các bài sau:

// 1.1 In lần lượt từng phần tử của numbers.
numbers.forEach((n, index) => {
    console.log(`Từng phần tử của numbers tại index ${index} là ${n}`);
});

// 1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers
let sum = 0;
let max = numbers[0];
let min = numbers[0];

numbers.forEach((n) => {
    sum = sum + 1;
    if (n > max) {
        max = n;
    } if (n < min) {
        min = n;
    }
});
console.log(`Tổng là: ${sum}`);
console.log(`Giá trị lớn nhất là: ${max}`);
console.log(`Giá trị nhỏ nhất là: ${min}`);

// 1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi

const doubledNumbers = [];
numbers.forEach((n) => {
    doubledNumbers.push(n * 2);
});
console.log("Mảng mới với các phần tử nhân đôi:", doubledNumbers);
