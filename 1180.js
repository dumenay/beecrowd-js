const { log } = require('console');

var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

// let a = Number(lines.shift());
// let b = lines.shift();

// const pegarValoresNum = (linha) => linha.split(' : ').map((item) => Number(item));
// let [x, y] = pegarValoresNum(lines.shift());

// const pegarValores = (linha) => linha.split(' ').map((item) => (item));
// let [x, y] = pegarValores(lines.shift());

let num = lines[1].split(" ");

let x = 0, menor = 1000, pos;
let y = Number(lines.shift());
    for(let aux = 0; y > aux; aux++){
        if(num[aux] < menor){
            menor = num[aux];
            pos = aux;
        }
    }
    console.log(`Menor valor: ${menor}`);
    console.log(`Posicao: ${pos}`);

/*
#include <stdio.h>
 
int main(){
int x = 0, y = 0, num = 0, menor = 1000, a = 0, pos = 0;
    scanf("%d", &y);
        while(x < y){
            scanf("%d", &num);
            if(num < menor){
                menor = num;
                a = pos;}
            x++;
            pos++;
        }
    printf("Menor valor: %d\nPosicao: %d\n", menor, a);
}
*/