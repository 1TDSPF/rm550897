
//CRIAR UMA LISTA DE OBJETOS
let listaDeUsuarios = [
    {
        nomeCompleto : "Jáu da Selva",
        usuarioEmail : "jau@email.com",
        usuarioSenha : "123456"
    },
    {
        nomeCompleto : "Paulo das Couves",
        usuarioEmail : "paulo@email.com",
        usuarioSenha : "123456"
    },
    {
        nomeCompleto : "Jose da Silva",
        usuarioEmail : "ze@email.com",
        usuarioSenha : "123456"
    },
    {
        nomeCompleto : "Maria do Socorro",
        usuarioEmail : "emergencia@email.com",
        usuarioSenha : "123456"
    },
    {
        nomeCompleto : "Andre da silva",
        usuarioEmail : "Andes@email.com",
        usuarioSenha : "123456"
    },
];

//ADICIONANDO A LISTA DE OBJETOS AO LOCAL-STORAGE
localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));


addEventListener("click", (evt)=>{
    
    const inputEmail = document.querySelector("#idEmail");
    const inputPass = document.querySelector("#idPass");
    
    if(evt.target.id == "btnSubmit"){

        try {
            
            listaDeUsuarios.forEach((usuario)=>{
     
                if(inputEmail.value == usuario.usuarioEmail && inputPass.value == usuario.usuarioSenha){
                    throw "VALIDADO";
                }
            });

            throw "NÃO VALIDADO";

        } catch (msg) {
            const msgStatus = document.querySelector("#msgStatus");
            
            if(msg == "VALIDADO"){
                msgStatus.setAttribute("style","color:#00ff00;");
                msgStatus.innerHTML = "<span><strong>Login efetuado com Sucesso!</strong></span>";
            }else{
                msgStatus.setAttribute("style","color:#ff0000;");
                msgStatus.innerHTML = "<span><strong>Senha ou nome de usuário inválidos!</strong></span>";
            }
            
        }
    //Ao clicar no í

    }else if(evt.target.className == "fa fa-eye" || evt.target.className == "fa fa-eye-slash"){

        if(inputPass.getAttribute("type") == "password"){
            inputPass.setAttribute("type","text");
            evt.target.setAttribute("class","fa fa-eye-slash")
        }else{
            inputPass.setAttribute("type","password");
            evt.target.setAttribute("class","fa fa-eye")
        }

    
    }
});