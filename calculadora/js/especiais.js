// =========================
// Funções especiais
// =========================
function calcularEspecial(operacao) {

    if (display.value === "Erro") return;

    let numero = Number(display.value);

    if (operacao === "√") {

        if (numero < 0) {
            display.value = "Erro";
            return;
        }

        let resultado = Math.sqrt(numero);
        display.value = resultado;

    } else if (operacao === "x²") {

        let resultado = Math.pow(numero, 2);
        display.value = resultado;

    } else if (operacao === "±") {

        let resultado = numero * -1;
        display.value = resultado;

    }

    primeiroNumero = display.value;
    operador = "";
    aguardandoSegundoNumero = false;

}