/*Exercício 3: Classificar Temperatura
Escreva um código que classifica a temperatura em uma das quatro categorias: “Frio”, “Agradável”, “Quente” ou “Muito Quente”. Use if/else if/else para fazer isso.

Frio: abaixo de 15
Agradável: 15 a 25
Quente: 26 a 35
Muito Quente: acima de 35 */

let temperatura = 25;

if(temperatura < 15){
    console.log("frio")
}else if( temperatura <=25 ){
    console.log("Agradável")
}else if(temperatura <= 35){
    console.log("Quente")
}else{
    console.log("Muito Quente")
}