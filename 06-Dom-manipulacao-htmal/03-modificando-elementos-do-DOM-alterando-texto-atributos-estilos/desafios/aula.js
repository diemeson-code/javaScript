/**Na aula anterior, exploramos os métodos de seleção de elementos no DOM, tanto modernos quanto tradicionais. Agora que você sabe como acessar esses elementos, estamos prontos para dar o próximo passo.

Nesta aula, vamos nos concentrar na modificação de elementos do DOM. Isso inclui alterar o texto e o conteúdo de um elemento, modificar seus atributos e estilos e adicionar ou remover elementos dentro do documento HTML. Essas ações permitem que você crie interfaces dinâmicas e responsivas, que podem reagir ao comportamento do usuário na página tornando suas páginas web verdadeiramente interativas.

Então, sem mais delongas, bora começar!

Modificação de Texto e Conteúdo
A manipulação de texto e conteúdo em elementos HTML é uma parte fundamental da programação em JavaScript para a web. Permite que você atualize o conteúdo de uma página sem a necessidade de recarregá-la, criando uma experiência de usuário mais fluida e dinâmica.

Vamos examinar alguns métodos importantes para essa finalidade:

mas antes vamos criar um código html para nossa página: 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Modificação de Texto e Conteúdo</title>
</head>
<body>
    <div id="container">
        <button id="changeAttributeButton">Alterar Imagem</button>
        <button id="changeStyleButton">Alterar Estilo</button>
        <img id="image" src="imagem.jpg">
        <p id="paragraph">Este é um parágrafo de exemplo que será modificado.</p>
        <input type="text" id="inputText" placeholder="Digite o novo texto aqui">
        <button id="changeTextButton">Alterar Texto</button>
        <button id="addButton">Adicionar Parágrafo</button>
        <button id="removeButton">Remover Parágrafo</button>
    </div>
</body>
</html>


1. Alterando o Texto com .innerText:

O método .innerText permite que você obtenha ou defina o conteúdo de texto de um elemento. É útil quando você deseja manipular apenas o texto visível.

document.querySelector('#changeTextButton').addEventListener('click', function() {
    let novoTexto = document.querySelector('#inputText').value;
    let elemento = document.querySelector('#paragraph');
    elemento.innerText = novoTexto;
});


No exemplo acima, o texto dentro da primeira tag <p> encontrada será substituído pelo texto digitado no input text.

2. Modificando o Conteúdo HTML com .innerHTML:

Se você precisar manipular o conteúdo HTML dentro de um elemento, pode usar o método .innerHTML. Ele permite que você insira ou recupere HTML, não apenas texto.


document.querySelector('#changeTextButton').addEventListener('click', function() {
    let novoTexto = document.querySelector('#inputText').value;
    let elemento = document.querySelector('#paragraph');
    elemento.innerHTML = `<strong>${novoTexto}</strong>`;
});

Nesse caso, um novo parágrafo será inserido dentro da primeira tag <div> encontrada.

Lembre-se de que, ao usar o .innerHTML, você deve ter cuidado para não inserir código malicioso, pois ele interpreta a string como HTML. Em cenários onde o conteúdo vem de fontes não confiáveis, o uso de .innerText pode ser mais seguro.

Esses métodos oferecem controle poderoso sobre o conteúdo de uma página, e você os encontrará em uso frequente ao trabalhar com JavaScript no desenvolvimento web.

Alteração de Atributos e Estilos
Manipular atributos e estilos é uma parte essencial de trabalhar com o DOM. Vamos ver como podemos fazer isso de maneira eficiente e segura.

Alterando Atributos
Atributos como id, class, src, etc., podem ser facilmente alterados usando o método setAttribute. Aqui está um exemplo:


document.querySelector('#changeAttributeButton').addEventListener('click', function() {
    let imagem = document.querySelector('#image');
    imagem.setAttribute('src', 'nova-imagem.jpg');
});

Neste exemplo, ao clicar no botão com o id changeAttributeButton, a imagem cujo id é image terá seu atributo src alterado para “nova-imagem.jpg”.

Alterando Estilos
Os estilos CSS de um elemento podem ser modificados diretamente através do JavaScript. Vejamos como alterar o estilo do parágrafo quando o usuário clicar em um botão:


document.querySelector('#changeStyleButton').addEventListener('click', function() {
    let paragrafo = document.querySelector('#paragraph');
    paragrafo.style.color = 'blue';
    paragrafo.style.fontSize = '20px';
});
Neste exemplo, o texto do parágrafo com id paragraph será alterado para a cor azul e o tamanho da fonte será definido como 20 pixels.

Boas Práticas
Ao trabalhar com atributos e estilos, é importante manter algumas boas práticas em mente:

Sempre valide e limpe qualquer entrada do usuário que possa ser usada para modificar atributos ou estilos.
Ao modificar muitos estilos, considere usar classes CSS e alternar essas classes através do JavaScript. Isso mantém seu código JavaScript mais limpo e aproveita o poder do CSS.
Adicionar e Remover Elementos do DOM
Em aplicações web interativas, é comum precisar adicionar ou remover elementos do DOM. Vamos entender como isso é feito.

Adicionando Elementos
Podemos criar um novo elemento e adicioná-lo ao DOM usando os métodos createElement e appendChild. Vamos adicionar um novo parágrafo ao clicar em um botão:


document.querySelector('#addButton').addEventListener('click', function() {
    let novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = 'Novo Parágrafo Adicionado!';
    document.body.appendChild(novoParagrafo);
});
Neste exemplo, ao clicar no botão com o id addButton, um novo parágrafo é criado e adicionado ao final do body do documento.

Removendo Elementos
Da mesma forma, podemos remover elementos do DOM usando o método remove. Vejamos como remover o parágrafo recém-criado:


document.querySelector('#removeButton').addEventListener('click', function() {
    let paragrafo = document.querySelector('p');
    if(paragrafo) {
        paragrafo.remove();
    }
});
Ao clicar no botão com o id removeButton, o primeiro parágrafo do documento será removido.

Boas Práticas e Possíveis Armadilhas
Trabalhar com o DOM é poderoso, mas vem com suas próprias considerações. Aqui estão algumas boas práticas e armadilhas a serem observadas:

Manipulação Direta com Cuidado: Modificar o DOM diretamente pode ser lento se feito sem cuidado. É aconselhável minimizar as mudanças no DOM e utilizar métodos eficientes.
Evitar innerHTML com Conteúdo Dinâmico: Utilizar innerHTML com conteúdo dinâmico pode abrir vulnerabilidades de segurança como a injeção de script. Prefira usar textContent ou criar elementos através do createElement.
Verificar a Existência de Elementos: Antes de tentar modificar um elemento, é sensato verificar se ele realmente existe. Isso evita erros e exceções indesejadas.
Manter o Código Organizado: Ao adicionar e remover elementos, é fácil ter um código confuso. Mantenha a estrutura do código clara e bem documentada.
Conclusão
Nesta aula, exploramos métodos essenciais para manipular o DOM, desde a alteração de texto, atributos e estilos, até a adição e remoção de elementos. Vimos como essas técnicas nos permitem criar interfaces interativas e dinâmicas.

Através dos exemplos e práticas modernas, você deve agora estar equipado com as ferramentas necessárias para levar suas habilidades em JavaScript para o próximo nível. Na próxima aula, continuaremos a explorar mais técnicas avançadas, tornando suas aplicações web ainda mais robustas e eficientes.

Nessa aula eu não deixei exercícios aqui embaixo, mas sim um projeto, com as habilidades aprendidas nessa aula você deve ser capaz de criar uma To-Do-List simples. então tente implementar esse desafio e vejo você na próxima aula.

Exercícios Práticos: Criando uma To-Do List
Abaixo, você encontrará o HTML para uma simples To-Do List. Sua tarefa é escrever o JavaScript necessário para implementar a funcionalidade, incluindo adicionar itens, remover itens e modificar atributos.


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
</head>
<body>
    <h1>To-Do List</h1>
    <input type="text" id="newItem" placeholder="Novo Item">
    <button id="addItemButton">Adicionar Item</button>
    <button id="removeItemButton">Remover Último Item</button>
    <button id="changeColorButton">Alterar Cor dos Itens</button>
    <ul id="itemList"></ul>
</body>
</html>
Adicionar Itens: Escreva o JavaScript necessário para adicionar um novo item à lista, lendo o texto do campo de entrada, ao clicar no botão “Adicionar Item.”
Remover Último Item: Implemente a funcionalidade para remover o último item da lista ao clicar no botão “Remover Último Item.”
Alterar Cor dos Itens: Escreva o código para alterar a cor do texto de todos os itens da lista ao clicar no botão “Alterar Cor dos Itens.”
Bônus: Como um desafio extra, você pode tentar adicionar mais funcionalidades, como a capacidade de marcar itens como concluídos, editar itens, ou qualquer outra característica que você considere interessante.
Utilize os conceitos aprendidos nesta aula para criar a To-Do List e explore as possibilidades. A prática é uma excelente forma de consolidar seus conhecimentos e habilidades. Boa sorte!





*/

