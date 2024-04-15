var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let b = Number(lines.shift());

litros = (a * b) / 12;

console.log(litros.toFixed(3));