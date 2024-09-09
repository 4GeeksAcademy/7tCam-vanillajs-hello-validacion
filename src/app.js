import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", function() {
  // obteniendo  form y alertaaa
  const form = document.getElementById("miformulario");
  const alertBox = document.getElementById("alert");

  form.addEventListener("submit", function(event) {
    // evita el comportamiento por defecto que cuando se envia se recargue la pagina
    event.preventDefault();
    // oculta el mensaje de alerta si no hay errores
    alertBox.classList.add("d-none");
    let isValid = true;
    // Mensaje acumulado de errores
    let errorMessage = "";

    // Obtener los inputs del formulario y lo guardo en una constante ya que su naturaleza no cambia
    const cardNumber = document.getElementById("numbercard");
    const cvc = document.getElementById("inputPassword4");
    const amount = document.getElementById("inputAmount4");
    const firstName = document.getElementById("inputAddress");
    const lastName = document.getElementById("inputAddress2");
    const city = document.getElementById("inputCity");
    const state = document.getElementById("inputState");
    const postalCode = document.getElementById("inputPostalCode");
    // validaciones
    // Validando el campo de numero de tarjeta
    if (!cardNumber.value || cardNumber.value.length !== 12) {
      isValid = false;
      // Cambia el color de fondo
      cardNumber.classList.add("bg-danger");
      errorMessage += "El número de tarjeta debe tener 12 dígitos.<br>";
    } else {
      cardNumber.classList.remove("bg-danger");
    }

    // Validar el campo de CVC
    if (!cvc.value || cvc.value.length !== 4) {
      isValid = false;
      cvc.classList.add("bg-danger");
      errorMessage += "El CVC debe tener 4 dígitos.<br>";
    } else {
      cvc.classList.remove("bg-danger");
    }

    // Validandod el campo de cantidad
    if (!amount.value || parseFloat(amount.value) <= 0) {
      isValid = false;
      amount.classList.add("bg-danger");
      errorMessage += "La cantidad debe ser mayor a 0.<br>";
    } else {
      amount.classList.remove("bg-danger");
    }

    // validando  el name
    if (!firstName.value) {
      isValid = false;
      firstName.classList.add("bg-primary");
      errorMessage += "El nombre es obligatorio.<br>";
    } else {
      firstName.classList.remove("bg-primary");
    }

    // validando el apellido
    if (!lastName.value) {
      isValid = false;
      lastName.classList.add("bg-primary");
      errorMessage += "El apellido es obligatorio.<br>";
    } else {
      lastName.classList.remove("bg-primary");
    }

    // validar la ciudad
    if (!city.value) {
      isValid = false;
      city.classList.add("bg-primary");
      errorMessage += "La ciudad es obligatoria.<br>";
    } else {
      city.classList.remove("bg-primary");
    }

    // validar el estado
    if (state.value === "Pick a state") {
      isValid = false;
      state.classList.add("bg-primary");
      errorMessage += "Debes seleccionar un estado.<br>";
    } else {
      state.classList.remove("bg-primary");
    }

    // validar el código postal
    if (!postalCode.value || postalCode.value.length < 5) {
      isValid = false;
      postalCode.classList.add("bg-danger");
      errorMessage += "El código postal debe tener al menos 5 caracteres.<br>";
    } else {
      postalCode.classList.remove("bg-danger");
    }

    // Mostrar mensaje de error si es inválido
    if (!isValid) {
      alertBox.innerHTML = errorMessage;
      alertBox.classList.remove("d-none");
    } else {
      alertBox.classList.add("d-none");
      alertBox.innerHTML = "";
      // Aquí puedes añadir lógica para enviar el formulario, como una solicitud fetch.
      alert("Formulario enviado correctamente");
    }
  });
});
