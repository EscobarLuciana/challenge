const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]+$/);

    if (!validador) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        return false;
    }
}

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = "block";
    }
}

function encriptar(stringEncriptada){
    let matrizCod = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCod.length; i++){
        if(stringEncriptada.includes(matrizCod[i][0])){
          stringEncriptada = stringEncriptada.replaceAll(matrizCod[i][0], matrizCod[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}


function desencriptar(stringDesencriptado){
    let matrizCod = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCod.length; i++){
        if(stringDesencriptado.includes(matrizCod[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCod[i][1], matrizCod[i][0])
        }
    }
    return stringDesencriptado
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}

function limpiarPagina(){
   location.reload();
}
