var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = String(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());

let salario = b + (c * 0.15);

console.log(`TOTAL = R$ ${salario.toFixed(2)}`);