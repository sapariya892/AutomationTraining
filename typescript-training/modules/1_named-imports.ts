// Importing named expoerts from another module. Import data thorough the file.
import {PI,add,subtract} from './1_named_exports.ts'
//import {PI as pi,add as addition,subtract as subtraction} from './2_all_exports.ts'

console.log(PI);
console.log(add(5,3));
console.log(subtract(10,5));

