const isRenanTShirtBlue = true;
const isLemanTShirtBlue = false;

const isPar = (num) => {
  if (num % 2 === 0 || num === 0) {
    console.log("é par");
  } else if (num % 2 === 1) {
    console.log("e impar");
  } else {
    console.log("input invalido");
  }
};

isPar(2);
isPar(5);
isPar(`a`);
