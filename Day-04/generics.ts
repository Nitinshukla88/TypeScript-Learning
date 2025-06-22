// Generics in TypeScript allow you to create reusable components that can work with any data type.

// When we use generics ? Ans - When we want to create a function or a class that can work with any data type, we use generics. You don't know the type of data that will be passed to the function or class at the time of writing the code, so you use a placeholder type (like T) that can be replaced with any type when the function or class is used.

function identity<T>(arg: T): T {
    return arg;
}

// Example usage of the identity function with different types
let output1 = identity<string>("Hello, Generics!"); // T is replaced with string
let output2 = identity<number>(42); // T is replaced with number
let output3 = identity<boolean>(true); // T is replaced with boolean

console.log(output1); // Output: Hello, Generics!
console.log(output2); // Output: 42     
console.log(output3); // Output: true

// You can say that it can be done using like this.

type Input = number | string

function show(arg : Input[]) {
    return arg[0];
}

show(["Nitin", "Shukla"]); // Output: Nitin
// But if you do --

const outPut = show(["Nitin", "Shukla"]); // Output: Nitin

// outPut.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'Input'.
// This is because TypeScript cannot guarantee that the first element of the array is a string, or number, so it cannot allow string-specific methods like `toUpperCase()` to be called on it.

// That's the sole purpose why we use generics in such cases.
