function DistribuirCaracter(){

    // selecionar Valor Digitado pelo usuário
    var caracter = document.getElementById('entrada').value

    // Limpar o campo de digitação
    document.getElementById('entrada').value = ''

    // Limpar espaços em branco nas extremidades da String
    caracter.trim()
    

    switch(caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            // Adicionar o caracter no campo referente a números
            document.getElementById('apenas_numeros').value += caracter 
            break;

            // Adicionar o caracter no campo referente a Letras
            default:
            document.getElementById('apenas_letras').value += caracter
    }
}

function ModificarEstilo(corDeFundo, l, a){
    document.getElementById('cor').style.backgroundColor = corDeFundo
    document.getElementById('cor').style.width = l
    document.getElementById('cor').style.height = a
}

function ModificarClasse(){
    document.getElementById('mensagem').className = 'estilo2';
    document.getElementById('h4_mensagem').textContent = 'Classe Modificada'
}

function RetornarClasse(){
    document.getElementById('mensagem').className = 'estilo1';
    document.getElementById('h4_mensagem').textContent = 'Classe Retornada'
}