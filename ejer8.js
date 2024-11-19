let miArreglo = [1, 2, 3, 4, 5, 2, 3, 4];
let objetoSinRepetidos = {};

miArreglo.forEach(function (elemento) {
  objetoSinRepetidos[elemento] = elemento;
});

let arregloSinRepetidos = Object.values(objetoSinRepetidos);

console.log(arregloSinRepetidos); // [1, 2, 3, 4, 5]