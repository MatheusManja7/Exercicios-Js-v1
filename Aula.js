console.log('Olá Mundo!');

// Modos para declarar Variaveis:
var numero = 10;
let Numero = 20;
const pi = 3.14;
let numeroDois = 30;
var _numero = 40;

resultado = numero + Numero - pi;
console.log(resultado);

const prompt = require('prompt-sync')();

let valor = parseInt(prompt("Digite um Número: "));
if(valor % 2 == 0){
    console.log(valor, 'É Par')
}
else{
    console.log(`$(valor) É impar`)
}

