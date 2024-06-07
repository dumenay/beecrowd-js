var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

// let a = Number(lines.shift());
// let b = lines.shift();

// const pegarValoresNum = (linha) => linha.split(' : ').map((item) => Number(item));
// let [x, y] = pegarValoresNum(lines.shift());

// const pegarValores = (linha) => linha.split(' ').map((item) => (item));
// let [x, y] = pegarValores(lines.shift());

let prim=0, seg=1, prox, fila = [];
let n = Number(lines.shift());
    fila.push(prim);
    fila.push(seg);
    while(2 < n){
        prox = prim + seg;
        fila.push(prox);
        prim = seg;
        seg = prox;
        n--;
    }
    console.log(`${fila.join(' ')}`);

/* 
#include <iostream>

using namespace std;

int main(){
int N, prim=0, seg=1, prox;
    scanf("%d", &N);
printf("%d %d", prim, seg);
    while(2<N){
        prox=prim+seg;
printf(" %d", prox);
        prim=seg;
        seg=prox;
        N--;
    }
printf("\n");
}
*/