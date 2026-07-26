/**Desafio – Combinação dos Dois: Escreva um laço que percorra uma matriz de caracteres. Use o continue para pular vogais e o break para terminar o laço se encontrar um número. */

/** Desafio – Combinação dos Dois */

let nome = ['santos', 'sofia', 'noah', 'kelen', 4, 8];

for(let i = 0; i < nome.length; i++){

    // Verifica se é número
    if(typeof nome[i] === 'number'){
        console.log('Número encontrado');
        break;
    }

    // Percorre letras da palavra
    for(let j = 0; j < nome[i].length; j++){

        let letra = nome[i][j];

        // Pula vogais
        if(
            letra === 'a' ||
            letra === 'e' ||
            letra === 'i' ||
            letra === 'o' ||
            letra === 'u'
        ){
            continue;
        }

        console.log(letra);
    }
}
