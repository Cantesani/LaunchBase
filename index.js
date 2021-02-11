
const alunosDaTurmaA = [
    {
        nome: 'Gabriel',
        nota: 10
    },
    {
        nome: 'Zullino',
        nota: 10
    },
    {
        nome: 'Bocheca',
        nota: 5
    },
    {
        nome: 'josé',
        nota: 5
    }
]
const alunosDaTurmaB = [
    {
        nome: 'Ricardo',
        nota: 4.9
    },
    {
        nome: 'Duda',
        nota: 5
    },
    {
        nome: 'Felipe',
        nota: 5
    },
    {
        nome: 'Joao',
        nota: 5
    },
    {
        nome: 'Mario',
        nota: 9
    } 

]

function calculaMedia(alunos) {
    let soma = 0; 
    for (i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media

}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
   if (media >= 5) {
    console.log (`Parabéns, a Media da ${turma} foi ${media}`)
}  else {
    console.log (`Infelizmente a media da ${turma} foi ${media}`) 
}
} 
enviaMensagem(media1, 'turma A')
enviaMensagem(media2, 'turma B')
