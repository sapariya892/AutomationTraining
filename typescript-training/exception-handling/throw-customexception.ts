let age:number=10;
if(age<18){
    throw new Error("You are not allowed for the voting");
}else{
    console.log("You are allowed for the voting");
}
console.log("Excution is completed");
 

/*
class InvalidAgeError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidAgeError";
    }
}

function checkAge(age: number) {
    if (age < 18) {
        throw new InvalidAgeError("Age must be 18 or older.");
    }
    console.log("Access granted");
}

try {
    checkAge(16);
} catch (error) {
    console.log(error.name + ": " + error.message);
}*/

