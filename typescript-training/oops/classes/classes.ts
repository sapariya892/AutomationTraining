//OOPS i Type Script

//1.Class : is a template that can store data and objects together at one place.
//2.Object
//3.Constructor

//class Class Name{
//data
//Method
//Objects}

// Constructro : is special method created by default with the name 'constructor' created by default in every class.
// It is used to initialize the data members of the class. It is automatically called when an object of the class is created.

//Creating Employee Class 
class employee{
    //default constructor
    constructor(){
        console.log("This is constructor of employee class");
    }
    empId:number=100;
    empName:string="Bhavin";

    address():void{
        console.log("Gujarat");
    }
}

let emp=new employee();
console.log("Id is: "+emp.empId+" Name is:"+ emp.empName);
emp.address();

//Type of constructor in type
//1. default constructor
//2. parameter construtor



