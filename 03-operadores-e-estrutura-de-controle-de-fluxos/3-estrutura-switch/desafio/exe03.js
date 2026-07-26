/**Comparação Estrita: Crie um exemplo em que a comparação estrita dentro do switch cause um resultado diferente do que seria com uma comparação flexível. */

let valor  = '5';

switch (valor) {
    case 5:
        console.log('falso')
        break;
    case'5':
        console.log('verdadeiro');    
        break;
}