const display = document.getElementById("display");
const historico = document.getElementById("historico");

const numeros = document.querySelectorAll(".numero");
const operadores = document.querySelectorAll(".operador");
const especiais = document.querySelectorAll(".especial");
const igual = document.querySelector(".igual");

let primeiroNumero = "";
let operador = "";
let aguardandoSegundoNumero = false;