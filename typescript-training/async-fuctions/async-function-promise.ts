//Async funtion with Promises that return eigher resolve and reject
function sampleAsyncFunction():Promise<string>{
    return new Promise((resolve,reject) =>{
        const randomnumber=Math.random();
        if(randomnumber >0.5){
            resolve(`Success! the random Numebr is ${randomnumber}`);
        }else{
            reject(new Error(`Failure! the random number is ${randomnumber}`));
        }
    })
};

//calling the asychornous fuction and hadnling the promise
async function executeTest():Promise<void>{
    const result:string= await sampleAsyncFunction();
    console.log(result);
    
}

//call the fuction 
executeTest();