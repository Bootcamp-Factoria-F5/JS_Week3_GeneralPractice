
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
class Car {
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
myLibro.detalles();