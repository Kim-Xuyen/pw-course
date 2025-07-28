const scores = [85, 90, 78]; 
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"]; 
const numbers = [1, 2, 3, 4]; 
const expenses = [50, 100, 150];

// 5. some 
// 5.1 Kiểm tra scores có giá trị nào > 80 không. 
const scoreIfAnyMoreThan80 = scores.some(score => score > 80);
console.log("Giá trị scores > 80: ", scoreIfAnyMoreThan80);

// 5.2 Kiểm tra ages có giá trị nào < 18 không. 
const agesIfAnyLessThan18 = ages.some(ages => ages < 18);
console.log("Giá trị age < 18: ", agesIfAnyLessThan18);

// 5.3 Kiểm tra words có từ nào dài > 5 không. 
const wordIfLengthMoreThan5 = words.some(words => words.length > 5);
console.log("Giá trị words > 5: ", wordIfLengthMoreThan5);