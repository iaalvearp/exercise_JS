/*// Regular Expresions
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

console.log(suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))*/

/*fetch('https://cel.sri.gob.ec/comprobantes-electronicos-ws/RecepcionComprobantesOffline', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });*/


/*const apiEnrique = 'https://cel.sri.gob.ec/comprobantes-electronicos-ws/RecepcionComprobantesOffline'
const apiSRI = 'https://www.gob.ec/api/v1/'

fetch(apiSRI)
    .then(response => {
        console.log(response.status);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There has been a problem with your fetch operation:', error));*/

import { createClient } from 'soap';

// URL del servicio web SOAP
const url = 'https://cel.sri.gob.ec/comprobantes-electronicos-ws/RecepcionComprobantesOffline?wsdl';

// Opciones de cliente SOAP
const options = {
    forceSoap12Headers: true // Puedes necesitar ajustar estas opciones según las especificaciones del servicio
};

// Llama al método createClient de la biblioteca soap
createClient(url, options, function (err, client) {
    if (err) {
        console.error('Error al crear el cliente SOAP:', err);
        return;
    }

    // Ahora que tenemos el cliente SOAP, podemos llamar a los métodos del servicio
    client.miMetodoSOAP({}, function (err, result) {
        if (err) {
            console.error('Error al llamar al método SOAP:', err);
            return;
        }

        console.log('Respuesta del método SOAP:', result);
    });
});

