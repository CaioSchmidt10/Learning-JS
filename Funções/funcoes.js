function calcularAreaTerreno (largura,comprimento){
    var area = largura * comprimento;

    return area
}

var largura = prompt('Digite valor da largura')
var comprimento = prompt('Digite valor do comprimento')
var area = calcularAreaTerreno (largura,comprimento);

document.write('A área possui ' + area + ' metros quadrados')

document.write('<br/>')

// Funções String

var nome = prompt('Digite o seu nome: ')

document.write(nome.substr(0, 2))

var nome2 = 'Beatriz Paes Pinto Valença'

document.write(nome2.toLowerCase() + '<br/>')

// Funções Matemáticas

var x = Math.ceil(10.980)
document.write(x + '<br/>')

var y = Math.floor(10.480)
document.write(y + '<br/>')

var z= Math.round(10.580)
document.write(z + '<br/>')

var random = Math.random()
document.write(random)