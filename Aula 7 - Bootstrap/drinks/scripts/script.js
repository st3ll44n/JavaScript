lista_categorias = []

class Categoria {
    constructor(titulo,img,desc,marca){
        this.titulo = titulo
        this.img = img
        this.desc = desc
        this.marca = marca
    }
}

lista_categorias.push(new Categoria('SUCO','images/suco.jpg','mais diversos sucos! Laranja, morango e muito mais!','Suco feito por @Marca'))
lista_categorias.push(new Categoria('REFRIGERANTE','images/refri.png','Refrigerantes dos mais diversos sabores e tipos! :)','refri feito por @Marca'))
lista_categorias.push(new Categoria('CERVEJAS','images/cerveja.avif','Cervejas com ou sem álcool e diversos sabores :)','refri feito por @Marca'))
lista_categorias.push(new Categoria('COQUETEIS','images/coquetel.jpg','Batidas álcoolicas ou não de diversos sabores','refri feito por @Marca'))
lista_categorias.push(new Categoria('ÁGUA','images/agua.avif','Garrafas, copos e diversos tamanhos de água com ou sem gás! :)','refri feito por @Marca'))
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