/*Já abordamos o básico sobre arrays em nossas aulas anteriores. Hoje, vamos direto ao ponto e mergulhar em como criar e manipular arrays em JavaScript. Arrays são uma ferramenta indispensável, permitindo-nos trabalhar com uma coleção de elementos de maneira eficiente. Desde armazenar uma lista de números até objetos complexos, os arrays têm inúmeras aplicações. Então, sem mais delongas, vamos começar!

Criação de Arrays
Arrays são uma parte essencial da programação em JavaScript e podem ser criados de várias maneiras. Vamos explorar as abordagens mais diretas:

Usando colchetes []:

1
const myArray = [10, 20, 30, 40];
Usando o construtor Array():

1
const anotherArray = new Array(10, 20, 30, 40);
Ambas as abordagens são válidas e criam um array de quatro números. A utilização dos colchetes é a forma mais comum e simples de criar arrays.

Manipulação Básica de Arrays
Depois de criar um array, você frequentemente precisará manipulá-lo. Abaixo estão alguns dos métodos mais comuns que você usará para isso:

Adicionar Elementos:

1
myArray.push(50); // Adiciona 50 no final do array
Remover Elementos:

1
myArray.pop(); // Remove o último elemento do array
Acessar Elementos:

1
const firstElement = myArray[0]; // Acessa o primeiro elemento
Alterar Elementos:

1
myArray[1] = 25; // Altera o segundo elemento para 25
Esses são apenas alguns exemplos dos métodos mais comuns e básicos para manipular arrays. Com essa base sólida, você estará bem preparado para explorar manipulações mais avançadas em suas próprias experiências.

Iteração através de Arrays
A iteração através de arrays é uma tarefa comum e poderosa no desenvolvimento com JavaScript. Existem várias maneiras de percorrer um array e aplicar uma lógica específica a cada elemento. Vamos explorar algumas delas:

Usando forEach()
O método forEach() permite aplicar uma função a cada elemento de um array:

1
2
3
4
5
const numbers = [1, 2, 3, 4];
numbers.forEach(number => {
  console.log(number * 2);
});
// Saída: 2, 4, 6, 8
Usando map()
O método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array original:

1
2
const doubled = numbers.map(number => number * 2);
console.log(doubled); // Saída: [2, 4, 6, 8]
Usando filter()
O método filter() cria um novo array com todos os elementos que passam no teste implementado pela função fornecida:

1
2
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Saída: [2, 4]
Usando um loop for
A iteração clássica com um loop for ainda é uma opção viável:

1
2
3
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2); // Saída: 2, 4, 6, 8
}
Essas são algumas das maneiras mais comuns de iterar através de arrays. Cada uma tem suas próprias características e casos de uso, então é útil estar familiarizado com todas elas.

Ao entender esses conceitos, você tem o poder de manipular arrays de maneira eficiente e expressiva, abrindo uma ampla gama de possibilidades na programação com JavaScript.

Conclusão
Nesta aula, exploramos como criar e manipular arrays em JavaScript, uma ferramenta essencial em qualquer arsenal de desenvolvedor. Abordamos a criação direta de arrays, métodos para manipulação básica e as várias maneiras de iterar através de arrays, incluindo o uso de métodos modernos como forEach(), map(), e filter().

O domínio desses conceitos permitirá que você trabalhe com coleções de dados de maneira eficiente, contribuindo para um código mais limpo e eficaz. */

