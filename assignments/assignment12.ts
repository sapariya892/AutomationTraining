//Print the number in diamon-shapes pyramid of numbers
/*
    1
   1 2
  1 2 3
 1 2 3 4
1 2 3 4 5
 1 2 3 4
  1 2 3
   1 2
    1

*/
let num: number = 5;

//Upeer half
for (let i = 1; i <= 5; i++) {
    //Print Space
    let line: string = "";
    for (let space = 1; space <= num - i; space++) {
        line = line + " ";
    }
    //Print Numbers
    for (let j = 1; j <= i; j++) {
        line = line + j + " ";


    }
    console.log(line);
}
//Lower Half
for (let i = num - 1; i >= 1; i--) {
    //Print Space
    let line: string = "";
    for (let space = 1; space <= num - i; space++) {
        line = line + " ";
    }
    //Print Numbers
    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }
    console.log(line);
}
