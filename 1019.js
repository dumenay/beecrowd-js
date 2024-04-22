var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let tempo = Number(lines.shift());
let hora = 0; minutos = 0; segundos = 0;

while(tempo > 0){
if(tempo >= 36000){
    hora = hora+10;
    tempo = tempo - 36000;
}
else if(tempo >=3600){
    hora++;
    tempo = tempo - 3600;
}
else if(tempo >=600){
    minutos = minutos + 10;
    tempo = tempo - 600;
}
else if(tempo >=60){
    minutos++;
    tempo = tempo - 60;
}
else if(tempo < 60){
    segundos = tempo;
    tempo = 0;
}
}
console.log(`${hora}:${minutos}:${segundos}`);