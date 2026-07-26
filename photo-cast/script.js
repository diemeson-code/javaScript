const btnBuscar = document.getElementById("btnBuscar");
const galeria = document.getElementById("galeria");
const statusTexto = document.getElementById("status");

const modal = document.getElementById("modal");
const imagemModal = document.getElementById("imagemModal");
const fecharModal = document.getElementById("fecharModal");

async function buscarGato() {

    try {

        statusTexto.textContent = "Buscando foto...";

        const resposta = await fetch(
            "https://api.thecatapi.com/v1/images/search"
        );

        if (!resposta.ok) {
            throw new Error("Erro ao buscar imagem");
        }

        const dados = await resposta.json();

        const urlImagem = dados[0].url;

        const img = document.createElement("img");

        img.src = urlImagem;
        img.alt = "Foto de gato";

        img.addEventListener("click", () => {
            imagemModal.src = urlImagem;
            modal.style.display = "flex";
        });

        galeria.prepend(img);

        statusTexto.textContent = "";

    } catch (erro) {

        statusTexto.textContent =
            " Erro ao Buscar foto.";

        console.error(erro);

    }

}

btnBuscar.addEventListener("click", buscarGato);

fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (event) => {

    if(event.target === modal){
        modal.style.display = "none";
    }

});

document.addEventListener("keydown", (event) => {

    if(event.key === "Escape"){
        modal.style.display = "none";
    }

});