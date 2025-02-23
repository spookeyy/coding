// We are given two strings P and Q, each consisting of N lowercase English letters. For each position in the strings, we have to choose one letter from either P or Q, in order to construct a new string S, such that the number of distinct letters in S is minimal. Our task is to find the number of distinct letters in the resulting string S.

// For example, if P = "ca" and Q = "ab", S can be equal to: "ca", "cb", "aa" or "ab". String "aa" has only one distinct letter ('a'), so the answer is 1 (which is minimal among those strings).

// Write a function:

// function solution(P, Q);

// that, given two strings P and Q, both of length N, returns the minimum number of distinct letters of a string S, that can be constructed from P and Q as described above.

// Examples:

// 1. Given P = "abc", Q = "bcd", your function should return 2. All possible strings S that can be constructed are: "abc", "abd", "acc", "acd", "bbc", "bbd", "bcc", "bcd". The minimum number of distinct letters is 2, which be obtained by constructing the following strings: "acc", "bbc", "bbd", "bcc".

// 2. Given P = "axxz", Q = "yzwy", your function should return 2. String S must consist of at least two distinct letters in this case. We can construct S = "yxxy", where the number of distinct letters is equal to 2, and this is the only optimal solution.

// 3. Given P = "bacad", Q = "abada", your function should return 1. We can choose the letter 'a' in each position, so S can be equal to "aaaaa".

// 4. Given P = "amz", Q = "amz", your function should return 3. The input strings are identical, so the only possible S that can be constructed is "amz", and its number of distinct letters is 3.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..200,000];
// strings P and Q are both of length N;
// strings P and Q are made only of lowercase letters (a−z);
// strings P and Q contain a total of at most 20 distinct letters.


// solution
function solution(P, Q) {
  const N = P.length;
  const allLetters = new Set([...P, ...Q]);
  const letters = Array.from(allLetters);
  const letterToIndex = new Map(letters.map((letter, index) => [letter, index]));

  let minDistinct = Infinity;

  // Iterate over all possible subsets of letters
  for (let mask = 0; mask < (1 << letters.length); mask++) {
    let isValid = true;
    for (let i = 0; i < N; i++) {
      const pIndex = letterToIndex.get(P[i]);
      const qIndex = letterToIndex.get(Q[i]);
      if (!((mask & (1 << pIndex)) || (mask & (1 << qIndex)))) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      const distinctCount = (mask.toString(2).match(/1/g) || []).length;
      minDistinct = Math.min(minDistinct, distinctCount);
    }
  }

  return minDistinct;
}

// Test cases
console.log(solution("abc", "bcd")); // Expected output: 2
console.log(solution("axxz", "yzwy")); // Expected output: 2
console.log(solution("bacad", "abada")); // Expected output: 1
console.log(solution("amz", "amz")); // Expected output: 3
console.log(solution("amz", "amz")); // returns 3 on console
console.log(solution("abc", "bcd")); // returns 2 on console


// soltion 2:
function solution(P, Q) {
  // Get all distinct letters in P and Q
  const distinctLetters = [...new Set([...P, ...Q])];
  const n = distinctLetters.length;

  // Create a mapping from letters to bitmask positions
  const letterToMask = {};
  for (let i = 0; i < n; i++) {
    letterToMask[distinctLetters[i]] = 1 << i;
  }

  // Create a list of masks for each position
  const masks = [];
  for (let i = 0; i < P.length; i++) {
    const pChar = P[i];
    const qChar = Q[i];
    const mask = letterToMask[pChar] | letterToMask[qChar];
    masks.push(mask);
  }

  // Iterate over all possible subsets of letters
  let minDistinct = Infinity;
  for (let k = 1; k <= n; k++) {
    // Generate all combinations of size k
    const subsets = getCombinations(n, k);
    for (const subset of subsets) {
      let subsetMask = 0;
      for (const i of subset) {
        subsetMask |= 1 << i;
      }

      // Check if this subset is feasible
      let feasible = true;
      for (const mask of masks) {
        if ((mask & subsetMask) === 0) {
          feasible = false;
          break;
        }
      }

      if (feasible) {
        minDistinct = Math.min(minDistinct, k);
        break; // Since we are iterating from smallest k, we can break early
      }
    }
  }

  return minDistinct;
}

function getCombinations(n, k) {
  const result = [];
  const backtrack = (start, path) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < n; i++) {
      path.push(i);
      backtrack(i + 1, path);
      path.pop();
    }
  };
  backtrack(0, []);
  return result;
}

// solution 3:
