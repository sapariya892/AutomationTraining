//Create Two array 
//Student Array:
let studentNames: string[] = ["Student1", "Student2", "Student3", "Student4", "Student5",
    "Student6", "Student7", "Student8", "Student9", "Student10"];
//Student Marks:
let studentMarks: number[] = [50, 55, 60, 65, 70, 90, 85, 80, 52, 51];
//updated marks
let updatedmarks:number[]=[];

//Add 10 marks of each student
for(let i:number=0;i<studentMarks.length;i++){
    updatedmarks[i]=studentMarks[i]+10;
    //console.log(updatedmarks[i])
}

//Print update makr for the student:
for(let i:number=0;i<studentNames.length;i++){
    console.log("StudentName is: "+studentNames[i]+", Original Marks: "+studentMarks[i] +", Updated Marks: "+updatedmarks[i])
}

//find the average from the updated student marks
let total:number=0;
let avgMarkOfStudents:number=0;
for(let i:number=0;i<updatedmarks.length;i++){
    total=total+updatedmarks[i];
}
console.log("Total marks is: "+total);
//find avarage
avgMarkOfStudents=total/updatedmarks.length;
console.log("Avarage marks of the result is: "+avgMarkOfStudents);

