/**Hoje vamos falar sobre um tópico crucial no desenvolvimento frontend que muitas vezes é subestimado: o cache. Você já se perguntou por que algumas páginas web carregam mais rápido após a primeira visita? Ou por que as fotos e vídeos não precisam ser baixados novamente toda vez que você acessa uma página? A resposta é o cache!

Entender o que é cache e como implementá-lo corretamente pode fazer toda a diferença na performance e na experiência do usuário em sua aplicação. Portanto, hoje, vamos nos aprofundar nos fundamentos do cache, nos diferentes tipos e como ele pode ser implementado em suas aplicações JavaScript, especialmente ao trabalhar com APIs.

Fundamentos de Cache
Tipos de Cache
Existem vários tipos de cache, e cada um tem seu próprio conjunto de regras e propósitos. Vamos abordar alguns deles:

Browser Cache: Este é o cache armazenado pelo navegador e é o mais comum. Ele guarda arquivos estáticos como CSS, JavaScript e imagens para acelerar o carregamento em futuras visitas à mesma página.
Application Cache: Este é o cache controlado pela própria aplicação, muitas vezes usando tecnologias como Service Workers. Ele permite um controle mais fino sobre quais dados são armazenados e quando devem ser invalidados.
Server Cache: Embora o nosso foco seja o frontend, é bom saber que o cache também pode ser implementado no lado do servidor para acelerar a entrega de conteúdo.
Content Delivery Network (CDN) Cache: Este é um cache armazenado em servidores de rede de entrega de conteúdo, que estão geograficamente próximos aos usuários, permitindo um carregamento mais rápido do conteúdo.
O Ciclo de Vida do Cache
O cache tem três fases principais que você deve conhecer:

Armazenamento: Nesta fase, os dados são armazenados no cache. Isso pode ser feito automaticamente pelo navegador ou manualmente pela aplicação.
Recuperação: Quando um usuário visita uma página ou acessa um recurso que já está em cache, o sistema irá recuperar esses dados do cache em vez de fazer uma nova solicitação ao servidor, tornando o carregamento mais rápido.
Invalidação: Este é o processo de remover dados desatualizados ou irrelevantes do cache. É um aspecto crítico, pois armazenar informações erradas ou desatualizadas pode causar problemas.
Cache do Lado do Cliente
Como o Cache do Lado do Cliente Funciona
O cache do lado do cliente ocorre no navegador do usuário, salvando temporariamente arquivos e dados que podem ser reutilizados em visitas futuras à mesma página web. Isso permite que o site carregue mais rapidamente, oferecendo uma experiência de usuário mais eficiente. O cache pode armazenar uma variedade de informações, desde arquivos estáticos, como imagens e CSS, até dados dinâmicos.

Cache em Navegadores: Cookies, LocalStorage, SessionStorage
Cookies: Esses pequenos pedaços de dados armazenam informações simples e são comumente usados para rastrear sessões de usuários ou armazenar preferências leves.
LocalStorage: Permite o armazenamento de dados de forma persistente e sem expiração. É útil para armazenar informações que não precisam ser recriadas sempre que o usuário visita a página.
SessionStorage: Semelhante ao LocalStorage, mas com um ciclo de vida limitado à sessão atual do navegador. Os dados são limpos quando a janela ou guia do navegador é fechada.
Ferramentas e Bibliotecas
Introdução ao Uso de Service Workers para Cache
Service Workers agem como um proxy entre sua aplicação web e a rede. Eles são excelentes para gerenciar o cache porque permitem que você controle quais recursos serão armazenados em cache e como esses recursos serão atualizados. Você pode, por exemplo, armazenar todos os seus arquivos estáticos para que sua aplicação possa até funcionar offline.

Um Service Worker pode interceptar requisições de rede e servir conteúdo em cache. Vamos ver um exemplo simples de como registrar um Service Worker e como fazer cache de alguns recursos.

Arquivo service-worker.js: */

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/script.js',
      ]);
    })
  );
});
 
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Arquivo main.js:

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker registrado com sucesso:', registration);
    })
    .catch((error) => {
      console.log('Erro ao registrar o Service Worker:', error);
    });
}

/**IndexedDB: Um Banco de Dados no Navegador para Armazenar Dados Complexos
Para além de simples pares chave-valor que você poderia armazenar em LocalStorage, o IndexedDB permite que você armazene objetos mais complexos como arrays e até mesmo arquivos binários. Ele é particularmente útil para armazenar uma grande quantidade de dados de forma eficiente, como informações de catálogos de produtos ou artigos que o usuário pode querer acessar offline.

Você pode usar IndexedDB para armazenar objetos JavaScript complexos no navegador. Veja como criar um banco de dados e uma loja de objetos: */

let openRequest = indexedDB.open("myDatabase", 1);
 
openRequest.onupgradeneeded = function() {
  let db = openRequest.result;
  if (!db.objectStoreNames.contains('users')) {
    db.createObjectStore('users', {keyPath: 'id'});
  }
};
 
openRequest.onsuccess = function() {
  let db = openRequest.result;
  let transaction = db.transaction("users", "readwrite");
  let users = transaction.objectStore("users");
  users.add({id: 1, name: "John", age: 30});
};
 
openRequest.onerror = function() {
  console.error("Error", openRequest.error);
};

/**Cache em Integração com APIs
Estratégias de Cache para Dados Vindos de APIs
Quando você faz chamadas frequentes a uma API para buscar dados que não mudam com frequência, faz sentido armazenar esses dados em cache. Você pode fazer isso usando técnicas de cache do lado do cliente, como LocalStorage, ou mesmo usando Service Workers para armazenar as respostas das API calls.

Quando e Como Armazenar Dados em Cache
Uma boa prática é armazenar dados em cache logo após uma chamada bem-sucedida à API. Ao fazer isso, você pode definir um tempo de vida (TTL) para o cache, após o qual uma nova chamada à API seria necessária para atualizar os dados.

Ao fazer uma requisição a uma API, você pode armazenar a resposta em LocalStorage e definir um tempo de vida (TTL) para ela. */

function fetchWeatherData() {
  const cache = localStorage.getItem('weatherData');
  const lastCacheTime = localStorage.getItem('weatherDataTime');
 
  if (cache && (Date.now() - lastCacheTime < 60000)) { // Cache válido por 60 segundos
    return Promise.resolve(JSON.parse(cache));
  }
 
  return fetch('https://api.example.com/weather')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('weatherData', JSON.stringify(data));
      localStorage.setItem('weatherDataTime', Date.now());
      return data;
    });
}
 
fetchWeatherData().then(data => {
  console.log("Weather data:", data);
});

/**
 * Boas Práticas e Considerações
Segurança em Cache: O Que Pode e o Que Não Pode Ser Armazenado
Dados sensíveis ou informações pessoais não devem ser armazenados em cache para evitar possíveis riscos de segurança. Além disso, o cache não deve ser usado para armazenar informações que mudam frequentemente em curtos períodos de tempo.

Dicas para Otimizar o Uso do Cache
Use versões em hash de seus arquivos para evitar o uso de dados em cache desatualizados.
Defina regras claras para invalidação do cache.
Avalie o uso de diferentes estratégias de cache para diferentes tipos de dados.
Conclusão
Nesta aula, cobrimos o básico do cache no desenvolvimento frontend, abordando desde os fundamentos até práticas avançadas como o uso de Service Workers e IndexedDB. Também discutimos como gerenciar eficientemente o cache ao integrar com APIs externas.

Com essas habilidades, você está agora mais preparado para desenvolver aplicações frontend eficientes e eficazes. Encorajamos você a aplicar esses conceitos em seus futuros projetos para uma performance otimizada e uma melhor experiência do usuário.
 */
