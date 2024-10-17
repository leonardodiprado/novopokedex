class Pokemon {
    constructor(nome, tipo, altura, peso, nivelDePoder) {
        this.nome = nome;
        this.tipo = tipo;
        this.altura = altura;
        this.peso = peso;
        this.nivelDePoder = nivelDePoder;
    }

    mostrarInfo() {
        return `Nome: ${this.nome}, Tipo: ${this.tipo}, Altura: ${this.altura}m, Peso: ${this.peso}kg, Nível de Poder: ${this.nivelDePoder}`;
    }
}

module.exports = Pokemon;
