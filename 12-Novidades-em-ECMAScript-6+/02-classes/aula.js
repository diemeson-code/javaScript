/**Olá, hoje vamos mergulhar no universo das Classes em ECMAScript 6+. Se você já se deparou com outros paradigmas de programação, como a programação orientada a objetos em outras linguagens, esta aula vai ser um prato cheio. Mas não se preocupe se esse termo é novo para você; vamos começar do zero!

O que são Classes e por que são importantes em JavaScript moderno
Classes são um recurso que permite criar objetos e organizar códigos de forma mais estruturada e reutilizável. Elas são especialmente importantes no JavaScript moderno, onde aplicações estão se tornando cada vez mais complexas e a necessidade de manter um código bem estruturado é vital.

Vocês lembram que lá no começo do curso eu mencionei que o Javascript pode usar diversos paradigmas de programação seja a programação imperativa, programação funcional ou a orientada a objetos, cada uma tem suas vantagens e desvantagens e seus usos que não vem ao caso para essa aula, apenas para lembrar você que esse conceito de classes entra na programação orientada a objetos como nós ja vimos alguns recursos em outras aulas.

12.2.2 Conceitos Básicos de Classes
Sintaxe para a declaração de uma Classe
A declaração de uma Classe é feita utilizando a palavra-chave class, seguida pelo nome da classe e um bloco de código contendo seus métodos e propriedades. */

class NomeDaClasse {
  constructor(param1, param2) {
    // Inicializações aqui
  }
   
  metodo1() {
    // Corpo do método
  }
}


/**O construtor e métodos dentro de uma Classe
O método constructor é um método especial que é chamado quando um novo objeto é criado a partir da classe. Ele geralmente inicializa as propriedades do objeto. Outros métodos podem ser definidos para implementar o comportamento desejado da Classe.

Criação de objetos a partir de uma Classe
Para criar um objeto a partir de uma Classe, utilizamos a palavra-chave new, seguida pelo nome da Classe e argumentos, caso necessários. */

	
const objeto = new NomeDaClasse(param1, param2);

/**Comparação com Funções Construtoras
Semelhanças e diferenças entre Classes e Funções Construtoras
Ambas as Classes e Funções Construtoras servem ao propósito de criar objetos em JavaScript, mas de maneiras um pouco diferentes. Funções Construtoras são o modo “tradicional” de criar objetos e oferecem grande flexibilidade. Classes, por outro lado, são mais recentes e oferecem uma sintaxe mais clara e fácil de entender.

Semelhanças: Ambas podem ser usadas para criar múltiplos objetos; ambas podem receber parâmetros; ambas podem ter métodos que operam sobre as propriedades desses objetos.
Diferenças: Classes não hoistam (i.e., você deve declarar uma classe antes de usá-la), enquanto funções construtoras fazem; Classes podem ser extendidas através de herança mais facilmente; Classes oferecem modos mais fáceis de definir e trabalhar com métodos privados.
Vantagens e desvantagens de usar Classes
Vantagens: Sintaxe mais limpa; facilidade de herança e polimorfismo; código mais estruturado; melhor suporte em frameworks modernos.
Desvantagens: Não são hoisted; não são tão flexíveis quanto funções construtoras; podem ser mais difíceis de entender para quem vem de um background que não inclui programação orientada a objetos.
Sintaxe e Exemplos Práticos
Como declarar uma Classe e instanciar objetos
Declarar uma Classe é simples. Aqui está a estrutura básica: */

class NomeDaClasse {
  constructor(param1, param2) {
    this.propriedade1 = param1;
    this.propriedade2 = param2;
  }
}

// Para instanciar um objeto:
	
const meuObjeto = new NomeDaClasse('valor1', 'valor2');

/**Adicionando métodos a uma Classe
Métodos são funções que pertencem a uma Classe e operam em suas propriedades. Para adicionar um método, basta incluí-lo dentro da declaração da Classe: */

class NomeDaClasse {
  constructor(param1, param2) {
    this.propriedade1 = param1;
    this.propriedade2 = param2;
  }
   
  meuMetodo() {
    console.log(`Propriedade 1 é ${this.propriedade1}`);
  }
}

// Para utilizar este método:

const meuObjeto = new NomeDaClasse('valor1', 'valor2');
meuObjeto.meuMetodo();  // Output: "Propriedade 1 é valor1"

/**Herança e Extensão de Classes
O que é herança e como implementá-la
Herança é um conceito fundamental em programação orientada a objetos que permite a uma classe herdar propriedades e métodos de outra classe. Isso ajuda na reutilização do código e na criação de uma hierarquia de classes que compartilham funcionalidades comuns, facilitando a manutenção e a expansão do código.

Em JavaScript, você pode implementar herança através da palavra-chave extends. */

class ClasseBase {
  constructor(nome) {
    this.nome = nome;
  }
 
  saudacao() {
    return `Olá, ${this.nome}!`;
  }
}
 
class ClasseDerivada extends ClasseBase {
  constructor(nome, sobrenome) {
    super(nome);
    this.sobrenome = sobrenome;
  }
 
  saudacaoCompleta() {
    return `${super.saudacao()} Meu sobrenome é ${this.sobrenome}.`;
  }
}

/**Utilizando a palavra-chave extends e super
extends: É usada para criar uma classe filha que herda as propriedades e métodos da classe pai.
super: É usada dentro do construtor da classe filha para chamar o construtor da classe pai, permitindo que a classe filha herde as propriedades e métodos da classe pai.
Nesta aula, nós exploramos o importante conceito de Classes no contexto de JavaScript moderno. Aprendemos o que são Classes, como e quando usá-las, e como elas diferem de funções construtoras. Também discutimos os fundamentos da herança e como utilizar extends e super para criar uma hierarquia de classes.

É crucial entender esses conceitos para programar eficientemente em JavaScript moderno e para aproveitar os benefícios da programação orientada a objetos. Agora que você está armado com este conhecimento, é hora de colocá-lo em prática!

Por isso, convido você a realizar os exercícios práticos que deixei aqui embaixo. Eles foram projetados para reforçar o que você aprendeu e ajudá-lo a pensar em termos de Classes e orientação a objetos.

Desafios Práticos e Exercícios
Exercícios práticos para consolidar o aprendizado
Crie uma classe chamada Carro, com propriedades para marca, modelo e ano, e métodos para acelerar e frear.
Extend a classe Carro para criar uma classe CarroEletrico, que tem uma propriedade adicional para a autonomia da bateria.
Implemente métodos em CarroEletrico para carregar a bateria e mostrar o status da carga.
Como pensar em termos de orientação a objetos e Classes em projetos reais
Ao estruturar um novo projeto, pense nas entidades que o compõem como possíveis classes.
Considere quais métodos e propriedades são comuns entre várias entidades para implementá-los em uma classe pai, promovendo a reutilização de código.
Sempre questione se a herança é a melhor opção ou se composição ou agregação poderiam ser mais apropriadas para o seu caso.
Com esses exercícios e dicas, você estará no caminho certo para se tornar proficiente em usar Classes e programação orientada a objetos em JavaScript! */