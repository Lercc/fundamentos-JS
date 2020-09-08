var x = 4
var y = "4"

var luis = {
    nombre: "luis"
}

var other = {
    nombre: "luis"
}

/**
 * cuando asignamos un objeto a una varaible,
 * esta variable o objeto creado tiene o se asigna el mismo valor 
 * de refencia en memoria del objeto pasado, siendo asi que si se
 * cambia el valor del primer objeto tbn cambiara el valor en el
 * segundo, al compartir ambos la misma referencia en memoria.
 */
var luis = other
