function Amarelo(){
    document.getElementById('texto').style.background = "yellow"
}

function ContarCaractere(){
    var input = document.getElementById('texto').value
    
    if (input.length < 3){
        document.getElementById('texto').style.background = "red"
    }
    else if(input.length >= 3){
        document.getElementById('texto').style.background = "green"
    }
}