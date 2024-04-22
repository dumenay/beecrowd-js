var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let valor = Number(lines.shift());
let nota100 = 0; nota50 = 0; nota20 = 0; nota10 = 0; nota5 = 0; nota2 = 0; nota1 = 0;

console.log(valor);

while(valor>0){
    if(valor >= 100){
        nota100++;
        valor = valor-100;
    }
    else if(valor >= 50){
        nota50++;
        valor = valor-50;
    }
    else if(valor >= 20){
        nota20++;
        valor = valor-20;
    }
    else if(valor >= 10){
        nota10++;
        valor = valor-10;
    }
    else if(valor >= 5){
        nota5++;
        valor = valor-5;
    }
    else if(valor >= 2){
        nota2++;
        valor = valor-2;
    }
    else if(valor >= 1){
        nota1++;
        valor = valor-1;
    }
}
console.log(`${nota100} nota(s) de R$ 100,00`);
console.log(`${nota50} nota(s) de R$ 50,00`);
console.log(`${nota20} nota(s) de R$ 20,00`);
console.log(`${nota10} nota(s) de R$ 10,00`);
console.log(`${nota5} nota(s) de R$ 5,00`);
console.log(`${nota2} nota(s) de R$ 2,00`);
console.log(`${nota1} nota(s) de R$ 1,00`);