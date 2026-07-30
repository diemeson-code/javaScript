/**Introdução
Seja bem-vindo à nossa aula sobre Test-Driven Development (TDD) e Testes Automatizados. Testar é fundamental em qualquer projeto de desenvolvimento de software, mas, frequentemente, essa tarefa é deixada de lado ou é realizada de maneira insuficiente. Nesta aula, abordaremos como o TDD e os testes automatizados podem transformar sua forma de programar, tornando o processo mais eficiente, eficaz e menos propenso a erros.

O Que São Testes em Desenvolvimento de Software?
No contexto de desenvolvimento de software, testar é o ato de executar o aplicativo para identificar erros e garantir que todas as funcionalidades estejam trabalhando conforme o esperado. O principal objetivo é encontrar falhas e corrigi-las antes que o produto chegue ao usuário final. Testes são essenciais por diversas razões:

Validação de Requisitos: Certificar que o software atende aos requisitos especificados.
Qualidade de Software: Garantir que o software é robusto, eficiente e executa o que é suposto fazer.
Redução de Custos: Embora pareça contraintuitivo, gastar tempo com testes pode economizar muito mais tempo e recursos no futuro, evitando a necessidade de correções emergenciais e melindrosas.
Por que TDD é Importante?
O Test-Driven Development leva a filosofia dos testes um passo adiante. Trata-se de uma metodologia de desenvolvimento de software em que os testes são escritos antes mesmo do código que será testado. Isso não apenas assegura que o código será testável, mas também auxilia no design do software, obrigando o desenvolvedor a considerar a estrutura e a funcionalidade do código antes de escrevê-lo.

Esta introdução aprofundada destaca a importância crítica de adotar práticas de testes robustas e metodologias como o TDD. Ao longo desta aula, exploraremos esses conceitos em detalhes, abordando o ciclo de TDD, suas vantagens e desvantagens, o que são testes automatizados e os diferentes tipos de testes que você pode incorporar em seu fluxo de trabalho. Vamos começar!

Conceitos Básicos de TDD
O ciclo de TDD: Vermelho, Verde, Refatorar
O TDD segue um ciclo muito específico conhecido como “Vermelho, Verde, Refatorar”.

Vermelho: Escreva um teste que defina uma função ou melhorias de uma função, que deve falhar inicialmente porque a função ainda não foi implementada.

Verde: Escreva o código necessário para passar no teste. O objetivo nessa fase é escrever código suficiente para fazer o teste passar, não para ter o código perfeito.

Refatorar: Limpe o código enquanto o mantém funcional. Refatoração é o processo de fazer melhorias no código sem alterar seu comportamento externo.

Vantagens e desvantagens do TDD
Vantagens:
Melhora a qualidade do código.
Facilita a manutenção.
Reduz o tempo gasto em depuração.
Promove desenvolvimento mais rápido.
Desvantagens:
Pode ser demorado no início.
Há uma curva de aprendizado.
Introdução aos Testes Automatizados
O que são testes automatizados
Testes automatizados são testes que são executados automaticamente por software. Esses testes podem ser programados para executar tarefas específicas, verificando assim se o código está funcionando como deveria.

Tipos de testes
Existem vários tipos de testes que você pode realizar em seu software, e é importante entender as diferenças entre eles:

Testes Unitários: Testam uma parte pequena e isolada do código. Geralmente, uma função ou um método.
Testes de Integração: Testam a interação entre diferentes peças de código ou sistemas.
Testes Funcionais: Testam funcionalidades completas, geralmente do ponto de vista do usuário.
Jest: Uma Biblioteca para Testes
O que é Jest e por que usá-lo?
Jest é uma framework de testes em JavaScript desenvolvida pelo Facebook. Ela é muito popular e altamente recomendada por várias razões:

Simplicidade: Jest é fácil de configurar, o que significa que você pode começar a escrever testes quase imediatamente.
Feedback Rápido: Jest oferece um modo “watch”, que reexecuta os testes relacionados aos arquivos alterados, proporcionando um feedback rápido durante o desenvolvimento.
Rico Conjunto de Funcionalidades: Inclui recursos como “spies”, “mocks”, e simulação de módulos, o que facilita a escrita de diferentes tipos de testes.
Compatibilidade: Trabalha bem com várias bibliotecas e frameworks populares como React, Angular e Vue.
Configurando Jest em um projeto
Para instalar o Jest, você deve ter o Node.js e o npm instalados em seu sistema. Abra o terminal e execute o seguinte comando:

npm install --save-dev jest
Após a instalação, adicione o seguinte script no seu arquivo package.json: 


{
  "scripts": {
    "test": "jest"
  }
}
Agora, você pode executar os testes em seu projeto com o comando:

npm test
Exemplo Prático: Escrevendo Testes com Jest
Criando um exemplo simples para demonstrar TDD e testes automatizados
Suponha que você queira criar uma função que some dois números. Primeiro, você escreve um teste:


// soma.test.js
const soma = require('./soma');
 
test('soma 1 + 2 deve retornar 3', () => {
  expect(soma(1, 2)).toBe(3);
});
Agora, vamos criar o arquivo soma.js:


// soma.js
function soma(a, b) {
  return a + b;
}
 
module.exports = soma;
Como executar os testes
Para executar os testes, você pode usar o comando npm test que você configurou anteriormente. O Jest irá encontrar todos os arquivos com .test.js no nome e executar os testes que encontrar neles.

Ao rodar o teste, o Jest irá fornecer um relatório indicando se o teste passou ou falhou, ajudando você a entender o que precisa ser corrigido ou implementado.

Ao seguir este exemplo prático, você estará aplicando os princípios básicos de TDD e testes automatizados em um projeto real. Isso ilustra a eficácia e a eficiência que essas práticas podem trazer para o seu desenvolvimento de software.

Nesta aula, abordamos vários tópicos fundamentais para qualquer desenvolvedor que deseja escrever código mais robusto, mantido e eficiente. Iniciamos com uma introdução profunda ao conceito de Test-Driven Development (TDD), seguido pelos prós e contras de adotar essa abordagem. Também demos uma olhada em testes automatizados e os diferentes tipos que você pode implementar em seus projetos.

Nos aprofundamos em como utilizar a biblioteca Jest para escrever e executar nossos testes, fornecendo um exemplo prático para ilustrar os conceitos aprendidos. O objetivo aqui é que você não só entenda a teoria, mas também saiba como aplicá-la em situações reais.

O TDD e os testes automatizados são mais do que apenas práticas recomendadas; eles são habilidades essenciais que todo desenvolvedor deveria ter em seu repertório. Portanto, encorajo você a aplicar esses conceitos em seus futuros projetos. O investimento inicial de tempo certamente compensará a longo prazo, tornando seu código mais robusto e sua vida como desenvolvedor muito mais fácil.

Agora deixei alguns exercícios aqui embaixo para você praticar e espero você na próxima aula.

Exercícios
O exercício para esta aula é implementar testes para todas as funções do projeto da calculadora que já desenvolvemos. Isso vai ajudá-lo a solidificar os conceitos que você aprendeu e dar-lhe uma experiência prática real com TDD e testes automatizados.
*/
function soma(a,b){
  return a + b;

}
//
module.exports = soma
