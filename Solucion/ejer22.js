let botton=document.querySelector("#botton");

botton.addEventListener('click',()=>{
    let input=document.querySelector("#input").value;
    let parrafo=document.querySelector("#parrafo");
    parrafo.textContent=input;

});