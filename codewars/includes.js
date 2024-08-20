// includes.js
//function declaration
//contains:  array of numbers
//Operation - calculate sum of the elements in the array
//condition: if array is not a number return value 0

// Write a function that takes an array of numbers and
// returns true if the sum of all the numbers is greater than 100.
//Otherwise return false.
//We're testing basic loops and math operations.


function includes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum > 100;
}
console.log(includes([10, 20, 30, 40, 50]));