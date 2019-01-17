//cambio de páginas a través de botones
//add(hideElement) añade esconder :. oculta
//remove(hideElement) quita esconder :. muestra
//botón en página de inicio que lleva a la página de términos y condiciones
const botonUno = document.getElementById('terminos');
botonUno.addEventListener('click', botonA);

function botonA() {
  welcome.classList.add("hideElement");
  condiciones.classList.remove("hideElement");
}

//botón en página de términos que lleva a página de inicio    
const botonDos = document.getElementById('condiciones');
botonDos.addEventListener('click', botonB);

function botonB() {
  condiciones.classList.add("hideElement");
  welcome.classList.remove("hideElement");
}

//botón en página de inicio que lleva a la página de registro
const botonTres = document.getElementById('regresar1')
botonTres.addEventListener('click', botonC)

function botonC() {
  welcome.classList.add("hideElement");
  condiciones.classList.remove("hideElement");
}

//botón en página de registro que lleva página de inicio
const botonCuatro = document.getElementById('registro');
botonCuatro.addEventListener('click', botonD);

function botonD() {
  welcome.classList.add("hideElement");
  registrarse.classList.remove("hideElement");
}

//botón en página de registro que lleva a la página donde está el formulario/cifrado
const botonCinco = document.getElementById('regresar2');
botonCinco.addEventListener('click', botonE);

function botonE() {
  welcome.classList.remove("hideElement");
  condiciones.classList.add("hideElement");
  registrarse.classList.add("hideElement");
}

//botón en página del formulario/cifrado que lleva a página final
const botonSeis = document.getElementById('enviar1');
botonSeis.addEventListener('click', botonF);

function botonF() {
  registrarse.classList.add("hideElement");
  final.classList.remove("hideElement");
}

//botón en página final que lleve a página de inicio
const botonSiete = document.getElementById('terminar1');
botonSiete.addEventListener('click', botonG);

function botonG() {
  final.classList.add("hideElement");
  welcome.classList.remove("hideElement");
}

//caja de texto a cifrar y caja descifrar
//el nombre de los id están en HTML, no regresa lo que se ingresa en input
const inputEncode = document.getElementById('inputEncode');
const inputDecode = document.getElementById('inputDecode');
const botonCifrar = document.getElementById('encode');
const botonDescifrar = document.getElementById('decode');
const listaUno = document.getElementById('cifrado2');
const listDos = document.getElementById('descifrado2');

//botonCifrar.addEventListener('click', () => {
  //let mssg1 = inputEncode.value;
  //const textoCifrado = window.cipher.encode(mssg1, 0);
  //document.getElementById('message1').innerHTML = textoCifrado;
  //console.log(textoCifrado);

//});

//botonDescifrar.addEventListener('click', () => {
  //let mssg2 = inputDecode.value;
  //const textoDescifrado = window.cipher.decode(mssg2, 0);
  //document.getElementById('message2').innerHTML = textoDescifrado;
  //console.log(textoDescifrado);
  
//});

botonCifrar.addEventListener('click',()=>{
  let offset = parseInt(listaUno.value);
  let string = inputEncode.value;
  document.getElementById('message1').innerHTML=window.cipher.encode(string, offset);

})

    
