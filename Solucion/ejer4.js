function invierte(texto) {
    let invertir = '';
    for (let i = texto.length - 1; i >= 0; i--) {
      invertir += texto[i];
    }
    return invertir;
  }
  
  console.log(invierte("hola")); 