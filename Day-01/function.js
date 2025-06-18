"use strict";
// Task : Write a function that accepts another function and runs it after 1 second.
function runAfterOneSecond(fn) {
    setTimeout(fn, 1000);
}
runAfterOneSecond(function () {
    console.log("Hi there !");
});
