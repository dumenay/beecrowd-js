var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());

tempo = a * 2;

console.log(`${tempo} minutos`);