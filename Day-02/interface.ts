// Interface is a way to define the types of fields inside any object if that object is being passed into any function.

// Task : Create a function that takes an user as an object and return true if his age is above 18 else return false.

interface User {
    name : string,
    city : string,
    age : number,
    email? : string  // Optional argument 
}

function isLegalAge(user : User):boolean {
    if(user.age >= 18) {
        return true;
    }
    return false;
}

const response : boolean = isLegalAge({
    name : "Nitin Shukla",
    city : "Kanpur",
    age : 20
})

console.log(response);