function carregarCatalogo(){

var filmes = [
   ["aluzdodemonio.jpg","A luz do Demônio"]
   ["halloween.jpg","Halloween"]
   ["omalquenoshabita.jpg","O mal que nos habita"]
   ["Rogai-Por-Nos.jpg","Rogai por nós"]
   ["capadelivro4.jpg","It - A coisa"]
//    ["",""]
//    ["",""]
//    ["",""]
//    ["",""]
//    ["",""]
 ]
    filmes.forEach(cadafilmes =>{
        document.getElementById('catalogo').innerHTML +=`
        <div class="filmes">
            <h3>${cadafilmes[1]}</h3>
                <img src="${cadafilmes[0]}" alt="">
            <button>
                Adicionar
                <img src="images/plus-lg.svg" alt="">
            </button>
        </div>
            `
        }
        )}

