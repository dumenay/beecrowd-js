var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [a, b, c, d] = pegarValores(lines.shift());
let total, minutos;
if(a > c){
    total = (24 + c) - a ;
}
else if(c > a){
    total = c - a;
}
else{
    total = a + 24 - c;
}
if(b > d){
    minutos = (60 + d) - b ;
    total--;
}
else if(d > b){
    minutos = d - b;
}
else if(d === b){
    minutos = 0;
}
else{
    minutos = b + 60 - d;
}
if(total >= 24 && minutos > 0){
    total = 0;
}
console.log(`O JOGO DUROU ${total} HORA(S) E ${minutos} MINUTO(S)`);