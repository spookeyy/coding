// a common example of a generic is an array.
// ** An array without generics could contain ANYTHING
// An array with generics can describe the values that the array contains.

type StringArray = Array<string>; // an array that contains strings
type NumberArray = Array<number>; // an array that contains numbers
type ObjectWithNameArray = Array<{ name: string }>;

// my own types that use geneRICS
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// there is a constant called backpack.
declare const backpack: Backpack<string>;

const object = backpack.get();