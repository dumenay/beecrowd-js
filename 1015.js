var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [x1, y1] = pegarValores(lines.shift());
let [x2, y2] = pegarValores(lines.shift());

let distancia = Math.sqrt((Math.pow(x2 - x1, 2)) + (Math.pow(y2 - y1, 2)));

console.log(distancia.toFixed(4));