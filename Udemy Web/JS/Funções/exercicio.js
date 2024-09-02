var num1 = prompt('Digite um número');
var num2 = prompt('Digite outro número');
var operacao = prompt('Digite a operação');

function calc(num1, num2, operacao){

 num1 = parseFloat(num1);
 num2 = parseFloat(num2);

 var resultado = 0;

 while (operacao != 'subtracao' && operacao != 'soma'){
   operacao = prompt("Operação invalida, digite a operação novamente:")
 }

 if(operacao == 'soma'){
    resultado = num1 + num2;
 }

 else if(operacao == 'subtracao'){
    resultado = num1 - num2;
 } 

 return resultado;
}

document.write('O resultado é: ' + calc(num1, num2, operacao));