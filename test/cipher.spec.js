describe('cipher', () => {

- let +const,
- Arrow functions,

```
function suma(a, b){
  return a+b;
}

var suma = function (a, b){
  return a+b;
};

const suma = (a, b) => a+b;

```

- interpolacion de variables,

* template strings,

```
const str = "hola";
const str2 = 'hola';
const extra = 'extra';
const str3 = `jejejejex${extra}`;

var stra = "jejejejejex"+extra;
```

- for of,

```
var arreglo = ['michi', 'bonita', 'sherezade', 'cheshire'];
for(i = 0; i<arreglo.length; i++){
  console.log("gatito "+arreglo[i]);
}

const arreglo = ['michi', 'bonita', 'sherezade', 'cheshire'];

for(const nombre of arreglo){
  console.log(`gatito ${nombre}`);
}

```

- for in ,

```
const gato = {
  color: 'calico',
  sexo: 'hembra',
  nombre: 'michi',
  edad: '5',
  maullar: ()=>console.log('miau'),
  };


console.log(`Este es un gato: sexo ${gato.sexo} color  ${gato.color}`);

for(const propiedad in gato) {
  console.log(`${propiedad} es ${gato[propiedad]}`);
  if(typeof gato[propiedad] == 'function') gato[propiedad]();
}

```

- .forEach,

```
var arreglo = ['michi', 'bonita', 'sherezade', 'cheshire'];
arreglo.forEach((elemento, index)=> {
 console.log(elemento);
})
```

- .map,

```
var arreglo = ['michi', 'bonita', 'sherezade', 'cheshire'];
const mapeado = arreglo.map((elemento, index)=> {
 console.log(elemento);
 return `hola ${elemento}`;
});
```

- .filter,

```
var arreglo = ['michi', 'bonita', 'sherezade', 'cheshire'];
const filtrado = arreglo.filtrado((elemento, index)=> {
  if(element === 'michi') {
    return true;
  };
  return false;
});
```

- etc...