/**
 * HERENCIA
 */
function HeredaDe (prototipoHijo,prototipoPadre) {
    var fn =  function() {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.construct = prototipoHijo   
}
/**
 * PROTOTIPOS
 */
function Persona(pNom, pApp, pHeight) {
    this.nombre = pNom
    this.apellido = pApp
    this.altura = pHeight
}
//los metodos se crean mediante prototype
Persona.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}



function Desarrollador(pNom, pApp) {
    this.nombre = pNom
    this.apellido = pApp
}
HeredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}, y soy programador`)
}



// new crea un nuevo objeto con el prototipo de tipo Persona
var Sacha = new Persona('Sacha','Lifsyc', 1.72)
var Luis = new Desarrollador('Luis','Roque', 1.65)

/**
 * THIS : en las arrow funtions, this hace referencia a el objeto Windows
 */