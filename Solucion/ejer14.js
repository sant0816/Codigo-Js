function Combina(num1, num2) {
    let combinado = [];
  
   
    for (let i = 0; i < num1.length; i++) {
        combinado[i] = num1[i];
    }
  
    
    for (let i = 0; i < num2.length; i++) {
        combinado[num1.length + i] = num2[i];
    }
  
    return combinado;
  }
  
  console.log(Combina([6, 7 ,8 ], [9, 0, 1]));