/**Utilizando Métodos Concisos: Refatore o objeto anterior usando métodos concisos do ES6. */

const carro = {
   marca:'Chovrolet',
   modelo:'Ônix',
   ano:2020,
   meuCarro(){
      console.log(`O meu carro é  ${this.marca} ${this.modelo} ${this.ano}`)
   }
  
};
carro.meuCarro();
