/**Crie um Symbol: Faça um script que crie um Symbol e o adicione como propriedade de um objeto. Em seguida, acesse essa propriedade. */

const id = Symbol('id');
const user = {
   [id]: 'u1',
   nome: 'Santos',
   idade: 30,
};
console.log(user[id])

/**Explicação
Symbol("id") cria um identificador único.
[id]: "u1" adiciona uma propriedade ao objeto usando o Symbol como chave.
user[id] acessa essa propriedade e imprime seu valor. */