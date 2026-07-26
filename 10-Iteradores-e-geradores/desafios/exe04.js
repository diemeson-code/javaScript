/**Benchmarking: Compare o tempo de execução do seu iterador personalizado de números pares com um loop simples que faz a mesma coisa. Isso te dará uma ideia das considerações de performance ao usar iteradores personalizados.
1
// Dica: Use performance.now() para medir o tempo de execução. */


const numeros = [];

for (let i = 1; i <= 100000; i++) {
    numeros.push(i);
}

// Loop simples
let inicio = performance.now();

for (const numero of numeros) {
    if (numero % 2 === 0) {
        // Apenas verifica se é par
    }
}

let fim = performance.now();

console.log("Tempo do loop simples: " + (fim - inicio) + " ms");

// Iterador personalizado
const iterador = {
    numeros: numeros,
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

inicio = performance.now();

for (const numero of iterador) {
    // Apenas percorre os números pares
}

fim = performance.now();

console.log("Tempo do iterador personalizado: " + (fim - inicio) + " ms");
