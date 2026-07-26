// =========================
// Adiciona números ao display
// =========================

// =========================
// Adiciona números ao display
// =========================
function adicionarNumero(numero) {

    // Impede dois pontos decimais
    if (numero === "." && display.value.includes(".")) {
        return;
    }

    // Começa a digitar o segundo número
    if (aguardandoSegundoNumero) {

        display.value = numero === "." ? "0." : numero;
        aguardandoSegundoNumero = false;

    } else if (display.value === "0") {

        display.value = numero === "." ? "0." : numero;

    } else {

        display.value += numero;

    }

    // Atualiza o histórico somente se houver um operador
    if (operador !== "") {
        atualizarHistorico();
    }

}

// =========================
// Limpa a calculadora
// =========================
function limpar() {

    display.value = "0";
    historico.textContent = "";
    primeiroNumero = "";
    operador = "";
    aguardandoSegundoNumero = false;

}

// =========================
// Apaga o último caractere
// =========================
function apagar() {

    display.value = display.value.slice(0, -1);

    if (display.value === "") {
        display.value = "0";
    }

}