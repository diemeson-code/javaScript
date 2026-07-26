
/**Na última aula, exploramos diferentes eventos e como eles podem ser usados em JavaScript. Hoje, vamos mergulhar em dois conceitos avançados que são fundamentais para entender como os eventos funcionam no DOM: Delegação de Eventos e Bubbling. Ambos são importantes para escrever código eficiente e manutenível, e ao longo desta aula, você aprenderá como aplicá-los em seu próprio código.

Delegação de Eventos:
A Delegação de Eventos é uma técnica poderosa e eficiente que permite escutar eventos em um elemento pai, em vez de adicionar ouvintes de eventos a cada elemento filho individualmente. Essa técnica pode economizar memória e melhorar o desempenho.

O que é Delegação de Eventos?
Ao trabalhar com um grande número de elementos que têm o mesmo comportamento de evento, como uma lista de itens clicáveis, em vez de adicionar um ouvinte de evento a cada um deles, você pode adicionar um único ouvinte ao elemento pai. Quando um evento é disparado em um elemento filho, ele borbulha até o elemento pai, onde o ouvinte de eventos está localizado.

Exemplo de Delegação de Eventos:
Imagine que você tenha uma lista de itens e queira adicionar uma funcionalidade de clique a cada um. Em vez de adicionar um ouvinte de evento a cada item, você pode adicionar um único ouvinte ao elemento pai (a lista) e usar o objeto de evento para determinar qual item foi clicado.

HTML:


<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
JavaScript:


document.querySelector('#myList').addEventListener('click', function(event) {
  alert('Você clicou em: ' + event.target.innerHTML);
});
Nesse exemplo, o evento de clique é anexado ao elemento <ul>, e o objeto de evento é usado para determinar qual <li> foi clicado.

Vantagens da Delegação de Eventos:
Economia de Memória: Em vez de adicionar muitos ouvintes, você adiciona apenas um, economizando memória.
Código Mais Limpo: Reduz a duplicação do código, tornando-o mais fácil de manter.
Futuros Elementos: Se você adicionar mais elementos filhos depois, eles automaticamente herdam o comportamento do ouvinte de eventos sem a necessidade de adicionar ouvintes individuais.
Bubbling (Borbolhamento):
Bubbling, ou borbulhamento, é um conceito importante para entender ao trabalhar com eventos em JavaScript. Ele se refere ao processo pelo qual um evento se propaga através dos elementos aninhados, indo do elemento que disparou o evento até o elemento raiz do documento.

Como Funciona o Bubbling?
Quando um evento é disparado em um elemento, ele primeiro executa os manipuladores de eventos do próprio elemento (se houver algum) e então move-se para cima na árvore do DOM, executando qualquer manipulador de eventos nos elementos ancestrais.

Exemplo de Bubbling:
Vamos usar o mesmo exemplo da lista anterior para demonstrar o bubbling.

HTML:


<div id="parent">
  <ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</div>
JavaScript:

document.getElementById('parent').addEventListener('click', function() {
  alert('Evento borbulhou até o elemento pai!');
});
 
document.getElementById('myList').addEventListener('click', function(event) {
  alert('Você clicou em: ' + event.target.innerHTML);
});
Nesse exemplo, quando você clica em um item da lista, primeiro o evento é manipulado no nível do <li> (onde foi disparado), e então borbulha até o <ul> e finalmente até o <div> pai. Isso permite que ambos os manipuladores de eventos sejam chamados.

Controlando o Bubbling:
Às vezes, você pode não querer que o evento borbulhe até os elementos ancestrais. Para isso, você pode usar o método stopPropagation do objeto de evento.

1
event.stopPropagation();
Conclusão:
Nesta aula, exploramos os conceitos de Delegação de Eventos e Bubbling.

Este é o final do nosso módulo sobre Eventos e Manipulação de Eventos. Não se esqueça de praticar através dos exercícios fornecidos! e vejo você no próximo módulo.

Exercício 1: Delegação de Eventos
Utilize o código HTML abaixo e implemente o JavaScript necessário para que, quando o usuário clicar em qualquer item da lista, um alerta seja exibido com o texto do item clicado.


<div id="parentDiv">
  <ul id="itemList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</div>
Exercício 2: Controlando o Bubbling
Usando o mesmo HTML do Exercício 1, adicione um segundo manipulador de eventos para o elemento parentDiv. Implemente o JavaScript para que o evento não borbulhe até o parentDiv quando qualquer item da lista for clicado.

Exercício 3: Desafio – Clique e Altere
Utilizando o código HTML abaixo, escreva o JavaScript necessário para alterar o texto dentro da div com id “displayText” para o valor inserido no campo de texto quando o botão “Alterar Texto” for clicado.


<div id="textChanger">
  <input type="text" id="newText" placeholder="Digite o novo texto aqui">
  <button id="changeButton">Alterar Texto</button>
  <div id="displayText">Texto a ser alterado</div>
</div>
Esses exercícios combinam os conceitos de delegação de eventos, controle de bubbling, e manipulação de elementos do DOM. Ao trabalhar através deles, você terá a oportunidade de aplicar o que aprendeu e ganhar uma compreensão mais profunda desses importantes aspectos do JavaScript.

 */