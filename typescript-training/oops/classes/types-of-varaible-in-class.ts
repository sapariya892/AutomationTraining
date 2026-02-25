//Types of variable in Typescript
//1. Local variable ==> The variable declared inside the method
//2. Instance variable => The variable declared outside the of the class and inside the class. whenever we want 
//3. Static variable => the variable declared outside of the method and inside the class, along with static 

class Employee{
    //instance variable
    empName:string="Bhavin";
    static company:string="Tech Solution"
    static printEmployeeDetails():void{
        //Local Varriable
        let empSalary:number=100000;
        console.log("Employee Salary"+empSalary);
    }
}
let obj=new Employee();
Employee.company="Technology Solutions"
console.log(Employee.company);
