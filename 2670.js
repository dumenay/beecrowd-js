var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());

let tempo;
let t1 = b * 2 + c * 4;
let t2 = a * 2 + c * 2;
let t3 = a * 4 + b * 2;

if(t1 < t2 && t1 < t3)
    tempo = t1;
    else if(t2 < t1 && t2 < t3)
    tempo = t2;
    else if(t3 < t1 && t3 < t2)
    tempo = t3;
    else if(t1 == t2 && t1 < t3)
    tempo = t1;
    else if(t1 == t3 && t1 < t2)
    tempo = t1;
    else if(t2 == t3 && t2 < t1)
    tempo = t2;
    else if(t1 == t2 && t1 == t3)
    tempo = t2;
console.log(tempo);