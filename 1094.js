var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (linha) => linha.split(' ').map((item) => (item));

let aux = Number(lines.shift());
let cob = 0, coe = 0, rat = 0, sap = 0;
let pcoe, prat, psap;

for (let i = 0; i < aux; i++) {
    let [a, b] = pegarValores(lines.shift());
    a = Number(a);
    cob = cob + a;
    if(b === 'C' || b === 'c'){
        coe = coe + a;
    }
    else if(b === 'R' || b === 'r'){
        rat = rat + a;
    }
    else if(b === 'S' || b === 's'){
        sap = sap + a;
    }
}
pcoe = (100 / cob) * coe;
prat = (100 / cob) * rat;
psap = (100 / cob) * sap;
console.log(`Total: ${cob} cobaias`);
console.log(`Total de coelhos: ${coe}`);
console.log(`Total de ratos: ${rat}`);
console.log(`Total de sapos: ${sap}`);
console.log(`Percentual de coelhos: ${pcoe.toFixed(2)} %`);
console.log(`Percentual de ratos: ${prat.toFixed(2)} %`);
console.log(`Percentual de sapos: ${psap.toFixed(2)} %`);