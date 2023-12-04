
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

function printImc(peso, altura){
  const imc = calculaIMC(peso, altura )
  const classificacao = defineIMC(peso, altura)   
  console.log(`Seu IMC é ${imc.toFixed(2)} e sua classificação é ${classificacao}`)
}

// funcao auto invocada
(function main(){
    let peso = 80
    let altura = 1.80
  printImc(peso, altura)
})()

//const main2 = main



