var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [id, quant] = pegarValores(lines.shift());
let id1 = 4 * quant; id2 = 4.50 * quant; id3 = 5 * quant; id4 = 2 * quant; id5 = 1.50 * quant;
if(id == 1){
    console.log(`Total: R$ ${id1.toFixed(2)}`);
}
if(id == 2){
    console.log(`Total: R$ ${id2.toFixed(2)}`);
}
if(id == 3){
    console.log(`Total: R$ ${id3.toFixed(2)}`);
}
if(id == 4){
    console.log(`Total: R$ ${id4.toFixed(2)}`);
}
if(id == 5){
    console.log(`Total: R$ ${id5.toFixed(2)}`);
}