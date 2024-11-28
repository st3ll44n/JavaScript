// Quantidade de imagens por slide
const imagesPerSlide = 1;

function carregarCatalogo() {
    var sapato = [
        ["images/sapatos/download (1).jpeg", "Salto aberto marrom"],
        ["images/sapatos/download (2).jpeg", "Tenis de cano alto - All Star"],
        ["images/sapatos/download (3).jpeg", "Tenis de cano curto vinho - All Star"],
        ["images/sapatos/download (4).jpeg", "Coturno preto de couro vegetal"],
        ["images/sapatos/download (5).jpeg", "Tenis New Balance verde"],
        ["images/sapatos/download (6).jpeg", "Tenis Nike Court Royale offwhite"],
        ["images/sapatos/download.jpeg", "Rasteira branca de couro vegetal"],
        ["images/sapatos/Open Toe PU Flat Slippers.jpeg", "Rasteira laranja"],
        ["images/sapatos/sapatolaranja.jpeg", "Salto em formato quadrado laranja"],
        ["images/sapatos/Sapato Masculino Casual Tratorado Moderno Lançamento Loafer Mocassim Masculino.jpeg", "Mocassin tratorado preto"],
        ["images/sapatos/Sapato Social Azul Marinho Em Couro 45885.jpeg", "Sapato Social Azul Marinho Em Couro"],
        ["images/sapatos/Shoes Meet My Hand-Painted Art, Here’s The Result.jpeg", "Tenis branco com detalhes verdes Reebook"]
    ];

    const catalogoContainer = document.getElementById('catalogo');
    
    // Criação do container do carrossel
    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('catalogo-container');
    const shoeCarousel = document.createElement('div');
    shoeCarousel.classList.add('shoe-carousel');
    
    // Adiciona cada imagem e nome de sapato ao carrossel
    sapato.forEach(cadasapato => {
        const shoeItem = document.createElement('div');
        shoeItem.classList.add('shoe-item');
        
        // Cria a imagem
        const img = document.createElement('img');
        img.src = cadasapato[0];
        img.alt = cadasapato[1];
        
        // Cria o nome do sapato
        const name = document.createElement('h3');
        name.textContent = cadasapato[1];
        
        // Adiciona imagem e nome ao item do carrossel
        shoeItem.appendChild(img);
        shoeItem.appendChild(name);
        
        // Adiciona o item ao carrossel
        shoeCarousel.appendChild(shoeItem);
    });

    // Se o número de sapatos não é múltiplo de "imagesPerSlide", preenche com espaços vazios
    const totalItems = sapato.length;
    const remainder = totalItems % imagesPerSlide;
    if (remainder > 0) {
        const emptyItems = imagesPerSlide - remainder; // Número de espaços vazios a serem adicionados
        for (let i = 0; i < emptyItems; i++) {
            const emptyItem = document.createElement('div');
            emptyItem.classList.add('shoe-item');
            emptyItem.style.visibility = 'hidden'; // Esconde os espaços vazios
            shoeCarousel.appendChild(emptyItem);
        }
    }
    
    // Adiciona o carrossel ao container
    carouselContainer.appendChild(shoeCarousel);
    
    // Adiciona botões de navegação
    const leftButton = document.createElement('button');
    leftButton.classList.add('carousel-button', 'left');
    leftButton.innerHTML = '&#10094;';
    leftButton.onclick = () => moveCarousel('left');
    
    const rightButton = document.createElement('button');
    rightButton.classList.add('carousel-button', 'right');
    rightButton.innerHTML = '&#10095;';
    rightButton.onclick = () => moveCarousel('right');
    
    carouselContainer.appendChild(leftButton);
    carouselContainer.appendChild(rightButton);
    
    // Adiciona o carrossel ao catálogo
    catalogoContainer.appendChild(carouselContainer);
}

let currentIndex = 0;

function moveCarousel(direction) {
    const shoeCarousel = document.querySelector('.shoe-carousel');
    const shoeItems = shoeCarousel.querySelectorAll('.shoe-item');
    const totalItems = shoeItems.length;

    // Calcula o número total de slides
    const totalSlides = Math.ceil(totalItems / imagesPerSlide);
    
    // Atualiza o índice com base na direção
    if (direction === 'left') {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    } else if (direction === 'right') {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    }

    // Move o carrossel para a posição correta
    const offset = -currentIndex * (imagesPerSlide * 220); // Move o carrossel por 'imagesPerSlide' itens
    shoeCarousel.style.transform = `translateX(${offset}px)`;
}

carregarCatalogo();

// CARROSSEL PARA SAIAS

// Quantidade de saias por slide
const imagesPerSlideSaia = 1;

function carregarCatalogoSaia() {
    var saia = [
        ["images/saias/⭐️.jpeg", "Saia Envelope preta"],
        ["images/saias/1e34c438-7408-4944-9e6c-2b1d7a4ebf16.jpeg", "Mini Saia vermelha "],
        ["images/saias/19 Timeless Items That You'll Never Regret Owning in Your 30s.jpeg", "Saia Longa Preta com Fenda"],
        ["images/saias/30 New Forever 21 Items That Are Bound to Sell Out.jpeg", "Saia Curta Preta com Fenda"],
        ["images/saias/151ad304-4fe1-440d-947f-9a724e2daafc.jpeg", "Saia midi Marrom com Corrente"],
        ["images/saias/download (1).jpeg", "Saia Longa Envelope Preta Com cinto"],
        ["images/saias/Saia Preta Midi Adulto Moda Evangelica Modesta Cristã Linda.jpeg", "Saia Preta Midi Adulto"],
        ["images/saias/download.jpeg", "Saia Envelope Com botões e bolsos"],
        ["images/saias/fd805051-6426-460c-b290-a1e74b62ddd6.jpeg", "Saia Preta De Tule em Camadas"],
        ["images/saias/Mini skirt.jpeg", "Mini Saia Cinza"],
        ["images/saias/Saia Hering Kids Infantil Tule Estrelas Preta.jpeg", "Saia Infantil Tule Estrelas Preta"],
        ["images/saias/Saia Meia-lua Em Tamanhos Grandes.jpeg", "Saia Meia-lua Preta"]
    ];

    const catalogoContainerSaia = document.getElementById('catalogo-saia');
    
    // Criação do container do carrossel
    const carouselContainerSaia = document.createElement('div');
    carouselContainerSaia.classList.add('saia-carousel-container');
    const saiaCarousel = document.createElement('div');
    saiaCarousel.classList.add('saia-carousel');
    
    // Adiciona cada imagem e nome de saia ao carrossel
    saia.forEach(cadSaia => {
        const saiaItem = document.createElement('div');
        saiaItem.classList.add('saia-item');
        
        // Cria a imagem
        const img = document.createElement('img');
        img.src = cadSaia[0];
        img.alt = cadSaia[1];
        
        // Cria o nome da saia
        const name = document.createElement('h3');
        name.textContent = cadSaia[1];
        
        // Adiciona imagem e nome ao item do carrossel
        saiaItem.appendChild(img);
        saiaItem.appendChild(name);
        
        // Adiciona o item ao carrossel
        saiaCarousel.appendChild(saiaItem);
    });

    // Se o número de saias não é múltiplo de "imagesPerSlide", preenche com espaços vazios
    const totalItems = saia.length;
    const remainder = totalItems % imagesPerSlideSaia;
    if (remainder > 0) {
        const emptyItems = imagesPerSlideSaia - remainder; // Número de espaços vazios a serem adicionados
        for (let i = 0; i < emptyItems; i++) {
            const emptyItem = document.createElement('div');
            emptyItem.classList.add('saia-item');
            emptyItem.style.visibility = 'hidden'; // Esconde os espaços vazios
            saiaCarousel.appendChild(emptyItem);
        }
    }
    
    // Adiciona o carrossel ao container
    carouselContainerSaia.appendChild(saiaCarousel);
    
    // Adiciona botões de navegação
    const leftButton = document.createElement('button');
    leftButton.classList.add('saia-carousel-button', 'left');
    leftButton.innerHTML = '&#10094;';
    leftButton.onclick = () => moveSaiaCarousel('left');
    
    const rightButton = document.createElement('button');
    rightButton.classList.add('saia-carousel-button', 'right');
    rightButton.innerHTML = '&#10095;';
    rightButton.onclick = () => moveSaiaCarousel('right');
    
    carouselContainerSaia.appendChild(leftButton);
    carouselContainerSaia.appendChild(rightButton);
    
    // Adiciona o carrossel ao catálogo
    catalogoContainerSaia.appendChild(carouselContainerSaia);
}

let currentSaiaIndex = 1;

function moveSaiaCarousel(direction) {
    const saiaCarousel = document.querySelector('.saia-carousel');
    const saiaItems = saiaCarousel.querySelectorAll('.saia-item');
    const totalItems = saiaItems.length;

    // Calcula o número total de slides
    const totalSlides = Math.ceil(totalItems / imagesPerSlideSaia);
    
    // Atualiza o índice com base na direção
    if (direction === 'left') {
        currentSaiaIndex = (currentSaiaIndex === 0) ? totalSlides - 1 : currentSaiaIndex - 1;
    } else if (direction === 'right') {
        currentSaiaIndex = (currentSaiaIndex === totalSlides - 1) ? 0 : currentSaiaIndex + 1;
    }

    // Move o carrossel para a posição correta
    const offset = -currentSaiaIndex * (imagesPerSlideSaia * 220); // Move o carrossel por 'imagesPerSlide' itens
    saiaCarousel.style.transform = `translateX(${offset}px)`;
}

carregarCatalogoSaia();