/**Iterador Simples: Crie um iterador personalizado que percorre um array de números inteiros e retorna apenas os números pares. Teste o iterador com um loop for...of */

const numeros = [10, 15, 20, 25, 30];

const iterador = {
    numeros,
    indice: 0,

    next() {

        while (this.indice < this.numeros.length) {

            const valor = this.numeros[this.indice];
            this.indice++;

            if (valor % 2 === 0) {
                return {
                    value: valor,
                    done: false
                };
            }

        }

        return {
            done: true
        };
    },

    [Symbol.iterator]() {
        return this;
    }
};

for (const numero of iterador) {
    console.log(numero);
}

