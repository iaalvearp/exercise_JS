/*
En este desafío tendrás que calcular la propina que deben dejar los clientes de un restaurante en función de su consumo.
La función calculateTip recibirá dos parámetros, billAmount que representa el costo total de lo que se haya consumido y tipPercentage que representa el porcentaje de propina a dejar. Ambos valores serán de tipo Number y siempre serán positivos, incluyendo el 0. La función deberá devolver el valor de la propina como un número.
Tendrás inputs y outputs como los siguientes 👇
Ejemplo 1:
Input: calculateTip(100, 10);
Output: 10;
Ejemplo 2:
Input: calculateTip(1524.33, 25);
Output: 381.0825;
*/



export function calculateTip(billAmount, tipPercentage) {
    // Tu código aquí 👈
    if (billAmount <= 0 || tipPercentage <= 0) {
        return "Invalid number!"
    } else {
        let tip = billAmount * (tipPercentage / 100)
        return tip
    }
}

console.log(calculateTip(100, 10))
console.log(calculateTip(1524.33, 25))