// function testes(){
//     enquanto condição faca
//     para de tanto ate tanto faca
//     contador = 0 
//     while (contador < 3){
//          alert(`Que maneiro! Fiz ${contador} vezes `)
//          contador++
//     }
//     for(var i = 0;i < 3;i++){
//         alert(`Que maneiro! Fiz ${i+1} vezes`)
//     }
// }
// testes()

function carregarCatalogo(){

var livros = [
    ["images/capadelivro.jpg","A Revolução dos Bichos - George Orwell"],
    ["images/capadelivrp1.jpg", "O Mundo de Sofia - Jostein Gaarder"],
    ["images/capa-livro-hora-da-estrela.webp","Hora da Estrela - Clarice Lispector"],
    ["images/capadelivro2.jpg","Metamorfose - Franz Kafka"],
    ["images/capadelivro3.webp","Memórias Póstumas de Bras Cubas - Machado de Assis"],
    ["images/capadelivro4.jpg","It - A coisa - Stephen King"],
    ["images/capadelivro5.webp","A Fundação - Isaac Asimov"],
    ["images/capadelivro6.webp","O Capital   - Karl Marx"],
    ["images/capadelivro7.jpg","O Filho Renegado de Deus - Urariano Mota"],
    ["images/capadelivro8.jpg","Fortaleza Digital - Dan Brown"]
]
    livros.forEach(cadalivro =>{
        document.getElementById('catalogo').innerHTML +=`
        <div class="livro">
            <h3>${cadalivro[1]}</h3>
                <img src="${cadalivro[0]}" alt="">
            <button>
                Adicionar
                <img src="images/plus-lg.svg" alt="">
            </button>
        </div>
            `
        })
}
carregarCatalogo()