//Implements pow(x,n) which calucaluated x raised to the power n(ie xn)

//Declare required variable 
let x:number=-2; // Base Number
let n:number=-2;

let pow:number=0;
//Checking negative number
if(n<0){
    pow=(x**n)
    console.log(pow);
}
else{
    // Checking numberis positive
    for(let i=1;i<=n;i++){
        pow=x**n;
    }
    console.log(pow.toFixed(4));
}

