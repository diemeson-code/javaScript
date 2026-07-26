/**Retorno vs Impressão: Escreva duas funções, uma que imprima a soma de dois números no console e outra que retorne a soma. Compare as saídas no console e observe a diferença. */

function soma(numeroA,numeroB){
   console.log(numeroA + numeroB);
}
soma(5,10)

function somar(numeroA, numeroB){
   return numeroA + numeroB;
}
let res = somar(2,3);
console.log(res)