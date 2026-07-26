/** Exercício 1: Conversão de Funções
Converta a seguinte função normal em uma Arrow Function e teste para verificar se o resultado é o mesmo.
*/

const somar2 = (a,b) => a + b; 


function somar(a, b) {
  return a + b;
}

console.log(somar(2,2))  // 4 
console.log(somar2(2,2)) // 4