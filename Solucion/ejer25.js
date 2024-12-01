let boton1=document.querySelector("#mostrar")
boton1.addEventListener("click",()=>{
    let div=document.querySelector("#div");
    div.textContent="Vida"
});

let boton2=document.querySelector("#ocultar");
boton2.addEventListener("click",()=>{
    let div=document.querySelector("#div");
    div.textContent="";
});