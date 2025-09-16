const prompt = require('prompt-sync')();

let num;
let cont = 0;

while (true){
    num = parseInt(prompt("Digite um Número: (Digite -999 para Terminar) "));

    if(num == -999){
        break;
    }

    if(num %2 != 0){
        cont++
    }
}

console.log(`Foram Digitedos ${cont} Números Impares`);