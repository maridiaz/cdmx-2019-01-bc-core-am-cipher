//cambio de páginas
const botonUno = document.getElementById('terminos');
const BotonDos = document.getElementById('registro');
const botonTres = document.getElementById('regresar1');
const botonCuatro = document.getElementById('registro2');
const botonCinco = document.getElementById('terminar1');
const botonSeis = document.getElementById('regresar2');
const botonSiete = document.getElementById('terminar4');


botonUno.addEventListener('click',botonA);
function botonA(){
    welcome.classList.add("hideElement");
    condiciones.classList.remove("hideElement");
    }
    
botonDos.addEventListener('click',registrarse);
    function botonB(){
    welcome.classList.add("hideElement");
    registrarse.classList.remove("hideElement");
    }

botonTres.addEventListener('click', regresar1);
    function botonC(){
    welcome.classList.add("hideElement");
    botonTres.classList.remove("hideElement");
    }    

botonCuatro.addEventListener('click',cifrado);
    function botonD(){
    welcome.classList.add("hideElement");
    botonCuatro.classList.remove("hideElement");
    }
        
botonCinco.addEventListener('click',botonE);
    function botonE(){
    welcome.classList.add("hideElement");
    botonCinco.classList.remove("hideElement");
    }
    
botonSeis.addEventListener('click',botonF);
    function botonF(){
    welcome.classList.add("hideElement");
    botonSeis.classList.remove("hideElement");
    }    
botonSiete.addEventListener('click',botonG);
    function botonG(){
    welcome.classList.add("hideElement");
    botonSiete.classList.remove("hideElement");
    } 


