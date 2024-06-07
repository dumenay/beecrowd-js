var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValoresNum = (linha) => linha.split(' ').map((item) => Number(item));
let x = 1, y = 1;

while(x !== 0 && y !== 0){
    let [x, y] = pegarValoresNum(lines.shift());
    if(x > 0 && y > 0){
        console.log('primeiro');
    }
    else if(x < 0 && y > 0){
        console.log('segundo');
    }
    else if(x < 0 && y < 0){
        console.log('terceiro');
    }
    else if(x > 0 && y < 0){
        console.log('quarto');
    }
    if(x == 0 || y == 0){
        break;
    }
}


/*
#include <iostream>
using namespace std;

int main (){
int x, y;
    while(1){
        scanf("%d %d", &x, &y); 
        if(x>0 && y>0){
            printf("primeiro\n");}
        else if(x<0 && y>0){
            printf("segundo\n");}
        else if(x<0 && y<0){
            printf("terceiro\n");}
        else if(x>0 && y<0){
            printf("quarto\n");}
        if(x==0 || y==0){
            break;}
    }
}
*/