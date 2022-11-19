//Operadores aritmeticos

/* 
    + adição
    - subtração
    / divisão
    % módulo = resto da divisão
    ** exponenciação = ao cubo
    ++ incremento = pega o valor e atribui mais um
    -- decremento = pega o valor e reduz mais um
*/

//ultilizando a precedencia de operadores é envolvendo
// oque for ultilizando primeiro dentro de  ().

//Pedir para o úsuario digitar dois números e mostrar a média


var num1 = prompt("Digite um número :")
num1 = parseFloat(num1);

var num2 = prompt("Digite outro número :")
num2 = parseFloat(num2);

//var media = (num1 + num2 /2) forma errada, resul diferent

var media = (num1 + num2) /2;


alert(media);


//feito assistindo aula