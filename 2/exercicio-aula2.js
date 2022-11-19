//pedir para o usuario digitar um numero ok
//converter em numero inteiro ok
//pedir para o usuario digitar outro numero ok
//converter em numero inteiro  ok

//mostrar subtracao concatenando com o texto 
//"a subtracao é: ..."
//mostrar a multiplicacao concatetando com o texto 
//" a multiplicacao é: ..."
//mostrar "a" divisao é: ..."
//mostrar a soma concatenando com o texto " soma é :..."


var numero1 = prompt("Digite um número ");
numero1 = parseInt(numero1)

var numero2 = prompt("Digitar outro número ");
numero2 = parseInt(numero2)

var sub = numero1 - numero2
var mult = numero1 * numero2
var div = numero1 / numero2
var soma = numero1 + numero2

alert("A subtração é: " + sub);
alert("A multiplicação é: " + mult);
alert("A divisão é: " + div,);
alert("A soma é: " + soma);


//feito sem precisar assistir a aula

//outras formas de resolver 
//usando o exemplo (numero1 + numero2)
//outra forma
// com esse exemplo `A subtração é:   ${sub}`