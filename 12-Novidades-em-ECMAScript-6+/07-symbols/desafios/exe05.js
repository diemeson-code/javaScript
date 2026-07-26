/**Symbols e Métodos de Objeto: Utilize um Symbol para criar um método de objeto e explore como ele pode ou não ser acessado e sobrescrito. */


const metodo = Symbol('metodo');

const user = {
   nome:'Santos',
   idade: 30,

   [metodo]() {
      console.log(`Olá, o meu nome é ${this.nome}.`);
   }
};

// chamando o método
user[metodo]();
// Tentando acessar pelos métodos tradicionais
console.log(user.metodo);      // undefined
console.log(user["metodo"]);   // undefined

// Exibindo as chaves do objeto
console.log(Object.keys(user)); // ['nome', 'idade']

const id = Symbol("metodo");

const User = {
  nome: "Santos",
  idade: 30,

  [id]() {
    console.log(`Olá, meu nome é ${this.nome}.`);
  }
};

User[id]();