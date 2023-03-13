function calcular () {
    var num = document.getElementById('num').value;
    var end = document.getElementById('end').value;
    
    var res = num * end
    var i = 0

    resposta.innerHTML = `A tabuada de ${num} é: <br>`

    do {
        r = num*i
        resposta.innerHTML += `${num} x ${i} = ${r} <br> `
        i++

    }while (i <=end)
}