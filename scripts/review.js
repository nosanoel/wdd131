// Array of product objects
const products = [
  { id: "widgetA", name: "phone" },
  { id: "widgetB", name: "car" },
  { id: "gadgetC", name: "jbl" },
  { id: "deviceD", name: "toy" }
];

// Populate the productName select field dynamically
document.addEventListener('DOMContentLoaded', () => {
  const productSelect = document.getElementById('productName');

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;  // use product id as the value
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  // localStorage review count display 
  const reviewCountDisplay = document.getElementById('reviewCountDisplay');
  if (reviewCountDisplay) {
    const count = localStorage.getItem('reviewCount') || 0;
    reviewCountDisplay.textContent = `Reviews submitted: ${count}`;
  }
});

// Increment review count on form submit and store in localStorage
document.querySelector('form').addEventListener('submit', () => {
  let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
  reviewCount++;
  localStorage.setItem('reviewCount', reviewCount);
});
