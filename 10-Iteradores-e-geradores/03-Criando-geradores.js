/**Se você acompanhou as aulas anteriores, você já está familiarizado com o conceito de iteradores e como eles facilitam a manipulação de conjuntos de dados em JavaScript. Nesta aula, estamos dando um passo adiante para explorar uma característica ainda mais poderosa: os Geradores.

Os geradores são funções especiais que nos permitem escrever iteradores de uma maneira muito mais confortável e legível. Mas não é só isso; eles têm algumas outras características intrigantes que podem facilitar a vida quando se lida com fluxo de controle assíncrono, manipulação de estado e muito mais.

Então, prepare-se para descobrir o que torna os geradores uma ferramenta valiosa no arsenal de qualquer desenvolvedor JavaScript!

Vamos começar?

Sintaxe Básica de Geradores
A sintaxe para criar um gerador é semelhante à de uma função regular, com a adição da palavra-chave function*. Observe o asterisco (*); é o que distingue uma função geradora de uma função regular.

Vejamos um exemplo simples: */


function* simpleGenerator() {
  yield 'Hello';
  yield 'World';
}
//Você pode começar a executar o gerador chamando a função como faria normalmente:
const generatorObject = simpleGenerator();
/* Observe que a chamada à função geradora retorna um objeto de gerador. Este objeto tem um método next() que, quando chamado, continua a execução da função até o próximo yield e retorna um objeto com propriedades value e done.*/
console.log(generatorObject.next()); // { value: 'Hello', done: false }
console.log(generatorObject.next()); // { value: 'World', done: false }
console.log(generatorObject.next()); // { value: undefined, done: true }




/**Geradores e Controle de Fluxo
Geradores são muito úteis para controle de fluxo. Você pode usar yield para pausar e retomar a execução do código. Isso é muito útil, especialmente quando você está trabalhando com operações assíncronas ou tarefas que demoram a ser concluídas.

Por exemplo, você pode usar um gerador para lidar com uma série de chamadas API: */

function* fetchAPI() {
  const data1 = yield fetch('https://api.example.com/data1');
  const data2 = yield fetch(`https://api.example.com/data2/${data1.id}`);
  return data2;
}
/**Para executar este gerador em um cenário real, você pode usar um loop ou recurso externo como bibliotecas de controle de fluxo, para gerenciar o estado assíncrono: */
const apiGenerator = fetchAPI();
// Alguma lógica para executar as chamadas de API e fornecer os dados de volta ao gerador

/**Exemplos Práticos
Para solidificar o seu entendimento, vamos ver alguns exemplos práticos de como os geradores podem ser usados em diferentes cenários.

Exemplo 1: Gerando uma Sequência de Fibonacci*/

function* fibonacci(n) {
  let a = 0, b = 1;
  while (n-- > 0) {
    yield a;
    [a, b] = [b, a + b];
  }
}
 
const fibo = fibonacci(5);
for (let value of fibo) {
  console.log(value); // Output: 0, 1, 1, 2, 3
}


/**Exemplo 2: Paginação de Dados */

function* paginate(items, pageSize) {
  let index = 0;
  while (index < items.length) {
    yield items.slice(index, index + pageSize);
    index += pageSize;
  }
}
 
const paginatedItems = paginate([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
for (let page of paginatedItems) {
  console.log(page); // Output: [1, 2, 3], [4, 5, 6], [7, 8, 9]
}

/**Vantagens de Usar Geradores
Controle de Fluxo Simplificado: A palavra-chave yield permite que você pause e continue o código, o que é muito útil em operações assíncronas.
Manutenção de Estado: Ao contrário das funções regulares, os geradores mantêm seu estado entre as chamadas, tornando mais fácil gerenciar estados complexos.
Performance: Você pode iterar através de grandes conjuntos de dados sem a necessidade de armazenar todo o conjunto em memória, o que é muito eficiente em termos de desempenho.
Código Mais Limpo: Os geradores podem tornar o seu código mais legível e fácil de entender, especialmente quando trabalhando com operações assíncronas ou fluxos de dados complexos.
Conclusão
E assim terminamos nossa aula focada em geradores. então pratique com os exercícios aqui embaixo para consolidar seu aprendizado. E vejo você na próxima aula.

Exercícios Práticos
1 -> Crie um gerador que receba um array de URLs e faça chamadas fetch para cada uma.
2 ->  Desenvolva um gerador que simule um jogo de perguntas e respostas. Use yield para aguardar a resposta do jogador.
3 -> Implemente um gerador que gere números primos até um limite especificado. */