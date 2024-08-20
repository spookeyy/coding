function countSheeps(sheep) {
    return sheep.filter(wantSheep => !!wantSheep).length
}

//Alternative
function countSheeps(arr) {
    return arr.filter(Boolean).length;
  }