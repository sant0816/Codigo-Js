function Contarpalabra(arreglo, palabra) {
    let contador = 0;
  
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] == palabra) {
        contador++;
      }
    }
  
    return contador;
  }
  
  let palabra = ["mango", "banana", "mango", "naranja", "mango"];
  console.log(Contarpalabra(palabra, "naranja")); 
  console.log(Contarpalabra(palabra, "mango"));