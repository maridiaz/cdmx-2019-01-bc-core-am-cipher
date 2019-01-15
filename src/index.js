//cambio de páginas a través de botones
//add(hideElement) añade esconder :. oculta
//remove(hideElement) quita esconder :. muestra
//botón en página de inicio que lleva a la página de términos y condiciones
const botonUno = document.getElementById('terminos');
    botonUno.addEventListener('click',botonA);
    function botonA(){
    welcome.classList.add("hideElement");
    condiciones.classList.remove("hideElement");
    }

    //botón en página de términos que lleva a página de inicio    
const botonDos = document.getElementById('condiciones');
    botonDos.addEventListener('click',botonB);
    function botonB(){
    condiciones.classList.add("hideElement");
    welcome.classList.remove("hideElement");
    }

    //botón en página de inicio que lleva a la página de registro
const botonTres = document.getElementById('regresar1')
    botonTres.addEventListener('click',botonC)
    function botonC(){
    welcome.classList.add("hideElement");
    condiciones.classList.remove("hideElement");
    }

//botón en página de registro que lleva página de inicio
const botonCuatro = document.getElementById('registro');
    botonCuatro.addEventListener('click',botonD);
    function botonD(){
    welcome.classList.add("hideElement");
    registrarse.classList.remove("hideElement"); 
    }

//botón en página de registro que lleva a la página donde está el formulario/cifrado
    const botonCinco = document.getElementById('regresar2');
    botonCinco.addEventListener('click',botonE);
    function botonE(){
    welcome.classList.remove("hideElement");
    condiciones.classList.add("hideElement");
    registrarse.classList.add("hideElement");
    }

//botón en página del formulario/cifrado que lleva a página final
const botonSeis = document.getElementById('enviar1');
    botonSeis.addEventListener('click', botonF);
    function botonF(){
    registrarse.classList.add("hideElement");
    final.classList.remove("hideElement");    
    }
    
//botón en página final que lleve a página de inicio
const botonSiete = document.getElementById('terminar1');
    botonSiete.addEventListener('click', botonG);
    function botonG(){
    final.classList.add("hideElement");
    welcome.classList.remove("hideElement");
    }



