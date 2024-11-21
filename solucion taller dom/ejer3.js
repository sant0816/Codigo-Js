const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es el párrafo creado';
document.body.appendChild(nuevoParrafo);

const botonEliminar = document.querySelector('#eliminar');
botonEliminar.addEventListener('click', () => {
  const primerParrafo = document.querySelector('p'); 
  if (primerParrafo) {
    primerParrafo.remove(); // Elimina el primer <p>
  } else {
    alert('No hay párrafos para eliminar.');
  }
});
