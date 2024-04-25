var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let aux = 1;

for (let aux = 0; aux < 10000 ; aux++) {
    if(aux % a === 2){
        console.log(aux);
    }
}