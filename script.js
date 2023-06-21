//<----------------Toggle Button---------------->
// Obtener todos los botones de "More Info"
const toggleButtons = document.querySelectorAll('.toggle-button');

// Agregar un evento de escucha a cada botón
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Obtener el elemento de detalles adicionales correspondiente
    const moreInfo = button.nextElementSibling;

    // Alternar la visibilidad de los detalles adicionales
    if (moreInfo.style.display === 'none') {
      moreInfo.style.display = 'block';
    } else {
      moreInfo.style.display = 'none';
    }
  });
});



