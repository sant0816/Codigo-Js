let esElegibleParaPrestamo=(salarioAnual,puntajeCredito)=>{
    let resultado=(salarioAnual>3000 || puntajeCredito>650)?"elegible para prestamo":"no elegible para prestamo"
    return resultado
}
console.log(esElegibleParaPrestamo(3500,670));
console.log(esElegibleParaPrestamo(2000,370));
console.log(esElegibleParaPrestamo(4000,170));