/*Clase 20 – Buscador de palíndromos – Día 5
En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras.
Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista, la función debe devolver null. Si hay más de un palíndromo con la misma longitud máxima, debes devolver el primer palíndromo encontrado en la lista.
Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como hacia atrás.
Ejemplo 1:
Input: findLargestPalindrome(["racecar", "level", "world", "hello"])

Output: "racecar"
Ejemplo 2:
Input: findLargestPalindrome(["Platzi", "javascript", "html", "css"])

Output: null
*/

export function findLargestPalindrome(words) {
    // Tu código aquí 👈
    let result = []
    let output = ''
    let reversedWords = words.map(word => {
        let reverseWord = ''
        for (let i = word.length - 1; i >= 0; i--) {
            let letter = word[i]
            reverseWord += letter
        }
        return reverseWord.toLowerCase()
    })
    reversedWords.map((word, i) => {
        if (words[i] === word) result.push(words[i])
    })
    if (result.length > 0) {
        let toCompare = 0
        for (let i = 0; i < result.length; i++) {
            let len = result[i].length
            if (len > toCompare) output = result[i]
            return output
        }
    } else return null
}

console.log(findLargestPalindrome(["racecar", "level", "world", "hello"]))
console.log(findLargestPalindrome(["Platzi", "javascript", "html", "css"]))

