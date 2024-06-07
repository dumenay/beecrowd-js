var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

// let a = Number(lines.shift());
// let b = lines.shift();
const pegarValores = (linha) => linha.split(' ').map((item) => (item));
let x = 1, y = 2;
    while(x !== y){
    let [x, y] = pegarValores(lines.shift());
    x = Number(x);
    y = Number(y);
        if(x < y){
            console.log('Crescente');
        }
        if(y < x){
            console.log('Decrescente');
        }
        else if(x === y){
            break;
        }
    }


/*
#include <iostream>

using namespace std;

int main(){
int x=1,y=2;
    while(x!=y){
        scanf("%d %d", &x, &y);
            if(x<y){
                printf("Crescente\n");}
            if(y<x){
                printf("Decrescente\n");}}
}
*/