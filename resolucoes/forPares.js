const _log = console.log;

const calcTabuada = (base) => {
  const tabuada = [];
  for (let i = 0; i <= 10; i++) {
    const multiplica = base * i;
    tabuada.push(multiplica);
  }
  return tabuada;
};

const tabuada5 = calcTabuada(5);

_log(tabuada5);

const separaBananinha = (arrBananinha) => {
  const bananinha = [];
  for (let i = 0; i < arrBananinha.length; i++) {
    if (arrBananinha[i] % 2 === 0) {
      bananinha.push(arrBananinha[i]); // Adiciona o número par ao array
    }
  }
  return bananinha; // Retorna o array de números pares após o loop
};

_log(separaBananinha(tabuada5));

/* CORRECAO DE CODIGO 


Remoção do return dentro do loop: Agora, a função adiciona os números pares ao array bananinha dentro do loop, sem retornar imediatamente. O return foi movido para fora do loop, para retornar o array completo após a iteração.

Adição do número par ao array: Em vez de criar um novo array a cada iteração, a correção adiciona diretamente o número par ao array bananinha.
*/

const arrNumerico = [22, 32, 9, 99, 199]

const separaPar = (lista)=>{
 const novaLista =[]
  for(let item of lista){
    if(item % 2===0){
      novaLista.push(item)
    }else{
      novaLista
    }
  }
    return novaLista
}

_log(separaPar(arrNumerico))