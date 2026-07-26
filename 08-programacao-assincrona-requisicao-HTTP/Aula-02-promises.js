/*Trabalhando com Promises
Lição Progress
50% Concluído

Olá e bem-vindo de volta! Na última aula, exploramos o conceito de programação assíncrona e sua importância no desenvolvimento moderno de aplicações. Hoje, vamos dar um passo adiante e aprender sobre uma das ferramentas mais poderosas para lidar com operações assíncronas no JavaScript: as Promises.

Introdução às Promises
Uma Promise é um objeto que representa o resultado eventual de uma operação assíncrona. É uma maneira de lidar com atividades assíncronas que podem ser concluídas em algum momento no futuro. No mundo do JavaScript, as Promises são fundamentais para escrever código assíncrono limpo e eficiente.

Definição e Propósito
A Promise representa um valor que pode não estar disponível no momento em que é criada, mas será resolvida em algum momento no futuro. Ela pode estar em um de três estados:

Pending: A operação assíncrona ainda não foi concluída.
Fulfilled: A operação foi concluída com sucesso.
Rejected: A operação falhou.
A grande vantagem de usar Promises é que elas permitem que você escreva código que assuma que a operação assíncrona será bem-sucedida, facilitando a leitura e a manutenção do código. Ao contrário das callbacks, as Promises oferecem uma forma mais limpa e estruturada de lidar com a asincronia.

Comparação com Callbacks
Antes das Promises, a maneira comum de lidar com operações assíncronas era usando callbacks. No entanto, callbacks podem levar ao infame “callback hell”, onde o código se torna profundamente aninhado e difícil de seguir.

As Promises foram introduzidas para resolver esse problema, fornecendo uma interface mais consistente para trabalhar com operações assíncronas. Com as Promises, você pode organizar seu código de maneira mais linear, facilitando a compreensão do fluxo assíncrono.

Criando e Usando Promises
Promises trazem consigo uma estrutura robusta que facilita o gerenciamento de operações assíncronas. Vejamos como criar e usar Promises.

Como Criar uma Promise
Uma Promise é criada usando o construtor Promise. Ela aceita uma função como argumento, que recebe dois parâmetros: resolve e reject.

resolve: É uma função que deve ser chamada quando a operação assíncrona é bem-sucedida.
reject: É uma função que deve ser chamada quando a operação assíncrona falha.


const myPromise = new Promise((resolve, reject) => {
  // código assíncrono
  if ( operação bem-sucedida ) {
    resolve('Sucesso');
  } else {
    reject('Falha');
  }
});
Métodos then, catch, e finally
then: O método then é chamado quando a Promise é resolvida com sucesso. Aceita uma função que será executada quando a Promise for cumprida.



myPromise.then(result => {
  console.log(result); // 'Sucesso'
});
catch: O método catch é usado para lidar com rejeições. Se algo der errado e a Promise for rejeitada, o código dentro do catch será executado.




myPromise.catch(error => {
  console.log(error); // 'Falha'
});
finally: O método finally é executado independente de a Promise ser resolvida ou rejeitada. É útil para limpeza ou finalização de tarefas, como fechar conexões de banco de dados.




myPromise.finally(() => {
  console.log('Operação completa');
});
Encadeamento de Promises
Promises podem ser encadeadas, o que significa que você pode executar várias operações assíncronas em sequência. O resultado de uma Promise é passado para a próxima, criando uma cadeia de operações.

1
ex6.h
O encadeamento de Promises permite criar fluxos de trabalho assíncronos complexos de maneira clara e legível.

Exemplo Prático
Suponha que queremos simular uma operação assíncrona que busca dados e, uma vez bem-sucedida, atualiza o conteúdo de um parágrafo na página.

HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promise Example</title>
</head>
<body>
    <p id="content">Carregando...</p>
    <button id="loadData">Carregar Dados</button>
    <script src="script.js"></script>
</body>
</html>
Aqui, temos um parágrafo com o texto “Carregando…” que será substituído quando a Promise for cumprida. Também há um botão que, quando clicado, inicia a operação assíncrona.

JavaScript (script.js)


document.getElementById('loadData').addEventListener('click', function() {
  const fetchData = new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona com setTimeout
    setTimeout(() => {
      // Supondo que a operação foi bem-sucedida
      resolve('Dados carregados com sucesso!');
    }, 2000);
  });
 
  fetchData
    .then(result => {
      document.getElementById('content').innerText = result;
    })
    .catch(error => {
      document.getElementById('content').innerText = 'Falha ao carregar os dados.';
    })
    .finally(() => {
      console.log('Operação completa');
    });
});
Neste exemplo, a Promise fetchData simula uma operação assíncrona usando setTimeout. Após 2 segundos, a Promise é resolvida com sucesso, e o conteúdo do parágrafo é atualizado com o texto “Dados carregados com sucesso!”.

Ao clicar no botão “Carregar Dados”, a Promise é acionada, e o usuário vê o resultado na tela após a operação ser cumprida.

Async/Await
Async/Await é uma abordagem moderna que simplifica ainda mais o trabalho com Promises, tornando o código assíncrono mais legível e manutenível. Ele usa palavras-chave especiais async e await para lidar com operações assíncronas de uma maneira que se parece muito com código síncrono.

Simplificando o Trabalho com Promises
O uso de Async/Await torna o código mais limpo e compreensível, especialmente quando se lida com muitas operações assíncronas encadeadas.

Como Usar Async e Await
Para utilizar o await, a função contendo-o deve ser declarada como async. Veja um exemplo prático:

HTML
Você pode utilizar o mesmo HTML do exemplo anterior.

JavaScript



document.querySelector('#loadData').addEventListener('click', async function () {
    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Dados carregados com sucesso usando async/await!');
            }, 2000);
        });
 
        document.querySelector('#content').innerText = result;
    } catch (error) {
        document.querySelector('#content').innerText = 'Falha ao carregar os dados.';
    }
});
Neste exemplo, a palavra-chave async é usada para declarar uma função assíncrona, e await é usada para aguardar a resolução de uma Promise. O código dentro da função assíncrona é pausado até que a Promise seja resolvida, tornando o código muito mais fácil de ler e entender.

Tratamento de Erros com Try e Catch
O tratamento de erros com Async/Await é feito usando blocos try e catch, como mostrado no exemplo acima. Se algo der errado com a Promise, o código dentro do bloco catch será executado. Isso proporciona uma maneira muito direta e elegante de lidar com erros em operações assíncronas.

Boas Práticas ao Trabalhar com Promises
Trabalhar com Promises é poderoso, mas também pode ser complexo e confuso se não for feito corretamente. Abaixo estão algumas boas práticas importantes para tornar o código mais legível e eficiente.

Evitar o “Promise Hell”
“Promise Hell” refere-se a situações onde você tem muitas Promises encadeadas, tornando o código difícil de ler e manter. A utilização de async e await e a estruturação adequada do código podem ajudar a evitar essa situação.

Utilização Adequada de Promises em Aplicações Reais
Não Aninhar Desnecessariamente: Aninhar Promises sem necessidade pode complicar o código. Encadeie Promises quando necessário e utilize async/await para simplificar.
Tratamento de Erros: Sempre adicione tratamento de erros usando .catch() com Promises ou try/catch com async/await.
Usar Finally: Utilize o método .finally() quando necessário para executar código que deve acontecer independentemente de uma Promise ser resolvida ou rejeitada.
Preparação para a próxima aula sobre o método fetch é essencial, pois o conhecimento das Promises será aplicado ao trabalhar com requisições HTTP.

Então agora eu deixei alguns exercicios aqui em baixo para ajudar você a solidificar seu entendimento dos conceitos discutidos nesta aula. A prática leva à perfeição, e esses desafios ajudarão você a se sentir confiante ao trabalhar com Promises.

E eu espero você na próxima aula!

Exercícios Práticos
1. Criar uma Promise: Crie uma Promise que resolva após 3 segundos e atualize o conteúdo de um elemento HTML com uma mensagem de sucesso.

2. Encadeamento de Promises: Crie uma sequência de Promises que resolvem em ordem, cada uma após um intervalo de tempo, atualizando o conteúdo do mesmo elemento HTML.

3. Uso de Async/Await: Refaça os exercícios acima utilizando async e await, notando a diferença na legibilidade e estrutura do código.

4. Tratamento de Erros: Adicione um tratamento de erros aos exemplos acima, usando tanto .catch() quanto try/catch, para entender como eles funcionam em diferentes contextos.

*/