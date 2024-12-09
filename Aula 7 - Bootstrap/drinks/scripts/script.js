lista_categorias = []

class Categoria {
    constructor(titulo,img,desc,marca){
        this.titulo = titulo
        this.img = img
        this.desc = desc
        this.marca = marca
    }
}

lista_categorias.push(new Categoria('SUCOS','images/suco.jpg','mais diversos sucos! Laranja, morango e muito mais.','Suco feito por @Marca'))
lista_categorias.push(new Categoria('REFRIGERANTE','images/suco.jpg','Refrigerante top :)','refri feito por @Marca'))
lista_categorias.push(new Categoria('REFRIGERANTE','images/suco.jpg','Refrigerante top :)','refri feito por @Marca'))
lista_categorias.push(new Categoria('REFRIGERANTE','images/suco.jpg','Refrigerante top :)','refri feito por @Marca'))
lista_categorias.push(new Categoria('REFRIGERANTE','images/suco.jpg','Refrigerante top :)','refri feito por @Marca'))
lista_categorias.push(new Categoria('REFRIGERANTE','images/suco.jpg','Refrigerante top :)','refri feito por @Marca'))

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