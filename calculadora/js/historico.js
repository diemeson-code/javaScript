// =========================
// Atualiza o histórico
// =========================
function atualizarHistorico() {

    if (operador === "") {
        historico.textContent = "";
        return;
    }

    historico.textContent = `${primeiroNumero} ${operador} ${display.value}`;

}