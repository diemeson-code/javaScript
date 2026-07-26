
 /* Exemplos -> 1
for(let i = 1; i <= 5; i++){
    let linha = "";
    for(let j = 1; j <= 5; j++){
        linha += i * j + " ";
    }
    console.log(linha);
}
*/
// Exemplo -> 2

for(let linha = 3; linha <= 50; linha++){
    let desenho = "";
    for(let coluna = 1; coluna <= linha; coluna++){
        desenho += '*';
    }
    console.log(desenho);
}
