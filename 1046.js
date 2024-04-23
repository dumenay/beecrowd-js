var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [a, b] = pegarValores(lines.shift());

if(a > b){
let total = (24 + b) - a ;
console.log(`O JOGO DUROU ${total} HORA(S)`);
}
else if(b > a){
    let total = b - a;
    console.log(`O JOGO DUROU ${total} HORA(S)`);
}
else{
    let total = a + 24 - b;
    console.log(`O JOGO DUROU ${total} HORA(S)`);
}