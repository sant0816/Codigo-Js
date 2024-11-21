const divInfo = document.getElementById('info');
console.log(divInfo.textContent);

const primerDetalle = document.querySelector('.detalle');
primerDetalle.textContent = 'Esto es un detalle ';

const parrafos = document.querySelectorAll('p');
parrafos.forEach(parrafo => {
  parrafo.style.backgroundColor = "lightgreen";
});
