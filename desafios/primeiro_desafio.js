import { question } from "readline-sync";
let kmDistancia, precoGasolina, kmXLitro;
function cotacaoViagem(kmDistancia, precoGasolina, kmXLitro) {
  let valorViagem = ((kmDistancia / kmXLitro) * precoGasolina).toFixed(2);
  return valorViagem;
}

kmDistancia = Number(question("insira o numero de km de sua viagem ")); // em km
precoGasolina = Number(question("insira o preco da gasolina ")); // em reais
kmXLitro = Number(question("insira o consumo do carro ")); // em km/L

console.log(cotacaoViagem(kmDistancia, precoGasolina, kmXLitro));
