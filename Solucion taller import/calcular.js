let calcularDescuento=(precio)=>{
    let descuento = (precio>1000)?precio*0.20:(precio>=500 &precio<=1000)&(precio<500)?precio*0.10:"no aplica descuento"
    return descuento
}
export {calcularDescuento}
