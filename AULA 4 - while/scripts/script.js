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
    for (let i = 0;i < 8;i++){
        document.getElementById('catalogo').innerHTML +=`
        <div class="livro">
            <h3>A revolução dos bichos - George Orwell</h3>
                <img src="images/capadelivro.jpg" alt="">

            <button>
                Adicionar
                <img src="images/plus-lg.svg" alt="">
            </button>
        </div>
            `
        }
}
carregarCatalogo()