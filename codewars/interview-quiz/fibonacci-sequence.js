// coding interview challenge:
// Given the first 2 Fibonacci numbers, 0, 1, find the 
// 20th in the sequence:

//make an array
const fibos = [0, 1];
let target = 20
let iterations = target - fibos.length
//make a loop
for (let i = 0; i < iterations; i++){
    let nextFibo = fibos[i] + fibos[i + 1];
    // console.log(nextFibo)
    fibos.push(nextFibo);
}
console.log("fibos", fibos)

//log the 20th number
console.log(fibos[19])

