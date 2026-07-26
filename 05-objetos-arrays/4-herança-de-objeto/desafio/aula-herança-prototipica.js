/*A herança é um conceito fundamental na programação orientada a objetos e, no JavaScript, é implementada 
através de protótipos. Em muitas linguagens de programação, a herança é realizada através de classes, mas o 
JavaScript utiliza uma abordagem única e poderosa chamada herança prototípica.

Na herança prototípica, objetos herdam propriedades e métodos de outros objetos. Isso permite uma grande 
flexibilidade e reutilização de código, pois você pode criar novos objetos com base em objetos existentes sem a necessidade de definir uma classe.

Nesta aula, vamos explorar os detalhes da herança prototípica no JavaScript, entender como a cadeia de 
protótipos funciona, e ver como podemos usar este poderoso recurso para criar objetos que herdam de outros 
objetos. Vamos também discutir os prós e contras dessa abordagem, bem como as melhores práticas para 
utilizá-la efetivamente.

Então bora começar?

Herança Prototípica
O que é um Protótipo?
No JavaScript, cada objeto tem uma referência para outro objeto chamado de “protótipo.” Esse protótipo serve 
como uma espécie de “modelo” a partir do qual o objeto herda propriedades e métodos. É uma maneira poderosa 
de compartilhar comportamento e características entre objetos.

Cadeia de Protótipos
A herança prototípica é baseada na ideia de uma “cadeia de protótipos.” Quando você tenta acessar uma 
propriedade ou método de um objeto, o JavaScript primeiro procura essa propriedade no próprio objeto. 
Se ele não a encontrar, ele procura no protótipo do objeto, e assim por diante, subindo a cadeia de 
protótipos até encontrar a propriedade ou até chegar no final da cadeia (geralmente o protótipo do objeto 
Object.prototype).

Exemplo Básico
Vamos considerar um exemplo simples:


let animal = {
  tipo: 'Animal',
  descrever: function() {
    return `Sou um ${this.tipo}`;
  }
};
 
let gato = Object.create(animal);
gato.tipo = 'Gato';
 
console.log(gato.descrever()); // Saída: Sou um Gato
Aqui, criamos um objeto animal e usamos a função Object.create para criar um novo objeto gato que tem 
animal como seu protótipo. Portanto, gato herda a propriedade descrever do animal.

Utilizando Constructors e prototype
Podemos também definir funções construtoras e utilizar a propriedade prototype para estabelecer a herança:


function Animal(tipo) {
  this.tipo = tipo;
}
 
Animal.prototype.descrever = function() {
  return `Sou um ${this.tipo}`;
};
 
function Gato() {
  Animal.call(this, 'Gato');
}
 
Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;
 
let gato = new Gato();
 
console.log(gato.descrever()); // Saída: Sou um Gato
Prós e Contras
A herança prototípica permite um alto nível de reutilização de código e flexibilidade. No entanto, 
também pode tornar o código mais difícil de entender e manter, especialmente se a cadeia de protótipos 
for muito longa ou complexa. É essencial entender bem essa mecânica e aplicá-la com cuidado.

Melhores Práticas
Mantenha as cadeias de protótipos curtas e simples.
Utilize a herança prototípica onde faz sentido sem forçar seu uso.
Evite modificar o protótipo de objetos nativos, como Array.prototype.
Conclusão
A herança prototípica é um dos conceitos mais distintos e poderosos do JavaScript. Ela permite uma grande 
flexibilidade na criação de objetos, permitindo que eles herdem comportamento e propriedades de outros 
objetos. Ao entender como a herança prototípica funciona e aplicá-la com sabedoria, você pode escrever 
código mais reutilizável e eficiente.

Exercícios
Explorando Protótipos: Crie um objeto e utilize Object.create para criar outro objeto que herda dele. 
Experimente acessar e modificar propriedades através da cadeia de protótipos.
Herança com Funções Construtoras: Reescreva o exemplo acima usando classes ES6. Compare as diferenças e 
semelhanças com o código original.
Analisando a Cadeia de Protótipos: Utilize as funções Object.getPrototypeOf e Object.hasOwnProperty para 
analisar a cadeia de protótipos de um objeto e determinar de onde as propriedades estão vindo.
Refatorando Código: Considere um trecho de código que repete comportamento em vários objetos. Refatore esse 
código para utilizar herança prototípica e reduzir a duplicação.*/