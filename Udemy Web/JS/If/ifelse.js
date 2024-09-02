if(2 == 3){
    document.write('Entrou dentro do bloco if (verdadeiro)')
}
else{
    document.write('Entrou dentro do bloco else (Falso)')
}


if(22 >= 20){
    document.write('Entrou dentro do bloco if (verdadeiro)')
} 
else{
    document.write('Entrou dentro do bloco else (Falso)')
}

var nota = prompt('Digite a nota do aluno');
var faltas = prompt ('digite a quantidade de faltas');
var faltas_maximas = 15;
var media = 7;

if (nota >= media && faltas < faltas_maximas){
    document.write('Aprovado')
}
else{
    document.write('Reprovado')
}