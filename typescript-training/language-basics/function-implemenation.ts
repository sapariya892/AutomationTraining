//Function : a fuction is a block of code or a collection of statement writtem togher to complete a specific task.

//1. function without parameter and without return value
// Creating a common fuction that is not at all to take any input. At the same time is not going to the give you any output as well.

function greet():void{
    console.log("Hello, Welcome ");
    
}
greet();

//21. function without parameter and without retrun type
// Creating a common fuction that is not at all to take any input. At the same time is not going to the give you any output as well.
function getPerson(name:string):void{
    console.log(`Hello ${name}, Welcome!`);
   
}

//3. function parameter and retrun type
// Creating a common fuction that is not at all to take any input. At the same time is not going to the give you any output as well.
function addNumbers(a:number, b:number):number{
    return a+b; //return keyword will be used to return the data
}
//calling the fuction 
console.log(addNumbers(10,20));

//4. function wihout parameter and retrun type
// Creating a common fuction that is going to provide some output without taking any input parameter
function getCurrentYear():number{
    let currentDate=new Date()
    return currentDate.getFullYear()
}
console.log(getCurrentYear);

//5. function with optional parameter
// Creating a common fuction that can take some input parameter, out of the some parameter are optional to enter 
// ? represent the parameter is optional 
function printEmpDate(name:string, age?:number):void{
    if(age!==undefined){
        console.log("Employee name: "+name+". Age is:"+age);
    }else{
        console.log("Employee name: "+name+" age is not provided");
    }
}

printEmpDate("Bhavin",50);

//6. function with default parameter 
//Creating a fucntion that take input parameter and some of those parameter having default values.
function printEmpVisaInfo(name:string, visaStatus:boolean=false):void{
    console.log("Employee name is: "+name+", Employee via status is: "+visaStatus);
} 
printEmpVisaInfo("Bhavin",true);
printEmpVisaInfo("Kiran");

//7. fuction with reset parameter
//Creating a fucntion that take multiple input parameter as an array.
function sumofNumber(...numbers:number[]){
    let sum:number=0;
    for(let num of numbers){
        sum+=num;
    }
    console.log(sum);
}
//calling the function
sumofNumber(10,20);
sumofNumber(10,20,30);
sumofNumber(80,10,50);


