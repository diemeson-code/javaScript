/*Olá pessoal, hoje nos vamos falar sobre condicionais if/else.
Objetivos da Aula
Entender a importância dos condicionais na programação.
Aprender a usar a estrutura if/else e else if em JavaScript.
Conhecer o operador ternário e entender como ele pode ser usado para simplificar o código.
Identificar erros comuns e aprender melhores práticas relacionadas ao uso de condicionais.
O que são Condicionais?
Condicionais são estruturas de controle que permitem que um programa tome decisões com base em critérios definidos. Dependendo das condições avaliadas, diferentes blocos de código serão executados, permitindo uma resposta dinâmica às situações.

Por que são Importantes?
Os condicionais são fundamentais para a lógica de programação, pois permitem que o programa reaja a diferentes entradas e situações. Sem eles, os programas seriam extremamente limitados e incapazes de lidar com a complexidade do mundo real.

Estrutura básica do if/else
O if/else é uma estrutura condicional que permite executar um bloco de código se uma condição for verdadeira e outro bloco se for falsa.

Sintaxe */
if (condição) { 
  // Bloco de código a ser executado se a condição for verdadeira 
} else { // Bloco de código a ser executado se a condição for falsa 
}

// Exemplo: Verificar se um número é positivo ou negativo
let numero = 5; 
if (numero > 0) { 
console.log("O número é positivo!"); 
} else { console.log("O número é negativo!"); 
}

/*Erros comuns e como evitá-los
Esquecer os parênteses: Os parênteses são obrigatórios após o if.
Usar o sinal de atribuição (=) em vez do sinal de igualdade (== ou ===): Isso pode levar a erros lógicos.
Melhores práticas
Utilize === em vez de == para comparações, pois isso verifica tanto o valor quanto o tipo.
Mantenha os blocos de código dentro das chaves {} claros e concisos.
Utilizando else if
Em alguns casos, você pode querer verificar várias condições em sequência. Isso é possível usando else if.

Sintaxe */
if (condição1) {
  // Bloco de código para condição1
} else if (condição2) {
  // Bloco de código para condição2
} else {
  // Bloco de código se nenhuma condição for verdadeira
}

//  Exemplo: Classificar uma nota

let nota = 75;
 
if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else {
  console.log("D");
}
/*Neste exemplo, a nota é avaliada e classificada de acordo com o valor.

Operador Ternário
O operador ternário é uma forma concisa de escrever uma instrução if/else. É útil para expressões simples e diretas.

Sintaxe 


condição ? expressãoSeVerdadeira : expressãoSeFalsa;
Exemplo: Verificar se um número é par ou ímpar */

let numero = 6;
let resultado = numero % 2 === 0 ? "par" : "ímpar";
console.log(`O número é ${resultado}!`);
/*Neste exemplo, a variável resultado recebe o valor “par” se o número for par e “ímpar” se for ímpar.

Melhores práticas e Dicas
Utilize o operador ternário apenas em casos simples para manter o código legível.
Não aninhe muitos operadores ternários, pois isso pode tornar o código confuso.*/