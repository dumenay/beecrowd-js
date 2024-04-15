var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let raio = Number(lines.shift());

let pi= 3.14159;

raio = Math.pow(raio, 2);

let area = pi * raio;

console.log(`A=${area.toFixed(4)}`);