var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [a, b, c] = pegarValores(lines.shift());
let [d, e, f] = pegarValores(lines.shift());

let valor = (b * c) + (e * f)

console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`);