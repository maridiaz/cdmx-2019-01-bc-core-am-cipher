//cambio de páginas a través de botones
//add(hideElement) añade esconder :. oculta
//remove(hideElement) quita esconder :. muestra

//botones por los cuales se realiza el cambio de página
const botonUno = document.getElementById("terminos");
const botonDos = document.getElementById("condiciones");
const botonTres = document.getElementById("regresar1");
const botonCuatro = document.getElementById("registro");
const botonCinco = document.getElementById("regresar2");
const botonSeis = document.getElementById("enviar1");
const botonSiete = document.getElementById("terminar1");
const welcome = document.getElementById("welcome");
const condiciones = document.getElementById("condiciones");
const registrarse = document.getElementById("registrarse");
const final = document.getElementById("final");


//botón en página de inicio que lleva a la página de términos y condiciones
botonUno.addEventListener("click", () => {
  welcome.classList.add("hideElement");
  condiciones.classList.remove("hideElement");
});

//botón en página de términos que lleva a página de inicio         
botonDos.addEventListener("click", () => {
  condiciones.classList.add("hide");
  welcome.classList.remove("hide");
});

//botón en página de inicio que lleva a la página de registro
botonTres.addEventListener("click", () => {
  welcome.classList.add("hide");
  condiciones.classList.remove("hide");
});

//botón en página de registro que lleva página de inicio
botonCuatro.addEventListener("click", () => {
  welcome.classList.add("hide");
  registrarse.classList.remove("hide");
});

//botón en página de registro que lleva a la página donde está el formulario/cifrado 
botonCinco.addEventListener("click", () => {
  welcome.classList.remove("hide");
  condiciones.classList.add("hide");
  registrarse.classList.add("hide");
});

//botón en página del formulario/cifrado que lleva a página final   
botonSeis.addEventListener("click", () => {
  registrarse.classList.add("hide");
  final.classList.remove("hide");
});

//botón en página final que lleve a página de inicio
botonSiete.addEventListener("click", () => {
  final.classList.add("hide");
  welcome.classList.remove("hide");
});

//caja de texto a cifrar y caja descifrar
//el nombre de los id están en HTML, no regresa lo que se ingresa en input
const inputEncode = document.getElementById("inputEncode");
const inputDecode = document.getElementById("inputDecode");
const botonCifrar = document.getElementById("encode");
const botonDescifrar = document.getElementById("decode");
const listaUno = document.getElementById("cifrado2");
const listaDos = document.getElementById("descifrado2");

//boton cifrar
botonCifrar.addEventListener("click", () => {
  let offset = parseInt(listaUno.value);
  let string = inputEncode.value;
  document.getElementById("message1").innerHTML = window.cipher.encode(offset, string);
})

//boton descifrar
botonDescifrar.addEventListener("click", () => {
  let offset = parseInt(listaDos.value);
  let string = inputDecode.value;
  document.getElementById("message2").innerHTML = window.cipher.decode(offset, string);
})
