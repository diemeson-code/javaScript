/* Na programação, muitas vezes é necessário converter um tipo de dado em outro. No JavaScript, essa conversão pode ser feita tanto de forma explícita quanto implícita. Nesta aula, exploraremos diferentes métodos e situações em que essas conversões ocorrem, ajudando você a entender como e quando aplicá-las.

Conteúdo Principal
1. Conversão Explícita
a. Número para String

Explicação: A conversão de número para string pode ser feita usando o método toString(). Exemplo:*/

let num = 42; 
let str = num.toString(); // "42"
console.log(str)

/*b. String para Número

Explicação: Usando parseInt() ou parseFloat(), você pode converter uma string para um número inteiro ou flutuante, respectivamente. Exemplo: */

let str = "42"; 
let num = parseInt(str); // 42

/*c. Booleano para String

Explicação: Um valor booleano pode ser convertido em string usando o método String(). Exemplo:*/
let bool = true; 
let str = String(bool); // "true" 

/*d. String para Booleano

Explicação: Utilizando uma comparação explícita, você pode converter uma string em um valor booleano. Exemplo:*/

let str = "true"; 
let bool = str === "true"; // true

/*e. Objeto para String

Explicação: Um objeto pode ser convertido em uma string JSON usando o método JSON.stringify(). Exemplo: */
let obj = {name: 'John', age: 30}; 
let str = JSON.stringify(obj); // '{"name":"John","age":30}'

/*f. String para Objeto

Explicação: Uma string JSON pode ser convertida em um objeto usando o método JSON.parse(). Exemplo:let str = ‘{“name”:”John”,”age”:30}’; let obj = JSON.parse(str); // {name: ‘John’, age: 30}

2. Conversão Implícita (Coerção)
A coerção ocorre quando o JavaScript automaticamente converte os tipos de dados. Isso pode acontecer em operações matemáticas, concatenações e comparações:

Concatenação com Coerção: */
let num = 42; 
let str = "The answer is: "; 
let result = str + num; // "The answer is: 42"

// Operação Matemática com Coerção:
let str = "5"; 
let num = 2; 
let result = str * num; // 10

