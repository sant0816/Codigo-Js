function Palindromo(palabra) {
    let palabrainvertida ='';
  
    for (let i = palabra.length - 1; i >= 0; i--) {
      palabrainvertida += palabra[i];
    }
  
    return palabra == palabrainvertida;
  }
  
  console.log(Palindromo("rayar"));  
  console.log(Palindromo("hola"));  
  console.log(Palindromo("seres"));
  console.log(Palindromo("hervir"));