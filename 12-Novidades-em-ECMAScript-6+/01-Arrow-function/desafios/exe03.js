/**Exercício 3: Funções de Callback
Crie um exemplo onde o uso de uma Arrow Function como função de callback seria mais prático do que uma função normal. */

// tradicional
const nomes = ["Kelen","Santos","Noah","Deborah"];
 nomes.forEach(function(nome){
   console.log(` Olá ${nome}!`);
 });


 // Com Arrow function
const Nomes = ["Kelen","Santos","Noah","Deborah"];
Nomes.forEach(nome =>{
   console.log(`Olá, ${nome}!`);
});

