function openMenu(){
    let click = document.getElementById("Mn_interactive").style.width = "20%" 

    
}


function closeMenu(){
    document.getElementById("Mn_interactive").style.width = "0%"
    // alert("Retornando a página anterior!")
}

function openSobre(){
    let curiosidades = document.getElementById("button-Sobre")
    let SB = curiosidades.value

    if(SB == addEventListener("click", openSobre)){
        window.location.href = "https://www.creativosonline.org/pt/10-curiosidades-sobre-javascript.html"
    }
    
}

function openDicas(){
    let dicas = document.getElementById("button-dicas")
    let dic = dicas.value

    if(dic == addEventListener("click", openDicas)){
        window.location.href = "https://serfrontend.com/blog/5-dicas-para-iniciantes-em-programacao-com-Javascript/index.html"
    }
    
}

function openContatos(){
    let contatos = document.getElementById("button-contacts")
    let contat = contatos.value

    if(contat == addEventListener("click", openContatos)){
        window.location.href = "http://127.0.0.1:5500/Arqvs_front/menu_interativo/contatos.html"
    }
}