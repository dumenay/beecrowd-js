var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let i = 1, j = 60;

while(i <= 9){
    console.log(`I=${i} J=7`);
    console.log(`I=${i} J=6`);
    console.log(`I=${i} J=5`);
    i = i + 2;
}