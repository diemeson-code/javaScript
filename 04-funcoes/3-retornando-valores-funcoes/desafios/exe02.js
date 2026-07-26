/**Verificar Maior Número: Crie uma função que aceite dois números e retorne o maior deles. Se os números forem iguais, retorne uma mensagem informando que são iguais. */
 
function Verificar(numeroA,numeroB){
   if(numeroA > numeroB){
      return numeroA;
   
   }else if(numeroB > numeroA){
      return numeroB

   }else{
      return ` Os números são iguais`
   }
}
console.log(Verificar(2,5))