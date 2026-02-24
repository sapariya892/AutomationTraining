//OOPS i Type Script

//1.Class : is a template that can store data and objects together at one place.
//2.Object
//3.Constructor

//class Class Name{
//data
//Method
//Objects}

class employee{
    empId:number=100;
    empName:string="Bhavin";

    address():void{
        console.log("Gujarat");
    }
}

let emp=new employee();
console.log("Id is: "+emp.empId+" Name is:"+ emp.empName);
emp.address();



