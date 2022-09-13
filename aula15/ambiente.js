let num = [5, 8, 2, 9, 3]
num.push(1) //Essa função adiciona o valor 1 no final do elemento num. A ordem desse código influencia se eu usar a função sort
num.sort() //Essa função vai ordenar os índices de forma crescente, ordenada
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`) //Esse comando mostra qual valor está relacionado ao índice 0, que no caso é 5

let pos = num.indexOf(8)

if (pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`) //Vai estar na posição 4 por conta do sort
}
