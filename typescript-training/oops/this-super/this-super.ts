class Parent{
    //Parent Class Value
    course: string="JavaScript";
    printname(){
        console.log("Parent Class Method");
    }
}
class Child extends Parent{
    //Child class value
    course: string="TypeScript";
    //Method Level
    printname(){
        console.log("Child Class Method");
    }
    printCourse(course:string){
        console.log("Course Name:"+course)
        //console.log("Course Name:"+ new Child().course);
        //console.log("Course Name:"+ new Parent().course);
        console.log("Course Name:"+ this.course);
        console.log("Course Name:"+ super.printname());
        
    }
}
let obj=new Child();
obj.printCourse("PlayWright");