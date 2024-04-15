var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let b = Number(lines.shift());

let soma = a + b;

console.log(`SOMA = ${soma}`);