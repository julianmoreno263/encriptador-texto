function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje")
    let parrafo = document.getElementById("parrafo")
    let figura = document.getElementById("figura")
    let textoCifrado = texto

        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    if (texto.value.length != 0) {
        document.getElementById("texto").value = textoCifrado
        tituloMensaje.textContent = "Texto encriptado con éxito"
        parrafo.textContent = "";
        figura.src = "./img/encriptado.jpg"
    } else {
        figura.src = "./img/muñeco.png"
        tituloMensaje.textContent = "Ningún mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        alert("Debes ingresar algún texto!")
    }

}