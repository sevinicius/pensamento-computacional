document.getElementById("form") .addEventListener("submit",function(event){
event.preventDefault()
var nome = document.getElementById("nome").value
var nota1 = parseInt(document.getElementById("nota1").value)
var nota2 = parseInt(document.getElementById("nota2").value)
var nota3 = parseInt(document.getElementById("nota3").value)

var media = Math.round((nota1 + nota2 + nota3) / 3)

var resultado = document.getElementById("resultado")
var mensagem = document.getElementById("mensagem")

if (media > 60 ) {
    mensagem.innerText =`parabens, ${nome}! Sua media É ${media}. Você Está aprovado!`

} else {
    mensagem.innerText = `Lamento, ${nome}, Sua media É ${media}. Infelizmente Você Está Reprovado`
}
resultado.style.display = 'block'

})