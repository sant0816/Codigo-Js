const Mayusculas = () => {
    const nombres = ['laura', 'luisa', 'santiago'];  
    const nombremayus = nombres.map(nombre => nombre.toUpperCase());
    console.log(nombremayus);
}

Mayusculas();