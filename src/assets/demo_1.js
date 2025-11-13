const Nombre = "Juan Pablo ";                                                                                                                                                                                                                                                                                                             
const notas = [3.2, 2.5, 3.0, 1.2];
const Promedio = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`Estudiante: ${Nombre}`);
console.log(`Promedio de Notas: ${Promedio.toFixed(2)}`);
console.log(`Estado: ${Promedio >= 3.5 ? "Aprobado" : "No aprobado"}`);

