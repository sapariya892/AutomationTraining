// There are a tyrpe of declaration used in JS and TS
// const - represent the constast value, we can not change value 
// let - represent the data that can be changed later.
// var - it represent the data that can be changed later.

/* These three different declaration will differ mainly based on four important parameters 
1. initialization
2. reassignment
3. re-declaration 
4. Scope */

// 1. Initilization ==> Adding the vlaue at time of declaration
//constant variable must be initialized 
const pi=3.14; 
//constant variable does not required the initialization. later we can initialized the value.
let a=10;
var b=10;
console.log("Constant pi value: "+ pi);
console.log("let value: "+ a);
console.log("Var value value: "+ b);

// 2. reassignment ==> Changing the value of a variable after it has been declared
//pi=3.25; // Error, it's not allowed to reassingn a constant variable.
a=30; // Allowed, we reasign a variable declared with let  
b=40; // Allowed, we reasign a variable declared with var 
console.log("after change Constant pi value: "+ pi);
console.log("after change let value: "+ a);
console.log("after change Var value value: "+ b);

//3. re-declaration ==> using same variable to store some other data within the same file.
//cons pi=3.25; // error it's not allowed to reclare  a constant variable.
//let a=30; // error it's not allowed to reclare  a let  variable.
var b=40; // Allowed, we re-decalred a variable declared with var. 
console.log("try to re-declare pi value: "+ pi);
console.log("try to re-declare the value but get the error: "+ a);
console.log("after change Var value value: "+ b);

// 4. Scope  ==> Where can used be used the data 
// const and let are blocked-scoped
// var is not blocked-scoped
{
   console.log("------------------------------------------------ ");
    const x=3.14; 
    //constant variable does not required the initialization. later we can initialized the value.
    let y=10;
    var z=10;
    console.log("Constant pi value: "+ x);
    console.log("let value: "+ y);
    console.log("Var value value: "+ z); 
}

//console.log("Constant pi value: "+ x); // Error, x is not accessible outside the block.
//console.log("let value: "+ y); // Error, y is not accessible outside the block.
console.log("Out side try acceess var value: "+ z); // var is accessible outside of the block.



