function Ordenar(numeros) {
    for (let i = 0; i < numeros.length; i++) {
      for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] > numeros[j]) {
       
          let menormayor = numeros[i];
          numeros[i] = numeros[j];
          numeros[j] = menormayor;
        }
      }
    }
    return numeros;
  }
  
  console.log(Ordenar([5, 3, 6, 1, 8])); 