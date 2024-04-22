var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let aux = Number(lines.shift());
let y = 0;
let x = [];

while(aux !== 0){
    for (; aux > 0; aux--) {
        y++
        x.push(y);

    }
    aux = Number(lines.shift());
    let res = x.join(' ');
    console.log(res);
    while(x[0] !== undefined){
    x.pop();

    }
    y = 0;
}