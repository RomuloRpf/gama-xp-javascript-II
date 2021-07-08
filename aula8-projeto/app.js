//pegar input do usuario
//se for Sim, mostra as categorias disponíveis, pergunta qual categoria ela escolhe
//se for Não, mostra todos os livros em ordem crescente pela quantidade de páginas

const livros = require('./database')
const readLine = require('readline-sync')

const entradaInicial = readLine.question('Deseja buscar um livro? S/N')

if(entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Categoria 1', '/Categoria 2', '/Categoria 4','/Categoria 6\n')

    const entradaCategoria = readLine.question('Qual Categoria você escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}
else {
    const livrosOrdenados = livros.sort((livro1,livro2) => livro1.paginas - livro2.paginas)
    console.log('Essas são todos os livros disponíveis:\n')
    console.table(livrosOrdenados)
}

