document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  
  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Por favor, ingrese un email válido.");
    return;
  }
  
  const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
  confirmModal.show();
  
  document.getElementById('contactForm').reset();
});

