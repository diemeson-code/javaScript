/**Trabalhando com Referências: Crie uma função que aceite um objeto e adicione uma nova propriedade a ele. Teste passar um objeto e observe como as alterações dentro da função afetam o objeto original. */

/**function alterarObjeto(obj) {
  obj.propriedade = 'novo valor';
}
 
let objeto = { propriedade: 'valor original' };
alterarObjeto(objeto);
console.log(objeto.propriedade); // Output: 'novo valor' */

function adicionarPropriedade(objeto){
   objeto.idade = 23;
}

function alterarObjeto(objeto){
   objeto.nome = "Diemeson";
}


let pessoa = {
   nome: "Santos"
};

console.log(pessoa);
adicionarPropriedade(pessoa);
console.log(pessoa);
console.log(pessoa);
console.log(alterarObjeto(pessoa.nome))
//alterarObjeto(pessoa)
//console.log(pessoa)