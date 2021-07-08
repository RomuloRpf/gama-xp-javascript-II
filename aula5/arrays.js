const alunasGama = ["Paula","Maria","Estela","Clara"]

console.log(alunasGama[3])

//Operador spread (...)

const alunasXp = [...alunasGama, "Simara"]

console.log(alunasXp)

//Métodos de Iteração
/*
for (let i = 0; i < alunasXp.length; i++) {
    console.log(alunasXp[i])
}
*/
alunasXp.map(aluna => console.log(aluna))

//Filter 
const numeros = [34,45,67,80,90,55,76]

const numerosImpares = numeros.filter(numero => numero%2 != 0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero%2 == 0)
console.log(numerosPares)

//find
const produtos = ["geladeira", "fogao", "cama", "mesa"]

const encontraCama = produtos.find(produto => produto === "cama")
console.log(encontraCama)

const encontraMesa = produtos.find(produto => produto === "mesa")
console.log(encontraMesa)

//sort
const numerosOrdemCrescente = numeros.sort()
console.log(numerosOrdemCrescente)

const numerosOrdemDecrescente = numeros.sort((a,b) => b-a)
console.log(numerosOrdemDecrescente)

//reduce - reduz nosso array a um resultado de uma operação matemática
const numbers = [1,34,35]

const soma = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
},0)

console.log(soma)