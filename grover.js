// Exercicios para aprender JavaScript, por Grover Vásquez en su curso de Udemy

// USO DE VARIABLES
/* console.log("Hola a todos");
console.log(5 + 5);

var nombre = "Grover";
console.log(nombre);
console.log(typeof(nombre));

var edad = 34;
console.log(edad);
console.log(typeof(edad));

var sueldo = 1900.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo);
puestoDeTrabajo = null;
console.log(puestoDeTrabajo); */

// OPERADORES MATEMATICOS +, -, *, /

/* var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 34;
edadMaria = 28;
yearActual = 2024;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;
yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nació Ana ' + yearAna);
console.log('Año en que nació Maria ' + yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 2); */ 

// OPERADORES LÓGICOS, UNARIOS Y DE ASIGNACIÓN

// Lógicos <, >, <=, >=, ==   ----- utilizados para hacer comparaciones

var edadAna, edadMaria, diferenciaEdad;
edadAna = 34;
edadMaria = 28;

var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

// Unarios ++ Incremento, -- Decremento

edadAna++;
console.log(edadAna);

// Asignación +=, -=, *=, /=, %=
var a = 11;
var b = 5;
var c = a % 5;     //Residuo o resto de una división. 5*2 = 10. Me devuelve 1 de 11.
console.log(c);

a += b;            // a = a + b;
console.log(a);