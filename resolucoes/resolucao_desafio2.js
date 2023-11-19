const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmLitro = 10;
const distanciaEmKm = 200;
const tipoCombustivel = "Etanol";
const litrosConsumidos = distanciaEmKm / kmLitro;
let precoCombustivel;
if (tipoCombustivel === "Etanol") {
  precoCombustivel = precoEtanol;
} else if (tipoCombustivel === "Gasolina") {
  precoCombustivel = precoGasolina;
} else {
  console.log("Combustível inválido");
}

const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));
