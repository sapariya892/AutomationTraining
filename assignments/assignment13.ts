// A phrase is a palindrome if, after converting all upper into lowercase letter and removing all non-alphanumberic 
// character, it reads the same forward and backward. Alphanumberic character include letter and numbers.


function checkStringIsPalindromeOrNot(phrase:string):boolean{
    
    // convert string into the lower case 
    let phraseToLower=phrase.toLowerCase()
    console.log("String Convert To LowerCase: "+phraseToLower);
    // Remove the extraspecial character and space
    let stringWithoutSpecialChars=phraseToLower.replace(/[^0-9a-zA-Z]/g,"");
    console.log("Remove Spcial Character: "+stringWithoutSpecialChars);
    
    //Reverse the String
    let strLength:number=stringWithoutSpecialChars.length;
    let reverseString:string="";
    for(let i:number=strLength-1;i>=0;i--){
              reverseString=reverseString+stringWithoutSpecialChars.charAt(i);
    }
    console.log("Reverse String: "+reverseString);

    return stringWithoutSpecialChars===reverseString;
    
}

let result=checkStringIsPalindromeOrNot("A man, a plan, a canal, Panama");
console.log(result);