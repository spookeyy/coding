function countPositivesSumNegatives(input) {
  if(input === null) return [];
  if(input.filter(n => n != 0).length == 0){
    return [];
  }
let countOfPositives = 0;
let sumOfNegatives = 0;
  
for (const n of input){
    if(n < 0){
        sumOfNegatives += n;
    }
    else if(n > 0) {
        countOfPositives += 1;
    }
}
return [countOfPositives, sumOfNegatives]
}

//alternative short version
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}
