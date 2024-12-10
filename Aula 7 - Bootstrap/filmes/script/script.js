let lista_categorias = []

class Categoria {
    constructor(titulo, img, desc, marca, desccompleta){
        this.titulo = titulo
        this.img = img
        this.desc = desc
        this.marca = marca
        this.desccompleta = desccompleta // Adicionando a descrição completa
    }
}

lista_categorias.push(new Categoria('Kill Bill - Volume 1', 'images/filme1.jpeg', 'A ex-assassina conhecida apenas como Noiva acorda de um coma de quatro anos decidida a se vingar de Bill, seu ex-amante e chefe, que tentou matá-la no dia do casamento...', 'Dirigido por Quentin Tarantino', 'A Noiva começa sua jornada de vingança contra os membros do *Deadly Viper Assassination Squad*, que a traíram, enfrentando perigos e obstáculos enquanto busca pela justiça. A obra é marcada por cenas de ação imersivas e referências a filmes de kung fu e spaghetti westerns.'))
lista_categorias.push(new Categoria('Saltburn', 'images/filme2', 'Felix Catton convida seu amigo Oliver Quick para passar as férias de verão na mansão de sua família...', 'Dirigido por Emerald Fennell', 'A história se desenvolve com uma atmosfera de suspense, onde a riqueza e as relações familiares são postos à prova, criando um ambiente cheio de mistério e tensão.'))
lista_categorias.push(new Categoria('Pulp Fiction', 'images/filme3', 'Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perde...', 'Dirigido por Quentin Tarantino', 'Considerado um marco do cinema contemporâneo, "Pulp Fiction" é uma narrativa não-linear que entrelaça várias histórias, explorando temas de crime, redenção e moralidade.'))
lista_categorias.push(new Categoria('A substância', 'images/filme4', 'Elisabeth Sparkle, renomada por um programa de aeróbica, enfrenta um golpe devastador quando seu chefe a demite. Em meio ao seu desespero, um laboratório lhe oferece uma substância que promete transformá-la em uma versão aprimorada.', 'Dirigido por Coralie Fargeat', 'O filme explora a busca pela perfeição e os limites da auto-melhoria, abordando temas de identidade e transformação, com uma abordagem crítica à pressão social por padrões de beleza.'))
lista_categorias.push(new Categoria('Parasita', 'images/filme5.jpeg', 'Toda a família de Ki-taek está desempregada, vivendo em um porão sujo e apertado. Por obra do acaso, ele começa a dar aulas de inglês para uma garota de família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe e filhos bolam um plano...', 'Dirigido por Bong Joon-ho', 'O filme combina sátira social, drama e suspense, abordando as desigualdades econômicas de maneira provocativa, enquanto a trama se desenvolve de forma inteligente e imprevisível.'))
lista_categorias.push(new Categoria('Invocação do Mal', 'images/filme6.jpeg', 'Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.', 'Dirigido por James Wan', 'Baseado em eventos reais, "Invocação do Mal" é um dos filmes de terror mais aclamados da década, trazendo à tona o medo do desconhecido e as forças do além.'))
lista_categorias.push(new Categoria('Psicopata Americano', 'images/filme7.jpeg', 'Em Nova York, em 1987, o belo jovem profissional Patrick Bateman tem uma segunda vida como um horrível assassino em série durante a noite. O elenco é formado pelo detetive, a noiva, a amante...', 'Dirigido por Mary Harron', 'O filme é uma sátira da cultura capitalista dos anos 80, com um protagonista perturbador que desafia os limites entre o glamour e a loucura.'))
lista_categorias.push(new Categoria('Coringa', 'images/filme8.jpeg', 'Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.', 'Dirigido por Todd Philips', 'Uma poderosa reflexão sobre a saúde mental, a desigualdade e o impacto da sociedade na criação de figuras violentas, "Coringa" apresenta uma visão sombria e realista da ascensão de um vilão.'))

lista_categorias.forEach((categoria, index) => {
    const modalId = `modal${index}`; // ID único para cada modal
    document.querySelector('#categoriaItems').innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${categoria.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${categoria.titulo}</h5>
                    <p class="card-text">${categoria.desc}</p> <!-- Apenas o resumo é mostrado aqui -->
                    <p class="card-text"><small class="text-body-secondary">${categoria.marca}</small></p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalId}">Ver mais</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="modalLabel${index}" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel${index}">${categoria.titulo}</h5>
                </div>
                <div class="modal-body">
                    <p class="card-text">${categoria.desccompleta}</p> <!-- Apenas a descrição completa é mostrada aqui -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
    `;
});
