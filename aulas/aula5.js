const _log = console.log
const arrStrings = ['Joao', 'Vitor', 'Marina']
arrStrings.push('Renan')
const aluno = arrStrings.pop()
arrStrings[3]="Luiz"

arrStrings.push(aluno)
// em caso da posicao determinada ja estar usada se substitui a posicao
_log(arrStrings)

const arrNotas = [5, 7, 8, 2, 5]

const calcMedia = (arrNotas) =>{
 for(let i = 0; i < arrNotas.length; i++){
  let sum = 0;
  sum += arrNotas[i]
  return sum
 }
}

_log(calcMedia(arrNotas))

const nomeString = "Joao da Silva Sauro"


const forString = (nomeString)=>{
  for(let i= 0; i<nomeString.length; i++){
    console.log(nomeString[i])
  }
}
//forString(nomeString)