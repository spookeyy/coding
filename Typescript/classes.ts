interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}

const user1: User = new UserAccount("King", 1);


class Animal {
    feet: number;
    constructor(name: string, numFeet: number){}
}

class Size {
    feet: number;
    constructor(numFeet: number){}
}

let a: Animal;
let s: Size;


