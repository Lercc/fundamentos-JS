const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain:true }


/**
 * Promesas: Son valores que todavia no conocemos, las promesas tienen tres estados:
 *  --> al crearlas se encuentran en estado pending
 *  --> al resolverse(resolve) pasan al estado fulfilled(cumplido)
 *      --> .then(val =>)
 *  --> al rechazarse(reject) pasan al estado rejected(rechazado)
 *      --> .catch(val =>)
*/

function obtenerPersonaje (pId) {
  return new Promise((resolve,reject) => {

    let chatr = `${API_URL}${PEOPLE_URL.replace(':id',pId)}`

    $.get(chatr, OPTS, function (dataChacter) {
      resolve(dataChacter)
    })
    .fail(() => reject(id))
  })
 
}

function onError (id) {
  console.log(`Error al obtener el personaje ${id}`)
}

//OBTENER  PERSONAJES en orden aleatorio segun el tiempo de repuest del servidor

// obtenerPersonaje(1)
//   .then( function(personaje) {
//     console.log(`Hola yo soy el personaje 1, ${personaje.name}`)
//     return obtenerPersonaje(2)
//   })
//   .catch(onError)
// obtenerPersonaje(2)
//   .then( function(personaje) {
//     console.log(`Hola yo soy el personaje 2, ${personaje.name}`)
//   })
//   .catch(onError)
// obtenerPersonaje(3)
//   .then( function(personaje) {
//     console.log(`Hola yo soy el personaje 3, ${personaje.name}`)
//   })
//   .catch(onError)
// obtenerPersonaje(4)
//   .then( function(personaje) {
//     console.log(`Hola yo soy el personaje 4, ${personaje.name}`)
//   })
//   .catch(onError)



  ////OBTENER  PERSONAJES en orden a la peticion al encadenar los callback

obtenerPersonaje(1)
.then( function(personaje1) {
  console.log(`Hola yo soy el personaje 1, ${personaje1.name}`)
  return obtenerPersonaje(2)
})
.then(function (personaje2) {
  console.log(`Hola yo soy el personaje 2, ${personaje2.name}`)
  return obtenerPersonaje(3)
})
.then( function(personaje3) {
  console.log(`Hola yo soy el personaje 3, ${personaje3.name}`)
  return obtenerPersonaje(4)
})
.then(function (personaje4) {
  console.log(`Hola yo soy el personaje 4, ${personaje4.name}`)
  return obtenerPersonaje(5)
})
.then( function(personaje5) {
  console.log(`Hola yo soy el personaje 5, ${personaje5.name}`)
  return obtenerPersonaje(6)
})
.then(function (personaje6) {
  console.log(`Hola yo soy el personaje 6, ${personaje6.name}`)
  return obtenerPersonaje(7)
})
.then(function(personaje7) {
  console.log(`Hola yo soy el personaje 7, ${personaje7.name}`)
})
.catch(onError)

