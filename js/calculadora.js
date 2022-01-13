var list_count = ''

function AddNumber(number){
    let result = document.getElementById('result')
    result.innerHTML += number
}

function Clear(){
    document.getElementById('result').innerHTML = ''
}

function ClearAll(){
    document.getElementById('result').innerHTML = ''
    document.getElementById('count').innerHTML = ''

    list_count = ''
}

function AddFunction(sinal){
    let result = document.getElementById('result')
    let visor_count = document.getElementById('count')

    list_count += new String(result.innerHTML + " " + sinal + " ")
    visor_count.innerHTML = list_count
    result.innerHTML = ''
}