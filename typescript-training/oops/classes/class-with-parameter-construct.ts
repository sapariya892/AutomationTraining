class Employee{
    //default constructor
    empId:number;
    constructor(id:number) {
        //Refers to the current object
        this.empId=id
    }

    printEmployeeDetails( empname:string){
        console.log("Employee Id "+ this.empId);
        console.log("Employee Name "+ empname);
    }
    
    printEmployeeProject(empId:number, empProject:string){
        console.log("Employee Id"+ this.empId);
        console.log("Employee Project"+ empProject);
    }

     printEmployeeRole(empRole:string){
        console.log("Employee Id"+ this.empId);
        console.log("Employee Role"+ empRole);
    }
}

let emp=new Employee(1234);
//calling method 1
emp.printEmployeeDetails("Bhavin");
//calling method 2
emp.printEmployeeDetails("TypeScript");
//calling method 3
emp.printEmployeeRole("SDET");