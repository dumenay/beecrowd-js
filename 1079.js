var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let aux = Number(lines.shift());

for (let y = 0; aux > y; y++) {
    let [a, b, c] = pegarValores(lines.shift());
    let media = ((a * 2) + (b * 3) + (c * 5)) / 10;
    console.log(media.toFixed(1));   
}