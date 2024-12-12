// Promise é uma promessa
// Resolve é o cumprimento da promessa
// Reject é o descumprimento da promessa
// FULLFILLED - 'promessa cumprida'
// PROMISSESTATE - 0estado da promessa
// PROMISSERESULT - o motivo do status 

// const promessa = new Promise((resolve, reject) => {
//     let nome = 'Victor'

//     if (nome == 'Victor'){
//             resolve('o usuario é Victor')
//             // resolve([])
//     //         resolve(alerta())
//     //             function alerta (){
//     //                 alert('oi')
//     //             }
//     }else{
//         reject('Porque o usuario não é Victor')
//     }
// })

// // then - espera que o resolve e retorna o que o resolve tiver, caso o reject acusa um erro
// // Then espera que dê errado
// promessa.then((dadosDoResolve) =>{
//     console.log(dadosDoResolve)
// })

// // catch - espera o reject e retorna o que o reject correspondente tiver, caso resolve ele não executa
// // Catch espera que dê errado
// promessa.catch((infoDoErro) => {
//     console.log(infoDoErro)
// })

// function sujeitoDemorado(){
//     return new Promise((resolve) => {
        
//         setTimeout(() => {
//             console.log('rodando')
//             resolve()
//         },-2000)
//     })
// }

// // async function é uma função assincrona

// async function carregando(){
//     console.log('oi')
//      await sujeitoDemorado()
//     console.log('terminei')
// }

// carregando()