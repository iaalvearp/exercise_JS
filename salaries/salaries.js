const employees = []

const addingEmployees = (name, salary) => employees.push({ "name": name, "salary": salary })

addingEmployees("luis", 460)
addingEmployees("jose", 600)
addingEmployees("juan", 520)
addingEmployees("mateo", 400)
addingEmployees("julio", 500)
addingEmployees("juana", 800)
addingEmployees("natalia", 1000)
addingEmployees("jenni", 460)
addingEmployees("domingo", 520)
addingEmployees("omar", 480)
addingEmployees("glow", 400)
addingEmployees("marcos", 800)

console.log(employees)

export default employees