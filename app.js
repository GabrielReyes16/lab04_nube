const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi aplicación Express!');
});

app.get('/clientes', (req, res) => {
    res.send('Alan Garcia');
    res.send('Dina Boluarte');
    res.send('Pedro Castillo');
});

app.get('/productos', (req, res) => {
    res.send('Mostrando 3 productos...');
    es.send('Arma de fuego');
    es.send('Un Rolex');
    es.send('Un pollo')
});

const PORT = 10101;
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
