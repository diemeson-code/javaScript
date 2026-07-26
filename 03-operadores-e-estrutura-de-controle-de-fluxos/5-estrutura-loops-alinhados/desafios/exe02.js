/** Multiplicação de Matrizes:
Objetivo: Implementar a multiplicação de duas matrizes.
Instruções: Use loops aninhados para calcular o produto das matrizes. Verifique se as dimensões são compatíveis antes de multiplicar.
Desafio Adicional: Implemente uma função para transpor uma matriz e utilize-a no programa. */

// Matrizes
let matrizA = [
    [1, 2],
    [3, 4] 

];

let matrizB = [
    [5, 6],
    [7, 8]
];

// Verifica se pode multiplicar
if (matrizA[0].length !== matrizB.length) {
    console.log("Não é possível multiplicar as matrizes.");
} else {

    let resultado = [];

    // Linhas da matriz A
    for (let i = 0; i < matrizA.length; i++) {

        resultado[i] = [];

        // Colunas da matriz B
        for (let j = 0; j < matrizB[0].length; j++) {

            let soma = 0;

            // Multiplicação
            for (let k = 0; k < matrizB.length; k++) {
                soma += matrizA[i][k] * matrizB[k][j];
            }

            resultado[i][j] = soma;
        }
    }

    console.log("Resultado:");
    console.log(resultado);
}