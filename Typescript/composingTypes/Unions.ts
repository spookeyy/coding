// you can declare that a type could be one of many types.
// i.e, Describing a boolean type as being either "true" or "false"

type Mybool = true | false;

// describe set of string or number literals that a value is allowed to be.

type windowStates = "open" | "closed" | "minimized";
type lockStates = "Locked" | "Unlocked";
type positiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// function that takes an array or a string:
function getLength (obj: string | string[]){
    return obj.length;
}

function wrapInArray(obj: string | string[]){
    if (typeof obj === "string"){
        return [obj];
    }

    return obj;
}