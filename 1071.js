var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let b = Number(lines.shift());
let aux = 0;
let i = 0;

if(a > b){
    aux = b;
    while(a > aux){
        if(aux % 2 !== 0){
            aux = aux + 2;
        }
        else{
            aux++;
        }
        i = i + aux;
    }
    console.log(i - aux);
}
else if (a === b){
    i = 0;
    console.log(i);
}
else{
    aux = a;
    while(b > aux){
        if(aux % 2 !== 0){
            aux = aux + 2;
        }
        else{
            aux++;
        }
        i = i + aux;
    }
    console.log(i - aux);
}