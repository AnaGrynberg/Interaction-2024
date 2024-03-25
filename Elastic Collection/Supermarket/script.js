const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementById('close');
const addToFridgeButton = document.getElementById('addToFridgeBtn'); 

cards.forEach(card => {
  const buyButton = card.querySelector('.buy-btn');
  const description = card.querySelector('.description');
  const itemName = card.querySelector('h2').textContent;

  buyButton.addEventListener('click', (event) => {
    const cardTitle = card.querySelector('h2').textContent;
    const cardDescription = description.textContent;
    modalTitle.textContent = cardTitle;
    modalDescription.textContent = cardDescription;
    modal.style.display = 'block';

  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

addToFridgeButton.addEventListener('click', () => {
  window.location.href = 'supermarket.html';

});