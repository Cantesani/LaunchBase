const nome = "Gabriel";
const peso = 78;
const altura = 1.76;
const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log (`${nome}, seu IMC é ${imc} e você está acima do peso`)
}else 
console.log (`${nome}, seu IMC é ${imc} e você não está acima do peso`)