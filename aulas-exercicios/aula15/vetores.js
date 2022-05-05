let num = [5, 8, 2, 9, 3]
num.push(1) // Adiciona um valor no vetor aumentando seu tamanha automaticamente
num.sort() // Organiza o vetor em ordem crescente
console.log(num)
console.log(`O tamanho do vetor é ${num.length}`)
console.log(`O último elemento do vetor é ${num[num.length-1]}`)

// For simplificado apenas para Vetores e Objetos
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// Encontrar a posição de um valor dentro do Vetor
let posicao = num.indexOf(8)
// Se não encontrar vai retornar sempre -1
if (posicao == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 8 está na posição ${posicao}`)
}