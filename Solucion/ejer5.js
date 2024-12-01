function Verificar(numero) {
    let resultado = 'Impar';
    
    for (let i = 0; i <= numero; i++) {
      if (i == numero && numero % 2 == 0) {
        resultado = 'Par';
      }
    }
    return resultado;
  }
  
  console.log(Verificar(4)); 
  console.log(Verificar(6));
  console.log(Verificar(23));