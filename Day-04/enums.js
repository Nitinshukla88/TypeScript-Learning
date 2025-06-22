"use strict";
// Enums in TypeScript is a way to define a set of named constants.
// Enums can be numeric or string-based.
// enumerations are a way to give more meaningful names to sets of numeric values.
function printDirectionMessage(direction) {
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
var DirectionEnum;
(function (DirectionEnum) {
    DirectionEnum[DirectionEnum["Up"] = 0] = "Up";
    DirectionEnum[DirectionEnum["Down"] = 1] = "Down";
    DirectionEnum[DirectionEnum["Left"] = 2] = "Left";
    DirectionEnum[DirectionEnum["Right"] = 3] = "Right";
})(DirectionEnum || (DirectionEnum = {}));
function printDirectionMessageEnum(direction) {
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
console.log(DirectionEnum.Up); // 0
console.log(DirectionEnum.Down); // 1
// You can also assign specific values to the enum members.
var DirectionWithValues;
(function (DirectionWithValues) {
    DirectionWithValues[DirectionWithValues["Up"] = 10] = "Up";
    DirectionWithValues[DirectionWithValues["Down"] = 20] = "Down";
    DirectionWithValues[DirectionWithValues["Left"] = 30] = "Left";
    DirectionWithValues[DirectionWithValues["Right"] = 40] = "Right";
})(DirectionWithValues || (DirectionWithValues = {})); // Like this.
// One typical use case of enums is to represent a set of related constants that can be used throughout your application, making the code more readable and maintainable.
// Popular Example usage: In express, you can use enums to define HTTP status codes, like this:
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
    HttpStatus[HttpStatus["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatus || (HttpStatus = {}));
// You can use it in any route like this:
// app.get('/example', (req, res) => {
//     res.status(HttpStatus.OK).send("This is an example response.");
// });
// More readable and maintainable than using raw numbers like 200, 404, etc.
