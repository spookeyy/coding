function likes(names) {
  
   if (names.length === 0) {
    return "no one likes this"
  }
  
  for(let name of names){
    if (names.length === 1){
      return `${name} likes this`
    }
    else if(names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    }
    else if(names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    else if(names.length >= 4){
//       let others = names.length - 2
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }
  
}

//the function above in a simplar way
