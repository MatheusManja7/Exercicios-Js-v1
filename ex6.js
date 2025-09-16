const prompt = require('prompt-sync')();

let soma = 0;
let num;

while (true){
    num = parseInt(prompt("Digite um Número: (Digite -999 para Terminar) "));

    if(num == -999){
        break;
    }

    soma += num;
}

console.log(`O Resultado da Soma dos Números Digitados é de: ${soma}`);