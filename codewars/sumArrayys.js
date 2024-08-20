//function declaration
//contains:  array of numbers
//Operation - calculate sum of the elements in the array
//condition: if array is not a number return value 0

// Write a function that takes an array of numbers and
// returns the sum of the numbers. The numbers can be negative or
// non-integer. If the array does not contain any numbers then you 
// should return 0.
//We're testing basic loops and math operations. 

function sum(numbers) {
  
    if (!Array.isArray(numbers) || numbers.length === 0) {
         return 0;
     }
 
   let sum = 0;
   numbers.forEach(num => {
     sum += num;
   });
 
   return sum;
 }
 const numbers = [1, 5.2, 4, 0, -1]
 console.log(sum(numbers));

 //solution in one line
 const sum = (numbers) => numbers.reduce((a, b) => a + b, 0) //reduce - add all elements in the array
 //0 is the initial value. 0 + 1 = 1, 1 + 5.2 = 6.2

 //explain on reduce method
 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 