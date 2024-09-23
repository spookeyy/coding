// Given two integers a and b, return the sum of the two integers without using the operators + and -.

function getSum(a, b){

    while (b != 0){
        let sum = 0;
        let carry = 0;

        sum = a ^ b
        carry = (a & b) << 1
        a = sum
        b = carry
    }
    return a
}

console.log(getSum(5, 0)) // 5 correct
console.log(getSum(5, 3)) // 8 correct