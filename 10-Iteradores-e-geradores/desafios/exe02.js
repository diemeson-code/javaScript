/**Iterando Objetos: Crie um iterador que itere através das propriedades de um objeto. O iterador deve retornar pares de chave-valor.
1
// Exemplo de objeto para iterarconst obj = {a: 1, b: 2, c: 3}; */


const obj = {
    a: 1,
    b: 2,
    c: 3
};

for (const chave in obj) {
    console.log(chave + " : " + obj[chave]);
}