"use strict";
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
const ans1 = isLegal(20);
console.log(ans1);
