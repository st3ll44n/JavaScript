nota = Number( prompt ('Digite a sua nota:'))

    if(nota >= 7){
       alert('Aprovado!')
       document.querySelector('body').innerHTML = "Até semestre que vem!"
    }
    else{
        alert('Reprovado!')
    } 