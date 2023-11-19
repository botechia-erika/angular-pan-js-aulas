import { question } from "readline-sync";
let isAlcool,
  isGasolina,
  kmTravel,
  kmLt,
  priceGasoline,
  priceAlcohol,
  km4Lt,
  fuelPrice;
const defineFuel = () => {
  let fuel = question(
    "Qual combustível você deseja utilizar? (A) Álcool ou (G) Gasolina: "
  ).toUpperCase();
  if (fuel === "A") {
    isAlcool = true;
    isGasolina = false;
  } else if (fuel === "G") {
    isAlcool = false;
    isGasolina = true;
  } else {
    console.log("Opção inválida!");
    defineFuel();
  }
  return fuel;
};

const fuelSelected = defineFuel();

kmTravel = Number(question("Quantos km você deseja percorrer? "));
km4Lt = Number(question("Quantos km seu carro faz por km? "));

const calcPrice = (fuelSelected) => {
  if (fuelSelected === "A") {
    return (fuelPrice = 4.9);
  } else {
    return (fuelPrice = 5.3);
  }
};

let priceBase = calcPrice(fuelSelected);

function cotacaoViagem(kmTravel, priceBase, km4Lt) {
  let valorViagem = ((kmTravel / km4Lt) * priceBase).toFixed(2);
  return valorViagem;
}

console.log(cotacaoViagem(kmTravel, priceBase, km4Lt));
