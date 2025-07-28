const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// 2. filter 
// 2.1 Lọc các giá trị trong scores > 80. 
const locScore = scores.filter(score => score > 80);
console.log("Lọc các giá trị trong scores > 80 là: ", locScore);

// 2.2 Lọc các giá trị trong ages ≥ 18. 
const locAges = ages.filter(age => age >= 18);
console.log("Lọc các giá trị trong ages ≥ 18 là: ", locAges);

// 2.3 Lọc các từ trong words có độ dài > 5. 
const locWords = words.filter(word => word.length > 5);
console.log("Lọc các từ trong words có độ dài > 5 là: ", locWords);