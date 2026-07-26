/*
Crie uma Função Construtora: Crie uma função construtora para representar animais, com propriedades 
como tipo, nome e idade. Adicione um método ao protótipo que retorne uma descrição do animal.

*/

function animal(nome,tipo,idade){ // criar objetos
    this.tipo = tipo;
    this.nome = nome;
    this.idade = idade;   
}
animal.prototype.descricao = function(){
    return ` O animal é um ${this.tipo}, chamado ${this.nome} ,com ${this.idade} anos.`
}

const meuAnimal = new animal ('tigre','branco' ,3);
console.log(meuAnimal)
console.log(meuAnimal.descricao());