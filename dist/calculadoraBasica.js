class Somador {
    calcular(numero1, numero2) {
        return numero1 + numero2;
    }
}
class Subtrator {
    calcular(numero1, numero2) {
        return numero1 - numero2;
    }
}
class Multiplicador {
    calcular(numero1, numero2) {
        return numero1 * numero2;
    }
}
class Divisor {
    calcular(numero1, numero2) {
        if (numero2 === 0) {
            throw new Error("Divisão por zero não é permitida");
        }
        return numero1 / numero2;
    }
}
export { Somador, Subtrator, Multiplicador, Divisor };
