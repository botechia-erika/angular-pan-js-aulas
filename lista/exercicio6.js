// funcoes anidadas
function isMaior(idade){
    if(idade >= 18){
      return "MAIOR"
    }else{
        return "MENOR"
      }   
  }
  
  isMaior(28)
function printNameEIdade(name){
   console.log(`Meu nome e ${name} e sou ${isMaior(28)}`)
}

function main(){
    let name = "João"
    return(printNameEIdade(name))
}

main()