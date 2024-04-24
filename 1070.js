var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
if(a % 2 === 0){
    console.log(a+1);
    console.log(a+3);
    console.log(a+5);
    console.log(a+7);
    console.log(a+9);
    console.log(a+11);
}
else{
    console.log(a);
    console.log(a+2);
    console.log(a+4);
    console.log(a+6);
    console.log(a+8);
    console.log(a+10);
}