var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());

for (let aux = 1; aux <= 10 ; aux++) {
    console.log(`${aux} x ${a} = ${aux * a}`);
}