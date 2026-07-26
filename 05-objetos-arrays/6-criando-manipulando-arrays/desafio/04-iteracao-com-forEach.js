// Iteração com forEach: Escreva uma função que aceite um array de números e imprima cada 
// número multiplicado por 10 usando o método forEach().

/*
const number = [1, 2, 3, 4, 5];
number.forEach(numero => {
    console.log(numero * 10);
});*/

// Versão mais correta (profissional)

function multiplicarPorDez(numeros){
    numeros.forEach(numero => {
        console.log(numero * 10 );
    });
}

const numbers = [1, 2, 3, 4, 5]
multiplicarPorDez(numbers);