var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());

for (let i = 2; i <= a; i = i + 2) {
    console.log(`${i}^2 = ${Math.pow(i,2)}`);
}