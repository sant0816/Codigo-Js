let esBisiesto=(bis)=>{
    let resultado=(bis %4==0 && bis /400)? "es bisiesto":"no es bisiesto"
    return resultado;
}
console.log(esBisiesto(1980));
console.log(esBisiesto(2000));
console.log(esBisiesto(2015));
