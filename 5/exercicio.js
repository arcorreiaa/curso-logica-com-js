/* 
    fazer jogador 1 digitar um número
    fazer jogador 2 digitar outro numero
    se forem iguais mostrar mensagem 'empate'
    sortear um numero entre 0 e 1

    se o numero sorteado for 0, ganha
    quem escolher o numero Menor

    se o numero sorteado for 1, ganha quem escolher
    o numero maior
 */

    var jog1 = prompt("Digite um número");
    jog1 = parseInt(jog1)
    var jog2 = prompt("Digite um número");
    jog2 = parseInt(jog2);


    
    if (jog1 === jog2) {
        alert("Empate ")
    } else {
        var resul = parseInt(Math.random() *2)

        if(resul === 0){
            if(jog1 < jog2) {
                alert("Ganhou o jogador 1")
            } else{
                alert("ganhou o jogador 2")
            }
        } else {
            if(jog1 > jog2){
                alert("ganhou o jogador 1")
            } else {
                alert("Ganhou o jogador 2")
            }
        }

    }

    //feito acompanhando a aula