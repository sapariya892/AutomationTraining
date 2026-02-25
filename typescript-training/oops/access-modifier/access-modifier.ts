//Access Modifier in TypeScript

//1. Public ==> // No keyword or public keyword, can be accessed from anywhere.
//2. Private ==> // Accessible only inside the same class
//3. Protected ==> Accessible inside class, Accessible in child class
// Create all information with private and set required some required information and shared with required 

class Person {
    public name: string = "Bhavin"; // can be accessbile anywhere
    private salary:number=10000; // can be accessbile with in the class and child classes only
    protected age:number=34;//can be accessible within the class
    //Access all the member within the class
    printEmpData(){
        //allowed
        //Accessing Members within the class
        console.log("Accessing Members within the class");
        console.log("Name: "+this.name);
        console.log("Salary: "+this.salary);
        console.log("Age: "+this.age);
    }
    public getSalary(){
        return this.salary
    }
}
class Project{
    //Access all the member Outside the class
    printEmpData(){
        //allowed
        //Accessing Members within the class
        console.log("Accessing Members Outside the class");
        let obj=new Person();
        console.log("Name: "+obj.name);
        //console.log("Age: "+obj.age);
        //console.log("Salary: "+obj.salary);
        console.log("Salary: "+obj.getSalary);
       
    }
}
class Employee extends Person{
    printEmpData(){
        //allowed
        //Accessing Members within the class
        console.log("Accessing Members in Child the class");
        console.log("Name: "+this.name);
        console.log("Age: "+this.age);
        //console.log("Salary: "+this.salary); 
    }
}

