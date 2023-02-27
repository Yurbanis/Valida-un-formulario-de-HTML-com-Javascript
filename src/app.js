let enviar = document.querySelector("#enviar");
let cancelar = document.querySelector("#cancelar");
let formulario = document.querySelector("#formulario");
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let ciudad = document.querySelector("#ciudad");
let codigoPostal = document.querySelector("#codigoPostal");
let numeroTarjeta = document.querySelector("#numeroTarjeta");
let mensaje = document.querySelector("#mensaje");
let monto = document.querySelector("#monto");
let cards = document.querySelector("#cards");
let cuatrosNumeros = document.querySelector("#cuatrosNumeros");

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{4,10}$/,
  apellido: /^[a-zA-ZÀ-ÿ\s]{4,10}$/,
  ciudad: /^[a-zA-ZÀ-ÿ\s]{1,15}$/,
  mensaje: /^[a-zA-ZÀ-ÿ\s]{5,40}$/,
  codigoPostal: /^[0-9]{4}$/,
  numeroTarjeta: /^\d{13,16}$/,
  cuatrosNumeros: /^\d{4}$/,
  monto: /^\d{2,14}$/
};

enviar.addEventListener("click", function(e) {
  e.preventDefault();

  let previoAlerta = "";

  if (!expresiones.nombre.test(nombre.value)) {
    nombre.classList.add("invalid");
    previoAlerta = false;
  } else {
    nombre.classList.remove("invalid");
    previoAlerta = true;
  }
  //////////////////////////////////////////////////////////
  if (!expresiones.apellido.test(apellido.value)) {
    apellido.classList.add("invalid");
    previoAlerta = false;
  } else {
    nombre.classList.remove("invalid");
    previoAlerta = true;
  }

  //////////////////////////////////////////////////////////

  if (!expresiones.ciudad.test(ciudad.value)) {
    ciudad.classList.add("invalid");
    previoAlerta = false;
  } else {
    ciudad.classList.remove("invalid");

    previoAlerta = true;
  }
  //////////////////////////////////////////////////////
  if (!expresiones.mensaje.test(mensaje.value)) {
    mensaje.classList.add("invalid");
    previoAlerta = false;
  } else {
    mensaje.classList.remove("invalid");

    previoAlerta = true;
  }

  ///////////////////////////////////////////////////////////

  if (!expresiones.numeroTarjeta.test(numeroTarjeta.value)) {
    numeroTarjeta.classList.add("invalid");
    previoAlerta = false;
  } else {
    numeroTarjeta.classList.remove("invalid");

    previoAlerta = true;
  }

  ///////////////////////////////////////////////////////////

  if (!expresiones.codigoPostal.test(codigoPostal.value)) {
    codigoPostal.classList.add("invalid");
    previoAlerta = false;
  } else {
    codigoPostal.classList.remove("invalid");

    previoAlerta = true;
  }

  ///////////////////////////////////////////////////////////

  if (!expresiones.cuatrosNumeros.test(cuatrosNumeros.value)) {
    cuatrosNumeros.classList.add("invalid");
    let alert;
    previoAlerta = false;
  } else {
    cuatrosNumeros.classList.remove("invalid");

    previoAlerta = true;
  }

  ///////////////////////////////////////////////////////////

  if (!expresiones.monto.test(monto.value)) {
    monto.classList.add("invalid");
    previoAlerta = false;
  } else {
    monto.classList.remove("invalid");

    previoAlerta = true;
  }

  /////////////////////////////////////////////////////////////
  if (previoAlerta) {
    alerta("it was sent satisfactorily", "alert-primary");
  } else {
    alerta("Some fields are missing", "alert-danger");
  }

  let visa = /^[0-9]{13,16}$/;

  let amex = /^[0-9]{4} *[0-9]{6} *[0-9]{5}$/;

  let mastercard = /^([30|36|38]{2})([0-9]{12})$/;

  if (
    document.querySelector("#visa").checked &&
    !visa.test(numeroTarjeta.value)
  ) {
    previoAlerta = false;
  }
  if (
    document.querySelector("#mastercard").checked &&
    !mastercard.test(numeroTarjeta.value)
  ) {
    previoAlerta = false;
  }
  if (
    document.querySelector("#amex").checked &&
    !amex.test(numeroTarjeta.value)
  ) {
    previoAlerta = false;
  }
});

function alerta(text, color) {
  document.querySelector(
    "#widget_content"
  ).innerHTML = `<div class="alert ${color} mt-3" role="alert">
    ${text}
    </div>
    `;
}
/*
cancelar.addEventListener("click", function (e) {
    e.preventDefault();
    formulario.reset();
})
*/
