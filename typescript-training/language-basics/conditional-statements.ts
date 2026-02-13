//Conditional Statements  ==> Statements along with condition.
//What is statement  ? Statement meaning line of code.
let lineNumber: number = 1;
if (lineNumber >= 1) {
    console.log("line 1");
} else {
    console.log("line 2");
    console.log("line 3");
    console.log("line 4");
}

//1. if...else statement ==> When we don't know the result of condition before execution.
//2. switch statement ==> When we know the result of condition before execution.Now, we want to choose one option among multiple

/* // 1. nested if...else statement ==> if...else statement inside another if...else statement.
let percentage: number = 70;

if (percentage >= 85) {
    console.log("Grade A");
    if (percentage >= 90) {
        console.log("Distinction");
        console.log("Congratulations! You will get gold medal.");
    } else {
        console.log("You just missed distinction by " + (90 - percentage) + " marks.");
    }
} else if (percentage >= 70) {
    console.log("Grade B");
} else if (percentage >= 50) {
    console.log("Grade C");
} else {
    console.log("Sorry Bro, You are Failed");
} */

//2. switch statement ==> When we know the result of condition before execution.Now, we want to choose one option among multiple.
let env:string = "dev";
switch(env){
    case "dev":
        console.log("Run the application in the development environment.");
        break;
    case "qa":
        console.log("Run the application in the QA environment.");
        break;
    case "prod":
        console.log("Run the application in the Production environment.");
        break;
    default:
        console.log("Please provide a valid environment");
}

