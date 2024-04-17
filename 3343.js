var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValoresNum = (linha) => linha.split(' ').map((item) => Number(item));
const pegarValores = (linha) => linha.split(' ').map((item) => (item));

let [n, x] = pegarValoresNum(lines.shift());
let [tipo] = pegarValores(lines.shift());
let [p, m, g] = pegarValoresNum(lines.shift());
let tp = 0, tm = 0, tg = 0;

if( 1 <= n <= 3 * Math.pow(10, 5) && 1 <= x <= 105 && 1 <= p <= m <= g <= x) {
    let tiposepar = tipo.split('');
    while(tiposepar[0]!== undefined){
        if(tiposepar[0]=='P'){
            tp++;
            tiposepar.splice(0,1);
        }
        else if(tiposepar[0]=='M'){
            tm++;
            tiposepar.splice(0,1);
        }
        else if(tiposepar[0]=='G'){
            tg++;
            tiposepar.splice(0,1);
        }
    }
    let totaltita = (p * tp) + (m * tm) + (g * tg);
    let totalmuralha = totaltita / x;
    totalmuralha = totalmuralha.toString();
    totalmuralha = totalmuralha.split('.');
    if(totalmuralha[1] !== 0){
        totalmuralha = Number(totalmuralha[0]);
        totalmuralha++;
    }
    else{
        totalmuralha = Number(totalmuralha[0])
    }
    console.log(totalmuralha);
}