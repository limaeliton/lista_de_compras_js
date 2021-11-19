const cardNovalista = document.getElementById('cardNovalista')
const btnformnovalista = document.getElementById('btnnovalista')
const formnovalista = document.getElementById('novalista')
const divlistas = document.getElementById('listas')
let listas = []

btnnovalista.addEventListener('click', function() {
    cardNovalista.style.display = 'block'
})

formnovalista.addEventListener('submit', function(event) {
    event.preventDefault()
const inputtitulo = document.querySelector('input[name="tituloLista"]')
if(inputtitulo.value !== '') {
const novalista = {
id: listas.length + 1,
titulo: inputtitulo.value 
}
inputtitulo.value = ''
listas.push(novalista)
window.localStorage.listas = JSON.stringify(listas)
}
})
formnovalista.addEventListener('reset', function(event) {
    cardNovalista.stlyle.display = "nome"
})
//função para adicionar os itens na tela
function renderlist() {
    // lendo as listas salvas no localStorage
    listas = JSON.parse(window.localStorage.listas)
    //limpando a div que recebe  os c
    listas.map(lista =>{
        //criando um titulo pro card
    let h2tag = document.createElement('h2') 
    // add o titulo da lista salva no título do card 
    h2tag.innerHTML = lista.titulo
    // cria btn
   let btnaddItem = document.createElement('Button')
   //adiciona texto ao btn


   
    let divtag = document.createElement('div')


    // add a classe card-lista a div para o css
    divtag.setAttribute('class', 'card-lista')
    divtag.appendChild(h2tag)
    divlistas.appendChild(divtag)
    console.log(div)
}

if(window.localStorage.listas?.length > 0) {
renderlist()

})
}

