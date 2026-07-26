/**Exercício 2: Refatoração de Código
Objetivo: Refatorar um código que utiliza concatenação clássica para usar Template Literals.

Código a ser refatorado: */

function cumprimento(nome,hora) {
   return "Olá " + nome + " são " + "horas. ";
}
console.log(cumprimento("Santos","13:23"))

// Tarefa: Refatore o código acima para utilizar Template Literals.
 
function cumprimento(nome,hora){
   return `Olá ${nome}, são ${hora} horas`;
}

console.log(cumprimento('Santos','13:23'))