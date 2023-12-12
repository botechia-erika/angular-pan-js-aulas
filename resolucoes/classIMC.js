console.log('IMC')

class Person{
  fullName;
  height;
  weight;
  imc;

  constructor (fullName , height , weight){
    this.fullName = fullName;
    this.height = height;
    this.weight = weight;
    this.imc = (this.weight / (this.height * this.height)).toFixed(2)
  }
  saidIMC(){
    console.log(`
     Ola, meu nome e ${this.fullName} 
     tenho ${this.height} de altura e ${this.weight}kg
     e meu IMC equivale a ${this.imc}
    `)
   }
    defineImc(){
      const imcClassification=()=>{
    if(this.imc < 14.5){
          return "abaixo do peso"
          }else if (this.imc >= 14.5 && this.imc < 25){
    return "peso normal"
          }else if (this.imc >= 25 && this.imc < 30){
          return "acima do peso"
          }else if (this.imc >= 30 && this.imc < 40){
          return "obeso"
          }else if (this.imc >= 40){
          return "obesidade morbida"
          }
    }
    return (`segundo o SUS me imc de ${this.imc} e classificado como ${imcClassification()}`)
  }
}

const pessoa1 = new Person("Fabricio Souza", 1.78, 98)


const jose = new Person("Jose", 1.75, 70)

console.log(jose.defineImc())