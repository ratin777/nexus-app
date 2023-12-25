function manipularLogo() {
    var headerLogo = document.getElementById('header-logo');
    // Link da Logo
    var novaUrl = 'https://cdn.discordapp.com/attachments/1090400001559109712/1188965169129345054/nexus.png?ex=659c711a&is=6589fc1a&hm=5808f21280494c74fa04c39185619df2dc70dd4c6328e9ada03ad5f577d3d8aa&';
    headerLogo.src = novaUrl;
}

function manipularPlataforma() {
    var plataformaElement = document.getElementById("plataforma");
    
    if (plataformaElement) {
        // Nome da plataforma
        plataformaElement.innerHTML = "Seja bem vindo à nossa plataforma de sinais exclusivamente desenvolvida para os jogos da DUPOC";
    }
}

function manipularInstagram() {
    var instagramLink = document.getElementById('instagram-link');
    
    if (instagramLink) {
        // Link do Instagram
        instagramLink.href = 'https://www.instagram.com/';
    }
}

function manipularLinkAfiliado() {
    var meuIframe = document.getElementById("meuIframe");
    // Link de Afiliado
    var novoLink = "https://www.dupoc.com/affiliates/?btag=1617191_l256809";
    meuIframe.src = novoLink;
}

document.addEventListener('DOMContentLoaded', function () {
    manipularPlataforma();
    manipularInstagram();
    manipularLogo();
    manipularLinkAfiliado();
});

function alterarTextoDireitosAutorais() {
    var direitosAutoraisElement = document.getElementById("direitos-autorais");
    
    if (direitosAutoraisElement) {
        // Footer
        direitosAutoraisElement.innerHTML = "&copy; Nexus <br> All rights reserved";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    alterarTextoDireitosAutorais();
});