// Enum values from different enum types are considered incompatible
// Number Enums
enum Status {
    Ready,
    Waiting
}

enum Color {
    Red,
    Blue,
    Green
}

let _status = Status.Ready;
// _status = Color.Red //Type Color.Red is not assignable to type 'status'

enum Direction1 {
    Up = 1, // initialized, meaning the rest of the enums will be auto incremented.
    Down, // value of 2
    Right, // value of 3
    Left,
}

enum Direction2 {
    Up, // value of 0
    Down,
    Right,
    Left,
}


// String Enums
enum Direction3 {
    Up = "UP",
    Down = "DOWN",
    Right = "RIGHT",
    Left = "LEFT",
}

