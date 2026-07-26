/**Que as funções são importantes e fundamentais para um código mais limpo e reutilizável você ja sabe, mas nessa aula quero abordar uma característica fundamental das funções é a capacidade de retornar valores. Essa habilidade permite que uma função passe um valor de volta ao código que a chamou.

Retornar valores de uma função é como responder a uma pergunta. Você pergunta à função algo (chamando-a com alguns parâmetros), e ela responde (retorna um valor). Essa resposta pode ser um número, uma string, um objeto, um array ou qualquer tipo de dado em JavaScript.

bora começar?

Usando a Palavra-Chave return
A palavra-chave return em JavaScript é usada dentro de uma função para indicar o valor que essa função deve retornar ao código que a chamou. Pode-se pensar no return como uma saída da função, enviando uma resposta ao ponto do código onde a função foi invocada.

Veja o seguinte exemplo: */

function somar(a, b) {
  return a + b;
}
 
let resultado = somar(5, 10);
console.log(resultado); // Saída: 15

/**Neste caso, a função somar aceita dois parâmetros e retorna a soma deles. O valor retornado é então armazenado na variável resultado.

Retornar Diferentes Tipos de Dados
Você pode retornar qualquer tipo de dado em JavaScript, incluindo objetos, arrays, funções e até mesmo outras funções. Veja alguns exemplos: */

function criarObjeto() {
  return { nome: 'João', idade: 25 };
}
 
function numeros() {
  return [1, 2, 3, 4, 5];
}
 
function fabricaDeFuncoes() {
  return function() {
    console.log('Função retornada!');
  };
}

/**Funções sem Instrução return
É importante notar que se uma função não incluir uma instrução return, ela retornará undefined por padrão. Isso significa que se você tentar armazenar o valor retornado de uma função sem return, receberá undefined. */

function semRetorno() {
  console.log('Sem retorno aqui!');
}
 
let valor = semRetorno();
console.log(valor); // Saída: undefined

/**Retornar Múltiplos Valores
Em JavaScript, se você quiser retornar múltiplos valores de uma função, você pode fazê-lo usando um array ou objeto. */

function calcular(a, b) {
  return [a + b, a - b, a * b, a / b];
}
 
/**A Diferença entre Retornar e Imprimir Valores
É comum que iniciantes em programação confundam a impressão de valores no console com o retorno de valores em funções. Embora essas duas ações possam parecer semelhantes, elas são fundamentalmente diferentes e servem a propósitos distintos.

Imprimindo Valores
Imprimir um valor no console significa utilizar o console.log ou algum método similar para mostrar um valor na janela do console. Essa ação não afeta o fluxo do código e é geralmente usada para depuração ou fornecer informações ao desenvolvedor. */

function imprimirSoma(a, b) {
  console.log(a + b);
}
 
imprimirSoma(5, 10); // Saída no console: 15

/**Neste exemplo, a função imprime a soma de a e b no console, mas não retorna um valor que possa ser usado em outra parte do código.

Retornando Valores
Retornar um valor significa usar a palavra-chave return para enviar um valor de volta ao ponto onde a função foi chamada. Esse valor retornado pode ser usado em outra parte do código. */

function somar(a, b) {
  return a + b;
}
 
let resultado = somar(5, 10);
console.log(resultado); // Saída no console: 15 


/**Aqui, a função retorna a soma de a e b, permitindo que esse valor seja armazenado em uma variável e usado em outras partes do código.

Comparação e Uso Adequado
Impressão: Utilizada para depuração ou para fornecer informações durante o desenvolvimento. Não permite que outros códigos utilizem o valor impresso.
Retorno: Utilizada para enviar um resultado para outra parte do código. Permite que valores sejam passados, manipulados e usados em outras funções ou estruturas.
É fundamental entender a diferença entre essas duas ações para escrever código eficiente e fácil de manter. Utilizar return e console.log de forma inadequada pode levar a erros e dificuldades na depuração.

Conclusão
Nesta aula, exploramos o conceito de retornar valores em funções em JavaScript. Discutimos:

Como usar a palavra-chave return para enviar valores de volta ao ponto onde a função foi chamada.
Os tipos de valores que podem ser retornados, incluindo números, strings, objetos, arrays e até mesmo outras funções.
A diferença entre imprimir valores no console e retornar valores, e como cada um serve a propósitos diferentes.
Entender como e quando retornar valores é uma habilidade essencial na programação e pode aumentar significativamente a modularidade e a reusabilidade do seu código. */