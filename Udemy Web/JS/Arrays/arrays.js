// -- Array Multidimensional --

var lista_coisas = []

lista_coisas['frutas'] = []

lista_coisas['frutas'][0] = 'Banana'
lista_coisas['frutas'][1] = 'Uva'
lista_coisas['frutas'][2] = 'Maça'
lista_coisas['frutas'][3] = 'Laranja'

lista_coisas['Nomes'] = [
    'João',
    'Jorge',
    'Caio'
]

// -- Incluir e Excluir Elementos do Array (Push, Pop, Unshift, Shift) --

// Incluir Elemento no início do Array
lista_coisas['frutas'].push('Pera')

// Incluir Elemento no Final do Array
lista_coisas['Nomes'].unshift('Beatriz')

// Excluir Elemento no início do Array
lista_coisas['frutas'].pop()

// Excluir Elemento no final do Array
lista_coisas['Nomes'].shift()

console.log(lista_coisas['frutas'])
console.log(lista_coisas['Nomes'])


// -- Pesquisar Elemento no Array (indexOf) --

var lista_pesquisa = []

lista_pesquisa[0] = 'Caio'
lista_pesquisa[1] = 'Beatriz'

document.write(lista_pesquisa[1])

if(lista_pesquisa.indexOf('Caio') === 0){
    alert('Indice Encontrado!')
}else{
    alert('Indice não encontrado!')
}

// -- Ordernar Elementos no Array (Sort) --

var lista_ordernar = []

lista_ordernar [0] = 12
lista_ordernar [1] = 3
lista_ordernar [2] = 40
lista_ordernar [3] = 96
lista_ordernar [4] = 19

console.log(lista_ordernar.sort(ordernarNumeros))

function ordernarNumeros(a,b){
    return a - b
    // < 0 = a ordernado antes do b
    // > 0 = b ordernado antes do a
    // == a ordem é mantida
}