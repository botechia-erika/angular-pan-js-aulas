import { question } from "readline-sync";

const isRenanTShirtBlue = true;
const isLemanTShirtBlue = false;
let num;

const isPar = (num) => {
  if (num % 2 === 0 || num === 0) {
    console.log(`${num} é numero par`);
  } else if (num % 2 > 0) {
    console.log(`${num} é impar`);
  } else {
    console.log(`input ${num} invalido u
    `);
  }
};

num = Number(question("Digite um numero: "));

isPar(num);

const isDivisivelX5 = Number("Insira Numero e descubra se e divisivel por 5!");
if (num <= 0 || num > 100) {
  console.log("numero invalido");
} else if (isDivisivelX5 % 5 === 0) {
  console.log("Sim");
} else {
  console.log("Não");
}
