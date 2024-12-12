// Object entries 

const filmes = {
    'Nome' : 'Sociedade da Neve',
    'Desc' : 'Lorem',
    'Gênero' : 'Drama'
}


console.log(filmes)
console.log(filmes.Nome)

// keys - retorna os atributos (nomes)

const filmesKey = Object.keys(filmes)
console.log(filmesKey)

// entries - retoma em listas os valores (valor)

const filmesentries = Object.entries(filmes)
console.log(filmesentries)

// map

const lista = {
    'filmes' :[
    {
        'nome':'Ilha do medo',
        'desc':'Lorem'   
    }, 
    {
        'nome':'Bruxa de Blair',
        'desc':'Lorem'   
    }, 
    {
        'nome':'Interestelar',
        'desc':'Lorem'  
    }, 
    {
        'nome':'Velozes e Furiosos',
        'desc':'Lorem'  
    }
],
    'jogos':[
    {
        'nome':'Roblox',
        'desc':'Lorem'  
    },
    {
        'nome':'The last of us',
        'desc':'Lorem' 
    },
    {
        'nome':'Life strange',
        'desc':'Lorem'   
    }
]
}

const resultados = lista.jogos.map((elemento) => {
    document.querySelector('body').innerHTML +=`
    <h3>${elemento.nome} </h3>
    `
})