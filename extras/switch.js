import { question } from "readline-sync";
import colors from "colors";
const title = colors.blue("SWITCH: ");
const definicao =
  "avalia expressao PONTUAL e executa a instrucao correspondente ao valor da expressao se nenhum caso tem correspondencia executa bloco default";

console.log(title + definicao);

let cor = "verde";
const input4Evaluate = cor;

switch (input4Evaluate) {
  case "vermelho":
    console.log("pare");
    break;
  case "amarelo":
    console.log("atencao");
    break;
  case "verde":
    console.log("siga");
    break;
  default:
    console.log("expresao invalida");
    break;
}
let fruitType = "Bananas";
switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
