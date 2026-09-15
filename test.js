function AltMaiusc () { 
    const campos = document.TCheck.muda;
    for (let i = 0; i < campos.length; i++) {
        campos[i].value = campos[i].value.toUpperCase();
    }
    document.TCheck.Opt1.checked = false;
} 
function AltMinusc () { 
    const campos = document.TCheck.muda;
    for (let i = 0; i < campos.length; i++) {
        campos[i].value = campos[i].value.toLowerCase();
    }
    document.TCheck.Opt2.checked = false;
} 

function printText() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let timeString = hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');

    let greeting;
    if (hours < 12) {
        greeting = "Bom dia";
    } else if (hours < 18) {
        greeting = "Boa tarde";
    } else {
        greeting = "Boa noite";
    }

    if (document.getElementById("nome").value.trim() === "" || document.getElementById("sobrenome").value.trim() === "") {
        alert("Por favor, preencha os campos de nome e sobrenome.");
        return;
    }
    let nome = document.getElementById("nome").value + " " + document.getElementById("sobrenome").value;
    document.getElementById("bomdia").textContent = greeting + ", " + nome + ". Hora atual: " + timeString;
}

function TestaVal() {
    console.log("Validando campos...");
    const campos = document.TCheck.muda;
    for (let i = 0; i < campos.length; i++) {
        if (campos[i].value.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return false; // Impede o envio do formulário
        }
    }
    alert("Todos os campos foram preenchidos corretamente.");
    return true; // Permite o envio do formulário
}

function alternarCSS() {
    const css = document.getElementById("css");
    const button = document.getElementById("mudarcss");
    if (css.getAttribute("href") === "style.css") {
        css.setAttribute("href", "empty.css");
        button.textContent = "Modo Escuro";
    } else {
        css.setAttribute("href", "style.css");
        button.textContent = "Modo Claro";
    }
}