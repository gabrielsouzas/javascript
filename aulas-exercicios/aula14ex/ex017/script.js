function gerartabuada() {
    var num = document.getElementById('txtnumero')
    var tab = document.getElementById('seltab')
    tab.innerHTML = ''
    if (num.value.length == 0 || Number(num.value) == 0) {
        window.alert('[ERRO] Digite um número válido para a tabuada!')
    } else {
        tab.innerHTML = ''
        for (var i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${num.value} X ${i} = ${num.value*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}