"use strict";
// Interface is a way to define the types of fields inside any object if that object is being passed into any function.
function isLegalAge(user) {
    if (user.age >= 18) {
        return true;
    }
    return false;
}
const response = isLegalAge({
    name: "Nitin Shukla",
    city: "Kanpur",
    age: 20
});
console.log(response);
