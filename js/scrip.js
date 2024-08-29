// Función para encriptar texto
function encriptarTexto() {
    const inputTexto = document.getElementById("textoEntrada").value.toLowerCase(); // Obtener texto del área de texto y convertir a minúsculas
    if (inputTexto === "") {
        mostrarMensajeVacio();
        return;
    }

    const textoEncriptado = inputTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(textoEncriptado);
}

// Función para desencriptar texto
function desencriptarTexto() {
    const inputTexto = document.getElementById("textoEntrada").value.toLowerCase(); // Obtener texto del área de texto y convertir a minúsculas
    if (inputTexto === "") {
        mostrarMensajeVacio();
        return;
    }

    const textoDesencriptado = inputTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado en el contenedor de salida
function mostrarResultado(texto) {
    const mensajeSalida = document.getElementById("mensajeSalida");
    const copyBtn = document.getElementById("contenedorSalida");

    // Cambiar el texto del contenedor de salida
    mensajeSalida.textContent = texto;
    
    // Mostrar el botón de copiar y ocultar la imagen y el mensaje de texto inicial
    copyBtn.style.display = "block"; 
    document.querySelector('#conten_nada').style.display = 'none'; 

    // Mostrar el contenedor de salida
    contenedorSalida.style.display = 'flex'; 
}

// Función para mostrar mensaje cuando no hay texto
function mostrarMensajeVacio() {
    const mensajeSalida = document.getElementById("mensajeSalida");
    const copyBtn = document.getElementById("copy-btn");
    document.querySelector('#conten_nada').style.display = 'block';
    document.querySelector('#contenedorSalida').style.display = 'none';

}

// Función para copiar el texto encriptado/desencriptado al portapapeles
document.getElementById("copy-btn").addEventListener("click", function () {
    const textoACopiar = document.getElementById("mensajeSalida").textContent;
    navigator.clipboard.writeText(textoACopiar).then(
        function () {
            alert("Texto copiado al portapapeles!");
        },
        function (err) {
            console.error("Error al copiar texto: ", err);
        }
    );
});
