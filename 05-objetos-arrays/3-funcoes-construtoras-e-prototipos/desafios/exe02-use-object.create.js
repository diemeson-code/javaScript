/*Use Object.create: Utilizando o exemplo anterior, refatore o código usando Object.create para 
criar novos objetos animal.*/

   /*
Use Object.create para criar novos objetos animal
*/

// Objeto base (protótipo)
const animal = {

    descricao: function () {
        return `O animal é um ${this.tipo}, chamado ${this.nome}, com ${this.idade} anos.`;
    }

};

// Criando novo objeto usando animal como protótipo
const meuAnimal = Object.create(animal);

// Adicionando propriedades
meuAnimal.tipo = "leão";
meuAnimal.nome = "Branco";
meuAnimal.idade = 3;

// Exibindo objeto
console.log(meuAnimal);

// Chamando método herdado do protótipo
console.log(meuAnimal.descricao());

