/**Criar um Objeto Literal: Crie um objeto que represente um carro, com propriedades como marca, modelo, ano e um método para exibir essas informações. */

const carro = {
   marca:'Chevrollet',
   modelo:'Ônix',
   ano:'2020',


exibirInformacaes: function() {
   console.log(`Marca: ${this.marca}`);
   console.log(`Modelo: ${this.modelo}`);
   console.log(`Ano: ${this.ano}`);
}
}
carro.exibirInformacaes();
