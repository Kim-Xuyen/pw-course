// 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với
// 2 cặp giá trị khác nhau.
function multiply(a, b){
    return a*b;
};
console.log(multiply(12, 7));
console.log(multiply(1, 2));

console.log("***************************************************");

// 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả
// với 2 bộ số khác nhau.
function findMin(a, b, c){
    let min = a;
    if(b<min){
        min=b;
    }
    if(c<min){
        min =c;
    }
    return min;
};
console.log("Giá trị nhỏ nhất là:", findMin(5, 8, 3));
console.log("Giá trị nhỏ nhất là:", findMin(12, 7, 13));

console.log("***************************************************");

// 3. Viết hàm getTopStudents nhận 2 tham số:
// ● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
// ● threshold: ngưỡng điểm để được coi là "top" (số).
// Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
// Gọi hàm với danh sách thực tế và in kết quả.
let studentList = [
    { name: "Ni", score: 100 },
    { name: "Hảo", score: 21 },
    { name: "Min", score: 17 },
    { name: "Kha", score: 11 },
    { name: "Liên", score: 45 }
];
function getTopStudents(students, threshold){
    let diem = []
    for(let i = 0; i<students.length;i++){
        if(students[i].score >= threshold){
            diem.push(students[i].name);
        }
    }
    return diem;
};
let ketQua = getTopStudents(studentList, 12);
console.log("Top học sinh", ketQua);

console.log("***************************************************");

// 4. Viết hàm calculateInterest nhận 3 tham số:
// ● principal: số tiền gửi ban đầu (số).
// ● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
// ● years: số năm gửi.
// Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi
// đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và
// in kết quả.
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    return total;
}

let tienGoc = 70000000; 
let laiSuat = 2;        
let soNam = 3;

let tongTien = calculateInterest(tienGoc, laiSuat, soNam);
console.log("Tổng số tiền (gốc + lãi) sau", soNam, "năm là:", tongTien);

console.log("***************************************************");
