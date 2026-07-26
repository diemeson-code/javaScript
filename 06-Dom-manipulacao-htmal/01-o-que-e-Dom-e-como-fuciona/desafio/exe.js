// 1. Selecionar elemento pelo ID
const div = document.getElementById("myDiv");
console.log(div);
console.log(div.textContent);

// 2. Selecionar vários elementos com querySelectorAll
const paragrafos = document.querySelectorAll(".highlight");
console.log(paragrafos);

paragrafos.forEach(paragrafo => {
    console.log(paragrafo.textContent);
});

// 3. Selecionar elemento com getElementsByClassName
const texto = document.getElementsByClassName("oldStyle");
console.log(texto);
console.log(texto[0].textContent);
