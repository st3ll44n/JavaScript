class usuario {
    // id, @, nome, bio, email, genero
    // constructor --> 
    constructor(Id, Nickname, nome, email, bio, genero){
        this.Id = Id;
        this.Nickname = Nickname;
        this.nome = nome;
        this.email = email;
        this.bio = bio;
        this.genero = genero;
        this.postar = function(pensamento){
            document.querySelector("#resposta").innerHTML
            += `
            <div class = "post">
                    <h3>${this.Nickname}</h3>
                    <p> ${pensamento}</p>
            <div/>
              `
        }}}

var user1 = new usuario (1,'st3ll44n', 'Stella Andrade', 'stellan@gmail.com', 'Estudante de Tecnologia da Informação', 'feminino')
var user2 = new usuario (2, 'stellaaaa', 'Outra Stella', 'algumemail@gmail.com', 'a mesma de antes', 'feminino')

function postarFeed() {
    alert('Postado com sucesso!')
    pensamento = document.querySelector('#pensamento').value
    user1.postar (pensamento) 
}
