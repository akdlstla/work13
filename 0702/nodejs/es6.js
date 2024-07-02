import connect from "./module3.js";
const result = connect();
console.log(result);

//여러가지모듈 방법1,방법2
// import{add, subtract , multiply} from './module4.js';
// console.log(add(1, 3));
// console.log(subtract(6, 3));
// console.log(multiply(5, 8));

//여러가지모듈 방법3
import calculator from './module4.js';
console.log(calculator.add(1, 3));
console.log(calculator.subtract(6, 3));
console.log(calculator.multiply(5, 8));

