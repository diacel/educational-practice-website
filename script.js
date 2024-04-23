function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  document.getElementById('aboutBtn').addEventListener('click', function() {
    openModal('aboutModal');
  });
  document.getElementById('garageBtn').addEventListener('click', function() {
    openModal('garageModal');
  });