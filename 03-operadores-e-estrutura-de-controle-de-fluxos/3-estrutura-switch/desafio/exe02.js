/**Switch com Default: Modifique o exercício anterior para incluir um caso default que lidará com frutas desconhecidas. */


let fruta = 'manga';
switch(fruta){
    case 'banana':
        console.log('Banana custa: R$5 reais o quilo',);
        break;

    case 'abacate':
        console.log('O quilo do abacate custa R$ 2 reais o quilo');
        break;

    case 'limão':
        console.log('O limão custa:R$ 1.50 o quilo');
        break;

        default:
        console.log('fruta não encontrada');

}