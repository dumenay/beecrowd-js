var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

// let a = Number(lines.shift());
// let b = lines.shift();
// const pegarValoresNum = (linha) => linha.split(' : ').map((item) => Number(item));
// let [x, y] = pegarValoresNum(lines.shift());

const pegarValores = (linha) => linha.split(' ').map((item) => (item));
let aux = Number(lines.shift());
let ovelha = [];

for (let i = 0; i < aux; i++) {
    let [cont] = pegarValores(lines.shift());
    ovelha.push(cont);
}
console.log(ovelha);