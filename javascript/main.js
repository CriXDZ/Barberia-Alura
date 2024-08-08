// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Validación del formulario
  const formulario = document.querySelector(".formulario");

  if (formulario) {
    formulario.addEventListener("submit", (event) => {
      const nombre = formulario.querySelector("#nombre").value.trim();
      const email = formulario.querySelector("#email").value.trim();
      const mensaje = formulario.querySelector("#mensaje").value.trim();

      let valido = true;

      // Validar nombre
      if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        valido = false;
      }

      // Validar email
      if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        alert("Por favor, ingresa un email válido.");
        valido = false;
      }

      // Validar mensaje
      if (mensaje === "") {
        alert("Por favor, ingresa un mensaje.");
        valido = false;
      }

      // Si alguna validación falla, prevenir el envío del formulario
      if (!valido) {
        event.preventDefault();
      }
    });
  }

  // Redirection al hacer clic en los cortes
  const cortes = document.querySelectorAll(".producto-card");

  cortes.forEach((corte) => {
    corte.addEventListener("click", () => {
      window.location.href = "/html/reservation.html";
    });
  });
});
