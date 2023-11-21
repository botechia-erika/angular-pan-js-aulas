import { question } from "readline-sync";

let nota1 = Number(question("Digite a primeira nota: "));
let nota2 = Number(question("Digite a segunda nota: "));
let nota3 = Number(question("Digite a terceira nota: "));
let notas = [nota1, nota2, nota3];

const calculaMedia = (notas) => {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
  }
  let media = (soma / notas.length).toFixed(2);
  console.log(media);
  {
    if (media >= 7) {
      console.log("Aprovado");
    } else if (media >= 5 && media < 7) {
      console.log("Recuperação");
    } else {
      console.log("Reprovado");
    }
  }
};

calculaMedia(notas);
