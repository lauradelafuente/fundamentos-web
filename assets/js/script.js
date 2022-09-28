/* case sensitive: reconhece letras maiusculas e minusculas 
pode ser acessado:
por tag: getElementByTagName();
por id: getElementById();
por nome: getElementByName
por classe: getElementsByClassName();
por seletor: querySelector() */

let nome = window.document.getElementById('nome') 
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red" 
        nomeOk = false
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) { //se tem,  retorna 1, se não existe -1
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
        emailOk = false
    } else {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito grande, utitlize no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
        assuntoOk = false
   } else {
        txtAssunto.style.display = "none" //display é como vai aparecer na tela, none faz com que não apareça nada
        assuntoOk = true 
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Seu formulário foi enviado!")
    } else {
        alert ("Preencha o formulário corretamente antes de enviar.")
    }
}

function mapaZoom() {
    mapa.style.width = "500px"
    mapa.style.height = "350px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}