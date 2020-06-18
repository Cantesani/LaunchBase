
const nome = "Gabriel";
const sexo = "M";
const idade = 80;
const contribuicao = 35;
const tempoContribuicaoHomem = 35;
const tempoContribuicaoMulher = 30;

if (sexo == "M" && contribuicao >= 35 && idade+tempoContribuicaoHomem >= 95 || sexo == "F" && contribuicao >= 30 && idade+tempoContribuicaoMulher >= 85) {
    console.log (`${nome}, você pode se aposentar.`)
} else {
    console.log (`${nome}, você não pode se aposentar.`)
}