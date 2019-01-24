## Cifrado César - Portal de becas UNAM

La Universidad Nacional Autónoma de México cuenta con una población compuesta por 330,000 personas aproximadamente. Por tal motivo, la Máxima Casa de Estudios ha creado distintas páginas web de acuerdo a las escuelas, Facultades, demandas y necesidades universitarias. Sin embargo, para solicitar una beca de movilidad -ya sea académica o estudiantil- no hay una página para ingresar de manera directa.

Al momento en que se quiere conocer información sobre la convocatoria de becas disponibles, financiadores, requisitos, etcétera, se debe esperar a que ciertos portales (DGECI -Dirección General de Cooperación e Internacionalización-, la página donde hay información y convocatorias de movilidad, la página de Fundación UNAM, la página SUBES -Coordinación Nacional de Becas de Educación Superior- de la SEP) abran espacios en tiempos muy específicos para la solicitud de becas. 

El trámite de movilidad en sí es largo y confuso; en consecuencia, quienes requieren de un apoyo económico pueden encontrar ciertas dificultades: 
  - Al no saber en qué página se debe revisar la información.
  - Olvidar las fechas en que el espacio dedicado a becas de movilidad está "abierto" en los portales.

## Usuarios de producto

Está dirigido a estudiantes y acádemicos -ambos sexos- que estén cursando estudios a nivel licenciatura o posgrado en alguna escuela/Facultad perteneciente a la UNAM. Asimismo, se encuentran en un rango socioeconómico medio-bajo.

## Resolución del problema

El Portal de becas de movilidad UNAM se enfoca a tener un espacio exclusivo para brindar información sobre convocatorias y requisitos para solicitar becas a nivel licenciatura y posgrado. De esta manera, cuando una persona esté en proceso de documentación puede que el responsable de movilidad de su escuela/Facultad le indique las páginas a revisar y/o establecer un link en la página de la DGECI que direccione a la página de becas de movilidad.

## Objetivo de página 

Al ingresar a la página web, el usuario podrá encontrar la información necesaria de manera fácil, lo cual a su vez ayuda a agilizar el proceso de trámite de movilidad estudiantil.

## Contenido y características de la página 

 - El Portal de Becas de movilidad UNAM es una aplicación web que se accede a través de un link.
 Página de bienvenida
 - Página de inicio
      El usuario ingresa a la página, puede revisar los términos y condiciones de solicitar beca y/o puede ir directamente a registrarse para continuar el proceso de solicitud.
 - Página con información sobre términos y condiciones para solicitar beca.
 - Página de registro (nombre, número de cuenta y correo).
   Para finalizar el registro, se solicita que el usuario ingrese un código que será cifrado. Una vez que obtiene el texto cifrado, se puede obtener un código descifrado.
   **En la primera visita es necesario ingresar el código a cifrar.
   **A partir de la segunda visita a la página, no importa el uso de código a (cifrar/descrifrar).
 - Página de cierre, indica que el registro ha sido exitoso. Se puede regresar a página de inicio.

## Propuesta de diseño

La página web es fácil de usar, hay pocos clicks que llevan de una página a otra (cuatro en total: inicio, requisitos, registro y final), la interacción hace que se entienda la lógica para realizar el registro de forma exitosa. En cuanto al diseño, es "simple": respeta el aspecto institucional que brinda la UNAM y hay información concisa. 

## Descarga, instalación y ejecución de producto 

Es una aplicación web, se accede por medio del link: https://maridiaz.github.io/cdmx-2019-01-bc-core-am-cipher/src 

##Pre-requistos
* Interfaz de usuario (UI)
La interfaz debe permitir al usuario:

  - Elegir un desplazamiento (offset) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
  - Insertar un mensaje (texto) que queremos cifrar.
  - Ver el resultado del mensaje cifrado.
  - Insertar un mensaje (texto) a descifrar.
  - Ver el resultado del mensaje descifrado.

### Tecnologías usadas

La aplicación web está estructurada utilizando:
  - Un editor de texto (Visual Code), HTML, JavaScript, CSS.
  - GitHub, Git Bash y Node.js (incluye npm).
  - El framework Mocha. 

### Scripts / Archivos
  - README.md: debe explicar cómo descargar, instalar y ejecutar la aplicación así como una introducción a la aplicación, su funcionalidad y decisiones de diseño que tomaron.
  - src/index.html: este es el punto de entrada a tu aplicación. Este archivo debe contener tu markup (HTML) e incluir el CSS y JavaScript necesario.
  - src/cipher.js: acá debes implementar el objeto cipher, el cual debe estar exportado en el objeto global (window). Este objeto (cipher) debe contener dos métodos:
  - cipher.encode(offset, string): offset es el número de posiciones que queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.
  - cipher.decode(offset, string): offset es el número de posiciones que queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos descifrar.
  - src/index.js: acá debes escuchar eventos del DOM, invocar cipher.encode() o cipher.decode() según sea necesario y actualizar el resultado en la UI.
  - test/cipher.spec.js: este archivo contiene algunos tests de ejemplo y acá tendrás que implementar los tests(pruebas ) para cipher.encode() y cipher.decode().
  - test realizado en Visual Code, abriendo la terminal y escribiendo "npm run test" para verificar todo el código o sólo escribir "npm run test-node" para hacer prueba en el cipher.


## Agradecimientos

A John, Lizzie y Silvana: por las office hours, resolver dudas y su paciencia :)
Al seis squad, por el trabajo en equipo logrado.

## Modelo de negocio
La página web está pensada para ser vendida a la UNAM para que sea una página más al repertorio de sitios que tiene, resaltando que esta página es específicamente para las becas de movilidad internacional. Por el contrario, podría venderse a la DGECI, que es la página especializada en los trámites y vinculación de movilidad.