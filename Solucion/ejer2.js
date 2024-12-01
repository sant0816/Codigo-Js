function Valores() {
    const numeros = [4, 3, 6, 1,4];  
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    console.log(suma);
}

Valores();