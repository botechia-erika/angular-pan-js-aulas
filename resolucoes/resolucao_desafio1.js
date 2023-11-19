const precoCombustivel = 5.79;
const kmLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmLitro;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));
