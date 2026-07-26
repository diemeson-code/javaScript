/*Olá e bem-vindo à nossa próxima aula sobre programação JavaScript! Hoje, vamos aprofundar em um conceito 
que já exploramos brevemente em nossa aula sobre tipos de dados: os arrays.

Os arrays são uma parte fundamental do JavaScript, permitindo agrupar várias informações em uma única variável.
Isso os torna uma ferramenta poderosa para lidar com listas, coleções e sequências de dados de maneira 
organizada.

Nesta aula, vamos detalhar o que são arrays, como declará-los e inicializá-los, e examinar exemplos práticos 
de seu uso no desenvolvimento diário. Com essa aula, você terá uma compreensão completa de como os arrays 
funcionam no JavaScript, indo além do básico que já exploramos anteriormente.

Então vamos começar?

Definição de Arrays:

Arrays são estruturas de dados que nos permitem armazenar múltiplos valores em uma única variável. 
Esses valores podem ser de qualquer tipo, incluindo números, strings, objetos, e até mesmo outros arrays. 
Para declarar um array, usamos colchetes [], e os valores dentro do array são separados por vírgulas. 
Vamos ver um exemplo:

 */

let frutas = ['maçã','banana','manga'];
console.log(frutas[0]) // saida : maçã

/*O índice do array começa em 0, então frutas[0] refere-se ao primeiro elemento. 
Podemos também alterar, adicionar ou remover elementos usando métodos específicos. */



// Uma característica importante dos arrays em JavaScript é a tipagem fraca.//
//  Isso significa que um array pode conter elementos de diferentes tipos de dados. No JavaScript,
//  isso é perfeitamente aceitável e pode ser útil em certas situações. Veja o exemplo:

let misto = [42, 'bola', true, { nome: 'Alice' }];
//Neste exemplo, o array misto contém um número, uma string, um valor booleano, e um objeto. 
// Isso é possível devido à natureza dinâmica e flexível do JavaScript, mas deve ser utilizado 
// com cautela, pois pode levar a confusão e erros se não for gerenciado corretamente./*


// Arrays como Objetos Especiais:
//Em JavaScript, arrays são considerados objetos especiais que têm todas as
//  características de um objeto regular, com a adição de algumas propriedades e 
// métodos únicos para lidar com os elementos armazenados. Por exemplo:

let animais = ['cão', 'gato', 'peixe'];
console.log(typeof animais); // saída: objectconsole.log(animais.length); // saída: 3
//Podemos ver que o tipo do array é um objeto e podemos usar a propriedade .
// length para encontrar o número de elementos no array. Existem muitos outros métodos úteis 
// disponíveis em arrays, como .push(), .pop(), .slice(), etc.

/*Uso Comum de Arrays:
Arrays são usados extensivamente em programação para:

Armazenar listas de itens semelhantes, como nomes de usuários, produtos em um carrinho de compras, etc.
Manipular dados em algoritmos, como ordenação e busca.
Trabalhar com múltiplas informações de forma organizada e coerente, facilitando a manipulação e consulta dos 
dados.
Conclusão:
Nesta aula, exploramos o que são arrays, como declará-los e manipulá-los em JavaScript. Discutimos suas 
características, incluindo a tipagem fraca e a natureza de serem objetos especiais. Os arrays são uma parte 
fundamental da programação em JavaScript, e entender como eles funcionam é essencial para qualquer 
desenvolvedor. */