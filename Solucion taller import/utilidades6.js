let esElegibleParaPrestamo=(salarioAnual,puntajeCredito)=>{
    let resultado=(salarioAnual>3000 || puntajeCredito>650)?"elegible para prestamo":"no elegible para prestamo"
    return resultado
}
export{esElegibleParaPrestamo}