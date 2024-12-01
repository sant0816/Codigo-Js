function Filtrar(mayor) {
    let resultado = [];
    let index = 0;
  
    for (let i = 0; i < mayor.length; i++) {
      if (mayor[i] > 10) {
        resultado[index] = mayor[i]; 
        index++;
      }
    }
  
    return resultado;
  }
  console.log(Filtrar([14, 8, 5, 16, 20, 4]));