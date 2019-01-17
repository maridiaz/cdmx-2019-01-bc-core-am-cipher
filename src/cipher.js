window.cipher = {
  //CIFRADO
  encode: (string, offset) => {
    let resultado = "";
    let mayus = string.toUpperCase();
    for (let i = 0; i <= mayus.length; i++) {
      let ascii = mayus.charCodeAt(i);
      //Aquí se inserta la fórmula
      let formula = (ascii - 65 + offset) % 26 + 65;

      let resultadoUno = String.fromCharCode(formula);
      resultado += resultadoUno;
    }
    return resultado;

  },

  //DESCIFRADO 
  decode: (string, offset) => {
    let resultado = "";
    let mayus = string.toUpperCase();
    for (let i = 0; i <= mayus.length; i++) {
      let ascii = mayus.charCodeAt(i);
      //Aquí se inserta la fórmula
      let formula = (ascii + 65 - offset) % 26 + 65;

      let resultadoDos = String.fromCharCode(formula);
      resultado += resultadoDos;
    }
    return resultado;

  },

}
