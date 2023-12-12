// objeto colecao de chaves e valores

// objeto literal

// estrutura basica de objetos

// editar info de um objeto
const vitor = {
  name: "Vitor Frota Guerra",
  age: 25
}

// objeto pode incrementar valores de forma dinamica
vitor.height = 1.69
console.log(vitor.name)
console.log(vitor.age)
console.log(vitor)
console.log(vitor.height)
//delete vitor.name

console.log(vitor)



// criar metodos (funcoes) para objetos

vitor.descrever = function() {
  console.log(`${this.name} tem ${this.age} anos`)
}

vitor.descrever()


const pessoa = {}

pessoa.name = "Renan"
pessoa.age = 30
pessoa.descrever = function() {
 console.log(`hello ${this.name}`)
}
console.log(pessoa.descrever())

pessoa['nome'] = 'teste'
console.log(pessoa.nome)

// acessar dinamicamente as valores de um objeto

class Person{
  fullName;
  age;
  birthYear;


  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = age;
    this.birthYear = new Date().getFullYear() - this.age;
  }

  describe() {
    console.log(`
     I'm ${this.fullName},  I was born on ${this.birthYear} and I have ${this.age} years old
    `)
  }
}


const p1 = new Person("Pepito da Silva", 28)
const p2 = new Person("Fernanda da Silva", 38)

p1.describe()

function compareAge(p1, p2){
  if(p1.age>p2.age){
    console.log(`${p1.fullName} e mais velho`)
  }else 
  if(p2.age>p1.age){
    console.log(`${p2.fullName} e mais velho`)
}else{
  console.log(`${p1.fullName} e ${p2.fullName} tem a mesma idade`)
}
}

compareAge(p1, p2)