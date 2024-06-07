var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let senha = '';
    while (senha != '2002'){
        let senha = (lines.shift());
        if(senha == '2002'){
            console.log('Acesso Permitido');
            break;
        }
        else{
            console.log('Senha Invalida');
        }
    }

/*
#include <iostream>

using namespace std;

int main(){
int senha=0;
    scanf("%d", &senha);
    if(senha==2002){
        printf("Acesso Permitido\n");}
    if (senha!=2002){
        while(senha!=2002){
        printf("Senha Invalida\n");
        scanf("%d", &senha);}
    if(senha==2002){
        printf("Acesso Permitido\n");}}
}
*/