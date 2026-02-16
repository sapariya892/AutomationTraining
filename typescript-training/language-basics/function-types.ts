//Fucntion Type in TypeScript
//Tree Type of functions
//1. Named funtion
//2. Arrow fuction / Lamda function 
//3. annonymous function



//1. Named funtion
// Names fuction are nothing but the fucntion that are declared explicitly with some name 
//syntax
//funcion  functionnamed(parameter):returnType{
//}
function greet(name:string):string{
    return "hello"+name+"";
    
}
//calling function
console.log(greet("Bhavin"));

//2. Arrow fuction / Lamda function 
// Arrow funcion is nothing but the fuciton that we are going to write without any name. and the implemention will be written by using arrow mark
function sumOfNumbers(a:number,b:number):number{
    let c:number=a+b;
    return c;
}
console.log(sumOfNumbers(10,20));

//syntax
//let  functionnamed=(parameter):returnType ==> Implemention{

let add=(a:number,b:number):number=>a+b;
console.log(add(10,20));
let greeting=(name:string):void=>console.log();



//3. annonymous function