var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let reajuste;
if(0 <= a  && a <= 400){
    reajuste = a * 0.15;
    a = a + reajuste;
    console.log(`Novo salario: ${a.toFixed(2)}`);
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
    console.log('Em percentual: 15 %');
}
else if(400 < a  && a <=  800){
    reajuste = a * 0.12;
    a = a + reajuste;
    console.log(`Novo salario: ${a.toFixed(2)}`);
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
    console.log('Em percentual: 12 %');
}
else if(800 < a && a <= 1200){
    reajuste = a * 0.10;
    a = a + reajuste;
    console.log(`Novo salario: ${a.toFixed(2)}`);
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
    console.log('Em percentual: 10 %');
}
else if(1200 < a && a <= 2000){
    reajuste = a * 0.07;
    a = a + reajuste;
    console.log(`Novo salario: ${a.toFixed(2)}`);
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
    console.log('Em percentual: 7 %');
}
else if(2000 < a){
    reajuste = a * 0.04;
    a = a + reajuste;
    console.log(`Novo salario: ${a.toFixed(2)}`);
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
    console.log('Em percentual: 4 %');
}