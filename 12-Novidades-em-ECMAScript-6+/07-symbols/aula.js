/**Introdução à Aula
Olá, Hoje vamos falar sobre uma adição muito interessante e um tanto enigmática à linguagem JavaScript: os Symbols. Você pode se perguntar por que precisamos de um novo tipo de dado. A resposta é que Symbols nos fornecem novas formas de interagir com objetos e arrays, bem como nos oferecem uma maneira de criar propriedades verdadeiramente únicas.

Introdução aos Symbols
Symbols são um tipo de dado primitivo introduzido em ECMAScript 2015 (ES6) e oferecem um novo caminho para tratar propriedades de objetos de forma única e não interferir com outras propriedades, o que é especialmente útil em cenários mais complexos e em bibliotecas. Eles não são nem strings nem números; são uma categoria totalmente nova que você pode usar para identificar de maneira única as propriedades de objetos.

Conceitos Básicos de Symbols
Symbols são criados utilizando a função incorporada Symbol(). Cada vez que você chama essa função, um novo e único symbol é criado. Você pode passar uma descrição como argumento para Symbol(), que pode ajudar no debug, mas é importante notar que Symbols com a mesma descrição ainda são diferentes entre si. */

const symbol1 = Symbol('description');
const symbol2 = Symbol('description');
console.log(symbol1 === symbol2);  // Output: false

/**Symbols são imutáveis e únicos. Por serem únicos, eles são comumente usados para criar propriedades de objetos que não podem ser sobrepostas ou alteradas inadvertidamente.

Exemplos Práticos
Vamos ver alguns exemplos práticos de como os Symbols são usados.

Usando Symbols como Chaves de Propriedade de Objetos */

const id = Symbol('id');
const user = {
  [id]: 'u1',
  name: 'Alice',
  age: 30
};
 
console.log(user[id]); // Output: "u1"

/**Symbols e Iteração
Symbols não são enumeráveis, o que significa que eles não aparecerão em loops de for...in ou com funções como Object.keys(). */

for (let key in user) {
  console.log(key, user[key]);
}
// Output:// name Alice// age 30

/**Usando Symbols para controlar propriedades de objeto
Você pode usar symbols para criar “propriedades privadas” para um objeto, algo que será possível de forma nativa com a próxima especificação de classes privadas em JavaScript. */

const secretData = Symbol('secret');
 
const person = {
  name: 'John',
  [secretData]: 'Don’t share this!'
};
 
console.log(person[secretData]);  // Output: "Don’t share this!"

/**Estes são apenas alguns exemplos que ilustram o poder e a flexibilidade dos Symbols em JavaScript. À medida que você for se aprofundando na linguagem, você descobrirá ainda mais casos de uso para este intrigante tipo de dado.

Eles são especialmente úteis quando você quer evitar conflitos de propriedades ou quando precisa criar características verdadeiramente privadas em um objeto. Embora os Symbols possam parecer complexos à primeira vista, eles são incrivelmente úteis e vão se tornar uma ferramenta essencial no seu kit de desenvolvedor JavaScript.

então para reforçar esse conceito, deixei alguns exercicios aqui embaixo para você praticar.

Exercícios Práticos
Crie um Symbol: Faça um script que crie um Symbol e o adicione como propriedade de um objeto. Em seguida, acesse essa propriedade.

Symbols e Iteração: Crie um objeto com propriedades normais e symbol. Use um loop for...in e a função Object.keys() para exibir as propriedades do objeto. Note quais são visíveis e quais não são.

Uso de Symbols para propriedades ‘privadas’: Utilize um Symbol para criar uma propriedade ‘privada’ em um objeto. Tente acessá-la usando os métodos tradicionais de acesso a propriedades de objeto.

Refatoração com Symbols: Pegue um objeto de um código anterior e refatore-o para usar Symbols nas propriedades que você não quer que sejam facilmente acessíveis ou sobrepostas.

Symbols e Métodos de Objeto: Utilize um Symbol para criar um método de objeto e explore como ele pode ou não ser acessado e sobrescrito.

Complete esses exercícios para fixar seu conhecimento sobre Symbols e compreender melhor seus usos práticos. Boa prática! */