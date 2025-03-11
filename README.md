EXPLICACION DE COMO SE DEFINE LA RUTA



Se importa  express, es un framework de Node.js para construir aplicaciones web y APIs.
app: Se crea una instancia de la aplicación Express. Esta instancia se usa para definir rutas.
port: Se define el puerto en el que el servidor escuchará las solicitudes.  el puerto es 3000
200 (OK): Indica que la solicitud fue exitosa y se devuelve la secuencia de Collatz.
400 (Bad Request): Indica que la solicitud es inválida el parámetro numero no es un entero positivo
404 (Not Found): Indica que la ruta solicitada no existe en el servidor.




La ruta está definida para el método GET, lo que significa que el servidor responderá a solicitudes GET en la ruta /collatz.
req.query.numero: Obtiene el valor del parámetro numero de la consulta query string.
parseInt(req.query.numero): Convierte el valor del parámetro numero a un número entero. 
Si alguna de estas condiciones no se cumple, se devuelve una respuesta con un código de estado 400 (Bad Request) 

LOGICA

Se inicializa un arreglo vacío secuencia para almacenar los números de la secuencia.
Se usa un bucle while para generar la secuencia:
Si el número es par, se divide por 2.
Si el número es impar, se multiplica por 3 y se suma 1.
El proceso se repite hasta que el número sea 1.


Si el número es válido, se devuelve una respuesta con un código de estado 200 (OK) y un objeto JSON que incluye:

El número inicial. La secuencia generada.


INICIA LA CONEXCION

app.listen(port,: Inicia el servidor y lo hace escuchar en el puerto especificado
Callback: Cuando el servidor está listo, se ejecuta la función de callback, que imprime un mensaje en la consola indicando que el servidor está corriendo.



