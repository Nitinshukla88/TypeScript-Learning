// In this file, we will explore how to assign types to arrays in TypeScript.

// Given an array of numbers, we want to create a function that takes this array and returns the sum of all the numbers in it.

type numberArr = number[];

function sum(arr : numberArr) : number {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

sum([1, 2, 3, 4, 5]); 

// In case of Arrays in typescript, we have to just only use [] in front of the primitive data type of each member of the array.


// -------------------------------------------------------------------------------------------------------------------------------


// Task : Create a function that takes an array of user objects and returns true or false if the age of user is greater than 18 or not.


interface Users {
    name: string;
    city: string;
    age: number;
}

function aboveLegalAge (users: Users[]) : boolean {
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            return true;
        }
    }
    return false;
}

const output : boolean = aboveLegalAge([
    { name: "Alice", city: "Wonderland", age: 30 },
    { name: "Bob", city: "Builderland", age: 17 },
    { name: "Charlie", city: "Chocolate Factory", age: 25 }
])

console.log(output); 