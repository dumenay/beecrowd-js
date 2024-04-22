var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let tempo = Number(lines.shift());
let anos = 0; meses = 0; dias = 0;

while(tempo > 0){
if(tempo >= 365){
    anos++;
    tempo = tempo - 365;
}
else if(tempo >= 30){
    meses++;
    tempo = tempo - 30;
}
else{
    dias = tempo;
    tempo = 0
}
}
console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);