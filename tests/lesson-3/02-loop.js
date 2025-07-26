// 1. Tính tổng từ 1 đến 100.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log("Tổng từ 1 đến 100 là: ", sum);
console.log("***************************************************");

// 2. In bảng cửu chương từ 2 đến 9.
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        result = i * j;
        console.log(`${i} x ${j} = ${result}`);
    };
};
console.log("***************************************************");

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
let mangSoLe = [];
for (let i = 1; i <= 99; i += 2) {
    mangSoLe.push(i);
};
console.log("Mảng số lẻ: ", mangSoLe)
console.log("***************************************************");

// 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
// user1@example.com, user2@example.com, ..., user10@example.com).
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`)
};
console.log("***************************************************");

// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
// in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}
let doanhThuTungThang = [
    { month: 1, total: 120 },
    { month: 2, total: 100 },
    { month: 3, total: 150 },
    { month: 4, total: 130 },
    { month: 5, total: 160 },
    { month: 6, total: 170 },
    { month: 7, total: 180 },
    { month: 8, total: 190 },
    { month: 9, total: 200 },
    { month: 10, total: 210 },
    { month: 11, total: 220 },
    { month: 12, total: 230 }
];

let tongDoanhThu = 0;
for (let i = 0; i < doanhThuTungThang.length; i++) {
    tongDoanhThu += doanhThuTungThang[i].total;
}
console.log("Tổng doanh thu trong năm là: ", tongDoanhThu);
console.log("***************************************************");
