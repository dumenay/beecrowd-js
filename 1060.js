var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = [0, 1, 2, 3, 4, 5]
let positivos = 0;

for (let i = 0; i < 6; i++) {
    a[i] = Number(lines.shift());
    if(a[i] > 0){
    positivos++;}
}
console.log(`${positivos} valores positivos`);