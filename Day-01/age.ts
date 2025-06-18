function isLegal (age : number) : boolean {
    if(age >= 18) {
        return true;
    }
    return false;
}

const ans1 : boolean = isLegal(20);
console.log(ans1);