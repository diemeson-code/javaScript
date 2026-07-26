
// // Exemplo 1: Elevar ao quadrado todos os elementos de um array
const numbers = [1,2,3,4,5];
const quadrado = numbers.map( x => x * x );
console.log(quadrado)

// Exemplo 2: Extrair o primeiro nome de uma lista de pessoas
const people = [{name: 'Roger', age: 38}, {name: 'Anna', age: 25}];
const firstNames = people.map(person => person.name);

console.log(firstNames)