
/**Desestruturação e Imutabilidade: Escreva uma função que aceite um objeto e retorne um novo objeto com algumas propriedades modificadas, sem alterar o objeto original. Utilize desestruturação e métodos imutáveis. */

/** 
Desestruturação e Imutabilidade
*/

const pessoa = {
   nome:'Santos',
   idade: 23
}
console.log(pessoa)

function atualizar(objeto){
   return{
      ...objeto,
      cpf:13645446
   }
}
console.log(atualizar(pessoa))


