// Ejercicio 3: Literales de Objetos

const estudiante = {
  nombre: "Brayan Murcia",
  edad: 22,
  carrera: "Ingeniería de sistemas",
  semestre: 9,
  descripcion(): string {
    return `${this.nombre}, ${this.edad} años, estudiante de ${this.carrera}, semestre ${this.semestre}.`;
  },
};

console.log(estudiante.descripcion());
