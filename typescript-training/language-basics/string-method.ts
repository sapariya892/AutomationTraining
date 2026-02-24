//String : is nothing but a collection of chatacter written together within the quoatation

//1. storing string in a variable.
let greeting:string="Hello , World";
let name:string=`Bhavin`;
let message:string=`Welcome to Typescript`;

console.log(greeting);
console.log(name);
console.log(message);

//Advantage of backticks is that we can use the string interpolation.
let firstname:string="Bhavin";
let lastname:string="Sapariya";

//old way
let fullName:string=firstname+ " " +lastname;//using contacnation.
//new Way
//let fullNameNew:string=

/***********String Method************** */
//1.Storing string valeu in a variable
console.log("Storing string valeu in a variable");
let oririginalString:string="UserName : admin | Password : admin123";
console.log("oririginalString");

//2. calclulate the total number of character avaialbel in the string
console.log("calclulate the total number of character avaialbel in the string");
let stringLength=oririginalString.length;
console.log("Total character in string"+stringLength);

//3. Get the specific character from the string at a specific index
console.log("calclulate the total number of character avaialbel in the string");
let charAtIndex5=oririginalString.charAt(5);
console.log("Total character in string"+charAtIndex5);

//4. reverse string 
console.log("calclulate the total number of character avaialbel in the string");
let strLength:number=oririginalString.length;
let reverseString:string="";
for(let i:number=strLength-1;i>=0;i--){
    reverseString=reverseString+oririginalString.charAt(i);
}
console.log("Reverse String"+reverseString);

//5. Remove unwanted spaces (begining & ending) from the string ==
console.log("Original String: '" + oririginalString + "'");
console.log("Trimmed String: '" + oririginalString.trim() + "'");


//6. Remove All spaces from the string ==> string.replace(/expression/)
console.log("Remove All spaces from the string ==> string.replace(/expression/)");
let stringWithoutSpace=oririginalString.replace(/[a-zA-z]/,"");
console.log(stringWithoutSpace);

//7. Remove the alphabets 
console.log("Remove the alphabets ");
let stringWithoutAlphabets=oririginalString.replace(/[a-zA-z]/,"");
console.log(stringWithoutSpace);

//8. Remove All number from the string 
console.log("Remove All number from the string ");
let stringWithoutNumber=oririginalString.replace(/[0-9]/,"");
console.log(stringWithoutNumber);

//8. Remove Speical Character from the string 
console.log("Remove Speical Character from the string ");
let stringWithoutSpecialChars=oririginalString.replace(/[^0-9a-zA-Z]/,"");
console.log(stringWithoutSpecialChars);

//9. converting the string to uppecase 
console.log("Converting the string to uppecase");
let upperCaseString=oririginalString.toUpperCase();
console.log(upperCaseString);

//10. converting the string to LoweCase
console.log("Converting the string to Lowercase");
let lowerCaseString=oririginalString.toUpperCase();
console.log(lowerCaseString);

//11. Extract specific part of the string based on starting and ending index.
console.log("Extract specific part of the string based on starting and ending index.")
let userNameExtact=oririginalString.substring(12,17);
let passwordExtact=oririginalString.substring(31,39);
console.log("userNameExtact: "+userNameExtact);
console.log("passwordExtact: "+passwordExtact);

//12 Extract the specific part of the string from dynamic text ==> string.split(exp)
let dynamicString:string="UserName : Bhavin | Password : Bhavin@123";
let spllttedValues=dynamicString.split(" "); 
console.log(spllttedValues[3]);
console.log(spllttedValues[6]);


//13.Compare two different String
//=== Operator for strict Equqality (compare both value and type )
//=== Operator for losse Equqality (compare only value, perform type coeracion) (case sensitive)
// include() method for substring check (case senstitive)
// Start with () amd end with() methhod for prefix and suffix check(case senstive)
console.log("Compare two different String");
let str1:string="Bhavin Sapariya";
let str2:string="bhavin sapariya";
console.log("using === operator"+(str1===str2));
console.log("using == operator"+(str1==str2));
let str3:string="100";//string 
let numbers:number=100;//number
//console.log("using === operator: "+(str3===numbers));//false
//console.log("using == operator: "+(str3==numbers));//true
let str4:string="TypeScript"
console.log("Type Script includes 'Script':  "+str4.includes("Script"));
console.log("Type Script includes 'Script':  "+str4.includes("script"));
console.log("Type Script includes 'Script':  "+str4.startsWith("Type"));
console.log("Type Script includes 'Script':  "+str4.endsWith("script"));



//14. Data Conversion
//conveting other data type to string 
console.log("14 Data Conversion");
let stdCode:number=144;
let phone:number=355345;
let stdCodeString=String(stdCode);
console.log(stdCodeString+phone);

//conveting string to other data type
let balance:string="Account Balance is 9,999.99 rupeess";
let accountbalance=balance.replace(/[^0-9.]/g," ");
console.log(accountbalance);
let bal:number=parseFloat(accountbalance);
console.log("Account Balance"+ (bal>=10000));