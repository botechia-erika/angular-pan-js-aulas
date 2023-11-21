import { question } from "readline-sync"


let peso = Number(question("Qual o seu peso? "))
console.log(peso)
let altura = Number(question("Qual a sua altura? "))
console.log(altura)
function calculaIMC(peso, altura){
    return peso / (altura * altura)
}


function defineIMC(peso, altura){
   const imc = (calculaIMC(peso, altura)).toFixed(2)
   
   if (imc < 14.5){
            return "abaixo do peso"
        }else if (imc >= 14.5 && imc < 25){
            return "peso normal"
        }else if (imc >= 25 && imc < 30){
            return "acima do peso"
        }else if (imc >= 30 && imc < 40){
            return "obeso"
        }else if (imc >= 40){
            return "obesidade morbida"
        }
}

console.log(defineIMC(peso, altura))

