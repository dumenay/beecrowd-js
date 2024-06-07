var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

// let a = Number(lines.shift());
// let b = lines.shift();
const pegarValores = (linha) => linha.split(' ').map((item) => (item));
let x = 1, y = 1, soma = 0, valores = [], maior;
soma = Number(soma);

    while(x > 0 && y > 0){
        let [x, y] = pegarValores(lines.shift());
        x = Number(x);
        y = Number(y);
        if(x <= 0 || y <= 0){
            break;
        }
        else{
            while(x != y){
                if(x < y){
                    maior = 'y';
                    soma += x;
                    valores.push(x);
                    x++;}
                else if(y < x){
                    maior = 'x';
                    soma += y;
                    valores.push(y);
                    y++;}
                else if(x == y){
                    soma += x;
                    valores.push(x);
                }
            }
        }
            if(maior === 'x'){
                valores.push(y);
                soma += y;
            }
            else if(maior === 'y'){
                valores.push(x);
                soma += x;
            }
            console.log(`${valores.join(' ')} Sum=${soma}`);
            soma = 0;
            while(valores[0] !== undefined){
                valores.pop();
            }
    }

/*
int main(){
int x=1,y=1,soma=0;
    while(x>0 && y>0){
    scanf("%d %d", &x, &y);
    if(x>0 && y>0){
        while(x!=y){
            if(x<y){
                soma=soma+x;
                printf("%d ",x);
                x++;}
            if(y<x){
                soma=soma+y;
                printf("%d ", y);
                y++;}
            if(x==y){
                soma=soma+x;
                printf("%d ", x);}
        }
    printf("Sum=%d\n", soma);
    soma=0;}
    }
}
*/