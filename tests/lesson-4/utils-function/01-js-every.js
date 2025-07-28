const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// 1. every 
// 1.1 Kiểm tra tất cả giá trị trong scores có > 70 không. 
const scoreMoreThan70 = scores.every(score => score > 70);
console.log("tất cả giá trị trong scores có > 70 không", scoreMoreThan70);

// 1.2 Kiểm tra tất cả giá trị trong ages có > 15 không. 
const agesMoreThan15 = ages.every(age => age > 15);
console.log("Tất cả giá trị trong ages có > 15 không", agesMoreThan15);

// 1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không. 
const wordsMoreThan3 = words.every(word => word.length > 3);
console.log("Tất cả từ trong words có độ dài > 3 không", wordsMoreThan3);