const name = "Nguyễn Văn A"; 
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com"; 
const date = "2024-05-19"; 

// 1. Chia name thành mảng các từ (dùng khoảng trắng). 
const nameParts = name.split(" ");
console.log("Chia name thành mảng các từ (dùng khoảng trắng): ", nameParts);

// 2. Chia emails thành mảng các email (dùng dấu phẩy). 
const emailList = emails.split(",");
console.log("Chia emails thành mảng các email (dùng dấu phẩy): ", emailList);

// 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang).
const dateParts = date.split("-");
console.log("Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang)", dateParts);