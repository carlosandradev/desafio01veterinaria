# Desafío Veterinaria - Node.js

Este proyecto consiste en una aplicación de línea de comandos (CLI) desarrollada en Node.js para gestionar las citas médicas de una veterinaria.

La aplicación permite registrar nuevos pacientes y leer el historial de citas, almacenando la información de manera persistente en un archivo JSON local.

## Estructura del proyecto

El sistema funciona mediante la interacción de tres archivos principales:

1.  **index.js**: Archivo principal de ejecución. Recibe los argumentos desde la terminal y delega la acción a la función correspondiente.
2.  **operaciones.js**: Módulo que contiene la lógica de la aplicación. Incluye las funciones para leer y escribir en la base de datos.
3.  **citas.json**: Archivo de texto en formato JSON que actúa como base de datos para almacenar el historial de registros.

## Instrucciones de uso

Para ejecutar la aplicación es necesario tener instalado Node.js. Abre la terminal en la carpeta del proyecto y utiliza los siguientes comandos:

### 1. Registrar una nueva cita
Para agregar un paciente, se debe ejecutar el archivo principal seguido de la orden "registrar" y los datos del animal (Nombre, Edad, Tipo, Color, Enfermedad).

Ejemplo:
node index.js registrar Benito "2 años" perro blanco vomitos

### 2. Leer las citas registradas
Para visualizar en consola el listado de todas las citas almacenadas, se utiliza la orden "leer".

Ejemplo:
node index.js leer

## Criterios técnicos

Este desarrollo cumple con los siguientes requerimientos de la evaluación:

* **File System (fs):** Uso de los métodos `readFileSync` y `writeFileSync` para la manipulación de archivos del sistema.
* **Modularización:** Separación de responsabilidades importando y exportando funciones entre `operaciones.js` e `index.js`.
* **Argumentos de consola:** Captura y manejo de datos ingresados por el usuario mediante `process.argv`.
