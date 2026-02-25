// Inheritance in TypeScript
// Inheritance allows parent class to use the properties and methods of child class.
// The class that is inherited from is called the Parent (Base) class.

//1 Single inheritance
//2 Multiple level
//3 Hierarchical Inheritance
// 4 Multiple (classes)


class class1{
    empId:number=1022;
    empName:string="Bhavin";
}
class class2 extends class1{
    //child extends parent
    empSalary:number=60000;
    printEmpDetails(){
        console.log("Employee Id"+this.empId);// this means current class inheritance.
        console.log("Employee Name"+this.empName);
        console.log("Employee Salary"+this.empSalary);
    }
}
class class3 extends class2{
    empDept:string="IT";
   
}