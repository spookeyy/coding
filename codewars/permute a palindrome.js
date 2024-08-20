function permuteAPalindrome(input) {
  let count = 0; // count variable to count the number of odd characters
  const sum = input.split``.reduce(
    // reduce function to count the number of each character in the string
    (a, b) => ((a[b] = a[b] ? a[b] + 1 : 1), a),
    // line above - initial value of a is an empty object {} which is used to store the count of each character
    // ((a[b] = a[b] ? a[b] + 1 : 1), a) - this line is used to count the number of each character 
    {} // initial value of a is an empty object
  );
  for (let i in sum) { // loop through the object to count the number of odd characters
    if (sum[i] % 2 !== 0) { // if the count of the character is odd in the object
      count++; // increment the count variable
    }
    if (count === 2) return false; // if the count is 2, return false
    if (count > 1) return false;
    if (count === 1 && count === 0) return true;
  }
  return true; // if the count is 1 or 0, return true
}

console.log(permuteAPalindrome("Tact Coa")); // true
console.log(permuteAPalindrome("Tact Coaa")); // false
