//cambio de páginas
const botonUno = document.getElementById('terminos');

botonUno.addEventListener('click',botonA);
function botonA(){
    welcome.classList.add("hideElement");
    condiciones.classList.remove("hideElement");
    }
    
botonDos = document.getElementById('registro');

botonDos.addEventListener('click',botonB);
    function botonB(){
    welcome.classList.add("hideElement");
    registro.classList.remove("hideElement");
    }


