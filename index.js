var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

// let a = Number(lines.shift());
// let b = lines.shift();
let a = Number(lines.shift());
let nota100 = 0, nota50 = 0, nota20 = 0, nota10 = 0, nota5 = 0, nota2 = 0, nota1 = 0;
while(a>1){
if(a>=100){a = a - 100; nota100++;};
else if(a>=50){a = a - 50; nota50++; };
else if(a>=20){a = a - 20; nota20++; };
else if(a>=10){a = a - 10; nota10++; };
else if(a>=5){a = a - 5; nota5++; };
else if(a>=2){a = a - 2; nota2++; };
else if(a>=1){a = a - 1; nota1++; };
}
console.log(nota100, nota50, nota20, nota10, nota5, nota2, nota1);