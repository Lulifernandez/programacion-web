const searchInput = document.getElementById('searchInput');
const cardContainerSocial = document.getElementById('cardContainer');
const cardContainerAmbiental = document.getElementById('cardContainerAmbiental');
const cardsSocial = cardContainerSocial.getElementsByClassName('card');
const cardsAmbiental = cardContainerAmbiental.getElementsByClassName('card');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();

  for (let i = 0; i < cardsSocial.length; i++) {
    const card = cardsSocial[i];
    const cardTitle = card.querySelector('.card-title');

    if (cardTitle.textContent.toLowerCase().includes(searchTerm)) {
      card.style.display = 'block';  // Mostrar la tarjeta si coincide con el término de búsqueda
    } else {
      card.style.display = 'none';  // Ocultar la tarjeta si no coincide con el término de búsqueda
    }
  }

  for (let i = 0; i < cardsAmbiental.length; i++) {
    const card = cardsAmbiental[i];
    const cardTitle = card.querySelector('.card-title');

    if (cardTitle.textContent.toLowerCase().includes(searchTerm)) {
      card.style.display = 'block';  // Mostrar la tarjeta si coincide con el término de búsqueda
    } else {
      card.style.display = 'none';  // Ocultar la tarjeta si no coincide con el término de búsqueda
    }
  }
});
