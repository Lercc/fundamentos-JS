class Persona {

    constructor (pNom, pApp, pHeight) {
        this.nombre = pNom
        this.apellido = pApp
        this.altura = pHeight
    }

    saludar (fn) {
        // let nombre = this.nombre 
        // let apellido = this.apellido 
        var { nombre, apellido } = this

        console.log(`Hola, mi nombre es ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre,apellido,false)
        }
    }
    soyAlto () {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {

    constructor(pNom, pApp, pHeight, exp) {
        super(pNom, pApp, pHeight)
        this.experiencia =  exp
    }

    saludar(fn) {
        let { nombre, apellido } = this
        console.log(`Hola, mi nombre es ${nombre} ${apellido}, y soy programador`)
        
        if (fn) {
            fn(nombre,apellido,true)
        }
    }
}

function responderSaludo(pNom,pApp,dev) {
    console.log(`Hola que tal!! ${pNom} ${pApp}`)
    if(dev) {
        console.log(`a mira no sabia que eras dev`)
    }
}

var Sacha = new Persona('Sacha','Lifsyc', 1.72)
var Julio = new Persona('Julio','Ramirez', 1.75)
var Luis = new Desarrollador('Luis','Roque', 1.65, 10)

Sacha.saludar()
Julio.saludar(responderSaludo)
Luis.saludar(responderSaludo)
