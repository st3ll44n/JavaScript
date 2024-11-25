// var clienteNome = 'Leo'
// var clienteCPF = '999999999999'
// var clienteEmail = 'email@email.com'
// var clienteTelefone = '99999999999'
// var clienteTipoConta = 'fisico'
// var clienteSalto = 0 

// var clienteNome2 = 'Alessandra'

class Cliente {
    nome;
    datadeNascimento;
    cpf;
    email;
    telefone;
    tipoDeconta;
    saldo;
    depositar(valor){
        if (this.saldo <= 0){
            console.log('Operação não permitida!')
        }
        else{
        this.saldo += valor
        console.log(`O valor de ${valor} reais foi depositado com sucesso!`)
    }}

    // argumento é o valor pasasdo 
    // parametro é a palavra que vai salvar o argumento

    pix(valor){
        if (this.saldo < valor){
            console.log('Saldo insuficiente!')
        }
        else{
        this.saldo -= valor
        console.log(`Pix de valor ${valor} reais foi efetuado com sucesso!`)   
        }}
}

var cliente1 = new Cliente
cliente1.nome = 'Leo'
cliente1.datadeNascimento = '23/07/1983'
cliente1.cpf = '048975987-59'
cliente1.email = 'leozin@gmail.com'
cliente1.saldo = 1000

cliente1.pix(100)


console.log(cliente1)