/**Bem-vindo à nossa próxima aula, onde exploraremos a estrutura de controle de fluxo chamada switch em JavaScript. Essa é uma ferramenta poderosa e flexível que pode tornar o seu código mais eficiente e legível, principalmente quando você precisa comparar uma variável com múltiplos valores possíveis.

Você já encontrou uma situação onde precisou usar muitas declarações if-else aninhadas? A estrutura switch existe exatamente para simplificar esses casos! Ela permite comparar uma expressão com vários valores diferentes de forma clara e organizada.

Nesta aula, vamos aprender sobre:

Como a estrutura switch funciona e quando usá-la.
A sintaxe básica, incluindo as cláusulas case e default.ex1.js
As peculiaridades do switch, como a comparação estrita.
Alguns exemplos práticos e situações do mundo real onde o switch se mostra útil.
Além disso, discutiremos algumas boas práticas e erros comuns que podem surgir ao utilizar esta estrutura. Então, prepare-se para mergulhar no mundo do controle de fluxo em JavaScript e descobrir como o switch pode tornar o seu código mais limpo e eficiente!

2. Sintaxe Básica do Switch
A estrutura switch é uma alternativa elegante para várias declarações if-else aninhadas, especialmente quando você precisa comparar uma variável com vários valores literais diferentes. Vamos dar uma olhada na sua sintaxe básica:

Como Escrever um Switch
Aqui está a estrutura básica de um switch:

1
2

switch (expressão) {
    case valor1:
    // código a ser executado se a expressão for igual a valor1
    break;
    case valor2:
    // código a ser executado se a expressão for igual a valor2
    break;
    //...
    default:
    // código a ser executado se a expressão não for igual a nenhum valor
}
Expressão: Esta é a variável ou valor que você deseja comparar.
Case: Usamos a palavra-chave case seguida por um valor específico que queremos comparar com a expressão. Se a expressão for igual ao valor após o case, o código dentro desse bloco será executado.
Break: A palavra-chave break é usada para terminar a execução do bloco de código atual e sair da estrutura switch. Se esquecermos de colocar o break, o código continuará a ser executado nos blocos case subsequentes, mesmo que a condição não seja atendida.
Default: Esta é uma cláusula opcional que contém o código a ser executado se nenhum dos casos for verdadeiro. É como um else em uma série de declarações if-else.
Exemplo Prático
Vamos ver um exemplo prático:

1
2
3

let fruta = "maçã";
 
switch (fruta) {
  case "banana":
    console.log("Eu gosto de bananas!");
    break;
  case "maçã":
    console.log("As maçãs são deliciosas!");
    break;
  default:
    console.log("Eu gosto de todas as frutas!");
}
Neste exemplo, como fruta é igual a “maçã”, a saída será: “As maçãs são deliciosas!”.

A sintaxe básica do switch é simples e direta. Ela pode ser usada para tornar o código mais limpo e fácil de ler, especialmente quando comparada com muitas declarações if-else aninhadas. Na próxima seção, exploraremos algumas peculiaridades e boas práticas do uso de switch.

Comparação Estrita e Peculiaridades do Switch
A estrutura switch em JavaScript usa comparação estrita (===) para verificar a igualdade entre a expressão e os valores de cada case. Isso significa que o tipo de dado também deve corresponder, além do valor.

Comparação Estrita
Veja o exemplo a seguir:

1
2
3

let valor = '5';
 
switch (valor) {
  case 5:
    console.log("Isso não será impresso!");
    break;
  case '5':
    console.log("Isso será impresso!");
    break;
}
 
// Saída: "Isso será impresso!"
Como estamos usando comparação estrita, o caso onde valor é comparado com o número 5 não é correspondido, mas o caso onde é comparado com a string '5' é.

Casos Agrupados
Às vezes, você pode querer que vários cases executem o mesmo bloco de código. Isso pode ser feito agrupando cases:

1
2
3
let dia = 2;
 
switch (dia) {
  case 0:
  case 6:
    console.log("É fim de semana!");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("É dia de semana!");
    break;
}
 
// Saída: "É dia de semana!"
Sem Break
A ausência da instrução break pode ser tanto uma característica útil quanto um erro comum. Se você esquecer o break, os blocos de código dos cases subsequentes também serão executados:



let letra = 'b';
 
switch (letra) {
  case 'a':
    console.log("A");
  case 'b':
    console.log("B");
  default:
    console.log("Outra letra");
}
 
// Saída: "B" "Outra letra"
Em alguns cenários, essa “queda” através dos cases pode ser desejada, mas muitas vezes é um erro. Portanto, é uma boa prática sempre usar o break a menos que você tenha uma razão específica para não fazê-lo.

Switch com Expressões Complexas
A instrução switch pode ser usada com expressões mais complexas, não apenas com valores simples. Isso torna o switch uma ferramenta poderosa para avaliar várias condições.

Usando Funções e Expressões
Você pode usar funções ou expressões mais complexas na expressão que está sendo avaliada. Veja o exemplo abaixo:

1
2
3

function obterCategoria(idade) {
  if (idade < 18) return 'Menor de idade';
  if (idade < 65) return 'Adulto';
  return 'Idoso';
}
 
let idade = 25;
 
switch (obterCategoria(idade)) {
  case 'Menor de idade':
    console.log('Acesso negado!');
    break;
  case 'Adulto':
    console.log('Acesso permitido!');
    break;
  case 'Idoso':
    console.log('Acesso VIP!');
    break;
  default:
    console.log('Categoria desconhecida');
}
 
// Saída: "Acesso permitido!"
Neste exemplo, a função obterCategoria é usada para determinar a categoria da idade e a instrução switch é usada para fornecer uma resposta com base nessa categoria.

Cuidados com a Expressão Complexa
Enquanto a flexibilidade do switch é útil, ela também pode tornar o código mais difícil de ler e manter se as expressões se tornarem muito complexas. Sempre considere a legibilidade e a manutenção do código ao usar expressões complexas com o switch.

A instrução switch é uma ferramenta poderosa em JavaScript que permite comparar uma expressão com múltiplos valores possíveis. É especialmente útil quando se tem uma série de valores possíveis que podem ser avaliados. Ao usar a comparação estrita, a instrução switch garante que as correspondências sejam precisas tanto em tipo quanto em valor, evitando assim erros sutis e tornando o código mais legível e manutenível.

Ao completar os exercícios abaixo, você terá uma compreensão sólida do funcionamento da instrução switch em JavaScript, incluindo a sintaxe, uso de comparação estrita e casos comuns em que ela pode ser aplicada, então bora praticar e vejo você na próxima aula.

Exercícios
Simples Switch: Crie uma instrução switch que avalie uma variável fruta e imprima o preço por quilo para diferentes frutas.
Switch com Default: Modifique o exercício anterior para incluir um caso default que lidará com frutas desconhecidas.
Comparação Estrita: Crie um exemplo em que a comparação estrita dentro do switch cause um resultado diferente do que seria com uma comparação flexível.
Usando Switch em Funções: Escreva uma função que aceita um dia da semana (como uma string) e usa uma instrução switch para retornar o número do dia da semana.
Switch Aninhado: Crie um exemplo de switch aninhado onde você tem um switch dentro de outro switch. Isso pode ser útil, por exemplo, ao avaliar categorias e subcategorias.
 */
