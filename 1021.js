var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let valor = Number(lines.shift());
let nota100 = 0; nota50 = 0; nota20 = 0; nota10 = 0; nota5 = 0; nota2 = 0;
let moeda100 = 0; moeda50 = 0; moeda25 = 0; moeda10 = 0; moeda5 = 0; moeda1 = 0;

while(valor>0){
    valor = valor.toFixed(2)
    if(valor >= 100){
        nota100++;
        valor = valor - 100;
    }
    else if(valor >= 50){
        nota50++;
        valor = valor - 50;
    }
    else if(valor >= 20){
        nota20++;
        valor = valor - 20;
    }
    else if(valor >= 10){
        nota10++;
        valor = valor - 10;
    }
    else if(valor >= 5){
        nota5++;
        valor = valor - 5;
    }
    else if(valor >= 2){
        nota2++;
        valor = valor - 2;
    }
    else if(valor >= 1){
        moeda100++;
        valor = valor - 1;
    }
    else if(valor >= 0.50){
        moeda50++
        valor = valor - 0.50;
    }
    else if(valor >= 0.25){
        moeda25++
        valor = valor - 0.25;
    }
    else if(valor >= 0.10){
        moeda10++
        valor = valor - 0.10;
    }
    else if(valor >= 0.05){
        moeda5++
        valor = valor - 0.05;
    }
    else if(valor >= 0.01){
        moeda1++
        valor = valor - 0.01;
    }
}
console.log('NOTAS:');
console.log(`${nota100} nota(s) de R$ 100.00`);
console.log(`${nota50} nota(s) de R$ 50.00`);
console.log(`${nota20} nota(s) de R$ 20.00`);
console.log(`${nota10} nota(s) de R$ 10.00`);
console.log(`${nota5} nota(s) de R$ 5.00`);
console.log(`${nota2} nota(s) de R$ 2.00`);
console.log('MOEDAS:');
console.log(`${moeda100} moeda(s) de R$ 1.00`);
console.log(`${moeda50} moeda(s) de R$ 0.50`);
console.log(`${moeda25} moeda(s) de R$ 0.25`);
console.log(`${moeda10} moeda(s) de R$ 0.10`);
console.log(`${moeda5} moeda(s) de R$ 0.05`);
console.log(`${moeda1} moeda(s) de R$ 0.01`);