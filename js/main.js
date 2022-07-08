const somar = document.querySelector('#somar')
const subtrair = document.querySelector('#subtrair')
const braco = document.querySelector('#braco')


const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        // Primeiro usamos o console.log(evento) para analisar o target do click. depois disso usamos o "evento.target" para pegar exatamento o botão em que estamos clicando.
        console.log(evento.target) 
    })
})

somar.addEventListener("click", () => {manipulaDados("somar")})

subtrair.addEventListener("click", () => {manipulaDados("subtrair")})

function manipulaDados (operacao) {
    if(operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}