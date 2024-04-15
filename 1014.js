var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let b = Number(lines.shift());

distancia = a / b;

console.log(`${distancia.toFixed(3)} km/l`);