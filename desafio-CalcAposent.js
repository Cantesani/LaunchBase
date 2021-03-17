const nome = 'Mayara'
const sexo = 'F'
const idade = 55
const contribuicao = 30 //em anos

const somaContribuicao = idade + contribuicao

const homemAposenta = sexo == 'M' && contribuicao >= 35 && somaContribuicao >= 95
const mulherAposenta = sexo == 'F' && contribuicao >= 30 && somaContribuicao >= 85

if (homemAposenta || mulherAposenta) {
    console.log (`${nome}, vc pode se aposentar`)
    } else {
    console.log (`${nome}, vc não pode se aposentar`)
    }






// if (sexo == 'M' && contribuicao >= 35) {
//     console.log (`${nome}, voce pode se aposentar`) 
//     } else 
//     console.log (`${nome}, voce não pode se aposentar`)

//     if (sexo == 'F' && contribuicao >= 30) {
//         console.log (`${nome}, voce pode se aposentar`) 
//         } else 
//         console.log (`${nome}, voce não pode se aposentar`)

