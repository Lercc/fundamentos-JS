const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const CHARACTER_URL = `${API_URL}${PEOPLE_URL.replace(':id',2)}`
const OPTS = { crossDomain:true }

// $.get(CHARACTER_URL, OPTS, function (character) {
//   console.log(`Hola yo soy, ${character.name}`)
// })

function obtenerPersonaje (pId) {
  let chatr = `${API_URL}${PEOPLE_URL.replace(':id',pId)}`
  $.get(chatr, OPTS, function (character) {
    console.log(`Hola yo soy, ${character.name}`)
  })
  
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

/**
 * en la consola el resulado no siempre sera en orden a la peticin 1,2,3.
 * Eso es porque si bien en la CALL STACK se ejecutan enorden, cuando pasan a
 * el WEB API el tiempo de respuesta del servidor que devuelve los datos es
 * diferenten en cada uno, se puede demorar mas o menos, asique eso quiere decir
 * las respuestas llegaran en distinto oredn a la CALLBACK QUEUE por ende se 
 * ejecutara en distinto orden en la CALLSTACK,  cumplienco asi el EVENT LOOP en js 
 */


 
