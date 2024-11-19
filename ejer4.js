let numeros=[2,4,7,10,12]
let mayor =  numeros[1]
let mayor2=0;
function Nmayor(){
    for(let i=0;i<numeros.length;i++) {
        if(numeros[i]>mayor){
            mayor2=numeros[i];
        }

    }
    console.log("numero mayor es:"+mayor2);
}
Nmayor();