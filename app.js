const express = require('express');
const Pokemon = require('./src/models/pokemon');

const app = express();
const port = 3000;

// Criar um Pokémon de exemplo
const pikachu = new Pokemon('Pikachu', 'Elétrico', 0.4, 6.0, 90);

// Rota principal para exibir as informações do Pokémon
app.get('/', (req, res) => {
    res.send(pikachu.mostrarInfo());
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
