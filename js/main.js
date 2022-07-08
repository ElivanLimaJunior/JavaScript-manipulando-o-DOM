const somar = document.querySelector('#somar')
const subtrair = document.querySelector('#subtrair')
const braco = document.querySelector('#braco')


const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
})

// Não é + necessario essa parte do código pois o código acima fara o mesmo porém para todos.

// somar.addEventListener("click", () => {manipulaDados("somar")})

// subtrair.addEventListener("click", () => {manipulaDados("subtrair")})

function manipulaDados (operacao) {
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}