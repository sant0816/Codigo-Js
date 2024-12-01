function Sumanumeros(par) {
    let suma = 0;
  
    for (let i = 0; i < par.length; i++) {
      if (par[i] % 2 == 0) {
        suma += par[i];
      }
    }
  
    return suma;
  }
  
  console.log(Sumanumeros([6, 10, 4, 7, 3, 8])); 