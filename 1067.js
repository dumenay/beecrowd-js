var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
for (let i = 0; i <= a; i++) {
    if(i % 2 !== 0){
    console.log(i);
    }
}