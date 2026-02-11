// Data types in javascript are divided into two different categories.
// 1.Primitive Data types (Immutable)
// 2. Non Primitive Data types(Mutable)
//IMutable vS immutable
//Mutable
let a=10;
a+10;
a=40 // until the reassing the 
console.log(a);
//immutable
let obj={
    "name":"Bhavin",
    "id":1234
}
obj.age=35;
console.log(obj);

/***********************************
 * Primitive Data Type of in JAVASCRIPT
 * ********************************/
//Number, String, Boolean, undefined, null, and symbol
//1. number --> the data type that we are doing use to store with decimal or without any quotations.
let num1=10;
let num2=20.5;

// String  ==>  the data type that we are doing use to store text or character with help of sinle and double quotations or backticks.
let  empname="Bhavin";
let location="Ahmedabad";
console.log(empname);
console.log(location);

let greeting='He told me, "Good morning." ';
let newGreeting="I told him, 'Good morning.' ";
let anothergreeting="I told him, 'Very Good morning.' and also \"Nice to Meey You\" ";
console.log(greeting);
console.log(newGreeting);
console.log(anothergreeting);

// backtick ==> Backticks will be used to store templates literals
let message=`New employee name is ${empname} and location is ${location}.`
console.log(message)


// 3. Boolean ==> the data types that we are going to use to store true or false values
let isActive=true;
console.log("Boolean data type: "+isActive);
console.log("10 > 5 :"+10>5);

// 4. Undefined ==> Indefined represent a variable that has been declared but not assigned a value.
let age;
console.log("Age is: "+age);

// 5. Null ==> null represents a variable that has been declared anbd assinned the null/empty value.
let salary=null;
console.log("Salary is:"+String(salary));

//6. Symbol ==> Symbol represent a unique hidden indentifier
//let sym1=Symbol("id");
let countryOfOrigin=Symbol();
//let price=Symbol();
let productInfo  ={
    mobileName:"Samsung F25",
    price:200000,
    [countryOfOrigin]:"China"
}
console.log(productInfo);

/* NoN Primitive data type */
console.log("====>> Non Primitive Data Type  <<=====");
// 1. Object==> object data type represents a collaction of key-value pairs.
let person={
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
console.log(person.name);
console.log(person["name"]);
//Print the country of the person  
console.log(person.address.country);
console.log(person["address.country"]);

//Print complete person object
console.log(person);


// 2. Array data type represent a list of values;
let fruits=["Apple","Mango","Banana","Grapes"];
let prices=[10,20,50,5];
let fruitsPrice=["Apple",10,"Mango",20,"Banana",30,"Grapes",40];
console.log(fruits);
console.log(prices);
console.log(fruitsPrice);
console.log(""+fruitsPrice[0]+fruitsPrice[1]);

//3. function => Function represent a block of code or collection of statements to complete particular task
function lanuchBrowseAndLogin(browserName) {
    console.log("Launch the "+ browserName + " Browser");
    console.log("Enter the URL: https://www.icici.com");
    console.log("Enter the username as 'Bhavin' and password as 'Bhavin@123'");
    console.log("Click on the login button");
}

console.log(lanuchBrowseAndLogin("Chrome"));


//4. Set ==> Set represent a collection of unique value of any data types, guys employee id
let empIds= new Set();
empIds.add(123);
empIds.add(124);
empIds.add(124);
empIds.add(125);
empIds.add(126);
console.log(empIds);
console.log(empIds.size);

//5. Map ==> A map can store lultiple key-pair. Map allow duplicate values, but won't allow duplicate keys.
let empMap=new Map();
empMap.set(123,"Bhavin");
empMap.set(121,"Sapariya");
empMap.set(123,"Vipul");
empMap.set(125,"Admin");
empMap.set(126,"Admin");
empMap.set(127,"Amit");
console.log(empMap);
console.log(empMap.get(123));
console.log(empMap.size);
empMap.delete(127);
console.log("After the delete data")
empMap.delete(empMap);

//6. Date ==> 
console.log(Date());
let currentDate=new Date();
//let currentYear=new Date();
//Current Year
console.log(currentDate.getFullYear());
//Current Month
console.log(currentDate.getMonth());
//Current date
console.log(currentDate.getDate());
//Current Hour
console.log(currentDate.getHours());
//Current Minutes
console.log(currentDate.getMinutes());
//Current Seconds
console.log(currentDate.getHours());


