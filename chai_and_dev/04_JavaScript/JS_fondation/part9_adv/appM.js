// Module import file 

// default import 
import multiply from "./mathOperationsM.js";
console.log(multiply(2, 6));

// named import 
import { add, subtract } from "./mathOperationsM.js";

console.log(add(2, 2));
console.log(subtract(2, 2));