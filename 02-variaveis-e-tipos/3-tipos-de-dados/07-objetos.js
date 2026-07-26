/*
Objetos
*/
let pessoa = {
  nome: 'João',
  idade: 30,
  profissao: 'Engenheiro'
};
 console.log(pessoa.nome); // saida:João
 //console.log(pessoa.idade); // saida:30
 //console.log(pessoa.profissao); // saida: Engenheiro

pessoa.nacionalidade = 'Brasileiro'; // Adiciona uma nova propriedade
pessoa.idade = 31; // Modificando uma propriedade existente

console.log(pessoa.nacionalidade) //saida: nacionalidade
console.log(pessoa.idade) // saida: 31