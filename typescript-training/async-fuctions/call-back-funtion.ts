//fuction to get sumOf Numbers
function sumOfNumbers(input:number):number{
    let sum=0;
    for(let i=1;i<=input;i++){
        sum+=i;
    }
    return sum;
}

//Normal Fuction flow
console.log("Start of the program");
console.log("Step 1 Executed");
console.log("Step 2 Executed");
setTimeout(():void=>{
    let result=sumOfNumbers(1000000000000);
    console.log(result);
})
console.log("Step 3 Executed");
console.log("Step 4 Executed");
console.log("End of the program");

