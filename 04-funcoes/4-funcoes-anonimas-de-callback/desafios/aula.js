/**Nessa aula nós vamos abordar os conceitos de funções anônimas e funções de callback. Essas duas formas de funções oferecem flexibilidade e controle, permitindo que você escreva código mais conciso e reutilizável.

Então bora começar?

Funções Anônimas
Uma função anônima é simplesmente uma função sem um nome. Pode parecer estranho à primeira vista, mas funções anônimas são muito úteis em certas situações, especialmente quando você quer passar uma função como argumento para outra função. Elas são frequentemente usadas em conjunto com funções de callback, um tópico que abordaremos em breve.

Sintaxe
Você pode declarar uma função anônima usando a palavra-chave function, seguida por parênteses que contêm os parâmetros, e chaves que contêm o corpo da função. Veja um exemplo: */

const minhaFuncao = function(x, y) {
  return x + y;
};

/**Note que, embora a função em si não tenha um nome, a variável minhaFuncao está armazenando a referência para essa função, e você pode invocá-la como qualquer outra função: */
console.log(minhaFuncao(2, 3)); // Saída: 5

/**Uso com Callbacks
As funções anônimas são comumente usadas como argumentos de outras funções. Aqui está um exemplo usando o método Array.prototype.map: */

const numeros = [1, 2, 3];
const dobrados = numeros.map(function(numero) {
  return numero * 2;
});
console.log(dobrados); // Saída: [2, 4, 6]

/**Funções anônimas são simples, mas poderosas. Com a prática, você verá como elas podem tornar seu código mais limpo e flexível.

Funções de Callback
Uma função de callback é uma função passada como argumento para outra função. Isso permite que você tenha um maior controle sobre quando a função de callback será executada, e é uma técnica muito comum em JavaScript, especialmente no contexto de operações assíncronas.

Exemplo Básico
Vamos começar com um exemplo simples. Imagine que você tem uma função processar que aceita uma função de callback como argumento. A função processar então chama a função de callback após fazer algum processamento: */

function processar(callback) {
  console.log('Iniciando o processamento...');
  callback();
}
 
processar(function() {
  console.log('Processamento concluído!');
});

/**Uso com Métodos de Array
As funções de callback são frequentemente usadas com métodos de array como map, filter, e reduce. Vamos ver um exemplo com o método filter:

const numeros = [1, 2, 3, 4, 5]; const pares = numeros.filter(function(numero) { return numero % 2 === 0; }); console.log(pares); // Saída: [2, 4]

Callbacks Assíncronos
Um uso comum para callbacks é em operações assíncronas, como leitura de arquivos ou solicitações de rede: */

const fs = require('fs');
 
fs.readFile('arquivo.txt', 'utf8', function(erro, dados) {
  if (erro) {
    console.error(erro);
    return;
  }
  console.log(dados);
});

/**Neste exemplo, a função de callback é chamada após a leitura do arquivo ser concluída.

Callbacks são uma parte fundamental da programação em JavaScript, e você os encontrará frequentemente ao trabalhar com bibliotecas e frameworks modernos.

Boas Práticas e Erros Comuns ao Usar Funções Anônimas e de Callback
Ao trabalhar com funções anônimas e de callback, existem algumas boas práticas que devem ser seguidas e erros comuns que podem ser evitados. Vamos explorá-los:

Boas Práticas
Manter Simplicidade: Se uma função de callback estiver se tornando muito complexa, pode ser útil quebrá-la em funções menores nomeadas.
Evitar Callback Hell: Aninhar muitas funções de callback pode levar ao que é conhecido como “callback hell”, tornando o código difícil de ler e manter. Promises e async/await são técnicas que podem ajudar a evitar isso.
Tratar Erros: Sempre trate erros em funções de callback, especialmente em operações assíncronas. Isso evita falhas silenciosas.
Usar Arrow Functions quando Apropriado: As funções de seta podem tornar o código mais conciso, mas compreenda as diferenças no comportamento do this em comparação com funções regulares.
Erros Comuns
Chamando a Função de Callback Imediatamente: Certifique-se de passar a referência da função de callback, e não o resultado de sua chamada. Ou seja, use callback em vez de callback().
Ignorar Parâmetros: Se você está esperando parâmetros específicos em sua função de callback, certifique-se de usá-los corretamente.
Assumindo a Ordem de Execução em Operações Assíncronas: Em operações assíncronas, não assuma que os callbacks serão executados em uma ordem específica. */
