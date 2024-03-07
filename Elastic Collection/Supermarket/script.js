const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementById('close');
const addToFridgeButton = document.getElementById('addToFridgeBtn'); // Correctly targeting the "Add to fridge" button

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

    // Set the identifier for the "Add to fridge" button
    addToFridgeButton.dataset.itemName = itemName;
  });
});

// Add event listener to the "Add to fridge" button
addToFridgeButton.addEventListener('click', () => {
  const itemName = addToFridgeButton.dataset.itemName;

  // Create a new image element
  const imageElement = document.createElement('img');
  imageElement.src = `../Food/apple.png`; // Assuming your image paths follow this convention

  // Append the image element to the container where you want to hold the fridge items
  const foregroundContainer = document.getElementById('foregroundContainer');
  foregroundContainer.appendChild(imageElement);

  // Redirect to the home page
  window.location.href = '/Index.html';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
