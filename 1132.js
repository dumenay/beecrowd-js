var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

// let a = Number(lines.shift());
// let b = lines.shift();

// const pegarValoresNum = (linha) => linha.split(' : ').map((item) => Number(item));
// let [x, y] = pegarValoresNum(lines.shift());

// const pegarValores = (linha) => linha.split(' ').map((item) => (item));
// let [x, y] = pegarValores(lines.shift());

let a, soma= 0;

let x = Number(lines.shift());
let y = Number(lines.shift());
    if(x < y){
        a = y;
        y = x;
        x = a;
    }
    for(; x > y; y++){
        if(y % 13 !== 0){
            soma += y;
        }
    }
        if(x % 13 !== 0){
            soma += x;
    }
        console.log(`${soma}`);

/* 
#include <iostream>

using namespace std;

int main()
{ int X, Y, A, soma=0;
    scanf("%d",&X);
    scanf("%d",&Y);
    if(X<Y){
A=Y;
Y=X;
X=A;}
    for(;X>Y;Y++){
    if(Y%13!=0)
soma=soma+Y;}
    if(X%13!=0){
soma=soma+X;}
printf("%d\n",soma);} */