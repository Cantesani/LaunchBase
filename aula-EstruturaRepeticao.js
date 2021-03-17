// criar um programa que calcula a média
// Das notas entre os alunos e envia
// mensagem do calculo da media
// se a media for maior que 5, parabelizar a turma


const alunosDaTurmaA = [ 
    {
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
        nome: 'Lucas',
        nota: 10
    }
]
const alunosDaTurmaB = [ 
    {
        nome: 'Bruno',
        nota: 10
    },
    {
        nome: 'Victor',
        nota: 10
    },
    {
        nome: 'Matheus',
        nota: 7.9
    },
    {
        nome: 'Caio',
        nota: 4.8
    },
    {
        nome: 'Alice',
        nota: 8
    }

]

function calculaMedia(alunos) { 
    let soma = 0;
    for (let i=0; i < alunos.length; i++ ) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media

}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    if (media>= 5)
    { 
        console.log (`Parabens, a media da ${turma} foi maior que 5. Media: ${media}`)
    } else {
        console.log (`Infelizmente a media foi menor que 5. Media: ${media}`)
    }
    }   

    enviaMensagem(media1, 'Turma A')
    enviaMensagem(media2, 'Turma B')