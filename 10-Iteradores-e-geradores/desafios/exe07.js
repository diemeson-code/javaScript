/** 3 -> Implemente um gerador que gere números primos até um limite especificado.*/

function* numerosPrimos(limite) {

    for (let numero = 2; numero <= limite; numero++) {

        let primo = true;

        for (let i = 2; i < numero; i++) {

            if (numero % i === 0) {
                primo = false;
                break;
            }

        }

        if (primo) {
            yield numero;
        }

    }

}

const gerador = numerosPrimos(20);

for (const numero of gerador) {
    console.log(numero);
}