/**Tratando Erros em Callbacks: Modifique o exemplo de leitura de arquivo anterior para lidar adequadamente com erros. */

function lerArquivo(callback) {
    console.log("Lendo arquivo...");

    // Simulando uma leitura que demora
    setTimeout(function() {
        const conteudo = "Dados do arquivo";
        callback(conteudo);
    }, 2000);
}

lerArquivo(function(dados) {
    console.log("Arquivo lido!");
    console.log(dados);
});