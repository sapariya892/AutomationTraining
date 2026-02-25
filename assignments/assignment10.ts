function maxprofit(prices:number[]):number{  
    //Declare variable for the max and min price
    if (prices.length === 0) return 0;
    let minPrice:number=prices[0];
    let maxProfit:number=0;

    for(let stockPrice of prices){
        //Update Mimimum prices
        if(stockPrice<minPrice){
            minPrice=stockPrice;
        }
        else{
            const profit:number=stockPrice-minPrice;
            maxProfit=Math.max(maxProfit, profit)
        }
        
    }
    return maxProfit;
}
//Calling the funtion
//const result=maxprofit([7,1,5,3,6,4]);
const result=maxprofit([10,7,5,8,2,18]);
console.log(`Maximum Profit Taking to Home Is ${result}`);