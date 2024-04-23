var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [a, b, c] = pegarValores(lines.shift());

let perimetro = a + b + c;
let area = (a + b) * (c / 2);

if(a + b > c && a + c > b && b + c > a){
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
}
else{
    console.log(`Area = ${area.toFixed(1)}`);
}