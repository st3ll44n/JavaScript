function carregarCatalogo(){

    var sapato = [
        ["images/sapatos/download (1).jpeg","Salto aberto marrom"],
        ["images/sapatos/download (2).jpeg","Tenis de cano alto - All Star"],
        ["images/sapatos/download (3).jpeg","Tenis de cano curto vinho - All Star"],
        ["images/sapatos/download (4).jpeg","Coturno preto de couro vegetal"],
        ["images/sapatos/download (5).jpeg","Tenis New Balance verde"],
        ["images/sapatos/download (6).jpeg","Tenis Nike Court Royale offwhite"],
        ["images/sapatos/download.jpeg","Rasteira branca de couro vegetal"],
        ["images/sapatos/Open Toe PU Flat Slippers.jpeg","Rasteira laranja"],
        ["images/sapatos/sapatolaranja.jpeg","Salto em formato quadrado laranja"],
        ["images/sapatos/Sapato Masculino Casual Tratorado Moderno Lançamento Loafer Mocassim Masculino.jpeg","Mocassin tratorado preto"],
        ["images/sapatos/Sapato Social Azul Marinho Em Couro 45885.jpeg","Sapato Social Azul Marinho Em Couro"],
        ["images/sapatos/Shoes Meet My Hand-Painted Art, Here’s The Result.jpeg","Tenis branco com detalhes verdes Reebook"]
    ]
        sapato.forEach(cadasapato =>{
            document.getElementById('catalogo').innerHTML +=`
            <div class="sapato">
                <h3>${cadasapato[1]}</h3>
                    <img src="${cadasapato[0]}" alt="">
                <button class="botao">
                
                    <img src="images/plus-lg.svg" alt="">
                </button>
            </div>
                `
            })}
    carregarCatalogo()