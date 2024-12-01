function Duplicado(numero) {
    let duplicar = [];
    
    for (let i = 0; i < numero.length; i++) {
      for (let j = i + 1; j < numero.length; j++) {
        if (numero[i] === numero[j] && !duplicar.includes(numero[i])) {
          duplicar[duplicar.length] = numero[i]; 
        }
      }
    }
    
    return duplicar;
  }
  
  console.log(Duplicado([1,2,2,3,5,3,1,8,7,5]));