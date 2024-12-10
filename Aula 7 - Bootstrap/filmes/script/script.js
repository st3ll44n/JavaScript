lista_categorias = []

class Categoria {
    constructor(titulo,img,desc,marca){
        this.titulo = titulo
        this.img = img
        this.desc = desc
        this.marca = marca
    }
}

lista_categorias.push(new Categoria('Kill bIll - Volume 1','images/filme1.jpeg','A ex-assassina conhecida apenas como Noiva acorda de um coma de quatro anos decidida a se vingar de Bill, seu ex-amante e chefe, que tentou matá-la no dia do casamento. Ela está motivada a acertar as contas com cada uma das pessoas envolvidas com a perda da filha...','Dirigido por Quentin Tarantino'))
lista_categorias.push(new Categoria('Saltburn','images/filme2','Felix Catton convida seu amigo Oliver Quick para passar as férias de verão na mansão de sua família, na região de Saltburn. Com a chegada do garoto, uma série de eventos perturbadores atinge os Cattons.','Dirigido por Emerald Fennell'))
lista_categorias.push(new Categoria('Pulp Fiction','images/filme3','Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle.','Dirigido por Quentin Tarantino'))
lista_categorias.push(new Categoria('A substância','images/filme4','Elisabeth Sparkle, renomada por um programa de aeróbica, enfrenta um golpe devastador quando seu chefe a demite. Em meio ao seu desespero, um laboratório lhe oferece uma substância que promete transformá-la em uma versão aprimorada.','Dirigiado por Coralie Fargeat'))
lista_categorias.push(new Categoria('Parasita','images/filme5.jpeg','Toda a família de Ki-taek está desempregada, vivendo em um porão sujo e apertado. Por obra do acaso, ele começa a dar aulas de inglês para uma garota de família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe e filhos bolam um plano...','Dirigido por Bong Joon-ho'))
lista_categorias.push(new Categoria('Invocação do Mal','images/filme6.jpeg','Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.','Dirigido por James Wan'))
lista_categorias.push(new Categoria('Psicopata Americano','images/filme7.jpeg','Em Nova York, em 1987, o belo jovem profissional Patrick Bateman tem uma segunda vida como um horrível assassino em série durante a noite. O elenco é formado pelo detetive, a noiva, a amante...','Dirigido por Mary Harron'))
lista_categorias.push(new Categoria('Coringa','images/filme8.jpeg','Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.','Dirigido por Todd Philips'))

lista_categorias.forEach(categoria => {
    document.querySelector('#categoriaItems').innerHTML += `
    
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${categoria.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${categoria.titulo}</h5>
                    <p class="card-text">${categoria.desc}</p>
                    <p class="card-text"><small class="text-body-secondary">${categoria.marca}</small></p>
                </div>
            </div>
        </div>
    </div>
    
    `
});