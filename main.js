// Regular Expresions
let text = 'Este es sólo un texto de prueba para probar las famosas expresiones regulares, las cuales, según mi criterio, pueden estar sirviendo para las búsquedas en tiendas online o páginas web de tipo eccommerce.'

// If I take off the i character result gonna be false, 'cause the i make Caps and Lower the same
let regex = /De/i

console.log(regex.test(text))

// Reserved word 'arguments'

function suma() {
    let suma = 0
    for (let numero of arguments) {
        suma += numero
    }
    return suma
}

console.log(suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))