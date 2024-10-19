// Ejercicios para aprender JavaScript durante el Bootcamp F5 - 18 October 2014

//let usuario = {};

// EJERCICIO 1: crea una función que reciba un número y retorne el mismo número

/* function easy(numero) {
  let variable = "el dato";
  return numero;
} */

// no hacemos console.log para funciones, las probamos con casos concretos fuera de la func.

/* let result = easy(2);
console.log(result); */

// crea una función llamada saludar que tome un nombre como parámetro
// y retorne un saludo estilo "hola + nombre"

/* function saludar(name) {
  return "Hola " + name
}

let result = saludar("Amr");
console.log(result); */

// EJERCICIO 2: Escribe una función sumaArray que reciba un array de números
// Retornar la suma de todos los números -> implementar la función con un bucle

/* function sumaArray(numeros) {
  let suma = 0;
  for (let index = 0; index < numeros.length; index++) {
    suma += numeros[index];
  }
  return suma;
}

const numberList = [1, 2, 3, 4, 5];
let result = sumaArray(numberList);
console.log(result); */

// EJERCICIO 3: Retornar la suma de todos los números pares -> implementar la función con un bucle

/* function sumaPares(numeros) {
  let suma = 0; //inicializar la suma

  for (let item of numeros) {
    if (item % 2 == 0) {
      suma += item;
    }
  }
  return suma;
}
//CASO DE PRUEBA

// array de numeros
let arrayDeNumeros = [4, 6, 3, 1, 7, 8];

// ejecutar la función
let resultado = sumaPares(arrayDeNumeros);

// comprobar el resultado
console.log(resultado); */

// EJERCICIO 4: Escribe una función createUser que reciba un nombre de usuario, una edad

/* function createUser(name, age) {
  const user = {
    nombre: name,
    edad: age,
  };
  return user;
}

//retorne un objeto user

//hacer la función

//CASO  DE PRUEBA

let resultado = createUser("Elena", 20);
console.log(resultado); */

// EJERCICIO 5: Escribe una función que reciba una lista de usuarios {nombre, edad}
// Retornar una lista de los usuarios que sean mayores de edad

/* function filterAdultUsers(users) {
  const listAdultUsers = [];

  for (const user of users) {
    if (user.age >= 18) {
      listAdultUsers.push(user);
    }
  }
  return listAdultUsers;
}

// CASO DE PRUEBA

const listUsers = [
  {
    name: "Pablo",
    age: 30,
  },
  {
    name: "Paloma",
    age: 3,
  },
  {
    name: "Kiki",
    age: 18,
  },
];

// Ejecutamos la función
let result = filterAdultUsers(listUsers);

// Comprobrar el resultado
console.log(result); */

// VERSION CON FILTRO

function filterAdults(users) {
  const filteredUsers = users.filter((user) => user.edad >= 18);
  return filteredUsers;
}

// CASO PRUEBA
const userList = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Maria", edad: 18 },
  { nombre: "Pedro", edad: 32 },
  { nombre: "Luis", edad: 16 },
  { nombre: "Ana", edad: 28 },
];

const result = filterAdults(userList);
console.log(result);
