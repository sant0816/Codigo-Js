let categoriaIMC=(peso)=>{
    let resultado=(peso<18.5)?"bajo peso":(peso>=18.5 && peso<=24.9)?"normal":(peso>=25 && peso<=29.9)?"sobrepeso":(peso>=30)?"obesidad":""
    return resultado
}

export{categoriaIMC}