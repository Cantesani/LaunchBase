const nome = 'Gabriel'
const peso = 79
const altura = 1.73

const imc = peso / (altura * altura)

if (imc >= 30 ) {
    console.log (`${nome}, você está acima do peso. IMC= ${imc}`)
} else {
    console.log (`${nome}, você não está acima do peso IMC= ${imc}`)
}