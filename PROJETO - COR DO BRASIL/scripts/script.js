let indiceImagem = 0;

function mudarImagem(direcao) {
    const imagens = document.querySelectorAll('.carrossel-imagens img');
    const totalImagens = imagens.length;

    indiceImagem += direcao;

    if (indiceImagem >= totalImagens) {
        indiceImagem = 0;
    } else if (indiceImagem < 0) {
        indiceImagem = totalImagens - 1;
    }

    imagens.forEach(img => img.classList.remove('active'));

    imagens[indiceImagem].classList.add('active');

    const novoTransform = -indiceImagem * 100;
    document.querySelector('.carrossel-imagens').style.transform = `translateX(${novoTransform}%)`;
}
