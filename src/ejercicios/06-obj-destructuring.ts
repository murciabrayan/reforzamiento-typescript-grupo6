// Ejercicio 6: Desestructuración de Objetos

const estudianteObj = {
  nombre: "Fernando Cordoba",
  edad: 21,
  carrera: "Ingenieria",
  semestre: 5,
};

const { nombre: nombreEst, carrera } = estudianteObj;

console.log("Nombre:", nombreEst);
console.log("Carrera:", carrera);
