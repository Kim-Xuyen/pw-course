const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];

// 4. map 
// 4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90. 
const mangMoi = scores.map(score => {
    if (score < 90)
        return score * 1.1;
    else
        return score * 0.95;
});
console.log("Mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90", mangMoi);

// 4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi.
const mangChuoi = numbers.map(num => num + '');
console.log("Mảng chuỗi: ", mangChuoi);

// 4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị. 
const nhanDoi = numbers.map(num => num * 2);
console.log("Nhân đôi mỗi giá trị: ", nhanDoi)