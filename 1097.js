var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let i = 1, j = 0;

while(i <= 9){
    console.log(`I=${i} J=${j+7}`);
    console.log(`I=${i} J=${j+6}`);
    console.log(`I=${i} J=${j+5}`);
    i = i + 2;
    j = j + 2;
}