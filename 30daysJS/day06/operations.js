'use strict'

export default class createCalculator {
    constructor() {
        this.total = 0;
    }

    add(valor) {
        this.total += valor;
        return this.total
    }

    subtract(valor) {
        this.total -= valor;
        return this.total
    }

    mul(valor) {
        this.total *= valor;
        return this.total
    }

    div(valor) {
        if (valor !== 0) {
            this.total /= valor;
            return this.total
        } else {
            return "No se puede dividir por cero.";
        }
    }

    clear() {
        return this.valor = 0
    }
}
