"use strict";
// In this file, we will explore how to assign types to arrays in TypeScript.
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
sum([1, 2, 3, 4, 5]);
function aboveLegalAge(users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            return true;
        }
    }
    return false;
}
const output = aboveLegalAge([
    { name: "Alice", city: "Wonderland", age: 30 },
    { name: "Bob", city: "Builderland", age: 17 },
    { name: "Charlie", city: "Chocolate Factory", age: 25 }
]);
console.log(output);
