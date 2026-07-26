//Trabalhando com Strings: Crie um array de strings e use um loop for para imprimir cada string em maiúsculas.

const nome = ['diemeson', 'santos', 'sofia', 'kelen', 'noah'];
for(let i = 0 ; i < nome.length; i++){
    console.log(nome[i].toUpperCase());
    
}

/*O que está acontecendo
i = 0 → começa no primeiro item
i < nomes.length → percorre todo o array
nomes[i] → acessa cada posição
.toUpperCase() → transforma em maiúsculo */