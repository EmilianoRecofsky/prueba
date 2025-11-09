// utils.js

// Suma todos los números de un array
function sumarNumeros(numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}

// Resta dos números
function restar(a, b) {
  return a - b;
}

// Multiplica dos números
function multiplicar(a, b) {
  return a * b;
}

// Divide dos números (controlando división por cero)
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

// Calcula el promedio de una lista de números
function promedio(numeros) {
  if (numeros.length === 0) return 0;
  return sumarNumeros(numeros) / numeros.length;
}

// Devuelve el número mayor de un array
function maximo(numeros) {
  return Math.max(...numeros);
}

// Devuelve el número menor de un array
function minimo(numeros) {
  return Math.min(...numeros);
}

// Exportar funciones (para Node.js)
module.exports = {
  sumarNumeros,
  restar,
  multiplicar,
  dividir,
  promedio,
  maximo,
  minimo,
};
