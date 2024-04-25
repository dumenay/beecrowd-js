var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let maior = 0, maiorpos = 0;
for (let i = 1; i <= 100; i++) {
    let a = Number(lines.shift());
    if(a > maior){
        maior = a;
        maiorpos = i;
    }
}
console.log(maior);
console.log(maiorpos);