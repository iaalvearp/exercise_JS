'use strict'

export default class createCalculator {
    constructor() {
        this.total = 0;
    }

    add(inputNum) {
        this.total += inputNum;
        return this.total
    }

    subtract(inputNum) {
        this.total -= inputNum;
        return this.total
    }

    mul(inputNum) {
        this.total *= inputNum;
        return this.total
    }

    div(inputNum) {
        if (inputNum !== 0) {
            this.total /= inputNum;
            return this.total
        } else {
            return "No se puede dividir por cero.";
        }
    }

    getTotal() {
        return this.total
    }

    clear() {
        return this.total = 0
    }
}
