const phoneNumber = "0123 456 789"; 
const report = "Có một lỗi trong hệ thống."; 
const numbersStr = "1,234,567"; 

// 1. Thay khoảng trắng bằng "." trong phoneNumber. 
const newPhoneNumber = phoneNumber.replace(/ /g, ".");
console.log("Phone Number sau khi thay thế khoảng trắng là: ", newPhoneNumber);

// 2. Thay "lỗi" bằng "bug" trong report. 
const newReport = report.replace("lỗi", "bug");
console.log("Report message sau khi thay thế lỗi bằng bug là: ", newReport); 

// 3. Thay "," bằng "." trong numbersStr. 
const formattedStr = numbersStr.replace(/,/g, ".");
console.log("numbersStr sau khi thay thế ',' bằng '.' là: ", formattedStr);