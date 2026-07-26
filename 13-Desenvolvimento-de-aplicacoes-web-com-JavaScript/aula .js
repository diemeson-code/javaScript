/**Bem-vindos à primeira aula do nosso novo módulo, “Desenvolvimento de aplicações web com JavaScript”! Hoje, vamos focar em um aspecto crucial do desenvolvimento web: a criação de páginas dinâmicas. Mas o que isso significa? Enquanto páginas estáticas exibem conteúdo fixo e inalterado para todos os usuários, as páginas dinâmicas podem ser personalizadas e atualizadas em tempo real, oferecendo uma experiência muito mais interativa e envolvente para o usuário.

Aqui entra o JavaScript, uma das linguagens de programação mais usadas no mundo. Com ele, você pode manipular o HTML e o CSS diretamente, atualizando conteúdo, estilos e até mesmo a estrutura de uma página sem necessidade de recarregá-la. Você pode fazer coisas simples, como mostrar ou ocultar um elemento HTML, até tarefas mais complexas, como buscar dados em um servidor web e criar conteúdo dinamicamente.

E se você lembra do nosso Módulo 6, já tivemos uma introdução sobre como o JavaScript pode interagir com o DOM (Modelo de Objeto de Documento) para fazer essas mágicas acontecerem. Agora, vamos mergulhar mais fundo, aplicando esses conceitos em cenários do mundo real.

Nesta aula de reforço, é importante lembrarmos como o JavaScript nos permite manipular elementos HTML através do DOM. Você pode selecionar elementos usando métodos como getElementById, getElementsByClassName, ou querySelector. Uma vez que você tem uma referência a um elemento, é possível alterar seu conteúdo com propriedades como innerHTML ou textContent.

Código HTML Único 

Código HTML Único
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
<!DOCTYPE html>
<html>
<head>
  <title>Exemplo de Página Dinâmica</title>
</head>
<body>
 
  <!-- Para manipulação de elementos HTML -->
  <div id="myElement">Conteúdo original</div>
 
  <!-- Para manipulação de estilos CSS -->
  <div id="styledElement" style="background-color: red;">Elemento com estilo</div>
 
  <!-- Para manipulação de eventos -->
  <button id="myButton">Clique-me!</button>
 
  <!-- Para interação com formulários -->
  <form id="myForm">
    <input type="text" id="myInput" placeholder="Digite algo aqui">
    <button type="button" id="submitButton">Enviar</button>
  </form>
 
</body>
</html>
Manipulação de Elementos HTML com JavaScript
Selecionar elementos no DOM: Você pode usar querySelector para selecionar elementos.
1
const myElement = document.querySelector('#myElement');
Adicionar, remover e modificar o conteúdo de elementos: Para modificar o texto dentro de um elemento, você pode alterar a propriedade innerText ou innerHTML.
myElement.innerText = "Novo conteúdo";
Exemplos Práticos
Alterar o conteúdo do elemento com ID myElement:
1
2
3
4
document.addEventListener("DOMContentLoaded", () => {
  const myElement = document.querySelector('#myElement');
  myElement.innerText = 'Conteúdo modificado';
});
Manipulação de Estilos CSS com JavaScript
Mudar estilos de elementos HTML: Você pode diretamente manipular o estilo de um elemento através de sua propriedade style.
1
2
const styledElement = document.querySelector('#styledElement');
styledElement.style.backgroundColor = "blue";
Adicionar e remover classes CSS: Utilizando classList.add e classList.remove.
1
2
styledElement.classList.add('newClass');
styledElement.classList.remove('oldClass');
Exemplos Práticos
Alterar a cor de fundo e adicionar uma nova classe ao elemento com ID styledElement:
1
2
3
4
5
document.addEventListener("DOMContentLoaded", () => {
  const styledElement = document.querySelector('#styledElement');
  styledElement.style.backgroundColor = 'green';
  styledElement.classList.add('addedClass');
});
Manipulação de Eventos com JavaScript
Introdução a eventos como “click”, “input”, e outros: Adicionar “event listeners” a elementos.
1
2
3
4
const myButton = document.querySelector('#myButton');
myButton.addEventListener('click', function() {
  alert('Botão clicado!');
});
Exemplos Práticos
Exibir um alerta ao clicar no botão com ID myButton:
1
2
3
4
document.addEventListener("DOMContentLoaded", () => {
  const myButton = document.querySelector('#myButton');
  myButton.addEventListener('click', () => alert('Botão clicado!'));
});
Interação com Formulários
Capturar dados de formulários: Utilizar o value para obter o valor do input.
1
2
const myInput = document.querySelector('#myInput');
const inputValue = myInput.value;
Validações básicas: Verificar se o input está vazio antes de submeter.
1
2
3
if(inputValue.trim() !== '') {
  // Prossiga com a submissão
}
Exemplos Práticos
Capturar o valor do input e fazer uma validação básica:
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
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector('#submitButton');
  submitButton.addEventListener('click', () => {
    const myInput = document.querySelector('#myInput');
    if(myInput.value.trim() !== '') {
      alert(`Valor do input: ${myInput.value}`);
    } else {
      alert('O input está vazio.');
    }
  });
});
Nesta aula de reforço, revisamos os conceitos essenciais para a criação de páginas web dinâmicas usando JavaScript. Recapitulamos como manipular elementos HTML, estilizar elementos via CSS, capturar e gerenciar eventos, além de interagir com formulários. Estas são habilidades fundamentais no desenvolvimento de aplicações web modernas e serve como uma base sólida para os tópicos mais avançados que exploraremos nas próximas aulas.

E como sempre a prática é o que leva a perfeição deixei um desafio um pouco mais complexo dessa vez, quero ver como você vai se sair!

Projeto/Exercício: Calculadora Web
Objetivo:
O objetivo deste projeto é criar uma calculadora funcional usando HTML, CSS e JavaScript. Esse exercício ajudará você a praticar a manipulação do DOM, a captura de eventos e a lógica de programação.

HTML e CSS prontos
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
22
23
24
25
26
27
28
29
30
31
32
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Calculadora Web</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="calculator">
        <div id="display">0</div>
        <div id="buttons">
            <button class="num" id="0">0</button>
            <button class="num" id="1">1</button>
            <button class="num" id="2">2</button>
            <button class="num" id="3">3</button>
            <button class="num" id="4">4</button>
            <button class="num" id="5">5</button>
            <button class="num" id="6">6</button>
            <button class="num" id="7">7</button>
            <button class="num" id="8">8</button>
            <button class="num" id="9">9</button>
            <button class="op" id="add">+</button>
            <button class="op" id="sub">-</button>
            <button class="op" id="mul">*</button>
            <button class="op" id="div">/</button>
            <button id="clear">C</button>
            <button id="equals">=</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
CSS (styles.css)
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
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f5f5f5;
}
 
#calculator {
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;
    margin: auto;
    margin-top: 50px;
    background-color: #fff;
}
 
#display {
    font-size: 2em;
    padding: 20px;
    border-bottom: 1px solid #ccc;
    background-color: #f9f9f9;
    color: #333;
}
 
#buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
 
button {
    width: 100%;
    padding: 20px;
    font-size: 1.5em;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: background-color 0.3s;
}
 
button:hover {
    background-color: #ddd;
}
 
.op {
    background-color: #f1c40f;
    color: white;
}
 
.op:hover {
    background-color: #f39c12;
}
Neste exemplo, o HTML define a estrutura da calculadora e os botões necessários. O CSS fornece estilização básica para tornar a interface mais amigável.

Requisitos para a Implementação via JavaScript
Inicializar o Display: Quando a página for carregada, o display deve ser inicializado com o valor “0”.
Entrada de Números: Clicar nos botões numéricos deve atualizar o display com o número correspondente.
Operações Matemáticas: Os botões de operação (+, -, *, /) devem permitir que o usuário escolha uma operação matemática para realizar.
Executar Cálculo: O botão “=” deve executar o cálculo com base nos números e na operação selecionados, exibindo o resultado no display.
Limpar o Display: O botão “C” deve limpar o display e quaisquer dados armazenados, retornando o display ao seu estado inicial (“0”).
Cadeia de Operações: O usuário deve ser capaz de realizar uma cadeia de operações, ou seja, após pressionar “=”, deve ser possível continuar com outra operação usando o resultado anterior.
Manipulação de Erros: Tratar casos de erros como divisão por zero, exibindo uma mensagem de erro no display.
Estilo Dinâmico: (Opcional) Alterar o estilo do botão quando ele for pressionado, para fornecer feedback visual ao usuário.
Teclado: (Opcional) Permitir que o usuário também utilize o teclado para inserir números e realizar operações.
Histórico de Operações: (Opcional) Manter um registro das últimas operações realizadas e permitir que o usuário as reveja.
Esses requisitos fornecem uma visão completa das funcionalidades que o JavaScript deve implementar para tornar a calculadora totalmente operacional.
*/