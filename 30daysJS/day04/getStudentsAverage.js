/*Clase 19 – Obtén el promedio de los estudiantes
En este desafío, deberás calcular el promedio general de una clase, así como el promedio individual de cada estudiante.
Para ello, se te proporcionará un array de objetos, cada uno de los cuales representará a un estudiante y tendrá las siguientes propiedades:
    • name: El nombre del estudiante
    • grades: Las notas de cada materia del estudiante
A partir de esta información, debes retornar un nuevo objeto que tenga la propiedad classAverage con el promedio de la clase y un array de students con los estudiantes y sus promedios individuales.
Es importante mencionar que los promedios deben ser calculados con precisión y se deben redondear a dos decimales para que los test pasen sin problema alguno. Puedes usar el método toFixed() el cual se usa de la siguiente manera 👇
const number = 100.32433;
number.toFixed(2); // "100.32"
👀 Ten en cuenta que este método regresa el número como un string y se espera que sea de tipo numérico.
Ejemplo:
Input: getStudentAverage([
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
])

Output: {
  classAverage: 88.17,
  students: [
    {
      name: "Pedro",
      average: 88.75
    },
    {
      name: "Jose",
      average: 88.5
    },
    {
      name: "Maria",
      average: 87.25
    }
  ]
}
*/

export function getStudentAverage(students) {
    // Tu código aquí 👈
    let sumGrades = students.map(student => {
        let len = student['grades']
        return { name: student.name, grades: student['grades'].reduce((acc, cur) => acc + cur) / len.length }
    }, 0)
    let classAverage = sumGrades.map(grade => grade['grades'])
    return {
        classAverage: parseFloat((classAverage.reduce((acc, cur) => acc + cur, 0) / classAverage.length).toFixed(2)),
        students: sumGrades
    }
}

console.log(getStudentAverage([
    {
        name: "Pedro",
        grades: [90, 87, 88, 90],
    },
    {
        name: "Jose",
        grades: [99, 71, 88, 96],
    },
    {
        name: "Maria",
        grades: [92, 81, 80, 96],
    },
]))