const {registrar, leer} = require('./operaciones');

const operacion = process.argv[2];
const nombre = process.argv[3];
const edad = process.argv[4];
const animal = process.argv[5];
const color = process.argv[6];
const enfermedad = process.argv[7];

if (operacion === 'registrar') {
  registrar(nombre, edad, animal, color, enfermedad);
}

if (operacion === 'leer') {
  leer();
}

