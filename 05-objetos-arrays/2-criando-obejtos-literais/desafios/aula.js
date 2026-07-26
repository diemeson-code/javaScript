/**Olá a todos! Na última aula, mergulhamos nos conceitos fundamentais de objetos em JavaScript, e você descobriu como eles são uma parte vital da linguagem. Hoje, vamos dar um passo adiante e explorar uma maneira prática e poderosa de criar objetos: os objetos literais.

Os objetos literais oferecem uma maneira rápida e fácil de criar objetos, permitindo que você defina as propriedades e os métodos de um objeto em uma única expressão. Isso pode ser uma ferramenta útil em muitas situações, e a versão moderna do JavaScript (ES6) trouxe ainda mais flexibilidade e conveniência nesse sentido.

Preparados? Então bora começar.

Objetos Literais
Objetos literais são uma maneira concisa e expressiva de criar objetos em JavaScript. Eles são denotados por chaves {} e permitem definir propriedades e métodos de um objeto de maneira direta e fácil.

Sintaxe
Aqui está um exemplo simples de um objeto literal: */


const pessoa = {
  nome: 'João',
  idade: 25,
  falar: function() {
    console.log('Olá, meu nome é ' + this.nome);
  }
};
 
pessoa.falar(); // Output: Olá, meu nome é João

/**Propriedades
As propriedades de um objeto literal são pares de chave-valor separados por dois pontos. As chaves podem ser strings ou identificadores válidos, e os valores podem ser qualquer tipo de dado. */

const carro = {
   marca:'Toyota',
   modelo:'Corolla',
   ano:2020
};

/**Métodos
Métodos são funções associadas a um objeto e podem ser chamados como parte desse objeto. Em objetos literais, você pode definir métodos usando uma função. */

const livro = {
  titulo: 'O Senhor dos Anéis',
  autor: 'J.R.R. Tolkien',
  ler: function() {
    console.log('Lendo ' + this.titulo);
  }
};
 
livro.ler(); // Output: Lendo O Senhor dos Anéis

/**Propriedades Computadas (ES6)
A partir do ES6, você também pode usar propriedades computadas em objetos literais. Isso permite que você defina chaves de propriedade usando expressões. */

const prop = 'nome';
const pessoa = {
  [prop]: 'Maria',
};
 
console.log(pessoa.nome); // Output: Maria

/**Objetos literais são poderosos e versáteis, tornando-se uma ferramenta essencial no kit de ferramentas de qualquer desenvolvedor JavaScript.

Métodos Concisos (Shorthand Methods) no ES6
No ES6, a declaração de métodos dentro de objetos literais foi simplificada. Você não precisa mais usar a palavra-chave function. Isso é chamado de método conciso. */

const pessoa = {
  nome: 'Ana',
  falar() {
    console.log('Olá, meu nome é ' + this.nome);
  }
};
 
pessoa.falar(); // Output: Olá, meu nome é Ana

/**A sintaxe de método conciso torna o código mais limpo e fácil de ler.

Conclusão
Nesta aula, aprofundamos nosso entendimento sobre objetos literais em JavaScript, uma parte fundamental da linguagem. Exploramos a criação de objetos, como acessar e modificar suas propriedades e como trabalhar com métodos de objetos. Também abordamos os métodos concisos e propriedades de valor calculado no ES6, mostrando como eles permitem uma escrita de código mais limpa e dinâmica.

Objetos literais são uma ferramenta poderosa que permite representar entidades complexas com estrutura e comportamento. Eles são a base para o entendimento de temas mais avançados em JavaScript, como funções construtoras, protótipos e herança. */
