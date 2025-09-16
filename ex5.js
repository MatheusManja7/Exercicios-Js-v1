const prompt = require('prompt-sync')();

let divisiveis_5 = []

for(cont = 1; cont <= 30; cont +=1){
    let num = parseInt(prompt("Digite um Número: "));
    if(num %5 == 0){
        divisiveis_5.push(num);
    }
}

const somaLista = divisiveis_5.reduce((accumulator, value) => accumulator + value,0);

console.log(`A Soma dos Números que são Divisíveis por 5 é de: ${somaLista}`);