const input = document.getElementById("newItem");
const addButton = document.getElementById("addItemButton");
const removeButton = document.getElementById("removeItemButton");
const changeColorButton = document.getElementById("changeColorButton");
const list = document.getElementById("itemList");

// ➕ Adicionar item
addButton.addEventListener("click", function () {
    const texto = input.value;

    if (texto === "") return;

    const li = document.createElement("li");
    li.textContent = texto;

    list.appendChild(li);

    input.value = "";
});

// ❌ Remover último item
removeButton.addEventListener("click", function () {
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
});

// 🎨 Alterar cor dos itens
changeColorButton.addEventListener("click", function () {
    const itens = list.querySelectorAll("li");

    itens.forEach(function (item) {
        item.style.color = "blue";
    });
});