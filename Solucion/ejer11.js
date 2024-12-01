function Rnumero(arreglo, num) {
  let resultado = [];
  let index = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > num) {
      resultado[index] = arreglo[i];
      index++;
    }
  }

  return resultado;
}

console.log(Rnumero([18, 30, 7, 15, 2, 8], 10));