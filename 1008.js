var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());

let salario = b * c;

console.log(`NUMBER = ${a}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);