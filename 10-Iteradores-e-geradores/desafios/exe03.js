/**Iterador com Filtro: Desenvolva um iterador que itere através de um array de strings e retorne apenas as strings que contêm uma determinada substring.
1
// Dica: Você pode usar o método includes() das strings para isso. */


const linguagens = [
    "Java",
    "Python",
    "JavaScript",
    "C#",
    "Java Web"
];

for (const linguagem of linguagens) {

    if (linguagem.includes("Java")) {
        console.log(linguagem);
    }

}