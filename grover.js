// ***** Exercicios para aprender JavaScript, por Grover Vásquez en su curso de Udemy

//** USO DE VARIABLES
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

//** OPERADORES MATEMATICOS +, -, *, /

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

//***** OPERADORES LÓGICOS, UNARIOS Y DE ASIGNACIÓN

//** Lógicos <, >, <=, >=, ==   ----- utilizados para hacer comparaciones

/* var edadAna, edadMaria, diferenciaEdad;
edadAna = 34;
edadMaria = 28;

var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

//** Unarios ++ Incremento, -- Decremento

edadAna++;
console.log(edadAna);

//** Asignación +=, -=, *=, /=, %=
var a = 11;
var b = 5;
var c = a % 5;     //Residuo o resto de una división. 5*2 = 10. Me devuelve 1 de 11.
console.log(c);

a += b;            // a = a + b;
console.log(a); */

//** SENTENCIAS Y ESTRUCTURAS DE CONTROL: if else, if anidados, switch, for, while, do while 

//** If Else     if (contition) sentencia1 [else sentencia 2]

/* var nombre = "Grover";
var esCasado = false;

if (esCasado == true) {
    console.log(nombre + ' es casado ')
} else {
    console.log(nombre + ' es soltero')
}  */

//** SENTENCIAS LÓGICAS   Not, And, Or

/* var nombre = "Grover";
var edad = 63;

// edad < 12 es un niño
// edad > 11 es < 18, es un adolescente
// edad > 17, es < 60, es un adulto
// edad > 60, es un anciano

if (edad < 12) {
    console.log(nombre + ' es un niño ');
} else if((edad > 11) && (edad < 18)) {
    console.log(nombre +  ' es un adolescente ');
} else if((edad > 17) && (edad < 60)) {
console.log(nombre + ' es un adulto ')
} else {
    console.log(nombre + ' es un anciano')
} */ 

//** SENTENCIA SWITCH 

/* var mes = 6;
switch(mes) {
    case 1:
        console.log('Enero');
        break
    case 2:
        console.log('Febrero');
        break
    case 3:
        console.log('Marzo');
        break
    case 4:
        console.log('Abril');
        break
    case 5:
        console.log('Mayo');
        break
    default:
        console.log('Mes no encontrado');
} */ 

//** SENTENCIA FOR

// for ([expresion-inicial]; [condición], [expresión-final])sentencia;

/* for (var i=5; i <= 25; i+=5){
    console.log(i);
}


//** ESTRUCTURAS WHILE, DO WHILE

var i = 1;
while (i<5) {
   console.log(i++); 
} */

//** SENTENCIA DO WHILE

/* var i =1;
do{
    console.log(i);
    i++;
}while(i <= 10);
*/


// ***** FUNCIONES  - 3 maneras de llamar a las funciones: llamarlas directamente, cuando le enviamos un argumento, cuando nos retorna un valor

function mensaje1(){
    console.log('Mensaje desde la función')
}
mensaje1();


function mensaje2(msj){
    console.log(msj);
}
var msj = 'Mensaje como argumento de la función';
mensaje2(msj);


function mensaje3(){
    return 'Mensaje como devolución de la función';
}
var msj2 = mensaje3();
console.log(msj2);

//** ARGUMENTOS DE LAS FUNCIONES

/* function sumar1(a, b, c) {
    return a + b + c;
}
var result = sumar1(4, 5, 8);
console.log(result);


function sumar2(a, b, c=3) {
    return a + b + c;
}
var result2 = sumar2(3, 7);
console.log(result2);


var sumar3 = function (a, b, c) {
    return a + b + c;
}
var result3 = sumar3(1, 5, 3);
console.log(result3); */

//** FUNCIONES PREDEFINIDAS



