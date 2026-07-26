/** Desenho de Padrões:
Objetivo: Criar um programa que desenhe um triângulo retângulo usando asteriscos (*).
Instruções: Utilize loops aninhados para criar as linhas e colunas, experimentando diferentes tamanhos.
Desafio Adicional: Tente criar outros padrões, como um triângulo isósceles ou um quadrado.*/


for(let linha = 1; linha <= 5; linha++){
    let desenho = "";

    for(let coluna = 1; coluna <= linha; coluna++){
        desenho += "*";
    }
    console.log(desenho);
}


for(let linha = 1; linha <= 5; linha++){
    let espaco = "";
    let estrelas = "";

    for(let i = 1; i <= 5 - linha; i++){
        espaco += " ";
    }

    for(let j = 1; j <= linha * 2 - 1; j++){
        estrelas += "&";
    }

    console.log(espaco + estrelas);
}