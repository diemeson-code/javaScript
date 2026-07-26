/*Olá! Na aula de hoje, iremos explorar um conceito poderoso e fundamental no JavaScript:
as funções construtoras e protótipos. A manipulação de objetos é uma das habilidades mais importantes
para um desenvolvedor JavaScript, e compreender funções construtoras e protótipos nos permitirá criar 
objetos de maneira eficiente e elegante.

Funções Construtoras
O que são Funções Construtoras?
Funções construtoras são uma forma de definir “classes” em JavaScript. Elas nos permitem definir um 
“modelo” para um objeto e, em seguida, criar novos objetos que seguem esse modelo.

Exemplo: */

function Carro(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}
 
const meuCarro = new Carro('Toyota', 'Corolla');
console.log(meuCarro.marca); // 'Toyota'


/*Protótipos
O que são Protótipos?
Em JavaScript, todos os objetos têm um “protótipo”, que é simplesmente outro objeto ao qual o 
objeto original está ligado. Os protótipos permitem que compartilhemos comportamentos entre objetos.

Cadeia de Protótipos
A cadeia de protótipos é uma série de links entre objetos que formam uma hierarquia. Quando você 
tenta acessar uma propriedade ou método que não existe no objeto, o JavaScript procura na cadeia de 
protótipos.

Adicionando Métodos a Protótipos
Podemos adicionar métodos ao protótipo de um objeto para que todos os objetos criados a partir dele 
compartilhem esse método.

Exemplo: */

arro.prototype.descrever = function() {
  return `Este é um ${this.marca} ${this.modelo}`;
};
 
console.log(meuCarro.descrever()); // 'Este é um Toyota Corolla'


/* Uso Moderno de Protótipos com Object.create
O método Object.create permite que criemos um novo objeto e definamos o protótipo para esse objeto.

Exemplo: */

const veiculo = {
  descrever: function() {
    return `Este é um ${this.marca} ${this.modelo}`;
  }
};
 
const meuCarro = Object.create(veiculo);
meuCarro.marca = 'Toyota';
meuCarro.modelo = 'Corolla';
 
console.log(meuCarro.descrever()); // 'Este é um Toyota Corolla'

/*Funções construtoras e protótipos são elementos cruciais na programação orientada a objetos em 
JavaScript. Eles oferecem um meio de criar objetos seguindo modelos específicos e compartilhando 
comportamentos. Com a compreensão desses conceitos, você poderá escrever código mais limpo, eficiente 
e organizado.

Exercícios Práticos
Crie uma Função Construtora: Crie uma função construtora para representar animais, com propriedades 
como tipo, nome e idade. Adicione um método ao protótipo que retorne uma descrição do animal.
Use Object.create: Utilizando o exemplo anterior, refatore o código usando Object.create para criar 
desnovos objetos animal.
Sinta-se à vontade para experimentar e praticar esses conceitos! */