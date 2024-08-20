function countRepeats(str) {
    // code solution
    let count = 0;
    let prev_char = str[0];

    for (let current_char of str.slice(1)){
        if (current_char === prev_char){
            count++;
        }
        prev_char = current_char
    }
    return count
}
console.log(countRepeats("abbcca"))


// python solution

// def countRepeats(str):
//     count = 0
//     prev_char = str[0]
//     for current_char in str[1:]:
//         if current_char == prev_char:
//             count += 1
//         prev_char = current_char
//     return count


// javascript
// function countRepeats(str) {
//   return (str.match(/(.)(?=\1)/g) || []).length;
// }