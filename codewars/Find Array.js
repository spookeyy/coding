function findArray(arr1, arr2) {
  let newArray = [];
  for (let x of arr2) {
    if (x < arr1.length) {
      newArray.push(arr1[x]);
    }
  }
  return newArray;
}

console.log(findArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9]));