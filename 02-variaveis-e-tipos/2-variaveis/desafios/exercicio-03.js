// 1 -> Declare uma função chamada testeHoisting e, dentro dela, tente imprimir uma variável let chamada 
// escola antes de declará-la. O que acontece?
function testeHoisting(){
    console.log(escola) // tentativa antes de declarar
    let escola = "klautau"
}
testeHoisting();
// 2 -> Ainda na função testeHoisting, declare uma variável var chamada curso após tentar imprimir no console, 
// mas inicialize-a após o console.log. O que é exibido no console e por quê?
 function testeHoisting(){
     console.log(curso)
    var curso  = "Python";
 }
 testeHoisting()

// 3 -> Declare uma função chamada exemploHoisting e, dentro dela, tente chamar uma função chamada iniciar 
// antes de declará-la. Em seguida, declare a função iniciar depois da chamada e veja se ela é executada 
// corretamente.

function exemploHoisting(){
    iniciar(); // chamada antes da declaração
    function iniciar(){
        console.log("Função iniciar executada!");
    }
}
exemploHoisting();


// Objetivo: Entender o conceito de hoisting e como ele afeta variáveis e declarações de funções.