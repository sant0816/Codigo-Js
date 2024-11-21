const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Soy un nuevo div';

const divOriginal = document.querySelector('div');
if (divOriginal) {
  divOriginal.parentNode.replaceChild(nuevoDiv, divOriginal);
  console.log('El div ha sido reemplazado correctamente.');
} else {
  console.log('No se encontró ningún div para reemplazar.');
}


