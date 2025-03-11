const express = require('express');
const app = express();
const port = 3000;

// Ruta para la secuencia de Collatz
app.get('/collatz', (req, res) => {
    const numero = parseInt(req.query.numero);

    // Validar que el número sea un entero positivo
    if (isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
        return res.status(400).json({
            status: 400,
            error: 'Bad Request',
            message: 'El parámetro "numero" debe ser un entero positivo.'
        });
    }

    // Generar la secuencia de Collatz
    let secuencia = [];
    let n = numero;
    while (n !== 1) {
        secuencia.push(n);
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
    }
    secuencia.push(1); // Agregar el último número (1)

    // Devolver la secuencia como respuesta con código 200 (éxito)
    return res.status(200).json({
        status: 200,
        message: 'Secuencia generada exitosamente.',
        data: {
            numero: numero,
            secuencia: secuencia
        }
    });
});

// Manejo de rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).json({
        status: 404,
        error: 'Not Found',
        message: 'La ruta solicitada no existe.'
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});