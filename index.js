function encriptar() {
    let texto = document.getElementById("texto").value;
    // let tituloMensaje = document.getElementById("titulo-mensaje")
    // let parrafo = document.getElementById("parrafo")
    // let figura = document.getElementById("figura")
    let textoCifrado = texto

        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    if (document.getElementById("texto").value.length != 0) {
        document.getElementById("texto").value = textoCifrado
        document.getElementById("titulo-mensaje").textContent = "Texto encriptado con éxito"
        document.getElementById("parrafo").textContent = "";
        document.getElementById("figura").src = "./img/encriptado.jpg"
    } else {
        document.getElementById("figura").src = "./img/muñeco.png"
        alert("Debes ingresar algún texto!")
    }

}