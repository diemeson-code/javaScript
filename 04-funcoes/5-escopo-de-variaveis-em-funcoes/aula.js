/**Está é uma aula de reforço sobre os escopos que nos vimos la no começo do curso, mas para que vocês entendam o conteudo da proxima aula esses conceitos tem que estar enraizados na cabeça de vocês, então vai ser uma aula rápida, mas muito importante, então bora?

Escopo Lexical
O escopo lexical é um conceito fundamental em JavaScript, e é importante compreendê-lo completamente. Ele se refere ao contexto onde uma variável foi declarada, e isso determina onde a variável é acessível.

Escopo Global
No JavaScript, qualquer variável declarada fora de uma função é considerada global. Essas variáveis podem ser acessadas em qualquer parte do código. */


var globalVar = "Eu sou global";
 
function testScope() {
  console.log(globalVar); // Saída: "Eu sou global"
}

/**Escopo de Função
Variáveis declaradas dentro de uma função têm escopo de função. Isso significa que elas só podem ser acessadas dentro da função onde foram declaradas. */
function testScope() {
  var functionVar = "Eu sou local";
  console.log(functionVar); // Saída: "Eu sou local"
}

/**Escopo de Bloco
Com o surgimento do ES6, as palavras-chave let e const permitem declarar variáveis com escopo de bloco. Isso significa que a variável é acessível apenas dentro do bloco onde foi declarada.

 */

if (true) {
  let blockVar = "Eu sou do bloco";
  console.log(blockVar); // Saída: "Eu sou do bloco"
}
 
console.log(blockVar); // Erro: blockVar não está definida

/**Hierarquia de Escopos
O JavaScript utiliza uma hierarquia de escopos. Um escopo interno pode acessar variáveis de um escopo externo, mas o inverso não é verdadeiro. */

var globalVar = "Eu sou global";
 
function outerFunction() {
  var outerVar = "Eu sou da função externa";
 
  function innerFunction() {
    var innerVar = "Eu sou da função interna";
    console.log(globalVar, outerVar, innerVar); // Acessa todas as variáveis
  }
 
  console.log(globalVar, outerVar); // Acessa globalVar e outerVarconsole.log(innerVar); // Erro: innerVar não está definida
}
/** 
Reforço e Boas Práticas
Agora que já abordamos o conceito de escopo lexical, é importante reforçar alguns pontos-chave e destacar as boas práticas que devem ser seguidas.

Utilização de var, let, e const
var: Evite usar var sempre que possível, pois ele pode causar confusão devido ao seu escopo de função.
let: Utilize let quando precisar reatribuir o valor da variável. Ele tem escopo de bloco, o que torna o código mais seguro.
const: Prefira usar const para declarar variáveis cujo valor não será reatribuído. Isso ajuda a garantir a imutabilidade e torna o código mais legível.
Escopo de Bloco
Utilize let e const dentro de blocos como loops e condicionais para limitar o escopo da variável ao bloco.
Nomeação de Variáveis
Use nomes de variáveis significativos que descrevam sua finalidade no código.
Siga um padrão de nomenclatura (como camelCase) para tornar o código consistente.
Evite Escopo Global
Minimize o uso de variáveis globais para evitar conflitos e tornar o código mais fácil de manter.
Utilize funções e módulos para encapsular o código e controlar o escopo das variáveis.
Cuidado com o Hoisting
Lembre-se de que as variáveis declaradas com var são “içadas” para o topo do escopo, o que pode causar comportamentos inesperados. let e const não têm esse comportamento, por isso são preferíveis.
Nesta aula, nos aprofundamos na compreensão do escopo de variáveis em funções, explorando o conceito de escopo lexical e suas regras no JavaScript. Discutimos as diferenças entre as palavras-chave var, let, e const, e destacamos a importância de seguir boas práticas na declaração e uso de variáveis.

O escopo de variáveis tem um impacto significativo na forma como o código é estruturado e como ele se comporta em tempo de execução. Seguindo as orientações e práticas recomendadas, você pode escrever código mais claro, eficiente e livre de erros.*/