var persona = {
    nombre: "juan",
    apellido: "ramos",
    edad: 22 
}

var personaDos = {
    nombre: "julio",
    apellido: "ramos",
    edad: 23
}

function imprimirNOmbre (persona) {
    var { nombre } = persona
    console.log(nombre)
}

imprimirNOmbre(persona)
imprimirNOmbre(personaDos)

/*Cuando de pasa un objeto a una funcion como parametro, este se comporta como referecia,
 ose que su valor sera cambiado por la funcion (side efect).
 en cambio si no se quiere hace eso se puede pasar la edad como valor
 
 esto afecta a objetos y arrays; por que los array se conisderan variables
 tipo objeto.

 */
function cumple (persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}




