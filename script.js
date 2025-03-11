const express = require('express');
const app = express();
const port = 3000;

// Ruta para la secuencia de Collatz
app.get('/collatz', (req, res) => {
    const numero = parseInt(req.query.numero);


    if (isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
        return res.status(400).json({ error: 'El parámetro "numero" debe ser un entero positivo.' });
    }

    res.send(`Número válido: ${numero}`);
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});