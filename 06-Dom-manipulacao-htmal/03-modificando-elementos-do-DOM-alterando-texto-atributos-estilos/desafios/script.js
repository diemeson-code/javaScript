const btnAdicionar = document.getElementById("btnAdicionar");
const btnRemover = document.getElementById("btnRemover");
const btnCor = document.getElementById("btnCor");
const lista = document.getElementById("lista");

btnAdicionar.addEventListener("click", () => {

    const input = document.getElementById("novoItem");

    if (input.value !== "") {

        const novoItem = document.createElement("li");

        novoItem.textContent = input.value;

        lista.appendChild(novoItem);

        input.value = "";
    }

});

btnRemover.addEventListener("click", () => {
    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    }
});

btnCor.addEventListener("click", () => {
    const itens = document.querySelectorAll("#lista li");

    itens.forEach(item => {
        item.style.color = "blue";
    });
});

