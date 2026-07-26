/*
Strings
Em JavaScript, uma string é uma sequência de caracteres usada para representar texto. 
Elas podem ser definidas usando aspas simples, duplas ou crases, mas a forma mais moderna e versátil é 
utilizando template literals.

Definindo Strings:
*/
let nome = "João";
let saudacao = 'Olá';
console.log(saudacao)

/*
Concatenando Strings:
*/
let idade = 26;
let texto = "Idade: " + idade;
console.log(texto)

let calculoErrado = "Idade: " + idade + 5;
console.log(calculoErrado)

/*
Template Literals:
*/
let nome2 = "Maria";
let idade2 = 30;
let apresentacao = `Meu nome é ${nome2} e tenho ${idade2} anos.`;
console.log(apresentacao)