var objetos = ['Cadeira', 'Impressora', 'Garfo']

function Adicionar(){
    var objeto = document.getElementById('objeto').value

    if(objeto != '') {
        if( objetos.indexOf(objeto) !== -1) {
        alert('Objeto já foi adicionado')
         document.getElementById('objeto').value = ''

        } else {

        objetos.push(objeto)
       
        document.getElementById('objeto').value = ''

        console.log(objetos)

        }
    }else {    
        alert('Informe um objeto válido')  
    }
       
}

function Ordernar(){
    objetos.sort()
    console.log(objetos)
}
