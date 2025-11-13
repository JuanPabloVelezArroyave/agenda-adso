// 01. Datos del Aprendiz
const aprendiz = {
  nombre: "Juan Pablo Vélez",
  ficha: "3169901"
};

// 02. Registro de Notas (tres calificaciones diferentes)
const notas = [4.0, 3.2, 4.5];

// 03. Cálculo de Promedio
const promedio = (notas[0] + notas[1] + notas[2]) / notas.length;

// 04. Determinación de Estado
const estado = promedio >= 4.0 ? "Aprobado" : "No Aprobado";

// 05. Salida por consola

console.log("==================\nSISTEMA DE NOTAS SENA\n==================");

console.log(`Nombre: ${aprendiz.nombre}`);
console.log(`Ficha: ${aprendiz.ficha}`);
console.log(`Notas: ${notas.join(", ")}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);
console.log(`Estado: ${estado}`);
