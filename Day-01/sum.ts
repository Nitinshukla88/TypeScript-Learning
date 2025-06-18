// Task : Write a function that accepts two numbers as parameters and prints the sum of those two numbers and return nothing.


// This is how to explicitly define the type of parameters and return type of a function in TypeScript. Typescript has type inference, so you need not to explicitly define the type of parameters and return type of a function, but it is a good practice to do so. Althrough it's a good practice to define the return type of a function.

function sum (a : number , b : number) : number {
    return a + b;
}

const ans : number = sum(4, 5);
console.log(ans);