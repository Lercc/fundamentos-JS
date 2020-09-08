/**
 * CALL STACK : pila de llamadas , qui se ejecutan toda la
 *  funcionalidad principal del programa
*/

/**
 * WEB APIS: aqui se ejecuta las funciones como setTimeouts, intereacion  
 * y eventos con la web, peticiones ajax
 */

 /**
  * CALL BACK QUEUE: aqui se guardan en cola las respuestas 
  * de las funciones que se ejecutan en la WEB API.
  * y son ejecutadas o enviadas a ejecurtarse a el CALL STACK
  *  una vez este este vacio 
  */


/* */
console.log('a');
setTimeout(() => console.log('b'), 2000 );
console.log('c');

/**/
console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");
/* */


