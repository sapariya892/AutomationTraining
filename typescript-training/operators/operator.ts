console.log("===> Operator in Type Script <===");
//Operator : Set of special characters that we are going to use in our type script programming language to perform different types of operation,
//1. Arithemetic Operator :==> The special character used in Arithemetic operator (+,-,*,%,++,--)
//2. Assigment Operator :==> The special character used to assigned a value to a variable (=,+=,-=,*=, %=)
//3. Comparasion Operator :==>  The special character used to compare two values (==,===,!=,>,<,)
//4. Logical Operator :==> The special character used to perform logical operation.(&&,||,!)
//5. Ternary Operator :==> The special character used to perform a conditional operation.(condition?true:false;)

//1. Arithemetic Operator :==> the special character used in Arithemetic operator (+,-,*,%,++,--)
let a:number=10;
let b:number=5;
console.log("Addition: "+ (a+b)); //15
console.log("Subtraction: "+ (a-b)); //15
console.log("Multiplication: "+ (a*b)); //15
console.log("Division: "+ (a/b)); //15
console.log("Modulo: "+ (a/b)); //15

//increment and decrement
//++ ==> +1 ==> x++ ==> x=x+1
//-- ==> -1 ==> x-- ==> x=x-1
console.log("Post Increment: "+(a++)); //post execution of this line, then increase the value by 1
console.log("After next line of post increment: "+a);
console.log("Pre Increment: "+(++b)); //before execution of this line, then increase the value by 1
console.log("After next line of Pre increment: "+b);

console.log("Post decrement: "+(a--)); //post execution of this line, then increase the value by 1
console.log("After next line of post increment: "+a);
console.log("Pre decrement: "+(--b)); //before execution of this line, then increase the value by 1
console.log("After next line of Pre increment: "+b);

//2. Assigment Operator :==> The special character used to assigned a value to a variable (=,+=,-=,*=, %=)
let c:number=20;
console.log("Initial Value of C "+c);
console.log("c+=10 Value of c: "+(c+=10));
console.log("c-=10 Value of c: "+(c-=10));
console.log("c*=10 Value of c: "+(c*=10));
console.log("c/=10 Value of c: "+(c/=10));
console.log("c%=10 Value of c: "+(c%=10));

//3. Comparasion Operator :==>  The special character used to compare two values (==,===,!=,>,<,>=,<=)
//== Represent loose equiality ==> it will just check on ly the value without considering the data type
//=== Represent Strict equiality ==> it will check value as well as type datatype.
let d:number=20;
let e:any="20";
console.log("== loose equiality  "+(d==e));
console.log("=== Strict equiality "+(d===e));

console.log("loose equiality !=  "+(d==e));
console.log("Strict equiality !== "+(d===e));

//4. Logical Operator :==> The special character used to perform logical operation.(&&,||,!)
//&& => (Logical AND ==> result will be return true only when all condition are true)
//|| => (Logical AND ==> result will be return true only when one condition are true)
//&& => (Logical AND ==> opposite result)
let i:number=20;
let j:number=30;

console.log("i < j && i==j: "+(i < j && i==j));//true and false=false
console.log("i < j || i==j:  "+(i < j || i==j));//true or false=true
console.log("!(i < j && i==j): "+!(i < j || i==j));//not(true or false)= not true = false


//5. Ternary Operator :==> The special character used to perform a conditional operation.
let age:number=18;
let canVote:string=(age>=18)?"Eligible for Voting":"Not Eligible for Voting";
//let canVote:boolean=(age>=18)?true:false;
console.log("Person is allowed"+canVote);
