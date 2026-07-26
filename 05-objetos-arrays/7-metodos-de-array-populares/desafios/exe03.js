/** Escreva uma função que use every() para verificar se todos os elementos de um array são números. */

function consulta(array){
   return array.every(item => typeof item === Number);
}
   const array = [1,2,3,4,5,6,'k','h'];
   const verificar =consulta(array)


console.log(verificar)