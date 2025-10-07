// TypeScript has some new set of APIs, some of them are -->
// Learn these APIs when necessary.

// 1. Pick
// 2. Partial
// 3. Readonly for generics and readonly with variables 
// 4. Record and Map
// 5. Exclude


// Note : One thing to note is that for a constant object or array, we are able to change it's values or properties inside it even though it is declared constant but with a String it is not possible. For example --> 


interface Name {
    firstName : string,
    age : Number
}
const obj : Name = {
    firstName : "nitin",
    age : 22,
}

obj.firstName = "nitin shukla";
console.log(obj); // Here obj will contain the firstName to be nitin shukla not nitin even though obj is a const type.

// But how it's happening ??
// Ans - Here we are not changing the reference of obj. We are only changing the value of it's property not the object reference.
// But in case of string, if we try to change it since it is of immutable type, we actually tries to change it's reference so that's why tsc complains.

// But if you want to enforce that even the inner values can't be changed, you can do it via adding the readonly flag while defining the type of user. That's the use of readonly.

// Usecase of readonly, Readonly is that you don't want any developer to change the defined api so you declare it readonly.