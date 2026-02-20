/*
Write a program to print * traiangle 
    *
   **
  ***
 ****
*****         
*/
let num:number=6;
for(let i:number=1;i<=num;i++){
    let row=" "
    //Spaces
    for(let s:number=1;s<=num-i;s++){
        row+=" ";
    }
    //Print Star
    for(let j:number=1;j<=i;j++){
        row+="*";
    }
    console.log(row);
}

