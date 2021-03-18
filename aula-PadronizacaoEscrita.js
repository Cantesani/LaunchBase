const alunosDaTurmaA = [{
        nome: 'Gabriel',
        nota: 9
    },
    {
        nome: 'Mayara',
        nota: 9
    },
    {
        nome: 'Sasha',
        nota: 9
    },
    {
        nome: 'josé',
        nota: 2
    },
    {
        nome: 'Sasha',
        nota: 10
    }
]

const alunosDaTurmaB = [{
        nome: 'Renato',
        nota: 10
    },
    {
        nome: 'Flavia',
        nota: 2
    },
    {
        nome: 'Fernando',
        nota: 10
    },
    {
        nome: 'Fernando',
        nota: 10
    },
    {
        nome: 'Fernando',
        nota: 10
    }
]

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
}

function enviaMensagem(media, turma) {
    if (media >= 5) {
        console.log(`Parabens, a media da ${turma} foi maior que 5. Media: ${media}`)
    } else {
        console.log(`Infelizmente a media foi menor que 5. Media: ${media}`)
    }
}

function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
        aluno.reprovado = true

    }
}

function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O Aluno ${aluno.nome} está reprovado`)

    }
}

function alunosReprovados(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno);
    }
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

enviaMensagem(media1, 'Turma A')
enviaMensagem(media2, 'Turma B')

alunosReprovados(alunosDaTurmaA)
alunosReprovados(alunosDaTurmaB)