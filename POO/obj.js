// classe pai Celular
class Celular {
    constructor(modelo, marca, memoria) {
        this.memoria = memoria;
        this.marca = marca;
        this.modelo = modelo;
    }

    desbloquearCelular() {
        console.log("Você desbloqueou seu celular!");
    }
}

// classes filhas
class CelularGamer extends Celular {
    constructor(modelo, marca, memoria, tela, rgb) {
        super(modelo, marca, memoria);
        this.rgb = rgb;
        this.tela = tela;
    }
}

class GamerPremium extends CelularGamer {
    constructor(modelo, marca, memoria, tela, rgb, cooler) {
        super(modelo, marca, memoria, tela, rgb);
        this.cooler = cooler;
    }
}


// instâncias das classes
let cel = new Celular('G24', 'Motorola', '8GB');
console.log(cel);
cel.desbloquearCelular(); // chamada de método

let cel1 = new CelularGamer('POCO 6Pro', 'Xiaomi', '8GB', '120Hz', false);
console.log(cel1);

let cel2 = new GamerPremium("RedMagicPro", "Nubia", "32GB", "240Hz", true, true);
console.log(cel2);