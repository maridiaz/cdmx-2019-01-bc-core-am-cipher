//cambio de páginas
const botonUno = document.getElementById('terminos');
    botonUno.addEventListener('click',botonA);
    function botonA(){
    welcome.classList.add("hideElement");
    condiciones.classList.remove("hideElement");
    }
    
const botonDos = document.getElementById('condiciones');
    botonDos.addEventListener('click',botonB);
    function botonB(){
    condiciones.classList.add("hideElement");
    welcome.classList.remove("hideElement");
    }

const botonTres = document.getElementById('regresar1')
    botonTres.addEventListener('click',botonC)
    function botonC(){
    welcome.classList.add("hideElement");
    condiciones.classList.remove("hideElement");
    }

const botonCuatro = document.getElementById('registro');
    botonCuatro.addEventListener('click',botonD);
    function botonD(){
    welcome.classList.add("hideElement");
    registrarse.classList.remove("hideElement"); 
    
const botonCinco = document.getElementById('regresar2');
    botonCinco.addEventListener('click',botonE);
    function botonE(){
    welcome.classList.remove("hideElement");
    condiciones.classList.add("hideElement");
    registrarse.classList.add("hideElement");

//
const botonSeis = document.getElementById('enviar1');
    botonSeis.addEventListener('click', botonF);
    function botonF(){
    registrarse.classList.add("hideElement");
    final.classList.remove("hideElement");

    }
    
    
    


    
    }
    }


