function checkPrimeNumber(num:number):string{
    // Check for numbers less than or equal to 1, 0 and 1 are NOT prime numbers
    if(num<=1) return `${num} is not prime(less than 0 or 1 number)`;
    // Handle the special case of 2
    // 2 is the only even prime number
    if(num===2) return "2 is a prime number";
    
    //Check divisibility by all numbers from 2
    //If any number divides 'num' exactly (remainder 0), it's not prime
    for(let i:number=2;i < num; i++){
        if(num % i==0){
            return `${num} is divisible by ${i}, so it not prime`;
        }
    }
    //If no divisors found, number is prime
    return `${num} number is prime`;
}

console.log(checkPrimeNumber(741));



