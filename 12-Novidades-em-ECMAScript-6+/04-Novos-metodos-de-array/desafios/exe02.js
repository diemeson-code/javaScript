/**Use o .filter() para criar um novo array contendo apenas os números
 *  ímpares de um array inicial [1, 2, 3, 4]. */

const numbers = [1, 2, 3, 4, 5]
const Impares = numbers.filter( x => x % 2 !== 0);
console.log(Impares)

/**Explicação
filter() percorre todos os elementos do array.
x % 2 !== 0 verifica se o resto da divisão por 2 é diferente de 0.
Se a condição for true, o número é mantido no novo array.

Por exemplo:

Número	x % 2	É ímpar?
1	1	✅
2	0	❌
3	1	✅
4	0	❌
5	1	✅

Resultado final:

[1, 3, 5] */