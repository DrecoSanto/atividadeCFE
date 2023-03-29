//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo (

        {
            top:0,
            left:0,
            behavior: "smooth"
        }

    )

}

//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementById("Usuário").value;
    var Senha = document.getElementById("Senha").value;


if (usuario == "Admin" && Senha == "123456") {
window.location = "index.html";
logado = 1;


if(logado ==0){
    alert("Acesso Negado. Dados incorretos");




}



}



    
}





//Ativar alert no botão cadastrar

function cadastro(){
     alert("cadastro com sucesso");
     windows.location.hrf = "index.html";
     

}

