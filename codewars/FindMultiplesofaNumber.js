function findMultiples(integer, limit) {
    let array = [];
    let Number = 1;
    while(Number * integer <= limit){
      array.push(Number * integer)
      Number++;
    }
    return array;
  }
  

  //alternative
  function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }

  //alternative
  function findMultiples(integer, limit) {
  
    let base = 0;
    const multiples = [];
    
    while (true) {
      base += integer;
      if (base > limit) break;
      multiples.push(base);
    }
    
    return multiples;
  }

  //alternative
  const findMultiples=(n,l)=>Array.from({length:~~(l/n)},(a,i)=>i*n+n);