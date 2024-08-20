function digitize(n){
    //your code here
    const nString = n.toString();
    const nArray = nString.split('').reverse()
    return nArray.map(nString => parseInt(nString))
}

//alternative 
function digitize(n) {
    return n.toString().split("").reverse().map(Number);
  }