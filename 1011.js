var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());

let pi = 3.14159;

let volume = (4 / 3) * pi * (Math.pow(a, 3));

console.log(`VOLUME = ${volume.toFixed(3)}`);