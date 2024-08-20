const fibsFizzBuzz = (n) =>{
    if ( n === 1) return [1];
    let arr = [1, 1]
    for (let i = 0; i <= n - 3; i++) {
        let num = arr[i] + arr[i + 1];
        arr.push(num)
        console.log(num)
    }

    // iterate through array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            arr[i] = "FizzBuzz"
        } else if (arr[i] % 3 === 0) {
            arr[i] = "Fizz"
        } else if (arr[i] % 5 === 0) {
            arr[i] = "Buzz"
        }
    }
    return arr
}

console.log(fibsFizzBuzz(15))

// similar
// const fibsFizzBuzz = (n) =>
//   n < 2
//     ? [1]
//     : [...Array(n - 2)]
//         .reduce((pre, _, idx) => [...pre, pre[idx] + pre[++idx]], [1, 1])
//         .map((val) =>
//           !(val % 15)
//             ? `FizzBuzz`
//             : !(val % 5)
//             ? `Buzz`
//             : !(val % 3)
//             ? `Fizz`
//             : val
//         );