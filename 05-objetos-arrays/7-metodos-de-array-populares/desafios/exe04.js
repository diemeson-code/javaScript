/** Experimente o some() para verificar se existe algum número negativo em um array de números. */

const numeros = [1,2,3,6,5,4,8,-9];
const negativo = numeros.some(numero => numero < 0);
console.log(negativo)


/**Verificar se todos são positivos */
const lista = [3,2,1,4,5];
const positivo = lista.every(item => item > 0);
console.log(positivo)