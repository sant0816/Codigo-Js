let numeros=[5,3,14,45,56,64,45,10]
let dividir=0;
let contador=0;

function par(){
    for (let i=0; i<numeros.length; i++){
        if (numeros[i]%2==0){
            contador=contador+1;

        }
    }
    console.log("numero par es:"+contador);
}
par();