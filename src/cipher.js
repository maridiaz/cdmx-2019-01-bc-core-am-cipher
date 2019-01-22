window.cipher = {
  //CIFRADO
  encode: (offset, string) => {
    let resultado = "";

    for (let i = 0; i < string.length; i++) {
      let mensaje = string.charCodeAt(i);

      if (mensaje >= 65 && mensaje <= 90) {
        let formula = (mensaje - 65 + offset) % 26 + 65;
        let resultadoUno = String.fromCharCode(formula);
        resultado += resultadoUno;
      } 
      else if (mensaje >= 97 && mensaje <= 122) {
        let minusculas = (mensaje - 97 + offset) % 26 + 97;
        let resultadoUno = String.fromCharCode(minusculas);
        resultado += resultadoUno;
      } 
      else {
        let resultadoUno = String.fromCharCode(mensaje);
        resultado += resultadoUno;
      }
    }

    return resultado;
  },

  //DESCIFRADO 
  decode: (offset, string) => {
    let resultado = "";
    let mayus = string.toUpperCase();
    for (let i = 0; i < mayus.length; i++) {
      let ascii = mayus.charCodeAt(i);
      //Aquí se inserta la fórmula
      let formula = (ascii + 65 - offset) % 26 + 65;

      let resultadoDos = String.fromCharCode(formula);
      resultado += resultadoDos;
    }
    return resultado;

  },

}
