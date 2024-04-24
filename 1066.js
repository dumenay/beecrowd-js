var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let a = [0, 1, 2, 3, 4]
let pares = 0, impares = 0, positivos = 0, negativos = 0;

for (let i = 0; i < 5; i++) {
    a[i] = Number(lines.shift());
    if(a[i] % 2 === 0){
    pares++;}
}
for (let y = 0; y < 5; y++) {
    if(a[y] % 2 !== 0){
    impares++;}
}
for (let x = 0; x < 5; x++) {
    if(a[x] > 0){
    positivos++;}
}
for (let z = 0; z < 5; z++) {
    if(a[z] < 0){
    negativos++;}
}
console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);