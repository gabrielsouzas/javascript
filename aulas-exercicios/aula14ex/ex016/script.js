function contar() {
    var ini = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    if (ini.value.length == 0) {
        ini.value = Number(1)
        window.alert('Nenhum valor inicial digitado, utilizando o valor 1')
    }
    if (fim.value.length == 0 || pas.value.length == 0 || Number(fim.value) == 0 
        || Number(pas.value) == 0 || Number(pas.value) > Number(fim.value)) {
        window.alert('[ERRO] Verifique se todos os campos foram digitados corretamente!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = `Contando: <br>`
    if (Number(ini.value) < Number(fim.value)) {
        //Contagem crescente
        for (var cont = Number(ini.value); cont <= Number(fim.value); cont+=Number(pas.value)) {
            res.innerHTML += `${cont} \u{1F449} `
        }
    } else {
        //Contagem descrescente
        for (var cont = Number(ini.value); cont >= Number(fim.value); cont-=Number(pas.value)) {
            res.innerHTML += `${cont} \u{1F449} `
        }
    }
    res.innerHTML += ` \u{1F3C1}`
    }
}