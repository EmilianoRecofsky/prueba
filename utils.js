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

// Calcula la mediana de una lista de números
function mediana(numeros) {
       if    (numeros.length === 0) return 0;

  // Ordenar los números
  const ordenados = [...numeros].sort((a, b) => a - b);
  
	const mitad = Math.floor(ordenados.length / 2);

  // Si la cantidad es par promedia los dos del medio
  if (ordenados.length % 2 === 0) {
    return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
  } else {    return ordenados[mitad];
  }
}

