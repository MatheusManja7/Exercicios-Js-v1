const prompt = require('prompt-sync')();

let numerosImpares = []

for(cont = 1; cont <= 10; cont += 1){
    let num = parseInt(prompt("Digite um Número: "));
    if(num %2 != 0){
        numerosImpares.push(num);
    }
}

const somaLista = numerosImpares.reduce((accumulator, value) => accumulator + value,0);

console.log(`O Resultado da Soma Dos Números Impares é de: ${somaLista}`);