// Data types in TypeScript are divided into two different categories.
// 1.Primitive Data types (Immutable)
// 2. Non Primitive Data types(Mutable)
//IMutable vS immutable

//VariableDelaration variable:datatype=value
//Mutable
/***********************************
 * Primitive Data Type of in TypeSCRIPT
 * ********************************/  
//Number, String, Boolean, undefined, null, and symbol
//1. number --> the data type that we are doing use to store with decimal or without any quotations.
let num1:number=10;
let num2:number=20.5;
console.log(num1+num2); 

//2. String  ==>  the data type that we are doing use to store text or character with help of sinle and double quotations or backticks.
let  empname:string="Bhavin";
let location:string="Ahmedabad";
console.log(empname);
console.log(location);

let greeting:string="Good morning";
console.log("Hey Bhavin "+greeting);

// backtick ==> Backticks will be used to store templates literals
let message:string=`New employee name is ${empname} and location is ${location}.`
console.log(message)

// 3. Boolean ==> the data types that we are going to use to store true or false values
let isActive:boolean=true;
console.log("Boolean data type: "+isActive);
console.log("10 > 5 : "+(10>5));

// 4. Undefined ==> Indefined represent a variable that has been declared but not assigned a value.
let age:undefined=undefined;
console.log("Age is: "+age);

// 5. Null ==> null represents a variable that has been declared anbd assinned the null/empty value.
let salary:null=null;
console.log("Salary is:"+String(salary));


// Union Type:==>  The data types more than one data type allowed within the variable.
let employeeAddress:string|number|boolean="123 Main Street";
console.log(employeeAddress);
employeeAddress=123456;
console.log(employeeAddress);
employeeAddress=true;
console.log(employeeAddress);

//Any type ==> Any is a data type that is going to remove the type safety layer withing TypeScript.
let data:any="Hello word"
console.log(data);
data=123456;
console.log(data);
data=true;
console.log(data);


//6. Symbol ==> Symbol represent a unique hidden indentifier
let countryOfOrigin:symbol=Symbol();
//let price=Symbol();
let productInfo  ={
    mobileName:"Samsung F25",
    price:200000,
    [countryOfOrigin]:"China"
}
console.log(productInfo);

/* NoN Primitive data type */
console.log("====>> Non Primitive Data Type  <<=====");
//interfaces for the templates
interface personInfo{
    empId:number,
    name:string,
    age:33,
    visaStatu:boolean,
    address:{
        city:string,
        state:string,
        country:string
    } 
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
// print the name of person
console.log("Person Name IS "+person.name);
console.log(person["name"]);
//Print the country of the person  
console.log(person.address.country);

// 2. Array data type represent a list of values;
let fruits:string[]=["Apple","Mango","Banana","Grapes"];
let prices:number[]=[10,20,50,5];
let fruitsPrice:(string|number)[]=["Apple",10,"Mango",20,"Banana",30,"Grapes",40];
console.log(fruits);
console.log(prices);
console.log(fruitsPrice);
console.log(""+fruitsPrice[0]+fruitsPrice[1]);

//3. tuple ==> the data types that we are going to use to store multiple value with different data tyes in a single variable in specific order.
//Arrya vs Tuple
//Store employee name, employee phone number, employee visa status within the arrya and tuple.
let empInfo:(string|number|boolean)[]=[98882272,true,"Bhavin"];
console.log("Array: "+empInfo)
//Store employee name, employee phone number, employee visa status within the arrya and tuple.
let newEmployeeInfo:[string,number,boolean]=["Bhavin",98882272,true];
console.log("Tuple: "+empInfo)
//3. function => Function represent a block of code or collection of statements to complete particular task
function lanuchBrowseAndLogin(browserName:string):void {
    console.log("Launch the "+ browserName + " Browser");
    console.log("Enter the URL: https://www.icici.com");
    console.log("Enter the username as 'Bhavin' and password as 'Bhavin@123'");
    console.log("Click on the login button");
}
console.log(lanuchBrowseAndLogin("Chrome"));

function getAccountDetails():number {
    let accountBalance=100000;
    return accountBalance; // if return type is not provided then it should be undfined return.
}
console.log(getAccountDetails());

//5. Map ==> A map can store lultiple key-pair. Map allow duplicate values, but won't allow duplicate keys.
let empInfoMap:Map<number,string>=new Map();
empInfoMap.set(123,"Bhavin");
empInfoMap.set(121,"Sapariya");
empInfoMap.set(123,"Vipul");
empInfoMap.set(125,"Admin");
empInfoMap.set(126,"Admin");
empInfoMap.set(127,"Amit");
console.log(empInfoMap);
console.log(empInfoMap.get(123));
console.log("Map Size Is"+empInfoMap.size);
empInfoMap.delete(127);
console.log("After the delete data")
//empInfoMap.delete(123)

//4. Set ==> Set represent a collection of unique value of any data types, guys employee id
let empIds= new Set<string>();
empIds.add("A");
empIds.add("B");
empIds.add("B");
empIds.add("A");
empIds.add("C");
console.log(empIds);
console.log(empIds.size);








 



