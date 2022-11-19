//operadores logicos
// ! não (not)
// && e (and)
// || ou (or)
/* 
    pedir para o usuário digitar dois números
     e mostrar uma mensagem informando
     se foi aprovado ou não.
     a nota de corte é 5
     contudo, se qualquer uma das notas for zero
     reprova automaticamente

*/

var nota1 = parseInt(prompt("Digite a nota 1"));
var nota2 = parseInt(prompt("Digite a nota 2"));

var media = (nota1 + nota2) /2;

var aprovacao = media >= 5 ? alert("PASSOU") : alert("REPROVADO")

// if (media >= 5) {
//     alert("Você passou!")
// } else {
//     alert("REPROVADO")
// }


