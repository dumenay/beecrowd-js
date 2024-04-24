var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = [0, 1, 2, 3, 4, 5]
let positivos = 0;
let numpos = [, , , , , ];
let teste = [];
let media = 0, x = 0, quantpos = 0;

for (let i = 0; i < 6; i++) {
    a[i] = Number(lines.shift());
    if(a[i] > 0){
    positivos++;
    numpos[i] = a[i];
}
}
for (let y = 0; y < 6; y++) {
    if(numpos[y] !== undefined){
    teste [x] = y;
    x++;
}
}
while (teste[0] !== undefined){
    media = media + a[teste[0]];
    teste.shift();
}
media = media / positivos;
console.log(`${positivos} valores positivos`);
console.log(media.toFixed(1));