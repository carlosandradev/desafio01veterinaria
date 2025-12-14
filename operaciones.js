const fs = require ('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const citasTexto = fs.readFileSync('citas.json', 'utf-8');
  const citas = JSON.parse(citasTexto);
  const nuevaCita={
    nombre: nombre,
    edad: edad,
    animal: animal,
    color: color,
    enfermedad: enfermedad,
  };

  citas.push(nuevaCita);
  fs.writeFileSync('citas.json', JSON.stringify(citas));

  console.log("cita registrada con exito!");
};

const leer = () => {
  const citasTexto = fs.readFileSync('citas.json', 'utf-8');

  const citas = JSON.parse(citasTexto);

  console.log("Estas son todas las citas registradas");
  console.log(citas);  
};



module.exports = {registrar, leer};