/* Crie uma classe chamada Carro, com propriedades para marca, modelo e ano, e métodos para acelerar e frear.*/

class Carro {
   constructor(marca, modelo,ano){
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
   }
   acelerar(){
      console.log(`${this.marca} ${this.modelo} está acelerando.`);
   }

   frear(){
      console.log(`${this.marca} ${this.modelo} está freando.`)

   }
}
// Criando um objeto
const carro1 = new Carro("Chevrolet", "Onix", 2023);

// Testando
console.log(carro1);

carro1.acelerar();
carro1.frear();