const clickMeButton = document.getElementById('clickMe');

function handleClick() {
  alert('¡Botón clickeado!');
}

clickMeButton.addEventListener('click', handleClick);

const removeEventButton = document.getElementById('removeEvent');
removeEventButton.addEventListener('click', () => {
  clickMeButton.removeEventListener('click', handleClick);
  alert('El evento del botón "Click Me" ha sido eliminado.');
});
