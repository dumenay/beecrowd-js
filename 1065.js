var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = [0, 1, 2, 3, 4]
let pares = 0;

for (let i = 0; i < 5; i++) {
    a[i] = Number(lines.shift());
    if(a[i] % 2 === 0){
    pares++;}
}
console.log(`${pares} valores pares`);