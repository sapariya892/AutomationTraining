interface personInfo{
    empId:number,
    name:string,
    age?:number,
    visaStatu:boolean,
    address:{
        city:string,
        state:string,
        country:string
    }
    role?:string;
   // [key:string]:any;
}

let person:personInfo={
    empId:1234,
    name:"Bhavin",
    age:33,
    visaStatu:true,
    address:{
        city:"Ahmedabad",
        state:"Gujarat",
        country:"India"
    }    

}

//How to manuplate the data 
//2. Access the data from object
console.log("Person Name IS "+person.name);
console.log(person["name"]);
console.log("Person Country IS "+person.address.country);
console.log("Person Country IS "+person.address["country"]);

//adding new propety 
person.role="Quality Engineer";
console.log(person);
//4. modifying property 
person.role="SDET";
console.log(person);
//5.Delete the propery 
delete person.age;
console.log(person);
//6. check wheatther a particulart available or not withing the object
console.log("empId" in person);
console.log("age" in person);

7.//Get all the keys from the object
console.log(Object.keys(person));


8.//Get all the values from the object
console.log(Object.values(person));

9.//Get all the enteries from the object
console.log(Object.entries(person));

//10 of is not working 
for(let key in person){
    console.log(key as keyof personInfo);
}

//11. schema of data or verify of data type a partucualr property
console.log(typeof person.empId);

//12.merge two object
interface projectInfo{
    projectName:string
    projectId:number
}
const project:projectInfo = {
    projectName: "TypeScript",
    projectId: 52669
};

let mergedObject = { ...person, ...project };
//onsole.log(mergedObject)
console.log(JSON.stringify(mergedObject))