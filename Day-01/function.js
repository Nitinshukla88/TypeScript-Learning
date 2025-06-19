"use strict";
// Task : Write a function that accepts another function and runs it after 1 second.
// That is how the function types are passed in TypeScript.
function runAfterOneSecond(fn) {
    setTimeout(fn, 1000);
}
runAfterOneSecond(function () {
    console.log("Hi there !");
    return 2;
});
