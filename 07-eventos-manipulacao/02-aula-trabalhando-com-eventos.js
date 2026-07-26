/*Trabalhando com eventos: clique, mouse, teclado, etc.
Lição Progress
100% Concluído

Olá! Hoje, vamos explorar mais profundamente o mundo dos eventos em JavaScript. Eventos são fundamentais para tornar nossas páginas web interativas, e nesta aula, vamos abordar alguns dos tipos mais comuns de eventos que você encontrará.

Introdução ao Código HTML Único
Para que possamos nos concentrar nos conceitos de eventos, prepararei um único arquivo HTML que servirá de base para todos os exemplos práticos desta aula. Vamos usar esse arquivo para entender como trabalhar com eventos de clique, mouse e teclado em JavaScript.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos em JavaScript</title>
</head>
<body>
    <button id="clickButton">Clique em mim!</button>
    <div id="mouseArea" style="width:200px; height:100px; border:1px solid black;">Passe o mouse aqui!</div>
    <input id="textInput" type="text" placeholder="Digite algo...">
    <script src="script.js"></script>
</body>
</html>
Esse HTML simples possui um botão, uma área para demonstração de eventos do mouse, e um campo de entrada de texto. Vamos usar esses elementos para explorar como os eventos podem ser manipulados em JavaScript.

Preparado? então bora começar!

Eventos de Clique
Introdução aos Eventos de Clique
Os eventos de clique são provavelmente os mais conhecidos e utilizados na programação web. Eles nos permitem detectar quando um usuário clica em um elemento, como um botão ou uma imagem, e então executar alguma ação em resposta.

O JavaScript oferece uma maneira simples e direta de lidar com eventos de clique. Vamos explorar isso com exemplos práticos.

Exemplos Práticos com Código HTML e JavaScript
Primeiro, vamos ver como você pode criar um simples evento de clique que aciona uma ação ao clicar no botão que temos em nosso código HTML.

JavaScript:


document.getElementById('clickButton').addEventListener('click', function() {
  alert('Você clicou em mim!');
});
Neste exemplo, usamos o método addEventListener para ouvir o evento de clique no elemento com o ID “clickButton”. Quando esse botão é clicado, a função anônima é chamada, e a mensagem “Você clicou em mim!” é exibida em um alerta.

Você pode expandir essa lógica para realizar várias ações, como abrir uma nova página, alterar o conteúdo da página, ou enviar dados para um servidor. O importante é entender que o evento de clique serve como um ponto de entrada para essas ações.

Vamos agora ver outro exemplo, onde mudaremos o conteúdo de um elemento quando o botão for clicado.

JavaScript:


document.getElementById('clickButton').addEventListener('click', function() {
  document.getElementById('mouseArea').textContent = 'O botão foi clicado!';
});
Aqui, em vez de mostrar um alerta, alteramos o texto da área designada “mouseArea” para “O botão foi clicado!”.

Esses exemplos mostram a versatilidade e a importância dos eventos de clique em JavaScript. Você pode explorar ainda mais, criando eventos de clique mais complexos, combinando-os com outros eventos e manipulando o DOM de maneiras criativas.

Eventos de Mouse
Introdução aos Eventos de Mouse
Além dos eventos de clique, existem outros eventos relacionados ao mouse que podem ser extremamente úteis em várias situações. Esses incluem eventos como “mouseover”, “mouseout”, “mousemove”, e “mousedown”, cada um oferecendo uma forma de interação com o usuário.

Esses eventos nos permitem detectar e responder a várias ações do mouse, como mover o cursor sobre um elemento, sair de um elemento, pressionar e soltar o botão do mouse.

Exemplos Práticos com Código HTML e JavaScript
Mouseover e Mouseout
Vamos começar com os eventos “mouseover” e “mouseout”, que são acionados quando o cursor entra e sai de um elemento, respectivamente.

JavaScript:


document.getElementById('mouseArea').addEventListener('mouseover', function() {
  this.textContent = 'O mouse está sobre mim!';
});
 
document.getElementById('mouseArea').addEventListener('mouseout', function() {
  this.textContent = 'O mouse saiu de mim!';
});
Neste exemplo, alteramos o texto do elemento “mouseArea” quando o mouse passa sobre ele e o retorna ao estado original quando o mouse sai.

Mousedown e Mouseup
Outros dois eventos úteis são “mousedown” e “mouseup”, que detectam quando o botão do mouse é pressionado e liberado, respectivamente.

JavaScript:


document.getElementById('mouseArea').addEventListener('mousedown', function() {
  this.textContent = 'Botão do mouse pressionado!';
});
 
document.getElementById('mouseArea').addEventListener('mouseup', function() {
  this.textContent = 'Botão do mouse liberado!';
});
Estes eventos podem ser usados para criar efeitos de feedback visuais, como mudanças de cor ou forma, ou para controlar funcionalidades mais complexas, como arrastar e soltar.

Mousemove
O evento “mousemove” é acionado sempre que o mouse se move sobre o elemento em questão. Isso pode ser útil para monitorar a posição do mouse ou criar efeitos interativos.

JavaScript:

document.getElementById('mouseArea').addEventListener('mousemove', function(e) {
  this.textContent = `Posição do mouse: X=${e.clientX}, Y=${e.clientY}`;
});
Aqui, estamos mostrando a posição do cursor do mouse em relação à janela do navegador.

Os eventos do mouse oferecem uma rica camada de interatividade e feedback visual para os usuários. Combinando esses eventos, você pode criar uma experiência de usuário dinâmica e envolvente.

Eventos de Teclado
Introdução aos Eventos de Teclado
Eventos de teclado fornecem uma maneira de interagir com o usuário através das teclas do teclado. Eles são cruciais para a acessibilidade e oferecem uma forma alternativa de navegação e interação com a página. Os eventos de teclado mais comuns são “keydown”, “keyup”, e “keypress”.

Exemplos Práticos com Código HTML e JavaScript
Keydown e Keyup
Os eventos “keydown” e “keyup” são disparados quando uma tecla é pressionada e liberada, respectivamente. Esses eventos são úteis para detectar quando uma tecla específica foi pressionada.

JavaScript:


document.getElementById('textArea').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    alert('Você pressionou a tecla Enter!');
  }
});
 
document.getElementById('textArea').addEventListener('keyup', function() {
  console.log('Uma tecla foi liberada');
});
No exemplo acima, detectamos quando a tecla Enter foi pressionada dentro de uma área de texto, e também registramos um log no console cada vez que uma tecla é liberada.

Keypress
O evento “keypress” é semelhante ao “keydown”, mas é disparado apenas para teclas que produzem um caractere, como letras, números e símbolos.

JavaScript:

1
2
3
document.getElementById('textArea').addEventListener('keypress', function(e) {
  console.log(`Tecla pressionada: ${e.key}`);
});
Neste exemplo, estamos registrando qual tecla característica foi pressionada dentro de uma área de texto.

Os eventos de teclado oferecem oportunidades incríveis para melhorar a acessibilidade e a experiência do usuário em seu site ou aplicação. Seja para criar atalhos de teclado, validar entradas em tempo real, ou fornecer feedback dinâmico, a manipulação de eventos de teclado é uma habilidade essencial para qualquer desenvolvedor front-end moderno.

Eventos de Formulário
Introdução aos Eventos de Formulário
Formulários são uma parte essencial da web, permitindo que os usuários insiram informações, façam seleções e interajam com aplicações online. Acompanhar e responder a essas interações é fundamental para uma experiência de usuário suave e acessível. Nesta seção, vamos explorar alguns dos eventos que ocorrem em formulários, como “submit”, “focus” e “blur”.

mas antes aqui tem um código de HTML que eu criei para que possamos focar apenas no javascript:


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Contato</title>
</head>
<body>ex2.html
 
    <form id="form">
        <label for="name">Nome:</label>
        <input type="text" id="name" required>
 
        <label for="email">Email:</label>
        <input type="email" id="email" required>
 
        <button type="submit">Enviar</button>
    </form>
    <script src="script.js"></script>
</body>
</html>
Exemplos Práticos de Como Esses Eventos Podem Ser Utilizados em Uma Aplicação Real
Evento Submit
O evento “submit” é acionado quando um formulário é enviado. É comumente usado para validar dados do formulário antes de enviá-los ao servidor.

JavaScript:


document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault(); // Impedir o envio padrão
 
  var name = document.getElementById('name').value;
 
  if (name.length < 3) {
    alert('O nome deve ter pelo menos 3 caracteres.');
    return;
  }
 
  // Continuar com o envio dos dados
});
Neste exemplo, nós prevenimos o envio padrão do formulário e realizamos uma validação simples no campo de nome.

Eventos Focus e Blur
Os eventos “focus” e “blur” são disparados quando um elemento do formulário ganha ou perde o foco, respectivamente. Esses eventos são úteis para fornecer feedback visual ao usuário ou para realizar ações específicas quando um campo é selecionado.

JavaScript:


document.getElementById('email').addEventListener('focus', function() {
  console.log('Campo de e-mail focado');
});
 
document.getElementById('email').addEventListener('blur', function() {
  console.log('Campo de e-mail perdeu o foco');
});
Nesse exemplo, estamos registrando um log no console quando o campo de e-mail ganha ou perde o foco. Isso poderia ser expandido para fornecer dicas de preenchimento, validação em tempo real, ou outras interações úteis.

Os eventos de formulário, quando combinados com os eventos de clique e teclado que já exploramos, fornecem uma ampla gama de oportunidades para criar interações ricas e acessíveis com os usuários. Saber como trabalhar com esses eventos é fundamental para o desenvolvimento moderno de aplicações web.

Boas Práticas ao Trabalhar com Eventos
Ao trabalhar com eventos em JavaScript, é essencial manter a clareza e eficiência do seu código. Vamos explorar algumas práticas recomendadas:

Usar Event Listeners: Evite a atribuição de eventos diretamente nos elementos HTML. Utilize addEventListener para uma maior flexibilidade e controle.
Evitar Eventos Globais: Os eventos globais podem levar a colisões e problemas de desempenho. Sempre atribua eventos a elementos específicos quando possível.
Desacoplar Funções de Eventos: Mantenha suas funções de manipulação de eventos separadas e reutilizáveis, em vez de incluí-las diretamente no addEventListener.
Remover Ouvintes de Eventos quando Necessário: Isso pode ajudar a prevenir vazamentos de memória, especialmente em aplicações complexas.
Estas são apenas algumas das boas práticas que podem ajudar a melhorar a qualidade do seu código. Ao seguir esses princípios, você poderá criar códigos mais eficientes, legíveis e manuteníveis.

Conclusão
Nesta aula, você explorou os diferentes tipos de eventos em JavaScript, incluindo eventos de clique, teclado e formulário. Você aprendeu como esses eventos podem ser usados em uma aplicação real e discutimos algumas boas práticas para considerar ao trabalhar com eles.

Na próxima aula, vamos aprofundar no tópico de Delegação de Eventos e Bubbling, que são conceitos cruciais para a manipulação de eventos eficiente em aplicações JavaScript. Fique à vontade para revisar o material e experimentar os exemplos e exercícios fornecidos. A prática é fundamental para dominar esses conceitos, então não deixe de colocar suas novas habilidades em ação!

Desafio: Eventos na Prática
Objetivo
O seu desafio é criar uma pequena aplicação que utilize diferentes tipos de eventos, como clique, teclado, e formulário. Você receberá o código HTML, e o seu trabalho é implementar o JavaScript correspondente.
/*</body>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Desafio de Eventos</title>
</head>
<body>
  <button id="clickButton">Clique em Mim!</button>
  <input type="text" id="textInput" placeholder="Digite algo aqui...">
  <form id="myForm">
    <label for="name">Nome:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <button type="submit">Enviar</button>
  </form>
  <div id="output"></div>
</body>
</html>

/</input>/ Requisitos
Evento de Clique: Quando o botão “Clique em Mim!” for clicado, exiba uma mensagem no console.
Evento de Teclado: Quando algo for digitado no campo de texto, atualize a div com id “output” com o texto digitado.
Evento de Formulário: Adicione validação e eventos de submit para o formulário. Quando o formulário for enviado, exiba uma mensagem de sucesso ou falha, dependendo da validação.
Dicas
Utilize addEventListener para trabalhar com os eventos.
Lembre-se das boas práticas discutidas na aula.*/
