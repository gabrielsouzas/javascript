function parimpar(n) {
    if (n%2==0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

let res = parimpar(1)
console.log(res)
console.log(parimpar(353))

// Cria a função com dois parametros e caso algum não seja passado ele recebe 0
function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(7))

// O nome da função vira a variável
let v = function(x){
    return x*2
}

console.log(v(5))

// Função com recursividade
function fatorial(n) {
    if (n == 1) {
        return1    
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))