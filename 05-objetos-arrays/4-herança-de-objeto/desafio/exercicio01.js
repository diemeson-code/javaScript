/* -> 1 Explorando Protótipos: Crie um objeto e utilize Object.create para criar outro objeto que herda dele. 
Experimente acessar e modificar propriedades */

let animal = {
   tipo:'animal',
   descrever:function(){
      return`Sou um ${this.tipo}`
   }
};

let leao = Object.create(animal);
leao.tipo = 'Leão branco';
console.log(leao.descrever())

/** Como verificar a herança */
console.log(leao.tipo)
console.log(animal.tipo)

/** Como deleta */
delete leao.tipo;
console.log(leao.tipo)
