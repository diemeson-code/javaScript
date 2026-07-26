
// =========================
// Salva o operador escolhido
// =========================
function escolherOperador(operadorSelecionado) {

    // Se clicar em outro operador antes de digitar o segundo número,
    // apenas troca o operador.
    if (operador && aguardandoSegundoNumero) {
        operador = operadorSelecionado;
        historico.textContent = `${primeiroNumero} ${operador}`;
        return;
    }

    primeiroNumero = display.value;
    operador = operadorSelecionado;
    aguardandoSegundoNumero = true;

    // Mostra o primeiro número e o operador
    historico.textContent = `${primeiroNumero} ${operador}`;

}

// =========================
// Realiza o cálculo
// =========================
function calcular() {

    if (operador === "") {
        return;
    }

    let segundoNumero = display.value;
    let resultado;

    switch (operador) {

        case "+":
            resultado = Number(primeiroNumero) + Number(segundoNumero);
            break;

        case "-":
            resultado = Number(primeiroNumero) - Number(segundoNumero);
            break;

        case "*":
            resultado = Number(primeiroNumero) * Number(segundoNumero);
            break;

        case "/":

            if (Number(segundoNumero) === 0) {
                display.value = "Erro";
                historico.textContent = "";

                primeiroNumero = "";
                operador = "";
                aguardandoSegundoNumero = false;
                return;
            }

            resultado = Number(primeiroNumero) / Number(segundoNumero);
            break;

        case "%":
            resultado = Number(primeiroNumero) % Number(segundoNumero);
            break;

    }

    // Exibe a operação completa
    historico.textContent = `${primeiroNumero} ${operador} ${segundoNumero} =`;

    // Exibe o resultado
    display.value = resultado;

    // Permite continuar calculando
    primeiroNumero = resultado;
    operador = "";
    aguardandoSegundoNumero = false;

}