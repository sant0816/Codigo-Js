 const parrafo = document.querySelector(".miParrafo");
const boton = document.querySelector(".miBoton");

   boton.addEventListener("click", function() {
       parrafo.textContent = "El parrafo se ha cambiado";
   });