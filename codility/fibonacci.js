// var yourself = {
//   fibonacci: function (n) {
//     if (n < 2) {
//       return n;
//     }
//     return yourself.fibonacci(n - 1) + yourself.fibonacci(n - 2);
//   },
// };

// console.log(yourself.fibonacci(10));

var yourself = {
  fibonacci: function (n) {
    if (n <= 1) return n;

    let a = 0, b = 1; // initial values of a and b
    for (let i = 2; i <= n; i++){ // start from 2 because 0 and 1 are already defined 
      let c = a + b; // calculate the next number in the sequence
      a = b; // update the value of a to be the value of b in the next iteration
      b = c; // update the value of b to be the value of c in the next iteration

      console.log(i, a, b);
    }

    return b; // return the nth number in the sequence
  },
};

console.log(yourself.fibonacci(40));
