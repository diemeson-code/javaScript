/** Exercício 4: Contexto this
Crie dois exemplos, um que demonstre onde o uso de uma Arrow Function pode levar a problemas com this e outro onde ela resolveria o problema.*/

// Exemplo 1 - problema com Arrow function

const pessoa1 ={
   nome: "Santos",
   apresentar: () =>{
      console.log(`Meu nome é ${this.nome}`);
   }
};

pessoa1.apresentar();

// Exemplo 2 - Arrow Function resolvendo o problema
// ==========================================

const pessoa2 = {
    nome: "Maria",

    apresentar() {

        setTimeout(() => {
            console.log(`Meu nome é ${this.nome}`);
        }, 1000);

    }
};

pessoa2.apresentar();
/*
| Situação                                            | Usar Arrow?      |
| --------------------------------------------------- | ---------------  |
| Método de objeto (`this`)                           | ❌ Não           |
| Callback (`setTimeout`, `map`, `forEach`, `filter`) | ✅ Sim           |
| Eventos                                             | Depende do caso  |
| Funções pequenas                                    | ✅ Sim           |
| Construtores (`new`)                                | ❌ Não           |*/

