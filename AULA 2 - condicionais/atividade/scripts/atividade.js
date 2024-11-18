var n1 = prompt('Digite um número');
var n2 = prompt('Digite outro número');

n1 = Number(n1);
n2 = Number(n2);

var soma = n1 + n2;
var multiplicacao = n1 * n2;
var divisao = n1 / n2;
var subtracao = n1 - n2;

var escolha = prompt('Você deseja somar, subtrair, dividir ou multiplicar?').toLowerCase();

function calcular() {
    switch (escolha){
        case 'somar':
        alert('A soma deu: ' +soma);
        break
    
        case 'subtrair':
        alert('A subtração deu: ' +subtracao);
        break
    
        case 'dividir':
        alert('A divisão deu: ' +divisao)
        break
    
        case 'multiplicar':
        alert('A multiplicação deu: ' +multiplicacao)
        break
    }
    }

calcular();
