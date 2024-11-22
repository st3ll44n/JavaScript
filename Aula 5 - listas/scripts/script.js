// var fruta1 = 'Melancia'
// var fruta2 = 'Melão'
// var fruta3 = 'Tomate'
// var fruta4 = 'maracujá'
// var fruta5 = 'Mexirica'

fruta = ['Melancia','Melão','Tomate','Maracujá','Mexirica']

teste = Array()
teste[0]= 'Olha'
teste[1]= 'Olha'
teste[2]= 'Olha'

console.log(fruta) // assim declara todas as variaveis no console 
console.log(fruta[4]) // dessa maneira, declara-se apenas as variaveis que estão nos colcheites

// PUSH - empurrar 'adiciona na lista'
fruta.push('Uva')
console.log(fruta)

// UNSHIFT - adiciona o item no começo da lista 
fruta.unshift('Abacate')
console.log(fruta)

// POP - Remover o ultimo
fruta.pop()
console.log(fruta)

// SHIFT - Remover o primeiro 
fruta.shift()
console.log(fruta)

// SPLICE - remove, adiciona, e atualiza
// Onde? (Indice), quantos vou deletar?
// SE nenhum o que vou adicionar?
fruta.splice(2,1)
fruta.splice(2,0, 'Morango')
fruta.splice(1,1, 'Cereja')
console.log(fruta)

fruta.push('Abacaxi')

for(var i = 0;i < fruta.lenght; i++){
    document.getElementById('resposta').
    innerHTML +=`
    ${fruta[i]} <br>
    `
}

fruta.forEach(cadafruta => {
    document.getElementById('resposta').
    innerHTML += `
    ${cadafruta} <br>
    `
});