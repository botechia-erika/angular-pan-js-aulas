const _log = console.log

const calcTabuada= (base)=>{
  const tabuada =[]
  for(let i = 0; i<=10; i++){
    const multiplica= base * i
    tabuada.push(multiplica)
  }
 return tabuada
}


_log(calcTabuada(5))