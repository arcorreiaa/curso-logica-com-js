/*
    pedir para o usuario digitar um número
    converter o numero em inteiro
    pedir para o usuario digitar outro numero
    converter em numero inteiro

    mostrar um alert o seguinte texto
    o resto da divisao de (n1) por (n2) é: (resultado);

    mostrar num alert o seguinte texto o numero
    (n1) elevado a (n2) é: (resultado)
 */

    var num1 = prompt("insert a number: ");
    num1 = parseInt(num1);

    var num2 = prompt("insert a second number: ");
    num2 = parseInt(num2);

    var res = num1 ** num2

    alert("O resto da divisão de " + num1 + " por " + num2 + " é " + (num1 % num2) );

    alert("O número " + num1 + " elevado a " + num2 + " é "+ res);

    
    //feito sem precisar ver resultado na aula

