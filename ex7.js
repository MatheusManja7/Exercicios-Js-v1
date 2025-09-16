const prompt = require('prompt-sync')();

let cont = 0;
let num;

while (true){
    num = parseInt(prompt("Digite um Número: (Digite -1 para Terminar) "));

    if(num == -1){
        break;
    }

    cont++
}

console.log(`Foram Digitedos ${cont} Números`);