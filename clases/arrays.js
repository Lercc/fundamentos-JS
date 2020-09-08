var shacha = {
    nombre: "sacha",
    apellido: "lifsicj",
    altura: 1.72
}
var alan = {
    nombre: "alan",
    apellido: "perez",
    altura: 1.85
}
var martin = {
    nombre: "martin",
    apellido: "gomez",
    altura: 1.71
}
var vick = {
    nombre: "vick",
    apellido: "Juarez",
    altura: 1.86
}
var paula = {
    nombre: "paula",
    apellido: "sandoval",
    altura: 1.76
}

var personas = [shacha, alan, martin, vick, paula]

/**
 * FILTER : devuelve un nuevo array con datos filtrados segun 
 * una condicional eplicada a los elementos del array, si el array en una 
 * coleccion de objetos, los objetos dentro del array son los mismos que tiene
 * el array inicial, al estar solo filtrando solo se genera un array con las referencias a memorias de los
 *   objetos que conincidan con el objeto
 */

// const esAlta = (persona) => {
//     return persona.altura > 1.8
// }
// var personasAltas = personas.filter( esAlta )

var personasAltas = personas.filter( p => p.altura > 1.8 )
console.log(personasAltas)

var personasBajas = personas.filter( ({ altura }) => altura < 1.8 )
console.log(personasBajas)

/**
 * MAP : devuelve un nuevo array con datos que son resultado de una operacin 
 * aplicada a los elementos del array
 */

// const pasarAlturaCsm = ( persona ) => {
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// }
// var personasCms = personas.map( pasarAlturaCsm )

var personasCms = personas.map( p => {
    return {
        ...p,
        altura: p.altura * 100
    }
})
console.log(personasCms)

var personasUP = personas.map( p => ({
    ...p,
    nombre: p.nombre.toUpperCase(),
    apellido: p.apellido.toUpperCase()
})) 
console.log(personasUP)

/**
 * REDUCE : rede a un valor, en funciaona una operacion definida
 * sobre el elemento del array. esta funcion recibe dos paremetros, el primera
 * la funcion o arrow function y la segunda la cantidad con la cual empezara 
 * la iteraion
 * array.reduce(fnt,0)
 */

/* ejemplo contar la altura total 
    var counter = 0
    for(let i=0;i<personas.length; i++) {
        counter += personas[i].altura
    }
*/

// const reducer = (i,persona) => {
//     return i + persona.altura
// }
// var cantidadAltura = personas.reduce(reducer, 0)

var cantidadAltura = personas.reduce((acount,{ altura }) => acount + altura, 0 )
console.log(cantidadAltura)