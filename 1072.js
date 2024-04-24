var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let aux = Number(lines.shift());
let a = []
let dentro = 0 , fora = 0;

for (let i = 0; i < aux; i++) {
    a[i] = Number(lines.shift());
    if(a[i] >= 10 && a[i] <= 20){
    dentro++;}
    else{
        fora++;
    }
}
console.log(`${dentro} in`);
console.log(`${fora} out`);