
// CREAR OBJETOS MYCAR & PAOLASCAR
/* const myCar = {
    marca: "Seat",
    modelo: "Ibiza",

arrancar() {
console.log("el coche " + this.marca +  " ha arrancado");
} ,
};

const PaolasCar = {
    marca: "Marca2",
    modelo: "modelo2",

    arrancar() {
        console.log("el coche ha arrancado");
    }
}

console.log(myCar.marca); */


// CREAR OBJETO PERSONA
/* const persona = {
    nombre: "Andreea",
    edad: "35",
    
    saludar() {
        console.log("Hola mi nombre es " + this.nombre + " y tengo" + persona.edad + " años");
    },
}; */


// CREAR CLASE CAR
/* class Car {
    marca;                              // estan vacios, para poder ser utilizados en todos los coches
    modelo;

    constructor (marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    arrancar() {
        console.log("el coche " + this.marca +  " ha arrancado");
    }
}

let myCar = new Car("Seat", "Ibiza");
console.log(myCar);
myCar.arrancar();

let moniCar = new Car("Ferrari", "Testarrosa");
console.log(moniCar);
moniCar.arrancar();


// CREAR CLASE LIBRO
class Libro {
    titulo;
    autor;

constructor (titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
}

    detalles() {
        console.log("El libro " + this.titulo + " fue escrito por " + this.autor)
    }
};

let myLibro = new Libro("Autor1", "Titulo1");
console.log(myLibro);
myLibro.detalles();*/


// HERENCIAS DE CLASES

class Vehiculo {
    marca;
    constructor(marca) {
        this.marca = marca;
    }


alquila() {
    console.log("se ha alquilado " + this.marca);
}
}

class Car extends Vehiculo {     // Puede utilizar el constructor de arriba
    constructor(marca) {
        super(marca);
    }
}
let yourCar = new Car("Ford");
yourCar.alquila();

class Moto extends Vehiculo  {

}

// **** Practica Herencias

/* class Empleado {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }

    trabajar() {
        console.log(this.nombre + " está trabajando")
    }
} 

class Desarrollador extends Empleado {
    lenguaje;
    constructor(nombre, lenguaje) {
        super(nombre);
        this.lenguaje = lenguaje;
    }

    programar() {
        console.log(this.nombre + " está programando en " + this.lenguaje)
    }
}

let unDesarrolador = new Desarrollador("persona", "Java");
unDesarrolador.programar();

// ***** ENCAPSULAMIENTO
//screenshot 22 Oct 15:15

// **** Practica Encapsulamiento

class CajaFuerte {
    #clave;

    establecerClave(clave) {
        this.#clave = clave;
    };

    abrirCaja(claveIngresada) {
        if (claveIngresada == this.#clave);
    }
}

let cajaFuerte = new CajaFuerte();
cajaFuerte.establecerClave("pass123456");
cajaFuerte.abrirCaja("pass123456"); */

// **** Practica Polimorfismo

/* class Empleado {
    calcularSalario() {
        console.log('Salario base');
    }
};

class EmpleadoTiempoCompleto extends Empleado {
    calcularSalario() {
    console.log('Salario de tiempo completo');
}
};

class EmpleadoMedioTiempo extends Empleado {
    calcularSalario() {
    console.log('Salario de medio tiempo');
}

};

let empleado = new Empleado;
let empleadoTiempoCompleto = new EmpleadoTiempoCompleto;
let empleadoMedioTiempo = new EmpleadoMedioTiempo;


empleados.forEach(empleado => {
    empleados.calcularSalario();
});

screenshot 16:21   */ 

