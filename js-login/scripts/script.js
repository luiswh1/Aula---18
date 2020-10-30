
var email = document.getElementById("email");
var foto = document.getElementById("foto");


function entrar(event) {
    event.preventDefault();

    for (var user of usersList) {
        if (user.email == email.value && user.login.password == password.value) {
            window.location.href = "dashboard.html";
            return;

        } else {
            email.value = "";
            password.value = "";
            alert("Login ou senha invalidos");
            return;
        }
    }


}




function trocafoto() {
    foto.src = "./images/user.jpg"
    if (email.value == "") {
        return;
    }
    var posicao = usersList.findIndex(user => user.email == email.value || user.login.username === email.value);
    // Verifico se o usuario existe
    if (posicao === -1) {

        alert("Usuario nao encontrado");
        return;
    }

    //coloco o usuario selecionado em uma variavel.

    var usuario = usersList[posicao];
    email.value = usuario.email;
    foto.src = usuario.picture.large;

}

function calcular() {
    let male = 0
    let female = 0
    let soma = 0
    let mediaGeral = 0
    let mediaMale = 0
    let mediaFemale = 0

    for (var sexo of usersList) {
        if (sexo.gender == "male") {
            male += parseInt(sexo.age);
            mediaMale++
        }
        if (sexo.gender == "female") {
            female += parseInt(sexo.age);
            mediaFemale++
        }

    }

    soma = male + female;
    mediaGeral = mediaMale + mediaFemale;

 
    return {
        somaGeral: soma,
        mediaGeral: (soma / mediaGeral).toFixed(1),
        mediaMale: (male / mediaMale).toFixed(1),
        mediaFemale: (female / mediaFemale).toFixed(1)
    }
}