/**Uso de Symbols para propriedades ‘privadas’: Utilize um Symbol para criar uma propriedade ‘privada’ em um objeto. Tente acessá-la usando os métodos tradicionais de acesso a propriedades de objeto. */

const Datasecreta = Symbol('secreta');

const pessoa = {
   nome:'Santos',
   [Datasecreta]:'Não compartilhe isto!'
};

// Acessando com o Symbol
console.log(pessoa[Datasecreta])

// Tentando acessar pelos métodos tradicionais
console.log(pessoa.Datasecreta);
console.log(pessoa['Datasecreta']); 

/**Atenção

O exercício fala em propriedade "privada" entre aspas porque ela não é realmente privada. Ela apenas fica "escondida" do acesso comum.

Ainda é possível encontrá-la usando:

console.log(Object.getOwnPropertySymbols(pessoa));

Ou seja, Symbol ajuda a evitar conflitos de nomes e dificulta o acesso acidental, mas não oferece privacidade absoluta. */