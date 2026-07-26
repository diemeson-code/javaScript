// ==============================
// Aula 13 - Comparação e Casos
// ==============================

// comparação estrita
let valor = '5';

switch (valor) {
  case 5:
    console.log("Número");
    break;

  case '5':
    console.log("String");
    break;
}

// casos agrupados
let dia = 2;

switch (dia) {
  case 0:
  case 6:
    console.log("Fim de semana");
    break;

  default:
    console.log("Dia útil");
}