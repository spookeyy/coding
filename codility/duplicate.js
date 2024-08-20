function solution1(A) {
  let count = [];
  for (number1 in A) {
    for (number2 in A) {
      if (number1 === number2) {
        continue;
      } else {
        if (A[number1] === A[number2]) {
          count.push(A[number1]);
        }
      }
    }
  }

  let result = [...new Set(count)];
  return result.length;
}
console.log(solution1([1, 2, 2, 2, 3, 3, 6]));

let check_duplicate_in_array = (input_array) => {
  let duplicate_elements = [];
  for (num in input_array) {
    for (num2 in input_array) {
      if (num === num2) {
        continue;
      } else {
        if (input_array[num] === input_array[num2]) {
          duplicate_elements.push(input_array[num]);
        }
      }
    }
  }
  let unique_elements = [...new Set(duplicate_elements)];
  console.log(unique_elements);
  return unique_elements.length === 0 ? "no duplicate" : unique_elements.length;
};
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate_in_array(arr));

function solution(A) {
  const N = A.length;
  let maxLength = 0;
  const repetitiveLengths = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    repetitiveLengths[i] = 0;
    for (let x = i - 1; x >= 0; x--) {
      repetitiveLengths[i]++;
      if (A[i] !== A[x]) {
        break;
      } else {
        break;
      }
    }
  }
  // [10, 10, 10, 10] error: got 2 expected 4

  for (let i = 0; i < N; i++) {
    const length = Math.min(repetitiveLengths[i], N - i);
    maxLength = Math.max(maxLength, length);
  }

  return N === 0 ? 0 : maxLength;
}

console.log(solution([1, 1, 2, 2, 3, 3, 4, 5, 6, 1]));
