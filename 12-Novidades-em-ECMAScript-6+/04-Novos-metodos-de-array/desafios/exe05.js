
/**Utilize .find() para encontrar o primeiro número maior que 2 em um array [1, 2, 3, 4]. */

const numbers = [1, 2, 3, 4];
const encontrar = numbers.find((numero) => numero > 2 );
console.log(encontrar)


/**Claro! Vamos usar o seu exemplo.

const numbers = [1, 2, 3, 4];

Você escreveu:

const encontrar = numbers.find((numero) => numero > 2);

O find() significa "encontre". Ele percorre o array procurando o primeiro elemento que satisfaça a condição.

A condição é:

numero > 2

Ou seja, "o número é maior que 2?"

O JavaScript verifica um por um:

1 > 2 → ❌ Não.
2 > 2 → ❌ Não.
3 > 2 → ✅ Sim!

Quando encontra o 3, ele para de procurar e retorna esse valor.

Então:

console.log(encontrar);

mostra:

3

Ele não continua até o 4, porque o find() sempre devolve o primeiro elemento encontrado.

Pense assim:

Você está procurando a primeira pessoa de camisa azul em uma fila.

Pessoa 1 → camisa vermelha ❌
Pessoa 2 → camisa verde ❌
Pessoa 3 → camisa azul ✅

Você encontrou a primeira pessoa de camisa azul, então para de procurar.

É exatamente isso que o find() faz.

Resumo:

find() = encontra o primeiro elemento que atende à condição.
Se não encontrar nenhum, ele retorna undefined. */