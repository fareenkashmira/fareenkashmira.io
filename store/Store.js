// Toggle between Grid and List view using a single button
const toggleButton = document.getElementById('view-toggle');
const productContainer = document.getElementById('product-container');

toggleButton.addEventListener('click', function () {
  const isGrid = productContainer.classList.contains('grid-view');

  if (isGrid) {
    productContainer.classList.remove('grid-view');
    productContainer.classList.add('list-view');
    toggleButton.textContent = 'Grid View';
  } else {
    productContainer.classList.remove('list-view');
    productContainer.classList.add('grid-view');
    toggleButton.textContent = 'List View';
  }
});
