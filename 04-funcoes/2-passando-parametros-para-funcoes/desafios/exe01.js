/**Explorando a Passagem por Valor: Crie uma função que aceite um número e adicione 5 a ele. Teste passar um número primitivo e observe o comportamento dentro e fora da função. */

function num(valor){
   valor = valor + 5
   return valor

};
let numero = 2;
console.log(num(numero))
console.log(numero);


