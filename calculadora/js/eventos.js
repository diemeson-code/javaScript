// =========================
// Eventos dos botões numéricos
// =========================
numeros.forEach((botao) => {

    botao.addEventListener("click", () => {

        adicionarNumero(botao.textContent);

    });

});

// =========================
// Eventos dos operadores
// =========================
operadores.forEach((botao) => {

    botao.addEventListener("click", () => {

        const valor = botao.textContent;

        if (valor === "C") {
            limpar();
            return;
        }

        if (valor === "CE") {

            display.value = "0";

            if (!operador) {
                primeiroNumero = "";
            }

            aguardandoSegundoNumero = false;
            return;

        }

        if (valor === "←") {
            apagar();
            return;
        }

        escolherOperador(valor);

    });

});

// =========================
// Eventos dos botões especiais
// =========================
especiais.forEach((botao) => {

    botao.addEventListener("click", () => {

        calcularEspecial(botao.textContent);

    });

});

// =========================
// Evento do botão "="
// =========================
igual.addEventListener("click", () => {

    calcular();

});