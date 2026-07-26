/**O método .map() é utilizado quando você quer criar um novo array transformando cada elemento do array original. É especialmente útil quando você tem um array de objetos e quer extrair um valor específico de cada objeto.

Exemplos práticos de uso */

// Exemplo 1: Elevar ao quadrado todos os elementos de um array
const numbers = [1, 2, 3, 4];
const squares = numbers.map(x => x * x);

console.log(squares)
 
// Exemplo 2: Extrair o primeiro nome de uma lista de pessoas
const people = [{name: 'Roger', age: 38}, {name: 'Anna', age: 25}];
const firstNames = people.map(person => person.name);

console.log(firstNames)


/**.filter()
Como e quando usar o método .filter()
O método .filter() é usado para criar um novo array contendo apenas os elementos que satisfazem uma determinada condição.

Exemplos práticos de uso */

// Exemplo 1: Filtrar números ímpares de um array
const numbers = [1, 2, 3, 4];
const oddNumbers = numbers.filter(x => x % 2 !== 0);
 
// Exemplo 2: Filtrar pessoas maiores de 30 anos
const people = [{name: 'Roger', age: 38}, {name: 'Anna', age: 25}];
const olderThan30 = people.filter(person => person.age > 30);

/**.reduce()
Como e quando usar o método .reduce()
O método .reduce() é usado quando você quer reduzir todos os elementos de um array a um único valor. Esse valor pode ser um número, uma string, um objeto, etc.

Exemplos práticos de uso */

// Exemplo 1: Somar todos os elementos de um array
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, x) => acc + x, 0);
 
// Exemplo 2: Contar o número de ocorrências de cada elemento em um array
const names = ['Roger', 'Anna', 'Roger'];
const countNames = names.reduce((acc, name) => {
  acc[name] = (acc[name] || 0) + 1;
  return acc;
}, {});


/**.forEach()
Como e quando usar o método .forEach()
O método .forEach() é utilizado para executar uma função em cada item de um array. É especialmente útil para situações onde você quer realizar uma ação (como um efeito colateral) usando cada elemento do array, mas não precisa de um novo array como resultado.

Exemplos práticos de uso */

// Exemplo 1: Imprimir todos os elementos de um array
const numbers = [1, 2, 3, 4];
numbers.forEach(x => console.log(x));
 
// Exemplo 2: Adicionar uma propriedade a cada objeto em um array
const people = [{name: 'Roger', age: 38}, {name: 'Anna', age: 25}];
people.forEach(person => person.isAdult = person.age > 18);

/**.find() e .findIndex()
Como e quando usar os métodos .find() e .findIndex()
O método .find() retorna o primeiro elemento do array que satisfaz uma determinada condição. O .findIndex() funciona de forma similar, mas retorna o índice do primeiro elemento que satisfaz a condição.

Exemplos práticos de uso */

// Exemplo 1: Encontrar a primeira pessoa com mais de 30 anos
const people = [{name: 'Roger', age: 38}, {name: 'Anna', age: 25}];
const firstOlderThan30 = people.find(person => person.age > 30);
 
// Exemplo 2: Encontrar o índice do primeiro número ímpar em um array
const numbers = [2, 4, 5, 6];
const indexOfFirstOdd = numbers.findIndex(x => x % 2 !== 0);