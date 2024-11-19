function pares(arreglo){
    let i=0;
    for(let numero of arreglo){
        if(numero %2==0){
            i++;
        }
    }
    return i;
}
const numeros =[1,2,3,4,5,6,7,8,9,10]
console.log(pares(numeros));