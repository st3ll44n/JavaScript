// DOM
// URL - LOCATION
// "BOTAO DE VOLTAR" - HISTORY 
// "SITE / CONTEUDO" - DOCUMENT

//windows.location.reload()
// window.location = "https://www.youtube.com/watch?v=8SbUC-UaAxE"

// document - documento 
// getElementById - busca o sujeito pelo id 
// inner - coloca um elemento 
// se innerText - apenas texto 
// se innerHTML - texto e código 

document.getElementById('catalogo').innerHTML = '<h3>Bom dia!<h3>'
document.querySelector('#catalogo').innnerHTML = 'BOA TARDE'

function registrarNome(){
    
    nome = document.querySelector('#InputNome').value
    document.querySelector('#catalogo').innerHTML = `
    <div id="nomeDiv">
    eu, ${nome}, sou muito top e programador
    </div>
    `
}