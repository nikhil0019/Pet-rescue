document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('.filter-checkbox');
  const petCards = document.querySelectorAll('.pet-card');
  const clearButton = document.getElementById('clear-filters');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterPets);
  });

  clearButton.addEventListener('click', () => {
    checkboxes.forEach(cb => cb.checked = false);
    showAllPets();
  });

  function filterPets() {
    const checkedBoxes = Array.from(checkboxes).filter(cb => cb.checked);
    const selectedBreeds = checkedBoxes.map(cb => cb.value);

    petCards.forEach(card => {
      const breed = card.getAttribute('data-breed');
      if (selectedBreeds.length === 0 || selectedBreeds.includes(breed)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function showAllPets() {
    petCards.forEach(card => {
      card.style.display = 'block';
    });
  }

  const adoptButtons = document.querySelectorAll(".adopt-btn");

  adoptButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");
      const breed = button.getAttribute("data-breed");
      const location = button.getAttribute("data-location");
      const image = button.getAttribute("data-image");

      // Construct the URL for the animal details page
      const url = `adopt.html?name=${encodeURIComponent(name)}&breed=${encodeURIComponent(breed)}&location=${encodeURIComponent(location)}&image=${encodeURIComponent(image)}`;

      // Redirect to the details page
      window.location.href = url;
    });
  });
});
