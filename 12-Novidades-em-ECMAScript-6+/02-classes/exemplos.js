class NomeDaClasse {
   constructor(parametro1,parametro2) {
      this.propriedade1 = parametro1;
      this.propriedade2 = parametro2; 
   }

   meuMetodo(){
      console.log(`Propriedade 1 é ${this.propriedade1}`);
   }
}

const meuObjeto = new NomeDaClasse("valor1","valor2");
meuObjeto.meuMetodo(); // Output: propriedade 1 é valor1