const Eliminarduplicado = () => {
    const numero = [2, 1, 3, 2, 4, 3, 5];  
    const unicos = [...new Set(numero)];
    console.log(unicos);
}

Eliminarduplicado(); 