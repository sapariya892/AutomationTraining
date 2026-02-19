//Declare the String 
let sentence:string="Java programming is fun and challenging";

//Count the total number of word in the sentense
console.log("Count the total number of word in the sentense");
let worldCount:number=sentence.trim().split(/\s+/).length;
console.log(worldCount);

//Print the words in revernse order
console.log("Print the words in revernse order");
// Find the sentense string length
let strLength:number=sentence.length;
let reverseString:string="";
for(let i:number=strLength-1;i>=0;i--){
    reverseString=reverseString+sentence.charAt(i);
}
//Print the reverse order string
console.log("Reverse String:"+reverseString);


//Convert the first character of each word to uppercase and print original sentense
console.log("Convert the first character of each word to uppercase and print original sentense");
//Split the character
let countWords=sentence.split(" ");
let result=" ";
for(let i:number=0;i<countWords.length;i++){
    result += words[i][0].toUpperCase() + words[i].substring(1) + " ";
}
console.log(result);




