
// - - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -
// - - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -
// - - - - - - - - - -- - - - - - Namespace EJEMPLO 1 - - - -- - - - - - - - - -- - - - - - - -
// - - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -

console.log('---- EJEMPLO 1 ----');

// namespace global
var MIAPLICACION = MIAPLICACION || {};

MIAPLICACION.metodoComun = {
  regExParaNombre: "", // define regex para la validación del nombre
  regExParaTelefono: "", // define regex para validación del teléfono
  validaNombre: function(nombre){
    // Hace algo con el nombre que usted ingresa a la variable regExParaNombre 
    // usando "this.regExParaNombre"
  },

  validaNroTelefono: function (numTelefono){
    // Hace algo con el número de teléfono
  }
}

// Objeto junto a la declaración del método
MIAPLICACION.event = {
  addListener: function(el, type, fn){
    // código de relleno
    return el + type + fn;
  },
  removeListener: function(el, type, fn){
    // código de relleno
  },
  getEvent: function(e) {
    // código de relleno
  }

  // Puedes agregar otras propiedades y métodos
}

// Sintaxis de utilización del método addListener:
//MIAPLICACION.event.addListener("turel", "tipo", callback); error callback is no definido
var add = MIAPLICACION.event.addListener("turel", "tipo", "callback");
console.log(add);




// - - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -
// - - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -
// - - - - - - - - - - - - -  EL OBJETO EJEMPLO 2 - - - -- - - - - - - - - -- - - - - - - -
// - - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -

console.log('---- EJEMPLO 2 ----');

function Persona(primerNombre) {
  this.primerNombre = primerNombre;
}

var persona1 = new Persona("Alicia");
var persona2 = new Persona("Sebastian");


// Muestra el primer nombre de persona1
console.log('persona1 es ' + persona1.primerNombre); // muestra "persona1 es Alicia"
console.log('persona2 es ' + persona2.primerNombre); // muestra "persona2 es Sebastian"



// - - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -
// - - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -
// - - - - - - - - - -- - - - - - - - METODOS EJEMPLO 3 - - - -- - - - - - - - - -- - - - - - - -
// - - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -

console.log('---- EJEMPLO 3 ----');

function Persona2(primerNombre) {
  this.primerNombre = primerNombre;
}

Persona2.prototype.diHola = function() {
  console.log('Hola, Soy ' + this.primerNombre);
};

var persona1 = new Persona2("Alicia");
var persona2 = new Persona2("Sebastian");

// Llamadas al método diHola de la clase Persona.
persona1.diHola(); // muestra "Hola, Soy Alicia"
persona2.diHola(); // muestra "Hola, Soy Sebastian"




// - - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -
// - - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -
// - - - - - - - - - -- - - - - - - - HERENCIA EJEMPLO 4 - - - -- - - - - - - - - -- - - - - - - -
// - - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -

console.log('---- EJEMPLO 4 ----');


// Definimos el constructor Persona3
function Persona3(primerNombre) {
  this.primerNombre = primerNombre;
}

// Agregamos un par de métodos a Persona3.prototype
Persona3.prototype.caminar = function() {
  console.log("Estoy caminando!");
};
Persona3.prototype.diHola = function(){
  console.log("Hola, Soy" + this.primerNombre);
};

// Definimos el constructor Estudiante
function Estudiante(primerNombre, asignatura) {
  // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
  // ha establecido correctamente durante la llamada
  Persona3.call(this, primerNombre);

  //Inicializamos las propiedades específicas de Estudiante
  this.asignatura = asignatura;
};

// Creamos el objeto Estudiante.prototype que hereda desde Persona3.prototype
// Nota: Un error común es utilizar "new Persona3()" para crear Estudiante.prototype 
// Esto es incorrecto por varias razones, y no menos importante que no le estamos pasando nada
// a Persona3 desde el argumento "primerNombre". El lugar correcto para llamar a Persona3
// es arriba, donde llamamos a Estudiante.
Estudiante.prototype = Object.create(Persona3.prototype);    // Vea las siguientes notas

// Establecer la propiedad "constructor" para referencias a Estudiante
Estudiante.prototype.constructor = Estudiante;

// Reemplazar el método "diHola"
Estudiante.prototype.diHola = function(){
  console.log("Hola, Soy " + this.primerNombre + ". Estoy estudiando " + this.asignatura + ".");
};

// Agregamos el método "diAdios"
Estudiante.prototype.diAdios = function() {
  console.log("¡ Adios !");
};

// Ejemplos de uso
var estudiante1 = new Estudiante("Carolina", "Física Aplicada");
estudiante1.diHola();    // muestra "Hola, Soy Carolina. Estoy estudianto Física Aplicada."
estudiante1.caminar();   // muestra "Estoy caminando!"
estudiante1.diAdios();   // muestra "¡ Adios !"

// Comprobamos que las instancias funcionan correctamente
console.log(estudiante1 instanceof Persona3);      // devuelve true
console.log(estudiante1 instanceof Estudiante);   // devuelve true



// - - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -
// - - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -
// - - - - - - - - - -- - - - - - - - ENCAPSULACION EJEMPLO 5 - - - -- - - - - - - - - -- - - - - - - -
// - - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -

console.log('---- EJEMPLO 5 ----');