String.prototype.isUpperCase = function() {
    // your code here
    return this == this.toUpperCase()
  }

  //alternative
String.prototype.isUpperCase = function(){
    if(this.toString() == this.toUpperCase()){
      return true;
    } else{
      return false;
    }
  }
  
