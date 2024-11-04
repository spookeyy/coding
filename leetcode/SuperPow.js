/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
    let num = b.join('');
    let results = Math.pow(a, num) % 1337;
    console.log(results)
};

superPow(2, [1,2,3,4,5,6]);