var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let imposto;
if(a <= 2000){
    console.log('Isento');
}
if (a > 2000 && a <= 3000){
    imposto = (a - 2000) * 0.08;
    console.log(`R$ ${imposto.toFixed(2)}`);
}
if(a > 3000 && a <= 4500){
    imposto = (a - 3000) * 0.18 + 80;
    console.log(`R$ ${imposto.toFixed(2)}`);
}
if (a > 4500){
    imposto = (a - 4500) * 0.28 + 350;
    console.log(`R$ ${imposto.toFixed(2)}`);
}