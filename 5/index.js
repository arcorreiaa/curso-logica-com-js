// controlhe de decisão
//problema
// pedir para o usuário digitar dois números
//e mostrar uma mensagem informando se foi aprovado
//ou não, A nota de corte é 5


var num1 = parseFloat(prompt("Digite a primeira nota:"));

var num2 = parseFloat(prompt("Digite a segunda nota"));

var media = (num1 + num2) /2;

if (media >5){
    alert("Parabéns você passou ! Sua media foi: " + media)
} else{
    alert("Você foi reprovado");
};


//feito sem assistir a aula de resolução