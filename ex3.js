const prompt = require('prompt-sync')();

let listaNumeros = [];

for(cont = 1; cont <=10; cont +=1){
    let num = parseInt(prompt("Digite um Número: "));
    listaNumeros.push(num);
}

const maiorNumero = Math.max(...listaNumeros);
const menorNumero = Math.min(...listaNumeros);

console.log(`O Maior Número é: ${maiorNumero}`);
console.log(`O Maior Número é: ${menorNumero}`);