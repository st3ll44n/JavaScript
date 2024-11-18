// condicionais 

function explicacao1(){
// SE CONDIÇÃO /  SENÃO 

escolha = confirm('DESEJA RODAR O TRUE OU FALSE?')
alert(escolha)

if (escolha){

    // CONSOLE.LOG - O RETORNO NÃO APARECE PAR AO USUÁRIO E SIM PARA O SISTEMA
    //console.log('FIZ O SE')
    alert('Você escolheu true')
}
else{
    //console.log('SENAO')
    alert('Você escolheu false')
}

}

function explicacao2(){

    alert('SEJAM BEM VINDOS A LOJINHA!')
    escolha = prompt(' a) Bolo no pote R$ 10  b) Açai R$ 10  c) Torta R$ 15')
    switch(escolha){
        case 'a' : 
            alert('Você escolheu bolo no pote')
            break
        case 'b' :
            alert('Você escolheu açai')
            break
        case 'c' :   
            alert('Você escolheu torta') 
            break
    // Break - Quebra do código; evita looping
    }
    
}

function explicacao3(){
    // idade = parseint()
    idade = Number( prompt ('Digite a sua idade:'))

    if(idade >= 18){
       alert('Idade válida! Seja bem vindo!')
        // Document - Documento HTML
        // QuerySelector - "Buscador"  
        // InnerHTML - "Dentro do elemento" adiciona algo no documento
       document.querySelector('body').innerHTML = "Viva!"
    }
    else{
        alert('Idade inválida!')
        // window - janela
        // Location - "URL"
        window.location = 'https://www.google.com'
    }

}


