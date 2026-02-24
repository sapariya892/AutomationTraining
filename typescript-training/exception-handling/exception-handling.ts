//Exception Handling ==> Handle the exception
//try..Catch..Finally blocks ==> When there is an exception , we can handle an exception and continue the execution process
//thow an custom exception ==> When there is an exception , but intetionally the user want to fall the program , by using  "thorw" keyword we can use.

let input: any;
/*
try{
    console.log(input.toLowerCase()); //Plan A
}
catch(error){
    console.log("Exception Occured, Please check"); //Plan B
    console.log(input.toUpperCase());
}
finally{
    console.log("Exception is Completed");//Mandatory Code
    //logout, session termination
}
*/
let dividednum:number=5;

try{
    console.log(input.toLowerCase()); //Plan A
}
catch(error){
    console.log("Exception Occured, Please check"); //Plan B
    console.log(input.toUpperCase());
}
finally{
    console.log("Exception is Completed");//Mandatory Code
    //logout, session termination
}




