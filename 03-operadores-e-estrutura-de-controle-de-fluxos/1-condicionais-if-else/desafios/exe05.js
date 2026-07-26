/*Exercício 5: Refatoração com Operador Ternário
Escolha um exemplo simples de if/else que você já escreveu e tente refatorá-lo usando o operador ternário. */

let temperatura = 25;
let previsao = temperatura<15?"frio":temperatura<=25?"Agradável":temperatura<= 35?"Quente":"muito Quente"
console.log(previsao)

let numero = 3;
let verifica = numero % 2 === 0 ? "Par":"Ímpar"
console.log(`O número digitado é ${verifica}`) 
