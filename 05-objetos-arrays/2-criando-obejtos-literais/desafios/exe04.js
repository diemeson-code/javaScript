/**Manipulação de Objetos: Escreva funções para adicionar, remover e modificar propriedades do objeto carro criado anteriormente. */

const carro = {
   marca: 'Chevrolet',
   modelo: 'Ônix',
   ano: 2020,
};

function adicionarPropriedade() {
   carro.cor = 'azul';
}

function modificarPropriedade() {
   carro.modelo = 'Prisma';
}

function removerPropriedade() {
   delete carro.ano;
}

adicionarPropriedade();
modificarPropriedade();
removerPropriedade();

console.log(carro);
