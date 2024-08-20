function solution(roman) {
    let roman_values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total = 0
    let prev_value = 0

    for (let char of roman.split('').reverse()) {
        current_value = roman_values[char] // get the value of the current character
        if (current_value >= prev_value) {
            total += current_value
        } else {
            total -= current_value
        }
        prev_value =  current_value // update the previous value for the next iteration
    }
  return total;
}

console.log(solution("XXI"));
