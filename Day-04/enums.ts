// Enums in TypeScript is a way to define a set of named constants.
// Enums can be numeric or string-based.
// enumerations are a way to give more meaningful names to sets of numeric values.


// Task : Suppose you have given a task to print the message according to the user input which is any one of them : up, down, left, right.

type Direction = "Up" | "Down" | "Left" | "Right"; // This is one way to define a union type for directions.

function printDirectionMessage(direction: Direction) {
    switch (direction) {
        case "Up":
            console.log("You are moving up!");
            break;
        case "Down":
            console.log("You are moving down!");
            break;
        case "Left":
            console.log("You are moving left!");
            break;
        case "Right":
            console.log("You are moving right!");
            break;
        default:
            console.log("Invalid direction!");
    }
}

// Another way to define the same using an enum which is more structured and cleaner approach.
enum DirectionEnum {
    Up,
    Down,
    Left,
    Right
}

function printDirectionMessageEnum(direction: DirectionEnum) {
    switch (direction) {
        case DirectionEnum.Up:
            console.log("You are moving up!");
            break;
        case DirectionEnum.Down:
            console.log("You are moving down!");
            break;
        case DirectionEnum.Left:
            console.log("You are moving left!");
            break;
        case DirectionEnum.Right:
            console.log("You are moving right!");
            break;
        default:
            console.log("Invalid direction!");
    }
}

// By default, enums are numeric, starting from 0.
console.log(DirectionEnum.Up);    // 0
console.log(DirectionEnum.Down);  // 1
// You can also assign specific values to the enum members.
enum DirectionWithValues {
    Up = 10,
    Down = 20,
    Left = 30,
    Right = 40
} // Like this.

// One typical use case of enums is to represent a set of related constants that can be used throughout your application, making the code more readable and maintainable.
// Popular Example usage: In express, you can use enums to define HTTP status codes, like this:
enum HttpStatus {
    OK = 200,
    NotFound = 404,
    InternalServerError = 500
}

// You can use it in any route like this:

// app.get('/example', (req, res) => {
//     res.status(HttpStatus.OK).send("This is an example response.");
// });

// More readable and maintainable than using raw numbers like 200, 404, etc.