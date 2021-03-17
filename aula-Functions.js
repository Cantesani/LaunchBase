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
    }

]
const alunosDaTurmaB = [ 
    {
        nome: 'Renato',
        nota: 9
    },
    {
        nome: 'Flavia',
        nota: 2
    },
    {
        nome: 'Fernando',
        nota: 10
    }

]

function calculaMedia(alunos) { 
return  (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
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