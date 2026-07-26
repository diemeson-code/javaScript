/**Comparando Break e Continue: Crie dois laços: um que utilize o break e outro que utilize o continue. Ambos devem percorrer uma matriz de números e atuar quando encontrar um número específico. Compare como cada comando afeta o laço. */
 let numeros = [-1,-2,-3,4,-5,6,-7];
 for(let i = 0; i < numeros.length; i++){
    if(numeros[i]<0){
        break;
    }
    console.log(numeros[i])
 }


 
 let n = [-1, -2, -3, 4, -5, 6, -7];

/* CONTINUE */
for(let i = 0; i < n.length; i++){

    if(n[i] < 0){
        continue;
    }

    console.log(n[i]);
}