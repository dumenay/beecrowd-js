var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [a, b, c] = pegarValores(lines.shift());
let aux;
if(a < b){
    aux = b;
    b = a;
    a = aux;}
if(a < c){
    aux = c;
    c = a;
    a = aux;}
if(b < c){
    aux = c;
    c = b;
    b = aux;}
if(a >= b + c){
    console.log('NAO FORMA TRIANGULO');}
else{
    if(a * a == b * b + c * c){
        console.log('TRIANGULO RETANGULO');}
    if((a * a) > (b * b) + (c * c)){
        console.log('TRIANGULO OBTUSANGULO');}
    if((a * a) < (b * b) + (c * c)){
        console.log('TRIANGULO ACUTANGULO');}
    if(a == b && b == c){
        console.log('TRIANGULO EQUILATERO');}
    else if(a == b || a == c || b == c){
        console.log('TRIANGULO ISOSCELES');}
}