/*E Finalmente chegamos a mão na massa, prometo que daqui pra frente vai ser isso, vamos ainda lidar com alguns conceitos, mas em geral é escrever muito código. então bora começar?

Imagine que você está indo ao supermercado e precisa lembrar de comprar vários itens diferentes. É provável que você precise de algum tipo de sistema para lembrar tudo. No mundo da programação, as variáveis atuam como essa lista de compras mental. Elas são essencialmente espaços na memória do computador onde armazenamos valores para uso posterior.

No JavaScript, existem três maneiras principais de declarar uma variável: var, let e const. Cada um tem suas próprias características e usos:

var: Esta é a maneira mais antiga de declarar variáveis em JavaScript. As variáveis declaradas com var são funcionalmente de escopo global ou de escopo de função.
var x = 10;

let: Introduzido no ECMAScript 6 (ES6), let permite declarar variáveis limitadas ao escopo do bloco, instrução ou expressão onde são usadas, diferentemente de var.
let y = 20;

const: Também introduzido no ES6, const é semelhante a let em termos de escopo de bloco. No entanto, const é usada para declarar constantes, ou variáveis cujos valores não podem ser alterados após a atribuição inicial.
const z = 30;

O escopo de uma variável é a parte do código onde a variável é efetivamente acessível. Temos dois tipos principais de escopo: global e local.

Escopo global: Uma variável declarada fora de qualquer função ou bloco de código tem um escopo global. Isso significa que ela é acessível de qualquer lugar do seu código.
Por exemplo:var globalVar = “Eu sou global!”; function testFunction() { console.log(globalVar); } testFunction(); // Imprime: Eu sou global!

Neste exemplo, globalVar é uma variável global porque é declarada fora da função testFunction. Podemos acessá-la tanto dentro como fora da função.

Escopo local (ou de função): Uma variável declarada dentro de uma função tem um escopo local. Ela só é acessível dentro da função em que foi declarada.
Por exemplo:function testFunction() { var localVar = “Eu sou local!”; console.log(localVar); } testFunction(); // Imprime: Eu sou local! console.log(localVar); // Erro! localVar não está definida.

Neste exemplo, localVar é uma variável local, declarada dentro da função testFunction. Ela não é acessível fora da função, portanto, a tentativa de registrá-la no console fora da função resultará em um erro.

As variáveis let e const introduzidas com o ECMAScript 6 (ES6) adicionaram o conceito de escopo de bloco no JavaScript. Uma variável declarada com let ou const dentro de um bloco de código (por exemplo, um loop for ou uma instrução if) está disponível apenas nesse bloco de código.if (true) { let x = “Olá, mundo!”; console.log(x); // Imprime: Olá, mundo! } console.log(x); // Erro! x não está definida.

Neste exemplo, x é declarada com let dentro de um bloco if. Mesmo que o bloco if seja executado (porque a condição é true), x não está disponível fora do bloco if. Assim, a tentativa de registrá-la no console fora do bloco resultará em um erro.

Essa diferenciação entre escopos global, de função e de bloco é crucial para evitar conflitos de nomes de variáveis e bugs inesperados.

Um conceito relacionado, mas às vezes confuso, é o hoisting. No JavaScript, as declarações de variáveis e funções são “içadas” para o topo do seu escopo. Porém, apenas a declaração é içada, a inicialização (se houver) não. Isso pode levar a comportamentos inesperados:console.log(myVar); // Undefined var myVar = 5; console.log(myVar); // 5

No exemplo acima, a variável myVar é declarada e inicializada depois que tentamos registrá-la no console. No entanto, devido ao hoisting, o JavaScript conhece a existência da variável myVar antes da linha de código onde ela foi declarada e inicializada. Mas, como apenas a declaração é içada, e não a inicialização, myVar é undefined quando tentamos registrá-la no console.

Ao declarar e atribuir variáveis, é crucial estar ciente dessas diferenças para evitar erros comuns. Por exemplo, usar uma variável antes de declará-la ou confundir o escopo de variáveis diferentes podem levar a bugs difíceis de rastrear.

Conclusão:
As variáveis são fundamentais na programação. Eles nos permitem armazenar valores para uso posterior e manipulá-los conforme necessário. Compreender as diferenças entre var, let e const, bem como o conceito de hoisting e o escopo de variáveis, são etapas importantes no domínio do JavaScript. e está aula fica por aqui, mas antes de ir para a próxima aula, deixei alguns exercicios aqui embaixo para você praticar e reforçar esses conceitos.

Exercício:
Exercício 1: Declarando Variáveis
Declare uma variável usando var chamada idade e atribua a ela o valor 25.
Declare uma variável usando let chamada nome e atribua a ela o valor de seu nome.
Declare uma variável usando const chamada pais e atribua a ela o nome do país onde você nasceu.
Objetivo: Familiarizar-se com a declaração de variáveis usando var, let e const.

Exercício 2: Compreendendo Escopos
Dentro de uma função chamada mostrarNome, declare uma variável let chamada sobrenome e tente acessar essa variável fora da função. O que acontece?
Declare uma variável var chamada cidade fora de qualquer função. Crie uma função chamada mostrarCidade e tente acessar e imprimir a variável cidade dentro dessa função.
Dentro de um bloco if, declare uma variável let chamada bairro. Tente acessar essa variável fora do bloco if. O que você observa?
Objetivo: Entender a diferença entre escopos global, local (ou de função) e de bloco.

Exercício 3: Hoisting
Declare uma função chamada testeHoisting e, dentro dela, tente imprimir uma variável let chamada escola antes de declará-la. O que acontece?
Ainda na função testeHoisting, declare uma variável var chamada curso após tentar imprimir no console, mas inicialize-a após o console.log. O que é exibido no console e por quê?
Declare uma função chamada exemploHoisting e, dentro dela, tente chamar uma função chamada iniciar antes de declará-la. Em seguida, declare a função iniciar depois da chamada e veja se ela é executada corretamente.
Objetivo: Entender o conceito de hoisting e como ele afeta variáveis e declarações de funções*/