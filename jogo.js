var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = '';

function validarVitoria(){
    let vencedor = document.querySelector('.vencedor');

    if(playerOpt == "papel"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = 'O jogo foi empatado';
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = 'O inimigo ganhou';
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = 'O player ganhou';
        }

    }
    
    if(playerOpt == "tesoura"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = 'O player ganhou';
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = 'O jogo foi empatado';
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = 'inimigo ganhou';
        }
    }    
    if(playerOpt == "pedra"){
         if(inimigoOpt == "papel"){
                vencedor.innerHTML = 'inimigo ganhou';
         }else if(inimigoOpt == "tesoura"){
                vencedor.innerHTML = 'O player ganhou';
          }else if(inimigoOpt == "pedra"){
                vencedor.innerHTML = 'O jogo foi empatado';
         }
    }    


}

function resetInimigo(){
    const enemyOpitions = document.querySelectorAll('.enemy-opitions div > img');
    for(var i = 0; i < enemyOpitions.length; i++){
        enemyOpitions[i].style.opacity=0.3;
    }   
}
function inimigoJogar(){
    let rand = Math.floor(Math.random()*3); //para gerar um número aleatorio entre 0 e 1. Math.random() ele dá um número entre 0 e 1 e pego esse número e multiplico por 3(então quando for 1 * 3 vai me dar 3),e utilizo o metodo Math.floor()para aredendor esse número. 
    
    //para pecorre o loop
    const enemyOpitions = document.querySelectorAll('.enemy-opitions div > img');
    resetInimigo(); //função para resetar a opt do inimigo

    for(var i = 0; i < enemyOpitions.length; i++){ //
        if(i == rand){  // condição para quando i for igual a rand é o valor que quer q o inimigo jogue.
            enemyOpitions[i].style.opacity = 1;
            inimigoOpt = enemyOpitions[i].getAttribute('opt');
        }
    }

  

    validarVitoria();

    //alert(playerOpt);
    //alert(inimigoOpt);
}

function resetOpactyPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity=0.3;
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', (t)=>{ // O t na função e o t.target é paa recuperar o que foi clicado na função.
        resetOpactyPlayer();//função criada para tirar a opacity dos elementos que não foram clicados.
        t.target.style.opacity = 1; //pegando o elemento que foi selecionado e mudando a opacity.
        playerOpt = t.target.getAttribute('opt');//para saber o que esta sendo clicado.
        

        inimigoJogar(); //função para o outro jogador jogar.
        //alert(playerOpt);
    });
}