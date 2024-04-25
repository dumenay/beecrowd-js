var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let i = 1, j = 60;

while(j >= 0){
    console.log(`I=${i} J=${j}`);
    i = i + 3;
    j = j - 5;
}