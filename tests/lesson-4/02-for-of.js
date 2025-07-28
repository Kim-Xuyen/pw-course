const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 2. for...of
// Thêm vào file 02-for-of.js và thêm vào lời giải cho các bài sau:
// 2.1 In lần lượt từng ký tự của str
for (const value of str) {
    console.log("Từng ký tự của str: ", value);
}

// 2.2 Tạo mảng đảo ngược từ str
const mangDaoNguoc = [];
for (const daoNguoc of str) {
    mangDaoNguoc.unshift(daoNguoc);
}
console.log("Mảng đảo ngược của str: ", mangDaoNguoc);

// 2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
let viTriDauTien = -1;
let viTriCuoiCung = -1;
let index = 0;

for (const value of arr) {
    if (value === 3) {
        if (viTriDauTien === -1) {
            viTriDauTien = index;
        }
        viTriCuoiCung = index;
    }
    index++;
}
console.log("Vị trí đầu tiên của 3 là:", viTriDauTien);
console.log("Vị trí cuối cùng của 3 là:", viTriCuoiCung);


// 2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr
const tempt = {};
for (const num of dupArr) {
    if (tempt[num] === undefined) {
        tempt[num] = 1;
    } else {
        tempt[num] = tempt[num] + 1;
    }
}
const unique = [];
for (const n of dupArr) {
    if (tempt[n] === 1) {
        unique.push(n);
    }
}
console.log("Các phần tử xuất hiện đúng 1 lần là:", unique);