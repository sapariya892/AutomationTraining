//Loop Statements : Loop the statements or repeat the execution of statements multiple times based on the conditions given

// 1.for loop:When we know the total number of iterations to be executed before itself, we use for loop.
// 2.while loop:When we don't know the total number of iterations to be executed before itself, we use a while loop. 


//1.for loop
//syntax:

//for (condition-to-start; condition-to-end; increment/decrement)
{
    //statements
}

//example: Print the name Bhavin for 10 times using for loop
/* let empName: string = "Bhavin";
for (let i: number = 1; i <= 10; i++) {
    console.log(i + " " + empName);
}
 */
//2.while loop
/* //syntax:
//initialization
//while(condition)
{
    //statements
}
let loops: number = 1;
let isPageLoad: boolean = false;
while (loops > 0) {
    if (isPageLoad || loops == 5) {
        break;
    }
    console.log("Refresh the page");
    loops++;
    

} */

/* example: Refresh the page until the application is launched successfully. 
let counter: number = 1;
while (counter > 0) {
     let isPageLoaded: boolean = false; //assume this value is coming from application
     if (isPageLoaded || counter === 10) {
        break;//terminate the loop when the page is loaded or not loaded even after 10 attempts
     }
    console.log("Refresh the page");
    counter++;
} */

/* //3.do..while loop (special type of while loop)
let i:number =0;
while(i>0){
    console.log("Bharath Reddy");
    i++;
}

do{
    console.log("Bharath Reddy");
    i++;
}while(i>0);
 */

/* //4.for..of loop : Iterate over each and every value of the predefined list (array,set,map)
//syntax:
//for (variable of pre-defined-list)
//{
    //statements
//}
let ename:string[]=["Bhavin","Vipul","Bhavesh"];
//traditionl for loop
console.log("<==traditionl for loop==>");
for (let i: number = 0; i < ename.length; i++) {
    console.log(ename[i]);
}
console.log("<==For Of loops==>");
for(let enames of ename){ //each and every value of empnames.
    console.log(enames);
} */

/* //5.for..in loop : Iterate over each and every key of the predefined object

//object ==> object represents a collection of key-value pairs.

interface empDetails {
    empId: number ,
    empName: string,
    havingVisa: boolean,
    address: {
        city: string,
        zipCode: number,
        state: string,
        country: string
    }
}

let empinfo:empDetails = {
    empId: 101,
    empName: "John Doe",
    havingVisa: true,
    address: {
        city: "New York",
        zipCode: 10001,
        state: "NY",
        country: "USA"
    }
};

console.log(empinfo.empId);
console.log(empinfo["empId"]);
 */
//syntax:
//for (key in pre-defined-object)
{
    //statements
}

/* for (let key in empinfo) {
    console.log(key);
    console.log(empinfo[key as keyof empDetails]);
} */



/* //Map
let employeeMap:Map<string,string> = new Map();
employeeMap.set("empId", "101");
employeeMap.set("empName", "John Doe");
employeeMap.set("havingVisa", "true");
employeeMap.set("empName", "Bharath");

employeeMap.keys();
employeeMap.values();

for(let empDetail of employeeMap){
    console.log(empDetail);
}
 */

//====================================================>
let pageRefreshed:number=0;
//While loops
while(pageRefreshed>0){
    console.log(pageRefreshed+". Refreshed the page");
    pageRefreshed++;
}

//Do while Loops
do{
    console.log(pageRefreshed+". Refreshed the page");
    pageRefreshed++
}while(pageRefreshed>0);