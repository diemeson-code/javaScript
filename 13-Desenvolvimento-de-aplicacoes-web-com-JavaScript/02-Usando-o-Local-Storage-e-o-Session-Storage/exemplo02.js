// Recuperar um item
const nome = localStorage.getItem('nome');
console.log(nome); // Saída: Roger
 
// Recuperar um objeto
const pessoaJSON = localStorage.getItem('pessoa');
const pessoa = JSON.parse(pessoaJSON);
console.log(pessoa.nome); // Saída: Roger