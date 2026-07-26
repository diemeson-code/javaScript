/**Em programação, as funções são uma parte fundamental para criar código reutilizável e modular. Uma característica poderosa das funções é a capacidade de receber parâmetros, permitindo que a mesma função execute ações variadas com base nos valores passados.

Nesta aula, exploraremos o conceito de parâmetros em funções no JavaScript, incluindo como declarar parâmetros, os diferentes tipos de parâmetros que você pode usar e como eles funcionam. Iremos desvendar o funcionamento da passagem por valor e passagem por referência, dois conceitos cruciais que impactam a maneira como os dados são manipulados dentro de uma função.

Ao dominar o uso de parâmetros, você será capaz de escrever funções mais flexíveis e eficientes, adaptando-as às necessidades de diferentes partes do seu código. Vamos então embarcar nesta jornada para entender tudo sobre a passagem de parâmetros em funções no JavaScript!

Tipos de Parâmetros
No JavaScript, existem vários tipos de parâmetros que você pode utilizar dentro de suas funções. Vamos explorar os principais e entender como cada um deles funciona.

Parâmetros Posicionais
Os parâmetros posicionais são os mais comuns e são definidos na declaração da função. Eles são chamados de “posicionais” porque a ordem em que são passados faz diferença. */

function soma(a, b) {
  return a + b;
}
 
console.log(soma(3, 5)); // Output: 8

/**Parâmetros com Valores Default
Você pode atribuir valores default aos parâmetros, e esses valores serão utilizados caso o parâmetro correspondente não seja fornecido durante a chamada da função. */

function saudacao(nome = "Visitante") {
  return `Olá, ${nome}!`;
}
 
console.log(saudacao()); // Output: Olá, Visitante!

/**Parâmetros Rest
O parâmetro rest permite que você represente um número indefinido de argumentos como um array. É muito útil quando você não sabe quantos argumentos serão passados. */

function numeros(...args) {
  return args;
}
 
console.log(numeros(1, 2, 3, 4, 5)); // Output: [1, 2, 3, 4, 5]
 
/**Parâmetros Nomeados (Objetos)
Você também pode passar objetos como parâmetros e desestruturá-los dentro da função. Isso é útil para tornar as chamadas de função mais legíveis e flexíveis. */

function configuracao({ tema, modo }) {
  // Código da função
}
 
configuracao({ tema: 'escuro', modo: 'noite' });

/**Os diferentes tipos de parâmetros proporcionam uma grande flexibilidade na definição e na chamada de funções, permitindo que você crie funções que se adaptam a diversas situações. É importante entender como cada tipo funciona e quando usá-los, para que você possa escrever código mais limpo e eficiente.

Passagem por Valor vs Passagem por Referência
A forma como os parâmetros são passados para uma função no JavaScript depende do tipo de dados que você está trabalhando. Existem duas maneiras principais de passar parâmetros: por valor e por referência. Vamos entender a diferença entre eles.

Passagem por Valor
Quando você passa um parâmetro por valor, uma cópia do valor é passada para a função. Isso significa que alterações no parâmetro dentro da função não afetam o valor original fora da função.

Isso acontece com tipos primitivos, como números, strings e booleanos: */

function alterarValor(x) {
  x = 42;
  console.log(x); // Output: 42
}
 
let valor = 10;
alterarValor(valor);
console.log(valor); // Output: 10

/**Passagem por Referência
Já na passagem por referência, o que é passado para a função é uma referência para o objeto original, e não uma cópia dele. Qualquer alteração feita na referência dentro da função reflete no objeto original fora da função.

Isso acontece com tipos não primitivos, como objetos e arrays:

 */

function alterarObjeto(obj) {
  obj.propriedade = 'novo valor';
}
 
let objeto = { propriedade: 'valor original' };
alterarObjeto(objeto);
console.log(objeto.propriedade); // Output: 'novo valor'

/**Erros Comuns e Boas Práticas
É comum confundir passagem por valor com passagem por referência, especialmente quando se trabalha com objetos e arrays. Um erro comum é assumir que um objeto não será modificado porque está sendo passado como parâmetro.

Algumas boas práticas para evitar confusões incluem:

Ser explícito sobre se a função irá ou não modificar o objeto passado.
Utilizar a desestruturação para passar apenas as propriedades necessárias, evitando modificações indesejadas.
Utilizar métodos imutáveis quando trabalhar com arrays e objetos, para evitar alterações no objeto original.
A compreensão da passagem por valor e por referência é crucial para entender como as funções funcionam no JavaScript. É essencial ter claro quando uma cópia é criada e quando a referência original é usada, pois isso afeta diretamente o comportamento do código.

Nos próximos exercícios, você terá a oportunidade de praticar o que aprendeu sobre parâmetros, incluindo as diferentes formas de passagem. Isso solidificará sua compreensão e habilidades nessa área crucial do JavaScript.

Conclusão
Nesta aula, exploramos como os parâmetros são passados para funções no JavaScript. Abordamos os conceitos de passagem por valor, onde uma cópia do valor é passada, e passagem por referência, onde uma referência ao objeto original é transmitida. A compreensão dessas diferenças é fundamental para escrever código preciso e evitar erros comuns.

Reforçamos as boas práticas que podem ajudá-lo a evitar confusões e escrever código mais claro e eficiente. A prática desses conceitos contribuirá para o seu desenvolvimento como programador. */
