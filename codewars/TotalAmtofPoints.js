//split
function points(games) {
    let games = ["3:1", "2:2", "0:1"]
    let totalPoints = 0;
    for (let match of games){
        let [mancity, liverpool] = match.split(":").map(Number)

        if(mancity > liverpool){
            totalPoints += 3;
        } 
        else if(liverpool > mancity){
            totalPoints += 0;
        }
        else if(mancity == liverpool){
            totalPoints += 1
        }
    }
return totalPoints;
}

//one of the correct solutions 
function points(games) {
    let total = 0;
    games.map(game => {
      if (game[0] === game[2]) {
        total += 1;
      } else if (game[0] > game[2]) {
        total += 3;
      }
    });
    return total;
  }

  // another solution
  const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }


console.log("Total Points: " + totalPoints);

console.log("DESTRUCUTRING --------------------------");
let fruits = ["Avocado", "Apple", "Orange"]
 let [a, b, c] = ["Avocado", "Apple", "Orange"]
 console.log(a);