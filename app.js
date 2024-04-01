const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi aplicación Express!');
});

app.get('/clientes', (req, res) => {
    const clientes = ['Mostrando clientes','Alan Garcia', 'Dina Boluarte', 'Pedro Castillo'];
    let listaClientes = '';
    for (const cliente of clientes) {
        listaClientes += cliente + '<br>';
    }
    res.send(listaClientes);
});

app.get('/productos', (req, res) => {
    const productos = ['Mostrando productos','Arma de fuego', 'Un Rolex', 'Un pollo'];
    let listaProductos = '';
    for (const producto of productos) {
        listaProductos += producto + '<br>';
    }
    res.send(listaProductos);
});

const PORT = 10150;
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
