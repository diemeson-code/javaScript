/*
toUpperCase()
*/
let nome = "João";
let nomeMaiusculo = nome.toUpperCase(); // toLowerCase deixa tudo Maiusculo
console.log(nomeMaiusculo);

/*
toLowerCase()
*/
let saudacao = "Olá, Mundo!";
let saudacaoMinuscula = saudacao.toLowerCase(); //toLowerCase deixa tudo em Minuscula
console.log(saudacaoMinuscula);

/*
Outras funções
*/
let texto = " Aprendendo JavaScript ";
console.log(texto.trim());

let animal = "elefante";
console.log(animal.charAt(3));
console.log(animal.includes("lef"));

let novoTexto = texto.replace("JavaScript", "Java");
console.log(novoTexto.trim());