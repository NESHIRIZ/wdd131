
// Product array
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];


document.addEventListener("DOMContentLoaded", () => {
  // Populate product dropdown
  const select = document.getElementById("product");
  if (select) {
    select.innerHTML = '<option disabled selected>Select a Product ...</option>';
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      select.appendChild(option);
    });
    // ARIA live update for accessibility
    select.setAttribute('aria-live', 'polite');
  }

  // Set max date for installation date input
  const dateInput = document.getElementById("date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("max", today);
  }

  // Set focus to first input for better UX
  const firstInput = document.querySelector('.form-card input, .form-card select, .form-card textarea');
  if (firstInput) {
    firstInput.focus();
  }
});


