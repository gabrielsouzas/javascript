var vet = []

function adicionar() {
    var num = document.getElementById('txtnum')
    var sel = document.getElementById('selnum')
    if (num.value.length == 0 || Number(num.value) == 0) {
        window.alert('Insira um número válido!')
    } else {
        if (vet.indexOf(Number(num.value)) == -1) {
            vet.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado.`
            sel.appendChild(item)
        } else {
            window.alert('Valor já adicionado!')
        }
        num.value = ''
        num.focus()
    }
}

function finalizar() {
    if (vet.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var div = document.getElementById('res')
        div.innerHTML = `<p>Ao todo, temos ${contarnumeros()} números cadastrados.</p>`
        div.innerHTML += `<p>O maior valor informado foi ${maiorvalor()}</p>`
        div.innerHTML += `<p>O menor valor informado foi ${menorvalor()}</p>`
        div.innerHTML += `<p>Somando todos os valores, temos ${soma()}</p>`
        div.innerHTML += `<p>A média dos valores digitados é ${media(soma())}</p>`
    }
}

function contarnumeros() {
    return vet.length
}

function maiorvalor() {
    let ord = vet
    ord.sort()
    return ord[ord.length-1]
}

function menorvalor() {
    let ord = vet
    ord.sort()
    return ord[0]
}

function soma() {
    let soma = 0
    for(let pos in vet){
        soma += Number(vet[pos])
    }
    return soma
}

function media(soma) {
    return soma/(vet.length)
}