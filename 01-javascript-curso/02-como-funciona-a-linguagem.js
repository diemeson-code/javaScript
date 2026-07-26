/*Olá novamente, Hoje vamos falar sobre “Como funciona a linguagem JavaScript”.
Na aula passada, aprendemos o que é JavaScript e por que é uma linguagem tão importante para aprender.
Agora, vamos um passo adiante e entender como essa linguagem realmente funciona.
Parece interessante? Então bora começar!

Para entender como o JavaScript funciona, precisamos entender onde e como ele é executado.
Então, você pode estar se perguntando: “Onde exatamente o JavaScript é executado?” Bem, a resposta
mais comum é em um navegador da web, como Google Chrome, Firefox ou Safari. Estes navegadores têm algo
chamado de “Motor JavaScript”, que é responsável por executar o código JavaScript.

Mas a história não para por aí. Há também algo chamado Node.js, que é um ambiente de execução
JavaScript fora do navegador. Com o Node.js, podemos usar o JavaScript para construir todos os
tipos de aplicações, desde aplicações web até ferramentas de linha de comando e até mesmo aplicações 
para dispositivos móveis!

Agora, vamos voltar um pouco e falar sobre a sintaxe do JavaScript. Lembra quando mencionamos que 
o JavaScript é uma linguagem de programação dinamicamente tipada? Isso significa que você não precisa 
dizer ao JavaScript qual o tipo de dado uma variável é; ele vai descobrir isso sozinho.

Vamos ver um exemplo simples:let mensagem = “Olá, Mundo!”; console.log(mensagem);

Neste exemplo, declaramos uma variável chamada mensagem e atribuímos a ela a string “Olá, Mundo!”.
Em seguida, usamos o console.log() para exibir o valor da variável no console.

Veja, nós não precisamos dizer ao JavaScript que mensagem era uma string. Ele descobriu isso por 
conta própria quando atribuímos o valor à variável. Isso é parte do que torna o JavaScript tão flexível 
e fácil de usar, especialmente para iniciantes.

Bom, por agora, é isso. Hoje, demos uma olhada em como o JavaScript é executado em um navegador e no
Node.js, e começamos a tocar na sintaxe da linguagem. Na próxima aula, vamos começar a entrar em mais
detalhes sobre a sintaxe do JavaScript e algumas de suas características únicas.

Mas, antes de irmos, temos um pequeno quiz para você. Isso vai ajudar a solidificar o que você aprendeu
hoje. Não se preocupe, é apenas para ajudar você a reforçar o que aprendeu. então responde ele e eu
espero você na próxima aula. */

/*let x = 10;
x = "texto";
x = true;
console.log("5" - 1); // 4
console.log("5" + 1); // "51"*/

let a = "10";
let b = 2;

console.log(typeof (a * b));



console.log(typeof null);

/* Correção mental:
null = ausência intencional de valor
NÃO é objeto de verdade */

let x;
console.log(x);

// let a;
// let b = null;

// console.log(a); // undefined
// console.log(b); // null

console.log("5" + 2 * 3);