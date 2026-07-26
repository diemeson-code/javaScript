/**Olá a todos! Estamos de volta para mais uma aula excitante sobre JavaScript, e hoje, estamos nos aprofundando nos métodos populares de arrays. Você já ouviu falar de métodos como map e filter, certo? Nós os abordamos brevemente na aula anterior. Mas o que dizer dos métodos reduce, find, every, some? Esses poderosos aliados nos permitem trabalhar com arrays de forma mais eficiente e elegante.

Nesta aula, vamos explorar esses métodos em detalhes, mostrar como eles são usados na programação do dia a dia, e destacar por que eles são considerados práticas modernas no mundo do desenvolvimento JavaScript.

Então bora começar?

Métodos de Array Populares
1. reduce()
O método reduce() aplica uma função a cada elemento do array, reduzindo o array a um único valor. É útil para somar números, concatenar strings e mais. Veja um exemplo: */

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, current) => total + current, 0);
console.log(sum); // 15

/**2. find()
O método find() retorna o primeiro elemento que satisfaz a condição especificada. É usado quando você quer encontrar um item específico no array. Por exemplo: */

const users = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }];
const user = users.find(user => user.age === 25);
console.log(user.name); // 'Bob'

/**3. every()
Este método verifica se todos os elementos do array passam no teste implementado pela função fornecida. Veja como funciona: */

const ages = [30, 25, 29, 40];
const areAdults = ages.every(age => age >= 18);
console.log(areAdults); // true

/**4. some()
Semelhante ao every(), o some() verifica se algum dos elementos passa no teste implementado. É útil quando você quer verificar a presença de uma condição: */

const hasUnderage = ages.some(age => age < 18);
console.log(hasUnderage); // false

/**Conclusão
Esses são apenas alguns dos métodos populares de arrays em JavaScript. Eles facilitam a manipulação e o trabalho com arrays, tornando o código mais conciso e legível. Experimente usar esses métodos em seus próprios projetos e veja como eles podem melhorar seu fluxo de trabalho. */


