/*let arreglo=["s","a","r","b","o"];

function invertir(){
    for(var i=0;i<arreglo.length;i++){
        for(let o=arreglo.length;o>0;o--){
            arreglo[i]=arreglo[o];
        }
    }
    console.log(arreglo);
}
invertir();*/

/*function invertirArreglo(arr) {
    return arr.reverse();

}
const arregloOriginal = [1, 2, 3, 4, 5];
const arregloInvertido = invertirArreglo(arregloOriginal);
console.log(arregloInvertido);*/
let arregloOriginal = [1, 2, 3, 4, 5];

function invierteArreglo(arreglo) {
    return arreglo.reverse();
}
let arregloInvertido = invierteArreglo(arregloOriginal.slice());

console.log(arregloInvertido); 
