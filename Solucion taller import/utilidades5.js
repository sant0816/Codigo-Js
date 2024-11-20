let esBisiesto=(bis)=>{
    let resultado=(bis %4==0 && bis /400)? "es bisiesto":"no es bisiesto"
    return resultado;
}
export{esBisiesto}