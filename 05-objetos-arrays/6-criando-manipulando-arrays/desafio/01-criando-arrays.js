/* Criando Arrays: Crie um array contendo os dias da semana e imprima-o no console.*/
let semana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado', 'Domingo'];
console.log(semana.join(' | '))

semana.forEach(dia => console.log(dia));

semana.forEach((dia, index) => {
  console.log(`${index + 1} - ${dia}`);
});

/*// Percorre cada dia da semana
semana.forEach((dia, index) => {
  // index é a posição no array, dia é o nome do dia
  // Imprime o número do dia (começando em 1) e o nome do dia
  console.log(`${index + 1} - ${dia}`); */