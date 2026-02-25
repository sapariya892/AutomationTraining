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