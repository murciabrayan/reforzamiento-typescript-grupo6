// Ejercicio 5: Funciones

function calcularPromedio(notas: number[]): number {
  let suma: number = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  return suma / notas.length;
}

const notas: number[] = [4.0, 3.5, 4.8, 5.0];
const promedioNotas = calcularPromedio(notas);

console.log("Notas:", notas);
console.log("Promedio con función:", promedioNotas.toFixed(2));
