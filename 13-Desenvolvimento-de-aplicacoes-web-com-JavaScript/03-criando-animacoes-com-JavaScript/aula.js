/**Nesta aula, vamos mergulhar no universo das animações web através do JavaScript. Criar animações pode parecer intimidador se você nunca teve contato com o tema, mas não se preocupe! Esta aula foi estruturada para abraçar tanto iniciantes quanto pessoas com algum conhecimento prévio, cobrindo aspectos teóricos e práticos dessa arte digital.

Conceitos Básicos de Animações em JavaScript
O que são animações e por que elas são importantes em aplicações web
Animações são representações visuais que mudam ao longo do tempo, criando a ilusão de movimento ou transformação. Em aplicações web, animações podem melhorar a experiência do usuário, guiando atenção, fornecendo feedback visual, e até mesmo adicionando um fator “diversão” ao seu projeto.

Teoria do funcionamento de animações no navegadoindex.htmlr
No coração de qualquer animação web estão o HTML, o CSS e o JavaScript. Enquanto HTML e CSS podem ser usados para criar animações mais simples, o JavaScript nos permite criar animações mais complexas e interativas. Uma das funções mais utilizadas para isso é o requestAnimationFrame. Este método permite que você execute uma função repetidamente, criando assim o efeito de animação. A animação acontece no navegador, que calcula cada novo quadro da animação em tempo real, permitindo interatividade e dinamismo.

Criando Animações Simples
Nesta seção, abordaremos como criar animações simples usando o método requestAnimationFrame. Vamos começar com um exemplo prático onde um elemento HTML se move horizontalmente pela tela.

Utilizando o método requestAnimationFrame para criar animações
O requestAnimationFrame é um método que diz ao navegador para executar uma determinada função antes da próxima reexibição. Ele é extremamente útil para criar animações suaves.

Exemplo Prático: Movendo um elemento horizontalmente
HTML */

/** Selecionando o elemento
const box = document.getElementById('box');
 
// Variável para armazenar a posição atual do elemento
let position = 0;
 
// Função para mover o elemento horizontalmente
function moveBox() {
  // Atualizando a posição
  position += 5;
   
  // Aplicando a nova posição ao elemento
  box.style.left = position + 'px';
 
  // Se o elemento ainda não chegou ao final da tela, chamamos requestAnimationFrame novamente
  if (position < window.innerWidth) {
    requestAnimationFrame(moveBox);
  }
}
 
// Inicializando a animação
requestAnimationFrame(moveBox); */

/**Neste exemplo, o elemento com o ID box se moverá horizontalmente pela tela. Utilizamos requestAnimationFrame para garantir que a animação seja suave. A cada quadro, atualizamos a posição do elemento e o movemos um pouco mais para a direita, até que ele alcance o final da tela.

Animações Complexas
Neste tópico, iremos além das animações básicas para abordar animações mais complexas. Você aprenderá a encadear múltiplas animações e também como utilizar bibliotecas externas para facilitar a criação de animações mais elaboradas.

Encadeando Múltiplas Animações
Primeiramente, vamos mostrar como é possível encadear múltiplas animações para criar efeitos mais sofisticados.

HTML */

/**1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Complex Animation</title>
  <style>
    #multiBox {
      width: 50px;
      height: 50px;
      background-color: blue;
      position: absolute;
      top: 50%;
      left: 0;
    }
  </style>
</head>
<body>
  <div id="multiBox"></div>
</body>
</html>
JavaScript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
const multiBox = document.getElementById('multiBox');
let position = 0;
 
function moveBoxRight() {
  position += 5;
  multiBox.style.left = position + 'px';
 
  if (position < 300) {
    requestAnimationFrame(moveBoxRight);
  } else {
    requestAnimationFrame(moveBoxUp);
  }
}
 
function moveBoxUp() {
  position -= 5;
  multiBox.style.top = position + 'px';
 
  if (position > 50) {
    requestAnimationFrame(moveBoxUp);
  }
}
 
requestAnimationFrame(moveBoxRight);
Neste exemplo, a caixa se move primeiro para a direita e, depois, para cima. Utilizamos duas funções diferentes, moveBoxRight e moveBoxUp, para controlar cada fase da animação.

Utilizando Bibliotecas Externas para Facilitar a Criação de Animações
Para este exemplo, utilizaremos a biblioteca anime.js para criar animações complexas de forma mais simples.

Instalando a Biblioteca Externa
Primeiro, você precisará instalar a biblioteca anime.js. Você pode fazer isso usando o npm, como mostrado abaixo:

1
npm install animejs
Depois de instalada, você pode importá-la no seu projeto JavaScript.

HTML
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Complex Animation with anime.js</title>
  <script src="./node_modules/animejs/lib/anime.min.js"></script>
  <style>
    #animeBox {
      width: 50px;
      height: 50px;
      background-color: green;
      position: absolute;
      top: 50%;
      left: 0;
    }
  </style>
</head>
<body>
  <div id="animeBox"></div>
</body>
</html>
JavaScript
1
2
3
4
5
6
7
8
9
10
const animeBox = document.getElementById('animeBox');
 
anime({
  targets: animeBox,
  translateX: 250,
  translateY: 250,
  rotate: '1turn',
  duration: 4000,
  loop: true
});
Neste exemplo, a caixa se move diagonalmente enquanto rotaciona. Utilizamos a biblioteca anime.js para tornar o código muito mais simples e limpo em comparação com a abordagem manual.

Espero que estes exemplos tenham ajudado a entender como criar animações mais complexas utilizando JavaScript puro e bibliotecas externas.

Eventos e Animações
Neste tópico, exploraremos como os eventos do DOM podem ser usados para disparar ou controlar animações. Isso torna as animações muito mais dinâmicas e interativas.

HTML
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Triggered Animation</title>
  <style>
    #eventBox {
      width: 50px;
      height: 50px;
      background-color: red;
      position: absolute;
      top: 50%;
      left: 50%;
    }
  </style>
</head>
<body>
  <div id="eventBox"></div>
</body>
</html>
JavaScript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
const eventBox = document.getElementById('eventBox');
 
eventBox.addEventListener('click', function() {
  let position = 0;
 
  function moveBox() {
    position += 10;
    eventBox.style.left = position + 'px';
 
    if (position < 300) {
      requestAnimationFrame(moveBox);
    }
  }
 
  requestAnimationFrame(moveBox);
});
Neste exemplo, quando você clica na caixa, ela começa a se mover para a direita. Isso demonstra como um evento de clique pode disparar uma animação.

Ao final desta aula, você deve ter uma boa compreensão de como criar animações usando JavaScript, desde animações simples até animações mais complexas com o auxílio de bibliotecas externas. Além disso, você aprendeu a tornar essas animações interativas através do uso de eventos do DOM. Pratique esses conceitos trabalhando no projeto prático para solidificar seu entendimento.

Projeto Prático: Animação Interativa com Controle por Teclado
Neste projeto, você será desafiado a criar uma animação que permite mover um box em todas as direções usando as setas do teclado. Esta é uma excelente forma de combinar animações e eventos para criar uma interação mais rica com o usuário.

HTML
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Keyboard Controlled Animation</title>
  <style>
    #box {
      width: 50px;
      height: 50px;
      background-color: red;
      position: absolute;
      top: 50%;
      left: 50%;
    }
  </style>
</head>
<body>
  <div id="box"></div>
</body>
</html>
JavaScript
1
2
3
4
5
6
7
8
javascript
const box = document.getElementById('box');
let positionX = 50;
let positionY = 50;
 
document.addEventListener('keydown', function(event) {
  // implementar animação
});
Neste exemplo, utilizamos o evento de keydown para detectar quando uma das teclas de seta é pressionada. Quando isso ocorre, o box se move na direção correspondente.

Este projeto prático deve ajudar você a entender como criar animações interativas usando JavaScript e eventos do DOM. Isso não apenas torna suas páginas web mais dinâmicas, mas também oferece uma excelente prática para entender como eventos e animações podem trabalhar juntos. */