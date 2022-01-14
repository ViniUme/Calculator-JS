const MAX_LENGTH_VISOR = 10

function AddNumber(number){
    let result = document.getElementById('result')

    if( result.innerHTML.length < MAX_LENGTH_VISOR ){
        result.innerHTML += number
    }
}

function Clear(){
    document.getElementById('result').innerHTML = ''
}

function ClearAll(){
    document.getElementById('result').innerHTML = ''
    document.getElementById('count').innerHTML = ''
}

function AddFunction(action){
    let result = document.getElementById('result')
    let visor_count = document.getElementById('count')

    //if no number typed, add 0 in count and add action in final
    if(result.innerHTML == ''){ 
        return
    }
    //if no decimal place typed but there is a dot, add 0 in decimal place and add action in final
    else if( result.innerHTML.split('')[result.innerHTML.length - 1] == '.'){
        visor_count.innerHTML += ` ${result.innerHTML}0 ${action}`
        result.innerHTML = ''
    }
    else{
        visor_count.innerHTML += ` ${result.innerHTML} ${action}`
        result.innerHTML = ''
    }
}

function AddDot(){
    let result = document.getElementById('result')

    if(result.innerHTML == ''){
        result.innerHTML = '0.'
    }
    else if( result.innerHTML.split('')[result.innerHTML.length - 1] == '.'){
        return
    }
    else{
        result.innerHTML += '.'
    }
}

function Result(){
    let result = document.getElementById('result')
    let visor_count = document.getElementById('count')

    if(visor_count.innerHTML == ''){
        return
    }
    else if( result.innerHTML.split('')[result.innerHTML.length - 1] == '.'){
        visor_count.innerHTML += ` ${result.innerHTML}0`
        PrintResult()
    }
    else if(result.innerHTML == ''){ 
        return
    }
    else{
        visor_count.innerHTML += ` ${result.innerHTML}`
        PrintResult()
    }
}

function PrintResult(){
    let result = document.getElementById('result')
    let visor_count = document.getElementById('count')

    let count

    result.innerHTML = ''
    count = visor_count.innerHTML
    visor_count.innerHTML = ''
    count = count.replace('÷' , '/').replace('x' , '*')
    count = String(eval(count)).substring(0 , MAX_LENGTH_VISOR)

    result.innerHTML = count
}