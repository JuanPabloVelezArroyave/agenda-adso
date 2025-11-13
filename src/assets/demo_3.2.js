// ==============================
//   SISTEMA DE NOTAS SENA (ES6+)
// ==============================

// 01. Datos del Aprendiz
const aprendiz = {
  nombre: "Juan Pablo Vélez",
  ficha: "3169901",
};

// 02. Registro de Notas (tres calificaciones diferentes)
const notas = [4.0, 3.2, 4.5];

// 03. Cálculo de Promedio usando reduce()
const promedio = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

// 04. Determinación de Estado con operador ternario
const estado = promedio >= 4.0 ? "Aprobado" : "No Aprobado";

// 05. Salida por consola utilizando Template Literals multilínea
console.log(`
===========================
   SISTEMA DE NOTAS SENA
===========================

Nombre: ${aprendiz.nombre}
Ficha: ${aprendiz.ficha}
Notas: ${notas.join(", ")}
Promedio: ${promedio.toFixed(2)}
Estado: ${estado}
`);
