/**A aula de hoje é sobre como utilizar o método fetch para realizar requisições HTTP em JavaScript. Nesta aula, exploraremos um dos aspectos fundamentais do desenvolvimento web moderno: a habilidade de comunicar-se com servidores e outras fontes de dados de forma assíncrona. então bora?

Introdução ao Método Fetch
O método fetch é uma moderna e poderosa API nativa disponível nos navegadores modernos para realizar requisições HTTP. Ele retorna uma Promise que resolve para a resposta da requisição, permitindo uma manipulação assíncrona dos dados.

Aqui estão alguns pontos chave sobre o fetch:

Sintaxe Simples: A API fetch foi projetada para ser simples e fácil de usar, tornando o trabalho com requisições HTTP mais acessível.
Baseado em Promises: Como mencionamos anteriormente no curso, Promises são uma maneira de lidar com operações assíncronas. O fetch se integra perfeitamente com esse conceito, tornando o código mais limpo e gerenciável.
Flexível: O fetch suporta todos os métodos HTTP modernos, permitindo a criação, leitura, atualização e exclusão de recursos em servidores.
Integração com Async/Await: Podemos usar fetch junto com a sintaxe async/await, o que veremos mais adiante na aula.
Com essas características, o fetch torna-se uma ferramenta indispensável para qualquer desenvolvedor JavaScript que trabalhe com aplicações que precisem interagir com APIs ou outros serviços web.

Utilização Básica de Fetch
O fetch é um método incrivelmente versátil e começa com uma utilização bastante simples. Vamos ver como você pode começar a trabalhar com ele.

Fazendo uma Requisição GET Simples
Uma requisição GET é usada para solicitar dados de um recurso específico. Usar o fetch para fazer uma requisição GET é tão simples quanto fornecer a URL à qual você deseja fazer a requisição:


fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Houve um erro!', error));
Neste exemplo, o fetch retorna uma Promise que, quando resolvida, fornece um objeto de resposta. Podemos então usar o método .json() para ler o corpo da resposta como JSON, e finalmente lidar com os dados resultantes.

Trabalhando com a Resposta
A resposta de uma requisição fetch vem com vários métodos úteis para processar o corpo da resposta de diferentes maneiras. Além do .json(), você pode usar métodos como .text(), .blob(), e outros, dependendo do tipo de dado que você está esperando.

A resposta também contém informações sobre o próprio status da requisição, como o código de status HTTP, que você pode usar para lidar com diferentes situações.

Exemplo Prático usando uma API Pública
Vamos ver um exemplo prático onde usamos o fetch para buscar dados de uma API pública. Utilizaremos a API JSONPlaceholder, que fornece dados fictícios para testes:


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(post => {
    document.getElementById('title').innerText = post.title;
    document.getElementById('body').innerText = post.body;
  })
  .catch(error => console.error('Erro na requisição:', error));
Neste exemplo, estamos buscando um único post e inserindo seu título e corpo em elementos HTML correspondentes. É uma forma comum de usar o fetch para povoar uma página com dados vindos de uma API.

Vamos visualizar esses dados em uma página HTML. Aqui está um exemplo de HTML que você pode usar:


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>API Data Viewer</title>
</head>
<body>
    <h1>Post</h1>
    <div id="title"></div>
    <div id="body"></div>
    <button id="loadPost">Carregar Post</button>
    <script src="script.js"></script> <!-- Seu código JavaScript aqui -->
</body>
</html>
No arquivo JavaScript correspondente, você pode usar o código de requisição GET que mostramos anteriormente para carregar o post quando o botão for clicado.

Como você pode ver, começar com o fetch é simples, e ele oferece uma base sólida para trabalhar com requisições HTTP. No próximo segmento, vamos explorar como usar o fetch para fazer outras requisições além do GET e aprenderemos sobre suas opções de configuração.

Trabalhando com Métodos HTTP Diferentes
O fetch não se limita apenas a fazer requisições GET. É possível utilizar outros métodos HTTP, como POST, PUT, DELETE, etc. Vamos explorar como você pode usar o fetch para esses propósitos.

Uso de POST
O método POST é usado para enviar dados para serem processados por um recurso específico. Aqui está um exemplo de como você pode fazer uma requisição POST com fetch:


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  })
})
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.error('Erro na requisição POST:', error));
Uso de PUT
O método PUT é usado para atualizar um recurso existente. Aqui está como você pode fazer uma requisição PUT:


fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
  })
})
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.error('Erro na requisição PUT:', error));
Uso de DELETE
O método DELETE é usado para solicitar a remoção de um recurso específico. A seguir, um exemplo de como fazer uma requisição DELETE

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(() => console.log('Post deletado'))
  .catch(error => console.error('Erro na requisição DELETE:', error));
Esses exemplos práticos ilustram como você pode usar diferentes métodos HTTP com fetch para criar, ler, atualizar e deletar recursos em uma API, o que é frequentemente referido como operações CRUD (Create, Read, Update, Delete). Isso forma a base de muitas interações em aplicações web modernas.

Trabalhando com Cabeçalhos e Outras Opções
O método fetch fornece uma gama de opções para personalizar requisições. Podemos especificar cabeçalhos, corpo da requisição, método e muito mais para atender às necessidades específicas da requisição. Vamos explorar como podemos fazer isso.

Personalização de Requisições
A personalização de uma requisição é feita através do segundo argumento da função fetch. Aqui você pode definir várias propriedades que controlam o comportamento da requisição.

Adição de Headers
Os cabeçalhos permitem que o cliente e o servidor passem informações adicionais com a requisição ou a resposta. Aqui está como você pode adicionar cabeçalhos a uma requisição:

1
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN_HERE'
  }),
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  })
})
  .then(response => response.json())
  .then(post => console.log(post));
Note que criamos uma instância de Headers para definir os cabeçalhos da requisição. Você também pode passar um objeto literal simples.

Adição de Body
O corpo da requisição é a parte da requisição onde enviamos os dados. Isso é comumente usado com métodos como POST e PUT. A propriedade body permite que você defina os dados que deseja enviar:


fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John',
    age: 30
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
Exemplos Práticos
Aqui está um exemplo que combina cabeçalhos personalizados e corpo da requisição para fazer uma requisição POST:


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN_HERE'
  },
  body: JSON.stringify({
    title: 'My New Post',
    body: 'This is the content of my new post.',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    document.getElementById('title').innerText = data.title;
    document.getElementById('body').innerText = data.body;
  })
  .catch(error => console.error('Something went wrong:', error));
Este exemplo demonstra como você pode personalizar totalmente uma requisição usando o fetch. Isso fornece uma flexibilidade significativa para trabalhar com diferentes APIs e realizar diversas tarefas em suas aplicações.

Desafio: Mostrar a Previsão do Tempo na Sua Cidade
Neste desafio, você vai construir uma pequena aplicação para mostrar a previsão do tempo na sua cidade. Utilizaremos a API gratuita da OpenWeatherMap, que fornece informações meteorológicas em tempo real.

Passo 1: Obter a API Key
Para acessar os dados da OpenWeatherMap, você precisará se cadastrar no site e obter uma API key gratuita. Siga os seguintes passos:

Acesse OpenWeatherMap e crie uma conta gratuita.
Vá para a área de API Keys e crie uma nova chave.
Anote a chave, pois você a utilizará em sua requisição.
Passo 2: Descobrir Latitude e Longitude da Sua Cidade
Você pode encontrar a latitude e longitude da sua cidade através de uma pesquisa rápida no Google. Basta digitar “latitude e longitude de [nome da sua cidade]” e você encontrará os dados necessários.

Passo 3: HTML
Utilize o seguinte HTML como ponto de partida:


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Previsão do Tempo</title>
</head>
<body>
    <h1>Previsão do Tempo na Minha Cidade</h1>
    <button id="loadWeather">Carregar Previsão</button>
    <div id="weatherInfo"></div>
    <script src="script.js"></script>
</body>
</html>
Passo 4: Desafio JavaScript
Sua tarefa é implementar o código JavaScript no arquivo script.js para realizar a seguinte ação:

Ao clicar no botão “Carregar Previsão”, faça uma requisição GET ao endpoint https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}, substituindo {lat}, {lon}, e {API key} pelos valores corretos.
Trabalhe com a resposta para mostrar as informações meteorológicas na div weatherInfo.
Lembre-se de tratar possíveis erros e de fornecer feedback ao usuário enquanto a requisição estiver sendo processada.

*você pode descobrir a lat,long da sua cidade pelo site: LatLong.net

Este desafio vai ajudar você a consolidar o conhecimento sobre como fazer requisições HTTP usando o método fetch e como manipular respostas em uma aplicação real. Boa sorte! */