function Numeroaleatorio(cantidad) {
  let numeros = [];
  
  for (let i = 0; i < cantidad; i++) {
    
    let aleatorio = ((Date.now() + i) % 100) + 1;
    numeros.push(aleatorio);
  }
  return numeros;
}

console.log(Numeroaleatorio(10));