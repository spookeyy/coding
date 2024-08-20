function permuteAPalindrome(input) {
    const charCounts = {};
    let oddCount = 0;

    for (let char of input) {
      charCounts[char] = (charCounts[char] || 0) + 1;
      if (charCounts[char] % 2 === 1) {
        oddCount++;
      } else {
        oddCount--;
      }
    }

    return oddCount <= 1;
}
console.log(permuteAPalindrome("aab")); //baa

//shortened
const PermuteAPalindrome = (input) =>
  [...input].sort().join("").replace(/(.)\1/g, "").length < 2;