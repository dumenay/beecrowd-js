var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [a, b, c] = pegarValores(lines.shift());

let MaiorAB = (a + b + Math.abs(a - b)) / 2;

let maior = (MaiorAB + c + Math.abs( MaiorAB - c)) / 2;

console.log(`${maior} eh o maior`);