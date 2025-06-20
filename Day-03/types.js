"use strict";
// Types and Interfaces in TypeScript are very very closely similar. One difference is that with types you have to use = sign to assign a type to a variable, whereas with interfaces you use the keyword interface.
// Types are used to define the types of fields inside any object if that object is being passed into any function.

// One similarity between them is they let you aggreagate data types together.
function isAdult(user) {
    if (user.age >= 18) {
        return true;
    }
    return false;
}
isAdult({
    firstName: "John",
    lastName: "Doe",
    age: 20
});
function printValue(value) {
    console.log(value);
}
printValue("Hello");
printValue(42);
function printPersonContact(contact) {
    console.log(`Name: ${contact.name}, Age: ${contact.age}, Email: ${contact.email}, Phone: ${contact.phone}`);
}
printPersonContact({
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    phone: "123-456-7890"
});
// 2. Interfaces can implement classes, while types cannot. This allows interfaces to define contracts for classes to follow. Types cannot be used in this way.
