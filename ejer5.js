let verificarNumero=[2,4,6,7,8,9,10];
let comparar=verificarNumero[0];
let numero=10
function verificar(){
    for(let i=0;i<verificarNumero.length;i++){
        if(numero==verificarNumero[i]){
            comparar=verificarNumero[i]
            console.log("el numero se  encontro")
            break// para salirse del for para que cumpla la funcion
        }else{
            console.log("el numero no se encontro")
        }
    }
}
verificar();