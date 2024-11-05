// Toggle between Grid and List view
document.getElementById('grid-view').addEventListener('click', function() {
  document.getElementById('product-container').classList.remove('list-view');
  document.getElementById('product-container').classList.add('grid-view');
  
  this.classList.add('active');
  document.getElementById('list-view').classList.remove('active');
});

document.getElementById('list-view').addEventListener('click', function() {
  document.getElementById('product-container').classList.remove('grid-view');
  document.getElementById('product-container').classList.add('list-view');
  
  this.classList.add('active');
  document.getElementById('grid-view').classList.remove('active');
});
