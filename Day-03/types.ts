// Types and Interfaces in TypeScript are very very closely similar. One difference is that with types you have to use = sign to assign a type to a variable, whereas with interfaces you use the keyword interface.
// Types are used to define the types of fields inside any object if that object is being passed into any function.

type User2 = {
    firstName : string;
    lastName : string;
    age : number;
}

interface User3 {
    firstName: string;
    lastName: string;
    age: number;
}

function isAdult(user: User2 | User3): boolean {
    if (user.age >= 18) {
        return true;
    }
    return false;
}

isAdult({
    firstName: "John",
    lastName: "Doe",
    age: 20
})

// Some subtle differences between types and interfaces:
// 1. Types can represent primitive types, union types, and intersection types, while interfaces are primarily used to define object shapes.

// Example of union type :- 

type StringOrNumber = string | number;

function printValue(value: StringOrNumber): void {
    console.log(value);
}

printValue("Hello");
printValue(42);

// Example of intersection type :-

type Person = {
    name: string;
    age: number;
};  

interface Contact {
    email: string;
    phone: string;
}   

type PersonContact = Person & Contact;

function printPersonContact(contact: PersonContact): void {
    console.log(`Name: ${contact.name}, Age: ${contact.age}, Email: ${contact.email}, Phone: ${contact.phone}`);
}

printPersonContact({
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    phone: "123-456-7890"  
});

// 2. Interfaces can implement classes, while types cannot. This allows interfaces to define contracts for classes to follow. Types cannot be used in this way.
