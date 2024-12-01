function Encontrar() {
    const numeros = [2, 3, 4, 9, 6];  
    let max = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i];
        }
    }
    console.log(max);
}

Encontrar();