const _log = console.log
const arrStrings = ['Joao', 'Vitor', 'Marina']


const arrNotas = [5, 7, 8, 2, 5]

const calcMedia = (arrNotas) =>{
 for(let i = 0; i < arrNotas.length; i++){
  let sum = 0;
  sum += arrNotas[i]
  return sum
 }
}

_log(calcMedia(arrNotas))