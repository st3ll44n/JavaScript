function carregarCatalogo(){

    var filmes = [
        ["images/aluzdodemonio.jpg","A luz do Demônio"],
        ["images/halloween.jpg","Halloween"],
        ["images/omalquenoshabita.jpg","O mal que nos habita"],
        ["images/Rogai-Por-Nos.jpg","Rogai por nós"],
        ["images/capadelivro4.jpg","It - A coisa"]
    ]
        filmes.forEach(cadafilme =>{
            document.getElementById('catalogo').innerHTML +=`
            <div class="filme">
                <h3>${cadafilme[1]}</h3>
                    <img src="${cadafilme[0]}" alt="">
                <button>
                    Adicionar
                    <img src="images/plus-lg.svg" alt="">
                </button>
            </div>
                `
            })
    }

carregarCatalogo()    