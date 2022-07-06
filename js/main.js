const robotron = document.querySelector('#robotron')

robotron.addEventListener("click", () => {
    console.log('Oi')
})

function dizoi(nome) { // colocamos nome dentro do parametros e no console chamamos esse nome, mas de onde vem esse nome ?
    console.log('oi ' + nome)
    console.log('Bem-vindo ao robotron')
}

dizoi("pedro") // esse nome vem quando chamamos a função, ali nós definimos qual seria o valor do parametro nome.