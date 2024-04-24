var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

for (let index = 2; index <= 100; index = index + 2) {
    console.log(index);
}