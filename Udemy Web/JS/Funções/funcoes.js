/*var largura = prompt('Digite o valor da largura')

var comprimento = prompt('Digite o valor do comprimento')

var area = calcularArea(largura, comprimento);

document.write('O valor da área é: ' + area + ' metros quadrados')

function calcularArea(largura, comprimento){

    var area = largura * comprimento;

    return area;
}

// Parametros

function soma (a,b){
    return a + b;
}

console.log(soma(7,7)) // considera os dois paramentros
console.log(soma(7,6,4,9)) // desconsidera os dois ultimos parametros que não foram passados
console.log(soma(7)) // B === Undenfined
console.log(soma()) // A e B === Undefined

document.write('<br/>')

// Funções anonimas

var nome = prompt("Digite seu nome")

var exibirSaudacao = function(nome){
    document.write('Olá ' + nome + ', tudo bem?')
}

exibirSaudacao(nome);

Callback

function exibirArtigo(id, callbackSucesso, callbackError){
    if(true){
        callbackSucesso('Funções de callback em JS','funções de callback são muito utilizadas......')
    } else{
        callbackError('Erro ao recuperar os dados')
    }

}

var callbackSucesso = function(titulo, descricao){
    document.write('<h1/>' + titulo + '<h1/>')
    document.write('<hr/>')
    document.write('<p>' + descricao + '</p>')
}

var callbackError = function(error){
    document.write('<p><b>Error : <b/>' + error + '</p>')
}

exibirArtigo(1, callbackSucesso,callbackErro)*/

document.write('<br/>')

// Funções Datas

var data = new Date()


document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear())

document.write('<br/>')

var data2 = new Date()

data2.setDate(data.getDate() + 16)
data2.setMonth(data.getMonth() + 2)
data2.setFullYear(data.getFullYear() + 1)

document.write('Data Modificada: ', data2.toString())

var milisegundos = (data2.getTime() - data.getTime())
var milisegundos_dia = 1*24*60*60*1000

document.write('<br/>')

document.write('A diferença de dias entre as duas datas: ', Math.ceil(milisegundos/milisegundos_dia))

