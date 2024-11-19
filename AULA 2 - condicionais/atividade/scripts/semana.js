
function semana() {
    const numero = parseInt(prompt("Digite um número de 1 a 7 para saber o dia da semana: "));
    let dia;

    switch (numero) {
        case 1:
            dia = "Segunda-feira";
            break;
        case 2:
            dia = "Terça-feira";
            break;
        case 3:
            dia = "Quarta-feira";
            break;
        case 4:
            dia = "Quinta-feira";
            break;
        case 5:
            dia = "Sexta-feira";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
        default:
            dia = "Número inválido. Digite um número de 1 a 7.";
    }

    alert(`O número corresponde a: ${dia}`);
}

semana();
