var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [a, b, c] = pegarValores(lines.shift());
let maior, meio, menor;

if(a > b && a > c){
    maior = a;
}
else if (b > a && b > c) {
    maior = b;
}
else{
    maior = c;
}
if((a < b && a > c) || (a > b && a < c)){
    meio = a;
}
else if((b < a && b > c) || (b > a && b < c)){
    meio = b;
}
else{
    meio = c;
}
if(a < b && a < c){
    menor = a;
}
else if (b < a && b < c) {
    menor = b;
}
else{
    menor = c;
}
console.log(menor);
console.log(meio);
console.log(maior);
console.log('');
console.log(a);
console.log(b);
console.log(c);