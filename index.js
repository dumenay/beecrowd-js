var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

// let a = Number(lines.shift());
// let b = lines.shift();
let aux = Number(lines.shift());
let a = 0;

for (; aux > a; a++) {
    console.log(a);
    const pegarValores = (linha) => linha.split(' : ').map((item) => Number(item));
    let [PA, PB, G1, G2] = pegarValores(lines.shift());
    console.log(PA[a], PB[a], G1[a], G2[a]);
}
