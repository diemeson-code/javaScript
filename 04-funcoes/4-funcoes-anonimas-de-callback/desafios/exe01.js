/**Criando Callbacks: Escreva uma função que aceita uma função de callback. A função deve processar um array de números, e a função de callback deve ser aplicada a cada número. */

const numeros = [1,2,3,2,5]

function processarArray(array, callback){
   return array.map(callback);
}
   const  res = processarArray(numeros,function(numeros){
      return numeros * 2;
   
});
console.log(res)



/**
const minhaFuncao = function (a, b){
   return a + b ;

}
console.log(minhaFuncao(1,3))
console.log(minhaFuncao(6,3))
console.log(minhaFuncao(6,6))*/