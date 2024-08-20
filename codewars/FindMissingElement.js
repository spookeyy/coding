function findMissing(arr1, arr2) {
  // Your solution here 
  //reduce method
  let sum = arr1.reduce((a, b) => a + b, 0) - arr2.reduce((a, b) => a + b, 0)
  return sum;
}

console.log(findMissing([1, 2, 3], [1,3])); // 2
