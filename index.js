var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

// let a = Number(lines.shift());
// let b = lines.shift();

let aux = Number(lines.shift());

for (let i = 0; i < aux; i++) {
    console.log(i);
}