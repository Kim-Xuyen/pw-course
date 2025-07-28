const numbers = [1, 2, 3]; 
const names = ["Alice", "Bob", "Charlie"]; 

// 1. push: Thêm 4 vào cuối numbers; thêm "David" vào cuối names. 
numbers.push(4);
console.log("Mảng sau khi thêm 4 vào cuối numbers: ", numbers);   

names.push("David");       
console.log("Mảng sau khi thêm David vào cuối names: ", names);   

// 2. pop: Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4].
numbers.pop();            
console.log("Mảng sau khi loại bỏ phần tử cuối của numbers: ", numbers);   

// 3. unshift: Thêm 0 vào đầu numbers; thêm "David" vào đầu names. 
numbers.unshift(0);       
console.log("Mảng sau khi thêm 0 vào đầu numbers: ", numbers);   

names.unshift("David");    
console.log("Mảng sau khi thêm David vào đầu names: ", names);   

// 4. shift: Loại bỏ phần tử đầu của numbers = [1, 2, 3, 4]. 
numbers.shift();           
console.log("Mảng sau khi loại bỏ phần tử đầu của numbers: ", numbers);   
