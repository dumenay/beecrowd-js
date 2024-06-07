var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

// let a = Number(lines.shift());
// let b = lines.shift();
// const pegarValores = (linha) => linha.split(' ').map((item) => (item));
const pegarValoresNum = (linha) => linha.split(' ').map((item) => Number(item));

let num = Number(lines.shift());
for( ; num >= 1; num--){
    let [x, y] = pegarValoresNum(lines.shift());
    res = 0;
    if(x === y){
        console.log(`${res}`);
    }
    else{
        while(x !== y){
            if(x < y){
                x++;
                if(x % 2 && x !== y){
                    res += x;
                }
            }
            if(y < x){
                y++;
                if(y % 2 && y !== x){
                    res += y;
                }
            }
        }
    console.log(`${res}`);
    }
}

/* #include <iostream>

using namespace std;

int main(){
int x,y,num,res=0;
    scanf("%d", &num);
    for(;num>=1;num--){
        scanf("%d %d", &x, &y);
        res=0;
        if(x==y){
            printf("%d\n", res);}
        else{
            while(x!=y){
                if(x<y){
                    x++;
                    if(x%2 && x!=y){
                        res=x+res;}}
                if(y<x){
                    y++;
                    if(y%2 && y!=x){
                        res=y+res;}}
            }
        printf("%d\n", res);}
    }
}
*/