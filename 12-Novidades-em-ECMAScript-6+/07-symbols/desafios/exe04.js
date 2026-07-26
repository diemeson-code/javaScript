/**Refatoração com Symbols: Pegue um objeto de um código anterior e refatore-o para usar Symbols nas propriedades que você não quer que sejam facilmente acessíveis ou sobrepostas. */

// Sem Symbol

const User = {
   id: 'u1',
   nome:'Santos',
   idade: 30
};
console.log(User.id);

// Com o symbol

const id = Symbol('id');
const user = {
   [id]: 'u1',
   nome:'Santos',
   idade: 30
};
console.log(user[id])
console.log(user.nome)
console.log(user.id)
console.log(Object.keys(user));

/**O que mudou?
A propriedade id deixou de ser uma chave comum.
Agora ela é um Symbol.
Ela não aparece em Object.keys() nem em for...in.
Só pode ser acessada com:
user[id];
O que escrever se o professor pedir uma explicação?

A propriedade id foi transformada em um Symbol, tornando-a menos acessível pelos métodos tradicionais de enumeração (for...in e Object.keys()). Isso ajuda a evitar conflitos de nomes e o acesso acidental à propriedade.

Esse é exatamente o tipo de resposta que o exercício espera. */