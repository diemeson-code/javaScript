/**Hoje, vamos nos aprofundar nos operadores “spread” e “rest” do JavaScript. Estes são tópicos extremamente úteis que podem simplificar seu código e torná-lo mais legível e eficiente.

Introdução aos Operadores spread e rest

O que são e por que são úteis em JavaScript moderno

Os operadores “spread” e “rest” são notações sintáticas do ECMAScript 6+ que permitem a expansão de elementos em locais onde múltiplos argumentos, elementos ou variáveis são esperados (spread), e a coleta de elementos em um único argumento (rest).

Diferença entre spread e rest

Enquanto o operador “spread” “espalha” elementos de um objeto ou array, o operador “rest” faz o oposto, coletando múltiplos elementos em um único array ou objeto.

Sintaxe e Uso Básico Como usar o operador spread Em arrays O operador spread pode ser usado para expandir os elementos de um array em outro array. */

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

//Em objetos O operador spread também pode ser usado para expandir as propriedades de um objeto em outro objeto.

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

// Como usar o operador rest Em funções O operador rest pode ser usado para coletar múltiplos argumentos em um único array.

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

// Em desestruturação Pode ser usado para coletar o resto das propriedades de um objeto em uma nova variável.

// javascript
const { a, ...rest } = { a: 1, b: 2, c: 3 };

/**Casos de Uso Comuns
Operadores “spread” e “rest” são amplamente utilizados em várias situações. Algumas das mais comuns incluem:

Clonar arrays e objetos
Concatenar arrays
Passar um número indefinido de argumentos para funções
Desestruturar arrays e objetos para obter certas propriedades ou itens
Deep Dive: Possíveis Armadilhas
Apesar de úteis, é importante estar ciente das armadilhas ao usar os operadores “spread” e “rest”.

Cópia rasa: O operador spread realiza apenas uma cópia rasa, o que pode ser problemático com objetos aninhados.
Performance: O uso excessivo, especialmente em loops, pode levar a problemas de desempenho.
Comparação com Outros Métodos
A conveniência dos operadores “spread” e “rest” pode às vezes ser alcançada por outros meios, como métodos de array ou funções. No entanto, eles geralmente oferecem uma sintaxe mais limpa e um código mais legível. Por exemplo:

Em vez de usar .concat() para unir arrays, você pode usar o operador spread.
Em vez de usar arguments em funções para acessar os argumentos, você pode usar o operador rest para uma solução mais clara.
O entendimento sólido desses operadores será uma adição valiosa ao seu conjunto de habilidades em JavaScript.

Obrigado por acompanhar, e nos vemos na próxima aula! */