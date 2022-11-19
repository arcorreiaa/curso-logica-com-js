//Operador de coomparação

/*
    = recebe
    == igualdade (valor)
    != diferente (valor)
    === igualdade (valor e tipo)
    !== diferente (valor e tipo)
    > maior q
    >= maior ou igual
    < menor q
    <= menor ou igual
*/

//problema
// pedir para o usuarui digitar 
// 2 numeros e mostrar um boolean
//indicando se a media for maior q 5

//maneira diferente de fazer é:
// var num1 = parseFloat(prompt("Digitite um número"))


var num1 = prompt("Digite um número");
num1 = parseFloat(num1)

var num2 = prompt("Digite o segundo número");
num2 = parseFloat(num2)

var media = (num1 + num2) /2;

alert(media > 5 )


//feito acompanhando a aula

