window.addEventListener("load", function() {
    let medias = calcular()
    var inserirSoma = document.getElementById("somaIdades");
    var inserirIdadeHomens = document.getElementById("mediaHomens");
    var inserirIdadeMulheres = document.getElementById("mediaMulheres");
    var inserirMediaGeral = document.getElementById("mediaGeral");

    inserirSoma.innerHTML = `<span>${medias.somaGeral}</span>`;
    inserirIdadeHomens.innerHTML = `<span>${medias.mediaMale}</span>`;
    inserirIdadeMulheres.innerHTML = `<span>${medias.mediaFemale}</span>`;
    inserirMediaGeral.innerHTML = `<span>${medias.mediaGeral}</span>`;

});