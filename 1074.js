var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let aux = Number(lines.shift());
let a = [];

for (let z = 0; z < aux; z++) {
    a = Number(lines.shift());
    if (a === 0){
        console.log('NULL');
    }
    else if(a % 2 === 0){
        if(a > 0){
            console.log('EVEN POSITIVE');
        }
        else if(a < 0){
            console.log('EVEN NEGATIVE');
        }
    }
    else if(a % 2 !== 0){
        if(a > 0){
            console.log('ODD POSITIVE');
        }
        else if(a < 0){
            console.log('ODD NEGATIVE');
        }
    }
}