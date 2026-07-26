/* 2 -> Herança com Funções Construtoras: Reescreva o exemplo acima usando classes ES6.
 Compare as diferenças e semelhanças com o código original. */

 let animal = {
   tipo:'animal',
   descrever:function(){
      return`Sou um ${this.tipo}`
   }
};

let leao = Object.create(animal);
leao.tipo = 'Leão branco';
console.log(leao.descrever())



class Animal {
   constructor(tipo) {
      this.tipo = tipo;
   }

   descrever() {
      return `Sou um ${this.tipo}`;
   }
}

class Leao extends Animal {
   constructor(tipo) {
      super(tipo);
   }
}

const Leao = new Leao('Leão branco');

console.log(Leao.descrever());