const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi aplicación Express!');
});

app.get('/clientes', (req, res) => {
    const clientes = ['Alan Garcia', 'Dina Boluarte', 'Pedro Castillo'];
    res.send(clientes.join(', ')); // Concatenamos los nombres y los enviamos
});

app.get('/productos', (req, res) => {
    const productos = ['Arma de fuego', 'Un Rolex', 'Un pollo'];
    res.send(productos.join(', ')); // Concatenamos los productos y los enviamos
});

const PORT = 10101;
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
