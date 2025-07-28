const scores = [85, 90, 78]; 
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"]; 
const numbers = [1, 2, 3, 4]; 
const expenses = [50, 100, 150]; 

// 6. reduce 
// 6.1 Tính tổng các giá trị trong scores. 
const totalScores = scores.reduce((sum, score) => sum + score, 0);
console.log("Tổng điểm là:", totalScores);

// 6.2 Tính tích các giá trị trong numbers. 
const productNumbers = numbers.reduce((product, num) => product * num, 1);
console.log("Tích các giá trị trong numbers:", productNumbers);

// 6.3 Tính tổng các giá trị trong expenses. 
const totalExpenses = expenses.reduce((sum, expense) => sum + expense, 0);
console.log("Tổng các giá trị trong expenses:", totalExpenses);