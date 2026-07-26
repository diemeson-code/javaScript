/**Se você já ouviu falar de Closures antes, mas nunca entendeu completamente o que são ou como funcionam, esta é a sua chance de esclarecer todas as dúvidas.

Closures são uma característica essencial e única de muitas linguagens de programação, incluindo o JavaScript. Eles nos permitem criar funções com “memória”, que se lembram de variáveis e contextos nos quais foram criadas. Essa habilidade nos dá um grande poder e flexibilidade em nossos códigos.

então, bora começar?

Definição e Explicação Prática de Closures
Um Closure é uma função que tem acesso ao escopo pai, mesmo depois que o escopo pai foi fechado. Em outras palavras, é uma função que “lembra” o ambiente em que foi criada.

Explicação Prática
Para entender melhor o conceito, vamos observar um exemplo simples: */

function outerFunction() {
  let outerVariable = 5;
 
  function innerFunction() {
    return outerVariable;
  }
 
  return innerFunction;
}
 
let getOuterVariable = outerFunction();
console.log(getOuterVariable()); // Output: 5

/**Neste exemplo, a função innerFunction é uma Closure. Ela foi definida dentro da outerFunction e tem acesso à variável outerVariable. Mesmo depois que a outerFunction terminou de executar, a innerFunction ainda tem acesso à outerVariable, graças à Closure.

Este é um exemplo básico, mas Closures podem ser usadas em situações mais complexas e fornecer soluções elegantes para vários problemas de programação.

Pode parecer um pouco confuso no início, mas à medida que exploramos mais exemplos e aplicações, você começará a ver o verdadeiro poder e flexibilidade que as Closures oferecem.

Aplicações Práticas e Exemplos de Closures
Closures são mais do que apenas uma curiosidade teórica; eles têm várias aplicações úteis em programação JavaScript. Vamos explorar algumas delas:

1. Encapsulamento de Dados (Data Encapsulation)
Closures permitem que você oculte detalhes de implementação e exponha apenas o necessário. Veja o exemplo: */

function counter() {
  let count = 0;
 
  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}
 
let myCounter = counter();
myCounter.increment();
console.log(myCounter.getCount()); // Output: 1

/**Aqui, count é privada e inacessível fora da função counter. Isso é útil para proteger os dados e garantir que eles sejam modificados apenas de maneiras controladas.

2. Factories de Funções (Function Factories)
Você pode usar Closures para criar funções que seguem um padrão específico. Exemplo: */

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}
 
let multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(4)); // Output: 8

/**3. Controle de Execução
Closures podem ser usadas para controlar quantas vezes uma função pode ser chamada. Exemplo: */

function once(fn) {
  let called = false;
 
  return function () {
    if (!called) {
      called = true;
      fn();
    }
  };
}
 
let logOnce = once(() => console.log('Called once!'));
logOnce(); // Output: Called once!
logOnce(); // Não faz nada

/**Esses são apenas alguns exemplos das diversas aplicações das Closures em JavaScript. Como você pode ver, eles são uma ferramenta poderosa que oferece grande flexibilidade no design do código.

Boas Práticas e Erros Comuns ao Trabalhar com Closures
Closures são uma ferramenta poderosa, mas também podem ser um pouco traiçoeiras se não forem usadas corretamente. Vamos explorar algumas boas práticas e erros comuns para que você possa utilizá-las de forma eficiente.

Boas Práticas:
Utilize Closures quando Necessário: Closures são úteis, mas não são necessárias em todas as situações. Utilize-as quando realmente adicionar benefícios ao seu código, como encapsulamento de dados ou controle de execução.
Cuidado com a Memória: Closures podem manter referências a objetos que, de outra forma, seriam coletados como lixo. Isso pode levar a vazamentos de memória. Sempre faça referências limpas quando não precisar mais de um objeto.
Mantenha Simplicidade: Closures podem tornar o código complexo. Use-as de maneira ponderada e tente manter o código tão simples quanto possível.
Erros Comuns:
Confusão sobre o Escopo: Entender o escopo em que uma Closure está operando é fundamental. Erros aqui podem levar a comportamentos inesperados.
Vazamento de Informações Privadas: Se você estiver usando Closures para encapsulamento, certifique-se de que dados privados não sejam expostos inadvertidamente.
Overhead Desnecessário: Não use Closures quando uma função regular servirá. Elas podem adicionar overhead desnecessário e tornar o código mais difícil de entender.
Exemplo de Erro Comum: */

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // Sempre imprimirá 5
  }, i * 100);
}

/**Aqui, o uso de var dentro do loop causa um erro comum com Closures, já que i terá o valor 5 quando a função dentro de setTimeout for executada. Usar let em vez de var resolveria esse problema.

As Closures são incríveis, mas, como qualquer ferramenta poderosa, devem ser manuseadas com cuidado. Com estas dicas, você estará no caminho certo para utilizar Closures de forma eficaz em seus projetos.

Closures são um recurso avançado e poderoso em JavaScript, permitindo uma maior flexibilidade e controle sobre o escopo e o encapsulamento de variáveis. Nesta aula, nós exploramos o conceito de Closures, como elas são formadas e como utilizá-las efetivamente. Compreender Closures é fundamental para programação avançada em JavaScript, e a prática cuidadosa irá ajudá-lo a utilizar este recurso com confiança. */