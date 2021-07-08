const filmes = [
    {
        id: 1,
        titulo: "Filme 1",
        descricao: "Descrição 1",
        duracao: 120
    },
    {
        id: 2,
        titulo: "Filme 2",
        descricao: "Descrição 2",
        duracao: 100
    },
    {
        id: 3,
        titulo: "Filme 3",
        descricao: "Descrição 3",
        duracao: 150
    }
]

const [{id, titulo, descricao, duracao}] = filmes

console.log(titulo)

filmes.map(filme => console.log(filme.descricao))