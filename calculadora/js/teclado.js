// =========================
// Suporte ao teclado
// =========================
document.addEventListener("keydown", (event) => {

    const tecla = event.key;

    if (!isNaN(tecla)) {

        adicionarNumero(tecla);

    } else if (tecla === ".") {

        adicionarNumero(".");

    } else if (["+", "-", "*", "/", "%"].includes(tecla)) {

        escolherOperador(tecla);

    } else if (tecla === "Enter" || tecla === "=") {

        event.preventDefault();
        calcular();

    } else if (tecla === "Backspace") {

        apagar();

    } else if (tecla === "Escape") {

        limpar();

    }

});