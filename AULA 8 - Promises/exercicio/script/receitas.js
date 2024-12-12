const lista = {
    'Salgados' :[
    {
        'nome':'Coxinha de frango com catupiry',
        'desc':'A coxinha de frango com catupiry é feita com massa de farinha de trigo, recheada com frango desfiado temperado e catupiry. A coxinha é modelada em formato de gota, empanada em farinha de trigo, ovo e farinha de rosca, e frita até dourar.'   
    }, 
    {
        'nome':'Quibi de travessa cremoso',
        'desc':' É feito com carne moída temperada, trigo para quibe hidratado, cebola, hortelã e temperos. A mistura é colocada em uma travessa, coberta com carne moída refogada e assada até dourar.'   
    }, 
    {
        'nome':'Pão de queijo',
        'desc':'A massa é preparada com polvilho, queijo ralado, leite, óleo e ovos. É misturada até ficar homogênea e modelada em bolinhas, que são assadas até ficarem douradas'  
    }, 
    {
        'nome':'Risole de presunto e queijo',
        'desc':'A massa é feita com farinha de trigo, leite, manteiga e temperos. É recheada com presunto e queijo, modelada em formato de meia-lua, empanada e frita até ficar crocante.'  
    }
],
    'Doces':[
    {
        'nome':'Brigadeiro crocante',
        'desc':' O brigadeiro é feito com leite condensado, manteiga e achocolatado. Depois de cozido, é misturado com arroz ou flocos de milho crocantes, modelado em bolinhas e enrolado em açúcar.'  
    },
    {
        'nome':'Bombom de uva na travessa',
        'desc':'Uvas são cobertas com chocolate derretido e dispostas em uma travessa. Uma camada de chocolate é espalhada por cima, formando uma sobremesa cremosa que é resfriada até firmar.' 
    },
    {
        'nome':'Pudim',
        'desc':' Feito com leite condensado, leite, ovos e açúcar. O pudim é assado em banho-maria até ficar firme e dourado, com uma calda de caramelo no fundo'   
    },
    {
        'nome':'Gelatina cremosa',
        'desc':'Gelatina é preparada normalmente, mas com a adição de creme de leite, criando uma camada cremosa e suave, geralmente servida em camadas com a gelatina comum.'   
    }
],
    'Sucos' :[
    {
        'nome':'Abacaxi com Hortelã',
        'desc':'O suco é feito batendo pedaços de abacaxi com folhas de hortelã e água ou água gelada, formando uma bebida refrescante e aromática.'   
    }, 
    {
        'nome':'Açai com Cupuaçu',
        'desc':'Açaí e cupuaçu são batidos com água ou suco, resultando em uma bebida cremosa e de sabor tropical, típica da Amazônia.'   
    }, 
    {
        'nome':'Morango',
        'desc':' Morangos são batidos com água ou leite, resultando em um suco doce e cremoso, perfeito para um sabor frutado e refrescante.'  
    }, 
    {
        'nome':'Laranja',
        'desc':'Laranjas são espremidas ou batidas com água, criando um suco cítrico e refrescante, cheio de vitamina C.'  
    }
]
}

const resultados = lista.Doces.map((elemento) => {
    document.querySelector('body').innerHTML +=`
    <h3>${elemento.nome} </h3>
    <h4>${elemento.desc}</h4>
    `
})