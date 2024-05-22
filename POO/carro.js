class Carro {
    constructor(modelo, cor, marca, eletrico, ano) {
        this.modelo = modelo;
        this.cor = cor;
        this.marca = marca;
        this.eletrico = eletrico;
        this.ano = ano;
    }

    modeloCarro() {
        console.log(`O modelo é o ${this.modelo} e a marca ${this.marca}`);
    }

    carroEletrico() {
        if (this.eletrico) {
            console.log("Esse carro pode ser movido à eletricidade");
        } else {
            console.log("Esse carro não tem combustível elétrico");
        }
    }
}

// let carro = new Carro("Honda Civic Híbrido", "Vermelho", "Honda", true, 2023);
// let carro2 = new Carro("Fusca", "Preto", "Volkswagen", false, 1988);

// carro.modeloCarro();
// carro.carroEletrico();

// console.log(" ");

// carro2.modeloCarro();
// carro2.carroEletrico();

