//loop through array a and check if each item in array a is in array b
//if it is in array b, ignore it, but if it not in array b, push it to array c
//do the same for array b
//no duplication in array c
//return array c

function arrayDiff(a, b) {
    let c = [];
    // loop through array a and check if each item in array a is in array b
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) { //if a[i] is not in array b 
            c.push(a[i]); //push it to array c
        }
    }

    // loop through array b and check if each item in array b is in array a
    for (let j = 0; j < b.length; j++) {
        if (!a.includes(b[j])) { //if b[j] is not in array a
            c.push(b[j]); //push it to array c
        }
    }
    const set = new Set(c);
    c = [...set];
    return c.sort((a, b) => a - b);
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = [1, 2, 3, 5, 7, 9];
console.log(arrayDiff(a, b));

//sorting items in array a and b
// how do we remove duplicates in an array in javascript. example code
//set is a collection of unique values in an array
