// boton enviar

const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const summary = document.querySelector("#summary");

//agregar evento onclick al botón siguiente
nextBtn.addEventListener("click", function() {
  // recopilar datos del primer paso
  let nombre = document.querySelector("#nombre").value;
  let correo = document.querySelector("#correo").value;
  let mensaje = document.querySelector("#mensaje").value;
  
  // mostrar resumen en el segundo paso
  summary.innerHTML = `nombre: ${nombre}<br>correo: ${correo}<br>mensaje: ${mensaje}`;
  
// ocultar el primer paso y mostrar el segundo paso
  step1.style.display = "none";
  step2.style.display = "block";
});
// API//
//metodo fetch = conexion con una url (API) necesita una respuesta por el metodo then//
// estructura de fetch
//fetch(URL)
// .then(parametros o fuciones)
const URL =' https://api.thecatapi.com/v1/images/searc';
fetch(URL)
    .then(res => res.json())
    .then(data => {
      const img =document.querySelector('img');
      img.src =data[0].url;

    });
