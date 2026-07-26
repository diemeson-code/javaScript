/*
O que é DOM e como funciona
Lição Progress
0% Concluído

Olá e bem-vindo à próxima fase da nossa jornada pelo JavaScript! Hoje, vamos explorar o Document Object Model,
 ou simplesmente DOM.


O DOM é como uma representação em árvore da estrutura da página da web. Ele transforma cada parte da
 página em objetos, permitindo que o JavaScript manipule e modifique esses objetos para refletir mudanças 
 no navegador. Com isso, você pode fazer páginas interativas e dinâmicas que respondem às ações do usuário.

Nesta aula, iremos entender a definição do DOM, sua estrutura hierárquica, e como ele se relaciona
 com o JavaScript. Esta compreensão é a base para a manipulação de elementos HTML.

Estrutura Hierárquica do DOM
O DOM pode ser visualizado como uma árvore com diferentes “galhos” e “nós”. No topo, temos o objeto
 Document, que representa toda a página. A partir daí, o DOM se ramifica em vários elementos, como tags HTML, atributos, textos e comentários.

Elementos HTML: Cada tag HTML é representada como um nó na árvore. Por exemplo, a tag <body> é 
um nó, assim como todas as tags dentro dela, como <div>, <p>, <img>, etc.

Atributos e Textos: Os atributos das tags HTML e os textos também são representados como nós.
 Se você tiver um elemento como:

1
<a href="link.html">Clique aqui</a>
O atributo href e o texto “Clique aqui” são nós separados na árvore.

Relações Parentais e Filiais: O DOM organiza esses nós em uma estrutura hierárquica, onde cada nó pode ter
 nós “pais”, “filhos” e “irmãos”. Um nó pai contém nós filhos, e os nós no mesmo nível são irmãos entre si.

A compreensão dessa estrutura é crucial para a manipulação de elementos HTML com JavaScript, já que é através 
dessa hierarquia que você navega e faz alterações no conteúdo da página.

Exemplo de navegação e manipulação do DOM usando JavaScript:

1
2
3
var bodyElement = document.body; // Acessando o elemento <body>
var firstDiv = bodyElement.children[0]; // Acessando o primeiro filho do <body>
firstDiv.innerHTML = "Novo conteúdo"; // Alterando o conteúdo do primeiro <div>
Em resumo, a árvore do DOM é uma representação viva e dinâmica da página, onde tudo, desde tags a textos, é
 acessível e modificável via JavaScript. Na próxima aula, exploraremos como selecionar e manipular esses 
 elementos com JavaScript.

O DOM e JavaScript
O DOM (Document Object Model) é uma representação estruturada de um documento HTML ou XML. Ele cria uma 
árvore de nós, onde cada nó representa uma parte do documento, como elementos, atributos e texto. 
O JavaScript pode interagir com o DOM, o que permite a manipulação de páginas web de maneira dinâmica.

1. A Relação Entre o DOM e JavaScript:

O JavaScript acessa o DOM por meio de uma interface que o navegador fornece. Essa interface permite que o 
JavaScript leia e manipule o conteúdo da página, crie respostas a eventos e muito mais.

2. Acessando o DOM com JavaScript:

O JavaScript pode acessar qualquer parte da árvore do DOM. Isso significa que você pode ler qualquer parte do 
conteúdo da página, alterá-lo, adicionar novos elementos, ou mesmo alterar os estilos CSS.

3. Exemplo Simples:

Suponha que você tenha o seguinte HTML:

<! DOCTYPE html>
<html>
<head>
    <title>Exemplo DOM</title>
</head>
<body>
    <h1 id="titulo">Bem-vindo ao DOM</h1>
    <script src="script.js"></script>
</body>
</html>

E no arquivo script.js, você tem o seguinte JavaScript:

1
2
var titulo = document.getElementById("titulo");
console.log(titulo.innerHTML); // Saída: Bem-vindo ao DOM
Neste exemplo, o JavaScript está acessando o elemento <h1> pelo seu ID e, em seguida, lendo o conteúdo desse 
elemento. Isso é apenas a ponta do iceberg em termos do que o JavaScript pode fazer com o DOM, mas serve para 
ilustrar a relação básica entre os dois.

Conclusão
O DOM é uma parte fundamental da web moderna, permitindo a criação de páginas web interativas e dinâmicas. 
Ele atua como uma ponte entre o conteúdo HTML e a linguagem de programação JavaScript, possibilitando a 
leitura e manipulação do conteúdo de uma página.

Nesta aula, exploramos a estrutura hierárquica do DOM e como ele se relaciona com o JavaScript. Esses 
conceitos são a base para muitas das funcionalidades interativas que encontramos nos sites de hoje.

Nas próximas, iremos abordar técnicas específicas para selecionar, modificar e interagir com elementos do 
DOM usando JavaScript. e transformar páginas html/css estáticas em páginas dinâmicas e interativas.

Vejo você na próxima aula.
 */

