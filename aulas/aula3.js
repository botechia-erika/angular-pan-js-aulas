// funcao e um bloco de codigo reutilizavel que consta de parametros e podemos invocar em qualquer momento invocando e passando os argumentos de forma correta
function teste(){
    console.log("teste")
}

teste()
teste()
let realName = "erika"
function sayMyName(realName){
    console.log("my name is " + realName)
}

sayMyName(realName)

function quadrado(valor){
    return valor * valor
}


const square2 = quadrado(2)

console.log(square2)

console.log(square2 + square2 )

//incrementar juros

function incrementarJuros(valor, percentualJuros){
    return (percentualJuros/100) * valor
}

const jurosCalculado = incrementarJuros(200, 15)
console.log(jurosCalculado)

const calculaValorFinal = (valorBase, percentualJuros)=>{
    const jurosCalculado = incrementarJuros(valorBase, percentualJuros)
    const valorFinal = valorBase + jurosCalculado
    return valorFinal   
}

console.log(calculaValorFinal(300, 20))
// dentro da principal eu executo auxiliar
function main(){
    console.log("programa  principal")
}

main()