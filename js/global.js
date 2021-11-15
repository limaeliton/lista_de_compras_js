const cardNovalista = document.getElementById('cardNovalista')
const btnformnovalista = document.getElementById('btnnovalista')
const formnovalista = document.getElementById('novalista')

const listas = []

btnnovalista.addEventListener('click', function() {
    cardNovalista.style.display = 'block'
})

formnovalista.addEventListener('submit', function(event) {
    event.preventDefault()
const inputtitulo = querySelector('input[name="tituloLista"]')
if(inputtitulo.value !== '') {
const novalista = {
id: listas.length + 1,
titulo: inputtitulo.value 
}
inputtitulo.value = ''
listas.push(novalista)
window.localStorage.listas = json.stringify(listas)
}
console.log(listas)
    
})
formnovalista.addEventListener('reset', function(event) {
    cardNovalista.stlyle.display = "nome"
    
})

