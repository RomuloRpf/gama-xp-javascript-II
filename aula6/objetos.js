const pessoa = {
    nome: "Pedro",
    idade: 30,
    cidade: "Rio de Janeiro"
}

//Notação de Ponto
console.log(pessoa.nome)

//Notação de colchetes

console.log(pessoa['idade'])

//Como desestruturar Objetos

const {nome, idade, cidade} = pessoa

console.log(nome)
console.log(idade)
console.log(cidade)