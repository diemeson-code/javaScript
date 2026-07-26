/**Exercício com Continue: Modifique um laço for para percorrer uma matriz de números e use o continue para pular números negativos, imprimindo apenas os números positivos. */
 let numeros = [-1,-2,-3,4,-5,6,-7];
 for(let i = 0; i < numeros.length; i++){
    if(numeros[i]<0){
        continue;
    }
    console.log(numeros[i])
 }
