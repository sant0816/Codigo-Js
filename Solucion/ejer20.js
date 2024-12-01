function Objeto(clave, valor) {
    let objeto = {};
  
    for (let i = 0; i < clave.length; i++) {
      objeto[clave[i]] = valor[i];
    }
  
    return objeto;
  }
  
  let clave = ["nombre", "edad", "ciudad"];
  let valor = ["Santiago", 19, "popayán"];
  

  console.log(Objeto(clave, valor));