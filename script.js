function textoDoUsuario() {
    let textoUsuario = document.querySelector("#mensagem").value;
    return textoUsuario.replace(/[^a-zA-Z\s]/g, "").toLowerCase();
}

function criptografar() {
    textoDoUsuario();

    function criptografarTexto(textoUsuario) {
        let texto = textoUsuario.replaceAll("e", "enter")
                                .replaceAll("i", "imes")
                                .replaceAll("a", "ai")
                                .replaceAll("o", "ober")
                                .replaceAll("u", "ufat");
        return texto;
    }
    
    let textoCriptografado = criptografarTexto(textoDoUsuario());
    
    limparCampo();
    
    ocultarElementos();
    
    exibirTexto(textoCriptografado);
    
    exibirBotaoCopiar();
}

function limparCampo() {
    let limparCampo = document.querySelector("#mensagem");
    limparCampo.value = "";
}

function ocultarElementos() {
    document.querySelector('.apresentacao__resultado img').style.display = "none";
    document.querySelector('.apresentacao__resultado div').style.display = "none";

}

function exibirTexto(textoCriptografado) {
    let campoDeTexto = document.querySelector("#output");
    campoDeTexto.style.display = "block";
    campoDeTexto.innerHTML = textoCriptografado;
}

function exibirBotaoCopiar() {
    document.querySelector(".apresentacao__resultado button").style.display = "block";
}

function copiar() {
    let copiarTexto = document.querySelector("#output");
    navigator.clipboard.writeText(copiarTexto.innerHTML);
}

function descriptografar(){
    textoDoUsuario();

    function descriptografarTexto(textoUsuario) {
        let texto = textoUsuario.replaceAll("enter", "e")
                                .replaceAll("imes", "i")
                                .replaceAll("ai", "a")
                                .replaceAll("ober", "o")
                                .replaceAll("ufat", "u");
        return texto;
    }
    
    let textoDescriptografado = descriptografarTexto(textoDoUsuario());
    
    limparCampo();
    
    ocultarElementos();
    
    exibirTexto(textoDescriptografado);
    
    exibirBotaoCopiar();

}

