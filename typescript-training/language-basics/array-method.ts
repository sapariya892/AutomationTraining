//Arrya: An array is a collection of multiple values 

//1. creatting an array
console.log("creating the array");
let fruits:string[]=["Apple","Mango","Banana","Grapes"];
let prices:number[]=[1,2,3,4,5];
console.log(fruits);
console.log(prices);


//2. accessing array elements 
console.log(fruits[1]);//Mango
console.log(prices[3]);//5

//3. adding additional values to the existing array at the end.
console.log("adding additional values to the existing array at the end.");
prices.push(6);
console.log(prices);

//4. Remove the last value to the existing array at the end.
console.log("Remove the last value to the existing array at the end");
prices.pop();
console.log(prices);


//5. adding additional values to the existing array at the Beginning
console.log("adding additional values to the existing array at the Beginning");
prices.unshift(0);
console.log(prices);

//6. remove first value additional values to the existing array at the Beginning
console.log("remove additional values to the existing array at the Beginning");
prices.shift();
console.log(prices);

//7 Add or remove one or more values withing the array from a specific index.
console.log("Add or remove one or more values withing the array from a specific index");
prices.splice(0,3,6,7);//splice(index,numberOfValuestoRemoved,Values to be added)
console.log(prices);

//8.creating array by extract a portion of an existing array 
console.log("creating array by extract a portion of an existing array");
let extractValuess=prices.slice(1,3);//slice(startIndex,EndIndex)
console.log(extractValuess);

//9. two different array and create single array 
console.log("two different array and create single array ");
let number1:number[]=[1,2,3,4];
let number2:number[]=[5,6,7];
let mergedArray:number[]=number1.concat(number2);
console.log(mergedArray);

//10. finding index of specific value within the arrya. wheather the value is available or not 
//let fruits:string[]=["Apple","Mango","Banana","Grapes"];
console.log("finding index of specific value within the arrya. wheather the value is available or not");
let indexOfBanana=fruits.indexOf("Banana");
console.log(indexOfBanana);
let indexOfMango=fruits.indexOf("Mango");
console.log(indexOfMango);

//11. Iterate the value of the arrya 
console.log("Iterate the value of the arrya");
for(let fruit of fruits){
    console.log(fruit);
}

//12. Reverse the values within the array.
console.log("Reverse the values within the array.");
let reverseNumber:number[]=[1,2,3,4,5];
console.log(reverseNumber.reverse());

//13.Sorting the values within the array.
console.log("Sorting the values within the array.");
let sortArrayNumber:number[]=[9,2,7,4,5,6];
console.log(sortArrayNumber);
console.log("Ascending order: "+sortArrayNumber.sort());
console.log("Reverse the number: "+sortArrayNumber.sort().reverse());

//14. Special Lamda expression in array (Map --> manipulate, filter --> Reduce & fecth foreach  --> iterate value)
let input:number[]=[1,2,3,4,5,6];

//map : get the squre of each and every number 
let squareNumber=input.map(x=>x*x);
console.log("map : get the squre of each and every number"+squareNumber);

//filter : Print only even number from the list.
let evenNumbers=input.filter(x=>x%2===0);
console.log("filter : Print only even number from the list: "+evenNumbers);

//foreach : loop each and every value from array 
input.forEach(x=>console.log("foreach : loop each and every value from array "+x));


