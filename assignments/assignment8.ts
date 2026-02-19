//Declare the String 
let paragraph:string=`Java is a popular programming langualge. Java is used to for java web developmen, mobile application, and more ;   `
let findToWord:string="java";
let paragraphConvertToLower=paragraph.toLowerCase();


//let the split the word 
let words=paragraphConvertToLower.split(" ");
console.log(words);

//Add count for the words
let count=0;

//Add the index for the word of the position  
let indexes:number[]=[];
for(let i=0;i<words.length;i++){
    if(words[i]===findToWord){
        count++;
        indexes.push(i);
    }
}
console.log('Find the total number of occurance is: '+`${findToWord}`+" : "+  count);
console.log(`${findToWord} occurance count is:${count} and index of the ${findToWord} is: ${indexes}`);




