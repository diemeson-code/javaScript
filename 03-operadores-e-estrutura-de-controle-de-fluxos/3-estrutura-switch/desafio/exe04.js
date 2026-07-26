/**Usando Switch em Funções: Escreva uma função que aceita um dia da semana (como uma string) e usa uma instrução switch para retornar o número do dia da semana. */


function semana(dia){
    switch (dia){
        case 'domingo':
            return 1;
            case 'segunda-feira':
                return 2;
                case 'terça-feira':
                    return 3;
                    case 'quarta-feira':
                        return 4;
                        case 'quinta-feira':
                            return 5;
                            case 'sexta-feira':
                                return 6;
                                case 'sabado':
                                    return 7;
                                    default:
                                        return 'Dia inválido'


    }
}
console.log(semana('terça-feira'))