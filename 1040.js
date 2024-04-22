var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (linha) => linha.split(' ').map((item) => Number(item));

let [a, b, c, d] = pegarValores(lines.shift());

let media = ((a * 2) + (b * 3) + (c * 4) + d) / 10;

console.log(`Media: ${media.toFixed(1)}`);
if(media >= 7){
    console.log('Aluno aprovado.');
}
else if(media < 5){
    console.log('Aluno reprovado.');
}
else if(media >= 5 && media < 7){
    let [exame] = pegarValores(lines.shift());

    console.log('Aluno em exame.');
    console.log(`Nota do exame: ${exame.toFixed(1)}`);
    let mediaexame = (media + exame) / 2;
    if(mediaexame >= 5){
        console.log('Aluno aprovado.');
        console.log(`Media final: ${mediaexame.toFixed(1)}`);
    }
    else{
        console.log('Aluno reprovado.');
        console.log(`Media final: ${mediaexame.toFixed(1)}`);
    }
}