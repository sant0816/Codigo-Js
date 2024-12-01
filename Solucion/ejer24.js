let botton = document.querySelector("#botton");
let c=0;
botton.addEventListener("click",()=>{
    let parrafo=document.querySelector("#parrafo");

    for (let i=0; i<=1;i++){
        c=c+i
    }
    parrafo.textContent=c;
});
