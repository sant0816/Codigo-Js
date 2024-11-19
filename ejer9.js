let fraseMayuscula=["ceron","lilian","ortiz","dali"];
let convertir=[];

let convertidor=[];
function mayuscula(){
    for(let i=0;i<fraseMayuscula.length;i++){
        convertidor[i]=fraseMayuscula[i].toUpperCase();

    }
    console.log(convertidor);
}
mayuscula();