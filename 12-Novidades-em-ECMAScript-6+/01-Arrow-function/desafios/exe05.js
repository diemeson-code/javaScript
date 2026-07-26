/**Exercício 5: Refatoração
Escolha um pedaço de código que você já escreveu e que contém várias funções normais. Refatore este código para usar Arrow Functions quando apropriado. */
/*
// Função tradicional
function somar(a, b) {
    return a + b;
}

// Função tradicional
function multiplicar(a, b) {
    return a * b;
}

const numeros = [1, 2, 3, 4, 5];

// Callback tradicional
const dobro = numeros.map(function(numero) {
    return numero * 2;
});

console.log(somar(5, 3));
console.log(multiplicar(5, 3));
console.log(dobro);
*/

// Arrow Function
const somar = (a, b) => a + b;

// Arrow Function
const multiplicar = (a, b) => a * b;

const numeros = [1, 2, 3, 4, 5];

// Callback com Arrow Function
const dobro = numeros.map(numero => numero * 2);

console.log(somar(5, 3));
console.log(multiplicar(5, 3));
console.log(dobro);