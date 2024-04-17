var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValoresNum = (linha) => linha.split(' : ').map((item) => Number(item));
const pegarValores = (linha) => linha.split(' ').map((item) => (item));

let [dia, diaI] = pegarValores(lines.shift());
let [hI, mI, sI] = pegarValoresNum(lines.shift());
let [diaa, diaF] = pegarValores(lines.shift());
let [hF, mF, sF] = pegarValoresNum(lines.shift());
diaI = Number(diaI);
diaF = Number(diaF);

let diaFinal = diaF - diaI;
let hFinal = hF - hI;
let mFinal = mF - mI;
let sFinal = sF - sI;
if(sFinal < 0){sFinal = sFinal + 60; mFinal--;}
if(mFinal < 0){mFinal = mFinal + 60; hFinal--;}
if(hFinal < 0){hFinal = hFinal + 24; diaFinal--;}

console.log(`${diaFinal} dia(s)`);
console.log(`${hFinal} hora(s)`);
console.log(`${mFinal} minuto(s)`);
console.log(`${sFinal} segundo(s)`);