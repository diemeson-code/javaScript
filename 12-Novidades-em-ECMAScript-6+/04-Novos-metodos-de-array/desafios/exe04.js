/**Use .forEach() para imprimir cada elemento do array [1, 2, 3, 4]. */

const numbers = [1, 2, 3, 4]
numbers.forEach((numero) => {
   console.log(numero)
});

/**O forEach() serve para percorrer todos os elementos de um array e executar uma ação para cada um deles. No seu exemplo:

const numbers = [1, 2, 3, 4];

numbers.forEach((numero) => {
    console.log(numero);
});

O JavaScript pega o primeiro número (1) e executa console.log(1). Depois pega o segundo (2) e executa console.log(2). Em seguida faz o mesmo com 3 e 4.

A saída será:

1
2
3
4

No seu código você escreveu:

const elementos = numbers.forEach(x => console.log(x));

O console.log(x) está correto, mas a variável elementos não é necessária. Isso acontece porque o forEach() não cria um novo array e não retorna um resultado. Ele apenas executa a ação (neste caso, imprimir os números). Se você fizer:

console.log(elementos);

o resultado será:

undefined

Resumindo:

forEach() → percorre o array e executa uma ação.
filter() → cria um novo array com os elementos que atendem a uma condição.
reduce() → transforma todos os elementos em um único valor, como uma soma.

Pense assim:

forEach = "faça algo com cada elemento".
filter = "escolha alguns elementos".
reduce = "junte tudo em um único resultado". */