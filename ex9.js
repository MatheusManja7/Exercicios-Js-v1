const prompt = require('prompt-sync')();

let num;
let cont = 0;

while (true){
    num = parseInt(prompt("Digite um Número: (Digite 0 para Terminar) "));

    if(num == 0){
        break;
    }

    if(num == 50){
        cont++;
    }
}

console.log(`O Número 50 Foi Digitado ${cont} Vezes`)